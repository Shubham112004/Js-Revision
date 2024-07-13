
// const array = ['js', 'cpp', 'html']

// const values = array.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)     //no need of return keyword
const newNums = myNums.filter((num) => {
    return num > 4                                     // must have return when we are using {}
})

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

console.log(newNums);