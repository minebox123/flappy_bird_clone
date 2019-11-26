/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.border = "1px solid red";
canvas.style.background = "url(./images/bg.png) center no-repeat";
canvas.style.backgroundSize = "cover";
var continueAnimating = true;

var Bird =
/*#__PURE__*/
function () {
  function Bird(x, y) {
    _classCallCheck(this, Bird);

    this.x = x;
    this.y = y;
    this.vx = 1;
    this.vy = 1;
    this.gravity = 1;
    this.radius = 40;
    this.width = 60;
    this.color = "#283593";
  }

  _createClass(Bird, [{
    key: "drawBird",
    value: function drawBird() {
      // c.beginPath();
      // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = this.color; // c.fill();
      // c.rotate((-20 * Math.PI) / 180);

      c.fillRect(this.x, this.y, this.width, this.radius);
    }
  }, {
    key: "moveBird",
    value: function moveBird() {
      this.drawBird();
      this.vy += this.gravity;
      this.y += this.vy;
    }
  }]);

  return Bird;
}();

var bird = new Bird(300, canvas.height / 2);

var PipeTop =
/*#__PURE__*/
function () {
  function PipeTop(x, y, width, height) {
    _classCallCheck(this, PipeTop);

    this.x = x;
    this.y = y;
    this.vx = 5;
    this.width = width;
    this.height = height;
  }

  _createClass(PipeTop, [{
    key: "drawUpPipe",
    value: function drawUpPipe() {
      c.fillStyle = "##FF9800";
      c.fillRect(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "drawBottomPipe",
    value: function drawBottomPipe() {
      c.fillStyle = "##FF9800";
      c.fillRect(this.x, this.height + 170, this.width, canvas.height);
    }
  }, {
    key: "move",
    value: function move() {
      this.drawBottomPipe();
      this.drawUpPipe();
      this.x -= this.vx;
    }
  }, {
    key: "collision",
    value: function collision() {
      this.move(); // const distX = Math.abs(bird.x - this.x - this.width / 2);
      // const distY = Math.abs(bird.y - this.y - this.height / 2);
      // if (distX > this.width / 2 + bird.radius) false;
      // if (distY > this.height / 2 + bird.radius) false;
      // if (distX <= this.width / 2) true;
      // if (distY <= this.height / 2) true;
      // const dx = distX - this.width / 2;
      // const dy = distY - this.height / 2;
      // if (dx * dx + dy * dy <= bird.radius * bird.radius) {
      //   continueAnimating = false;
      // }
    }
  }]);

  return PipeTop;
}();

var pipeWidth = 100;
var xLocation = 600;

var pipeHeight = function pipeHeight() {
  var heightProportion = [1.5, 2, 2.5, 3, 3.5, 4, 5];
  return canvas.height / heightProportion[Math.floor(Math.random() * heightProportion.length)];
};

var PIPES = [];

for (var i = 0; i < 100; i++) {
  PIPES.push(new PipeTop(xLocation += 600, 0, pipeWidth, pipeHeight()));
}

function main_loop() {
  if (continueAnimating) {
    requestAnimationFrame(main_loop);
  } else {
    document.querySelector(".message").style.display = "flex";
  }

  c.clearRect(0, 0, canvas.width, canvas.height);
  bird.moveBird();
  PIPES.map(function (pipes) {
    return pipes.collision();
  });
}

document.addEventListener("keypress", function (e) {
  if (e.keyCode === 32) {
    bird.vy = -bird.radius / 2.5;
  }
});
setTimeout(function () {
  canvas.style.backgroundImage = "url(./images/bg_night.png)";
}, 100000); // collision
// const distX = Math.abs(bird.x - rectX - rectW / 2);
// console.log(distX);

main_loop(); // function draw() {
//   const img = new Image();
//   img.onload = function() {
//     c.drawImage(img, 300, 300);
//   };
//   img.src = "./images/bird.png";
// }

/***/ })

/******/ });
//# sourceMappingURL=main.js.map