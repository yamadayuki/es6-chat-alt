import React from "react";
import ThreadStore from "../stores/ThreadStore.js";
import ListenerMixin from "../mixins/ListenerMixin.js";

function getStateFromStores() {
  return {
    threads: ThreadStore.getAllChrono(),
    currentThreadID: ThreadStore.getCurrentID()
  };
}

let ThreadSection = React.createClass({
  mixins: [ListenerMixin],

  getInitialState() {
    return getStateFromStores();
  },

  componentDidMount() {
    this.listenTo(ThreadStore, this._onChange);
  },

  render() {
    return (
      <div className="thread-section"><h2>ThreadSection</h2></div>
    );
  },

  _onChange() {
    this.setState(getStateFromStores());
  }
});

module.exports = ThreadSection;
