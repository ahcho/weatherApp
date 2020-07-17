import Weather from '../lib/getWeatherData'

document.addEventListener("DOMContentLoaded", function() {
    const weather = new Weather(94041);
    weather.getData();
    //weather.render();
});