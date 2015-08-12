import React from "react";
import ChatMessageActionCreators from "../actions/ChatMessageActionCreators.js";

let ENTER_KEY_CODE = 13;

let MessageComposer = React.createClass({
  getInitialState() {
    return {text: ""};
  },

  render() {
    return (
      <textarea
        className="message-composer"
        name="message"
        value={this.state.text}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
      ></textarea>
    );
  },

  _onChange(event, value) {
    this.setState({text: event.target.value});
  },

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      let text = this.state.text.trim();
      if (text) {
        ChatMessageActionCreators.createMessage(text);
      }
      this.setState({text: ""});
    }
  }
});

module.exports = MessageComposer;
