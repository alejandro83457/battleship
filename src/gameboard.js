import Ship from './ship';

const MIN_COORD = 0;
const MAX_COORD = 6;

class Gameboard {
  #board;
  #ships;

  constructor() {
    this.#board = Array(7);
    for (let i = 0; i < this.#board.length; i++) {
      this.#board[i] = Array(7).fill(0);
    }
    this.#ships = 0;
  }

  placeShip(coords, length) {
    let [x, y] = coords;

    // if fully out of bounds
    if (x < MIN_COORD || x > MAX_COORD) return false;
    if (y < MIN_COORD || y > MAX_COORD) return false;

    // if partially out of bounds
    if (y + length > MAX_COORD) return false;

    // if ship is already place in coords
    for (let i = 0; i < length; i++) if (this.#board[x][y + i]) return false;

    // add ship to board
    let ship = new Ship(length);
    for (let i = 0; i < length; i++) {
      this.#board[x][y + i] = ship;
    }
    return true;
  }

  // debugging purposes
  printBoard() {
    this.#board.forEach((row) => console.log(row.join(' ')));
    console.log(' ');
  }
}

export default Gameboard;
