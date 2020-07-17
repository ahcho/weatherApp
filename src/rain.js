//import utils from './utils'
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// cloud
// c.fillStyle = 'rgba(0, 0, 255, 0.1)'; 
// c.fillRect(100, 100, 400, 100);context.beginPath();
const startX = 100
const startY = 100

class Rain {
    constructor(x, y, width, color) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = {
            x: 0,
            y: 1
        }
        this.friction = 0.8
        this.gravity = 0.05
        this.opacity = 1
        this.lineWidth = width
        this.miniRains = []
    }
    // how rain will look like
    draw() {
        c.save()
        c.beginPath()
        c.moveTo(this.x, 10 + this.y);
        c.lineTo(this.x, 30 + this.y);
        c.lineWidth = this.lineWidth;
        c.strokeStyle = 'white';
        c.stroke();
        c.closePath()
        c.restore()
    }

    // call draw function
    update() {
        this.draw()
        //when rain hits bottom of screen
        if (this.y + this.velocity.y + 20 > canvas.height) {
            //this.velocity.y = -this.velocity.y * this.friction;
            this.shatter();
        } else {
            this.velocity.y += this.gravity;
        }

        this.y += this.velocity.y;
    }

    destroy() {

    }

    shatter() {
        
        const radius  = 2
        for (let i = 0; i < 5; i++) {
            this.miniRains.push(new MiniRain(this.x, this.y, radius, 'red'))
        }
    }
}

class MiniRain {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = {
            x: randomIntFromRange(-5, 5),
            y: randomIntFromRange(-15, 15)
        }
        this.friction = 0.8
        this.gravity = 0.1
        this.ttl = 100// they live 100 frame
        this.opacity = 1
    }

    draw() {
        c.save()// to prevent glowing mountain 
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = `rgba(227, 234, 239, ${this.opacity})`
        c.shadowColor = 'white'
        c.shadowBlur = 20
        c.fill()
        c.closePath()
        c.restore()
        //debugger;
    }

    update() {
        this.draw()
        //debugger;
        // when ball hits bottom of screen
        if (this.y + this.radius + this.velocity.y > canvas.height) {
            this.velocity.y = -this.velocity.y * this.friction;
        } else {
            this.velocity.y += this.gravity;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.ttl -= 1
        this.opacity -= 1 / this.ttl
    }

    
}


//implementation
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
backgroundGradient.addColorStop(0, '#171e26')
backgroundGradient.addColorStop(1, '#3f586b')

let rains;
let ticker = 0;
function init() {
    rains = []
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, canvas.width, canvas.height)
    rains.forEach((rain, index) => {
        rain.update();
        rain.miniRains.forEach((miniRain, index) => {
            miniRain.update();
            if (miniRain.ttl === 0) {
                rain.miniRains.splice(index, 1)// get rid of mini rain
            }
        })
        
    });
    //draw a cloud
    c.beginPath()
    c.moveTo(startX, startY);
    c.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
    c.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
    c.bezierCurveTo(startX + 300, startY + 70, startX + 300, startY + 40, startX + 250, startY + 20);
    c.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
    c.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
    c.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
    c.closePath();
    // add a radial gradient
    var grdCenterX = 260;
    var grdCenterY = 80;
    var grd = c.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 200);
    grd.addColorStop(0, "white"); // light blue
    grd.addColorStop(1, "white"); // dark blue
    c.fillStyle = grd;
    c.fill();
    c.lineWidth = 5;
    c.strokeStyle = "white";
    c.stroke();
    ticker++;

    if (ticker % 40 === 0) {
        const x = Math.random() * (400 - 100) + 100;;
        const y = 150;
        const w = Math.random() * 5;
        rains.push(new Rain(x, y, w, 'white'))
    }

}

init()
animate()