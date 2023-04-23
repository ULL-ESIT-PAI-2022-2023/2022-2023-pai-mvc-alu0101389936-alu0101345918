/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Class Deck
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

import { GenericDeck } from './generic-deck.js';
import { Card } from './card.js';
import { Hand } from './hand.js';

/**
 * @desc Class Deck
 * @classdesc The deck is the class that contains the cards
 * @extends GenericDeck
 */
export class Deck extends GenericDeck {
  private readonly NUMBER_OF_SUITS = 4;
  private readonly NUMBER_OF_VALUES = 13;
  private readonly SUITS = ['CLUBS', 'DIAMONDS', 'HEARTS', 'SPADES'];
  private readonly VALUES = [
    'ACE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIGHT',
    'NINE',
    'TEN',
    'JACK',
    'QUEEN',
    'KING'
  ];
  private readonly IMG_VALUES = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K'
  ];

  /**
   * @constructor
   * @desc Creates a deck of cards with 52 cards
   */
  constructor() {
    super();
    for (let i = 0; i < this.NUMBER_OF_SUITS; i++) {
      for (let j = 0; j < this.NUMBER_OF_VALUES; j++) {
        this.cards.push(new Card(this.SUITS[i], this.VALUES[j], 'img/poker/' + this.IMG_VALUES[j] + this.SUITS[i][0] + '.png'));
      }
    }
  }

  /**
   * @desc Deals a number of cards to a number of hands
   * @param numberOfHands Number of hands to deal
   * @param numberOfCards Number of cards to deal
   * @returns Array of hands
   */
  public dealHands(numberOfHands: number, numberOfCards: number): Array<Hand> {
    const hands: Array<Hand> = new Array<Hand>(numberOfHands);
    for (let i = 0; i < numberOfCards; i++) {
      for (let j = 0; j < numberOfHands; j++) {
        hands[j].pushCard(this.cards.pop() as Card);
      }
    }
    return hands;
  }

}