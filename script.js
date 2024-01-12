
































































































const bodyElement = document.getElementById('body-id');

randomColors();

setInterval(randomColors, 10000);

    function randomColors() {
        let numeroRandom = Math.floor(Math.random() * 3 ) + 1

        if (numeroRandom === 1) {
            bodyElement.style.background-color = 'green';
        } else if (numeroRandom === 2) {
            bodyElement.style.background-color = 'blue';
        } else {
            bodyElement.style.background-color = 'red';
        }
    }