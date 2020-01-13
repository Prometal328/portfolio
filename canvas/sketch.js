window.addEventListener('resize', () => location.reload());

let border;

class HorizontalLine {
    constructor() {
        this.x = random(border, (width - border));
        this.y = border;

        this.acceleration = random(-1, 1);
        this.weight = random(1, 5);
    }

    display() {
        stroke(map(this.weight, 1, 5, 10, 100), 55, 55, 50);
        strokeWeight(this.weight);
        line(this.x, this.y, this.x, height - border);
    }

    move() {
        this.x += this.acceleration;

        if (this.acceleration < 0 && this.x < border) {
            this.acceleration *= random(-2, -0.5);
        }

        if (this.acceleration > 0 && this.x > width - border) {
            this.acceleration *= random(-2, -0.5);
        }
    }
}

class VerticallLine {
    constructor() {
        this.y = random(border, (height - border));
        this.x = border;

        this.acceleration = random(-1, 1);
        this.weight = random(1, 5);
    }

    display() {
        stroke(map(this.weight, 1, 5, 10, 100), 55, 55, 50);
        strokeWeight(this.weight);
        line(this.x, this.y, width - border, this.y);
    }

    move() {
        this.y += this.acceleration;

        if (this.acceleration < 0 && this.y < border) {
            this.acceleration *= random(-2, -0.5);
        }

        if (this.acceleration > 0 && this.y > height - border) {
            this.acceleration *= random(-2, -0.5);
        }
    }
}

let lines = []

function setup() {
    createCanvas(windowWidth, windowHeight + 1);

    border = windowWidth * 0.03;

    for (_ = 0; _ < 30; _++) {
        let lineType = random(-1, 1);
        if (lineType > 0) {
            lines.push(new HorizontalLine());
        } else {
            lines.push(new VerticallLine());
        }
    }
}

function draw() {
    background(0);

    lines.forEach(line => {
        line.display();
        line.move();
    });
}