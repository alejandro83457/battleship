import Ship from '../src/ship';

test('ship does not sink when made', () => {
  let ship = new Ship(2);
  expect(ship.isSunk()).toBe(false);
});

test('ship sinks are being shot >= to its length', () => {
  let ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
