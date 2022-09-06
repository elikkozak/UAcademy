"use strict";
function doY() {
    const inputElement = document.querySelector('.foo');
    inputElement.addEventListener('input', function (event) {
        const e = event.target;
        console.log(e.value);
    });
}
