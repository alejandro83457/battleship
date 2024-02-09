import Gameboard from '../src/gameboard';

test('if ship is in bounds', () => {
  let board = new Gameboard();
  expect(board.placeShip([0, 0], 2)).toBe(true);
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
