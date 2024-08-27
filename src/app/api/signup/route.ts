import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/user";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      name,
      fname,
      phone,
      id,
      username,
      password,
      role,
      isRegistered,
      isVerified,
    }: any = reqBody;

    const newUser = new User({
      name,
      fname,
      phone,
      id,
      username,
      password,
      role,
      isVerified,
    });

    await newUser.save();

    return NextResponse.json(
      {
        message:
          "You have successfully Registered! Please login to your account.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
