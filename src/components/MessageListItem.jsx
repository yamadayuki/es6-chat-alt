import React from "react";

let MessageListItem = React.createClass({
  propTypes: {
    message: React.PropTypes.object
  },

  render() {
    let message = this.props.message;
    return (
      <li className="message-list-item">
        <h5 className="message-author-name">{message.authorName}</h5>
        <div className="message-time">
          {message.date.toLocaleTimeString()}
        </div>
        <div className="message-text">{message.text}</div>
      </li>
    );
  }
});

module.exports = MessageListItem;
