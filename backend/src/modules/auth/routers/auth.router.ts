import express from 'express';
import { RequestSchemaMiddleware } from '../../middleware/request-schema.miidleware';
import { globalCatchFn } from '../../utilities/global-catch-fn';
import { loginSchema } from '../schemas/login-schema';
import { registerSchema } from '../schemas/register-schema';
import { login, register } from "../services/auth.service";

export const authRouter = express.Router()

authRouter.post(
  "/register",
  registerSchema,
  RequestSchemaMiddleware,
  globalCatchFn(register)
);


authRouter.post(
  "/login",
  loginSchema,
  RequestSchemaMiddleware,
  globalCatchFn(login)
);
 