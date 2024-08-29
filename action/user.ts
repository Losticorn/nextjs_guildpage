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
  try {
    // Check if the application exists
    const application = await prisma.application.findUnique({
      where: { id: id },
    });

    if (!application) {
      console.error(`Application with ID ${id} does not exist.`);
      return; // Optionally, you could throw an error or handle it differently
    }

    // Proceed with deletion if the application exists
    const deletedApplication = await prisma.application.delete({
      where: { id: id },
    });

    console.log('Deleted Application:', deletedApplication);
  } catch (error) {
    console.error('Error deleting application:', error);
  }
};


export {
  register,
  login,
  fetchAllUsers,
  fetchAllApplications,
  deleteApplication,
};
