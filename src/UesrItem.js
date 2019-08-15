import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const UserItem = props => {
  const { id, login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <h2>{login}</h2>
      <img src={avatar_url} className="round-img" style={{ width: 60 }} />
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired
};
export default UserItem;
