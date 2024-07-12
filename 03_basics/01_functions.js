function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}
// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
//addTwoNumbers(8, 5)
function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2

    console.log("Unrechable code");
}
const result = addTwoNumbers(8, 5)
// console.log("result: " + result);

function loginUserMessage(username) {
    if (username === undefined) {                   //username === undefined -> !username
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()); // undefined
// console.log(loginUserMessage("Shubham"));

function calulateCartPrice(...num1) {            //rest operator
    return num1
}
// console.log(calulateCartPrice(200, 400, 800));
function calulateCartPrice(val1, ...num1) {
    return num1
}
// console.log(calulateCartPrice(200, 400, 800));

const user = {
    username: "Shubham",
    price: 2899
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

const myNewArray = [200, 400, 100, 602]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));