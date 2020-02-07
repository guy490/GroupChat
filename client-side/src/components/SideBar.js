import "../styles/SideBar.css";
import "../styles/ResizableModal.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateUsersList } from "../actions";
import { socket } from "../client_socket";
import App from "./App";
import Modal from "react-modal-resizable-draggable";

const SideBar = ({ userList, updateUsersList }) => {
  useEffect(() => {
    socket.on("userListHasChanged", loggedUsers => {
      updateUsersList(loggedUsers);
    });
  }, [updateUsersList]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const chatModal = () => {
    return (
      <Modal
        initWidth={800}
        initHeight={400}
        onFocus={() => console.log("Modal is clicked")}
        className={"my-modal-custom-class"}
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
      >
        <App privateChat={true} />
        <button onClick={closeModal}>Close modal</button>
      </Modal>
    );
  };

  const createButtonClass = user => {
    const isCurrentUser = socket.id === user.socketID;
    const buttonClass = `${isCurrentUser ? "youspan" : ""} logged-usr`;
    return buttonClass;
  };

  const renderUserList = () => {
    return userList.map(user => {
      const buttonClass = createButtonClass(user);
      return (
        <button key={user.id} className={buttonClass} onClick={openModal}>
          {user.username}
        </button>
      );
    });
  };

  return (
    <div className="ui side-bar segment">
      <button className="header">Users in chat:</button>
      {renderUserList()}
      {chatModal()}
    </div>
  );
};

const mapStateToProps = ({ userListReducer }) => {
  return {
    userList: [...userListReducer.usersList]
  };
};
export default connect(mapStateToProps, { updateUsersList })(SideBar);
