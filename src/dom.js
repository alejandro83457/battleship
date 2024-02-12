export function displayBoard1(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let el = document.querySelector(`#a${i}${j}`);
      if (!board[i][j].ship && board[i][j].hit) {
        el.style.backgroundColor = 'lightgray';
      }
      if (board[i][j].ship && !board[i][j].hit) {
        el.style.backgroundColor = 'gray';
      }
      if (board[i][j].ship && board[i][j].hit) {
        el.style.backgroundColor = 'darkred';
      }
      if (board[i][j].ship && board[i][j].ship.isSunk()) {
        el.style.backgroundColor = 'red';
      }
    }
  }
}

export function displayBoard2(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let el = document.querySelector(`#b${i}${j}`);
      if (!board[i][j].ship && board[i][j].hit) {
        el.style.backgroundColor = 'lightgray';
      }
      if (board[i][j].ship && board[i][j].hit) {
        el.style.backgroundColor = 'darkred';
      }
      if (board[i][j].ship && board[i][j].ship.isSunk()) {
        el.style.backgroundColor = 'red';
      }
    }
  }
}

export function clearBoards() {
  let cells = document.querySelectorAll('.col1');
  cells.forEach((cell) => {
    cell.style.backgroundColor = 'white';
  });

  cells = document.querySelectorAll('.col2');
  cells.forEach((cell) => {
    cell.style.backgroundColor = 'white';
  });
}
