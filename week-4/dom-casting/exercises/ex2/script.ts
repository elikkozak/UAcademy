function doY() {
    const inputElement = document.querySelector('.foo') as HTMLInputElement;

    inputElement.addEventListener('input', function(event) {
        const e = event.target as HTMLInputElement;
        console.log(e.value);
    });
}