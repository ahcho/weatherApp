# My First Weather 
[live site](https://ahcho.github.io/weatherApp/)

## About
My first weather is for young smartphone users. 
It shows the current weather of the user's location with animated Sun, clouds, rain, thunder or snow that the user can interact with. 
This will help middle schoolers or even younger users to build a habit of checking daily weather and plan for their day.

This app doesn't collect user's personal data.

## Instruction
Once the user allows the application to use their location, it will show
time, weather of the user's current location. In the bottom half of the application shows a weather animation. When a weather icon on top right is selected,
it will show related weather animation.

## Technologies
Javascript, CSS, OpenWeatherMap API

## Features

In this project, I create objects and animations only using Javascript and canvas.
For example, cloud is drawn using Canvas's bezierCurveTo method.
```
        this.c.beginPath()
        this.c.moveTo(this.x, this.y);
        this.c.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
        this.c.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 170, this.y + 70);
        this.c.bezierCurveTo(this.x + 300, this.y + 70, this.x + 300, this.y + 40, this.x + 250, this.y + 20);
        this.c.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
        this.c.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
        this.c.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);
```

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

When thunder hits the bottom of the canvas, it gets larger.
I made two draw thunder methods, one for a regular size and the other for
a larger size. In order to run function drawBigThunder, a flag is used. 
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

I used only javascript, canvas, html to design and create animations.

<img src="https://media.giphy.com/media/jUJhMNvDWyyXBurv3Z/giphy.gif"  />
<img src="https://media.giphy.com/media/Y3eTPOoNiIQUWuHsQv/giphy.gif" />
<img src="https://media.giphy.com/media/Jpe8pPrMW2lydBowup/giphy.gif" />
<img src="https://media.giphy.com/media/l24ZpBeWTEYe4y1wnQ/giphy.gif" />
<img src="https://media.giphy.com/media/QA1EQ1xbk3IPS5gxs9/giphy.gif" />
<img src="https://media.giphy.com/media/cnoVw8eOxX85Ap9SeI/giphy.gif" />


<!-- ![Alt text](./dist/night_sky.png?raw=true "Night Sky")

![Alt text](dist/thunder.png?raw=true "Night Sky") -->
### To-dos
* Add option to get current weather of the user input zipcode area.
* Add additional animation feature to entertain users.
