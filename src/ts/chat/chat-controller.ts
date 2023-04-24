/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Class ChatController
  */

import { ChatModel } from './chat-model.js';
import { ChatView } from './chat-view.js';

/**
 * @desc Class ChatController
 * @classdesc The ChatController class is the class that controls the chat
 */
export class ChatController {
  private model: ChatModel;
  private view: ChatView;

  /**
   * @constructor
   */
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
