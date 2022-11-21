import express from "express";
import { createConnection } from "net";
import { globalCatchFn } from "../../utilities/global-catch-fn";
import { getConversationByUserId, getConversationByUserIds } from "../services/conversation.service";

export const conversationRouter = express.Router();

conversationRouter.get("/:userId", globalCatchFn(getConversationByUserId))
conversationRouter.get("/find/:firstUserId/:secondUserId", globalCatchFn(getConversationByUserIds))
conversationRouter.post("/", globalCatchFn(createConnection))
 