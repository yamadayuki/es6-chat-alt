import React from "react";
import MessageComposer from "./MessageComposer.jsx";
import MessageListItem from "./MessageListItem.jsx";
import MessageStore from "../stores/MessageStore.js";
import ThreadStore from "../stores/ThreadStore.js";
import ListenerMixin from "../mixins/ListenerMixin.js";

function getStateFromStores() {
  return {
    messages: MessageStore.getAllForCurrentThread(),
    thread: ThreadStore.getCurrent()
  };
}

function getMessageListItem(message) {
  return (
    <MessageListItem key={message.id} message={message}></MessageListItem>
  );
}

let MessageSection = React.createClass({
  mixins: [ListenerMixin],

  getInitialState() {
    return getStateFromStores();
  },

  componentDidMount() {
    this._scrollToBottom();
    this.listenTo(MessageStore, this._onChange);
    this.listenTo(ThreadStore, this._onChange);
  },

  componentDidUpdate() {
    this._scrollToBottom();
  },

  render() {
    var messageListItems = this.state.messages.map(getMessageListItem);
    return (
      <div className="message-section">
        <h3 className="message-thread-heading">{this.state.thread.name}</h3>
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        <MessageComposer></MessageComposer>
      </div>
    );
  },

  _scrollToBottom() {
    var ul = this.refs.messageList.getDOMNode();
    ul.scrollTop = ul.scrollHeight;
  },

  _onChange() {
    this.setState(getStateFromStores());
  }
});

module.exports = MessageSection;
