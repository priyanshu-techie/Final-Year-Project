"use client"

import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import SendEmailFromClient from "./sendEmailFromClient";

export default function NewMessage({isSidebarClose}: {isSidebarClose: boolean}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        // @ts-ignore
        await SendEmailFromClient(formDataObj);
        setLoading(false);
        handleOpen();
    }

    return (
        <>
            {
                isSidebarClose ? (
                    <div onClick={handleOpen} className="p-2 py-4 bg-[#3661a4] text-white rounded-2xl flex justify-center items-center cursor-pointer showshadow">
                        <FaPlus />
                    </div>
                ):
                (
                    <div onClick={handleOpen} className="p-4 bg-[#3661a4] text-white rounded-2xl flex justify-between items-center cursor-pointer showshadow whitespace-nowrap gap-2">
                        New Message <FaPlus />
                    </div>
                )
            }
            <Dialog open={open} handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Send New Email</DialogHeader>
              <form onSubmit={handleSubmit}>
                <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="flex flex-col gap-4">
                        <Input name="to" label="To" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                        <Input name="subject" label="Subject" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                        <Textarea name="message" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} label="message"/>
                    </div>

                </DialogBody>
                <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                    <span>Cancel</span>
                    </Button>
                    <Button loading={loading} variant="filled" type="submit" color="blue" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <span>Send</span>
                    </Button>
                </DialogFooter>
              </form>
            </Dialog>  
        </>
    )
}