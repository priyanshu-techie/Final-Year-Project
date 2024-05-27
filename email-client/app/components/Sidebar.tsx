"use client";

import Image from "next/image";
import { useState } from "react";
import { IconType } from "react-icons";
import { BsFillSendFill } from "react-icons/bs";
import { FaInbox, FaLessThan, FaPlus, FaRegStar } from "react-icons/fa";
import { MdDrafts } from "react-icons/md";
import { useSidebarState } from "../hooks/sidebarState";
import "./sidebarStyle.css"
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
  const sidebarClose = useSidebarState((s) => s.sidebarClose);

  return (
    <div
      style={{
        width: sidebarClose ? "2.5rem" : "20rem",
        transition: "all 0.5s ease",
      }}
      className={`p-4 ps-0 border-2 h-[100vh] box-content bg-[#f6f8fc]`}
    >
      <div>
        {sidebarClose ? (
          <>
            <div className="p-2 py-4 bg-[#3661a4] text-white rounded-2xl flex justify-center items-center cursor-pointer showshadow">
              <FaPlus />
            </div>
            {sidebarItems.map((item, index) => (
              <div key={index} className="p-4 cursor-s hover:bg-gray-200 ">
                <item.icon />
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="p-4 bg-[#3661a4] text-white rounded-2xl flex justify-between items-center cursor-pointer showshadow whitespace-nowrap gap-2">
              New Message <FaPlus />
            </div>
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 cursor-pointer hover:bg-gray-200"
              >
                <item.icon className="mr-2" />
                <span>{item.title}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
