// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str: string): string {
  let chars = {};
  for (const chr of str) {
    chars[chr]++;
    console.log(chars[chr]);
    if (!chr) {
    }
  }
  return "";
}

maxChar("Hello world");
module.exports = maxChar;