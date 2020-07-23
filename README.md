# My First Weather 
[live site](https://ahcho.github.io/weatherApp/)

## About
My first weather is for young smartphone users. 
It shows the current weather of the user's location with animated Sun, clouds, rain, thunder or snow that the user can interact with. 
This will help middle schoolers or even younger users to build a habit of checking daily weather and plan for their day.

## Instruction
Once the user allows the application to use their location, it will show
time, weather of the user's current location. In the bottom half of the application shows a weather animation. When a weather icon on top right is selected,
it will show related weather animation.

## Technologies
Javascript, CSS, OpenWeatherMap API

## Features
In the rainy day animation shows rain splash, when a rain drop hits the ground,
it generates an array of mini rains to show splash animation
```js
shatter() {
    const num = randomIntFromRange(1,3)
    const radius  = randomIntFromRange(1,2)
    for (let i = 0; i < num; i++) {
        this.miniRains.push(new MiniRain(this.x, this.y, radius))
        }
    }
```

When thunder hits the bottom of the canvas, it will get larger.
I made two draw thunder method one for a regular size and the other for
larger size. In order to run function drawBigThunder, a flag is used. 
```js
update() {
     if (this.y + this.velocity.y + 45 > this.canvas.height) {
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
```
<!-- ![Alt text](./dist/night_sky.png?raw=true "Night Sky")

![Alt text](dist/thunder.png?raw=true "Night Sky") -->
### To-dos
* Add option to get current weather of the user input zipcode area.
* Add additional animation feature to entertain users.