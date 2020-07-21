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





class Weather {
    constructor(api, c, canvas) {

        this.c = c;
        this.canvas = canvas;
        this.api = api;
        this.temperatureDegree = document.querySelector(".temp-degree");
        this.temperatureDescription = document.querySelector(".temp-description");
        this.locationTimezone = document.querySelector(".location-timezone");
        this.degreeSection = document.querySelector('.weather-info-bottom');
        this.degreeSpan = document.querySelector('.weather-info-bottom span');
        this.iconSection = document.getElementById('temp-icon');
        this.stars = [];
        this.rains =[];
        this.snows = [];
        this.ticker = 0;
        this.counter = 0;
    }

    getData() {
       
        fetch(this.api)
            .then(res => {
                return res.json()
            })
            .then(data => {
                const description = data.weather[0].description
                const temperature = Math.floor(data.main.temp)
                const location = data.name
                this.iconId = data.weather[0].icon
                const iconAdd = `https://openweathermap.org/img/wn/${this.iconId}@2x.png`

                //Set DOM Elements from the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContent = description;
                this.locationTimezone.textContent = location;
                this.iconSection.src = iconAdd;
                this.changeMetric(temperature);
                this.renderAnimation(this.iconId);   

            })
            
    }

    changeMetric(temperature) {
        let celsius = (temperature - 32) * (5 / 9);
        this.degreeSection.addEventListener('click', () => {
            if (this.degreeSpan.textContent === '°F') {
                this.degreeSpan.textContent = '°C'
                this.temperatureDegree.textContent = Math.floor(celsius);
            } else {
                this.degreeSpan.textContent = '°F'
                this.temperatureDegree.textContent = temperature;
            }
        })
    }

    renderCanvasBackground() {
        this.getData();
        const today = new Date();
        const time = today.getHours();
        this.hour = today.getHours();
        this.minutes = today.getMinutes();
        this.midDay = 'AM';
        
        if (this.hour >= 12) {
            this.midDay = 'PM'
            if (this.hour > 12) this.hour -= 12;
        }
        if (this.hour < 10) {
            this.hour = `0${this.hour}`
        }
        if (this.minutes < 10) {
            this.minutes = `0${this.minutes}`
        }
    
        this.c.beginPath();
        if (time > 7 && time < 20) {
            const backgroundGradient = this.c.createLinearGradient(0, 0, 500, 600)
            backgroundGradient.addColorStop(1, '#B7F8DB')
            backgroundGradient.addColorStop(0, '#50A7C2')
            this.c.fillStyle = backgroundGradient;
            this.c.fillRect(0, 0, 500, 600)
        } else {
            const backgroundGradient = this.c.createLinearGradient(0, 0, 500, 600)
            backgroundGradient.addColorStop(0, '#171e26')
            backgroundGradient.addColorStop(1, '#3f586b')
            this.c.fillStyle = backgroundGradient;
            this.c.fillRect(0, 0, 500, 600)
        }
         
    }

    renderTime(color) {
        this.c.beginPath()
        this.c.font = '50px Cinzel'
        this.c.fillStyle = color;
        this.c.fillText(`${this.hour}:${this.minutes}`, 190, 60);
        this.c.font = '20px Cinzel'
        this.c.fillText(this.midDay, 310, 40)
        this.c.fill();   
        this.c.closePath();   
    }

    renderAnimation() {
        const sun = '01d';
        const fewClouds = '02d';
        const scatteredClouds = '03d';
        const rain = ['04d', '09d', '10d', '11d', '09n', '10n', '11n']
        const snow = ['13d', '50d', '13n', '50n']
        const night = ['01n', '02n', '03n', '04n','09n', '10n', '11n', '13n', '50n']

       
        if (this.iconId[2] === 'n') {
            this.createStars(this.canvas.width, this.canvas.height, 30);
            this.animateNightSky();
            this.renderCloud(300, 150, 'lightgray');
        }
      
        if (this.iconId === sun) {
            this.renderSun(250, 250);
        } else if (this.iconId === fewClouds){
            this.renderCloud(300, 150, 'lightgray');
            this.renderSun(250, 80);
            this.renderCloud(100, 100, 'white');
        } else if (this.iconId === scatteredClouds) {
            this.renderCloud(50, 130, '	#dde7ee');
            this.renderCloud(300, 150, '#f0efef');
            this.renderCloud(100, 100, 'white');
        } else if (rain.includes(this.iconId)) {
            this.animateRain();
        } else {
            this.renderCloud(50, 130, 'red');
            this.renderCloud(300, 150, 'lightgray');
            this.renderCloud(100, 100);
            // this.animateSnow();
        }
        let color = '#555555'
        if (this.iconId[2] === 'n')  color = 'white'
        this.renderTime(color);  
    }

