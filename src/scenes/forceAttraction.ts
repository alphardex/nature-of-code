import p5 from "p5";

class PhysicsObject {
  s: p5;
  position: p5.Vector;
  mass: number;
  radius: number;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1, radius = 1) {
    this.s = s;
    this.position = position;
    this.mass = mass;
    this.radius = radius;
  }
  display() {
    this.s.circle(this.position.x, this.position.y, this.radius);
  }
}

class Mover extends PhysicsObject {
  velocity: p5.Vector;
  acceleration: p5.Vector;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1, radius = 1) {
    super(s, position, mass, radius);
    this.velocity = this.s.createVector(0, 0);
    this.acceleration = this.s.createVector(0, 0);
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
  }
  checkEdge() {
    if (this.position.x > this.s.width) {
      this.position.x = this.s.width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.position.x = 0;
      this.velocity.x *= -1;
    }
    if (this.position.y > this.s.height) {
      this.position.y = this.s.height;
      this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y *= -1;
    }
  }
}

class Attractor extends PhysicsObject {
  G: number;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1, radius = 1) {
    super(s, position, mass, radius);
    this.G = 1;
  }
  applyAttract(mover: Mover) {
    const force = p5.Vector.sub(this.position, mover.position);
    let r = force.mag();
    r = this.s.constrain(r, 5, 25);
    const strength = (this.G * (this.mass * mover.mass)) / r ** 2;
    force.setMag(strength);
    mover.applyForce(force);
  }
}

const sketch = (s: p5) => {
  let attractor: Attractor;
  let movers: Mover[] = [];

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    const attractorPosition = s.createVector(s.width / 2, s.height / 2);
    attractor = new Attractor(s, attractorPosition, 20, 40);

    for (let i = 0; i < 10; i++) {
      const x = s.random(s.width);
      const y = s.random(s.height);
      const m = s.random(0.1, 8);
      const r = m * 8;
      const moverPosition = s.createVector(x, y);
      const mover = new Mover(s, moverPosition, m, r);
      movers.push(mover);
    }
  };

  const draw = () => {
    s.background(255);

    attractor.display();

    movers.forEach((mover) => {
      attractor.applyAttract(mover);

      mover.update();
      mover.checkEdge();
      mover.display();
    });
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
