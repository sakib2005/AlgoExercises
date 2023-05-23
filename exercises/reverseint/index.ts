// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ! solve 1

function reverseInt(n: number): number {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}
// ! solve 2

function reverseInt_2(n: number): number | void {}

const output = reverseInt(-1234567);

console.log(output);
