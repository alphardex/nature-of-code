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
    this.position = position.copy();
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
  fade() {
    this.s.stroke(0, this.lifespan);
    this.s.fill(255, this.lifespan);
  }
  display() {
    this.fade();
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

class Confetti extends Particle {
  constructor(s: p5, position = s.createVector(0, 0), size = 12) {
    super(s, position, size);
  }
  display() {
    this.s.push();
    this.fade();
    this.s.translate(this.position.x, this.position.y);
    const theta = this.s.map(
      this.position.x,
      0,
      this.s.width,
      0,
      this.s.TWO_PI
    );
    this.s.rotate(theta);
    this.s.rect(0, 0, this.size, this.size);
    this.s.pop();
  }
}

class ParticleSystem {
  s: p5;
  particles: Particle[];
  origin: p5.Vector;
  constructor(s: p5, origin = s.createVector(0, 0)) {
    this.s = s;
    this.particles = [];
    this.origin = origin;
  }
  addParticle() {
    const rand = this.s.random(0, 1);
    if (rand < 0.5) {
      const particle = new Particle(this.s, this.origin);
      this.particles.push(particle);
    } else {
      const confetti = new Confetti(this.s, this.origin);
      this.particles.push(confetti);
    }
  }
  run() {
    for (const particle of this.particles) {
      particle.run();
    }
    this.particles = this.particles.filter((p) => !p.isDead);
  }
  init() {
    this.addParticle();
    this.run();
  }
}

const sketch = (s: p5) => {
  let ps: ParticleSystem;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    ps = new ParticleSystem(s, s.createVector(s.width / 2, 50));
  };

  const draw = () => {
    s.background(255);

    ps.init();
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
