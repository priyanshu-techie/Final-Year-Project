import { EmailModel } from "../backend/models/email";
import connectMongodb from "../backend/utils/mongoConnect";
import toData from "../backend/utils/toData";
import RefreshBand from "../components/RefreshBand";
import Inbox from "../inbox/Inbox";

export default async function Page(){
    let emails:any = [];
  try {
    await connectMongodb();
    emails = toData(await EmailModel.find({type:"sent"}).sort({createdAt: -1}));
  } catch (error) {
    console.log("error while fetching data ",error);
  }

  return (
    <>
      <RefreshBand path="/sent"/>
      <Inbox data={emails}/>
    </>
  );
}