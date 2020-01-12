window.addEventListener('resize', () => location.reload());

const border = -10;

class Point {
    constructor() {
        this.x = random(border, (width - border) * 0.5);
        this.y = random(border, height - border);

        this.travel = 0;
        this.maxDistance = random(4, 10);

        this.xAcceleration = random(-0.5, 0.5);
        this.yAcceleration = random(-0.5, 0.5);
    }

    move() {
        if (this.travel < this.maxDistance) {
            this.x += this.xAcceleration;
            this.y += this.yAcceleration;
        } else {
            this.resetAcceleration();
        }

        if (this.x < border) {
            this.x += 2;
        } else {
            this.travel = 0;
            this.xAcceleration *= -1;
        }

        if (this.x > width - border) {
            this.x -= 2;
        } else {
            this.travel = 0;
            this.xAcceleration *= -1;
        }

        if (this.y < border) {
            this.y += 2;
        } else {
            this.travel = 0;
            this.yAcceleration *= -1;
        }

        if (this.y > height - border) {
            this.y -= 2;
        } else {
            this.travel = 0;
            this.yAcceleration *= -1;
        }
    }

    resetAcceleration() {
        travel = 0;

        this.xAcceleration *= random(-0.1, 5);
        this.yAcceleration *= random(-0.1, 5);
    }
}

class Triangle {
    constructor() {
        let increment = random(0, (width - border * 2) * 0.5);

        this.alpha = new Point();
        this.alpha.x += increment;
        this.beta = new Point();
        this.beta.x += increment;
        this.gamma = new Point();
        this.gamma.x += increment;

        this.color = color(251, 126, 105, random(10, 20));
        if (random(-1, 1) > 0) {
            this.color = color(31, 44, 99, random(10, 20));
        }
    }

    display() {
        fill(this.color);
        noStroke();
        triangle(this.alpha.x, this.alpha.y, this.beta.x, this.beta.y, this.gamma.x, this.gamma.y);
    }

    move() {
        this.alpha.move();
        this.beta.move();
        this.gamma.move();
    }
}

let triangles = []

function setup() {
    createCanvas(windowWidth, windowHeight + 1);

    for (_ = 0; _ < 10; _++) {
        triangles.push(new Triangle());
    }
}

function draw() {
    background(0);

    triangles.forEach(triangle => {
        triangle.display();
        triangle.move();
    });
}