import { genSalt, hash, compare } from "bcrypt";
import { User } from "../../user/models/user.model";

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
