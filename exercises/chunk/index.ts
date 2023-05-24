// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array: number[], size: number) {
  const chunked: any = [];

  for (let element of array) {
    // * the elements
    console.log(element);

    // * the chunk length -1
    const last = chunked[chunked.length - 1];
    console.log(chunked.length - 1);

    // * the last
    console.log(last);

    if (!last || last.length === size) {
      // chunk push
      chunked.push([element]);
      console.log(chunked);
    } else {
      last.push(element);

      // * last

      last;

      // * chunk

      chunked;
    }
  }

  return chunked;
}

console.log(chunk([1, 2, 34, 5], 2));
