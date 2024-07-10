// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2!=1);

console.log(null > 0);
console.log(null == 0); //== converts null -> NaN
console.log(null >= 0); //[>,<,>=,<=] converts null -> 0

console.log('-----------------------');

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
//all above gives false

console.log('-----------------------');

console.log("2" == 2); //converts "2" -> 2
console.log("2" === 2); //matches the datatypes