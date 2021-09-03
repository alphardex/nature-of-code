import p5 from "p5";

class Particle {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  lifespan: number;
  mass: number;
  img: p5.Image;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1, img: p5.Image) {
    this.s = s;
    this.position = position.copy();
    const vx = this.s.randomGaussian(0, 1) * 0.3;
    const vy = this.s.randomGaussian(0, 1) * 0.3 - 1;
    this.velocity = this.s.createVector(vx, vy);
    this.acceleration = this.s.createVector(0, 0);
    this.lifespan = 100;
    this.mass = mass;
    this.img = img;
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
    this.lifespan -= 2.5;
  }
  fade() {
    this.s.tint(255, this.lifespan);
  }
  display() {
    this.fade();
    this.s.imageMode(this.s.CENTER);
    this.s.image(this.img, this.position.x, this.position.y);
  }
  get isDead() {
    return this.lifespan <= 0;
  }
  run() {
    this.update();
    this.display();
  }
}

class ParticleSystem {
  s: p5;
  particles: Particle[];
  origin: p5.Vector;
  img: p5.Image;
  constructor(s: p5, origin = s.createVector(0, 0), img: p5.Image) {
    this.s = s;
    this.particles = [];
    this.origin = origin;
    this.img = img;
  }
  addParticle() {
    const particle = new Particle(this.s, this.origin, 1, this.img);
    this.particles.push(particle);
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
}

const sketch = (s: p5) => {
  let ps: ParticleSystem;
  let img: p5.Image;

  const preload = () => {
    img = s.loadImage("./static/textures/texture.png");
  };

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    ps = new ParticleSystem(s, s.createVector(s.width / 2, s.height - 64), img);
  };

  const draw = () => {
    s.blendMode(s.ADD);
    s.clear();
    s.background(0);

    for (let i = 0; i < 2; i++) {
      ps.addParticle();
    }

    ps.run();

    const gravity = s.createVector(0, -0.1);
    ps.applyForce(gravity);

    const x = s.map(s.mouseX, 0, s.width, -0.2, 0.2);
    const wind = s.createVector(x, 0);
    ps.applyForce(wind);
  };

  s.preload = preload;
  s.setup = setup;
  s.draw = draw;
};

export default sketch;
