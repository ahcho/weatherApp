import Rain from './rain';
import Snow from './snow';
import Star from './night';
import Thunder from './thunder';
import Cloud from './cloud';

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
        this.sunSection = document.querySelector('.fa-sun');
        this.cloudSection = document.querySelector('.fa-cloud');
        this.rainSection = document.querySelector('.fa-tint');
        this.snowSection = document.querySelector('.fa-asterisk');
        this.starSection = document.querySelector('.fa-star');
        this.thunderSection = document.querySelector('.fa-bolt');
        ///
        this.seoul = document.querySelector('.seoul');
        this.pittsburgh = document.querySelector('.pittsburgh');
        this.losangeles = document.querySelector('.losangeles');
        this.london = document.querySelector('.london');
        this.rome = document.querySelector('.rome');
        ///
        this.stars = [];
        this.clouds = [];
        this.thunders = [];
        this.rains = [];
        this.snows = [];
        this.ticker = 0;
        this.counter = 0;
        this.degree = 0;
    }

    getData() {
        return fetch(this.api)
            .then(res => {
                return res.json()
            })
            .then(data => {
                const description = data.weather[0].description
                const temperature = Math.floor(data.main.temp)
                const location = data.name
                this.iconId = data.weather[0].icon
                this.fixIconId = data.weather[0].icon
                const iconAdd = `https://openweathermap.org/img/wn/${this.iconId}@2x.png`

                //Set DOM Elements from the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContent = description;
                this.locationTimezone.textContent = location;
                this.iconSection.src = iconAdd;
                this.changeMetric(temperature);
                this.listenClick();
            })

    }

    listenClick() {
        this.stars = [];
        this.sunSection.addEventListener('click', () => {
            this.thunders = [];
            this.rains = [];
            this.clouds = [];
            this.snows = [];
            this.iconId = "01d";
        })

        this.cloudSection.addEventListener('click', () => {
            this.thunders = [];
            this.rains = [];
            this.snows = [];
            this.iconId = '03d'
        })
        this.rainSection.addEventListener('click', () => {
            this.thunders = [];
            this.clouds = [];
            this.snows = [];
            this.iconId = '09d'
        })
        this.snowSection.addEventListener('click', () => {
            this.thunders = [];
            this.clouds = [];
            this.rains = [];
            this.iconId = '13d'
        })
        this.starSection.addEventListener('click', () => {
            this.thunders = [];
            this.clouds = [];
            this.snows = [];
            this.iconId = '01n'
        })
        this.thunderSection.addEventListener('click', () => {
            this.rains = [];
            this.clouds = [];
            this.snows = [];
            this.iconId = '11d'
        })
        ///
        this.seoul.addEventListener('click', () => {
            this.thunders = [];
            this.clouds = [];
            this.rains = [];
            this.iconId = '13d'
        })
        this.pittsburgh.addEventListener('click', () => {
            this.thunders = [];
            this.clouds = [];
            this.snows = [];
            this.iconId = '01n'
        })
        this.losangeles.addEventListener('click', () => {
            this.rains = [];
            this.clouds = [];
            this.snows = [];
            this.iconId = '11d'
        })
        this.london.addEventListener('click', () => {
            this.rains = [];
            this.clouds = [];
            this.snows = [];
            this.iconId = '11d'
        })
        this.rome.addEventListener('click', () => {
            this.rains = [];
            this.clouds = [];
            this.snows = [];
            this.iconId = '11d'
        })
        ///
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
        this.hour = today.getHours();
        this.minutes = today.getMinutes();
        this.midDay = 'AM';

        if (this.hour >= 12) {
            this.midDay = 'PM'
            if (this.hour > 12) this.hour -= 12;
        }
        if (this.hour < 10) {
            this.hour = `0${this.hour}`
        }
        if (this.minutes < 10) {
            this.minutes = `0${this.minutes}`
        }

        this.c.beginPath();
        if (this.iconId[2] === 'd') {
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

        this.renderAnimation(this.iconId);
        requestAnimationFrame(this.renderCanvasBackground.bind(this))
    }

    renderTime() {
        let color = '#555555'
        if (this.iconId[2] === 'n') color = 'white'
        this.c.beginPath()
        this.c.font = '50px Cinzel'
        this.c.fillStyle = color;
        this.c.fillText(`${this.hour}:${this.minutes}`, 190, 60);
        this.c.font = '20px Cinzel'
        this.c.fillText(this.midDay, 310, 40)
        this.c.fill();
        this.c.closePath();
    }

    renderAnimation() {
        const THUNDER_ICON = ['11d', '11n']
        const SUN = '01d';
        const FEW_CLOUDS = '02d';
        const SCATTER_CLOUDS = ["03d", "04d", "50d", "50n"];
        const RAIN = ['09d', '10d', '09n', '10n']
        const SNOW_ICON = ['13d', '13n']
        const night =
            ["01n", "02n", "03n", "04n", "09n", "10n", "11n", "13n", "50n"]

        if (this.iconId[2] === 'n') {
            if (this.stars.length === 0) {
                this.createStars(this.canvas.width, this.canvas.height, 30);
            }
            this.animateNightSky();
            this.renderCloud(300, 150, 'lightgray');
        }

        if (this.iconId === SUN) {
            this.renderSun(250, 250);
        } else if (this.iconId === FEW_CLOUDS) {
            this.renderCloud(300, 250, 'lightgray');
            this.renderSun(250, 180);
            this.renderCloud(100, 200, 'white');
            this.animateCloud();
        } else if (SCATTER_CLOUDS.includes(this.iconId)) {
            this.renderHeavyClouds();
            this.animateCloud();
        } else if (RAIN.includes(this.iconId)) {
            this.animateRain();
            this.renderHeavyClouds();
        } else if (THUNDER_ICON.includes(this.iconId)) {
            this.animateThunder();
            this.renderHeavyClouds();
        } else if (SNOW_ICON.includes(this.iconId)) {
            this.animateSnow();
            this.renderHeavyClouds();
        }

        let color = '#555555'
        if (this.iconId[2] === 'n') color = 'white'
        this.renderTime(color);
    }

    animateRain() {

        this.rains.forEach((rain) => {

            rain.update();
            rain.miniRains.forEach((miniRain, index) => {
                miniRain.update();

                if (miniRain.ttl === 0) {
                    rain.miniRains.splice(index, 1)// get rid of mini rain    
                }
            })
        });

        this.ticker++;

        if (this.rains.length === 0 || (this.ticker % 80 === 0 && this.rains.length < 20)) {
            const x = (Math.random() * 490) + 30;
            const y = 150;
            const w = Math.random() * 5;
            this.rains.push(new Rain(x, y, w, "blue", this.c, this.canvas))
        }
        this.renderTime();
    }

    animateCloud() {
        const CLOUD_COLOR = ['#dde0f2', '#cadae1', '#d6d9f0', '#ffeef7', '#a99da4', '#dfe8fb', 'lightgrey', 'gray']
        this.clouds.forEach((cloud) => {
            cloud.update();
        })
        this.ticker++;
        if (this.clouds.length === 0 || (this.ticker % 250 === 0 && this.clouds.length <= 10)) {
            const rand_num = Math.floor(Math.random() * 7);
            const x = Math.floor(Math.random() * 200) - 100;
            const y = Math.random() * 400 + 100;
            const velocity = Math.floor((Math.random() * 40) + 1) * 1 / 100;
            this.clouds.push(new Cloud(x, y, CLOUD_COLOR[rand_num], velocity, this.c, this.canvas));
        }
        this.renderTime();
    }

    animateThunder() {
        this.thunders.forEach((thunder) => {

            thunder.update();
        });

        this.ticker++;
        if (this.ticker % 100 === 0 && this.thunders.length < 10) {
            const x = Math.random() * (450 - 100) + 100;
            const y = 150;
            this.thunders.push(new Thunder(x, y, this.c, this.canvas));
        }

        if (this.thunders.length === 0) {
            const startX = 60;
            const startY = 170

            this.thunders.push(new Thunder(startX, startY, this.c, this.canvas));
        }
        this.renderTime();


    }

    animateSnow() {

        this.snows.forEach((snow) => {
            snow.update();
        });

        this.ticker++;

        if (this.snows.length === 0 || (this.ticker % 100 === 0 && this.snows.length <= 20)) {
            const x = (Math.random() * 480) + 50;
            const y = 150;
            this.snows.push(new Snow(x, y, 10, 'white', this.c, this.canvas))
        }


    }

    renderSun(x, y) {

        
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.sAngle = 0;
        this.eAngle = Math.PI * 2;
        this.len = 30;

        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
        this.c.fillStyle = '#FDB813';
        this.c.fill();

        this.ticker++;
        if (this.ticker % 100 === 0 ) {
            this.degree += 11.25
        }
        if (y === 250) {
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
        }
        this.c.closePath();
    }

    renderHeavyClouds() {
        this.renderCloud(50, 130, '#dde7ee');
        this.renderCloud(300, 150, '#f0efef');
        this.renderCloud(100, 200, 'white');
    }

    renderCloud(startX, startY, color) {
        this.c.beginPath()
        this.c.moveTo(startX, startY);
        this.c.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
        this.c.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
        this.c.bezierCurveTo(startX + 300, startY + 70, startX + 300, startY + 40, startX + 250, startY + 20);
        this.c.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
        this.c.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
        this.c.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
        this.c.closePath();
        this.c.fillStyle = color;
        this.c.fill();
        this.c.lineWidth = 1;
        this.c.strokeStyle = 'gray';
        this.c.stroke();
    }

    //////////

    maxRandom(max) {
        return Math.floor(Math.random() * max);
    }

    createStars(width, height, spacing) {
        let dx;
        let dy;
        for (let x = 0; x < width; x += spacing) {
            for (let y = 0; y < height; y += spacing) {
                dx = x + this.maxRandom(spacing);
                dy = y + this.maxRandom(spacing);
                let r = Math.random() * 1.5;
                const star = new Star(dx, dy, r, this.c, this.canvas);
                this.stars.push(star);
            }
        }
    }

    animateNightSky() {
        this.c.fillStyle = 'black';
        this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.stars.forEach((star, i) => {
            const
                factor = this.counter * i,
                opacity = star.getOpacity(factor),
                randomColor = Math.floor((Math.random() * 360) + 1);
            //render stars
            star.renderStar(`hsla(${randomColor}, 30%, 80%, ${opacity})`);
        });

        if (['01n', '02n'].includes(this.iconId)) {
            this.renderMoon()
        } else if (['03n', '04n'].includes(this.iconId)) {
            this.renderCloud(50, 130, '#B4B4B4');
            this.renderCloud(300, 150, 'lightgray');
            this.renderCloud(100, 100, '#909090');
        }

        this.counter++;
        this.renderTime('white')

        requestAnimationFrame(this.animateNightSky.bind(this));
    }

    renderMoon() {
        this.c.save()
        this.c.beginPath()
        this.c.arc(360, 100, 50, 0, Math.PI * 2)
        this.c.fillStyle = "#f0c420"
        this.c.fill()
        this.c.closePath()
        this.c.restore()
    }
}