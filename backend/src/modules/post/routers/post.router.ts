import express from "express";
import { globalCatchFn } from "../../utilities/global-catch-fn";
import { createPost, deletePost, getPostById, getPostsByUsername, getTimelinePosts, likePost, updatePost } from "../services/post.service";

export const postRouter = express.Router();

postRouter.get("/:id", globalCatchFn(getPostById));
postRouter.get("/profile/:username", globalCatchFn(getPostsByUsername));
postRouter.get("/timeline/:userId", globalCatchFn(getTimelinePosts));

postRouter.post("/", globalCatchFn(createPost));
postRouter.put("/:id", globalCatchFn(updatePost));
postRouter.delete("/:id", globalCatchFn(deletePost));
postRouter.put("/:id/like", globalCatchFn(likePost));
 