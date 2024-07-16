const form = document.querySelector('form')
console.log(form);

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    // console.log(height);
    const weight = parseInt(document.querySelector('#weight').value)
    // console.log(weight);
    const result = document.querySelector('#result')

    if (height <= 0 || height == '' || isNaN(height)) {
        result.innerHTML = `Please give a valid heigth ${height}`
    } else if (weight <= 0 || weight == '' || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        document.querySelector('#guide').className = 'd-block'
        if (bmi <= 18.6) {
            document.querySelector('#details').innerHTML = 'You are Under Weight'
        } else if (bmi > 18.6 && bmi < 24.9) {
            document.querySelector('#details').innerHTML = 'You are in Normal Range'
        } else {
            document.querySelector('#details').innerHTML = 'You are Overweight'
        }
    }
})