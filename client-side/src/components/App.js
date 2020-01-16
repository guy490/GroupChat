import "../styles/App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentSocket } from "../actions";
import MessageArea from "./MessageArea";
import TextArea from "./TextArea";
import GoogleAuth from "./GoogleAuth";
import openSocket from "socket.io-client";

const App = ({ setCurrentSocket }) => {
  useEffect(() => {
    const socket = openSocket("wss://chatsocket490.herokuapp.com");
    setCurrentSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, [setCurrentSocket]);
  return (
    <div className="ui container">
      <div className="ui chat">
        <div className="ui placeholder segment">
          <MessageArea />
          <div className="ui divider"></div>
          <TextArea />
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { setCurrentSocket }
)(App);
