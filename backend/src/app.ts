import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import { connect } from "mongoose";
import { authRouter } from "./modules/auth/routers/auth.router";
import { conversationRouter } from "./modules/conversation/routers/conversation.router";
import { messageRouter } from "./modules/message/routers/message.router";
import { errorHandler } from "./modules/middlewares/error-handler";
import { postRouter } from "./modules/post/routers/post.router";
import { userRouter } from "./modules/user/routers/user.router";
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/messages", messageRouter);
app.use("/conversations", conversationRouter);
app.use("/posts", postRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server running in ${process.env.PORT} port...`)
);

connect(process.env.DB_URL || "", (err) => {
  if (err) {
    console.error("Can't connect to DB", {}, { message: err });
  } else {
    console.log("Connected to DB");
  }
});
