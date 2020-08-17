import Weather from './getWeatherData'
import { config } from '../config/config'
const API_KEY = config.API_KEY;

export default class getUserInput {
    constructor(api, c, canvas) {
        this.c = c;
        this.canvas = canvas;
        this.api = api;
    }

    listenClick() {
        const seoul = document.querySelector('.seoul');
        const pittsburgh = document.querySelector('.pittsburgh');
        const london = document.querySelector('.london');
        const rome = document.querySelector('.rome');
        let city = "", country = "";
        seoul.addEventListener('click', () => {
            city = "Seoul"
            country = "kr"
        })
        pittsburgh.addEventListener('click', () => {
            city = "Pittsburgh"
            country = "us"
        })
        london.addEventListener('click', () => {
            city = "London"
            country = "uk"
        })
        rome.addEventListener('click', () => {
            city = "Rome"
            country = "it"
        })
        if (city.length > 0) {
            const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`;
            return api;
        }

        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`;
        const weather = new Weather(api, c, canvas);
        weather.getData().then(() =>
            weather.renderCanvasBackground())
    }

}