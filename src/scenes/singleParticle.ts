import p5 from "p5";

class Particle {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  size: number;
  lifespan: number;
  constructor(s: p5, position = s.createVector(0, 0), size = 12) {
    this.s = s;
    this.position = position;
    this.velocity = this.s.createVector(s.random(-1, 1), s.random(-1, 1));
    this.acceleration = this.s.createVector(0, 0.05);
    this.size = size;
    this.lifespan = 255;
  }
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }
  display() {
    this.s.stroke(0, this.lifespan);
    this.s.fill(255, this.lifespan);
    this.s.circle(this.position.x, this.position.y, this.size);
  }
  get isDead() {
    return this.lifespan <= 0;
  }
  run() {
    this.update();
    this.display();
  }
}

const sketch = (s: p5) => {
  let p: Particle;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    p = new Particle(s, s.createVector(s.width / 2, 20));
  };

  const draw = () => {
    s.background(255);

    p.run();

    if (p.isDead) {
      console.log("p is dead");
    }
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
