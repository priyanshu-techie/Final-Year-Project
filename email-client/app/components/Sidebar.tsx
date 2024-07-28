"use client";

import { FaPlus } from "react-icons/fa";
import { useSidebarState } from "../hooks/sidebarState";
import "./sidebarStyle.css"
import { usePathname } from "next/navigation";
import { sidebarItems } from "../sidebarItems";
import Link from "next/link";


export default function Sidebar() {
  const sidebarClose = useSidebarState((s) => s.sidebarClose);
  const path = usePathname();
  const isCurrentPath = (currentPath: string):boolean => {
    return path.startsWith(currentPath);
  }

  return (
    <div
      style={{
        width: sidebarClose ? "2.5rem" : "20rem",
        transition: "all 0.5s ease",
      }}
      className={`p-4 ps-0 border-2 h-[calc(100svh-6.5rem)] box-content bg-[#f6f8fc] sticky top-16`}
    >
      <div>
        {sidebarClose ? (
          <>
            <div className="p-2 py-4 bg-[#3661a4] text-white rounded-2xl flex justify-center items-center cursor-pointer showshadow">
              <FaPlus />
            </div>
            {sidebarItems.map((item, index) => (
              <div key={index} className={`p-4 cursor-s hover:bg-gray-200 ${isCurrentPath(item.path)&& "bg-gray-200"} rounded-t-3xl`}>
                <Link href={item.path}>
                  <item.icon className="rounded-3xl"/>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="p-4 bg-[#3661a4] text-white rounded-2xl flex justify-between items-center cursor-pointer showshadow whitespace-nowrap gap-2">
              New Message <FaPlus />
            </div>
            {sidebarItems.map((item, index) => (
              <Link key={index} href={item.path}>
              <div
                className={`flex items-center p-4 cursor-pointer rounded-lg hover:bg-gray-200 ${isCurrentPath(item.path) ? "bg-gray-200":""} my-2`}
              >
                <item.icon className="mr-2" />
                <span>{item.title}</span>
              </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
