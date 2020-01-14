const {
  addClientToUserList,
  deleteClientFromUserList,
  loggedUsers
} = require("./ListFunctions");
const io = require("socket.io")();

io.on("connection", client => {
  let userId = client.id;
  addClientToUserList(userId);

  console.log("a user connected");
  io.emit("userListHasChanged", loggedUsers);

  client.on("subscribeMessage", message => {
    io.emit("viewMessage", message);
  });

  client.on("authChange", credentials => {
    io.emit("viewLoginChange", credentials);
  });

  client.on("disconnect", () => {
    console.log("user disconnected");
    deleteClientFromUserList(userId);
    io.emit("userListHasChanged", loggedUsers);
  });
});

const port = process.env.PORT || 8000;
io.listen(port);
console.log("listening on port ", port);
