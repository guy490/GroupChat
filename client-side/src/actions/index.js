import { socket } from "../client_socket";

export const sendMessage = message => {
  socket.emit("subscribeMessage", message);
};

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
