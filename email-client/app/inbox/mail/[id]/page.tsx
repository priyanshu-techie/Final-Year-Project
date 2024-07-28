import { emails } from "@/app/inbox/sampleEmails";
import Email from "./Email";

export default function Page({params:{id}}:{params:{id:string}}){

    const data = emails.find((email) => email.id == id);
    
    return(
        <Email data={data!}/>
    )
}