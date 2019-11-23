const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.border = "1px solid red";
canvas.style.background = "url(./images/bg.png) center no-repeat";
canvas.style.backgroundSize = "cover";

class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.vy = 1;
    this.gravity = 1;
    this.radius = 20;
    this.color = "#283593";
  }

  drawBird() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
  }
  moveBird() {
    this.drawBird();
    this.vy += this.gravity;
    this.y += this.vy;
  }
}

const bird = new Bird(300, canvas.height / 2);

class PipeTop {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.vx = 5;
    this.width = width;
    this.height = height;
  }

  drawUpPipe() {
    c.fillStyle = "##FF9800";
    c.fillRect(this.x, this.y, this.width, this.height);
  }
  drawBottomPipe() {
    c.fillStyle = "##FF9800";
    c.fillRect(this.x, this.height + 170, this.width, canvas.height);
  }

  move() {
    this.drawBottomPipe();
    this.drawUpPipe();
    this.x -= this.vx;
  }

  collision() {
    this.move();
    const distX = Math.abs(bird.x - this.x - this.width / 2);
    const distY = Math.abs(bird.y - this.y - this.height / 2);

    // if (distX > this.width / 2 + bird.radius) false;
    // if (distY > this.height / 2 + bird.radius) false;
    // if (distX <= this.width / 2) true;
    // if (distY <= this.height / 2) true;

    const dx = distX - this.width / 2;
    const dy = distY - this.height / 2;

    if (dx * dx + dy * dy <= bird.radius * bird.radius) {
      // const div = document.createElement("div");
      // div.classList.add("gameOver");
      // const message = document.createElement("h1");
      // div.appendChild(message);
      // canvas.appendChild(div);
      alert("game over");
    }
  }
}

const pipeWidth = 100;
let xLocation = 600;
const pipeHeight = () => {
  const heightProportion = [1.5, 2, 2.5, 3, 3.5, 4, 5];
  return (
    canvas.height /
    heightProportion[Math.floor(Math.random() * heightProportion.length)]
  );
};

const PIPES = [];

for (let i = 0; i < 100; i++) {
  PIPES.push(new PipeTop((xLocation += 600), 0, pipeWidth, pipeHeight()));
}

function main_loop() {
  requestAnimationFrame(main_loop);
  c.clearRect(0, 0, canvas.width, canvas.height);

  bird.moveBird();
  PIPES.map(pipes => pipes.collision());
}

document.addEventListener("keypress", e => {
  if ((e.keyCode = 32)) {
    bird.vy = -bird.radius + 5;
  }
});

setTimeout(() => {
  canvas.style.backgroundImage = "url(./images/bg_night.png)";
}, 100000);

// collision
// const distX = Math.abs(bird.x - rectX - rectW / 2);
// console.log(distX);

main_loop();
