import { ChatModel } from './chat-model.js';
import { ChatView } from './chat-view.js';

export class ChatController {
  private model: ChatModel;
  private view: ChatView;

  constructor() {
    this.model = new ChatModel();
    this.view = new ChatView();

    this.view.onSubmit(() => {
      const message = this.view.getMessage();
      if (message !== '') {
        this.model.addMessage('Yo', message);
        const messages = this.model.getMessages();
        this.view.renderMessages(messages);
        this.view.clearMessageInput();
        this.view.focusMessageInput();
      }
    });

    const messages = this.model.getMessages();
    this.view.renderMessages(messages);
    this.view.focusMessageInput();
  }
}
