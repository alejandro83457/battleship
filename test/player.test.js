import Player from '../src/player';

test('if player can make a move', () => {
  let player = new Player();
  let [x, y] = player.getMove();
  expect(x).toBeGreaterThan(-1);
  expect(x).toBeLessThan(7);
  expect(y).toBeGreaterThan(-1);
  expect(y).toBeLessThan(7);
});
