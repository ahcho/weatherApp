export default class Weather {
    constructor(api) {
        this.api = api;
        this.temperatureDegree = document.querySelector(".temp-degree");
        this.temperatureDescription = document.querySelector(".temp-description");
        this.locationTimezone = document.querySelector(".location-timezone");
        this.degreeSection = document.querySelector('.weather-info-bottom');
        this.degreeSpan = document.querySelector('.weather-info-bottom span');
    }

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

    getData() {
        fetch(this.api)
            .then(res => {
                return res.json()
            })
            .then(data => {
                const description = data.weather[0].description
                const temperature = Math.floor(data.main.temp)
                const location = data.name

                //Set DOM Elements from the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContent = description;
                this.locationTimezone.textContent = location;
                //render animation here
                // change f -> c or c -> f
                let celsius = (temperature - 32) * (5 / 9);

                this.degreeSection.addEventListener('click', () => {

                    if (this.degreeSpan.textContent === '°F') {
                        this.degreeSpan.textContent = '°C'
                        this.temperatureDegree.textContent = Math.floor(celsius);
                    } else {
                        this.degreeSpan.textContent = '°F'
                        this.temperatureDegree.textContent = temperature;
                    }
                })


            })
    }
    renderAnimation() {
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');

        canvas.width = 500;
        canvas.height = 600;

        const rain = new Rain(c);
        rain.animate();
    }

    render() {
        this.getData().then(res => {
            return res.json()
        })
            .then(data => {
                const description = data.weather[0].description
                const temperature = data.main.temp
                const location = data.name
                //Set DOM Elements frm the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContect = description;
                this.locationTimezone.textContent = location;
            })

    }

}
