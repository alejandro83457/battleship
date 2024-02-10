import Ship from './ship';

const MIN_COORD = 0;
const MAX_COORD = 6;

class Gameboard {
  #board;
  #ships;

  constructor() {
    this.#board = Array(7);
    for (let i = 0; i < this.#board.length; i++) {
      this.#board[i] = Array(7);
      // NOTE: need to specify new objects for EACH element
      for (let j = 0; j < this.#board.length; j++)
        this.#board[i][j] = { hits: 0 };
    }
    this.#ships = [];
  }

  placeShip(coords, length) {
    let [x, y] = coords;

    // if fully out of bounds
    if (x < MIN_COORD || x > MAX_COORD) return false;
    if (y < MIN_COORD || y > MAX_COORD) return false;

    // if partially out of bounds
    if (y + length > MAX_COORD) return false;

    // if ship is already place in coords
    for (let i = 0; i < length; i++) {
      if ('ship' in this.#board[x][y + i]) {
        console.log('Unable to place ship. Spot already taken.');
        return false;
      }
    }

    // add ship to board
    let ship = new Ship(length);
    for (let i = 0; i < length; i++) {
      this.#board[x][y + i].ship = ship;
    }

    // add ship to arr
    this.#ships.push(ship);

    return true;
  }

  receiveAttack(coords) {
    let [x, y] = coords;
    if (this.#board[x][y]) return false;
    // if()
  }

  // debugging purposes
  printBoard() {
    // this.#board.forEach((row) => console.log(row.join(' ')));
    this.#board.forEach((row) => console.log(row));
    console.log(' ');
  }

  printShips() {
    this.#ships.forEach((ship) => console.log(ship.ship));
  }
}

export default Gameboard;