    animateRain() {
        requestAnimationFrame(this.animateRain.bind(this))
    
        this.renderCanvasBackground();
        this.rains.forEach((rain) => {
            rain.update();
            // rain.thunders[0].update();
            rain.miniRains.forEach((miniRain, index) => {
                miniRain.update();
                if (miniRain.ttl === 0) {
                    rain.miniRains.splice(index, 1)// get rid of mini rain
                }
            })

        });
        
        //draw a cloud
        this.renderCloud(300, 150, 'lightgray');
        this.renderCloud(100, 100, 'white')
        
        this.ticker++;
   
        if (this.ticker % 40 === 0) {
            const x = Math.random() * (400 - 100) + 100;
            const y = 150;
            const w = Math.random() * 5;
            this.rains.push(new _rain__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, w, "blue", this.c, this.canvas))
        }
        this.renderTime();  
    }

    animateSnow() {
        requestAnimationFrame(this.animateSnow.bind(this))
        this.renderCanvasBackground();

        this.snows.forEach((snow) => {
            snow.update();
        });

        this.renderCloud(100, 100);
        this.ticker++;

        if (this.ticker % 50 === 0) {
            const x = Math.random() * (380 - 100) + 100;
            const y = 150;
            this.snows.push(new _snow__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, 10, 'white', this.c, this.canvas))
        }
    }

    render() {
        this.getData().then(res => {
            return res.json()
        })
            .then(data => {    
                const description = data.weather[0].description
                const temperature = data.main.temp
                const location = data.name
                //Set DOM Elements frm the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContect = description;
                this.locationTimezone.textContent = location;
            })
    }

    renderSun(x, y) {
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

        if (y === 250){
            for (let i = 0; i < 8; i++) {
                this.c.beginPath();
                this.c.lineCap = 'round';
                const x = 250 + Math.cos(Math.PI * this.degree / 180) * 65;
                const y = 250 - Math.sin(Math.PI * this.degree / 180) * 65;
                this.c.moveTo(x, y);
                this.c.lineTo(x + (this.len * Math.cos(Math.PI * this.degree / 180)),
                            y - (this.len * Math.sin(Math.PI * this.degree / 180)));
                this.c.lineWidth = 9;
                this.c.strokeStyle = '#FDB813';
                this.c.stroke();
                this.degree += 45;
            }   
        }
        this.c.closePath();
   }

    renderCloud(startX, startY, color) {
       
        this.c.beginPath()
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
        this.c.lineWidth = 5;
        this.c.strokeStyle = color;
        this.c.stroke();
    }

    //////////

    maxRandom(max) {
        return Math.floor(Math.random() * max);
    }

    createStars(width, height, spacing) {
        let dx;
        let dy;
        for (let x = 0; x < width; x += spacing) {
            for (let y = 0; y < height; y += spacing) {
                dx = x + this.maxRandom(spacing);
                dy = y + this.maxRandom(spacing);
                let r = Math.random() * 1.5;
                const star = new _night__WEBPACK_IMPORTED_MODULE_3__["default"](dx, dy, r, this.c, this.canvas);
                this.stars.push(star);
            }
        }
  
    }

    animateNightSky() {
        this.c.fillStyle = 'black';
        this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.stars.forEach((star, i) => {
            const 
                factor = this.counter * i,
                opacity = star.getOpacity(factor),
                randomColor = Math.floor((Math.random() * 360) + 1);
            //render stars
            star.renderStar(`hsla(${randomColor}, 30%, 80%, ${opacity})`);
         });
       
        if (['01n', '02n'].includes(this.iconId) ) {
            this.renderMoon()
        } else if(['03n', '04n'].includes(this.iconId) ) {
            this.renderCloud(50, 130, '#B4B4B4');
            this.renderCloud(300, 150, 'lightgray');
            this.renderCloud(100, 100, '#909090');
        } 
        
        this.counter++;
        this.renderTime('white')

        requestAnimationFrame(this.animateNightSky.bind(this));
    }

    renderMoon() {
        this.c.save()
        this.c.beginPath()
        this.c.arc(360, 100, 50, 0, Math.PI * 2)    
        this.c.fillStyle = "#f0c420"
        this.c.fill()
        this.c.closePath()
        this.c.restore()
    }
}






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


