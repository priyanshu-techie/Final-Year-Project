"use client";

import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Link from "next/link";
import { IEmail } from "../backend/models/email";
import { FormatDate } from "../backend/utils/FormatDate";
import extractSenderDetails from "../backend/utils/ExtractFrom";
import { starEmail } from "./utils/StarEmail";
import { usePathname } from "next/navigation";

export default function Inbox({ data }: { data: Array<IEmail> }) {
  const star = useState();
  const path = usePathname();
  const isSentPage = path.startsWith('/sent');
  console.log("isSenderPga", isSentPage);

  return (
    <div className="p-2">
      {data.map((email, ind) => {
        const emailRead = email.readAt !== null;
        const sender = isSentPage ? extractSenderDetails(email.to) : extractSenderDetails(email.from);
        return (
          <div
            key={ind}
            className={`w-full p-3 border hover:border-black hover:cursor-pointer flex gap-4 ${
              emailRead && "bg-blue-50"
            } `}
          >
            {/* @ts-ignore */}
            <div onClick={async()=>{await starEmail(email._id, "/inbox")}}>
              {email.starred ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar />
              )}
            </div>
            <Link
              href={"inbox/mail/" + email._id}
              className="flex justify-between w-full"
            >
              <div className={!emailRead ? "font-bold" : ""}>
                {sender.name}
              </div>
              <div className="w-2/3 border-red-800 overflow-hidden text-ellipsis line-clamp-1">
                <span className={`${!emailRead && "font-bold"} me-2`}>
                  {email.subject}
                </span>
                <span>{email.message}</span>
              </div>
              {/* @ts-ignore */}
              <div>{FormatDate(email.createdAt)}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
