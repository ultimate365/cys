import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/user";
import PhoneOtp from "../../../models/phoneOtp";
import Member from "../../../models/member";
dbConnect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { phone, code, password }: any = reqBody;

    let phoneData = await PhoneOtp.findOne({ phone, code });

    if (phoneData) {
      let currentTime = new Date().getTime();

      let phoneDifference = phoneData.expiresIn - currentTime;
      if (phoneDifference < 0) {
        return NextResponse.json(
          {
            message: "OTP Expired",
            success: false,
            statusText: "error",
          },
          { status: 200 }
        );
      } else {
        await PhoneOtp.deleteMany({ phone });
        let userData = await User.findOne({ phone });
        if (userData) {
          userData.password = password;
          await userData.save();
          return NextResponse.json(
            {
              message: "Password Changed Successfully",
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
      }
    } else {
      return NextResponse.json(
        {
          message: "Invalid OTP Code",
          success: false,
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
