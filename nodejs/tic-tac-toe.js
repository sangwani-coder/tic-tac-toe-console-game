function playingField(field) {
  for (let row = 0; row < 5; row++) {
      if (row % 2 === 0) {
          const practicalRow = Math.floor(row / 2);
          for (let column = 0; column < 5; column++) {
              if (column % 2 === 0) {
                  const practicalColumn = Math.floor(column / 2);
                  if (column !== 4) {
                      process.stdout.write(field[practicalColumn][practicalRow]);
                  } else {
                      console.log(field[practicalColumn][practicalRow]);
                  }
              } else {
                  process.stdout.write("|");
              }
          }
      } else {
          console.log("_____");
      }
  }
  return true;
}

let player = 1;
let currentField = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

playingField(currentField);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function takeTurn() {
  console.log("Player's turn:", player);

  rl.question("Enter Row number:\n", function (moveRow) {
      rl.question("Enter Column number:\n", function (moveColumn) {
          const moveRowNum = parseInt(moveRow);
          const moveColumnNum = parseInt(moveColumn);

          if (player === 1) {
              if (currentField[moveColumnNum][moveRowNum] === " ") {
                  currentField[moveColumnNum][moveRowNum] = "X";
                  player = 2;
              }
          } else {
              if (currentField[moveColumnNum][moveRowNum] === " ") {
                  currentField[moveColumnNum][moveRowNum] = "O";
                  player = 1;
              }
          }

          playingField(currentField);
          takeTurn();
      });
  });
}

takeTurn();