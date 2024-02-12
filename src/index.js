import Gameboard from './gameboard';
import { displayBoard1, displayBoard2, clearBoards } from './dom';
import Player from './player';

let board1, board2;
let bot = new Player();
let lens;

function getBotMoves() {
  let bot = new Player();
  // loops will keep iterating until success
  while (!board2.placeShip(bot.getMove(), 2)) {}
  while (!board2.placeShip(bot.getMove(), 3)) {}
  while (!board2.placeShip(bot.getMove(), 3)) {}
  while (!board2.placeShip(bot.getMove(), 4)) {}
  while (!board2.placeShip(bot.getMove(), 5)) {}
}

function getPlayerMoves() {
  let cells = document.querySelectorAll('.col1');
  cells.forEach((cell) => {
    cell.addEventListener('click', addShip);
  });
}
function addShip(e) {
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
    cell.addEventListener('click', checkAttackSuccess);
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

function removeEventListeners() {
  let cells = document.querySelectorAll('.col1');
  cells.forEach((cell) => {
    cell.removeEventListener('click', addShip);
  });
  cells = document.querySelectorAll('.col2');
  cells.forEach((cell) => {
    cell.removeEventListener('click', checkAttackSuccess);
  });
}

function displayWinner(winner) {
  let content = document.querySelector('#content');
  content.textContent = `${winner} is the winner!`;
  setTimeout(() => {
    clearBoards();
    removeEventListeners();
    setup();
  }, 5000);
}

function setup() {
  board1 = new Gameboard();
  board2 = new Gameboard();
  lens = [2, 3, 3, 4, 5];
  let content = document.querySelector('#content');
  content.textContent = 'place your 5 ships below';

  getBotMoves();
  getPlayerMoves();
}

setup();
