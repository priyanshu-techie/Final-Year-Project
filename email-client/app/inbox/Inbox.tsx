"use client";

import { useState } from "react";
import { EmailData } from "./sampleEmails";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

export default function Inbox({ data }: { data: Array<EmailData> }) {
  const star = useState();

  const starEmail = () => {
    console.log("starred");
  };

  return (
    <div className="p-2">
      {data.map((email, ind) => {
        return (
          <Link key={ind} href={'inbox/mail/'+email.id}>    
            <div
              className={`w-full border flex justify-between p-3 ${
                email.read && "bg-blue-50"
              } hover:border-black hover:cursor-pointer`}
            >
              <div onClick={starEmail}>
                <FaRegStar />
              </div>
              <div className={!email.read ? "font-bold" : ""}>{email.from}</div>
              <div className="w-2/3 border-red-800 overflow-hidden text-ellipsis line-clamp-1">
                <span className={`${!email.read && "font-bold"} me-2`}>
                  {email.subject}
                </span>
                <span>{email.content}</span>
              </div>
              <div>{email.time}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
