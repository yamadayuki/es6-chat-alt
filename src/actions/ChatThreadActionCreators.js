import alt from "../alt.js";

class ChatThreadActions {
  constructor() {
    this.generateActions("clickThread");
  }
}

module.exports = alt.createActions(ChatThreadActions);
