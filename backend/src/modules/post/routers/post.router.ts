import express, { NextFunction, Request, Response } from "express";
import { User } from "../../user/models/user.model";
import { Post } from "../models/post.model";

export const postRouter = express.Router();

postRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const newPost = new Post(req.body);

    try {
      const savedPost = await newPost.save();

      res.status(200).json(savedPost);
    } catch (err) {
      next(err);
    }
  }
);

postRouter.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) throw new Error("Post not found...");

      if (post?.userId === req.body.userId) {
        await post?.updateOne({ $set: req.body });
        res.status(200).json("the post has been updated");
      } else {
        throw new Error("You can update only your post");
      }
    } catch (err) {
      next(err);
    }
  }
);
//delete a post

postRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) throw new Error("Post not found...");

      if (post?.userId === req.body.userId) {
        await post?.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        throw new Error("You can delete only your post");
      }
    } catch (err) {
      next(err);
    }
  }
);
//like / dislike a post

postRouter.put(
  "/:id/like",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) throw new Error("Post not found...");

      if (!post?.likes.includes(req.body.userId)) {
        await post?.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("The post has been liked");
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("The post has been disliked");
      }
    } catch (err) {
      next(err);
    }
  }
);
//get a post

postRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) throw new Error("Post not found...");

      res.status(200).json(post);
    } catch (err) {
      next(err);
    }
  }
);

//get timeline posts

postRouter.get(
  "/timeline/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const currentUser = await User.findById(req.params.userId);

      const userPosts = await Post.find({ userId: currentUser?._id });

      const friendIds = currentUser?.followings.map((friendId) => friendId);

      const friendPosts = await Post.find({ userId: { $in: friendIds } });

      res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
      next(err);
    }
  }
);

//get user's all posts

postRouter.get(
  "/profile/:username",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findOne({ username: req.params.username });

      const posts = await Post.find({ userId: user?._id });

      res.status(200).json(posts);
    } catch (err) {
      next(err);
    }
  }
);
