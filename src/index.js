import Weather from '../lib/getWeatherData'

document.addEventListener("DOMContentLoaded", function() {

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(position => {    
            const lon = position.coords.longitude;
            const lat = position.coords.latitude;
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${"867ade8c61095ff3201107594fa6ff3e"}`           
            
            const weather = new Weather(api);
            weather.getData();
    })} else {
        const weather = new Weather(94041);
        weather.getData();
    }
});