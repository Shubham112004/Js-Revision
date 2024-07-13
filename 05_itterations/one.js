// for 

const myArray = ['flash', 'batman', 'superman']
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]
    console.log(element);
}

//break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log('5 detected');
//         break
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log('5 detected');
        continue
    }
    console.log(`value of i is ${index}`);
}