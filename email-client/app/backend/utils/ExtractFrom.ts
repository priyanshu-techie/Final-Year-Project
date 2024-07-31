export default function extractSenderDetails(inputString:string){
    console.log("recieved ",inputString)
    const regex = /"(.+)"\s*<(.+)>/;
    const match = inputString.match(regex);

    if (match) {
        return {
            name: match[1],
            email: match[2]
        };
    } else {
        return {
            name: null,
            email: null
        };
    }
}