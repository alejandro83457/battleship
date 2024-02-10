export function displayBoard1(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (!board[i][j].ship) continue;
      let el = document.querySelector(`#a${i}${j}`);
      if (!board[i][j].hit) {
        el.style.backgroundColor = 'gray';
      }
      if (board[i][j].hit) {
        el.style.backgroundColor = 'darkred';
      }
      if (board[i][j].ship.isSunk()) {
        el.style.backgroundColor = 'red';
      }
    }
  }
}
