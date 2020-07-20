function random(max) {
    return Math.floor(Math.random() * max);
}

export default class Star {
    constructor(x, y, r, c, canvas) {
        this.x = x;
        this.y = y;
        this.r = r;
        
        this.c = c;
        this.canvas = canvas;
    }

    renderStar(fillStyle) {
        this.c.beginPath();
        this.c.fillStyle = fillStyle;
        this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.c.fill();
    }

    getOpacity(factor) {
        const opacityIncrement = 0.6 * Math.abs(Math.sin(factor));
        const opacity = 0.1 + opacityIncrement;
        return opacity;
    }

}




// function renderMoon() {
//     c.save()
//     c.beginPath()
//     c.arc(250, 200, 50, 0, Math.PI * 2)    
//     c.fillStyle = `rgba(227, 234, 239, 1)`
//     c.fill()
//     c.closePath()
//     c.restore()
// }

// function render() {
//     const gradient = c.createLinearGradient(0, 0, 0, height);
//     gradient.addColorStop(0, "#070B34");
//     gradient.addColorStop(0.3, "#141852");
//     gradient.addColorStop(0.5, "#2B2F77");
//     gradient.addColorStop(1, "#483475");
    
//     //stars
//     c.fillStyle = gradient;
//     c.fillRect(0, 0, width, height);
//     stars.forEach(function (star, i) {
//         const factor = counter * i,
//             x = star.x,
//             y = star.y,
//             opacity = getOpacity(factor),
//             randomColor = Math.floor((Math.random() * 360) + 1);
            
//         //render stars
//         renderStar(c, x, y, star.r, `hsla(${randomColor}, 30%, 80%, ${opacity})`); 
    
//         //moon
//         renderMoon()
//     });


//     counter++;
//     requestAnimationFrame(render);
// }



