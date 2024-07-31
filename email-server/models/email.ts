import mongoose from 'mongoose';

interface IEmail extends mongoose.Document {
    from:string;
    to: string;
    subject: string;
    message: string;
    status: string;
    readAt: Date;
    type:"sent"|"received"| "draft" ;
    starred: boolean;
}

const emailSchema = new mongoose.Schema<IEmail>({
    from: {type:String, required:true},
    to: {type:String, required:true},
    subject: {type:String, required:true},
    message: {type:String, required:true},
    status: {type:String, required:true},
    readAt: {type:Date,default:null},
    type: {type:String, required:true},
    starred: {type:Boolean, default:false},    
},{timestamps:true})

const EmailModel =  mongoose.model('emails',emailSchema);

export default EmailModel;