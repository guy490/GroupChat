import "../styles/MessageArea.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { recieveMessage } from "../actions";
import Comment from "./Comment";
import SideBar from "./SideBar";

const MessageArea = ({ recieveMessage, messages, socket }) => {
  useEffect(() => {
    if (socket !== "") {
      socket.on("viewMessage", message => recieveMessage(message));
    }
  }, [recieveMessage, socket]);

  const renderComments = () => {
    return messages.map((message, ind) => {
      if (typeof message === "string") {
        return <Comment key={ind} name={""} date={new Date()} text={message} />;
      }
      return (
        <Comment
          key={ind}
          name={message.senderName}
          date={new Date(message.date)}
          text={message.text}
          image={message.image}
        />
      );
    });
  };
  return (
    <div className="ui chat-view">
      <SideBar />
      <div className="ui fluid comments segment container">
        {renderComments()}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messages: [...state.messageReducer.messages],
    socket: state.currentSocket.socket
  };
};
export default connect(
  mapStateToProps,
  { recieveMessage }
)(MessageArea);
