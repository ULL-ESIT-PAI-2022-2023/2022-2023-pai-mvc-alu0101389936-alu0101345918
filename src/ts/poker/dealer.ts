/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Class Dealer
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

import { Board } from './board.js';
import { Poker } from './poker.js';

/**
 * @desc Class Dealer
 * @classdesc The dealer is the class that controls the game
 */
export class Dealer {
  /**
   * @constructor
   */
  constructor(private board: Board, private poker: Poker) {
    const players = this.poker.players;
    for (const player in players) {
      this.board.renderBackCards(players[player]);
    }

    this.poker.handDrawEvent.addListener((player: string, imagesUrls: Array<string>) => {
      this.board.assignImages(player, imagesUrls);
    });

    this.poker.winnerEvent.addListener((winner: string) => {
      this.board.defineWinner(winner);
    });

    const handDrawEvents = this.board.drawHandEvents;
    for (const handDrawEvent in handDrawEvents) {
      handDrawEvents[handDrawEvent].addListener((player: string) => {
        this.poker.handDraw(player);
      });
    }

    this.board.showWinnerEvent.addListener(() => {
      this.poker.winner();
    });

    this.board.viewChangeEvent.addListener(() => {
      this.board.render();
    });

    this.board.pokerHandDrawEvent.addListener(() => {
      const iterations = this.poker.pokerHandDraw('Player1');
      this.board.defineIterations(iterations.toString());
      this.board.render();
    });
    
    this.board.tripsDrawEvent.addListener(() => {
      const iterations = this.poker.tripsDraw('Player1');
      this.board.defineIterations(iterations.toString());
      this.board.render();
    });
  }
}