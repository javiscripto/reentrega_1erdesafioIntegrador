import messageModel from "../models/messages.model";


export default class messageManager{
    createMessage = async(objectMessage)=>{
        try {
            let message= await messageModel.create(objectMessage);
            return message;

        } catch (error) {
            console.error("error: ", error);
        }
    }

    getAllMessages = async()=>{
        try {
            const messages= await messageModel.find();
            return messages
        } catch (error) {
            console.error("error: ", error)
        }
    }
}