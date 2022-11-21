import express from "express";
import { globalCatchFn } from "../../utilities/global-catch-fn";
import { deleteUser, follow, getFriendsByUserId, getUser, unFollow, updateUser } from "../services/user.service";

export const userRouter = express.Router();

userRouter.get("/", globalCatchFn(getUser));
userRouter.get("/friends/:userId", globalCatchFn(getFriendsByUserId));

userRouter.put("/:id", globalCatchFn(updateUser));
userRouter.delete("/:id", globalCatchFn(deleteUser));

userRouter.put("/:id/follow", globalCatchFn(follow));
userRouter.put("/:id/unfollow", globalCatchFn(unFollow));

