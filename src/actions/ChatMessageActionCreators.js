import alt from "../alt.js";
import ChatMessageDataUtils from "../utils/ChatMessageDataUtils.js";
import ChatWebAPIUtils from "../utils/ChatWebAPIUtils.js";

class ChatmessageActions {
  createMessage(text) {
    this.dispatch(text);

    let message = ChatMessageDataUtils.getCreatedMessageData(text);
    ChatWebAPIUtils.createMessage(message);
  }
}

module.exports = alt.createActions(ChatmessageActions);
