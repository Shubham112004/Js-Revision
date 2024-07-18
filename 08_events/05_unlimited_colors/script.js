
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// console.log(randomColor());
let intervalId
const startChaingingColor = () => {

    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChaingingColor = () => {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChaingingColor)
document.querySelector('#stop').addEventListener('click', stopChaingingColor)