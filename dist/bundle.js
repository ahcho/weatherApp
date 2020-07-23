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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
  API_KEY: "dfee5e9cc8167796e72b503e92bfdbcf"
}; // module.exports = config;

/***/ }),

/***/ "./src/cloud.js":
/*!**********************!*\
  !*** ./src/cloud.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cloud; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cloud = /*#__PURE__*/function () {
  function cloud(x, y, color, vx, c, canvas) {
    _classCallCheck(this, cloud);

    this.x = x;
    this.y = y;
    this.color = color;
    this.velocity = {
      x: vx,
      y: 0
    };
    this.friction = 0.8;
    this.lineWidth = 1;
    this.c = c;
    this.canvas = canvas;
  } // cloud shape


  _createClass(cloud, [{
    key: "draw",
    value: function draw() {
      this.c.beginPath();
      this.c.moveTo(this.x, this.y);
      this.c.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
      this.c.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 170, this.y + 70);
      this.c.bezierCurveTo(this.x + 300, this.y + 70, this.x + 300, this.y + 40, this.x + 250, this.y + 20);
      this.c.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
      this.c.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
      this.c.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);
      this.c.fillStyle = this.color;
      this.c.fill();
      this.c.lineWidth = this.lineWidth;
      this.c.strokeStyle = 'gray';
      this.c.stroke();
      this.c.closePath();
    } // call draw function

  }, {
    key: "update",
    value: function update() {
      this.draw(); //when rain hits bottom of screen

      if (this.x + this.velocity.x - 20 === this.canvas.width) {
        this.x -= this.velocity.x;
      } else if (this.x + this.velocity.x - 20 === 0) {
        this.x += this.velocity.x;
      }

      this.x += this.velocity.x;
    }
  }]);

  return cloud;
}(); // const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// let TAU = 2.0 * Math.PI
// let w = ctx.canvas.width
// let h = ctx.canvas.height
// let s = Math.min(w,h);
// let t = 6;
// let STROKE = 0.08;
// let color = 'white' 
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// function circle(ctx, x, y, r) {
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, TAU, false);
//     ctx.fill();
// }
// function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
//     var i;
//     for (i = 5; i--;)
//         puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
// }
// function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
//     var c = Math.cos(t * TAU),
//         s = Math.sin(t * TAU);
//     rmax -= rmin;
//     circle(
//         ctx,
//         cx - s * rx,
//         cy + c * ry + rmax * 0.5,
//         rmin + (1 - c * 0.5) * rmax
//     );
// }
// function cloud(ctx, t, cx, cy, cw, s, color) {
//     t /= 30000;
//     var a = cw * 0.21,
//         b = cw * 0.12,
//         c = cw * 0.24,
//         d = cw * 0.28;
//     ctx.fillStyle = color;
//     puffs(ctx, t, cx, cy, a, b, c, d);
//     ctx.globalCompositeOperation = 'destination-out';
//     puffs(ctx, t, cx, cy, a, b, c - s, d - s);
// }
// cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);




/***/ }),

