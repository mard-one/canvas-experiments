// old messy code from an abandoned js1k entry, don't judge me!

var canvas = document.querySelector('canvas'),
  c = canvas.getContext('2d'),
  particles = [],
  colorPalette = ['#F2E8C9', '#118CD6'],
  md = 0,
  alpha = 1;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}
function randomColor(palette) {
  return palette[Math.floor(Math.random() * (palette.length - 1))];
}

function Particle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = colorPalette[Math.floor(rand(0,2))];
  this.radian = Math.random() * Math.PI * 2;
  this.distance = rand(250, 1200);
  this.blur = rand(5, 10);
  this.velocity = 0.001;
  this.minVelocity = 0.001;
  this.maxVelocity = 0.01;
  this.acceleration = 0.0001;

  this.draw = function() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fill();
    c.strokeStyle = this.color;
    // c.shadowBlur = this.blur;
    // c.shadowColor = this.color;
    c.stroke();
  };

  this.update = function() {
    if (md && this.velocity <= this.maxVelocity) {
      this.velocity += this.acceleration;
    }
    if (!md && this.velocity >= this.minVelocity) {
      this.velocity -= this.acceleration;
    }
    this.radian += this.velocity;
    this.x = x + Math.cos(this.radian) * this.distance;
    this.y = y + Math.sin(this.radian) * this.distance;
    this.draw();
  };
}

for (let index = 0; index < 500; index++) {
  var x = canvas.width / 4 * 3,
      y = canvas.height / 3,
      radius = rand(0.01, 2);

  console.log("x and y", x, y);
  particles.push(new Particle(x, y, radius));
}


window.addEventListener('mousedown', function() {
  md = 1
});

window.addEventListener('mouseup', function() {
  md = 0
});


function animate() {
  requestAnimationFrame(animate)
  if(md && this.alpha >= 0.1){
    this.alpha -= 0.01
  };
  if(!md && this.alpha < 1){
    this.alpha += 0.01
  };
  c.fillStyle = "rgba(12, 35, 47, "+ this.alpha + ")";
  c.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    particle.update();
  });
}
animate();
