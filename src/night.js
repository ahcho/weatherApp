const width = 500,
    height = 600,
    stars = createStars(width, height, 30),
    moon = {
        x: 0,
        y: height / 2,
        r: 45
    },
    canvas = document.querySelector('canvas'),
    c = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;
let counter = 0,
    time = 0;

function random(max) {
    return Math.floor(Math.random() * max);
}

function createStars(width, height, spacing) {
    const stars = [];

    for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
            const star = {
                x: x + random(spacing),
                y: y + random(spacing),
                r: Math.random() * 1.5
            };
            stars.push(star);
        }
    }
    return stars;
}

function renderStar(ctx, x, y, r, fillStyle) {
    c.beginPath(),
        c.fillStyle = fillStyle,
        c.arc(x, y, r, 0, Math.PI * 2),
        c.fill();
}

function getOpacity(factor) {
    const opacityIncrement = 0.6 * Math.abs(Math.sin(factor));
    const opacity = 0.1 + opacityIncrement;
    return opacity;
}

function render() {
    const gradient = c.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#00111e");
    gradient.addColorStop(1, "#0a2342");

    c.fillStyle = gradient;
    c.fillRect(0, 0, width, height);
    stars.forEach(function (star, i) {
        const factor = counter * i,
            x = star.x,
            y = star.y,
            opacity = getOpacity(factor),
            randomColor = Math.floor((Math.random() * 360) + 1);
            
        //render stars
        renderStar(c, x, y, star.r, `hsla(${randomColor}, 30%, 80%, ${opacity})`); 
    });


    counter++;
    requestAnimationFrame(render);
}

function newY(x) {
    return Math.pow(x - width / 2, 2) / 9000 + height / 2 + 1
}


render();