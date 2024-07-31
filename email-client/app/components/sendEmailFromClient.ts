"use server"

import { EmailModel } from "../backend/models/email";
import sendEmail from "../backend/utils/SendEmail";

export default async function SendEmailFromClient(formDataObj:{to:string, subject:string, message:string}){
    try {
        await sendEmail({to:[formDataObj.to], subject: formDataObj.subject, content: formDataObj.message});
        await EmailModel.create({
            to:`"Sent" <${formDataObj.to}>`,
            message:formDataObj.message,
            subject:formDataObj.subject,
            from:"dspmu@payervault.com",
            status:"sent",
            type:"sent"
        })
    } catch (error) {
        console.log("Error occured ", error);
    }
}