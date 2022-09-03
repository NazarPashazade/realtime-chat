import express, { NextFunction, Request, Response } from "express";
import { Message } from "../models/message.model";

export const messageRouter = express.Router();

messageRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const newMessage = new Message(req.body);

    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (error) {
      next(error);
    }
  }
);

messageRouter.get(
  "/:conversationId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { conversationId } = req.params;

      const messages = await Message.find({ conversationId });

      res.status(200).json(messages);
    } catch (error) {
      next(error);
    }
  }
);
