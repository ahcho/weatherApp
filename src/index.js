import Weather from './getWeatherData'
import {config} from '../config/config'
const API_KEY = config.API_KEY;



function success(position){
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500
    
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    const weather = new Weather(api, c, canvas);
    weather.getData().then(()=> { 
        weather.renderCanvasBackground()})
}

function noUserLocation() {
    toggle();
    let city = "seoul";
    let country = "kr";
    const canvas = document.querySelector('canvas')
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`;
    canvas.width = 500
    canvas.height = 500
    const c = canvas.getContext('2d')
    c.clearRect(0, 0, 500, 500);
    const weather = new Weather(api, c, canvas, city);

    weather.getData().then(() =>
        weather.renderNotLocalCanvasBackground())
}

function toggle() {
    const element = document.getElementById("myLocation");
    element.style.display = "flex";

    const nav1 = document.getElementById("main-nav");
    nav1.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
    navigator.geolocation.getCurrentPosition(success, noUserLocation);
});

