import Image from "next/image";
import Inbox from "./components/Inbox";
import Content from "./components/Content";

export default function Home() {
  return (
    <div>
      <Inbox />
      <Content/>
    </div>
  );
}
