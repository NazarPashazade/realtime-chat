import { Request, Response } from "express";
import { Message } from "../models/message.model";


export const getMessagesByConversationId = async (req: Request, res: Response) => {
    const { conversationId } = req.params;

    const messages = await Message.find({ conversationId });

    res.status(200).json(messages);
}


export const createMessage = async (req: Request, res: Response) => {
    const newMessage = new Message(req.body);

    const savedMessage = await newMessage.save();

    res.status(200).json(savedMessage);
}