/***/ "./src/getWeatherData.js":
/*!*******************************!*\
  !*** ./src/getWeatherData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weather; });
/* harmony import */ var _rain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rain */ "./src/rain.js");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sun */ "./src/sun.js");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sun__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snow */ "./src/snow.js");
/* harmony import */ var _night__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./night */ "./src/night.js");
/* harmony import */ var _thunder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thunder */ "./src/thunder.js");
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloud */ "./src/cloud.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Weather = /*#__PURE__*/function () {
  function Weather(api, c, canvas) {
    _classCallCheck(this, Weather);

    this.c = c;
    this.canvas = canvas;
    this.api = api;
    this.temperatureDegree = document.querySelector(".temp-degree");
    this.temperatureDescription = document.querySelector(".temp-description");
    this.locationTimezone = document.querySelector(".location-timezone");
    this.degreeSection = document.querySelector('.weather-info-bottom');
    this.degreeSpan = document.querySelector('.weather-info-bottom span');
    this.iconSection = document.getElementById('temp-icon');
    this.cloudSection = document.querySelector('.fa-cloud');
    this.rainSection = document.querySelector('.fa-tint');
    this.snowSection = document.querySelector('.fa-asterisk');
    this.starSection = document.querySelector('.fa-star');
    this.thunderSection = document.querySelector('.fa-bolt');
    this.stars = []; //this.w_objects = [];

    this.clouds = [];
    this.thunders = [];
    this.rains = [];
    this.snows = []; // const x = Math.random() * (400 - 100) + 100;
    // const y = 150;
    // const w = Math.random() * 5;
    // this.w_thunders.push(new Thunder(x, y, this.c, this.canvas));

    this.ticker = 0;
    this.counter = 0;
  }

  _createClass(Weather, [{
    key: "getData",
    value: function getData() {
      var _this = this;

      return fetch(this.api).then(function (res) {
        return res.json();
      }).then(function (data) {
        var description = data.weather[0].description;
        var temperature = Math.floor(data.main.temp);
        var location = data.name;
        _this.iconId = data.weather[0].icon;
        _this.fixIconId = data.weather[0].icon;
        var iconAdd = "https://openweathermap.org/img/wn/".concat(_this.iconId, "@2x.png"); //Set DOM Elements from the API

        _this.temperatureDegree.textContent = temperature;
        _this.temperatureDescription.textContent = description;
        _this.locationTimezone.textContent = location;
        _this.iconSection.src = iconAdd;

        _this.changeMetric(temperature);

        _this.listenClick();
      });
    }
  }, {
    key: "listenClick",
    value: function listenClick() {
      var _this2 = this;

      this.stars = [];
      this.cloudSection.addEventListener('click', function () {
        _this2.iconId = '03d';
      });
      this.rainSection.addEventListener('click', function () {
        _this2.iconId = '09d';
      });
      this.snowSection.addEventListener('click', function () {
        _this2.iconId = '13d';
      });
      this.starSection.addEventListener('click', function () {
        _this2.iconId = '01n';
      });
      this.thunderSection.addEventListener('click', function () {
        _this2.iconId = '11d';
      });
    }
  }, {
    key: "changeMetric",
    value: function changeMetric(temperature) {
      var _this3 = this;

      var celsius = (temperature - 32) * (5 / 9);
      this.degreeSection.addEventListener('click', function () {
        if (_this3.degreeSpan.textContent === '°F') {
          _this3.degreeSpan.textContent = '°C';
          _this3.temperatureDegree.textContent = Math.floor(celsius);
        } else {
          _this3.degreeSpan.textContent = '°F';
          _this3.temperatureDegree.textContent = temperature;
        }
      });
    }
  }, {
    key: "renderCanvasBackground",
    value: function renderCanvasBackground() {
      var today = new Date();
      var time = today.getHours();
      this.hour = today.getHours();
      this.minutes = today.getMinutes();
      this.midDay = 'AM';

      if (this.hour >= 12) {
        this.midDay = 'PM';
        if (this.hour > 12) this.hour -= 12;
      }

      if (this.hour < 10) {
        this.hour = "0".concat(this.hour);
      }

      if (this.minutes < 10) {
        this.minutes = "0".concat(this.minutes);
      }

      this.c.beginPath();

      if (this.iconId[2] === 'd') {
        var backgroundGradient = this.c.createLinearGradient(0, 0, 500, 600);
        backgroundGradient.addColorStop(1, '#B7F8DB');
        backgroundGradient.addColorStop(0, '#50A7C2');
        this.c.fillStyle = backgroundGradient;
        this.c.fillRect(0, 0, 500, 600);
      } else {
        var _backgroundGradient = this.c.createLinearGradient(0, 0, 500, 600);

        _backgroundGradient.addColorStop(0, '#171e26');

        _backgroundGradient.addColorStop(1, '#3f586b');

        this.c.fillStyle = _backgroundGradient;
        this.c.fillRect(0, 0, 500, 600);
      } // this.listenClick();


      this.renderAnimation(this.iconId);
      requestAnimationFrame(this.renderCanvasBackground.bind(this));
    }
  }, {
    key: "renderTime",
    value: function renderTime() {
      var color = '#555555';
      if (this.iconId[2] === 'n') color = 'white';
      this.c.beginPath();
      this.c.font = '50px Cinzel';
      this.c.fillStyle = color;
      this.c.fillText("".concat(this.hour, ":").concat(this.minutes), 190, 60);
      this.c.font = '20px Cinzel';
      this.c.fillText(this.midDay, 310, 40);
      this.c.fill();
      this.c.closePath();
    }
  }, {
    key: "renderAnimation",
    value: function renderAnimation() {
      var THUNDER_ICON = ['11d', '11n'];
      var sun = '01d';
      var fewClouds = '02d';
      var scatteredClouds = ['03d', '04d'];
      var rain = ['09d', '10d', '09n', '10n'];
      var SNOW_ICON = ['13d', '50d', '13n', '50n'];
      var night = ["01n", "02n", "03n", "04n", "09n", "10n", "11n", "13n", "50n"]; //console.log(this.iconId)

      if (this.iconId[2] === 'n') {
        this.createStars(this.canvas.width, this.canvas.height, 30);
        this.animateNightSky();
        this.renderCloud(300, 150, 'lightgray');
      } // this.animateThunder();
      //this.animateCloud();
      //this.animateSnow()
      //this.animateRain()


      if (this.iconId === sun) {
        this.renderSun(250, 250);
      } else if (this.iconId === fewClouds) {
        this.renderCloud(300, 250, 'lightgray');
        this.renderSun(250, 180);
        this.renderCloud(100, 200, 'white');
        this.animateCloud(); //this.animateCloud();
      } else if (scatteredClouds.includes(this.iconId)) {
        this.renderCloud(50, 130, '	#dde7ee');
        this.renderCloud(300, 150, '#f0efef');
        this.renderCloud(100, 200, 'white');
        this.animateCloud();
      } else if (rain.includes(this.iconId)) {
        this.animateRain();
      } else if (THUNDER_ICON.includes(this.iconId)) {
        this.animateThunder();
      } else if (SNOW_ICON.includes(this.iconId)) {
        this.animateSnow();
      }

      var color = '#555555';
      if (this.iconId[2] === 'n') color = 'white';
      this.renderTime(color);
    }
  }, {
    key: "animateRain",
    value: function animateRain() {
      this.rains.forEach(function (rain) {
        rain.update();
        rain.miniRains.forEach(function (miniRain, index) {
          miniRain.update();

          if (miniRain.ttl === 0) {
            rain.miniRains.splice(index, 1); // get rid of mini rain
          }
        });
      });
      this.renderHeavyClouds();
      this.ticker++;

      if (this.ticker % 40 === 0) {
        var x = Math.random() * (400 - 100) + 100;
        var y = 150;
        var w = Math.random() * 5;
        this.rains.push(new _rain__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, w, "blue", this.c, this.canvas));
      }

      this.renderTime();
    }
  }, {
    key: "animateCloud",
    value: function animateCloud() {
      var CLOUD_COLOR = ['white', 'white', '#f0efef', '#ffeef7', '#efebf9', '#dfe8fb', 'lightgrey', 'gray'];
      this.renderHeavyClouds();
      this.clouds.forEach(function (cloud) {
        cloud.update();
      });
      this.ticker++;

      if (this.ticker % 250 === 0) {
        var rand_num = Math.floor(Math.random() * 7);
        var x = Math.floor(Math.random() * 200) - 100;
        var y = Math.random() * 400 + 100;
        var velocity = Math.floor(Math.random() * 40 + 5) * 1 / 100;
        console.log(CLOUD_COLOR[rand_num]);
        console.log(velocity);
        this.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_5__["default"](x, y, CLOUD_COLOR[rand_num], velocity, this.c, this.canvas));
      }

      this.renderTime();
    }
  }, {
    key: "animateThunder",
    value: function animateThunder() {
      this.thunders.forEach(function (thunder) {
        thunder.update();
      });
      this.renderHeavyClouds();
      this.ticker++;

      if (this.ticker % 100 === 0) {
        var x = Math.random() * (400 - 100) + 100;
        var y = 150;
        this.thunders.push(new _thunder__WEBPACK_IMPORTED_MODULE_4__["default"](x, y, this.c, this.canvas));
      }

      this.renderTime();
    }
  }, {
    key: "animateSnow",
    value: function animateSnow() {
      this.snows.forEach(function (snow) {
        snow.update();
      });
      this.renderHeavyClouds();
      this.ticker++;

      if (this.ticker % 100 === 0) {
        var x = Math.random() * (380 - 100) + 100;
        var y = 150;
        this.snows.push(new _snow__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, 10, 'white', this.c, this.canvas));
      }
    }
  }, {
    key: "renderSun",
    value: function renderSun(x, y) {
      this.degree = 0;
      this.x = x;
      this.y = y;
      this.radius = 50;
      this.sAngle = 0;
      this.eAngle = Math.PI * 2;
      this.len = 30;
      this.c.beginPath();
      this.c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
      this.c.fillStyle = '#FDB813';
      this.c.fill();

      if (y === 250) {
        for (var i = 0; i < 8; i++) {
          this.c.beginPath();
          this.c.lineCap = 'round';

          var _x = 250 + Math.cos(Math.PI * this.degree / 180) * 65;

          var _y = 250 - Math.sin(Math.PI * this.degree / 180) * 65;

          this.c.moveTo(_x, _y);
          this.c.lineTo(_x + this.len * Math.cos(Math.PI * this.degree / 180), _y - this.len * Math.sin(Math.PI * this.degree / 180));
          this.c.lineWidth = 9;
          this.c.strokeStyle = '#FDB813';
          this.c.stroke();
          this.degree += 45;
        }
      }

      this.c.closePath();
    }
  }, {
    key: "renderHeavyClouds",
    value: function renderHeavyClouds() {
      this.renderCloud(50, 130, '#dde7ee');
      this.renderCloud(300, 150, '#f0efef');
      this.renderCloud(100, 200, 'white');
    }
  }, {
    key: "renderCloud",
    value: function renderCloud(startX, startY, color) {
      this.c.beginPath();
      this.c.moveTo(startX, startY);
      this.c.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
      this.c.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
      this.c.bezierCurveTo(startX + 300, startY + 70, startX + 300, startY + 40, startX + 250, startY + 20);
      this.c.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
      this.c.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
      this.c.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
      this.c.closePath();
      this.c.fillStyle = color;
      this.c.fill();
      this.c.lineWidth = 1;
      this.c.strokeStyle = 'gray';
      this.c.stroke();
    } //////////

  }, {
    key: "maxRandom",
    value: function maxRandom(max) {
      return Math.floor(Math.random() * max);
    }
  }, {
    key: "createStars",
    value: function createStars(width, height, spacing) {
      var dx;
      var dy;

      for (var x = 0; x < width; x += spacing) {
        for (var y = 0; y < height; y += spacing) {
          dx = x + this.maxRandom(spacing);
          dy = y + this.maxRandom(spacing);
          var r = Math.random() * 1.5;
          var star = new _night__WEBPACK_IMPORTED_MODULE_3__["default"](dx, dy, r, this.c, this.canvas);
          this.stars.push(star);
        }
      }
    }
  }, {
    key: "animateNightSky",
    value: function animateNightSky() {
      var _this4 = this;

      this.c.fillStyle = 'black';
      this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.stars.forEach(function (star, i) {
        var factor = _this4.counter * i,
            opacity = star.getOpacity(factor),
            randomColor = Math.floor(Math.random() * 360 + 1); //render stars

        star.renderStar("hsla(".concat(randomColor, ", 30%, 80%, ").concat(opacity, ")"));
      });

      if (['01n', '02n'].includes(this.iconId)) {
        this.renderMoon();
      } else if (['03n', '04n'].includes(this.iconId)) {
        this.renderCloud(50, 130, '#B4B4B4');
        this.renderCloud(300, 150, 'lightgray');
        this.renderCloud(100, 100, '#909090');
      }

      this.counter++;
      this.renderTime('white');
      requestAnimationFrame(this.animateNightSky.bind(this));
    }
  }, {
    key: "renderMoon",
    value: function renderMoon() {
      this.c.save();
      this.c.beginPath();
      this.c.arc(360, 100, 50, 0, Math.PI * 2);
      this.c.fillStyle = "#f0c420";
      this.c.fill();
      this.c.closePath();
      this.c.restore();
    }
  }]);

  return Weather;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherData */ "./src/getWeatherData.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./config/config.js");


