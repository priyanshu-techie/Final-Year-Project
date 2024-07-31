"use server"

import { revalidatePath } from "next/cache"

export async function RevalidatePages({ paths }: { paths: string[] }) {
    console.log("revalidatePages");
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        try {
            revalidatePath(path, "page");
        } catch (err) {
        }
    }
}