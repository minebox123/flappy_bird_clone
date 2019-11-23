// class Bird {
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
//     this.vy += this.gravity;
//     this.y += this.vy;
//   }
// }

// const bird = new Bird(300, canvas.height / 2);
