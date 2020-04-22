import "../styles/Comment.css";
import React from "react";

const Comment = ({ messageDate, image, name, text, mediaContent }) => {
  const date =
    messageDate.getDate() +
    "/" +
    (messageDate.getMonth() + 1) +
    "/" +
    messageDate.getFullYear() +
    " @ " +
    messageDate.getHours() +
    ":" +
    messageDate.getMinutes() +
    ":" +
    messageDate.getSeconds();

  const renderAvatar = () => {
    if (image === "") {
      return null;
    }
    return (
      <div className="avatar">
        <img src={image} alt="" />
      </div>
    );
  };

  const getMediaContentAsURL = (mediaContent) => {
    var blob = new Blob([mediaContent], { type: "image/jpeg" });
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(blob);
    return imageUrl;
  };
  return (
    <div className="comment">
      <div className="content">
        {renderAvatar()}
        <a className="author" href="www.walla.com">
          {name}
        </a>
        <div className="metadata">
          <div>{date}</div>
        </div>
        <div className="text">
          <p>{text}</p>

          {mediaContent !== null ? (
            <p>
              <img
                alt="Media Content"
                height="100"
                width="100"
                src={getMediaContentAsURL(mediaContent)}
              ></img>
              <a
                className="ui button green"
                href={getMediaContentAsURL(mediaContent)}
                download
              >
                Download
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Comment;
