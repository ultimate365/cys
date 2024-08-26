import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/user";
import Member from "../../../models/member";
dbConnect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      name,

      phone,
      gp,
      address,
      post,
      role,
      gender,
      registered,
    }: any = reqBody;

    let MemberData = await Member.findOne({ phone: phone });
    if (MemberData) {
      MemberData.name = name;
      MemberData.gender = gender;
      MemberData.gp = gp;
      MemberData.phone = phone;
      MemberData.address = address;
      MemberData.post = post;
      MemberData.role = role;
      MemberData.registered = registered;

      await MemberData.save();
      let userData = await User.findOne({ phone: phone });
      if (userData) {
        userData.name = name;
        userData.gender = gender;
        userData.gp = gp;
        userData.phone = phone;
        userData.address = address;
        userData.post = post;
        userData.role = role;
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
