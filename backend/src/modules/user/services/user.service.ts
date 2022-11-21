import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";

export const getUser = async (req: Request, res: Response) => {
    const { username, userId } = req.body;

    const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username });

    if (!user) throw new Error("User not found...");

    const { password, updatedAt, ...other } = (user as any)._doc;

    res.status(200).json(other);

}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
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
}



export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const user = await User.findOne({ id });

    if (!user) throw new Error("User not found...");

    await User.deleteOne({ id });

    res.status(200).json("Account has been deleted");

}


export const getFriendsByUserId = async (req: Request, res: Response, next: NextFunction) => {
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

}


export const follow = async (req: Request, res: Response, next: NextFunction) => {
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

}


export const unFollow = async (req: Request, res: Response, next: NextFunction) => {
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
}