const buttons = document.querySelectorAll('.btn')
const body = document.querySelector('body')
// console.log(buttons);
buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);

        switch (e.target.id) {
            case e.target.id:
                body.className = `bg-${e.target.id}`
                break;

            default:

                break;
        }
    })
})