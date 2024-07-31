"use server"

import connectMongodb from "@/app/backend/utils/mongoConnect";
import { EmailModel } from "../../backend/models/email";
import { RevalidatePages } from "../../backend/utils/RevalidatePages";

export async function starEmail(id: string, path:string) {
    try {
        await connectMongodb();
        const starredData = await EmailModel.findById(id).select("starred");
        await EmailModel.findByIdAndUpdate(id, { starred: starredData != null ? !starredData.starred : false });
        await RevalidatePages({ paths: [path] });
    } catch (error) {
        console.log("error while starring the email ", error);
    }
}