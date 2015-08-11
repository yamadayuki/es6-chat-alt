import alt from "../alt.js";
import ChatServerActionCreators from "../actions/ChatServerActionCreators.js";
import ChatThreadActionCreators from "../actions/ChatThreadActionCreators.js";
import ThreadStore from "../stores/ThreadStore.js";

class UnreadThreadStore {
  constructor() {
    this.bindActions(ChatServerActionCreators);
    this.bindActions(ChatThreadActionCreators);
  }

  onClickThread(threadID) {
    this.wait();
  }

  onReceiveRawMessages(rawMessages) {
    this.wait();
  }

  wait() {
    this.waitFor([
      ThreadStore.dispatchToken,
      // MessageStore.dispatchToken
    ]);
  }

  static getCount() {
    let threads = ThreadStore.getAll();
    var unreadCount = 0;
    for (var id in threads) {
      if (!threads[id].lastMessage.isRead) {
        unreadCount++;
      }
    }

    return unreadCount;
  }
}

module.exports = alt.createStore(UnreadThreadStore, "UnreadThreadStore");
