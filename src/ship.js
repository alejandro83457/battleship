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

  // toString() {
  //   return `Length ${this.#len} Hits ${this.#hits}`;
  // }

  get ship() {
    let len = this.#len;
    let hits = this.#hits;
    return { len, hits };
  }
}

export default Ship;
