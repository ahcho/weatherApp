var canvas = document.querySelector('canvas'); 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('click', draw
    // function(event) {
    //     mouse.x = event.x;
    //     mouse.y = event.y;
    // }
)

const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height)
backgroundGradient.addColorStop(0, '#171e26')
backgroundGradient.addColorStop(1, '#3f586b')
function animate() {
    let degree = 0;
    requestAnimationFrame(animate)
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.beginPath();
    c.arc(300, 300, 50, 0, Math.PI * 2, false);
    c.fillStyle = '#ff4000';
    c.fill();
    

    
    let x = 360;
    let y = 300;
    // c.beginPath();
    // c.ellipse(x, y, 5, 30, Math.PI / 4, 0, 2 * Math.PI);
    // c.strokeStyle = 'yellow';
    // c.stroke();
    let angle = [2, 4, -1, 2, 2, 4, -1, 4 ]
    let color = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'white', 'black']
    for (let i = 0; i < 8; i++) {
        // degree -= 45;
        // c.beginPath();

        // c.ellipse(x, y, 5, 30, Math.PI / angle[i], 0, 2 * Math.PI);
        // c.fillStyle = color[i];
        // c.fill();
        // c.beginPath();
        // c.moveTo(x, y);
        // c.lineTo(x + 1, y + 1);
        // c.strokeStyle = 'black';
        // c.stroke();
        // x += Math.cos(Math.PI * degree / 180) * 60;
        // y -= Math.sin(Math.PI * degree / 180) * 60;
        c.beginPath();
        x = 300 + Math.cos(Math.PI * degree / 180) * 60;
        y = 300 - Math.sin(Math.PI * degree / 180) * 60;
        c.moveTo(x, y);
        c.lineTo(x + (30 * Math.cos(Math.PI * degree / 180)), 
        y - (30 * Math.sin(Math.PI * degree / 180)));
        
        c.lineWidth = 5;
        c.strokeStyle = color[i];
        c.stroke();
        degree += 45;
    }   

}

function draw() {
    debugger
    c.beginPath();
    c.arc(300, 300, 40, 0, Math.PI * 2, false);
    c.strokeStyle = 'green';
    c.stroke();
}

animate();