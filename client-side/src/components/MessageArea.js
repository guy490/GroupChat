import "../styles/MessageArea.css";
import React, { useRef } from "react";
import SideBar from "./SideBar";
import Chat from "./Chat";

const MessageArea = () => {
  const sideBarRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleSideBar = (sideBarRef, toggleRef) => {
    const leftIcon = toggleRef.current.querySelector(".left");
    const rightIcon = toggleRef.current.querySelector(".right");

    if (!sideBarRef.current.style.width) {
      sideBarRef.current.style.visibility = "visible";
      sideBarRef.current.style.width = "50%";
    } else {
      sideBarRef.current.style.width = null;
      sideBarRef.current.style.visibility = "hidden";
    }

    leftIcon.classList.toggle("hidden");
    rightIcon.classList.toggle("hidden");
  };
  return (
    <div className="ui top-view">
      <div ref={sideBarRef} className="side-bar-view">
        <SideBar />
      </div>
      <div className="chat-view">
        <div
          ref={toggleRef}
          className="open-side-bar"
          onClick={() => toggleSideBar(sideBarRef, toggleRef)}
        >
          <i className="angle double right icon"></i>
          <i className="angle double left icon hidden"></i>
          <i className="clipboard list icon"></i>
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default MessageArea;
