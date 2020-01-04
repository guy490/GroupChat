const io = require("socket.io")();
let loggedUsers = [];
io.on("connection", client => {
  let loggedInUserId = client.id;
  addClientToUserList(loggedInUserId);

  console.log("a user connected");

  console.log(loggedUsers);
  io.emit("userChangedConnectionStatus", "a GUEST user connected");
  io.emit("listOfUsersHasChanged", loggedUsers);

  client.on("subscribeMessage", message => {
    console.log("The message sent from the client is ", message);
    io.emit("viewMessage", message);
  });

  client.on("authChange", credentials => {
    io.emit("viewLoginChange", credentials);
  });

  client.on("disconnect", () => {
    console.log("user disconnected");
    deleteClientFromUserList(loggedInUserId);
    io.emit("listOfUsersHasChanged", loggedUsers);
    io.emit("userChangedConnectionStatus", "a GUEST user disconnected");
  });
});

const addClientToUserList = loggedInUserId => {
  let username = "";
  loggedInUserId.split("").forEach((char, ind) => {
    if (ind % 4 == 0) {
      username += char;
    }
  });
  loggedUsers.push({ userid: loggedInUserId, username });
};

const deleteClientFromUserList = loggedInUserId => {
  let index = loggedUsers.indexOf(loggedInUserId);
  loggedUsers.splice(index, 1);
};

const port = process.env.PORT || 8000;
io.listen(port);
console.log("listening on port ", port);
