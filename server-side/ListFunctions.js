const addClientToUserList = (loggedUsers, loggedInUserId) => {
  let username = "";
  loggedInUserId.split("").forEach((char, ind) => {
    if (ind % 4 == 0) {
      username += char;
    }
  });
  let currentUserDetails = { userid: loggedInUserId, username };
  loggedUsers.push(currentUserDetails);
};

const deleteClientFromUserList = (loggedUsers, loggedInUserId) => {
  let index = loggedUsers.findIndex(user => user.userid === loggedInUserId);
  return [
    ...loggedUsers.slice(0, index),
    ...loggedUsers.slice(index + 1, loggedUsers.length)
  ];
};

module.exports = { addClientToUserList, deleteClientFromUserList };
