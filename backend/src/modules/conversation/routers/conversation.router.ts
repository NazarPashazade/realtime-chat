import express, { NextFunction, Request, Response } from "express";
import { Conversation } from "../models/conversation.model";

export const conversationRouter = express.Router();

conversationRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const newConversation = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });

    try {
      const savedConversation = await newConversation.save();

      res.status(200).json(savedConversation);
    } catch (error) {
      next(error);
    }
  }
);

//get conv of a user

conversationRouter.get(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const conversation = await Conversation.find({
        members: { $in: [req.params.userId] },
      });

      res.status(200).json(conversation);
    } catch (error) {
      next(error);
    }
  }
);

// get conv includes two userId

conversationRouter.get(
  "/find/:firstUserId/:secondUserId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const conversation = await Conversation.findOne({
        members: { $all: [req.params.firstUserId, req.params.secondUserId] },
      });

      res.status(200).json(conversation);
    } catch (error) {
      next(error);
    }
  }
);

 