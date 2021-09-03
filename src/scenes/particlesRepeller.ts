import p5 from "p5";

class Particle {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  size: number;
  lifespan: number;
  mass: number;
  constructor(s: p5, position = s.createVector(0, 0), size = 12, mass = 1) {
    this.s = s;
    this.position = position.copy();
    this.velocity = this.s.createVector(s.random(-1, 1), s.random(-1, 1));
    this.acceleration = this.s.createVector(0, 0);
    this.size = size;
    this.lifespan = 255;
    this.mass = mass;
  }
  applyForce(force: p5.Vector) {
    // Newton Law 2: F = ma
    const acceleration = p5.Vector.div(force, this.mass);
    this.acceleration.add(acceleration);
  }
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
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
  constructor(s: p5, position = s.createVector(0, 0), size = 12, mass = 1) {
    super(s, position, size, mass);
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

class Repeller {
  s: p5;
  position: p5.Vector;
  G: number;
  mass: number;
  size: number;
  constructor(s: p5, position = s.createVector(0, 0)) {
    this.s = s;
    this.position = position;
    this.G = 1;
    this.mass = 150;
    this.size = 32;
  }
  display() {
    this.s.circle(this.position.x, this.position.y, this.size);
  }
  applyRepel(p: Particle) {
    const force = p5.Vector.sub(this.position, p.position);
    let r = force.mag();
    r = this.s.constrain(r, 1, 100);
    const strength = -(this.G * (this.mass * p.mass)) / r ** 2;
    force.setMag(strength);
    p.applyForce(force);
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
  applyForce(force: p5.Vector) {
    this.particles.forEach((p) => p.applyForce(force));
  }
  applyRepeller(repeller: Repeller) {
    this.particles.forEach((p) => repeller.applyRepel(p));
  }
}

const sketch = (s: p5) => {
  let ps: ParticleSystem;
  let repeller: Repeller;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    ps = new ParticleSystem(s, s.createVector(s.width / 2, 50));
    repeller = new Repeller(s, s.createVector(s.width / 2, s.height / 2));
  };

  const draw = () => {
    s.background(255);

    ps.init();

    const gravity = s.createVector(0, 0.1);
    ps.applyForce(gravity);

    repeller.display();
    ps.applyRepeller(repeller);
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
