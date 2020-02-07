import "../styles/TextArea.css";
import React from "react";
import { socket } from "../client_socket";
import { connect } from "react-redux";

const TextArea = ({ userProfile, privateChat }) => {
  const sendMessage = message => {
    if (!privateChat) {
      socket.emit("subscribeMessage", message);
    }
  };
  const onSubmit = event => {
    if (event.key === "Enter") {
      const message = {
        senderName: userProfile.username,
        date: new Date(),
        text: event.target.value,
        image: userProfile.imgURL
      };
      event.target.value = "";
      sendMessage(message);
    }
  };

  return (
    <div className="ui container fluid focus input">
      <input
        type="text"
        placeholder="Chat"
        className="input-sizing"
        onKeyPress={onSubmit}
      />
    </div>
  );
};
const mapStateToProps = state => {
  return { userProfile: state.profileReducer };
};
export default connect(mapStateToProps)(TextArea);
