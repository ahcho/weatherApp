import Rain from './rain';
import Sun from './sun';
import Snow from './snow';
import Star from './night';

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
        this.snows = [];
        this.ticker = 0;
        this.counter = 0;
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
                this.iconId = data.weather[0].icon
                const iconAdd = `https://openweathermap.org/img/wn/${this.iconId}@2x.png`

                //Set DOM Elements from the API
                this.temperatureDegree.textContent = temperature;
                this.temperatureDescription.textContent = description;
                this.locationTimezone.textContent = location;
                this.iconSection.src = iconAdd;
                this.changeMetric(temperature);
                this.renderAnimation(this.iconId);   

            })
            
    }

    changeMetric(temperature) {
        //debugger
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
        this.getData();
        const today = new Date();
        const time = today.getHours();
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
        if (time > 7 && time < 20) {
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

    renderTime(color) {
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
        const sun = '01d';
        const fewClouds = '02d';
        const scatteredClouds = ['03d', '04d'];
        const rain = ['04d', '09d', '10d', '11d', '09n', '10n', '11n']
        const snow = ['13d', '50d', '13n', '50n']
        const night = ['01n', '02n', '03n', '04n','09n', '10n', '11n', '13n', '50n']
        
        if (this.iconId[2] === 'n') {
            this.createStars(this.canvas.width, this.canvas.height, 30);
            this.animateNightSky();
            this.renderCloud(300, 150, 'lightgray');
        }
    
        if (this.iconId === sun) {
            this.renderSun(250, 250);
        } else if (this.iconId === fewClouds){
            this.renderCloud(300, 150, 'lightgray');
            this.renderSun(250, 80);
            this.renderCloud(100, 100, 'white');
        } else if (scatteredClouds.includes(this.iconId)) {
            this.renderCloud(50, 130, '	#dde7ee');
            this.renderCloud(300, 150, '#f0efef');
            this.renderCloud(100, 200, 'white');
        } else if (rain.includes(this.iconId)) {
            this.animateRain();
        } else {
            this.animateSnow();
        }
        let color = '#555555'
        if (this.iconId[2] === 'n')  color = 'white'
        this.renderTime(color);  
    }

    animateRain() {
        requestAnimationFrame(this.animateRain.bind(this))
    
        this.renderCanvasBackground();
        this.rains.forEach((rain) => {
            rain.update();
            // rain.thunders[0].update();
            rain.miniRains.forEach((miniRain, index) => {
                miniRain.update();
                if (miniRain.ttl === 0) {
                    rain.miniRains.splice(index, 1)// get rid of mini rain
                }
            })

        });
        
        //draw a cloud
        this.renderCloud(50, 130, '	#dde7ee');
        this.renderCloud(300, 150, '#f0efef');
        this.renderCloud(100, 200, 'white');
        
        this.ticker++;
   
        if (this.ticker % 40 === 0) {
            const x = Math.random() * (400 - 100) + 100;
            const y = 150;
            const w = Math.random() * 5;
            this.rains.push(new Rain(x, y, w, "blue", this.c, this.canvas))
        }
        this.renderTime();  
    }

    animateSnow() {
        requestAnimationFrame(this.animateSnow.bind(this))
        this.renderCanvasBackground();

        this.snows.forEach((snow) => {
            snow.update();
        });

        this.renderCloud(50, 130, '	#dde7ee');
        this.renderCloud(300, 150, '#f0efef');
        this.renderCloud(100, 200, 'white');
        this.ticker++;

        if (this.ticker % 50 === 0) {
            const x = Math.random() * (380 - 100) + 100;
            const y = 150;
            this.snows.push(new Snow(x, y, 10, 'white', this.c, this.canvas))
        }
    }

    renderSun(x, y) {
        this.degree = 0;
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

        if (y === 250){
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
        this.c.lineWidth = 5;
        this.c.strokeStyle = color;
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
       
        if (['01n', '02n'].includes(this.iconId) ) {
            this.renderMoon()
        } else if(['03n', '04n'].includes(this.iconId) ) {
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




