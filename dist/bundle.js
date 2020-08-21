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
  API_KEY: "dfee5e9cc8167796e72b503e92bfdbcf",
  TIME_API_KEY: "07fccc6911b743b3a4e786e0bc1578ef"
};

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
  function cloud(x, y, color, vx, c, canvas, size) {
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
    this.size = size;
  } // cloud shape


  _createClass(cloud, [{
    key: "draw",
    value: function draw() {
      this.c.beginPath();
      this.c.moveTo(this.x, this.y);
      this.c.bezierCurveTo(this.x - 4 * this.size, this.y + 2 * this.size, this.x - 4 * this.size, this.y + 7 * this.size, this.x + 6 * this.size, this.y + 7 * this.size);
      this.c.bezierCurveTo(this.x + 8 * this.size, this.y + 10 * this.size, this.x + 15 * this.size, this.y + 10 * this.size, this.x + 17 * this.size, this.y + 7 * this.size);
      this.c.bezierCurveTo(this.x + 30 * this.size, this.y + 7 * this.size, this.x + 30 * this.size, this.y + 4 * this.size, this.x + 25 * this.size, this.y + 2 * this.size);
      this.c.bezierCurveTo(this.x + 26 * this.size, this.y - 4 * this.size, this.x + 20 * this.size, this.y - 5 * this.size, this.x + 17 * this.size, this.y - 3 * this.size);
      this.c.bezierCurveTo(this.x + 15 * this.size, this.y - 7.5 * this.size, this.x + 8 * this.size, this.y - 6 * this.size, this.x + 8 * this.size, this.y - 3 * this.size);
      this.c.bezierCurveTo(this.x + 3 * this.size, this.y - 7.5 * this.size, this.x - 2 * this.size, this.y - 6 * this.size, this.x, this.y);
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
      } else if (this.x - 100 > this.canvas.width) {
        this.x = Math.floor(Math.random() * 200) - 100;
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
/* harmony import */ var _snow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snow */ "./src/snow.js");
/* harmony import */ var _night__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./night */ "./src/night.js");
/* harmony import */ var _thunder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thunder */ "./src/thunder.js");
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloud */ "./src/cloud.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Weather = /*#__PURE__*/function () {
  function Weather(api, c, canvas) {
    var timeApi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Weather);

    this.timeApi = timeApi;
    this.c = c;
    this.canvas = canvas;
    this.api = api;
    this.temperatureDegree = document.querySelector(".temp-degree");
    this.temperatureDescription = document.querySelector(".temp-description");
    this.locationTimezone = document.querySelector(".location-timezone");
    this.degreeSection = document.querySelector('.weather-info-bottom');
    this.degreeSpan = document.querySelector('.weather-info-bottom span');
    this.iconSection = document.getElementById('temp-icon');
    this.sunSection = document.querySelector('.fa-sun');
    this.cloudSection = document.querySelector('.fa-cloud');
    this.rainSection = document.querySelector('.fa-tint');
    this.snowSection = document.querySelector('.fa-asterisk');
    this.starSection = document.querySelector('.fa-star');
    this.thunderSection = document.querySelector('.fa-bolt');
    this.stars = [];
    this.clouds = [];
    this.thunders = [];
    this.rains = [];
    this.snows = [];
    this.ticker = 0;
    this.counter = 0;
    this.degree = 0;
  }

  _createClass(Weather, [{
    key: "getData",
    value: function getData() {
      var _this = this;

      return fetch(this.api).then(function (res) {
        return res.json();
      }).then(function (data) {
        var description = data.weather[0].description;
        _this.temperature = Math.floor(data.main.temp);
        var location = data.name;
        _this.iconId = data.weather[0].icon;
        _this.fixIconId = data.weather[0].icon;
        var iconAdd = "https://openweathermap.org/img/wn/".concat(_this.iconId, "@2x.png"); //Set DOM Elements from the API

        _this.temperatureDegree.textContent = _this.temperature;
        _this.temperatureDescription.textContent = description;
        _this.locationTimezone.textContent = location;
        _this.iconSection.src = iconAdd;

        _this.changeMetric(_this.temperature);

        _this.listenClick();
      });
    }
  }, {
    key: "listenClick",
    value: function listenClick() {
      var _this2 = this;

      this.stars = [];
      this.sunSection.addEventListener('click', function () {
        _this2.thunders = [];
        _this2.rains = [];
        _this2.clouds = [];
        _this2.snows = [];
        _this2.iconId = "01d";
      });
      this.cloudSection.addEventListener('click', function () {
        _this2.thunders = [];
        _this2.rains = [];
        _this2.snows = [];
        _this2.iconId = '03d';
      });
      this.rainSection.addEventListener('click', function () {
        _this2.thunders = [];
        _this2.clouds = [];
        _this2.snows = [];
        _this2.iconId = '09d';
      });
      this.snowSection.addEventListener('click', function () {
        _this2.thunders = [];
        _this2.clouds = [];
        _this2.rains = [];
        _this2.iconId = '13d';
      });
      this.starSection.addEventListener('click', function () {
        _this2.thunders = [];
        _this2.clouds = [];
        _this2.snows = [];
        _this2.iconId = '01n';
      });
      this.thunderSection.addEventListener('click', function () {
        _this2.rains = [];
        _this2.clouds = [];
        _this2.snows = [];
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
    key: "renderSelectCanvasBackground",
    value: function renderSelectCanvasBackground() {
      // fetch(this.timeApi)
      //     .then(res => {
      //         return res.json()
      //     })
      //     .then(data => { 
      //         this.currTime = data['time_12']
      //     })
      this.renderCanvasAnimation();
    } // renderSelectCanvasBackground() {
    //     fetch(this.timeApi)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             debugger
    //             this.currTime = data['time_12'].split(":")
    //             debugger
    //             this.hour = this.currTime[0]
    //             this.minutes = this.currTime[1]
    //             this.midDay = this.currTime[2];
    //         })
    //     debugger
    //     this.renderCanvasAnimation();
    // }

  }, {
    key: "renderCanvasBackground",
    value: function renderCanvasBackground() {
      var today = new Date();
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

      this.renderCanvasAnimation();
    }
  }, {
    key: "renderCanvasAnimation",
    value: function renderCanvasAnimation() {
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
      }

      this.renderAnimation(this.iconId);

      if (this.timeApi) {
        requestAnimationFrame(this.renderSelectCanvasBackground.bind(this));
      } else {
        requestAnimationFrame(this.renderCanvasBackground.bind(this));
      }

      if (['13d', '13n', '09d', '10d', '09n', '10n', '11d', '11n'].includes(this.iconId)) {
        this.renderHeavyClouds();
      }
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
      var SUN = '01d';
      var FEW_CLOUDS = '02d';
      var SCATTER_CLOUDS = ["03d", "04d", "50d", "50n"];
      var RAIN = ['09d', '10d', '09n', '10n'];
      var SNOW_ICON = ['13d', '13n'];
      var night = ["01n", "02n", "03n", "04n", "09n", "10n", "11n", "13n", "50n"];

      if (this.iconId[2] === 'n') {
        if (this.stars.length === 0) {
          this.createStars(this.canvas.width, this.canvas.height, 30);
        }

        this.animateNightSky();
        this.renderCloud(300, 150, 'lightgray');
      }

      if (this.iconId === SUN) {
        this.animateSun(250, 250);
      } else if (this.iconId === FEW_CLOUDS) {
        this.renderCloud(300, 250, 'lightgray');
        this.animateSun(250, 180);
        this.renderCloud(100, 200, 'white');
        this.animateCloud();
      } else if (SCATTER_CLOUDS.includes(this.iconId)) {
        this.renderHeavyClouds();
        this.animateCloud();
      } else if (RAIN.includes(this.iconId)) {
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
      this.ticker++;

      if (this.rains.length === 0 || this.ticker % 80 === 0 && this.rains.length < 20) {
        var x = Math.random() * 490 + 30;
        var y = 150;
        var w = Math.random() * 5;
        this.rains.push(new _rain__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, w, "blue", this.c, this.canvas));
      }

      this.renderTime();
    }
  }, {
    key: "animateCloud",
    value: function animateCloud() {
      var CLOUD_COLOR = ['#dde0f2', '#cadae1', '#d6d9f0', '#ffeef7', '#a99da4', '#dfe8fb', 'lightgrey', 'gray'];
      this.clouds.forEach(function (cloud) {
        cloud.update();
      });
      this.ticker++;

      if (this.clouds.length === 0 || this.ticker % 250 === 0 && this.clouds.length <= 10) {
        var rand_num = Math.floor(Math.random() * 7);
        var x = Math.floor(Math.random() * 200) - 100;
        var y = Math.random() * 400 + 100;
        var velocity = Math.floor(Math.random() * 40 + 1) * 1 / 100;
        var size = Math.floor(Math.random() * 10) + 4;
        this.clouds.push(new _cloud__WEBPACK_IMPORTED_MODULE_4__["default"](x, y, CLOUD_COLOR[rand_num], velocity, this.c, this.canvas, size));
      }

      this.renderTime();
    }
  }, {
    key: "animateThunder",
    value: function animateThunder() {
      this.thunders.forEach(function (thunder) {
        thunder.update();
      });
      this.ticker++;

      if (this.ticker % 100 === 0 && this.thunders.length < 10) {
        var x = Math.random() * (450 - 100) + 100;
        var y = 180;
        this.thunders.push(new _thunder__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, this.c, this.canvas));
      }

      if (this.thunders.length === 0) {
        var startX = 60;
        var startY = 180;
        this.thunders.push(new _thunder__WEBPACK_IMPORTED_MODULE_3__["default"](startX, startY, this.c, this.canvas));
      }

      this.renderTime();
    }
  }, {
    key: "animateSnow",
    value: function animateSnow() {
      this.snows.forEach(function (snow) {
        snow.update();
      });
      this.ticker++;

      if (this.snows.length === 0 || this.ticker % 100 === 0 && this.snows.length <= 20) {
        var x = Math.random() * 480 + 50;
        var y = 180;
        this.snows.push(new _snow__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, 10, 'white', this.c, this.canvas));
      }
    }
  }, {
    key: "animateSun",
    value: function animateSun(x, y) {
      if (this.temperature > 80) {
        this.radius = 100;
        this.lineWidth = 15;
        this.len = 50;
      } else {
        this.radius = 60;
        this.lineWidth = 9;
        this.len = 30;
      }

      this.x = x;
      this.y = y;
      this.sAngle = 0;
      this.eAngle = Math.PI * 2;
      this.c.beginPath();
      this.c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
      this.c.fillStyle = '#FDB813';
      this.c.fill();
      this.ticker++;

      if (this.ticker % 50 === 0) {
        this.degree += 11.25;
      }

      if (y === 250) {
        for (var i = 0; i < 8; i++) {
          this.c.beginPath();
          this.c.lineCap = 'round';

          var _x = 250 + Math.cos(Math.PI * this.degree / 180) * (this.radius + 15);

          var _y = 250 - Math.sin(Math.PI * this.degree / 180) * (this.radius + 15);

          this.c.moveTo(_x, _y);
          this.c.lineTo(_x + this.len * Math.cos(Math.PI * this.degree / 180), _y - this.len * Math.sin(Math.PI * this.degree / 180));
          this.c.lineWidth = this.lineWidth;
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
    }
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
          var star = new _night__WEBPACK_IMPORTED_MODULE_2__["default"](dx, dy, r, this.c, this.canvas);
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
var TIME_API_KEY = _config_config__WEBPACK_IMPORTED_MODULE_1__["config"].TIME_API_KEY;

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
  toggle();
  listenClick();
}

function toggle() {
  var element = document.getElementById("myLocation");
  element.style.display = "flex";
  var nav1 = document.getElementById("main-nav");
  nav1.style.display = "none";
}

function listenClick() {
  var seoul = document.querySelector('.seoul');
  var pittsburgh = document.querySelector('.pittsburgh');
  var london = document.querySelector('.london');
  var rome = document.querySelector('.rome');
  var city = "",
      country = "";
  seoul.addEventListener('click', function () {
    city = "Seoul";
    country = "kr";
    callGetWeatherData(city, country);
  });
  pittsburgh.addEventListener('click', function () {
    city = "Pittsburgh";
    country = "us";
    callGetWeatherData(city, country);
  });
  london.addEventListener('click', function () {
    city = "London";
    country = "uk";
    callGetWeatherData(city, country);
  });
  rome.addEventListener('click', function () {
    city = "Rome";
    country = "it";
    callGetWeatherData(city, country);
  });
}

function callGetWeatherData(city, country) {
  var canvas = document.querySelector('canvas');
  var c = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;
  var api = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, ",").concat(country, "&units=imperial&appid=").concat(API_KEY);
  var timeApi = "https://api.ipgeolocation.io/timezone?apiKey=".concat(TIME_API_KEY, "&tz=Europe/London"); //

  var weather = new _getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"](api, c, canvas, timeApi);
  weather.getData().then(function () {
    return weather.renderSelectCanvasBackground();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  navigator.geolocation.getCurrentPosition(success, error);
});

function errorMsg(c) {
  c.beginPath();
  c.font = '30px Cinzel';
  c.fillStyle = 'black';
  c.fillText('please allow me to know', 0, 60);
  c.fillText('your location:)', 0, 100);
  c.closePath();
}

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
        this.velocity.y = 1;
        this.y = 150;
      } else {
        this.velocity.y += this.gravity;
      }

      this.y += this.velocity.y;
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
    this.gravity = 0.02;
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

      if (this.y - 100 > this.canvas.height) {
        this.y = 150;
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
      y: 0.1
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
      if (this.y > this.canvas.height) {
        this.velocity.y = 0.1;
        this.y = 150;
        this.size = 1;
      } else if (this.y + this.velocity.y + 45 > this.canvas.height) {
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