var API_KEY = _config_config__WEBPACK_IMPORTED_MODULE_1__["config"].API_KEY;

function success(position) {
  var canvas = document.querySelector('canvas');
  var c = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;
  var lon = position.coords.longitude;
  var lat = position.coords.latitude;
  var api = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&units=imperial&appid=").concat(API_KEY);
  var weather = new _getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"](api, c, canvas);
  weather.getData().then(function () {
    return weather.renderCanvasBackground();
  });
}

function error(err) {
  //console.warn(`ERROR(${err.code}): ${err.message}`);
  // later will get zipcode from user, currently just showing default location
  // (standford) weather 
  var canvas = document.querySelector('canvas');
  var c = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 600;
  var api = "https://api.openweathermap.org/data/2.5/weather?lat=37.4079488&lon=-122.13944319999999&units=imperial&appid=".concat(API_KEY);
  var weather = new _getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"](api, c, canvas);
  weather.renderCanvasBackground();
}

document.addEventListener("DOMContentLoaded", function () {
  navigator.geolocation.getCurrentPosition(success, error);
});

/***/ }),

/***/ "./src/night.js":
/*!**********************!*\
  !*** ./src/night.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Star; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Star = /*#__PURE__*/function () {
  function Star(x, y, r, c, canvas) {
    _classCallCheck(this, Star);

    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.canvas = canvas;
  }

  _createClass(Star, [{
    key: "renderStar",
    value: function renderStar(fillStyle) {
      this.c.beginPath();
      this.c.fillStyle = fillStyle;
      this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      this.c.fill();
    }
  }, {
    key: "getOpacity",
    value: function getOpacity(factor) {
      var opacityIncrement = 0.6 * Math.abs(Math.sin(factor));
      var opacity = 0.1 + opacityIncrement;
      return opacity;
    }
  }]);

  return Star;
}();



