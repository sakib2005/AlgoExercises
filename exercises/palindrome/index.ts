// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str: string): boolean {
  const reversed = str
    .split("")
    .reduce((rev: string, char: string) => char + rev, "");
  const bool: boolean = str === reversed ? true : false;
  return bool;
}

const palindrome_2 = (str: string): boolean => {
  return str.split("").every((char) => char === str[str.length - 1]);
};
const output = palindrome_2("gg");

console.log("palindrome: ", output);
