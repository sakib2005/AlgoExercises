// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

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

reverse("hello world !");
