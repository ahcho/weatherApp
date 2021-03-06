import Rain from './rain';
import Snow from './snow';
import Star from './night';
import Thunder from './thunder';
import Cloud from './cloud';
import { config } from '../config/config'
const API_KEY = config.API_KEY;

export default class Weather {
                 constructor(api, c, canvas, city = false) {
                   this.city = city;
                   this.c = c;
                   this.canvas = canvas;
                   this.api = api;
                   this.temperatureDegree = document.querySelector(
                     ".temp-degree"
                   );
                   this.temperatureDescription = document.querySelector(
                     ".temp-description"
                   );
                   this.locationTimezone = document.querySelector(
                     ".location-timezone"
                   );
                   this.degreeSection = document.querySelector(
                     ".weather-info-right"
                   );
                   this.degreeSpan = document.querySelector(
                     ".weather-info-right span"
                   );
                   this.iconSection = document.getElementById("temp-icon");
                   this.weatherTextSection = document.querySelector(".weather-info")
                   this.spaceSection = document.querySelector(".space-holder");
                   this.sunSection = document.querySelector(".fa-sun");
                   this.cloudSection = document.querySelector(".fa-cloud");
                   this.rainSection = document.querySelector(".fa-tint");
                   this.snowSection = document.querySelector(".fa-asterisk");
                   this.starSection = document.querySelector(".fa-star");
                   this.thunderSection = document.querySelector(".fa-bolt");
                   this.sampleSection = document.querySelector(".sample");
                   this.navRightIcons = document.querySelector('.topnav-right');
                   this.sunLetter = document.querySelector(".space-sun");
                   this.cloudLetter = document.querySelector(".space-cloud");
                   this.rainLetter = document.querySelector(".space-rain");
                   this.snowLetter = document.querySelector(".space-snow");
                   this.starLetter = document.querySelector(".space-night");
                   this.thunderLetter = document.querySelector(".space-thunder");
                   this.stars = [];
                   this.weatherObjects = [];
                   this.ticker = 0;
                   this.counter = 0;
                   this.degree = 0;
                 }

                 getData() {
                   return fetch(this.api)
                     .then((res) => {
                       return res.json();
                     })
                     .then((data) => {
                       const description = data.weather[0].description;
                       this.temperature = Math.floor(data.main.temp);
                       const location = data.name;
                       this.iconId = data.weather[0].icon;
                       this.fixIconId = data.weather[0].icon;
                       const iconAdd = `https://openweathermap.org/img/wn/${this.iconId}@2x.png`;

                       //Set DOM Elements from the API
                       this.temperatureDegree.textContent = this.temperature;
                       this.temperatureDescription.textContent = description;
                       this.locationTimezone.textContent = location;
                       this.iconSection.src = iconAdd;
                       this.changeMetric(this.temperature);
                       if (this.city) {
                         this.listenCityClick();
                        } else {
                         this.listenClick();
                        }
                      });
                 }

                clearAnimation() {
                  if (this.requestId) {
                    cancelAnimationFrame(this.requestId);
                    this.requestId = undefined;
                  }
                  this.c.clearRect(0, 0, 500, 500); 
                  this.stars = [];
                  this.weatherObjects = [];
                  if (!this.city) {
                    this.renderCanvasBackground(); 
                  } else {
                    this.renderNotLocalCanvasBackground();
                  }
                }

                navToggle() {
                  this.sampleSection.style.display = "none";
                  this.navRightIcons.style.display = "flex";
                }

                weatherToggle() {
                  this.weatherTextSection.style.display = "none";
                  this.spaceSection.style.display= "flex";

                }

