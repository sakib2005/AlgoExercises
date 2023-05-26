// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// * character Map

const charMap = (str: string): object => {
  const charObj = {};
  for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }
  return charObj;
};
function anagrams(stringA: string, stringB: string): boolean {
  let isAnagrams: boolean = true;

  // *for the first string
  const str1_obj = charMap(stringA);

  // * for the second string
  const str2_obj = charMap(stringB);

  // * check if equal length
  if (Object.keys(str1_obj).length !== Object.keys(str2_obj).length) {
    return false;
  }

  // *  last check
  for (let char in str1_obj) {
    if (str1_obj[char] !== str2_obj[char]) {
      isAnagrams = false;
    } else isAnagrams = true;
  }

  return isAnagrams;
}

console.log(anagrams("Hi there", "Bye there"));

// ! solution
const clearSort = (str: string): string => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};
function anagrams_2(stringA: string, stringB: string): boolean {
  const str1 = clearSort(stringA);
  const str2 = clearSort(stringB);
  return str1 === str2 ? true : false;
}
console.log(anagrams_2("rail safety", "fairy tales"));
