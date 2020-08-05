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
    weather.getData().then(()=>     
        weather.renderCanvasBackground())
}

function error(err) {
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500
    errorMsg(c);
    // const api =
    //   `https://api.openweathermap.org/data/2.5/weather?lat=37.4112256&lon=-122.13616640000001&units=imperial&appid=${API_KEY}`;

    const api = `https://api.openweathermap.org/data/2.5/weather?zip=90405,us&units=imperial&appid=${API_KEY}`;
    const weather = new Weather(api, c, canvas);
    weather.getData().then(() =>
        weather.renderCanvasBackground())
}

document.addEventListener("DOMContentLoaded", function () {
    navigator.geolocation.getCurrentPosition(success, error);
});

function errorMsg(c) {
    c.beginPath()
    c.font = '30px Cinzel'
    c.fillStyle = 'black';
    c.fillText('please allow me to know', 0, 60);
    c.fillText('your location:)', 0, 100);
    c.closePath();   
}
