import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;
  //console.log(name);
  return (
    <div>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>
        username: <Link to={`/friend/${id}`}>{username}</Link>
      </p>
    </div>
  );
};

export default Friend;
