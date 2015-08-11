import ThreadStore from "../stores/ThreadStore.js";

class ChatMessageDataUtils {
  static getCreatedMessageData(text) {
    let timestamp = Date.now();
    return {
      id: "m_" + timestamp,
      threadID: ThreadStore.getCurrentID(),
      authorName: "Bill",
      date: new Date(timestamp),
      text: text,
      isRead: true
    };
  }
}

module.exports = ChatMessageDataUtils;
