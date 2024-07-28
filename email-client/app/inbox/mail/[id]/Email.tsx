"use client"

import { EmailData } from "@/app/inbox/sampleEmails";
import { useRouter } from "next/navigation";
import { CgArrowLongLeft } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Email({data}:{data:EmailData}){
    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    return(
        <div className="p-4 gap-2">
            <div className="flex gap-8">
                <CgArrowLongLeft className="text-2xl cursor-pointer" onClick={goBack}/>
                <RiDeleteBin5Line className="text-2xl" />
            </div>
            <div className="p-4">
                {/* subject */}
                <div className="font-semibold text-2xl  ">
                    {data.subject}
                </div>

            </div>
        </div>
    )
}