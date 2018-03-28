var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');


c.fillRect(window.innerWidth / 2, window.innerHeight / 2, 95, 95);
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(window.innerWidth / 2 - 50, window.innerHeight / 2 + 100, 95, 95);
c.fillRect(window.innerWidth / 2 + 50, window.innerHeight / 2 + 100, 95, 95);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(window.innerWidth / 2 - 100, window.innerHeight / 2 + 200, 95, 95);
c.fillRect(window.innerWidth / 2, window.innerHeight / 2 + 200, 95, 95);
c.fillRect(window.innerWidth / 2 + 100, window.innerHeight / 2 + 200, 95, 95);

// Line
c.beginPath();
c.strokeStyle = 'rgba(255, 0, 255, 0.5)';
c.moveTo(window.innerWidth / 2 + 50, window.innerHeight / 2 - 100);
c.lineTo(window.innerWidth / 2 - 150, window.innerHeight / 2 + 300);
c.lineTo(window.innerWidth / 2 + 250, window.innerHeight / 2 + 300);
c.lineTo(window.innerWidth / 2 + 50, window.innerHeight / 2 - 100);
c.stroke();

c.beginPath();
c.strokeStyle = 'blue';
c.arc(
  window.innerWidth / 2 + 50,
  window.innerHeight / 2 - 100,
  50,
  0,
  Math.PI * 2,
  false
);
c.stroke();

c.beginPath();
c.strokeStyle = 'blue';
c.arc(
  window.innerWidth / 2 - 150,
  window.innerHeight / 2 + 300,
  50,
  0,
  Math.PI * 2,
  false
);
c.stroke();

c.beginPath();
c.strokeStyle = 'blue';
c.arc(
  window.innerWidth / 2 + 250,
  window.innerHeight / 2 + 300,
  50,
  0,
  Math.PI * 2,
  false
);
c.stroke();

for (let index = 0; index < 100; index++) {
  var randomX = Math.random() * window.innerWidth;
  var randomY = Math.random() * window.innerHeight;
  var randomR = Math.floor(Math.random() * 255);
  var randomG = Math.floor(Math.random() * 255);
  var randomB = Math.floor(Math.random() * 255);
  var randomA = Math.random();
  c.beginPath();
  console.log(`rgba(${randomR}, ${randomG}, ${randomB}, ${randomA})`);
  c.strokeStyle = `rgba(${randomR}, ${randomG}, ${randomB}, ${randomA})`;
  c.arc(randomX, randomY, 50, 0, Math.PI * 2, false);
  c.stroke();
}
