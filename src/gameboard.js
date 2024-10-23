import { Ship } from "./ship";

export function Gameboard(size = 10) {
  const playArea = matrix(size);
  const ships = new Map([
    ["Carrier", Ship(5)],
    ["Battleship", Ship(4)],
    ["Cruiser", Ship(3)],
    ["Submarine", Ship(3)],
    ["Destroyer", Ship(2)]
  ]);

  function receiveAttack(x, y) {
    // check for hit
      //add hit to ship  
      // check if sunk

    // miss
    self.playArea[y][x] = "o";
  }

  return { receiveAttack }
}

function matrix(size) {
  let matrix = [];
  let row = []
  for (let i = 0; i < size; i++) {
    row.push("w");
  }
  for (let i = 0; i < size; i++) {
    matrix.push(row);
  }
  return matrix;
}

// w = water
// o = miss
// x = hit