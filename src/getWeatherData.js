import Rain from './rain';
import Sun from './sun';

export default class Weather {
    constructor(api, c, canvas) {
        this.c = c;
        this.canvas = canvas;
        this.api = api;
        this.temperatureDegree = document.querySelector(".temp-degree");
        this.temperatureDescription = document.querySelector(".temp-description");
        this.locationTimezone = document.querySelector(".location-timezone");
        this.degreeSection = document.querySelector('.weather-info-bottom');
        this.degreeSpan = document.querySelector('.weather-info-bottom span');
        this.iconSection = document.getElementById('temp-icon');
        this.stars = [];
        this.rains =[];
        this.ticker = 0;
    }

    getData() {
        fetch(this.api)
            .then(res => {
                return res.json()
            })
            .then(data => {
                const description = data.weather[0].description
                const temperature = Math.floor(data.main.temp)
                const location = data.name
                const iconId = data.weather[0].icon
                const iconAdd = `https://openweathermap.org/img/wn/${iconId}@2x.png`

                //Set DOM Elements from the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContent = description;
                this.locationTimezone.textContent = location;
                this.iconSection.src = iconAdd;
                this.changeMetric(temperature);
                this.renderAnimation(iconId);             
            })
    }

    changeMetric(temperature) {
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
    }

    renderCanvasBackground() {
        const today = new Date();
        const time = today.getHours();
        this.hour = today.getHours();
        this.minutes = today.getMinutes();
        this.midDay = 'AM';
        if (this.hour > 12) {
            this.midDay = 'PM'
            this.hour -= 12;
        }
        if (this.hour < 10) {
            this.hour = `0${this.hour}`
        }
        if (this.minutes < 10) {
            this.minutes = `0${this.minutes}`
        }

        this.c.beginPath();
        if (time > 7 && time < 18) {
            const backgroundGradient = this.c.createLinearGradient(0, 0, 500, 600)
            backgroundGradient.addColorStop(1, '#B7F8DB')
            backgroundGradient.addColorStop(0, '#50A7C2')
            this.c.fillStyle = backgroundGradient;
            this.c.fillRect(0, 0, 500, 600)
        } else {
            const backgroundGradient = this.c.createLinearGradient(0, 0, 500, 600)
            backgroundGradient.addColorStop(0, '#171e26')
            backgroundGradient.addColorStop(1, '#3f586b')
            this.c.fillStyle = backgroundGradient;
            this.c.fillRect(0, 0, 500, 600)
        }
         
    }

    renderTime() {
        this.c.beginPath()
        this.c.font = '50px Cinzel'
        this.c.fillStyle = '#555555';
        this.c.fillText(`${this.hour}:${this.minutes}`, 190, 60);
        this.c.font = '20px Cinzel'
        this.c.fillText(this.midDay, 310, 40)
        this.c.fill();   
        this.c.closePath();   
    }

    renderAnimation(iconId) {
        const sun = ['01d', '02d', '03d']
        const rain = ['04d', '09d', '10d', '11d']
        const snow = ['13d', '50d']
        
            
        if (sun.includes(iconId)) {
            this.renderSun();
        } else if (rain.includes(iconId)) {
            this.animateRain();
        } else {
            this.animateRain();
            //console.log('call snowy animation')
        }
        this.renderTime();  
    }

    animateRain() {
        requestAnimationFrame(this.animateRain.bind(this))
    
        this.renderCanvasBackground();
        this.rains.forEach((rain) => {
            rain.update();
            rain.miniRains.forEach((miniRain, index) => {
                miniRain.update();
                if (miniRain.ttl === 0) {
                    rain.miniRains.splice(index, 1)// get rid of mini rain
                }
            })

        });
        //draw a cloud
        this.renderCloud()
        // add a radial gradient
        var grdCenterX = 260;
        var grdCenterY = 80;
        var grd = this.c.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 200);
        grd.addColorStop(0, "white"); // light blue
        grd.addColorStop(1, "white"); // dark blue
        this.c.fillStyle = grd;
        this.c.fill();
        this.c.lineWidth = 5;
        this.c.strokeStyle = "white";
        this.c.stroke();
        this.ticker++;

        if (this.ticker % 40 === 0) {
            const x = Math.random() * (400 - 100) + 100;
            const y = 150;
            const w = Math.random() * 5;
            this.rains.push(new Rain(x, y, w, "blue", this.c, this.canvas))
        }
        this.renderTime();  
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

    renderSun() {
        this.degree = 0;
        this.x = 250;
        this.y = 250;
        this.radius = 50;
        this.sAngle = 0;
        this.eAngle = Math.PI * 2;
        this.len = 30;

        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
        this.c.fillStyle = '#FDB813';
        this.c.fill();

        for (let i = 0; i < 8; i++) {
            this.c.beginPath();
            this.c.lineCap = 'round';
            const x = 250 + Math.cos(Math.PI * this.degree / 180) * 65;
            const y = 250 - Math.sin(Math.PI * this.degree / 180) * 65;
            this.c.moveTo(x, y);
            this.c.lineTo(x + (this.len * Math.cos(Math.PI * this.degree / 180)),
                y - (this.len * Math.sin(Math.PI * this.degree / 180)));

            this.c.lineWidth = 9;
            this.c.strokeStyle = '#FDB813';
            this.c.stroke();
            this.degree += 45;
        }   
        this.c.closePath();
    }

    renderCloud() {
        const startX = 100;
        const startY = 100;
        this.c.beginPath()
        this.c.moveTo(startX, startY);
        this.c.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
        this.c.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
        this.c.bezierCurveTo(startX + 300, startY + 70, startX + 300, startY + 40, startX + 250, startY + 20);
        this.c.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
        this.c.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
        this.c.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
        this.c.closePath();
    }

    sunAnimate() {
        requestAnimationFrame(this.sunAnimate)
    }
}




