import alt from "../alt.js";
import ThreadStore from "../stores/ThreadStore.js";

class UnreadThreadStore {
  constructor() {
    // TODO: ActionCreators をつくる
    this.bindActions("ActionCreators");
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
