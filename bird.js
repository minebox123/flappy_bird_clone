import { c } from "./app.js";

export default class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.vy = 1;
    this.gravity = 1;
    this.height = 40;
    this.width = 60;
    this.color = "#283593";
  }

  drawBird() {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.width, this.height);
  }
  moveBird() {
    this.drawBird();
    this.vy += this.gravity;
    this.y += this.vy;

    document.addEventListener("keypress", e => {
      if (e.keyCode === 32) {
        this.vy = -this.height / 2.5;
      }
    });
  }
}
