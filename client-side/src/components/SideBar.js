import "../styles/SideBar.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateUsersList } from "../actions";
import { socket } from "../client_socket";

const SideBar = ({ userList, updateUsersList }) => {
  useEffect(() => {
    socket.on("userListHasChanged", loggedUsers => {
      updateUsersList(loggedUsers);
    });
  }, [updateUsersList]);

  const createButtonClass = user => {
    const isCurrentUser = socket.id === user.socketID;
    const buttonClass = `${isCurrentUser ? "youspan" : ""} logged-usr`;
    return buttonClass;
  };

  const renderUserList = () => {
    return userList.map(user => {
      const buttonClass = createButtonClass(user);
      return (
        <button key={user.id} className={buttonClass}>
          {user.username}
        </button>
      );
    });
  };

  return (
    <div className="ui side-bar segment">
      <button className="header">Users in chat:</button>
      {renderUserList()}
    </div>
  );
};

const mapStateToProps = ({ userListReducer }) => {
  return {
    userList: [...userListReducer.usersList]
  };
};
export default connect(mapStateToProps, { updateUsersList })(SideBar);
