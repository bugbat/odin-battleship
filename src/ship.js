export function Ship(size) {
  let hits = 0;
  let sunk = false;

  function hit() {
    hits++;
    isSunk();
  }

  function isSunk() {
    if(hits >= size) {
      sunk = true;
      return sunk;
    }
    return sunk;
  }
  return { hit, isSunk }
}