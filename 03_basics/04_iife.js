// Immediately Invoked function expressions (IIFE) - to avoid pollution problem of global scope

(function chai() {
    //named iffe
    console.log('DB CONNECTED');
})();       //must add ; to execute another function

(function aurCode() {
    //unnamed iffe
    console.log('Another DB CONNECTED');
})();

(() => {
    console.log('Yet another DB CONNECTED');
})()