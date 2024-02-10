import Gameboard from './gameboard';

let board = new Gameboard();
board.printBoard();
console.log(board.placeShip([0, 0], 2));
board.printBoard();
console.log(board.placeShip([0, 2], 2));
