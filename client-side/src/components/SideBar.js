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

  const renderUserList = () => {
    return userList.map(user => {
      return (
        <button
          key={user.userid}
          className={`${socket.id === user.userid ? "youspan" : ""} logged-usr`}
        >
          {socket.id === user.userid ? "You:" : ""} Guest {user.username}
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

const mapStateToProps = state => {
  return {
    userList: [...state.connectionReducer.usersConnectedList]
  };
};
export default connect(mapStateToProps, { updateUsersList })(SideBar);
