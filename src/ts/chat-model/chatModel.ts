export class ChatModel {
  messages: string[];

  constructor() {
    this.messages = [];
  }

  addMessage(message: string) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }
};