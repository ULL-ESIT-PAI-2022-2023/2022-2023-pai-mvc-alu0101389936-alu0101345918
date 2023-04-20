import { ChatModel } from "./chatModel";
import { ChatView } from "./chatView";

export class ChatController {
  model: ChatModel;
  view: ChatView;

  constructor(model: ChatModel, view: ChatView) {
    this.model = model;
    this.view = view;

    this.view.addSendButtonHandler(() => {
      const message = this.view.getMessageInput();
      if (message) {
        this.model.addMessage(message);
        this.view.clearMessageInput();
        this.view.displayMessages(this.model.getMessages());
      }
    });

    this.view.displayMessages(this.model.getMessages());
  }
};