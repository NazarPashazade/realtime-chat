import express, { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";

export const userRouter = express.Router();
 
userRouter.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      params: { id: currentUserId },
      body: {
        username,
        coverPhoto,
        avatar,
        city,
        from,
        gender,
        desc,
        followers,
      },
    } = req;

    try {
      const user = await User.findOne({ id: currentUserId });

      if (!user) throw new Error("User not found...");

      if (username) {
        const existUser = await User.findOne({ username });

        if (existUser?.id != currentUserId) {
          throw new Error("Username already exist...");
        }
      }

      const updatedUser = await User.findByIdAndUpdate(currentUserId, {
        $set: {
          coverPhoto,
          avatar,
          city,
          from,
          gender,
          desc,
          username,
          followers,
        },
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

//delete user
userRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      const user = await User.findOne({ id });

      if (!user) throw new Error("User not found...");

      await User.deleteOne({ id });

      res.status(200).json("Account has been deleted");
    } catch (error) {
      next(error);
    }
  }
);

//get a user
userRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const { username, userId } = req.body;

  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });

    if (!user) throw new Error("User not found...");

    const { password, updatedAt, ...other } = (user as any)._doc;

    res.status(200).json(other);
  } catch (error) {
    next(error);
  }
});

//get friends
userRouter.get(
  "/friends/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.params.userId);

      if (!user) throw new Error("User not found...");

      const friendIds = user.followers.map((userId) => userId);

      const friends = await User.find({ _id: { $in: friendIds } });

      let friendList = friends.map(({ _id, username, avatar }) => ({
        _id,
        username,
        avatar,
      }));

      res.status(200).json(friendList);
    } catch (error) {
      next(error);
    }
  }
);

// follow a user
userRouter.put(
  "/:id/follow",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const currentUser = await User.findById(req.params.id);
      const targetUser = await User.findById(req.body.userId);

      if (!targetUser) throw new Error("User not found...");

      if (!targetUser.followers.includes(currentUser?.id)) {
        await targetUser.updateOne({ $push: { followers: currentUser?.id } });

        await currentUser?.updateOne({ $push: { followings: targetUser.id } });

        res.status(200).json("user has been followed");
      } else {
        throw new Error("You allready follow this user");
      }
    } catch (error) {
      next(error);
    }
  }
);

// Unfollow a user
userRouter.put(
  "/:id/unfollow",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const currentUser = await User.findById(req.params.id);
      const targetUser = await User.findById(req.body.userId);

      if (!targetUser) throw new Error("User not found...");

      if (!targetUser.followers.includes(req.body.userId)) {
        await targetUser.updateOne({ $pull: { followers: currentUser?.id } });

        await currentUser?.updateOne({ $pull: { followings: targetUser.id } });

        res.status(200).json("user has been unfollowed");
      } else {
        throw new Error("You dont follow this user");
      }
    } catch (error) {
      next(error);
    }
  }
);
