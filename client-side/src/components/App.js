import "../styles/App.css";
import React from "react";
import MessageArea from "./MessageArea";
import TextArea from "./TextArea";
import GoogleAuth from "./GoogleAuth";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui container chat">
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

export default App;
