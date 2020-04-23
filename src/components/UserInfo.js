import React from "react";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Joseph Chao",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

const UserInfo = (
  <div className="Comment">
    <div className="UserInfo">
      <Avatar user={comment.author} />
      <div className="UserInfo-name">{comment.author.name}</div>
    </div>
    <div className="Comment-text">{comment.text}</div>
    <div className="Comment-date">{formatDate(comment.date)}</div>
  </div>
);

export default UserInfo;
