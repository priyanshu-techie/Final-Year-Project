import { IconType } from "react-icons";
import { BsFillSendFill } from "react-icons/bs";
import { FaInbox, FaRegStar } from "react-icons/fa";
import { MdDrafts } from "react-icons/md";

export type sidebarItemsType = {
    title: string;
    icon: IconType;
    path: string;
};

export const sidebarItems: sidebarItemsType[] = [
    {
      title: "Inbox",
      icon: FaInbox,
      path: "/inbox",
    },
    {
      title: "Sent",
      icon: BsFillSendFill,
      path: "/sent",
    },
    {
      title: "Starred",
      icon: FaRegStar,
      path: "/starred",
    },
    {
      title: "Drafts",
      icon: MdDrafts,
      path: "/drafts",
    },
  ];