import Weather from '../lib/getWeatherData'

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