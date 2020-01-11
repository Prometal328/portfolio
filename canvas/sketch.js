window.addEventListener('resize', () => location.reload());

const minRadius = 10, maxRadius = 50;

class Orb {
    constructor(radius, x, y) {
        this.radius = radius;
        this.x = x;
        this.y = y;

        this.xAcceleration = random(-1, 1);
        this.yAcceleration = random(-1, 1);

        this.accelerationCounter = 0;
        this.accelerationFloor = random(100, 200);
    }

    display() {
        fill(map(this.radius, minRadius, maxRadius, 0, 255))
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    connect(orb) {
        let distance = Math.sqrt(Math.pow(this.x - orb.x, 2) + Math.pow(this.y - orb.y, 2));
        
        if (distance < 100 && distance != 0) {
            stroke(255);
            strokeWeight(map(distance, 1, 100, 5, 1))
            line(this.x, this.y, orb.x, orb.y);
        }
    }

    updateAcceleration() {
        this.xAcceleration = random(-1, 1);
        this.yAcceleration = random(-1, 1);
    }

    move() {
        if (this.x >= 0 && this.x <= width) {
            this.x += this.xAcceleration;
        } else {
            this.xAcceleration *= -1;
            this.accelerationCounter = 0;
        }

        if (this.y >= 0 && this.y <= height) {
            this.y += this.yAcceleration;
        } else {
            this.yAcceleration *= -1;
            this.accelerationCounter = 0;
        }

        this.accelerationCounter++;
        if (this.accelerationCounter == this.accelerationFloor) {
            this.updateAcceleration();
            this.accelerationCounter = 0;
        }
    }
};

let orbs = []

function setup() {
    createCanvas(windowWidth, windowHeight);

    let orbsCount = random(100, 250);

    for (_ = 0; _ < orbsCount; _++) {
        orbs.push(new Orb(random(minRadius, maxRadius), random(width), random(height)));
    }
}

function draw() {
    background(0);

    orbs.forEach(element => {
        element.display();
        element.move();
        orbs.forEach(comparator => {
            element.connect(comparator);
        });
    });
}