/***/ }),

/***/ "./src/rain.js":
/*!*********************!*\
  !*** ./src/rain.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rain; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var Rain = /*#__PURE__*/function () {
  function Rain(x, y, width, color, c, canvas) {
    _classCallCheck(this, Rain);

    this.x = x;
    this.y = y;
    this.color = color;
    this.velocity = {
      x: 0,
      y: 1
    };
    this.friction = 0.8;
    this.gravity = 0.05;
    this.opacity = 1;
    this.lineWidth = width;
    this.miniRains = [];
    this.c = c;
    this.canvas = canvas;
  } // how rain will look like


  _createClass(Rain, [{
    key: "draw",
    value: function draw() {
      this.c.save();
      this.c.beginPath();
      this.c.moveTo(this.x, 10 + this.y);
      this.c.lineTo(this.x, 30 + this.y);
      this.c.lineWidth = this.lineWidth;
      this.c.strokeStyle = 'white';
      this.c.stroke();
      this.c.closePath();
      this.c.restore();
    } // call draw function

  }, {
    key: "update",
    value: function update() {
      this.draw(); //when rain hits bottom of screen

      if (this.y + this.velocity.y + 20 > this.canvas.height) {
        this.shatter();
      } else {
        this.velocity.y += this.gravity;
      }

      this.y += this.velocity.y;
    }
  }, {
    key: "addThunder",
    value: function addThunder() {
      var x = 50;
      var startY = 100;
      this.thunders.push(new Thunder(x, startY, this.c));
    }
  }, {
    key: "shatter",
    value: function shatter() {
      var num = randomIntFromRange(1, 3);
      var radius = randomIntFromRange(1, 2);

      for (var i = 0; i < num; i++) {
        this.miniRains.push(new MiniRain(this.x, this.y, radius, this.c, this.canvas));
      }
    }
  }]);

  return Rain;
}();



