"use server"

import { EmailModel } from "@/app/backend/models/email";
import connectMongodb from "@/app/backend/utils/mongoConnect";

export async function deleteEmail(id:string){
    try {
        await connectMongodb();
        await EmailModel.findByIdAndDelete(id);
    } catch (error) {
        console.log("error while deleting email ",error);
    }
}