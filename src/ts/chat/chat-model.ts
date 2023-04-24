/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Class ChatModel
  */

import { Message } from './message.js';

/**
 * @desc Class ChatModel
 * @classdesc The ChatModel class is the class that manages the chat
 */
export class ChatModel {
  private messages: Message[] = [];

  /**
   * @desc Adds a message to the chat
   * @param {string} author - Author of the message
   * @param {string} message - Message
   */
  public addMessage(author: string, message: string): void {
    const timestamp = new Date();
    this.messages.push({ author, message, timestamp });
    if (this.messages.length > 10) {
      this.messages.shift();
    }
  }

  /**
   * @desc Returns the messages
   * @returns {Object[]} messages - Array of messages
   */
  public getMessages(): Message[] {
    return this.messages;
  }
}
