import ChatServerActionCreators from "../actions/ChatServerActionCreators.js";

module.exports = {
  getAllMessages() {
    let rawMessages = JSON.parse(localStorage.getItem("messages"));
    ChatServerActionCreators.receiveAll(rawMessages);
  },

  createMessage(message, threadName) {
    var rawMessages = JSON.parse(localStorage.getItem("messages"));
    let timestamp = Date.now();
    let id = "m_" + timestamp;
    let threadID = message.threadID || ("t_" + Date.now());
    let createdMessage = {
      id: id,
      threadID: threadID,
      threadName: threadName,
      authorName: message.authorName,
      text: message.text,
      timestamp: timestamp
    };
    rawMessages.push(createdMessage);
    localStorage.setItem("messages", JSON.stringify(rawMessages));

    setTimeout(() => {
      ChatServerActionCreators.receiveCreatedMessage(createdMessage);
    }, 0);
  }
};
