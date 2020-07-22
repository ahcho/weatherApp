export default class Snow {
    constructor(x, y,radius, color, c, canvas) {
        this.c = c
        this.canvas = canvas
        this.x = x
        this.y = y
        this.radius = radius 
        this.color = color
        this.velocity = {
            x: 0,
            y: 1
        }
        this.gravity = 0.005
        this.opacity = 1
    }

    draw() {
        this.c.save()
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.fillStyle = `rgba(227, 234, 239, ${this.opacity})`
        this.c.shadowColor = '#E3EAEF'
        this.c.shadowBlur = 20
        this.c.fill()
        this.c.closePath()
        this.c.restore()
    }

    update() {
        this.draw()
        //when snow hits bottom of screen
        if (this.y + this.radius + this.velocity.y > this.canvas.height) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += 0.001;//this.gravity;
        }

       //
    }

    renderSnowFlake(width, height) {
        this.c.lineWidth = 20;
        this.c.lineCap = 'round';
        this.c.fillStyle = "#162D50";
        this.c.strokeStyle = "#FFFFFF";
        this.c.fillRect(0, 0, width, height);
        this.c.translate(width / 2, height / 2);
        for (let count = 0; count < 6; count++) {
            this.c.beginPath();
            this.c.moveTo(0, 0);
            this.c.lineTo(300, 0);
            this.c.stroke();
            this.c.rotate(Math.PI / 3);
        }
    }
}

