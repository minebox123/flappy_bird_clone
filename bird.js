// const canvas = document.querySelector("canvas");
// const c = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// export default class Bird {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.vx = 1;
//     this.vy = 1;
//     this.gravity = 1;
//     this.radius = 20;
//     this.color = "#283593";
//   }

//   drawBird() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     c.fillStyle = this.color;
//     c.fill();
//   }
//   moveBird() {
//     this.drawBird();
//     this.vy += this.gravity;
//     this.y += this.vy;
//   }
// }
