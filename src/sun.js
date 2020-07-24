export default class Sun {
    constructor(c) {
        this.c = c;
        this.x = 250;
        this.y = 250;
        this.radius = 50;
        this.sAngle = 0;
        this.eAngle = Math.PI * 2;
        this.color = '#FDB813';
        this.degree = 0;
        this.len = 30;
    }

    draw() {
        const len = 30;
        //main sun
        // this.c.beginPath();
        // this.c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
        // this.c.fillStyle = this.color;
        // this.c.fill();

        for (let i = 0; i < 8; i++) {    
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
        this.draw()
        this.degree = 22.5;
    }
}


