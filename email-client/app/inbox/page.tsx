import Inbox from "./Inbox";
import { emails } from "./sampleEmails";


export default function Page() {
  return (
    <Inbox data={emails}/>
  );
}
