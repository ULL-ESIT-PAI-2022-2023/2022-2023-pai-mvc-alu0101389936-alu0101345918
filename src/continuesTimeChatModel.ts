// Modelo
class ChatModel {
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
}

// Vista
class ChatView {
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
}

// Controlador
class ChatController {
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
}

// Uso
const model = new ChatModel();
const view = new ChatView();
const controller = new ChatController(model, view);
