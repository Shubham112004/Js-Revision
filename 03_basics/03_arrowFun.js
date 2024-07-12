/*

const user = {
    username: "Shubham",
    price: 458,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Shubh"
// user.welcomeMessage()

console.log(this);
*/

function chai() {
    let username = "shubham"
    // console.log(this.username);     //this.username can't be used in function as in object
}

chai()

const newChai = () => {
    let username = "Shubham"
    // console.log(this.username);     //this.username can't be used in arrow function as in object
}

newChai()

// const addTwo = (num1, num2) => {         //explicit return
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2      //implicit return
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(1, 5));