var MiniRain = /*#__PURE__*/function () {
  function MiniRain(x, y, radius, c, canvas) {
    _classCallCheck(this, MiniRain);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = 'white';
    this.velocity = {
      x: randomIntFromRange(-5, 5),
      y: randomIntFromRange(-15, 15)
    };
    this.friction = 0.2;
    this.gravity = 0.05;
    this.ttl = 50; // they live 50 frames

    this.opacity = 1;
    this.c = c;
    this.canvas = canvas;
  }

  _createClass(MiniRain, [{
    key: "draw",
    value: function draw() {
      this.c.save();
      this.c.beginPath();
      this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.c.fillStyle = "rgba(227, 234, 239, ".concat(this.opacity, ")");
      this.c.shadowColor = 'white';
      this.c.shadowBlur = 20;
      this.c.fill();
      this.c.closePath();
      this.c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw(); // hits the bottom of screen

      if (this.y + this.radius + this.velocity.y > this.canvas.height) {
        this.velocity.y = -this.velocity.y * this.friction;
      } else {
        this.velocity.y += this.gravity;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.ttl -= 1;
      this.opacity -= 1 / this.ttl;
    }
  }]);

  return MiniRain;
}();

/***/ }),

/***/ "./src/snow.js":
/*!*********************!*\
  !*** ./src/snow.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Snow; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Snow = /*#__PURE__*/function () {
  function Snow(x, y, radius, color, c, canvas) {
    _classCallCheck(this, Snow);

    this.x = x;
    this.y = y;
    this.c = c;
    this.canvas = canvas;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: 0,
      y: 1
    };
    this.gravity = 0.01;
    this.opacity = 1;
  }

  _createClass(Snow, [{
    key: "draw",
    value: function draw() {
      this.c.save();
      this.c.beginPath();
      this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.c.fillStyle = "rgba(227, 234, 239, ".concat(this.opacity, ")");
      this.c.shadowColor = '#E3EAEF';
      this.c.shadowBlur = 20;
      this.c.fill();
      this.c.closePath();
      this.c.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw(); //when snow hits bottom of screen

      if (this.y + this.radius + this.velocity.y > this.canvas.height) {//this.velocity.y = 0;
      } else {//this.velocity.y += 0.01;//this.gravity;
        }

      this.y += this.velocity.y; //
    }
  }, {
    key: "renderSnowFlake",
    value: function renderSnowFlake(width, height) {
      this.c.lineWidth = 20;
      this.c.lineCap = 'round';
      this.c.fillStyle = "#162D50";
      this.c.strokeStyle = "#FFFFFF";
      this.c.fillRect(0, 0, width, height);
      this.c.translate(width / 2, height / 2);

      for (var count = 0; count < 6; count++) {
        this.c.beginPath();
        this.c.moveTo(0, 0);
        this.c.lineTo(300, 0);
        this.c.stroke();
        this.c.rotate(Math.PI / 3);
      }
    }
  }]);

  return Snow;
}();



