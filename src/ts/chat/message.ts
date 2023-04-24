/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García - Sergio Nicolás Seguí
  * @since 22 Apr. 2023
  * @desc Interface Message
  */

/**
 * @desc Interface Message
 * @classdesc The Message interface is the interface that defines the message object
 */
export interface Message {
  author: string;
  message: string;
  timestamp: Date;
}