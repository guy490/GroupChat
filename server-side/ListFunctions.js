let loggedUsers = [];

const addClientToUserList = loggedInUserId => {
  let username = "";
  loggedInUserId.split("").forEach((char, ind) => {
    if (ind % 4 == 0) {
      username += char;
    }
  });
  let currentUserDetails = { userid: loggedInUserId, username };
  loggedUsers.push(currentUserDetails);
};

const deleteClientFromUserList = loggedInUserId => {
  let index = loggedUsers.indexOf(loggedInUserId);
  loggedUsers.splice(index, 1);
};

module.exports = { addClientToUserList, deleteClientFromUserList, loggedUsers };
