// falsy values

// false, 0, -0, BigInt -> 0n, null, undefined, NaN

//detecting is array empty or not
const emptyArray = []
if (emptyArray.length === 0) {
    console.log("Array is empty");
}

//detecting is object empty or not
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) -> null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");