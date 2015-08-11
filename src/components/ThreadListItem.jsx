import React from "react";
import ChatThreadActionCreators from "../actions/ChatThreadActionCreators.js";

var ThreadListItem = React.createClass({
  propTypes: {
    thread: React.PropTypes.object,
    currentThreadID: React.PropTypes.string
  },

  render() {
    var thread = this.props.thread;
    var lastMessage = thread.lastMessage;
    var classString = "thread-list-item";
    if (thread.id === this.props.currentThreadID) {
      classString += " active";
    }
    return (
      <li className={classString} onClick={this._onClick}>
        <h5 className="thread-name">{thread.name}</h5>
        <div className="thread-time">
          {lastMessage.date.toLocaleTimeString()}
        </div>
        <div className="thread-last-message">
          {lastMessage.text}
        </div>
      </li>
    );
  },

  _onClick() {
    ChatThreadActionCreators.clickThread(this.props.thread.id);
  }
});

module.exports = ThreadListItem;
