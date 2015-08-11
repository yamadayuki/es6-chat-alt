import alt from "../alt.js";

class ThreadStore {
  constructor() {
    // TODO: ActionCreators をつくる
    this.bindActions("ActionCreators");

    this.currentID = null;
    this.threads = {};
  }

  onClickThread(threadID) {
    this.currentID = threadID;
    this.threads[this.currentID].lastMessage.isRead = true;
  }

  onReceiveAll(rawMessages) {
    this._init(rawMessages);
  }

  _init(rawMessages) {
    rawMessages.forEach((message) => {
      let threadID = message.threadID;
      let thread = this.threads[threadID];
      if (thread  && thread.lastTimestamp > message.timestamp) {
        return;
      }
      this.threads[threadID] = {
        id: threadID,
        name: message.threadName,
        lastMessage: "utils not implemented..."
      };
    });

    if (!this.currentID) {
      var allChrono = this.getInstance().getAllChrono();
      this.currentID = allChrono[allChrono.length - 1].id;
    }

    this.threads[this.currentID].lastMessage.isRead = true;
  }

  static get(id) {
    return this.getState().threads[id];
  }

  static getAll() {
    return this.getState().threads;
  }

  static getAllChrono() {
    let { threads } = this.getState();
    var orderedThreads = [];

    for (var id in threads) {
      var thread = threads[id];
      orderedThreads.push(thread);
    }

    orderedThreads.sort((a, b) => {
      if (a.lastMessage.date < b.lastMessage.date) {
        return -1;
      } else if (a.lastMessage.date > b.lastMessage.date) {
        return 1;
      }
      return 0;
    });

    return orderedThreads;
  }

  static getCurrentID() {
    return this.getState().currentID;
  }

  static getCurrent() {
    let { threads, currentID } = this.getState();
    return threads[currentID];
  }
}

module.exports = alt.createStore(ThreadStore, "ThreadStore");