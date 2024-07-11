const name = "Shubham"
const repoCount = 14

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(name[1]);

const newName = new String('Shubhu')

console.log(newName[0]);

console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(3));
console.log(newName.indexOf('u'));

const newString = newName.substring(0, 3)   //not allow -ve values
console.log(newString);

const anotherString = newName.slice(-5, 2)
console.log(anotherString);

const newStringOne = "   Shubhu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubham%20gaikwad.com"
console.log(url.replace('%20', '-'));
console.log(url.includes('shubh'));

console.log(url.split('/'));

//explore other string functions