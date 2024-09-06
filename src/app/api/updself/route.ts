import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/user";
import Teacher from "../../../models/member";

dbConnect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, fname, phone }: any = reqBody;

    let MemberData = await Teacher.findOne({ phone: phone });

    if (MemberData) {
      MemberData.name = name;
      MemberData.fname = fname;
      MemberData.phone = phone;

      await MemberData.save();

      let userData = await User.findOne({ phone: phone });
      if (userData) {
        userData.name = name;
        userData.phone = phone;
        await userData.save();
      }
      return NextResponse.json(
        {
          message: "User Updated Successfully",
          success: true,
          statusText: "Success",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "User Not Found",
          success: false,
          statusText: "Not Found",
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
