

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner;
console.log(board);
console.log(turn);
console.log(winner);

/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll(".square");
const message = document.querySelector("#message");
//console.log(message)
//const gameBoard = document.querySelector('.board')

const resetBtn = document.getElementById("reset");
//console.log(boxes)

/*----------------------------- Event Listeners -----------------------------*/

squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});

resetBtn.addEventListener("click", init);

/*-------------------------------- Functions --------------------------------*/

init();

function init() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;

  render();
}

function render() {
  board.forEach((cell, idx) => {
    let cellColor;
    let cellLetter;
    if (cell === 1) {
      cellColor = "green";
      cellLetter = "X";
    } else if (cell === -1) {
      cellColor = "purple";
      cellLetter = "O";
    } else if (cell === null) {
      cellColor = "white";
      cellLetter = "";
    }

    squares[idx].style.background = cellColor;
    squares[idx].innerText = cellLetter;
  });

  if (!winner) {
    message.innerText = `It is ${turn === 1 ? "X" : "O"}'s turn!`;
  } else if (winner === "T") {
    message.innerText = `Cat's game MEOW!`;
  } else {
    message.innerHTML = `Congratulations ${winner === 1 ? "X" : "O"}!!!!!`;
  }
}

function handleClick(evt) {
  console.log(evt)
  let sqIdx = parseInt(evt.target.id.replace("sq", ""));
  console.log(sqIdx)

  if (board[sqIdx] || winner) {
    return;
  }
  console.log(winner)
  console.log(board[sqIdx])

  board[sqIdx] = turn;
  turn *= -1;
  console.log(board[sqIdx])
  winner = getWinner();

  render();
}

function getWinner() {
  if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
  if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
  if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
  if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
  if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
  if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
  if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
  if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];

  if (board.includes(null)) {
    return null;
  } else {
    return "T";
  }
}
