//primitive
// string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.25
const isLoggedIn = true
const outsideTemp = null
let userEmail;  //let userEmail = undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 6546562465432654654n;

//reference (non primitive)
//array, object, function

const fruits = ["mangos", "banana", "apple"]
let myObj = {
    name: "Shubham",
    age: 20
}
const myFunction = function () {
    console.log("Hello World!");
}
