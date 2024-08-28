import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// prerob na prismu
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

    const client = await MongoClient.connect(process.env.MONGO_URI);

    const db = client.db();
    const applicationsCollection = db.collection("application");

    const result = await applicationsCollection.insertOne(data);

    client.close();

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
  }
}
