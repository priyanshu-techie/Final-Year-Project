"use client"

import { IEmail } from "@/app/backend/models/email";
import { usePathname, useRouter } from "next/navigation";
import { CgArrowLongLeft } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteEmail } from "../../utils/deleteEmail";
import extractSenderDetails from "@/app/backend/utils/ExtractFrom";

export default function Email({data}:{data:IEmail}){
    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    const path = usePathname();
    const isSentPage = path.startsWith('/sent');
    const fromAdd = !isSentPage ? extractSenderDetails(data.from).email : data.from;
    const toAdd = isSentPage ? extractSenderDetails(data.to).email : data.to;



    return(
        <div className="p-4 gap-2">
            <div className="flex gap-8">
                <CgArrowLongLeft className="text-2xl cursor-pointer" onClick={goBack}/>
                <RiDeleteBin5Line className="text-2xl cursor-pointer" onClick={async()=>{
                    {/* @ts-ignore */}
                    await deleteEmail(data._id);
                    router.push("/inbox");
                }}/>
            </div>

            <div className="flex gap-6 px-8 ps-4 mt-4 mb-2">
                <div>
                    <span className="font-bold">From</span> : {fromAdd}
                </div>
                <div>
                    <span className="font-bold">To</span>: {toAdd}
                </div>
            </div>
            
            <div className="p-4 pt-0">
                {/* subject */}
                <div className="font-semibold text-2xl  ">
                    {data.subject}
                </div>
            </div>


            {/* main content */}

            <div className="w-full bg-slate-300 flex justify-center p-8 min-h-96">
                <div className="w-1/2 bg-white p-8">
                    {data.message}
                </div>
            </div>
        </div>
    )
}