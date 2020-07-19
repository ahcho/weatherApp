# My First Weather

## About
My first weather is for young smartphone users. 
It shows the current weather of the user's location with animated Sun, clouds, rain or snow that the user can interact with. 
This will help middle schoolers or even younger users to build a habit of checking daily weather and plan for their day.

## Instruction
Once the user allows the application to use their location, it will show
time, weather of the user's current location. In the bottom half of the application shows a weather animation.

## Technologies
Javascript, CSS, OpenWeatherMap API

## Features
In the rainy day animation shows rain splash, when a rain drop hits the ground
```js
When rain hits a ground, it generates an array of mini rains to show 
splash animation
...
shatter() {
    const num = randomIntFromRange(1,3)
    const radius  = randomIntFromRange(1,2)
    for (let i = 0; i < num; i++) {
        this.miniRains.push(new MiniRain(this.x, this.y, radius))
        }
    }
...
```

### To-dos
* Add option to get current weather of the user input zipcode area.
* Add additional animation feature to entertain users.