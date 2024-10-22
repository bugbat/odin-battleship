export function Ship(size) {
  let size = size;
  let hits = 0;

  function hit() {
    hits++;
  }

  function isSunk() {
    if(hits >= size) return true;
    return false;
  }
  return { hit, isSunk }
}