import express, { NextFunction, Request, Response } from 'express';
import { nextTick } from 'process';
import { validateRequestSchema } from '../../middlewares/validate-request-schema';
import { User } from '../../user/models/user.model';
import { loginSchema } from '../schemas/login-schema';
import { registerSchema } from '../schemas/register-schema';
import { checkExistUser, comparePasswords, hashPassword } from "../services/auth.service";

export const authRouter = express.Router()

authRouter.post(
  "/register",
  registerSchema,
  validateRequestSchema,
  async (req: Request, res: Response, next: NextFunction) => {
    try {

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
    } catch (err) {
      next(err)
    }
  });

authRouter.post(
  "/login",
  loginSchema,
  validateRequestSchema,
  async (req: Request, res: Response, next: NextFunction) => {
    try {

      const { email, password: newPassword } = req.body

      const user = await User.findOne({ email }).exec();

      if (!user) throw new Error("User not found...")

      await comparePasswords(user?.password + "", newPassword)

      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  });

