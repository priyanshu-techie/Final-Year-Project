import { EmailModel, IEmail } from "../backend/models/email";
import toData from "../backend/utils/toData";
import RefreshBand from "../components/RefreshBand";
import Inbox from "../inbox/Inbox";

export default async function Page() {
    let data:Array<IEmail> = [];
    try {
        data = toData(await EmailModel.find({starred:true}).sort({createdAt: -1}));
    } catch (error) {
        console.log("error while fetching data ",error);
    }
  return (
    <>
      <RefreshBand path="/starred" />
      <Inbox data={data} />
    </>
  );
}
