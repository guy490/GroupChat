import "../styles/TextArea.css";
import React, { useState } from "react";
import { socket } from "../client_socket";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";

const TextArea = ({ userProfile, privateChat }) => {
  const [imgFile, setImgFile] = useState(null);

  const sendMessage = (message) => {
    if (!privateChat) {
      socket.emit("subscribeMessage", message);
    }
  };
  const onSubmit = (event) => {
    if (event.key === "Enter") {
      const message = {
        senderName: userProfile.username,
        date: new Date(),
        text: event.target.value,
        mediaContent: imgFile,
        image: userProfile.imgURL,
      };
      event.target.value = "";
      setImgFile(null);
      sendMessage(message);
    }
  };
  const onDrop = (picture) => {
    setImgFile(picture[0]);
  };
  const getURL = (imgFile) => {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(imgFile);
    return imageUrl;
  };

  return (
    <div className="ui input">
      <div className="ui fake-input fluid focus">
        <input
          type="text"
          placeholder="Chat"
          className="input-sizing"
          onKeyPress={onSubmit}
        />
        {imgFile !== null ? (
          <img
            alt="Media Content"
            height="100px"
            width="100px"
            src={getURL(imgFile)}
          ></img>
        ) : null}
      </div>
      <ImageUploader
        withIcon={false}
        buttonText="Choose images"
        onChange={onDrop}
        singleImage={true}
        imgExtension={[".jpg"]}
        maxFileSize={5242880}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { userProfile: state.profileReducer };
};
export default connect(mapStateToProps)(TextArea);
