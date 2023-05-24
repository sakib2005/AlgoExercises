// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str: string): object {
  let chars = {}; //object
  for (const chr of str) {
    if (!chars[chr] /*checking if the the char exits in the chars {obj} */) {
      // if not then we assign it one
      // example: chars["H"] = 1
      chars[chr] = 1;
    } else {
      // if it already exist then increase by 1
      chars[chr]++;
    }
  }
  return chars;
}

console.log(maxChar("Hello world"));
module.exports = maxChar;
