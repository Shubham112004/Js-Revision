// for each
const array = ['js', 'cpp', 'html']

// array.forEach(function (lang) {
//     console.log(lang);
// });


// array.forEach((lang) => {
//     console.log(lang);
// });


// function printMe(item) {
//     console.log(item);
// }
// array.forEach(printMe)


// array.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });


/************* Important **************/
const myCoding = [
    {
        langName: "Javascript",
        langFileName: 'js'
    },
    {
        langName: "Java",
        langFileName: 'java'
    },
    {
        langName: "Python",
        langFileName: 'py'
    }
]

myCoding.forEach((item) => {
    console.log(item.langName);
})