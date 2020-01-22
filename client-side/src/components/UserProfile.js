import { socket } from "../client_socket";

const createGuestUserProfile = userID => {
  let username = "";
  userID.split("").forEach((char, ind) => {
    if (ind % 4 === 0) {
      username += char;
    }
  });
  return {
    socketID: socket.id,
    id: userID,
    username: `Guest ${username}`,
    imgURL:
      "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1908/lineartestpilot190834340/128650855-cartoon-question-mark-with-speech-bubble-in-smooth-gradient-style.jpg"
  };
};

const createGoogleUserProfile = googleProfile => {
  return {
    socketID: socket.id,
    id: googleProfile.getId(),
    username: googleProfile.getName(),
    imgURL: googleProfile.getImageUrl()
  };
};

export { createGuestUserProfile, createGoogleUserProfile };
