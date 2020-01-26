const addClientToUserList = (loggedUsers, userProfile) => {
  let index = loggedUsers.findIndex(user => {
    return user.socketID === userProfile.socketID;
  });
  if (index === -1) {
    loggedUsers.push(userProfile);
  } else {
    loggedUsers[index] = userProfile;
  }
};

const deleteClientFromUserList = (loggedUsers, loggedInUserId) => {
  let index = loggedUsers.findIndex(user => user.socketID === loggedInUserId);
  return [
    ...loggedUsers.slice(0, index),
    ...loggedUsers.slice(index + 1, loggedUsers.length)
  ];
};

module.exports = { addClientToUserList, deleteClientFromUserList };
