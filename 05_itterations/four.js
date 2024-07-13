// for in

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const myArray = ['shubh', 'gaikwad']
for (const key in myArray) {
    // console.log(key);
    console.log(myArray[key]);
}