/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Class Card
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

/**
 * @desc Class Card
 * @classdesc Class that represents a card
 */
export class Card {
  public readonly INTERVAL = 13;
  private readonly SUITS: { [key: string]: string } = {
    'CLUBS': 'Clubs',
    'DIAMONDS': 'Diamonds',
    'HEARTS': 'Hearts',
    'SPADES': 'Spades'
  };
  private readonly VALUES: { [key: string]: string } = {
    'ACE': 'Ace',
    'TWO': 'Two',
    'THREE': 'Three',
    'FOUR': 'Four',
    'FIVE': 'Five',
    'SIX': 'Six',
    'SEVEN': 'Seven',
    'EIGHT': 'Eight',
    'NINE': 'Nine',
    'TEN': 'Ten',
    'JACK': 'Jack',
    'QUEEN': 'Queen',
    'KING': 'King'
  };
  private readonly RAW_VALUES: { [key: string]: number } = {
    'ACE': 1,
    'TWO': 2,
    'THREE': 3,
    'FOUR': 4,
    'FIVE': 5,
    'SIX': 6,
    'SEVEN': 7,
    'EIGHT': 8,
    'NINE': 9,
    'TEN': 10,
    'JACK': 11,
    'QUEEN': 12,
    'KING': 13
  };

  public readonly rawValue: number;

  /**
   * @desc Constructor of the class Card
   * @param suit Suit of the card
   * @param value Value of the card
   * @param imageUrl Image of the card
   */
  constructor(public readonly suit: string = 'CLUBS', public readonly value: string = 'TWO', public readonly imageUrl: string = '/img/poker/2C.png') {
    if (!this.SUITS[suit]) {
      throw new Error('Invalid suit');
    } else {
      this.suit = this.SUITS[suit];
    }
    if (!this.VALUES[value]) {
      throw new Error('Invalid value');
    } else {
      this.value = this.VALUES[value];
    }
    this.rawValue = this.RAW_VALUES[value];
  }

  /**
   * @desc Returns the value of the card
   * @returns {number} Value of the card
   */
  public valueOf(): number {
    return Object.values(this.SUITS).indexOf(this.suit) * this.INTERVAL + Object.values(this.VALUES).indexOf(this.value) + 1;
  }

  /**
   * @desc Returns the string representation of the card
   * @returns {string} String representation of the card
   */
  public toString(): string {
    return this.value + ' of ' + this.suit;
  }
}