function success(position){
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500

    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${"867ade8c61095ff3201107594fa6ff3e"}`
    const weather = new _getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"](api, c, canvas);
    weather.getData();
    weather.renderCanvasBackground();
}

function error(err) {
    console.log('enter your zipcode')
    //console.warn(`ERROR(${err.code}): ${err.message}`);
    // later will get zipcode from user, currently just showing default location
    // (standford) weather 
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 600
    const api = "https://api.openweathermap.org/data/2.5/weather?lat=37.4079488&lon=-122.13944319999999&units=imperial&appid=867ade8c61095ff3201107594fa6ff3e"

    const weather = new _getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"](api, c, canvas);
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
class Star {
    constructor(x, y, r, c, canvas) {
        this.x = x;
        this.y = y;
        this.r = r;

        this.c = c;
        this.canvas = canvas;
    }

    renderStar(fillStyle) {
        this.c.beginPath();
        this.c.fillStyle = fillStyle;
        this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.c.fill();
    }

    getOpacity(factor) {
        const opacityIncrement = 0.6 * Math.abs(Math.sin(factor));
        const opacity = 0.1 + opacityIncrement;
        return opacity;
    }

}


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
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Rain {
    constructor(x, y, width, color, c, canvas) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = {
            x: 0,
            y: 1
        }
        this.friction = 0.8
        this.gravity = 0.05
        this.opacity = 1
        this.lineWidth = width
        this.miniRains = []
        this.thunders = []
        this.c = c
        this.canvas = canvas
    }

    // how rain will look like
    draw() {
        this.c.save()
        this.c.beginPath()
        this.c.moveTo(this.x, 10 + this.y);
        this.c.lineTo(this.x, 30 + this.y);
        this.c.lineWidth = this.lineWidth;
        this.c.strokeStyle = 'white';
        this.c.stroke();
        this.c.closePath()
        this.c.restore()
    }

    // call draw function
    update() {
        this.draw()
        //when rain hits bottom of screen
        if (this.y + this.velocity.y + 20 > this.canvas.height) {
            this.shatter();
            this.addThunder();
        } else {
            this.velocity.y += this.gravity;
        }
        this.y += this.velocity.y;
    }

    addThunder() {
        const x = 50;
        const startY = 100;
        this.thunders.push(new Thunder(x, startY, this.c))
    }

    shatter() {
        const num = randomIntFromRange(1, 3)
        const radius = randomIntFromRange(1, 2)
        for (let i = 0; i < num; i++) {
            this.miniRains.push(new MiniRain(this.x, this.y, radius, this.c, this.canvas))
        }
    }
}

class MiniRain {
    constructor(x, y, radius, c, canvas) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = 'white'
        this.velocity = {
            x: randomIntFromRange(-5, 5),
            y: randomIntFromRange(-15, 15)
        }
        this.friction = 0.2
        this.gravity = 0.05
        this.ttl = 50 // they live 50 frames
        this.opacity = 1
        this.c = c
        this.canvas = canvas
    }

    draw() {
        this.c.save()
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.fillStyle = `rgba(227, 234, 239, ${this.opacity})`
        this.c.shadowColor = 'white'
        this.c.shadowBlur = 20
        this.c.fill()
        this.c.closePath()
        this.c.restore()
    }

    update() {
        this.draw()
        // when ball hits bottom of screen
        if (this.y + this.radius + this.velocity.y > this.canvas.height) {
            this.velocity.y = -this.velocity.y * this.friction;
        } else {
            this.velocity.y += this.gravity;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.ttl -= 1
        this.opacity -= 1 / this.ttl
    }
}

class Thunder {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.velocity = {
            x: 0,
            y: 1
        }
        this.gravity = 0.05
    }
    //draw thunder
    draw() {
        this.c.beginPath();
        this.c.moveTo(this.x, this.y);
        this.c.lineTo(this.x + 20, this.y);
        this.c.lineTo(this.x + 50, this.y - 35);
        this.c.moveTo(this.x, this.y);
        this.c.lineTo(this.x + 20, this.y + 20);
        this.c.lineTo(this.x + 40, this.y + 20);
        this.c.lineTo(this.x + 20, this.y);
        this.c.moveTo(this.x + 20, this.y + 20);
        this.c.lineTo(this.x, this.y + 40);
        this.c.lineTo(this.x + 40, this.y + 20);
        this.c.fillStyle = "yellow"
        this.c.fill()
    }

    // call draw function
    update() {
        this.draw()
        // //when rain hits bottom of screen
        // if (this.y + this.velocity.y + 20 > this.canvas.height) {
        //     this.shatter();
        // } else {
        //     this.velocity.y += this.gravity;
        // }
        this.y += this.velocity.y;
    }


}


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
class Snow {
    constructor(x, y,radius, color, c, canvas) {
        this.c = c
        this.canvas = canvas
        this.x = x
        this.y = y
        this.radius = radius 
        this.color = color
        this.velocity = {
            x: 0,
            y: 1
        }
        this.friction = 0.8
        this.gravity = 0.01
        this.opacity = 1
    }

    draw() {
        this.c.save()
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.fillStyle = `rgba(227, 234, 239, ${this.opacity})`
        this.c.shadowColor = '#E3EAEF'
        this.c.shadowBlur = 20
        this.c.fill()
        this.c.closePath()
        this.c.restore()
    }

    // call draw function
    update() {
        this.draw()
        //when snow hits bottom of screen
        if (this.y + this.radius + this.velocity.y > this.canvas.height) {
            //this.velocity.y = -this.velocity.y * this.friction;
        } else {
            this.velocity.y += this.gravity;
        }

        this.y += this.velocity.y;
    }

    //when snow is clicked it changes shape
    clicked() {
        let d = dist(mouseX, mouseY, this.x, this.y)
        this.renderSnowFlake(this.radius, this.radius)
    }

    renderSnowFlake(width, height) {
        this.c.lineWidth = 20;
        this.c.lineCap = 'round';
        this.c.fillStyle = "#162D50";
        this.c.strokeStyle = "#FFFFFF";
        this.c.fillRect(0, 0, width, height);
        this.c.translate(width / 2, height / 2);
        for (let count = 0; count < 6; count++) {
            this.c.beginPath();
            this.c.moveTo(0, 0);
            this.c.lineTo(300, 0);
            this.c.stroke();
            this.c.rotate(Math.PI / 3);
        }
    }
}



/***/ }),

/***/ "./src/sun.js":
/*!********************!*\
  !*** ./src/sun.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Sun {
    // constructor(x, y, radius, color) {
    constructor(c) {
        this.c = c
        this.x = 250
        this.y = 250
        this.radius = 50
        this.sAngle = 0
        this.eAngle = Math.PI * 2
        this.color = '#FDB813'
        this.radians = 0;
        this.velocity = 0.001;// speed of bar
        this.degree = 0
        this.len = 30;
    }

    draw() {
        //main sun
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
        this.c.fillStyle = this.color;
        this.c.fill();

        for (let i = 0; i < 8; i++) {
            const len = 30;
            this.c.beginPath();
            this.c.lineCap = 'round';
            const x = 250 + Math.cos(Math.PI * this.degree / 180) * 65;
            const y = 250- Math.sin(Math.PI * this.degree / 180) * 65;
            this.c.moveTo(x, y);
            this.c.lineTo(x + (this.len * Math.cos(Math.PI * this.degree / 180)),
                y - (this.len * Math.sin(Math.PI * this.degree / 180)));

            this.c.lineWidth = 9;
            this.c.strokeStyle = '#FDB813';
            this.c.stroke();
            this.degree += 45;
        }   
    }

    update() {
        //move points over time
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) //* 100;
        this.y = this.y + Math.sin(this.radians) //* 100;
        this.draw()
    }
}
////////////////
class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.02;// speed of particle
        this.distanceFromCenter = randomIntFromRange(50, 120)
    }

    draw(startPoint) {

        c.beginPath()
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(startPoint.x, startPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.fillStyle = this.color
        // c.fill()
        c.closePath()
    }

    update() {
        const lastPoint = { x: this.x, y: this.y }
        // move points over time
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint)
    }
}
//////////////////////
class Bar {
    constructor(x, y, degree) {
        this.x = 250;
        this.y = 250;
        this.len = 30;
        this.div = 180;
        const len = 30;
        this.radians = 0;
        this.velocity = 0.05;// speed of bar
        this.degree = degree
    }
    
    draw() {
        const len = 30;
        c.beginPath();
        c.lineCap = 'round';
        const x = this.x + Math.cos(Math.PI * this.degree / 180) * 65;
        const y = this.y - Math.sin(Math.PI * this.degree / 180) * 65;
        c.moveTo(x, y);
        c.lineTo(x + (this.len * Math.cos(Math.PI * this.degree / 180)),
            y - (this.len * Math.sin(Math.PI * this.degree / 180)));

        c.lineWidth = 9;
        c.strokeStyle = '#FDB813';
        c.stroke();
    }

    update() {
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) * 30;
        this.y = this.y + Math.sin(this.radians) * 30;
        this.draw()

    }
    
}

let particles = [];
function init() {
    // const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
    // backgroundGradient.addColorStop(0, '#171e26')
    // backgroundGradient.addColorStop(1, '#3f586b')
    const sun = new Sun();
    sun.update();


    particles = [];
    const colors = ["#FCB033", "#FFE469", "#FECC51", "#FA8607", "#FA961B"]
    for (let i = 0; i < 200; i++) {
        const rand = Math.floor(Math.random() * colors.length)
        const radius = Math.ceil(Math.random() * 2);
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, colors[rand]))
    }
}


function animate() {
    requestAnimationFrame(animate)
    // const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
    // backgroundGradient.addColorStop(0, '#171e26')
    // backgroundGradient.addColorStop(1, '#3f586b')
    c.clearRect(0, 0, canvas.width, canvas.height)
    // c.fillStyle = backgroundGradient;
    // c.fillRect(0, 0, canvas.width, canvas.height)
    // bars.forEach(bar => {
    //     bar.update()
    // })
    const sun = new Sun();
    sun.update()
  
}

// init()
// animate()


// const canvas = document.querySelector('canvas')
// const c = canvas.getContext('2d')

// canvas.width = 500
// canvas.height = 600



// addEventListener('click', (event) => {

// })

// const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
// backgroundGradient.addColorStop(0, '#171e26')
// backgroundGradient.addColorStop(1, '#3f586b')
// function animate() {
//     let degree = 0;
//     requestAnimationFrame(animate)
//     c.fillStyle = backgroundGradient;
//     c.fillRect(0, 0, canvas.width, canvas.height)
//     c.beginPath();
//     c.arc(250, 250, 50, 0, Math.PI * 2, false);
//     c.fillStyle = '#FDB813';
//     c.fill();

//     for (let i = 0; i < 8; i++) {
//         const len = 30;
//         c.beginPath();
//         c.lineCap = 'round';
//         x = 250 + Math.cos(Math.PI * degree / 180) * 65;
//         y = 250 - Math.sin(Math.PI * degree / 180) * 65;
//         c.moveTo(x, y);
//         c.lineTo(x + (len * Math.cos(Math.PI * degree / 180)),
//             y - (len * Math.sin(Math.PI * degree / 180)));

//         c.lineWidth = 9;
//         c.strokeStyle = '#FDB813';
//         c.stroke();
//         degree += 45;
//     }

// }

// function draw() {
//     c.beginPath();
//     c.arc(250, 250, 40, 0, Math.PI * 2, false);
//     c.strokeStyle = 'green';
//     c.stroke();
// }

// animate();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map