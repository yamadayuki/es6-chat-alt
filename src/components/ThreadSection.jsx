import React from "react";
import MessageStore from "../stores/MessageStore.js";
import ThreadStore from "../stores/ThreadStore.js";
import UnreadThreadStore from "../stores/UnreadThreadStore.js";
import ListenerMixin from "../mixins/ListenerMixin.js";

function getStateFromStores() {
  return {
    threads: ThreadStore.getAllChrono(),
    currentThreadID: ThreadStore.getCurrentID(),
    unreadCount: UnreadThreadStore.getCount()
  };
}

let ThreadSection = React.createClass({
  mixins: [ListenerMixin],

  getInitialState() {
    return getStateFromStores();
  },

  componentDidMount() {
    this.listenTo(ThreadStore, this._onChange);
    this.listenTo(UnreadThreadStore, this._onChange);
  },

  render() {
    var threadListItems = this.state.threads.map((thread) => {
      return (
        <li>messages</li>
      );
    });

    var unread =
      this.state.unreadCount === 0 ? null : <span>Unread threads: {this.state.unreadCount}</span>;

    return (
      <div className="thread-section">
        <div className="thread-count">{unread}</div>
        <ul className="thread-list">
          {threadListItems}
        </ul>
      </div>
    );
  },

  _onChange() {
    this.setState(getStateFromStores());
  }
});

module.exports = ThreadSection;