/***/ }),

/***/ "./src/sun.js":
/*!********************!*\
  !*** ./src/sun.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// addEventListener('click', (event) => {
//     mouse.x = event.clientX
//     mouse.y = event.clientY
// })
// addEventListener('resize', () => {
//     canvas.width = 500
//     canvas.height = 600
//     init()
// })
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var Sun = /*#__PURE__*/function () {
  // constructor(x, y, radius, color) {
  function Sun(c) {
    _classCallCheck(this, Sun);

    this.c = c;
    this.x = 250;
    this.y = 250;
    this.radius = 50;
    this.sAngle = 0;
    this.eAngle = Math.PI * 2;
    this.color = '#FDB813';
    this.radians = 0;
    this.velocity = 0.001; // speed of bar

    this.degree = 0;
    this.len = 30;
  }

  _createClass(Sun, [{
    key: "draw",
    value: function draw() {
      //main sun
      this.c.beginPath();
      this.c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
      this.c.fillStyle = this.color;
      this.c.fill();

      for (var i = 0; i < 8; i++) {
        var len = 30;
        this.c.beginPath();
        this.c.lineCap = 'round';
        var x = 250 + Math.cos(Math.PI * this.degree / 180) * 65;
        var y = 250 - Math.sin(Math.PI * this.degree / 180) * 65;
        this.c.moveTo(x, y);
        this.c.lineTo(x + this.len * Math.cos(Math.PI * this.degree / 180), y - this.len * Math.sin(Math.PI * this.degree / 180));
        this.c.lineWidth = 9;
        this.c.strokeStyle = '#FDB813';
        this.c.stroke();
        this.degree += 45;
      }
    }
  }, {
    key: "update",
    value: function update() {
      //move points over time
      this.radians += this.velocity;
      this.x = this.x + Math.cos(this.radians); //* 100;

      this.y = this.y + Math.sin(this.radians); //* 100;

      this.draw();
    }
  }]);

  return Sun;
}(); ////////////////


