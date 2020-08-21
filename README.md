# My First Weather 
[live site](https://ahcho.github.io/weatherApp/)

## About
My first weather is for young smartphone users. 

My first weather is a weather application with a colorful interface and animations attractive to younger users.  
It shows the current weather of the user's location with animated Sun, clouds, rain, thunder or snow that the user can interact with. This will help middle schoolers or even younger users to build a habit of checking daily weather and plan for their day.


## Instruction
Once the user allows the application to use their location, it will show
time, weather of the user's current location. In the bottom half of the application shows a weather animation. When a weather icon on top right is selected,
it will show related weather animation.

## Technologies
Javascript, CSS, HTML, OpenWeatherMap API, IG Geolocation Timezone API

## Features

In this project, I used front-end technologies such as JavaScript, HTML, and CSS for this application.  
Using JavaScript and canvas (and without using any external library), I created from scratch original vector graphics and animations.

For example, a cloud is drawn using Canvas's bezierCurveTo method, and in order to add variations, colours and size of clouds are randomly generated values.
```
        this.c.beginPath()
        this.c.moveTo(this.x, this.y);
        this.c.bezierCurveTo(this.x - (4 * this.size), this.y + (2 * this.size), this.x - (4 * this.size), this.y + (7 * this.size), this.x + (6 * this.size), this.y + (7 * this.size));
        this.c.bezierCurveTo(this.x + (8 * this.size), this.y + (10 * this.size), this.x + (15 * this.size), this.y + (10 * this.size), this.x + (17 * this.size), this.y + (7 * this.size));
        this.c.bezierCurveTo(this.x + (30 * this.size), this.y + (7 * this.size), this.x + (30 * this.size), this.y + (4 * this.size), this.x + (25 * this.size), this.y + (2 * this.size));
        this.c.bezierCurveTo(this.x + (26 * this.size), this.y - (4 * this.size), this.x + (20 * this.size), this.y - (5 * this.size), this.x + (17 * this.size), this.y - (3 * this.size));
        this.c.bezierCurveTo(this.x + (15 * this.size), this.y - (7.5 * this.size), this.x + (8 * this.size), this.y - (6 * this.size), this.x + (8 * this.size), this.y - (3 * this.size));
        this.c.bezierCurveTo(this.x + (3 * this.size), this.y - (7.5 * this.size), this.x - (2 * this.size), this.y - (6 * this.size), this.x, this.y);
```

In the rainy day animation, when a rain drop hits the ground,
it generates an array of mini rains to show splashing effects.
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
a larger size. In order to run function drawBigThunder, a flag is used, and in order 
to make smooth animation, the position of big thunder is calculated using trigonometry.
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


<img src="https://media.giphy.com/media/jUJhMNvDWyyXBurv3Z/giphy.gif"  />
<img src="https://media.giphy.com/media/Y3eTPOoNiIQUWuHsQv/giphy.gif" />
<img src="https://media.giphy.com/media/Jpe8pPrMW2lydBowup/giphy.gif" />
<img src="https://media.giphy.com/media/l24ZpBeWTEYe4y1wnQ/giphy.gif" />
<img src="https://media.giphy.com/media/QA1EQ1xbk3IPS5gxs9/giphy.gif" />
<img src="https://media.giphy.com/media/cnoVw8eOxX85Ap9SeI/giphy.gif" />

### To-dos
* Add additional animation feature to entertain users.
