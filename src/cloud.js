const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let TAU = 2.0 * Math.PI
let w = ctx.canvas.width
let h = ctx.canvas.height
let s = Math.min(w,h);
let t = 6;
let STROKE = 0.08;
let color = 'white' 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
}
function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for (i = 5; i--;)
        puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
}

function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
        ctx,
        cx - s * rx,
        cy + c * ry + rmax * 0.5,
        rmin + (1 - c * 0.5) * rmax
    );
}

function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    //ctx.globalCompositeOperation = 'source-over';
}
cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);