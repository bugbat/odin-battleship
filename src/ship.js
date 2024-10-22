export function Ship(sz) {
  let size = sz;
  let hits = 0;

  function hit() {
    hits++;
  }

  function isSunk() {
    if(hits >= size) return true;
    else return false;
  }
  return { hit, isSunk }
}