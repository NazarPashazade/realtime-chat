import { Server } from "socket.io";

const io = new Server();

let users: any = [];

const addUser = (userId: string, socketId: string): void => {
  !users.some((user: any) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId: string): void => {
  users = users.filter((user: any) => user.socketId !== socketId);
};

const getUser = (userId: string): void => {
  return users.find((user: any) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId: any) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }: any) => {
    const user = getUser(receiverId);

    io.to(user?.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
