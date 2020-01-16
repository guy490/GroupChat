export const signIn = userDetails => {
  return {
    type: "SIGN_IN",
    payload: userDetails
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const recieveMessage = message => {
  return {
    type: "RECIEVE_MESSAGE",
    payload: message
  };
};

export const updateUsersList = currentUsersList => {
  return {
    type: "UPDATE_USERS_LIST",
    payload: currentUsersList
  };
};

export const setCurrentSocket = socket => {
  return {
    type: "SET_SOCKET",
    payload: socket
  };
};
