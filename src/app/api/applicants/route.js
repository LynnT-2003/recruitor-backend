import connectMongoDB from "@/libs/mongodb";
import Model from "@/models/model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, age, phoneNumber, lineId, profilePictureUrl } =
      await request.json();
    await connectMongoDB();
    await Model.create({
      firstName,
      lastName,
      age,
      phoneNumber,
      lineId,
      profilePictureUrl,
    });

    return NextResponse.json(
      { message: "Applicant created successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating applicant:", error);
    return NextResponse.json(
      { error: "Failed to create applicant." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const models = await Model.find();
    return NextResponse.json(models, { status: 200 });
  } catch (error) {
    console.error("Error fetching applicants:", error);
    return NextResponse.json(
      { error: "Failed to fetch applicants." },
      { status: 500 }
    );
  }
}
