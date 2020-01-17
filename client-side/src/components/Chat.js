import "../styles/Chat.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { recieveMessage } from "../actions";
import { socket } from "../client_socket";
import Comment from "./Comment";

const Chat = ({ recieveMessage, messages }) => {
  useEffect(() => {
    socket.on("viewMessage", message => recieveMessage(message));
  }, [recieveMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    let scrollingElement = document.querySelector(".comments");
    if (scrollingElement !== null) {
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }
  };

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
    <div className="ui comments segment container">{renderComments()}</div>
  );
};

const mapStateToProps = state => {
  return {
    messages: [...state.messageReducer.messages]
  };
};
export default connect(mapStateToProps, { recieveMessage })(Chat);
