import mongoose, { ConnectionStates } from "mongoose";

export default async function connectMongodb() {
    try{
        if (mongoose.connection.readyState != ConnectionStates.connected) {
            await mongoose.connect(process.env.MONGODB_URI as string, { dbName: "email-server",  },)
        }
    }
    catch(error){
        console.log("error while connecting the db ",error);
    }
}