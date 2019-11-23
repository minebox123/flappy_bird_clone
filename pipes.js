// class PipeTop {
//   constructor(x, y, width, height, vx) {
//     this.x = x;
//     this.y = y;
//     this.vx = 5;
//     this.width = width;
//     this.height = height;
//   }

//   drawUpPipe() {
//     c.fillStyle = "#4CAF50";
//     c.fillRect(this.x, this.y, this.width, this.height);
//   }
//   drawBottomPipe() {
//     c.fillStyle = "blue";
//     c.fillRect(this.x, this.height + 150, this.width, canvas.height);
//   }

//   move() {
//     this.x -= this.vx;
//   }
// }

// class PipeBottom extends PipeTop {
//   constructor(x, y, width, height) {
//     super(x, y, width, height);
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//   }
//   draw() {
//     c.fillStyle = "#4CAF50";
//     c.fillRect(this.x, this.y, this.width, this.height / 1.5);
//   }
// }

// const pipeWidth = 100;
// const pipeHeight = () => {
//   const heightProportion = [2, 3, 4];
//   return (
//     canvas.height /
//     heightProportion[Math.floor(Math.random() * heightProportion.length)]
//   );
// };

// // const pipeBottom = new PipeBottom(
// //   600,
// //   canvas.height - 300 / 2,
// //   pipeWidth,
// //   -pipeHeight()
// // );
// let pipeTop;
// setInterval(() => {
//   for (let i = 0; i < 100; i++) {
//     pipeTop = new PipeTop((600 += 100), 0, pipeWidth, pipeHeight());
//   }
// }, 1000);
