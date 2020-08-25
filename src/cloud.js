export default class cloud {
    constructor(x, y, color, vx, c, canvas, size) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = vx
        this.friction = 0.8
        this.lineWidth = 1
        this.c = c
        this.canvas = canvas
        this.size = size
    }

    // cloud shape
    draw() {
        this.c.beginPath()
        this.c.moveTo(this.x, this.y);
        this.c.bezierCurveTo(this.x - (4 * this.size), this.y + (2 * this.size), this.x - (4 * this.size), this.y + (7 * this.size), this.x + (6 * this.size), this.y + (7 * this.size));
        this.c.bezierCurveTo(this.x + (8 * this.size), this.y + (10 * this.size), this.x + (15 * this.size), this.y + (10 * this.size), this.x + (17 * this.size), this.y + (7 * this.size));
        this.c.bezierCurveTo(this.x + (30 * this.size), this.y + (7 * this.size), this.x + (30 * this.size), this.y + (4 * this.size), this.x + (25 * this.size), this.y + (2 * this.size));
        this.c.bezierCurveTo(this.x + (26 * this.size), this.y - (4 * this.size), this.x + (20 * this.size), this.y - (5 * this.size), this.x + (17 * this.size), this.y - (3 * this.size));
        this.c.bezierCurveTo(this.x + (15 * this.size), this.y - (7.5 * this.size), this.x + (8 * this.size), this.y - (6 * this.size), this.x + (8 * this.size), this.y - (3 * this.size));
        this.c.bezierCurveTo(this.x + (3 * this.size), this.y - (7.5 * this.size), this.x - (2 * this.size), this.y - (6 * this.size), this.x, this.y);
        
        this.c.fillStyle = this.color;
        this.c.fill();
        this.c.lineWidth = this.lineWidth;
        this.c.strokeStyle = 'gray';
        this.c.stroke();
        this.c.closePath();
    }

    // call draw function
    update() {
    
        this.draw()
    
        if (this.x - this.size > this.canvas.width)   {
            const CLOUD_COLOR = ["#dde0f2", "#cadae1", "#d6d9f0", "#ffeef7", "#a99da4",
                "#dfe8fb", "lightgrey", "gray", "white"];
            const rand_int = Math.floor(Math.random() * 9);
            this.x = Math.floor(Math.random() * 200) - 100;
            this.y = Math.random() * 400 + 50;
            this.velocity = (Math.floor(Math.random() * 40 + 1) * 1) / 50;
            this.size = Math.floor(Math.random() * 10) + 3;
            this.color = CLOUD_COLOR[rand_int]
        } 
        this.x += this.velocity;
    }
}
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// let TAU = 2.0 * Math.PI
// let w = ctx.canvas.width
// let h = ctx.canvas.height
// let s = Math.min(w,h);
// let t = 6;
// let STROKE = 0.08;
// let color = 'white' 

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// function circle(ctx, x, y, r) {
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, TAU, false);
//     ctx.fill();
// }
// function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
//     var i;

//     for (i = 5; i--;)
//         puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
// }

// function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
//     var c = Math.cos(t * TAU),
//         s = Math.sin(t * TAU);

//     rmax -= rmin;

//     circle(
//         ctx,
//         cx - s * rx,
//         cy + c * ry + rmax * 0.5,
//         rmin + (1 - c * 0.5) * rmax
//     );
// }

// function cloud(ctx, t, cx, cy, cw, s, color) {
//     t /= 30000;

//     var a = cw * 0.21,
//         b = cw * 0.12,
//         c = cw * 0.24,
//         d = cw * 0.28;

//     ctx.fillStyle = color;
//     puffs(ctx, t, cx, cy, a, b, c, d);

//     ctx.globalCompositeOperation = 'destination-out';
//     puffs(ctx, t, cx, cy, a, b, c - s, d - s);
// }
// cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);