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



// Cambiar color h1 aleatoriamente

const h1Selector = document.getElementById('title');

randomColors();

setInterval(randomColors, 1000);

function randomColors() {
    let numeroRandom = Math.floor(Math.random() * 3 ) + 1

    if (numeroRandom === 1) {
        h1Selector.style.color = 'green';
    } else if (numeroRandom === 2) {
        h1Selector.style.color = 'blue';
    } else {
        h1Selector.style.color = 'red';
    }
}
