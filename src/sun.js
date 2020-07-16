var canvas = document.querySelector('canvas'); 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'red';
c.stroke();

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

function draw() {
    c.beginPath();
    c.arc(300, 300, 40, 0, Math.PI * 2, false);
    c.strokeStyle = 'green';
    c.stroke();
}
