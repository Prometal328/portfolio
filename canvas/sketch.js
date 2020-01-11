window.addEventListener('resize', () => location.reload());

const border = 10;

class Dot {
    constructor() {
        this.x = random(border, width - border);
        this.y = random(border, height - border);
    }

    connect(alpha, beta) {
        let alphaDistance = Math.sqrt(Math.pow(alpha.x - this.x, 2) + Math.pow(alpha.y - this.y, 2));
        let betaDistance = Math.sqrt(Math.pow(beta.x - this.x, 2) + Math.pow(beta.y - this.y, 2));

        if (alphaDistance < 300 && betaDistance < 300) {
            noStroke();
            fill(255, 255, 255, 5);
            triangle(this.x, this.y, alpha.x, alpha.y, beta.x, beta.y);
        }
    }

    move() {
        if (this.x > border && this.x < width - border) {
            this.x += random(-1, 1);
        } else {
            this.x = random(border, width - border);
        }

        if (this.y > border && this.y < height - border) {
            this.y += random(-1, 1);
        } else {
            this.y = random(border, height - border);
        }
    }
};

let dots = [] 

function setup() {
    createCanvas(windowWidth, windowHeight);
    let dotsCount = random(30, 40);

    for (_ = 0; _ < dotsCount; _++) {
        dots.push(new Dot());
    }
}

function draw() {
    background(0);

    dots.forEach(alpha => {
        dots.forEach(beta => {
            dots.forEach(gamma => {
                alpha.connect(beta, gamma);
                alpha.move();
            });
        });
    });
}