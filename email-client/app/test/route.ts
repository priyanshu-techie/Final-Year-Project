import { NextRequest, NextResponse } from "next/server";
import connectMongodb from "../backend/utils/mongoConnect";
import sendEmail from "../backend/utils/SendEmail";
export async function GET(request: NextRequest) {

    try {
       await connectMongodb();
       await sendEmail({to:["priyanshu100agrawal@gmail.com"], subject:"Test Email", content:"Test Email"});
       return NextResponse.json({status:"OK"});
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:"ERROR"});
    }
}