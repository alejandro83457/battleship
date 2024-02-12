import Gameboard from './gameboard';
import { displayBoard1, displayBoard2, clearBoards } from './dom';
import Player from './player';

let board1, board2;
let bot = new Player();

function getBotMoves(board) {
  let bot = new Player();
  // loops will keep iterating until success
  while (!board.placeShip(bot.getMove(), 2)) {}
  while (!board.placeShip(bot.getMove(), 3)) {}
  while (!board.placeShip(bot.getMove(), 3)) {}
  while (!board.placeShip(bot.getMove(), 4)) {}
  while (!board.placeShip(bot.getMove(), 5)) {}
}

function getPlayerMoves() {
  let lens = [2, 3, 3, 4, 5];
  let cells = document.querySelectorAll('.col1');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => addShip(e, lens));
  });
}
function addShip(e, lens) {
  let id = e.target.getAttribute('id').split('');
  id.shift(); // removes the first char
  let coords = id.map((i) => parseInt(i)); // converts to ints

  if (board1.placeShip(coords, lens[0])) {
    if (lens.length == 1) allowPlayerAttack();
    displayBoard1(board1.board);
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

  //  check if tile clicked has already been clicked.
  if (board2.board[coords[0]][coords[1]].hit) return;

  board2.receiveAttack(coords); // attack
  displayBoard2(board2.board); // show updated board

  if (board2.allShipsSunk()) {
    displayWinner('human');
  }

  allowBotAttack();
}

function allowBotAttack() {
  let coords = bot.getMove();
  while (board1.board[coords[0]][coords[1]].hit) {
    coords = bot.getMove();
  }
  board1.receiveAttack(coords);
  displayBoard1(board1.board);

  if (board1.allShipsSunk()) {
    displayWinner('bot');
  }
}

function displayWinner(winner) {
  clearBoards();
  setup();
}

function setup() {
  board1 = new Gameboard();
  board2 = new Gameboard();

  getBotMoves(board2);
  getPlayerMoves();
}

setup();
