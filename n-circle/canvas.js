let canvas = document.querySelector('#canvas');

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');


class Circle {

    constructor(x, y, radius, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx;
        this.dy = dy;

        this.draw = function () {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill()
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx = -this.dx;
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = -this.dy;
            this.x += this.dx;
            this.y += this.dy;
            this.draw()
        }
    }

}

var circleArray = [];

for (let i = 0; i <= 100; i++) {

    var radius = Math.random() * 50;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    var dx = (Math.random() - 0.5) * 6;
    var dy = (Math.random() - 0.5) * 6;

    var circle = new Circle(x, y, radius, color, dx, dy);
    circleArray.push(circle);
}



function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}

animate();