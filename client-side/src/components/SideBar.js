import "../styles/SideBar.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateUsersList } from "../actions";
import { socket } from "../client_socket";

const SideBar = ({ userList, updateUsersList }) => {
  const [userID, setUserID] = useState("");
  useEffect(() => {
    socket.on("userListHasChanged", loggedUsers => {
      console.log(loggedUsers);
      updateUsersList(loggedUsers);
      setUserID(socket.id);
    });
  }, [updateUsersList]);

  const renderUserList = () => {
    return userList.map(user => {
      return (
        <button key={user.userid} className="logged-usr">
          <span className="youspan">
            {userID === user.userid ? "You:" : ""}{" "}
          </span>
          Guest {user.username}
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
    userList: [...state.connectionReducer.usersConnectedList]
  };
};
export default connect(
  mapStateToProps,
  { updateUsersList }
)(SideBar);
