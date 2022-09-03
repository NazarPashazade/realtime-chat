import { Schema, model } from "mongoose";
import { Gender } from "./gender.enum";

export interface IUser {
  username: string;
  email: string;
  password: string;
  avatar: string;
  coverPhoto: string;
  followers: string[];
  followings: string[];
  from: string;
  city: string;
  isAdmin: boolean;
  gender: Gender;
  desc: string;
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 8,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      min: 8,
    },
    avatar: {
      type: String,
      default: "",
    },
    coverPhoto: {
      type: String,
      default: "",
    },
    followers: {
      type: [String],
      default: [],
    },
    followings: {
      type: [String],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    gender: {
      required: true,
      type: String,
      enum: Gender,
    },
    desc: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
