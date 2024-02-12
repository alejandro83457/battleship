import Gameboard from './gameboard';
import { displayBoard1, displayBoard2 } from './dom';
import Player from './player';

let board1, board2;

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
    if (lens.length == 1) allowPlayerAttack();
    displayBoard1(board.board);
    lens.shift();
  }
}

function allowPlayerAttack() {
  let cells = document.querySelectorAll('.col2');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      checkAttackSuccess(e);
    });
  });
}
function checkAttackSuccess(e) {
  let id = e.target.getAttribute('id').split('');
  id.shift(); // removes the first char
  let coords = id.map((i) => parseInt(i)); // converts to ints
  console.log(coords);
  board2.receiveAttack(coords);
  displayBoard2(board2.board);
}

function setup() {
  board1 = new Gameboard();
  board2 = new Gameboard();

  getBotMoves(board2);
  getPlayerMoves(board1);
}

setup();
