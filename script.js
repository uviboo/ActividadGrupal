function colorh5a() {
    let colors = ["red", "blue", "green"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorh5a").style.color = randomColor;
  }
  function colorh5b() {
    let colors = ["red", "blue", "green"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorh5b").style.color = randomColor;
  }
  function colorh5c() {
    let colors = ["red", "blue", "green"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorh5c").style.color = randomColor;
  }

  function colorh5d() {
    let colors = ["red", "blue", "green"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorh5d").style.color = randomColor;
  }



// Cambiar color del fondo aleatoriamente

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
