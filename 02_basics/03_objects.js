// singleton -> Object.create

// object literals

let mySym = Symbol("key1")

const JsUser = {
    name: "Shubham",
    "full name": "Shubham gaikwad",
    [mySym]: "myKey1",
    age: 20,
    location: "Pune",
    email: "shubhamgaikwad2k4@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(`Type is: ${typeof mySym} and o/p: ${JsUser[mySym]}`);

JsUser.email = "sgaikwad2963@gmail.com"
console.log(JsUser);

// Object.freeze(JsUser)

JsUser.email = "shubham@gmail.com"
console.log(JsUser);                //here any of the object is not goinging to change due to - Object.freez()

JsUser.greeting = function () {
    console.log("Hello Js User!!");
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}
JsUser.greeting();
JsUser.greetingTwo();