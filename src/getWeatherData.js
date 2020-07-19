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
        let midDay = 'AM';
        if (hour > 12) {
            midDay = 'PM'
        }
        this.c.beginPath();
        if (hour > 7 && hour < 18) {
            // console.log('render morning')
            const backgroundGradient = this.c.createLinearGradient(0, 0, 500, 600)
            backgroundGradient.addColorStop(1, '#B7F8DB')
            backgroundGradient.addColorStop(0, '#50A7C2')
            this.c.fillStyle = backgroundGradient;
            this.c.fillRect(0, 0, 500, 600)
        } else {
            // console.log('render night')
            const backgroundGradient = this.c.createLinearGradient(0, 0, 500, 600)
            backgroundGradient.addColorStop(0, '#171e26')
            backgroundGradient.addColorStop(1, '#3f586b')
            this.c.fillStyle = backgroundGradient;
            this.c.fillRect(0, 0, 500, 600)
        }
        this.c.font = '50px Cinzel'
        this.c.fillStyle = '#555555';
        this.c.fillText(`${hour}:${minutes}`, 190, 60);
        this.c.font = '20px Cinzel'
        this.c.fillText(midDay, 300, 40)
        this.c.fill();

        
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


///sun///

///cloud///

///rain///