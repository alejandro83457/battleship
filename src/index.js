import Gameboard from './gameboard';
import Ship from './ship';

let ships = [new Ship(2), new Ship(3)];
let ship = new Ship(3);
ship.hit();
console.log(ship);
