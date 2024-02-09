class Ship {
  #len;
  #hits;
  constructor(len) {
    this.#len = len;
    this.#hits = 0;
  }
  hit() {
    this.#hits++;
  }
  isSunk() {
    return this.#hits >= this.#len;
  }
}

export default Ship;
