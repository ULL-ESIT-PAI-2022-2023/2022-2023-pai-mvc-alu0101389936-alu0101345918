/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Class ChatView
  */

import { Message } from './message.js';

/**
 * @desc Class ChatView
 * @classdesc The ChatView class is the class that manages the chat view
 */
export class ChatView {
  private chatBox: HTMLDivElement;
  private messageForm: HTMLFormElement;
  private messageInput: HTMLInputElement;

  /**
   * @constructor
   */
  constructor() {
    this.chatBox = document.getElementById('chat-box') as HTMLDivElement;
    this.messageForm = document.getElementById('message-form') as HTMLFormElement;
    this.messageInput = document.getElementById('message-input') as HTMLInputElement;
  }

  /**
   * @desc Method that renders the messages
   * @param {Object[]} messages - Array of messages
   */
  public renderMessages(messages: Message[]): void {
    this.chatBox.innerHTML = '';
    for (const message of messages) {
      const div = document.createElement('div');
      div.classList.add('message');
      div.innerHTML = `<span class="author">${message.author}</span><span class="timestamp">${message.timestamp.toLocaleString()}</span><br>${message.message}`;
      this.chatBox.appendChild(div);
    }
    this.chatBox.scrollTop = this.chatBox.scrollHeight;
  }

  /**
   * @desc Method that returns the message
   * @returns {string} message - Message
   */
  public getMessage(): string {
    return this.messageInput.value.trim();
  }

  /**
   * @desc Method that clears the message input
   */
  public clearMessageInput(): void {
    this.messageInput.value = '';
  }

  /**
   * @desc Method that focuses the message input
   */
  public focusMessageInput(): void {
    this.messageInput.focus();
  }

  /**
   * @desc Method that adds an event listener to the submit event
   * @param {Function} callback - Callback function
   */
  public onSubmit(callback: () => void): void {
    this.messageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      callback();
    });
  }
}