var Particle = /*#__PURE__*/function () {
  function Particle(x, y, radius, color) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.02; // speed of particle

    this.distanceFromCenter = randomIntFromRange(50, 120);
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw(startPoint) {
      c.beginPath();
      c.strokeStyle = this.color;
      c.lineWidth = this.radius;
      c.moveTo(startPoint.x, startPoint.y);
      c.lineTo(this.x, this.y);
      c.stroke(); // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      // c.fillStyle = this.color
      // c.fill()

      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      var lastPoint = {
        x: this.x,
        y: this.y
      }; // move points over time

      var x = canvas.width / 2;
      var y = canvas.height / 2;
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
      this.draw(lastPoint);
    }
  }]);

  return Particle;
}(); //////////////////////


var Bar = /*#__PURE__*/function () {
  function Bar(x, y, degree) {
    _classCallCheck(this, Bar);

    this.x = 250;
    this.y = 250;
    this.len = 30;
    this.div = 180;
    var len = 30;
    this.radians = 0;
    this.velocity = 0.05; // speed of bar

    this.degree = degree;
  }

  _createClass(Bar, [{
    key: "draw",
    value: function draw() {
      var len = 30;
      c.beginPath();
      c.lineCap = 'round';
      var x = this.x + Math.cos(Math.PI * this.degree / 180) * 65;
      var y = this.y - Math.sin(Math.PI * this.degree / 180) * 65;
      c.moveTo(x, y);
      c.lineTo(x + this.len * Math.cos(Math.PI * this.degree / 180), y - this.len * Math.sin(Math.PI * this.degree / 180));
      c.lineWidth = 9;
      c.strokeStyle = '#FDB813';
      c.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.radians += this.velocity;
      this.x = this.x + Math.cos(this.radians) * 30;
      this.y = this.y + Math.sin(this.radians) * 30;
      this.draw();
    }
  }]);

  return Bar;
}();

var particles = [];

