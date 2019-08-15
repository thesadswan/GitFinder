import React from "react";

const UserItem = props => {
  const { id, login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <h2>{login}</h2>
      <img src={avatar_url} className="round-img" style={{ width: 60 }} />
      <a className="btn btn-dark btn-sm my-1" href={html_url}>
        More
      </a>
    </div>
  );
};

UserItem.prototype = {};
export default UserItem;
