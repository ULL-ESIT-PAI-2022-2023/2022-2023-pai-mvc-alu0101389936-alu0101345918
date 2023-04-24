/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Class Hand
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

import { GenericDeck } from './generic-deck.js';
import { Card } from './card.js';

/**
 * @desc Class Hand
 * @classdesc The Hand class is the class that contains the cards of the hand
 */
export class Hand extends GenericDeck {
  public readonly VALUE_INTERVAl = 52;

  public readonly classification: { [key: string]: number } = {
    'Pair': this.VALUE_INTERVAl * 1,
    'TwoPairs': this.VALUE_INTERVAl * 2,
    'ThreeOfAKind': this.VALUE_INTERVAl * 6,
    'Straight': this.VALUE_INTERVAl * 9,
    'Flush': this.VALUE_INTERVAl * 14,
    'FullHouse': this.VALUE_INTERVAl * 19,
    'FourOfAKind': this.VALUE_INTERVAl * 24,
    'StraightFlush': this.VALUE_INTERVAl * 28,
  };

  /**
   * @constructor
   * @param cards The cards of the hand
   */
  constructor(cards?: Card[]) {
    super(cards);
  }

  /**
   * @desc numOf the highest classification of the hand.
   * @returns {String} The classification of the hand.
   */
  public numOfClassification(): string {
    if (this.isStraightFlush()) {
      return 'StraightFlush';
    }
    if (this.isFourOfAKind()) {
      return 'FourOfAKind';
    }
    if (this.isFullHouse()) {
      return 'FullHouse';
    }
    if (this.isFlush()) {
      return 'Flush';
    }
    if (this.isStraight()) {
      return 'Straight';
    }
    if (this.isThreeOfAKind()) {
      return 'ThreeOfAKind';
    }
    if (this.isTwoPairs()) {
      return 'TwoPairs';
    }
    if (this.isPair()) {
      return 'Pair';
    }
    return 'HighCard';
  }

  /**
   * @desc Gets the value of the hand
   * @returns The value of the hand
   */
  public valueOfHand(): number {
    if (this.numOfClassification() === 'HighCard') {
      return this.highestCard().rawValue;
    } else {
      return this.classification[this.numOfClassification()];
    }
  }

  /**
   * @desc Gets the value of the cards of the hand
   * @returns The value of the cards of the hand
   */
  public rawValueOfHand(): number {
    return this.cards.reduce((acc, card) => acc + card.rawValue, 0);
  }

  /**
   * @desc Sorts the cards of the hand
   * @returns {Array<Card>} The sorted cards of the hand.
   */
  private sortedCards(): Card[] {
    return this.cards.sort((a, b) => a.valueOf() - b.valueOf());
  }

  /**
   * @desc Highest card of the hand
   * @returns {Card} The highest card of the hand.
   */
  private highestCard(): Card {
    return this.sortedCards()[this.cards.length - 1];
  }

  /**
   * @desc Return all the pairs of the hand
   * @returns {Array<Card>} The pairs of the hand.
   */
  private numOfPairs(): Card[] {
    return this.cards.filter(card => {
      return this.cards.filter(c => c.rawValue === card.rawValue).length === 2;
    });
  }

  /**
   * @desc Checks if the hand is a pair.
   * @returns {Boolean} True if the hand is a pair, false otherwise.
   */
  public isPair(): boolean {
    return this.numOfPairs().length === 2;
  }

  /**
   * @desc Checks if the hand is two pairs.
   * @returns {Boolean} True if the hand is two pairs, false otherwise.
   */
  public isTwoPairs(): boolean {
    return this.numOfPairs().length === 4;
  }

  /**
   * @desc Return all the three of a kind of the hand
   * @returns {Array<Card>} The cards which conform a three of a kind.
   */
  private numOfThreeOfAKind(): Card[] {
    return this.cards.filter(card => {
      return this.cards.filter(c => c.rawValue === card.rawValue).length === 3;
    });
  }

  /**
   * @desc Checks if the hand is a three of a king.
   * @returns {Boolean} True if the hand is a three of a king, false otherwise.
   */
  public isThreeOfAKind(): boolean {
    return this.numOfThreeOfAKind().length === 3;
  }

  /**
   * @desc Checks if the hand is a straight.
   * @returns {Boolean} True if the hand is a straight, false otherwise.
   */
  public isStraight(): boolean {
    const values = this.cards.map(card => +card % card.INTERVAL);
    const sortedValues = values.sort((a, b) => a - b);
    for(let i = 0; i < sortedValues.length - 1; i++) {
      if(sortedValues[i] + 1 !== sortedValues[i + 1] &&
        (sortedValues[i] !== 1 && sortedValues[i + 1] !== 13)) return false;
    }
    return true;
  }

  /**
   * @desc Return all the cards which conform a flush.
   * @returns {Array<Card>} The cards which conform a flush.
   */
  private numOfFlush(): Card[] {
    return this.cards.filter(card => {
      return this.cards.filter(c => c.suit === card.suit).length === 5;
    });
  }  

  /**
   * @desc Checks if the hand is a flush.
   * @returns {Boolean} True if the hand is a flush, false otherwise.
   */
  public isFlush(): boolean {
    return this.numOfFlush().length === 5;
  }

  /**
   * @desc Checks if the hand is a full house.
   * @returns {Boolean} True if the hand is a full house, false otherwise.
   */
  public isFullHouse(): boolean {
    return this.isPair() && this.isThreeOfAKind();
  }

  /**
   * @desc Return all the cards which conform a four of a kind.
   * @returns {Array<Card>} The cards which conform a four of a kind.
   */
  private numOfFourOfAKind(): Card[] {
    return this.cards.filter(card => {
      return this.cards.filter(c => c.rawValue === card.rawValue).length === 4;
    });
  }

  /**
   * @desc Checks if the hand is a four of a king.
   * @returns {Boolean} True if the hand is a four of a king, false otherwise.
   */
  public isFourOfAKind(): boolean {
    return this.numOfFourOfAKind().length === 4;
  }

  /**
   * @desc Checks if the hand is a straight flush.
   * @returns {Boolean} True if the hand is a straight flush, false otherwise.
   */
  public isStraightFlush(): boolean {
    return this.isStraight() && this.isFlush();
  }
}