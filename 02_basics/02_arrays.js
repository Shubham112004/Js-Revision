const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...dc_heros, ...marvel_heros]    //spread operator
console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 2, 6, [4, 9], 8, [7, 3]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(anotherArray);
console.log(realAnotherArray);


console.log(Array.isArray("Shubham"))
console.log(Array.from("Shubham"))
console.log(Array.from({ name: "Shubh" }))  //intresting

let score1 = 215
let score2 = 542
let score3 = 658

console.log(Array.of(score1, score2, score3));