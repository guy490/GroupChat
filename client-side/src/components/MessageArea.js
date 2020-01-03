import "../styles/MessageArea.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { recieveMessage, userConnected } from "../actions";
import { socket } from "../client_socket";
import Comment from "./Comment";
import SideBar from "./SideBar";

const MessageArea = ({ recieveMessage, messages, userConnected }) => {
  useEffect(() => {
    socket.on("viewMessage", message => recieveMessage(message));
    socket.on("userChangedConnectionStatus", user => userConnected(user));
  }, [recieveMessage, userConnected]);

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
      <div>
        <SideBar />
      </div>
      <div className="ui fluid comments segment container">
        {renderComments()}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { messages: [...state.messageReducer.messages] };
};
export default connect(
  mapStateToProps,
  { recieveMessage, userConnected }
)(MessageArea);
