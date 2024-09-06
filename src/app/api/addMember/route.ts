import dbConnect from "../../../lib/dbConnect";
import Member from "../../../models/member";
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
      role,
      tv,
      membershipYear,
      Sep23,
      Oct23,
      Nov23,
      Dec23,
      Jan24,
      Feb24,
      Mar24,
      Apr24,
      May24,
      Jun24,
      Jul24,
      Aug24,
      Sep24,
      Oct24,
      Nov24,
      Dec24,
      Jan25,
      Feb25,
      Mar25,
      Apr25,
      May25,
      Jun25,
      Jul25,
      Aug25,
      Sep25,
      Oct25,
      Nov25,
      Dec25,
    }: any = reqBody;

    const newMember = new Member({
      name,
      fname,
      phone,
      id,
      role,
      tv,
      membershipYear,
      Sep23,
      Oct23,
      Nov23,
      Dec23,
      Jan24,
      Feb24,
      Mar24,
      Apr24,
      May24,
      Jun24,
      Jul24,
      Aug24,
      Sep24,
      Oct24,
      Nov24,
      Dec24,
      Jan25,
      Feb25,
      Mar25,
      Apr25,
      May25,
      Jun25,
      Jul25,
      Aug25,
      Sep25,
      Oct25,
      Nov25,
      Dec25,
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
