import React from "react";
import MessageSection from "./MessageSection.jsx";
import ThreadSection from "./ThreadSection.jsx";

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chatapp">
        <ThreadSection></ThreadSection>
        <MessageSection></MessageSection>
      </div>
    );
  }
}
