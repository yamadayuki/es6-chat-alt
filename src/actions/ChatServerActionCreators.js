import alt from "../alt.js";

class ChatServerActions {
  constructor() {
    this.generateActions("receiveCreatedMessage", "receiveAll");
  }
}

module.exports = alt.createActions(ChatServerActions);
