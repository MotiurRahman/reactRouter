import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend.name);
  return (
    <div>
      <h1>Friend Name:{friend.name}</h1>
      <p>Phone:{friend.phone}</p>
    </div>
  );
};

export default FriendDetails;
