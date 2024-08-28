import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      name,
      discord,
      raidtype,
      role,
      main,
      logs,
      mic,
      ui,
      attendance,
      id,
    } = data;

    // Insert the data into the database using Prisma
    const result = await prisma.application.create({
      data: {
        name,
        discord,
        raidtype,
        role,
        main,
        logs,
        mic,
        ui,
        attendance,
        id,
      },
    });

    return NextResponse.json(
      {
        message: "Application inserted into database!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to insert application:", error);
    return NextResponse.json(
      {
        message: "Failed to insert application",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
