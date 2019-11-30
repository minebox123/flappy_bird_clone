// import { c } from "./app.js";

// export default class PipeTop {
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.vx = 5;
//     this.width = width;
//     this.height = height;
//   }

//   drawUpPipe() {
//     c.fillStyle = "#1B5E20";

//     c.fillRect(this.x, this.y, this.width, this.height);
//   }
//   drawBottomPipe() {
//     c.fillStyle = "#1B5E20";
//     c.fillRect(this.x, this.height + 170, this.width, canvas.height);
//   }

//   move() {
//     this.drawBottomPipe();
//     this.drawUpPipe();
//     this.x -= this.vx;
//   }

//   collision() {
//     this.move();
//     if (
//       bird.x < this.x + this.width &&
//       bird.x + bird.width > this.x &&
//       bird.y < this.y + this.height &&
//       bird.y + bird.radius > this.y
//     ) {
//       continueAnimating = false;
//     }
//   }
// }
