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
class Weather {
    constructor(api, c) {
        this.c = c;
        this.api = api;
        this.temperatureDegree = document.querySelector(".temp-degree");
        this.temperatureDescription = document.querySelector(".temp-description");
        this.locationTimezone = document.querySelector(".location-timezone");
        this.degreeSection = document.querySelector('.weather-info-bottom');
        this.degreeSpan = document.querySelector('.weather-info-bottom span');
        this.iconSection = document.getElementById('temp-icon');
    }

    // constructor(zipcode) {
    //     this.zipcode = zipcode;
    //     this.ADDRESS = "http://api.openweathermap.org/data/2.5/weather?zip=";
    //     this.COUNTRY = ",us";
    //     this.CONVERT = "&units=imperial";
    //     this.MYKEY = "&APPID=867ade8c61095ff3201107594fa6ff3e";
    //     this.temperatureDegree = document.querySelector(".temp-degree");
    //     this.temperatureDescription = document.querySelector(".temp-description");
    //     this.locationTimezone = document.querySelector(".location-timezone");
    // }

    getData() {
        fetch(this.api)
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data.weather[0].icon)
                // debugger;
                const description = data.weather[0].description
                const temperature = Math.floor(data.main.temp)
                const location = data.name
                const iconId = data.weather[0].icon
                const iconAdd = `http://openweathermap.org/img/wn/${iconId}@2x.png`

                //Set DOM Elements from the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContent = description;
                this.locationTimezone.textContent = location;
                this.iconSection.src = iconAdd;

                //render animation here
                // change f -> c or c -> f
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


            })
    }
    renderCanvasBackground() {
        const today = new Date();
        const hour = today.getHours();
        const minutes = today.getMinutes();
        const midDay = 'AM';
        if (hour > 12) {
            midDay = 'PM'
        }
        if (hour > 7 && hour < 18) {
            console.log('render morning')
        } else {
            console.log('render night')
        }

    }

    renderAnimation() {
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');

        canvas.width = 500;
        canvas.height = 600;

        const rain = new Rain(c);
        rain.animate();
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
    canvas.height = 600

    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${"867ade8c61095ff3201107594fa6ff3e"}`
    const weather = new _getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"](api, c);
    weather.getData();

}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

document.addEventListener("DOMContentLoaded", function () {
    navigator.geolocation.getCurrentPosition(success, error);
});



// import Weather from './getWeatherData'


// document.addEventListener("DOMContentLoaded", function() {
  
    
//     if(navigator.geolocation) {
       
        
//             navigator.geolocation.getCurrentPosition(position => { 
             
//             const lon = position.coords.longitude;
//             const lat = position.coords.latitude;
//             const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${"867ade8c61095ff3201107594fa6ff3e"}`           
            
//             const weather = new Weather(api);
//             weather.getData();
//      })} else {
//         const weather = new Weather();
//         weather.getData();
//     }
// });

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map