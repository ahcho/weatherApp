//import {fetch} from "node-fetch"
// // change to class, so it can be imported in index.js
// // const { default: fetch } = require("node-fetch");


// // // this function takes zipcode(user input) and returns 
// // // weather data in json format.
export default class Weather {
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