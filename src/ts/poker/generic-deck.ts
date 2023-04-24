/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Class GenericDeck
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

import { Card } from './card.js';

/**
 * @desc Class GenericDeck
 * @classdesc The GenericDeck class is the class that contains the cards
 */
export class GenericDeck {
  /**
   * @constructor
   * @param {Card[]} cards The cards of the deck
   */
  constructor(protected cards: Card[] = []) {
  }

  /**
   * @desc Shuffles the deck
   */
  public shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  /**
   * @desc Pops a card from the deck
   * @returns {Card | undefined} The card popped
   */
  public popCard(): Card | undefined {
    if (this.cards.length > 0) {
      return this.cards.pop() as Card;
    }
    return undefined;
  }

  /**
   * @desc Pushes a card to the deck
   * @param {Card} card The card to push
   */
  public pushCard(card: Card): void {
    this.cards.push(card);
  }

  /**
   * @desc Sorts the deck
   */
  public sort(): void {
    this.cards.sort((a, b) => a.valueOf() - b.valueOf());
  }

  /**
   * @desc Returns the deck as a string
   * @returns {string} The deck as a string
   */
  public toString(): string {
    return this.cards.map(card => card.toString()).join('\n');
  }

  /**
   * @desc Moves cards to another deck
   * @param {GenericDeck} deck The deck to move the cards to
   * @param {number} numberOfCards The number of cards to move
   */
  public moveCardsTo(deck: GenericDeck, numberOfCards: number): void {
    for (let i = 0; i < numberOfCards; i++) {
      deck.pushCard(this.popCard() as Card);
    }
  }

  /**
   * @desc Returns the images of the deck
   * @returns {string[]} The images of the deck
   */
  public getImages(): string[] {
    return this.cards.map((card) => card.imageUrl);
  }
}