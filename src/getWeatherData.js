export default class Weather {
    constructor(api, c) {
        this.c = c;
        this.api = api;
        this.temperatureDegree = document.querySelector(".temp-degree");
        this.temperatureDescription = document.querySelector(".temp-description");
        this.locationTimezone = document.querySelector(".location-timezone");
        this.degreeSection = document.querySelector('.weather-info-bottom');
        this.degreeSpan = document.querySelector('.weather-info-bottom span');
        this.iconSection = document.getElementById('temp-icon');
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
                // console.log(data.weather[0].icon)
                // debugger;
                const description = data.weather[0].description
                const temperature = Math.floor(data.main.temp)
                const location = data.name
                const iconId = data.weather[0].icon
                const iconAdd = `http://openweathermap.org/img/wn/${iconId}@2x.png`

                //Set DOM Elements from the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContent = description;
                this.locationTimezone.textContent = location;
                this.iconSection.src = iconAdd;

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
    renderCanvasBackground() {
        const today = new Date();
        const hour = today.getHours();
        const minutes = today.getMinutes();
        const midDay = 'AM';
        if (hour > 12) {
            midDay = 'PM'
        }
        if (hour > 7 && hour < 18) {
            console.log('render morning')
        } else {
            console.log('render night')
        }

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
