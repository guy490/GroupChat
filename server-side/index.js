const {
  addClientToUserList,
  deleteClientFromUserList
} = require("./ListFunctions");
const io = require("socket.io")();
var loggedUsers = [];

io.on("connection", client => {
  let userSocketID = client.id;
  client.on("userconnected", userProfile => {
    console.log(loggedUsers, "dis");
    addClientToUserList(loggedUsers, userProfile);
    console.log(loggedUsers, "con");
    console.log("a user connected");
    io.emit("userListHasChanged", loggedUsers);
  });

  client.on("subscribeMessage", message => {
    console.log(message);
    io.emit("viewMessage", message);
  });

  client.on("authChange", credentials => {
    console.log(credentials);
    io.emit("viewLoginChange", credentials);
  });

  client.on("disconnect", () => {
    console.log("user disconnected");
    loggedUsers = deleteClientFromUserList(loggedUsers, userSocketID);
    console.log(loggedUsers, "dis");
    io.emit("userListHasChanged", loggedUsers);
  });
});

const port = process.env.PORT || 8000;
io.listen(port);
console.log("listening on port ", port);
