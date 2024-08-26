import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

import User from "../../../models/user";
import PhoneOtp from "@/models/phoneOtp";
import { sendOTPSMS } from "@/helpers/sendVerificationSMS";
dbConnect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { phone }: any = reqBody;

    let data = await User.findOne({ phone });

    const mobileOtp = Math.floor(100000 + Math.random() * 900000);
    if (data) {
      let mobileOtpdata = new PhoneOtp({
        phone: phone,
        code: mobileOtp,
        expiresIn: new Date().getTime() + 300 * 1000,
      });

      await sendOTPSMS(phone, mobileOtp);
      await mobileOtpdata.save();
      return NextResponse.json(
        {
          message: "OTP Sent, Please check your Mobile",
          success: true,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "User Mobile Not Found",
          success: false,
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
