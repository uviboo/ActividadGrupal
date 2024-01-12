
































































































const bodyElement = document.getElementById('body-id');

randomColors();

setInterval(randomColors, 10000);

    function randomColors() {
        let numeroRandom = Math.floor(Math.random() * 3 ) + 1

        if (numeroRandom === 1) {
            bodyElement.style.backgroundColor = 'green';
        } else if (numeroRandom === 2) {
            bodyElement.style.backgroundColor = 'blue';
        } else {
            bodyElement.style.backgroundColor = 'red';
        }
    }







