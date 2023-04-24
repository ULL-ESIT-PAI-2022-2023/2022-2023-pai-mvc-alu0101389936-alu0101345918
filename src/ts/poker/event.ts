/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Class Event
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

/**
 * @desc Class Event
 * @classdesc The event is the class that contains the listeners
 */
export class Event {
  private readonly listeners: ((...args: any) => any)[] = [];

  /**
   * @desc Adds a listener to the event
   * @param {(...args: any) => any} listener The listener to add
   */
  public addListener(listener: (...args: any) => any): void {
    this.listeners.push(listener);
  }

  /**
   * @desc Removes a listener from the event
   * @param {(...args: any) => any} listener The listener to remove
   */
  public removeListener(listener: (...args: any) => any): void {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  /**
   * @desc Emits the event
   * @param {...any} args The arguments to pass to the listeners
   */
  public emit(...args: any[]): void {
    this.listeners.forEach((listener) => listener(...args));
  }
}