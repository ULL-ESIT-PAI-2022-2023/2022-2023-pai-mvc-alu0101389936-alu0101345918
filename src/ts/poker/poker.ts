/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Class Poker
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

import { Event } from './event.js';
import { Deck } from './deck.js';
import { Hand } from './hand.js';

/**
 * @desc Class Poker
 * @classdesc The Poker class is the class that contains the players and the deck
 */
export class Poker {
  public readonly playersHand: { [key: string]: Hand } = {};
  private deck: Deck;
  public readonly winnerEvent: Event = new Event();
  public readonly handDrawEvent: Event = new Event();

  /**
   * @constructor
   * @param players The players of the game
   * @param handsNumberOfCards The number of cards in the hand
   */
  constructor(public readonly players: string[], private readonly handsNumberOfCards: number = 5) {
    for (const player of players) {
      this.playersHand[player] = new Hand();
    }
    this.deck = new Deck();
    this.deck.shuffle();
  }

  /**
   * @desc Draws a hand for the player
   * @param player The player to draw the hand
   */
  public handDraw(player: string): void {
    if (this.playersHand[player].getImages().length !== 0) {
      this.playersHand[player].moveCardsTo(this.deck, this.handsNumberOfCards);
      this.deck.shuffle();
    }
    this.deck.moveCardsTo(this.playersHand[player], this.handsNumberOfCards);
    this.handDrawEvent.emit(player, this.playersHand[player].getImages());
  }

  /**
   * @desc Draw cards until find a poker hand
   * @param player Player that will draw
   * @returns Number of iterations made
   */
  public pokerHandDraw(player: string): number {
    let iterations = 1;
    const deck = new Deck();
    deck.moveCardsTo(this.playersHand[player], this.handsNumberOfCards);
    while (!this.playersHand[player].isFourOfAKind()) {
      this.playersHand[player].moveCardsTo(deck, this.handsNumberOfCards);
      deck.shuffle();
      deck.moveCardsTo(this.playersHand[player], this.handsNumberOfCards);
      iterations++;
    }
    this.handDrawEvent.emit(player, this.playersHand[player].getImages());
    return iterations;
  }

  /**
   * @desc Draw cards until find a trip
   * @param player Player that will draw
   * @returns Number of iterations made
   */
  public tripsDraw(player: string): number {
    let iterations = 1;
    const deck = new Deck();
    deck.moveCardsTo(this.playersHand[player], this.handsNumberOfCards);
    while (!this.playersHand[player].isThreeOfAKind()) {
      this.playersHand[player].moveCardsTo(deck, this.handsNumberOfCards);
      deck.shuffle();
      deck.moveCardsTo(this.playersHand[player], this.handsNumberOfCards);
      iterations++;
    }
    this.handDrawEvent.emit(player, this.playersHand[player].getImages());
    return iterations;
  }

  /**
   * @desc Returns the winner of the game
   * @returns The winner of the game
   */
  public winner(): string {
    const playerHandValues: number[] = Object.values(this.playersHand).map(hand => hand.valueOfHand());
    const bestValue = Math.max(...playerHandValues);
    let winner = Object.keys(this.playersHand).filter(player => this.playersHand[player].valueOfHand() === bestValue);
    if (winner.length > 1) {
      const winnerValue = Math.max(...winner.map(player => this.playersHand[player].rawValueOfHand()));
      winner = winner.filter(player => this.playersHand[player].rawValueOfHand() === winnerValue);
    }
    this.winnerEvent.emit(winner[0]);
    return winner[0];
  }
}