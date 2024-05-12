"use client";

import Image from "next/image";
import { useState } from "react";
import { IconType } from "react-icons";
import { BsFillSendFill } from "react-icons/bs";
import { FaInbox, FaLessThan, FaRegStar } from "react-icons/fa";
import { MdDrafts } from "react-icons/md";

type sidebarItemsType = {
  title: string;
  icon: IconType;
  path: string;
};
const sidebarItems: sidebarItemsType[] = [
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

export default function Sidebar() {
  const [sidebarClose, setSidebarClose] = useState(false);

  return (
    <div
      className={`${sidebarClose ? "w-14" : "w-48"} p-4 ps-0 border-2 h-[100vh] box-content `}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center ps-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          {!sidebarClose && <span className="font-extrabold">Mail Mover</span>}
        </div>
        <span
          className={`ms-5 cursor-pointer transition-transform ${
            sidebarClose ? "rotate-180" : ""
          }`}
          onClick={() => {
            setSidebarClose(!sidebarClose);
          }}
        >
          <FaLessThan />
        </span>
      </div>
      <hr className="my-4" />
      <div>
        {
            sidebarClose ? sidebarItems.map((item, index) => (
                    <div key={index} className="p-2 cursor-pointer hover:bg-gray-200">
                      <item.icon />
                    </div>
                  ))
            :
            sidebarItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-200"
                    >
                      <item.icon className="mr-2" />
                      <span>{item.title}</span>
                    </div>
            ))
        }
      </div>
    
    </div>
  );
}
