let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object

let myCreatedDate = new Date(2004, 0, 25)
console.log(myCreatedDate.toDateString());

let myNewCreatedDate = new Date("2024-01-13")
console.log(myNewCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);                   //in mili-seconds
console.log(myNewCreatedDate.getTime());

console.log('-----------------------');

console.log(Math.floor(myTimeStamp / 1000));    //in seconds


// for - monday Not mon 
let newDate = new Date()
newDate.toLocaleString('default', {
    weekday: "long"
})