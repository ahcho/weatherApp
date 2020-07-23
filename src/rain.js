function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default class Rain {
    constructor(x, y, width, color, c, canvas) {
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
        this.c = c
        this.canvas = canvas
    }

    // how rain will look like
    draw() {
        this.c.save()
        this.c.beginPath()
        this.c.moveTo(this.x, 10 + this.y);
        this.c.lineTo(this.x, 30 + this.y);
        this.c.lineWidth = this.lineWidth;
        this.c.strokeStyle = 'white';
        this.c.stroke();
        this.c.closePath()
        this.c.restore()
    }

    // call draw function
    update() {
        this.draw()
        //when rain hits bottom of screen
        if (this.y + this.velocity.y + 20 > this.canvas.height) {
            this.shatter();
            // return "rain"
        } else {
            this.velocity.y += this.gravity;
        }
        this.y += this.velocity.y;
    }

    addThunder() {
        const x = 50;
        const startY = 100;
        this.thunders.push(new Thunder(x, startY, this.c))
    }

    shatter() {
        const num = randomIntFromRange(1, 3)
        const radius = randomIntFromRange(1, 2)
        for (let i = 0; i < num; i++) {
            this.miniRains.push(new MiniRain(this.x, this.y, radius, this.c, this.canvas))
        }
    }
}

class MiniRain {
    constructor(x, y, radius, c, canvas) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = 'white'
        this.velocity = {
            x: randomIntFromRange(-5, 5),
            y: randomIntFromRange(-15, 15)
        }
        this.friction = 0.2
        this.gravity = 0.05
        this.ttl = 50 // they live 50 frames
        this.opacity = 1
        this.c = c
        this.canvas = canvas
    }

    draw() {
        this.c.save()
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.fillStyle = `rgba(227, 234, 239, ${this.opacity})`
        this.c.shadowColor = 'white'
        this.c.shadowBlur = 20
        this.c.fill()
        this.c.closePath()
        this.c.restore()
    }

    update() {
        this.draw()
        // hits the bottom of screen
        if (this.y + this.radius + this.velocity.y > this.canvas.height) {
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