function init() {
  // const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
  // backgroundGradient.addColorStop(0, '#171e26')
  // backgroundGradient.addColorStop(1, '#3f586b')
  var sun = new Sun();
  sun.update();
  particles = [];
  var colors = ["#FCB033", "#FFE469", "#FECC51", "#FA8607", "#FA961B"];

  for (var i = 0; i < 200; i++) {
    var rand = Math.floor(Math.random() * colors.length);
    var radius = Math.ceil(Math.random() * 2);
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, colors[rand]));
  }
}

function animate() {
  requestAnimationFrame(animate); // const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
  // backgroundGradient.addColorStop(0, '#171e26')
  // backgroundGradient.addColorStop(1, '#3f586b')

  c.clearRect(0, 0, canvas.width, canvas.height); // c.fillStyle = backgroundGradient;
  // c.fillRect(0, 0, canvas.width, canvas.height)
  // bars.forEach(bar => {
  //     bar.update()
  // })

  var sun = new Sun();
  sun.update();
} // init()
// animate()

/***/ }),

/***/ "./src/thunder.js":
/*!************************!*\
  !*** ./src/thunder.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Thunder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Thunder = /*#__PURE__*/function () {
  function Thunder(x, y, c, canvas) {
    _classCallCheck(this, Thunder);

    this.x = x;
    this.y = y;
    this.c = c;
    this.canvas = canvas;
    this.velocity = {
      x: 0,
      y: 0.005
    };
    this.gravity = 0.001;
    this.size = 1;
    this.color = 'yellow';
    this.flag = true;
  }

  _createClass(Thunder, [{
    key: "draw",
    value: function draw() {
      this.c.beginPath();
      this.c.moveTo(this.x * this.size, this.y * this.size);
      this.c.lineTo((this.x + 20) * this.size, this.y * this.size);
      this.c.lineTo((this.x + 50) * this.size, (this.y - 35) * this.size);
      this.c.moveTo(this.x * this.size, this.y * this.size);
      this.c.lineTo((this.x + 20) * this.size, (this.y + 20) * this.size);
      this.c.lineTo((this.x + 40) * this.size, (this.y + 20) * this.size);
      this.c.lineTo((this.x + 20) * this.size, this.y * this.size);
      this.c.moveTo((this.x + 20) * this.size, (this.y + 20) * this.size);
      this.c.lineTo(this.x * this.size, (this.y + 40) * this.size);
      this.c.lineTo((this.x + 40) * this.size, (this.y + 20) * this.size);
      this.c.fillStyle = this.color;
      this.c.fill();
      this.c.closePath();
    }
  }, {
    key: "drawBigThunder",
    value: function drawBigThunder() {
      this.x = this.x * 0.667;
      this.y = this.y * 0.667;
      this.c.beginPath();
      this.c.moveTo(this.x * this.size, this.y * this.size);
      this.c.lineTo((this.x + 20) * this.size, this.y * this.size);
      this.c.lineTo((this.x + 50) * this.size, (this.y - 35) * this.size);
      this.c.moveTo(this.x * this.size, this.y * this.size);
      this.c.lineTo((this.x + 20) * this.size, (this.y + 20) * this.size);
      this.c.lineTo((this.x + 40) * this.size, (this.y + 20) * this.size);
      this.c.lineTo((this.x + 20) * this.size, this.y * this.size);
      this.c.moveTo((this.x + 20) * this.size, (this.y + 20) * this.size);
      this.c.lineTo(this.x * this.size, (this.y + 40) * this.size);
      this.c.lineTo((this.x + 40) * this.size, (this.y + 20) * this.size);
      this.c.fillStyle = this.color;
      this.c.fill();
      this.c.closePath();
    } // call draw function

  }, {
    key: "update",
    value: function update() {
      if (this.y + this.velocity.y + 45 > this.canvas.height) {
        this.size = 1.5;

        if (this.flag) {
          this.drawBigThunder();
          this.flag = false;
        }
      } else {
        this.draw();
      }

      this.velocity.y += this.gravity;
      this.y += this.velocity.y;
    }
  }]);

  return Thunder;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map