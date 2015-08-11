import React from "react";
import ChatExampleData from "./ChatExampleData.js";
import ChatApp from "./components/ChatApp.jsx";
import ChatWebAPIUtils from "./utils/ChatWebAPIUtils.js";

ChatExampleData.init();

ChatWebAPIUtils.getAllMessages();

React.render(
  <ChatApp></ChatApp>, document.getElementById("react")
);
