// reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        course: 'js',
        price: 599
    },
    {
        course: 'dsa',
        price: 999
    },
    {
        course: 'web dev',
        price: 1299
    },
    {
        course: 'py',
        price: 399
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(priceToPay);