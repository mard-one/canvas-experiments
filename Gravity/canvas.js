var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
};
var circleArray = [];
var colorPalette = ['#0A3A82', '#87C9FB', '#F55B59', '#F55B59', '#000000'];
var gravity = 1;
var friction = 0.95;

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});
function randomInitFromRange(min, max, negative) {
  if (negative) {
    return Math.floor(Math.random() * (max - 1) + Math.random() * min + 1);
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
function randomColor(palette) {
  return palette[Math.floor(Math.random() * (palette.length - 1))];
}

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.originalRadius = radius;
  this.color = randomColor(colorPalette);
  this.minRadius = Math.random() * 4 + 1;
  this.maxRadius = 50;

  this.draw = function() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fill();
    c.stroke();
  };

  this.update = function() {
    if (this.y + this.radius > innerHeight) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }
    if (this.x + this.radius + this.dx > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    this.y += this.dy;
    this.x += this.dx;
    this.draw();
  };
}

for (let index = 0; index < 100; index++) {
  var radius = randomInitFromRange(1, 30);
  var x = randomInitFromRange(radius, canvas.width - radius, false);
  var y = randomInitFromRange(radius, canvas.height - radius, false);
  var dx = randomInitFromRange(-2, 2, false);

  console.log("x", dx);
  var dy = randomInitFromRange(-5, 5, false);
  console.log("y", dy);
  circleArray.push(new Circle(x, y, dx, dy, radius));
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circleArray.forEach(circle => {
    circle.update();
  });
}
animate();
