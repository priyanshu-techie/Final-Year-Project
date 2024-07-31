export default function toData(object:any) {
    return JSON.parse(JSON.stringify(object));
}