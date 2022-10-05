import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div className="friends">
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