                renderCityWeather() {
                  this.api = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=imperial&appid=${API_KEY}`;
                  this.getData().then(() =>
                    this.renderNotLocalCanvasBackground())
                }

                listenCityClick() {
                  this.seoul = document.querySelector('.seoul');
                  this.pittsburgh = document.querySelector('.pittsburgh');
                  this.london = document.querySelector('.london');
                  this.rome = document.querySelector('.rome');
                  this.clearAnimation()
  

                  this.seoul.addEventListener('click', () => {
                    this.clearAnimation();
                    this.city = "seoul"
                    this.country = "kr"
                    this.renderCityWeather();
                  })
                  this.pittsburgh.addEventListener('click', () => {
                    this.clearAnimation();
                    this.city = "pittsburgh"
                    this.country = "us"
                    this.renderCityWeather();
                  })
                  this.london.addEventListener('click', () => {
                    this.clearAnimation();
                    this.city = "london"
                    this.country = "uk"
                    this.renderCityWeather();
                  })
                  this.rome.addEventListener('click', () => {
                    this.clearAnimation();
                    this.city = "rome"
                    this.country = "it"
                    this.renderCityWeather();
                  })
                }

                clearListenClick() {
                  this.sunLetter.style.display = 'none';
                  this.cloudLetter.style.display = 'none';
                  this.rainLetter.style.display = 'none';
                  this.snowLetter.style.display = 'none';
                  this.thunderLetter.style.display = 'none';
                  this.starLetter.style.display = 'none';
                }

                listenClick() {  
                  this.sampleSection.addEventListener("click", () => {
                    this.navToggle();
                  })
                  this.clearAnimation()
                   this.sunSection.addEventListener("click", () => {
                     this.clearListenClick(); 
                     this.sunLetter.style.display = 'flex';
                     this.iconId = "01d";
                     this.weatherToggle();
                     this.clearAnimation();
                   });
                   this.cloudSection.addEventListener("click", () => {
                     this.clearListenClick() 
                     this.cloudLetter.style.display = 'flex';
                     this.iconId = "03d";
                     this.weatherToggle();
                     this.clearAnimation();
                   });
                   this.rainSection.addEventListener("click", () => {
                     this.clearListenClick() 
                     this.rainLetter.style.display = 'flex';
                     this.iconId = "09d";
                     this.weatherToggle();
                     this.clearAnimation();
                   });
                   this.snowSection.addEventListener("click", () => {
                     this.clearListenClick() 
                     this.snowLetter.style.display = 'flex';
                     this.iconId = "13d";
                     this.weatherToggle();
                     this.clearAnimation();
                   });
                   this.starSection.addEventListener("click", () => {
                     this.clearListenClick() 
                     this.starLetter.style.display = 'flex';
                     this.iconId = "01n";
                     this.weatherToggle();
                     this.clearAnimation();
                   });
                   this.thunderSection.addEventListener("click", () => {
                     this.clearListenClick();
                     this.thunderLetter.style.display = 'flex';
                     this.iconId = "11d";
                     this.weatherToggle();
                     this.clearAnimation();
                   });
                 }

                 changeMetric(temperature) {
                   let celsius = (temperature - 32) * (5 / 9);
                   this.degreeSection.addEventListener("click", () => {
                     if (this.degreeSpan.textContent === "°F") {
                       this.degreeSpan.textContent = "°C";
                       this.temperatureDegree.textContent = Math.floor(celsius);
                     } else {
                       this.degreeSpan.textContent = "°F";
                       this.temperatureDegree.textContent = temperature;
                     }
                   });
                 }

                 renderNotLocalCanvasBackground() {
                    this.getNotLocalTime();
                    this.renderWeatherAnimation(); 
                 }

                 renderCanvasBackground() {
                   //get local time
                   const today = new Date();
                   this.hour = today.getHours();
                   this.minutes = today.getMinutes();
                   this.midDay = "AM";
                   if (this.hour >= 12) {
                     this.midDay = "PM";
                     if (this.hour > 12) this.hour -= 12;
                   }
                   if (this.hour < 10) {
                     this.hour = `0${this.hour}`;
                   }
                   if (this.minutes < 10) {
                     this.minutes = `0${this.minutes}`;
                   }

                   this.renderWeatherAnimation();
                 }

                 getNotLocalTime() {
    
                    const moment = require("moment-timezone");
                    let timeString = '';
                    switch (this.city) {
                      case "london":
                        timeString = "Europe/London";
                        break;
                      case "pittsburgh":
                        timeString = "America/New_York";
                        break;
                      case "seoul":
                        timeString = "Asia/Seoul";
                        break;
                      case "rome":
                        timeString = "Europe/Rome";
                        break;
                      
                    }
                    let notLocalTimeArr = moment.tz(timeString).format().split('T')[1].split(':')
                    this.hour = notLocalTimeArr[0] >= 13 ? notLocalTimeArr[0] - 12 : notLocalTimeArr[0];
                    this.minutes = notLocalTimeArr[1];
                    this.midDay = notLocalTimeArr[0] >= 12 ? 'PM' : 'AM'

                 }

                 renderWeatherAnimation() {
                   this.c.beginPath();
                   if (this.iconId[2] === "d") {
                     const backgroundGradient = this.c.createLinearGradient(
                       0,
                       0,
                       500,
                       500
                     );
                     backgroundGradient.addColorStop(1, "#B7F8DB");
                     backgroundGradient.addColorStop(0, "#50A7C2");
                     this.c.fillStyle = backgroundGradient;
                     this.c.fillRect(0, 0, 500, 500);
                   } else {
                     const backgroundGradient = this.c.createLinearGradient(
                       0,
                       0,
                       500,
                       500
                     );
                     backgroundGradient.addColorStop(0, "#171e26");
                     backgroundGradient.addColorStop(1, "#3f586b");
                     this.c.fillStyle = backgroundGradient;
                     this.c.fillRect(0, 0, 500, 500);
                   }
                   this.renderCurrentWeatherAnimation(this.iconId);
                   
                   if (this.city) {
                     this.requestId = requestAnimationFrame(
                       this.renderNotLocalCanvasBackground.bind(this)
                     );
                   } else {
                     this.requestId = requestAnimationFrame(
                       this.renderCanvasBackground.bind(this)
                     );
                   }

                   if ([ "13d", "13n", "09d", "10d", "09n", "10n", "11d","11n",].includes(this.iconId))
                    { this.renderHeavyClouds();}
                 }

                 renderTime() {
                   let color = "#555555";
                   if (this.iconId[2] === "n") color = "white";
                   this.c.beginPath();
                   this.c.font = "50px Cinzel";
                   this.c.fillStyle = color;
                   this.c.fillText(`${this.hour}:${this.minutes}`, 190, 60);
                   this.c.font = "20px Cinzel";
                   this.c.fillText(this.midDay, 310, 40);
                   this.c.fill();
                   this.c.closePath();
                 }

                 renderCurrentWeatherAnimation() {
                   const THUNDER_ICON = ["11d", "11n"];
                   const SUN = "01d";
                   const FEW_CLOUDS = "02d";
                   const SCATTER_CLOUDS = ["03d", "04d", "50d", "50n"];
                   const RAIN = ["09d", "10d", "09n", "10n"];
                   const SNOW_ICON = ["13d", "13n"];
               
                   if (this.iconId[2] === "n") {
                     if (this.stars.length === 0) {
                       this.createStars(
                         this.canvas.width,
                         this.canvas.height,
                         30
                       );
                     }
                     this.animateNightSky();
                     this.renderCloud(300, 150, "lightgray");
                   }
                   if (this.iconId === SUN) {
                     this.animateSun(250, 250);
                   } else if (this.iconId === FEW_CLOUDS) {
                     this.renderCloud(300, 250, "lightgray");
                     this.animateSun(250, 180);
                     this.renderCloud(100, 200, "white");
                     this.animateCloud();
                   } else if (SCATTER_CLOUDS.includes(this.iconId)) {
                     this.renderHeavyClouds();
                     this.animateCloud();
                   } else if (RAIN.includes(this.iconId)) {
                     this.animateRain();
                   } else if (THUNDER_ICON.includes(this.iconId)) {
                     this.animateThunder();
                   } else if (SNOW_ICON.includes(this.iconId)) {
                     this.animateSnow();
                   }

                   let color = "#555555";
                   if (this.iconId[2] === "n") color = "white";
                   this.renderTime(color);
                 }

                 animateRain() {
                   this.weatherObjects.forEach((rain) => {
                     rain.update();
                     rain.miniRains.forEach((miniRain, index) => {
                       miniRain.update();
                       if (miniRain.ttl === 0) {
                         rain.miniRains.splice(index, 1); // get rid of mini rain
                       }
                     });
                   });

                   this.ticker++;

                   if ( this.weatherObjects.length === 0 || (this.ticker % 100 === 0 && this.weatherObjects.length < 20)) {
                        const x = Math.random() * 490 + 30;
                        const y = 150;
                        const w = Math.random() * 5;
                        this.weatherObjects.push(
                          new Rain(x, y, w, "blue", this.c, this.canvas));
                      }
                      this.renderTime();
                 }

                 animateCloud() {
                   const CLOUD_COLOR = [
                     "#dde0f2",
                     "#cadae1",
                     "#d6d9f0",
                     "#ffeef7",
                     "#a99da4",
                     "#dfe8fb",
                     "lightgrey",
                     "gray",
                     "white"
                   ];
                  this.weatherObjects.forEach((cloud) => {
                     cloud.update();
                   });
                  this.ticker++;
                  if (this.weatherObjects.length === 0 || (this.ticker % 100 === 0 && this.weatherObjects.length < 10)
                  ) {
                    const rand_num = Math.floor(Math.random() * 9);
                    const x = Math.floor(Math.random() * 200) - 100;
                    const y = Math.random() * 400 + 50;
                    const velocity =
                      Math.floor(Math.random() * 20 + 3) / 50;
                    const size = Math.floor(Math.random() * 10) + 3;
                    this.weatherObjects.push(
                       new Cloud(
                        x,
                        y,
                        CLOUD_COLOR[rand_num],
                        velocity,
                        this.c,
                        this.canvas,
                        size
                      )
                    );
                   }
                  this.renderTime();
                 }

                 animateThunder() {
                   this.weatherObjects.forEach((thunder) => {
                     thunder.update();
                   });
              

                   this.ticker++;
                   
                   if (this.weatherObjects.length === 0 || this.ticker % 100 === 0 && this.weatherObjects.length < 10) {
                     const x = Math.random() * (450 - 100) + 100;
                     const y = 180;
                     this.weatherObjects.push(new Thunder(x, y, this.c, this.canvas));
                   }
                                      
                   this.renderTime();
                 }

                 animateSnow() {
                   this.weatherObjects.forEach((snow) => {
                     snow.update();
                   });

                   this.ticker++;

                   if ( this.weatherObjects.length === 0 ||
                      (this.ticker % 120 === 0 && this.weatherObjects.length <= 20)) {
                        const x = Math.random() * 480 + 50;
                        const y = 180;
                        this.weatherObjects.push(new Snow(x, y, 10, "white", this.c, this.canvas));
                    
                   }
                 }

                 animateSun(x, y) {
                   if (this.temperature > 80) {
                     this.radius = 100;
                     this.lineWidth = 15;
                     this.len = 50;
                   } else {
                     this.radius = 60;
                     this.lineWidth = 9;
                     this.len = 30;
                   }
                   this.x = x;
                   this.y = y;
                   this.sAngle = 0;
                   this.eAngle = Math.PI * 2;

                   this.c.beginPath();
                   this.c.arc(
                     this.x,
                     this.y,
                     this.radius,
                     this.sAngle,
                     this.eAngle,
                     false
                   );
                   this.c.fillStyle = "#FDB813";
                   this.c.fill();

                   this.ticker++;
                   if (this.ticker % 30 === 0) {
                     this.degree += 11.25;
                   }
                   if (y === 250) {
                     for (let i = 0; i < 8; i++) {
                       this.c.beginPath();
                       this.c.lineCap = "round";
                       const x =
                         250 +
                         Math.cos((Math.PI * this.degree) / 180) *
                           (this.radius + 15);
                       const y =
                         250 -
                         Math.sin((Math.PI * this.degree) / 180) *
                           (this.radius + 15);
                       this.c.moveTo(x, y);
                       this.c.lineTo(
                         x + this.len * Math.cos((Math.PI * this.degree) / 180),
                         y - this.len * Math.sin((Math.PI * this.degree) / 180)
                       );
                       this.c.lineWidth = this.lineWidth;
                       this.c.strokeStyle = "#FDB813";
                       this.c.stroke();
                       this.degree += 45;
                     }
                   }
                   this.c.closePath();
                 }

                 renderHeavyClouds() {
                   this.renderCloud(50, 130, "#dde7ee");
                   this.renderCloud(300, 150, "#f0efef");
                   this.renderCloud(100, 200, "white");
                 }

                 renderCloud(startX, startY, color) {
                   this.c.beginPath();
                   this.c.moveTo(startX, startY);
                   this.c.bezierCurveTo(
                     startX - 40,
                     startY + 20,
                     startX - 40,
                     startY + 70,
                     startX + 60,
                     startY + 70
                   );
                   this.c.bezierCurveTo(
                     startX + 80,
                     startY + 100,
                     startX + 150,
                     startY + 100,
                     startX + 170,
                     startY + 70
                   );
                   this.c.bezierCurveTo(
                     startX + 300,
                     startY + 70,
                     startX + 300,
                     startY + 40,
                     startX + 250,
                     startY + 20
                   );
                   this.c.bezierCurveTo(
                     startX + 260,
                     startY - 40,
                     startX + 200,
                     startY - 50,
                     startX + 170,
                     startY - 30
                   );
                   this.c.bezierCurveTo(
                     startX + 150,
                     startY - 75,
                     startX + 80,
                     startY - 60,
                     startX + 80,
                     startY - 30
                   );
                   this.c.bezierCurveTo(
                     startX + 30,
                     startY - 75,
                     startX - 20,
                     startY - 60,
                     startX,
                     startY
                   );
                   this.c.closePath();
                   this.c.fillStyle = color;
                   this.c.fill();
                   this.c.lineWidth = 1;
                   this.c.strokeStyle = "gray";
                   this.c.stroke();
                 }

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
                   this.c.fillStyle = "black";
                   this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
                   this.stars.forEach((star, i) => {
                      const factor = this.counter * i,
                      opacity = star.getOpacity(factor),
                      randomColor = Math.floor(Math.random() * 360 + 1);
                      star.renderStar(
                        `hsla(${randomColor}, 30%, 80%, ${opacity})`
                        );
                      });

                   if (["01n", "02n"].includes(this.iconId)) {
                     this.renderMoon();
                   } else if (["03n", "04n"].includes(this.iconId)) {
                     this.renderCloud(50, 130, "#B4B4B4");
                     this.renderCloud(300, 150, "lightgray");
                     this.renderCloud(100, 100, "#909090");
                   }

                   this.counter++;
                   this.renderTime("white");

                   requestAnimationFrame(this.animateNightSky.bind(this));
                 }

                 renderMoon() {
                   this.c.save();
                   this.c.beginPath();
                   this.c.arc(360, 100, 50, 0, Math.PI * 2);
                   this.c.fillStyle = "#f0c420";
                   this.c.fill();
                   this.c.closePath();
                   this.c.restore();
                 }
               }