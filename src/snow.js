const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// cloud
// c.fillStyle = 'rgba(0, 0, 255, 0.1)'; 
// c.fillRect(100, 100, 400, 100);context.beginPath();
const startX = 100
const startY = 100

class Snow {
    constructor(x, y,radius, color) {
        this.x = x
        this.y = y
        this.radius = radius 
        this.color = color
        this.velocity = {
            x: 0,
            y: 1
        }
        this.friction = 0.8
        this.gravity = 0.1
        this.opacity = 1
    }
    // how snow will look like
    draw() {
        c.save()
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        //c.fillStyle = this.color
        c.fillStyle = `rgba(227, 234, 239, ${this.opacity})`
        c.shadowColor = '#E3EAEF'
        c.shadowBlur = 20
        c.fill()
        c.closePath()
        c.restore()
    }

    // call draw function
    update() {
        this.draw()
        //when snow hits bottom of screen
        if (this.y + this.radius + this.velocity.y > canvas.height) {
            //this.velocity.y = -this.velocity.y * this.friction;
        } else {
            this.velocity.y += this.gravity;
        }

        this.y += this.velocity.y;
    }

    //when snow is clicked it changes shape
    click() {

    }
}


//implementation
const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
backgroundGradient.addColorStop(0, '#171e26')
backgroundGradient.addColorStop(1, '#3f586b')

let snows;
let ticker = 0;
function init() {
    snows = []
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, canvas.width, canvas.height)
    snows.forEach((snow, index) => {
        snow.update();
    });
    // c.fillStyle = 'white';
    // c.fillRect(100, 100, 400, 100);
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

    if (ticker % 75 === 0) {
        //Math.random() * (max - min) + min;
        const x = Math.random() * (400 - 150) + 150;
        const y = 150;
        snows.push(new Snow(x, y, 10, 'white'))
    }

}

init()
animate()