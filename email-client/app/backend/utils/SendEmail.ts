import { sesClient } from "../functions/sesClient";
import { SendEmailCommand } from "@aws-sdk/client-ses";

export type PropType = {
  to: string[];
  subject: string;
  content: string;
};

export default async function sendEmail(data: PropType ){
  try {

    const source = "Priyanshu Agrawal <dspmu@payervault.com>";

    const command = new SendEmailCommand({
      Source: source ,
      Destination: {
        ToAddresses: data.to,
        BccAddresses: [],
        CcAddresses: []

      },
      Message: {

        Body: {
          Html: {
            Charset: "UTF-8",
            Data: data.content
          },

        },
        Subject: {
          Data: data.subject,
          Charset: "UTF-8"
        }
      },
    })

    await sesClient().send(command);
  } catch (error) {
    console.log(error);
  }
}