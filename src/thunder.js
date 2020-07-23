export default class Thunder {

  constructor(x, y, c, canvas) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.canvas = canvas;
    this.velocity = {
      x: 0,
      y: 0.1,
    };
    this.gravity = 0.01;
    this.size = 1;
    this.color = 'yellow'
    this.flag = true;
  }

  
  draw() {
    this.c.beginPath();
    this.c.moveTo(this.x * this.size , this.y * this.size);
    this.c.lineTo((this.x + 20) * this.size, this.y * this.size);
    this.c.lineTo((this.x + 50) * this.size, (this.y - 35) * this.size);
    this.c.moveTo(this.x * this.size, this.y * this.size);
    this.c.lineTo((this.x + 20) * this.size, (this.y + 20) * this.size);
    this.c.lineTo((this.x + 40) * this.size, (this.y + 20) * this.size);
    this.c.lineTo((this.x + 20) * this.size, this.y * this.size);
    this.c.moveTo((this.x + 20) * this.size, (this.y + 20) * this.size);
    this.c.lineTo(this.x * this.size, (this.y + 40) * this.size);
    this.c.lineTo((this.x + 40) * this.size, (this.y + 20) * this.size);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.closePath();
  }
  


  drawBigThunder() {
    this.x = this.x * 0.667;
    this.y = this.y * 0.667;
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
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.closePath();  
  }

  // call draw function
  update() {
    if (this.y > this.canvas.height) {
      this.y = 150;
    } else if (this.y + this.velocity.y + 45 > this.canvas.height) {
       console.log(this.y + this.velocity.y + 45)
      this.size = 1.5;
      if (this.flag){
        this.drawBigThunder();  
        this.flag = false; 
      } 
    } else {
      this.draw();
    }

    this.velocity.y += this.gravity;
    this.y += this.velocity.y;
  }
}
