export default class Thunder {

  constructor(x, y, c, canvas) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.velocity = {
      x: 0,
      y: 0.5,
    };
    this.gravity = 0.001;
    this.canvas = canvas;
    this.size = 1;
    this.color = 'yellow'
  }

  //draw thunder
  draw() {
    
    this.c.beginPath();
    this.c.moveTo(this.x * this.size, this.y * this.size);
    this.c.lineTo((this.x + 20) * this.size, this.y * this.size);
    this.c.lineTo((this.x + 50) * this.size, (this.y - 35) * this.size);
    this.c.moveTo(this.x * this.size, this.y * this.size);
    this.c.lineTo((this.x + 20) * this.size, (this.y + 20) * this.size);
    this.c.lineTo((this.x + 40) * this.size, (this.y + 20) * this.size);
    this.c.lineTo((this.x + 20) * this.size, this.y * this.size);
    this.c.moveTo((this.x + 20) * this.size, (this.y + 20) * this.size);
    this.c.lineTo(this.x * this.size, (this.y + 40) * this.size);
    this.c.lineTo((this.x + 40) * this.size, (this.y + 20) * this.size);
    // this.c.lineTo(this.x + 20, this.y);
    // this.c.lineTo(this.x + 50, this.y - 35);
    // this.c.moveTo(this.x, this.y);
    // this.c.lineTo(this.x + 20, this.y + 20);
    // this.c.lineTo(this.x + 40, this.y + 20);
    // this.c.lineTo(this.x + 20, this.y);
    // this.c.moveTo(this.x + 20, this.y + 20);
    // this.c.lineTo(this.x, this.y + 40);
    // this.c.lineTo(this.x + 40, this.y + 20);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.closePath();
  }

  // call draw function
  update() {
    this.draw();
    if (this.y + this.velocity.y + 40 > this.canvas.height) {
      // this.size = Math.floor(Math.random() * 3)
      //this.color = 'red';
      // this.size = 5;
      // this.draw();
    }// else {
    // this.velocity.y += this.gravity;
    // this.y += this.velocity.y;
    // }
    this.velocity.y += this.gravity;
    this.y += this.velocity.y;
  }

}
