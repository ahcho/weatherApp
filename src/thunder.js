export default class Thunder {

  constructor(x, y, c, canvas) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.gravity = 0.05;
    this.canvas = canvas;
  }

  //draw thunder
  draw() {
    this.c.beginPath();
    this.c.moveTo(this.x, this.y);
    this.c.lineTo(this.x + 20, this.y);
    this.c.lineTo(this.x + 50, this.y - 35);
    this.c.moveTo(this.x, this.y);
    this.c.lineTo(this.x + 20, this.y + 20);
    this.c.lineTo(this.x + 40, this.y + 20);
    this.c.lineTo(this.x + 20, this.y);
    this.c.moveTo(this.x + 20, this.y + 20);
    this.c.lineTo(this.x, this.y + 40);
    this.c.lineTo(this.x + 40, this.y + 20);
    this.c.fillStyle = "yellow";
    this.c.fill();
    this.c.closePath();
  }

  // call draw function
  update() {
    this.draw();
    this.velocity.y += this.gravity;
    this.y += this.velocity.y;
  }
}
