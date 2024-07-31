import toData from "@/app/backend/utils/toData";
import Email from "./Email";
import { EmailModel, IEmail } from "@/app/backend/models/email";

export default async function Page({params:{id}}:{params:{id:string}}){
    let data = {} as IEmail;
    try {
        data = toData(await EmailModel.findById(id));
    } catch (error) {
        console.log("error while fetching data ",error);    
    }
    return(
        <Email data={data}/>
    )
}