export class ChatModel {
  private messages: { author: string; message: string; timestamp: Date }[] = [];

  public addMessage(author: string, message: string) {
    const timestamp = new Date();
    this.messages.push({ author, message, timestamp });
    if (this.messages.length > 10) {
      this.messages.shift();
    }
  }

  public getMessages(): { author: string; message: string; timestamp: Date }[] {
    return this.messages;
  }
}
