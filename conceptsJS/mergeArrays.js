//* Here is way of merge arrays together:

const arrOne = ['Programming', 'is', 'awsome'];
const arrTwo = 
['and', 'the', 'more', 'you', 'learn', 'the', 'more', 'you', 'enjoy', 'it'];

// Using spread operator ...
const mergedArrays = [...arrOne, ...arrTwo];
console.log(mergedArrays); 

// Using concat
let concatMerged = arrOne.concat(arrTwo);
console.log(concatMerged);

// Using push
// remember spread operator here. Else you will push the entire array as one element.
arrOne.push(...arrTwo); 
console.log(arrOne);