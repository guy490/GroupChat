import "../styles/TextArea.css";
import React from "react";
import { connect } from "react-redux";

const TextArea = ({ auth, socket }) => {
  const sendMessage = message => {
    socket.emit("subscribeMessage", message);
  };
  const onSubmit = event => {
    if (event.key === "Enter") {
      const message = {
        senderName: auth.userDetails ? auth.userDetails.getName() : "Guest",
        date: new Date(),
        text: event.target.value,
        image: auth.userDetails ? auth.userDetails.getImageUrl() : ""
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
  return { auth: state.authReducer, socket: state.currentSocket.socket };
};
export default connect(mapStateToProps)(TextArea);
