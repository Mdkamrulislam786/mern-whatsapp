import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg" />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Messages</p>
      </div>
    </div>
  );
};

export default SidebarChat;

// src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg"
