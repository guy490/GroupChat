const {
  addClientToUserList,
  deleteClientFromUserList
} = require("./ListFunctions");
const io = require("socket.io")();
var loggedUsers = [];

io.on("connection", client => {
  let userId = client.id;
  console.log(loggedUsers, "dis");
  addClientToUserList(loggedUsers, userId);
  console.log(loggedUsers, "con");

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
    loggedUsers = deleteClientFromUserList(loggedUsers, userId);
    console.log(loggedUsers, "dis");
    io.emit("userListHasChanged", loggedUsers);
  });
});

const port = /*process.env.PORT ||*/ 8000;
io.listen(port);
console.log("listening on port ", port);
