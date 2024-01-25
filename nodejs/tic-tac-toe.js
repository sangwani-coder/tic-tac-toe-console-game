const readline = require('readline');

const BOARD_SIZE = 3;
const PLAYERS = {
  1: 'X',
  2: 'O',
};

function initializeBoard() {
  return new Array(BOARD_SIZE).fill(null).map(() => new Array(BOARD_SIZE).fill(' '));
}

function displayBoard(board) {
  for (let row = 0; row < BOARD_SIZE; row++) {
    console.log(board[row].join(' | '));
  }
}

function isValidMove(board, row, col) {
  return row >= 1 && row <= BOARD_SIZE && col >= 1 && col <= BOARD_SIZE && !board[row - 1][col - 1];
}

function makeMove(board, player, row, col) {
  board[row - 1][col - 1] = PLAYERS[player];
}

function checkWin(board, player) {
  const winConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];
  for (const winCondition of winConditions) {
    if (winCondition.every(c => board[c[0]][c[1]] === PLAYERS[player])) {
      return true;
    }
  }
  return false;
}

function isBoardFull(board) {
  return board.every(row => row.every(col => col !== ' '));
}

function playGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let board = initializeBoard();
  let player = 1;
