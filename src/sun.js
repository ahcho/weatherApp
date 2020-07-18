var canvas = document.querySelector('canvas'); 

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
canvas.width = 500;
canvas.height = 500;
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
    c.fillStyle = 'yellow';
    c.fill();
    

    
    let x = 360;
    let y = 300;
    
  
    for (let i = 0; i < 8; i++) {
        const len = 30;
        c.beginPath();
        c.lineCap = 'round';
        x = 300 + Math.cos(Math.PI * degree / 180) * 65;
        y = 300 - Math.sin(Math.PI * degree / 180) * 65;
        c.moveTo(x, y);
        c.lineTo(x + (len * Math.cos(Math.PI * degree / 180)), 
        y - (len * Math.sin(Math.PI * degree / 180)));
        
        c.lineWidth = 9;
        c.strokeStyle = 'yellow';
        c.stroke();
        degree += 45;
    }   

}

function draw() {
    c.beginPath();
    c.arc(300, 300, 40, 0, Math.PI * 2, false);
    c.strokeStyle = 'green';
    c.stroke();
}

animate();