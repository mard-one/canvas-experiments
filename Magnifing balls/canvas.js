var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
};
var circleArray = [];
var colorPalett = ['#0A3A82', '#87C9FB', '#F55B59', '#F55B59', '#000000'];

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.originalRadius = radius;
  this.color = colorPalett[Math.floor(Math.random() * (colorPalett.length - 1))];
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
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    // if (
    //   this.x + this.radius > mouse.x &&
    //   this.x - this.radius < mouse.x &&
    //   this.y - this.radius < mouse.y &&
    //   this.y + this.radius > mouse.y
    // ) {
    //   if(this.radius < this.originalRadius * 10){
    //     this.radius += 10;
    //   }     
    // }else{
    //   this.radius = this.originalRadius
    // }
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < this.maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

for (let index = 0; index < 500; index++) {
  var radius = 10;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 3;
  var dy = (Math.random() - 0.5) * 3;
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
