/*

const myArray = [0, 1, 2, 3, 4, 5, 6]
const myHeors = ["shaktiman", "naagraj"]

const myArray2 = new Array(2, 4, 6, 8)

myArray.push(10)
console.log(myArray);

myArray.pop(10)
console.log(myArray);

myArray.unshift(10)
console.log(myArray);

myArray.shift(10)
console.log(myArray);

console.log(myArray.includes(10));

console.log(myArray.indexOf(10));

const newArray = myArray.join()
console.log(typeof newArray + " " + newArray);

*/

const farray = [0, 1, 2, 3, 4, 5]

console.log("Original Array: ", farray);

const sarray = farray.slice(1, 3)
console.log(sarray);
console.log("Original Array after Slice: ", farray);

const sarray2 = farray.splice(1, 3)
console.log(sarray2);
console.log("Original Array after Splice: ", farray);
