import "../styles/App.css";
import React, { useEffect } from "react";
import MessageArea from "./MessageArea";
import TextArea from "./TextArea";
import GoogleAuth from "./GoogleAuth";
import { socket } from "../client_socket";

const App = () => {
  useEffect(() => () => socket.emit("disconnect"), []);
  return (
    <div className="ui container">
      <div className="ui chat">
        <div className="ui placeholder segment">
          <div className="head-view">
            <MessageArea />
          </div>
          <div className="ui divider"></div>
          <div className="buttom-view">
            <div className="text-area">
              <TextArea />
            </div>
            <div className="google-auth-area">
              <GoogleAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
