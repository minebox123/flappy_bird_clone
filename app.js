export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "url(./images/bg.png) center no-repeat";
canvas.style.backgroundSize = "cover";
export let continueAnimating = true;
import Bird from "./bird.js";

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
    c.fillStyle = "#1B5E20";
    c.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.drawUpPipe();
    this.x -= this.vx;
  }

  collision() {
    this.move();
    if (
      bird.x < this.x + this.width &&
      bird.x + bird.width > this.x &&
      bird.y < this.y + this.height &&
      bird.y + bird.height > this.y
    ) {
      continueAnimating = false;
    }
  }
}

class PipeBottom {
  constructor(x, width, height) {
    this.x = x;
    this.y = canvas.height;
    this.width = width;
    this.height = height;
    this.vx = 5;
  }

  draw() {
    c.fillStyle = "#1B5E20";
    c.fillRect(this.x, this.y - this.height, this.width, this.height);
  }

  move() {
    this.draw();
    this.x -= this.vx;
  }

  collision() {
    this.move();
    if (
      bird.x < this.x + this.width &&
      bird.x + bird.width > this.x &&
      bird.y + bird.height > this.y - this.height
    ) {
      continueAnimating = false;
    } else if (bird.y + bird.height >= canvas.height) {
      continueAnimating = false;
    }
  }
}

class CreatePipes {
  constructor() {
    this.countOfPipes = 100;
    this.allPipes = [];
    this.pipeWidth = 100;
    this.xPosition = canvas.width;
  }

  randomHeight() {
    const heightProportion = [1.5, 2, 2.5, 3, 3.5, 4, 5];
    return (
      canvas.height /
      heightProportion[Math.floor(Math.random() * heightProportion.length)]
    );
  }

  create() {
    for (let i = 0; i < this.countOfPipes; i++) {
      let height = this.randomHeight();
      const pipes = {
        top: new PipeTop(this.xPosition, 0, this.pipeWidth, height),
        bottom: new PipeBottom(
          this.xPosition,
          this.pipeWidth,
          canvas.height - height - 200
        )
      };
      this.allPipes.push(pipes);
      this.xPosition += 600;
    }
  }
}

const pipes = new CreatePipes();
pipes.create();
const p = pipes.allPipes;

(function mainLoop() {
  if (continueAnimating === true) {
    requestAnimationFrame(mainLoop);
  }

  c.clearRect(0, 0, canvas.width, canvas.height);
  bird.moveBird();

  p.map(pipes => pipes.top.collision());
  p.map(pipes => pipes.bottom.collision());
})();

setTimeout(() => {
  canvas.style.backgroundImage = "url(./images/bg_night.png)";
}, 100000);
