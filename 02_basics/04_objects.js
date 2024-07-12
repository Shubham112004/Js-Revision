/*

// const tinderUser = new Object() //singelton object
const tinderUser = {}    //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Shubh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            fname: "Shubh",
            lname: "John"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('age'));

*/

/************** Destructuting ***************/

const course = {
    coursename: "js in hindi",
    price: "199",
    courseInstructor: "Shubham"
}

const { courseInstructor: a } = course
console.log(a);

