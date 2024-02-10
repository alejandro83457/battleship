class Player {
  #moves;
  constructor() {
    this.#moves = Array(7);
    for (let i = 0; i < this.#moves.length; i++)
      this.#moves[i] = Array(7).fill(false);
  }

  getMove() {
    while (true) {
      let x = Math.floor(Math.random() * 7);
      let y = Math.floor(Math.random() * 7);
      if (!this.#moves[x][y]) {
        this.#moves[x][y] = false;
        return [x, y];
      }
    }
  }
}

export default Player;
