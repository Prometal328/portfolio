window.addEventListener('resize', () => location.reload());

const border = 100;

class Particle {
    constructor() {
        this.x = random(border, (width - border) * 0.5);
        this.y = random(border, (height - border) * 0.5);

        this.length = random(border, height - border);
        this.orientation = random(-1, 1);

        this.acceleration = random(3, -3);
        this.travel = 0;
        this.maxTravel = random(100, 400);
    }

    display() {
        stroke(map(this.length, border, height - border, 10, 245));
        strokeWeight(map(this.length, border, height - border, 10, 1));

        line(this.x, this.y);
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