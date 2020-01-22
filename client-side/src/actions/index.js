export const signIn = userDetails => {
  return {
    type: "SIGN_IN",
    payload: userDetails
  };
};

export const signAsGuest = guestDetails => {
  return {
    type: "SIGN_AS_GUEST",
    payload: guestDetails
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
