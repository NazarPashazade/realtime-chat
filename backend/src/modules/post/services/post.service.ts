import { Request, Response } from "express";
import { User } from "../../user/models/user.model";
import { Post } from "../models/post.model";



export const getPostById = async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);

    if (!post) throw new Error("Post not found...");

    res.status(200).json(post);
}

export const getPostsByUsername = async (req: Request, res: Response) => {
    const user = await User.findOne({ username: req.params.username });

    const posts = await Post.find({ userId: user?._id });

    res.status(200).json(posts);
}


export const getTimelinePosts = async (req: Request, res: Response) => {
    const currentUser = await User.findById(req.params.userId);

    const userPosts = await Post.find({ userId: currentUser?._id });

    const friendIds = currentUser?.followings.map((friendId) => friendId);

    const friendPosts = await Post.find({ userId: { $in: friendIds } });

    res.status(200).json(userPosts.concat(...friendPosts));
}

export const createPost = async (req: Request, res: Response) => {
    const newPost = new Post(req.body);

    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
}

export const updatePost = async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);

    if (!post) throw new Error("Post not found...");

    if (post?.userId === req.body.userId) {
        await post?.updateOne({ $set: req.body });
        res.status(200).json("the post has been updated");
    } else {
        throw new Error("You can update only your post");
    }
}

export const deletePost = async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);

    if (!post) throw new Error("Post not found...");

    if (post?.userId === req.body.userId) {
        await post?.deleteOne();
        res.status(200).json("the post has been deleted");
    } else {
        throw new Error("You can delete only your post");
    }
}

export const likePost = async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);

    if (!post) throw new Error("Post not found...");

    if (!post?.likes.includes(req.body.userId)) {
        await post?.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("The post has been liked");
    } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("The post has been disliked");
    }
}