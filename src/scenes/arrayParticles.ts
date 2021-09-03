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
  let particles: Particle[] = [];

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    s.background(255);

    const p = new Particle(s, s.createVector(s.width / 2, 20));
    particles.push(p);

    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];

      particle.run();

      if (particle.isDead) {
        particles.splice(i, 1);
      }
    }
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
