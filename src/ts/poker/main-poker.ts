/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Diego Pérez García
  * @since 18 Apr. 2023
  * @desc Poker Main
  * @see {@link https://github.com/ULL-ESIT-PAI-2022-2023/2022-2023-pai-p10-events-poker-DiegoPerezGarcia}
  */

import { Board } from './board.js';
import { Poker } from './poker.js';
import { Dealer } from './dealer.js';

function main() {
  const players = ['Player1', 'Player2'];
  const board = new Board(document.getElementById('board-canvas') as HTMLCanvasElement, players);
  const poker = new Poker(players);
  const dealer = new Dealer(board, poker);
}

main();