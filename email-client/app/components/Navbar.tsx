"use client";

import Image from "next/image";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { useSidebarState } from "../hooks/sidebarState";
import { IoMdMail } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

export default function Navbar() {
  const sidebarClose = useSidebarState((state) => state.sidebarClose);
  const setSidebarClose = useSidebarState((state) => state.setSidebarClose);

  return (
    <div className=" border-2 flex p-4 bg-[#f6f8fc] justify-between">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center ps-2">
          <span
            className={`hover:cursor-pointer rounded-full p-2 ${
              sidebarClose ? "" : "bg-gray-300"
            } me-4 font-bold text-2xl`}
            onClick={() => {
              setSidebarClose(!sidebarClose);
            }}
          >
            <BsLayoutTextSidebarReverse />
          </span>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="font-extrabold">Mail Mover</span>
        </div>
      </div>

      <div className="justify-end">
        <div className="rounded-full">
            <Image alt="profile image" src={"/images/profile.jpg"} width={50} height={50} className="rounded-full w-10 h-10"/>
        </div>
      </div>
    </div>
  );
}
