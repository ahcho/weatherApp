const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 500
canvas.height = 600



addEventListener('click', (event) => {

})

class Sun {
    // constructor(x, y, radius, color) {
    constructor() {
        this.x = 250
        this.y = 250
        this.radius = 50
        this.sAngle = 0
        this.eAngle = Math.PI * 2
        this.color = '#FDB813'
        this.radians = 0;
        this.velocity = 0.001;// speed of bar
        this.degree = 0
        this.len = 30;
    }

    draw() {
        //main sun
        c.beginPath();
        c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, false);
        c.fillStyle = this.color;
        c.fill();

        for (let i = 0; i < 8; i++) {
            const len = 30;
            c.beginPath();
            c.lineCap = 'round';
            const x = 250 + Math.cos(Math.PI * this.degree / 180) * 65;
            const y = 250- Math.sin(Math.PI * this.degree / 180) * 65;
            c.moveTo(x, y);
            c.lineTo(x + (this.len * Math.cos(Math.PI * this.degree / 180)),
                y - (this.len * Math.sin(Math.PI * this.degree / 180)));

            c.lineWidth = 9;
            c.strokeStyle = '#FDB813';
            c.stroke();
            this.degree += 45;
        }   
    }

    update() {
        //move points over time
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) //* 100;
        this.y = this.y + Math.sin(this.radians) //* 100;
        this.draw()
    }
}

class Bar {
    constructor(x, y, degree) {
        this.x = 250;
        this.y = 250;
        this.len = 30;
        this.div = 180;
        const len = 30;
        this.radians = 0;
        this.velocity = 0.05;// speed of bar
        this.degree = degree
    }
    
    draw() {
        const len = 30;
        c.beginPath();
        c.lineCap = 'round';
        const x = this.x + Math.cos(Math.PI * this.degree / 180) * 65;
        const y = this.y - Math.sin(Math.PI * this.degree / 180) * 65;
        c.moveTo(x, y);
        c.lineTo(x + (this.len * Math.cos(Math.PI * this.degree / 180)),
            y - (this.len * Math.sin(Math.PI * this.degree / 180)));

        c.lineWidth = 9;
        c.strokeStyle = '#FDB813';
        c.stroke();
    }

    update() {
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) * 30;
        this.y = this.y + Math.sin(this.radians) * 30;
        this.draw()

    }
    
}

let bars = [];
function init() {
    const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
    backgroundGradient.addColorStop(0, '#171e26')
    backgroundGradient.addColorStop(1, '#3f586b')
    // let degree = 0;
    // for (let i = 0; i < 8; i++) {
    //     bars.push(new Bar(250, 250, degree))
    //     degree += 45;
    // }   
    const sun = new Sun();
    sun.update();
}


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    // // c.fillStyle = backgroundGradient;
    // // c.fillRect(0, 0, canvas.width, canvas.height)
    // bars.forEach(bar => {
    //     bar.update()
    // })
    const sun = new Sun();
    sun.update()
  
}

init()
//animate()


// const canvas = document.querySelector('canvas')
// const c = canvas.getContext('2d')

// canvas.width = 500
// canvas.height = 600



// addEventListener('click', (event) => {

// })

// const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
// backgroundGradient.addColorStop(0, '#171e26')
// backgroundGradient.addColorStop(1, '#3f586b')
// function animate() {
//     let degree = 0;
//     requestAnimationFrame(animate)
//     c.fillStyle = backgroundGradient;
//     c.fillRect(0, 0, canvas.width, canvas.height)
//     c.beginPath();
//     c.arc(250, 250, 50, 0, Math.PI * 2, false);
//     c.fillStyle = '#FDB813';
//     c.fill();

//     for (let i = 0; i < 8; i++) {
//         const len = 30;
//         c.beginPath();
//         c.lineCap = 'round';
//         x = 250 + Math.cos(Math.PI * degree / 180) * 65;
//         y = 250 - Math.sin(Math.PI * degree / 180) * 65;
//         c.moveTo(x, y);
//         c.lineTo(x + (len * Math.cos(Math.PI * degree / 180)),
//             y - (len * Math.sin(Math.PI * degree / 180)));

//         c.lineWidth = 9;
//         c.strokeStyle = '#FDB813';
//         c.stroke();
//         degree += 45;
//     }

// }

// function draw() {
//     c.beginPath();
//     c.arc(250, 250, 40, 0, Math.PI * 2, false);
//     c.strokeStyle = 'green';
//     c.stroke();
// }

// animate();