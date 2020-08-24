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

function error() {
    toggle();

    listenClick();
    let city = "seoul";
    let country = "kr";
    callGetWeatherData(city, country);
}

function toggle() {
    const element = document.getElementById("myLocation");
    element.style.display = "flex";

    const nav1 = document.getElementById("main-nav");
    nav1.style.display = "none";
}

function listenClick() {
    const seoul = document.querySelector('.seoul');
    const pittsburgh = document.querySelector('.pittsburgh');
    const london = document.querySelector('.london');
    const rome = document.querySelector('.rome');
    let city = "", country = "";

    seoul.addEventListener('click', () => {
        city = "seoul"
        country = "kr"    
        debugger
        callGetWeatherData(city, country)        
    })
    pittsburgh.addEventListener('click', () => {
        city = "pittsburgh"
        country = "us"
        callGetWeatherData(city, country)
    })
    london.addEventListener('click', () => {
        city = "london"
        country = "uk"   
        callGetWeatherData(city, country)   
    })
    rome.addEventListener('click', () => {
        city = "rome"
        country = "it"
        callGetWeatherData(city, country)
    })
}

function callGetWeatherData(city, country) {
    const canvas = document.querySelector('canvas')
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`;
    canvas.width = 500
    canvas.height = 500
    const c = canvas.getContext('2d')
    c.clearRect(0, 0, 500, 500);
    const weather = new Weather(api, c, canvas, city, false);

    weather.getData().then(() =>
        weather.renderNotLocalCanvasBackground())
}

document.addEventListener("DOMContentLoaded", function () {
    navigator.geolocation.getCurrentPosition(success, error);
});

