import express from "express";
import { globalCatchFn } from "../../utilities/global-catch-fn";
import { createMessage, getMessagesByConversationId } from "../services/message.service";

export const messageRouter = express.Router();

messageRouter.get("/:conversationId", globalCatchFn(getMessagesByConversationId));
messageRouter.post("/", globalCatchFn(createMessage));
