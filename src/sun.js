// addEventListener('click', (event) => {
//     mouse.x = event.clientX
//     mouse.y = event.clientY
// })

// addEventListener('resize', () => {
//     canvas.width = 500
//     canvas.height = 600

//     init()
// })

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Sun {
    // constructor(x, y, radius, color) {
    constructor(c) {
        this.c = c
        this.x = 250
        this.y = 250
        this.radius = 50
        this.sAngle = 0
        this.eAngle = Math.PI * 2
        this.color = '#FDB813'
        this.radians = 0;
        this.velocity = 0.001;// speed of bar
        this.degree = 0
        this.len = 30;
    }

    draw() {
        //main sun
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
        this.c.fillStyle = this.color;
        this.c.fill();

        for (let i = 0; i < 8; i++) {
            const len = 30;
            this.c.beginPath();
            this.c.lineCap = 'round';
            const x = 250 + Math.cos(Math.PI * this.degree / 180) * 65;
            const y = 250- Math.sin(Math.PI * this.degree / 180) * 65;
            this.c.moveTo(x, y);
            this.c.lineTo(x + (this.len * Math.cos(Math.PI * this.degree / 180)),
                y - (this.len * Math.sin(Math.PI * this.degree / 180)));

            this.c.lineWidth = 9;
            this.c.strokeStyle = '#FDB813';
            this.c.stroke();
            this.degree += 45;
        }   
    }

    update() {
        //move points over time
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) //* 100;
        this.y = this.y + Math.sin(this.radians) //* 100;
        this.draw()
    }
}
////////////////
class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.02;// speed of particle
        this.distanceFromCenter = randomIntFromRange(50, 120)
    }

    draw(startPoint) {

        c.beginPath()
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(startPoint.x, startPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // c.fillStyle = this.color
        // c.fill()
        c.closePath()
    }

    update() {
        const lastPoint = { x: this.x, y: this.y }
        // move points over time
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint)
    }
}
//////////////////////
class Bar {
    constructor(x, y, degree) {
        this.x = 250;
        this.y = 250;
        this.len = 30;
        this.div = 180;
        const len = 30;
        this.radians = 0;
        this.velocity = 0.05;// speed of bar
        this.degree = degree
    }
    
    draw() {
        const len = 30;
        c.beginPath();
        c.lineCap = 'round';
        const x = this.x + Math.cos(Math.PI * this.degree / 180) * 65;
        const y = this.y - Math.sin(Math.PI * this.degree / 180) * 65;
        c.moveTo(x, y);
        c.lineTo(x + (this.len * Math.cos(Math.PI * this.degree / 180)),
            y - (this.len * Math.sin(Math.PI * this.degree / 180)));

        c.lineWidth = 9;
        c.strokeStyle = '#FDB813';
        c.stroke();
    }

    update() {
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) * 30;
        this.y = this.y + Math.sin(this.radians) * 30;
        this.draw()

    }
    
}

let particles = [];
function init() {
    // const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
    // backgroundGradient.addColorStop(0, '#171e26')
    // backgroundGradient.addColorStop(1, '#3f586b')
    const sun = new Sun();
    sun.update();


    particles = [];
    const colors = ["#FCB033", "#FFE469", "#FECC51", "#FA8607", "#FA961B"]
    for (let i = 0; i < 200; i++) {
        const rand = Math.floor(Math.random() * colors.length)
        const radius = Math.ceil(Math.random() * 2);
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, colors[rand]))
    }
}


function animate() {
    requestAnimationFrame(animate)
    // const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
    // backgroundGradient.addColorStop(0, '#171e26')
    // backgroundGradient.addColorStop(1, '#3f586b')
    c.clearRect(0, 0, canvas.width, canvas.height)
    // c.fillStyle = backgroundGradient;
    // c.fillRect(0, 0, canvas.width, canvas.height)
    // bars.forEach(bar => {
    //     bar.update()
    // })
    const sun = new Sun();
    sun.update()
  
}

// init()
// animate()

