import Gameboard from './gameboard';
import Ship from './ship';
import displayBoard from './dom';
import Player from './player';

function getBotMoves(board) {
  let bot = new Player();
  // loops will keep iterating until success
  while (!board.placeShip(bot.getMove(), 2)) {}
  while (!board.placeShip(bot.getMove(), 3)) {}
  while (!board.placeShip(bot.getMove(), 3)) {}
  while (!board.placeShip(bot.getMove(), 4)) {}
  while (!board.placeShip(bot.getMove(), 5)) {}
}

function setup() {
  let board1 = new Gameboard();
  let board2 = new Gameboard();

  getBotMoves(board2);

  board1.placeShip([0, 5], 2);
  board1.placeShip([1, 3], 3);
  board1.placeShip([4, 0], 3);
  board1.placeShip([6, 3], 4);
  board1.placeShip([3, 1], 5);

  board1.receiveAttack([0, 5]);
  board1.receiveAttack([0, 6]);
  board1.receiveAttack([6, 3]);

  displayBoard(board1.board);
  // displayBoard(board2.board);
}

setup();
