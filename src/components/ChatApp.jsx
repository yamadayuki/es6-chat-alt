import React from "react";
import ThreadSection from "./ThreadSection.jsx";

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chatapp">
        <ThreadSection></ThreadSection>
      </div>
    );
  }
}
