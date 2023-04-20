export class ChatView {
  messageDisplay: HTMLDivElement;
  messageInput: HTMLInputElement;
  sendButton: HTMLButtonElement;

  constructor() {
    this.messageDisplay = document.createElement("div");
    document.body.appendChild(this.messageDisplay);

    this.messageInput = document.createElement("input");
    this.messageInput.type = "text";
    document.body.appendChild(this.messageInput);

    this.sendButton = document.createElement("button");
    this.sendButton.innerText = "Enviar";
    document.body.appendChild(this.sendButton);
  }

  displayMessages(messages: string[]) {
    this.messageDisplay.innerText = messages.join("\n");
  }

  getMessageInput(): string {
    return this.messageInput.value;
  }

  clearMessageInput() {
    this.messageInput.value = "";
  }

  addSendButtonHandler(handler: () => void) {
    this.sendButton.addEventListener("click", handler);
  }
};