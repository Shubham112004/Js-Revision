let submitBtn = document.querySelector('#submit-btn')
let randomNum = parseInt((Math.random() * 100) / 2 + 1)
console.log(randomNum);

let numOfAttempts = 1
let previousGuess = []
let remaining = 10;
let userInput;
submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    userInput = document.querySelector('#user-guess-input').value.trim()
    // console.log(userInput);
    document.getElementById('user-guess-input').value = ''
    attempts()
    prevGuess()
    // remaningGuess()
    congrats()
})

function attempts() {
    if (previousGuess.length == 9) {
        result()
        document.querySelector('#submit-btn').setAttribute('disabled', '')
    }
}
function prevGuess() {
    if (userInput == '' || isNaN(userInput)) {
        document.querySelector('#errorMsg').innerHTML = 'Please enter a valid number'
    } else {
        previousGuess.push(userInput)
        // console.log(previousGuess);
        document.querySelector('#prev').innerHTML = `${previousGuess}`
        remaningGuess()
        document.querySelector('#errorMsg').innerHTML = ''
    }
}

function result() {
    document.querySelector('h4').className = 'd-block'
    document.querySelector('#result').className = 'text-danger fw-bolder'
    document.querySelector('#result').innerHTML = `${randomNum}`
}

function remaningGuess() {
    remaining--;
    document.querySelector('#rem').innerHTML = `${remaining}`
}

function congrats() {
    if (userInput == randomNum) {
        document.querySelector('h3').className = 'd-block text-warning'
        document.querySelector('#submit-btn').setAttribute('disabled', '')
    }
}