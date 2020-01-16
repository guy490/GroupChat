import "../styles/SideBar.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateUsersList } from "../actions";

const SideBar = ({ userList, updateUsersList, socket }) => {
  useEffect(() => {
    if (socket !== "") {
      socket.on("userListHasChanged", loggedUsers => {
        updateUsersList(loggedUsers);
      });
    }
  }, [updateUsersList, socket]);

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
    <div className="ui sideBar segment">
      <button className="header">Users in chat:</button>
      {renderUserList()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userList: [...state.connectionReducer.usersConnectedList],
    socket: state.currentSocket.socket
  };
};
export default connect(
  mapStateToProps,
  { updateUsersList }
)(SideBar);
