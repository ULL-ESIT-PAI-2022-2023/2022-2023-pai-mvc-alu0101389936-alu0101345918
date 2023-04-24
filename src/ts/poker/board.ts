/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Class Board
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

import { Event } from './event.js';

/**
 * @desc Structure of the HandsAreas values
 * @interface
 */
export interface HANDSAREAS {
  width: number;
  height: number;
  originX: number;
  originY: number;
}

/**
 * @desc Class Board
 * @classdesc The board is the canvas where the cards are drawn
 */
export class Board {
  private cardsPadding = 0.02;
  private ctx: CanvasRenderingContext2D;
  private handsAreas: { [key: string]: HANDSAREAS } = {};
  private handsImages: { [key: string]: Array<string> } = {};
  public readonly drawHandEvents: { [key: string]: Event } = {};
  private drawButtons: { [key: string]: HTMLElement } = {};
  public readonly viewChangeEvent: Event = new Event();
  private showWinnerButton: HTMLElement;
  public readonly showWinnerEvent: Event = new Event();
  private pokerHandDrawButton: HTMLElement;
  public readonly pokerHandDrawEvent: Event = new Event();
  private tripsDrawButton: HTMLElement;
  public readonly tripsDrawEvent: Event = new Event();
  private winner = '';

  /**
   * @constructor
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on
   * @param {Array<String>} players - The players of the game
   */
  constructor(private canvas: HTMLCanvasElement, private players: Array<string>) {
    if (!canvas) throw new Error('Canvas is not defined');
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.players.forEach((player, index) => {
      this.drawHandEvents[player] = new Event();
      this.handsImages[player] = [];
      this.handsAreas[player] = {
        width: this.canvas.width,
        height: this.canvas.height / this.players.length,
        originX: 0,
        originY: (this.canvas.height / this.players.length) * index
      };
      this.handsAreas[player].originX + (this.handsAreas[player].width * this.cardsPadding);
      this.handsAreas[player].originY + (this.handsAreas[player].height * this.cardsPadding);
      this.drawButtons[player] = document.getElementById(`draw-${player}-button`) as HTMLElement;
      if (!this.drawButtons[player]) throw new Error(`Button for ${player} does not exist`);
      this.drawButtons[player].addEventListener('click', () => {
        this.drawHandEvents[player].emit(player);
        this.pokerHandDrawButton.style.display = 'none';
        this.tripsDrawButton.style.display = 'none';
      });
    });

    this.showWinnerButton = document.getElementById('show-winner-button') as HTMLElement;
    if (!this.showWinnerButton) throw new Error('Show winner button does not exist');
    this.showWinnerButton.addEventListener('click', () => {
      this.showWinnerEvent.emit();
      this.players.forEach((player) => {
        this.drawButtons[player].style.display = 'none';
      });
      this.showWinnerButton.style.display = 'none';
      this.pokerHandDrawButton.style.display = 'none';
      this.tripsDrawButton.style.display = 'none';
    });

    this.pokerHandDrawButton = document.getElementById('poker-hand') as HTMLElement;
    if (!this.pokerHandDrawButton) throw new Error('Show winner button does not exist');
    this.pokerHandDrawButton.addEventListener('click', () => {
      this.pokerHandDrawEvent.emit();
      this.players.forEach((player) => {
        this.drawButtons[player].style.display = 'none';
      });
      this.showWinnerButton.style.display = 'none';
      this.pokerHandDrawButton.style.display = 'none';
      this.tripsDrawButton.style.display = 'none';
    });

    this.tripsDrawButton = document.getElementById('trips') as HTMLElement;
    if (!this.tripsDrawButton) throw new Error('Show winner button does not exist');
    this.tripsDrawButton.addEventListener('click', () => {
      this.tripsDrawEvent.emit();
      this.players.forEach((player) => {
        this.drawButtons[player].style.display = 'none';
      });
      this.showWinnerButton.style.display = 'none';
      this.pokerHandDrawButton.style.display = 'none';
      this.tripsDrawButton.style.display = 'none';
    });
  }

  /**
   * @desc assign the card images given to the player
   * @param {String} player - The player to assign the images to
   * @param {Array<String>} images - The images to assign
   */
  public assignImages(player: string, images: Array<string>): void {
    if (this.handsImages[player] === undefined) throw new Error('Player does not exist');
    this.handsImages[player] = images;
    this.viewChangeEvent.emit();
  }

  /**
   * @desc Shows the winner of the game
   * @param {String} player The winner of the game 
   */
  public defineWinner(player: string): void {
    this.winner = player;
    const winnerMessage: HTMLElement = document.getElementById('winner-message-div') as HTMLElement;
    winnerMessage.innerHTML = '<h3>' + `The winner is ${this.winner}` + '</h3>';
    this.viewChangeEvent.emit();
  }

  /**
   * @desc Shows the winner of the game
   * @param {String} iterations The winner of the game 
   */
  public defineIterations(iterations: string): void {
    const winnerMessage: HTMLElement = document.getElementById('winner-message-div') as HTMLElement;
    winnerMessage.innerHTML = '<h3>' + `Number of iterations: ${iterations}` + '</h3>';
    this.viewChangeEvent.emit();
  }

  /**
   * @desc Clear the canvas
   */
  public clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @desc Render the cards of the player
   * @param {String} player - The player to render the cards
   */
  public renderBackCards(player: string): void {
    const availableArea = {
      width: (this.handsAreas[player].width / 5),
      height: this.handsAreas[player].height,
    };
    for (let i = 0; i < 5; i++) {
      const image = document.createElement('img');
      image.src = '/img/poker/blue_back.png';
      image.onload = () => {
        const imageWidth = availableArea.width * (1 - this.cardsPadding) * (image.width / image.height);
        this.ctx.drawImage(
          image,
          this.handsAreas[player].originX + (availableArea.width * i) + (availableArea.width - imageWidth) / 2,
          this.handsAreas[player].originY,
          imageWidth,
          availableArea.height * (1 - this.cardsPadding)
        );
      };
    }
  }

  /**
   * @desc Draw the board
   */
  public render(): void {
    for (const player in this.handsImages) {
      const availableArea = {
        width: (this.handsAreas[player].width / this.handsImages[player].length),
        height: this.handsAreas[player].height,
      };
      if (this.handsImages[player].length === 0) this.renderBackCards(player);
      else {
        this.handsImages[player].forEach((imageUrl, index) => {
          const image = document.createElement('img');
          image.src = imageUrl;
          image.onload = () => {
            const imageWidth = availableArea.width * (1 - this.cardsPadding) * (image.width / image.height);
            this.ctx.drawImage(
              image,
              this.handsAreas[player].originX + (availableArea.width * index) + (availableArea.width - imageWidth) / 2,
              this.handsAreas[player].originY,
              imageWidth,
              availableArea.height * (1 - this.cardsPadding)
            );
          };
        });
      }
    }
  }

}