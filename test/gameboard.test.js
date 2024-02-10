import Gameboard from '../src/gameboard';

test('if ship is in bounds', () => {
  let board = new Gameboard();
  expect(board.placeShip([0, 0], 2)).toBe(true);
});

test('if two ships are in bounds', () => {
  let board = new Gameboard();
  expect(board.placeShip([6, 0], 2)).toBe(true);
  expect(board.placeShip([6, 2], 2)).toBe(true);
});

test('if ship is out of bounds', () => {
  let board = new Gameboard();
  expect(board.placeShip([7, 1], 1)).toBe(false);
});

test('if ship is partially out of bounds', () => {
  let board = new Gameboard();
  expect(board.placeShip([0, 5], 3)).toBe(false);
});

test('if ship will overlap another ship', () => {
  let board = new Gameboard();
  board.placeShip([0, 0], 2);
  expect(board.placeShip([0, 0], 2)).toBe(false);
  expect(board.placeShip([0, 1], 2)).toBe(false);
});

test('if ship can take a hit', () => {
  let board = new Gameboard();
  board.placeShip([0, 0], 2);
  expect(board.receiveAttack([0, 0])).toBe(true);
});

test('if attack is invalid because no ship exists', () => {
  let board = new Gameboard();
  expect(board.hasBeenAttacked([0, 0])).toBe(false);
  expect(board.receiveAttack([0, 0])).toBe(false);
  expect(board.hasBeenAttacked([0, 0])).toBe(true);
});

test('if ship spot has already been attacked', () => {
  let board = new Gameboard();
  board.placeShip([0, 0], 2);
  expect(board.hasBeenAttacked([0, 0])).toBe(false);
  expect(board.receiveAttack([0, 0])).toBe(true);
  expect(board.hasBeenAttacked([0, 0])).toBe(true);
  expect(board.receiveAttack([0, 0])).toBe(false);
});

test('if ship has been sunk', () => {
  let board = new Gameboard();
  board.placeShip([0, 0], 2);
  expect(board.hasBeenSunk([0, 0])).toBe(false);
  board.receiveAttack([0, 0]);
  expect(board.hasBeenSunk([0, 0])).toBe(false);
  board.receiveAttack([0, 1]);
  expect(board.hasBeenSunk([0, 0])).toBe(true);
});

test('if all ships have been sunk', () => {
  let board = new Gameboard();
  board.placeShip([0, 0], 2);
  board.placeShip([1, 0], 1);
  expect(board.allShipsSunk()).toBe(false);
  board.receiveAttack([0, 0]);
  board.receiveAttack([0, 1]);
  expect(board.allShipsSunk()).toBe(false);
  board.receiveAttack([1, 0]);
  expect(board.allShipsSunk()).toBe(true);
});
