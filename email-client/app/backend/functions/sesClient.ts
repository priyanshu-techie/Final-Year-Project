import { SESClient } from "@aws-sdk/client-ses";

export function sesClient() {

    const accessKeyId = process.env.SES_ACCESS_KEY as string;
    const secretAccessKey = process.env.SES_SECRET_KEY as string;

    return new SESClient({
        apiVersion: "2012-10-17",
        region: "ap-south-1",
        credentials: {
            accessKeyId,
            secretAccessKey
        }
    })
}