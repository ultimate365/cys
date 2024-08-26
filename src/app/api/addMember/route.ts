import dbConnect from "../../../lib/dbConnect";
import Member from "../../../models/member";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, fname, email, phone, id, role }: any = reqBody;

    const newMember = new Member({
      name,
      fname,
      email,
      phone,
      id,
      role,
    });
    const savedMember = await newMember.save();

    return NextResponse.json(
      {
        message: "Member saved successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
