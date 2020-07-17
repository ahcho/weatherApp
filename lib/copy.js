//import {fetch} from "node-fetch"
const { default: fetch } = require("node-fetch");
const ADDRESS = "http://api.openweathermap.org/data/2.5/weather?zip=";
const COUNTRY = ",us";
const CONVERT = "&units=imperial";
const MYKEY = "&APPID=867ade8c61095ff3201107594fa6ff3e";

let temperatureDegree = document.querySelector(".temp-degree");
let temperatureDescription = document.querySelector(".temp-description");
let locationTimezone = document.querySelector(".location-timezone");


// // this function takes zipcode(user input) and returns 
// // weather data in json format.
function getData(zipcode) {
    const url = ADDRESS
        + zipcode.toString()
        + COUNTRY
        + CONVERT
        + MYKEY;

    return fetch(url);
}

getData(94041)
    .then(res => {
        return res.json()
    })
    .then(data => {
        const description = data.weather[0].description
        const temperature = data.main.temp
        const location = data.name
        // console.log(description)
        // console.log(temperature)
        // console.log(location)
        //Set DOM Elements frm the API
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContect = description;
        locationTimezone.textContent = location;
        temperature.attr()//.attr(“class”. “class-name")

    })

// const fetch = require("node-fetch");
// //const { default: fetch } = require("node-fetch");


// window.addEventListener('load', () => {
//     const myKey = "867ade8c61095ff3201107594fa6ff3e";
//     let lon;
//     let lat;
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             lon = position.coords.longitude;
//             lat = position.coords.latitude;

//             const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`
//         })

//     } else {
//         h1.textContext = "enter your zipcode"

//         const ADDRESS = "http://api.openweathermap.org/data/2.5/weather?zip=";
//         const COUNTRY = ",us";
//         const CONVERT = "&units=imperial";
//         const MYKEY = "&APPID=867ade8c61095ff3201107594fa6ff3e";

//         // // this function takes zipcode(user input) and returns 
//         // // weather data in json format.
//         function getData(zipcode) {
//             const url = ADDRESS
//                 + zipcode.toString()
//                 + COUNTRY
//                 + CONVERT
//                 + MYKEY;

//             return fetch(url);
//         }

//         getData(94041)
//             .then(res => res.json())
//             .then(body => console.log(body));
//     }
// });

// fetch(api)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
