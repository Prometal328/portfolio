window.addEventListener('resize', () => location.reload());

const border = 100;

class Particle {
    constructor() {
        this.x = random(border, width - border);
        this.y = random(border, height - border);
        this.radius = random(5, 10);
    }

    display() {
    }

    move() {
    }
}

let particles = []

function setup() {
    createCanvas(windowWidth, windowHeight + 1);

    for (_ = 0; _ < 50; _++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0);
}