"use server";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn } from "../auth";
import { prisma } from "../lib/prisma";

const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;
    return someError.cause;
  }
  redirect("/manage"); // when you log in, redirect to the manage page
};

const register = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Please fill all fields");
  }

  // existing user
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hash(password, 12);

  await prisma.user.create({ data: { email, password: hashedPassword } });
  redirect("/login");
};

const fetchAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const fetchAllApplications = async () => {
  const applications = await prisma.application.findMany();
  console.log(applications);
  return applications;
};

const deleteApplication = async (id) => {
  const deleteApp = await prisma.application.delete({where: {id: id} });
  return deleteApp;
}

export {
  register,
  login,
  fetchAllUsers,
  fetchAllApplications,
  deleteApplication,
};
