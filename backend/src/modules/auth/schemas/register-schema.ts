import { body } from "express-validator";

export const registerSchema = [
  body('email')
    .isEmail()
    .withMessage('Email must contain a valid email address'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];


