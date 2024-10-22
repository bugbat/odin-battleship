import { expect, test } from 'vitest'
import { Ship } from "./ship";

test("a ship is floating if it has not been hit enough times", () => {
  const myShip = Ship(2);
  myShip.hit();
  expect(myShip.isSunk()).toBe(false);
})

test("after the required amount of hits, a ship is sunk", () => {
  const myShip = Ship(2);
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
})