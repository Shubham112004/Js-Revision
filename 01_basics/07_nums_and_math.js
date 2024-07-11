/*

const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const fnum = 23.8966
const snum = 123.8966

console.log(fnum.toPrecision(3));
console.log(snum.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));
*/

/**************** Maths ****************/
console.log(Math.PI);
console.log(Math.abs(-34));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.min(4, 2, 6, 3));
console.log(Math.max(4, 2, 6, 3));
console.log(Math.random()); //always gives value between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);    //+1 -> if value is 0.041 = 0.041*10 = 0.41 -> 0.41 + 1 = 1.41

console.log('-------------------------');

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));