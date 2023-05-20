// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//! solve 1

function reverse(str: string): string {
  let newStr = "";
  let strLength = str.length;

  for (let i = strLength - 1; i >= 0; i--) {
    const element = str[i];
    newStr += element;
  }
  console.log(newStr);

  return newStr;
}
// ! solve 2
function reverse2(str: string) {
  return str.split("").reverse().join("");
}
// !solve 3

function reverse3(str: string): string {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

let output = reverse3("hello world !");
console.log(output);
