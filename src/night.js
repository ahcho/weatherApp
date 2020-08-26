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
