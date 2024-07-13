// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const grettings = "Shubham Gaikwad"
for (const greet of grettings) {
    // console.log(`each char is : ${greet}`);
}

//maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")          //unique values 

// console.log(map);

for (const keys of map) {
    // console.log(keys);
}
for (const [keys, value] of map) {
    console.log(keys, ':-', value);
}