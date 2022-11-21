import { Request, Response } from "express";
import { Conversation } from "../models/conversation.model";


export const getConversationByUserId = async (req: Request, res: Response) => {
    const conversation = await Conversation.find({
        members: { $in: [req.params.userId] },
    });

    res.status(200).json(conversation);
}


export const getConversationByUserIds = async (req: Request, res: Response) => {
    const conversation = await Conversation.findOne({
        members: { $all: [req.params.firstUserId, req.params.secondUserId] },
      });

      res.status(200).json(conversation);
}


export const createConversation = async (req: Request, res: Response) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });

    const savedConversation = await newConversation.save();

    res.status(200).json(savedConversation);
}







