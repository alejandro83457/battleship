import Gameboard from './gameboard';
import { displayBoard1 } from './dom';
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

function getPlayerMoves(board) {
  let lens = [2, 3, 3, 4, 5];
  let cells = document.querySelectorAll('.col1');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => addShip(e, board, lens));
  });
}

function addShip(e, board, lens) {
  let id = e.target.getAttribute('id').split('');
  id.shift(); // removes the first char
  let coords = id.map((i) => parseInt(i)); // converts to ints

  if (board.placeShip(coords, lens[0])) {
    if (lens.length == 1) play();
    displayBoard1(board.board);
    lens.shift();
  }
}

function setup() {
  let board1 = new Gameboard();
  let board2 = new Gameboard();

  getBotMoves(board2);
  getPlayerMoves(board1);
}

function play() {
  console.log('play');
}

setup();
