import { compare, genSalt, hash } from "bcrypt";
import { Request, Response } from "express";
import { User } from "../../user/models/user.model";


export const register = async (req: Request, res: Response) => {
    const { email, username, password, gender } = req.body

    await checkExistUser(username, email)

    const hashedPassword = await hashPassword(password)

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        gender
    });

    const user = await newUser.save();
    
    res.status(200).json(user);
}


export const login = async (req: Request, res: Response) => {
    
    const { email, password: newPassword } = req.body

    const user = await User.findOne({ email }).exec();

    if (!user) throw new Error("User not found...")

    await comparePasswords(user?.password + "", newPassword)

    res.status(200).json(user)
}


export const hashPassword = async (password: string): Promise<string> => {
    const salt = await genSalt(10);
    const passwordHash = await hash(password, salt);
    return passwordHash;
}

export const comparePasswords = async (oldHashedPassword: string, newPassword: string): Promise<void> => {

    const validPassword = await await compare(newPassword, oldHashedPassword)

    if (!validPassword) {
        throw new Error("Wrong Password...")
    }
}

export const checkExistUser = async (username: string, email: string): Promise<void> => {
    const user = await User.findOne({ $or: [{ username }, { email }] }).exec();

    if (!!user) {
        throw new Error("User already exist: Please change username or email...")
    }
}
