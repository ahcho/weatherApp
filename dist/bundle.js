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

/***/ "./lib/getWeatherData.js":
/*!*******************************!*\
  !*** ./lib/getWeatherData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weather; });
//import {fetch} from "node-fetch"
// // change to class, so it can be imported in index.js
// // const { default: fetch } = require("node-fetch");


// // // this function takes zipcode(user input) and returns 
// // // weather data in json format.
class Weather {
    constructor(zipcode) {
        this.zipcode = zipcode;
        this.ADDRESS = "http://api.openweathermap.org/data/2.5/weather?zip=";
        this.COUNTRY = ",us";
        this.CONVERT = "&units=imperial";
        this.MYKEY = "&APPID=867ade8c61095ff3201107594fa6ff3e";
        this.temperatureDegree = document.querySelector(".temp-degree");
        this.temperatureDescription = document.querySelector(".temp-description");
        this.locationTimezone = document.querySelector(".location-timezone");
    }

    getData(){
        
        const url = this.ADDRESS
                    + this.zipcode.toString()
                    + this.COUNTRY
                    + this.CONVERT
                    + this.MYKEY;
         
        fetch(url)
            .then(res => {
                return res.json()
        })
            .then(data => {
                
                const description = data.weather[0].description
                const temperature = data.main.temp
                const location = data.name
                //debugger
                //Set DOM Elements frm the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContent = description;
                this.locationTimezone.textContent = location;
            })
    } 

    render() {
        this.getData().then(res => {
            return res.json() })
            .then(data => {
                const description = data.weather[0].description
                const temperature = data.main.temp
                const location = data.name
                console.log(description)
                console.log(temperature)
                console.log(location)
                //Set DOM Elements frm the API

                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContect = description;
                this.locationTimezone.textContent = location;    
            })

    }

}

//     ADDRESS = "http://api.openweathermap.org/data/2.5/weather?zip=";
//     COUNTRY = ",us";
//     CONVERT = "&units=imperial";
//     MYKEY = "&APPID=867ade8c61095ff3201107594fa6ff3e";

// const url = ADDRESS
//     + '94041'
//     + COUNTRY
//     + CONVERT
//     + MYKEY;

// fetch(url).then(res => {
//     return res.json()
// })
//     .then(data => {
//         const description = data.weather[0].description
//         const temperature = data.main.temp
//         const location = data.name
//         //Set DOM Elements frm the API
//         console.log(description)
//         console.log(temperature)
//         console.log(location)


//     })

//     fetch()




// // export {Weather}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/getWeatherData */ "./lib/getWeatherData.js");


document.addEventListener("DOMContentLoaded", function() {
    // const weather = new Weather(94041);
    // weather.getData();
    //weather.render();
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        })

    } else {
        h1.textContent = "error"
    }
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map