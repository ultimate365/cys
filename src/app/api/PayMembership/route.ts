import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/user";
import Member from "../../../models/member";
import { SendCustomSMS } from "@/helpers/SendCustomSMS";
dbConnect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      name,
      fname,
      phone,
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
      months,
      amount,
    }: any = reqBody;

    let MemberData = await Member.findOne({ phone: phone });
    if (MemberData) {
      MemberData.name = name;
      MemberData.fname = fname;
      MemberData.phone = phone;
      MemberData.role = role;
      MemberData.tv = tv;
      MemberData.membershipYear = membershipYear;
      MemberData.Sep23 = Sep23;
      MemberData.Oct23 = Oct23;
      MemberData.Nov23 = Nov23;
      MemberData.Dec23 = Dec23;
      MemberData.Jan24 = Jan24;
      MemberData.Feb24 = Feb24;
      MemberData.Mar24 = Mar24;
      MemberData.Apr24 = Apr24;
      MemberData.May24 = May24;
      MemberData.Jun24 = Jun24;
      MemberData.Jul24 = Jul24;
      MemberData.Aug24 = Aug24;
      MemberData.Sep24 = Sep24;
      MemberData.Oct24 = Oct24;
      MemberData.Nov24 = Nov24;
      MemberData.Dec24 = Dec24;
      MemberData.Jan25 = Jan25;
      MemberData.Feb25 = Feb25;
      MemberData.Mar25 = Mar25;
      MemberData.Apr25 = Apr25;
      MemberData.May25 = May25;
      MemberData.Jun25 = Jun25;
      MemberData.Jul25 = Jul25;
      MemberData.Aug25 = Aug25;
      MemberData.Sep25 = Sep25;
      MemberData.Oct25 = Oct25;
      MemberData.Nov25 = Nov25;
      MemberData.Dec25 = Dec25;

      await MemberData.save();
      const message = `Dear ${name},\nThank you for making payment of Rs. ${amount} for Membership of ${months} months.\n-CYS`;
      await SendCustomSMS(phone, message);
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
