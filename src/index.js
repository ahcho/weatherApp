import Weather from './getWeatherData'

function success(position){
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500

    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${"867ade8c61095ff3201107594fa6ff3e"}`
    const weather = new Weather(api, c);
    weather.getData();
    weather.renderCanvasBackground();

}

function error(err) {
    //console.warn(`ERROR(${err.code}): ${err.message}`);
    // later will get zipcode from user, currently just showing default location
    // (standford) weather 
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 600
    const api = "http://api.openweathermap.org/data/2.5/weather?lat=37.4079488&lon=-122.13944319999999&units=imperial&appid=867ade8c61095ff3201107594fa6ff3e"

    const weather = new Weather(api, c);
    weather.getData();
    weather.renderCanvasBackground();
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