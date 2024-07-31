"use client";

import { IoMdRefresh } from "react-icons/io";
import { RevalidatePages } from "../backend/utils/RevalidatePages";

export default function RefreshBand({path}:{path:string}) {
  return (
    <div className="flex justify-end p-2 pe-6">
      <IoMdRefresh
        className="text-2xl cursor-pointer"
        onClick={async () => {
          await RevalidatePages({ paths: [path] });
        }}
      />
    </div>
  );
}
