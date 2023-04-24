export class ChatView {
  private chatBox: HTMLDivElement;
  private messageForm: HTMLFormElement;
  private messageInput: HTMLInputElement;

  constructor() {
    this.chatBox = document.getElementById('chat-box') as HTMLDivElement;
    this.messageForm = document.getElementById('message-form') as HTMLFormElement;
    this.messageInput = document.getElementById('message-input') as HTMLInputElement;
  }

  public renderMessages(messages: { author: string; message: string; timestamp: Date }[]) {
    this.chatBox.innerHTML = '';
    for (const message of messages) {
      const div = document.createElement('div');
      div.classList.add('message');
      div.innerHTML = `<span class="author">${message.author}</span><span class="timestamp">${message.timestamp.toLocaleString()}</span><br>${message.message}`;
      this.chatBox.appendChild(div);
    }
    this.chatBox.scrollTop = this.chatBox.scrollHeight;
  }

  public getMessage(): string {
    return this.messageInput.value.trim();
  }

  public clearMessageInput() {
    this.messageInput.value = '';
  }

  public focusMessageInput() {
    this.messageInput.focus();
  }

  public onSubmit(callback: () => void) {
    this.messageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      callback();
    });
  }
}
