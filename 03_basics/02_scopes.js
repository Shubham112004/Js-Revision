/*

function one() {
    const username = "Shubham "
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if (true) {
    const username = "shubham"
    if (username == "shubham") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);
*/

/************* Intersting ***************/

addone(5)                       //valid
function addone(num) {
    return num + 1
}



// addtwo(6)                        //can't access addtwo() before initilization
const addtwo = function (num) {       //function expression
    return num + 2
}
addtwo(6)