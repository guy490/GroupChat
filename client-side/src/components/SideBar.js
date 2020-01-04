import "../styles/SideBar.css";
import React, { useState, useEffect } from "react";
import { socket } from "../client_socket";

const SideBar = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    socket.on("listOfUsersHasChanged", userList => {
      setUserList(userList);
    });
  }, []);

  const renderUserList = () => {
    return userList.map(user => {
      return <button className="logged-usr">Guest {user.username}</button>;
    });
  };

  return (
    <div className="ui sideBar segment">
      <button className="header">Users in chat:</button>
      {renderUserList()}
    </div>
  );
};
export default SideBar;
