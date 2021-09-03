import p5 from "p5";

class Mover {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  mass: number;
  radius: number;
  damping: number;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1, radius = 1) {
    this.s = s;
    this.position = position;
    this.velocity = this.s.createVector(0, 0);
    this.acceleration = this.s.createVector(0, 0);
    this.mass = mass;
    this.radius = radius;
    this.damping = 0.98;
  }
  applyForce(force: p5.Vector) {
    // Newton Law 2: F = ma
    const acceleration = p5.Vector.div(force, this.mass);
    this.acceleration.add(acceleration);
  }
  applyFriction(co: number) {
    const friction = this.velocity
      .copy()
      .mult(-1)
      .setMag(co);
    this.applyForce(friction);
  }
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.mult(this.damping);
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
  display() {
    this.s.fill(255);
    this.s.circle(this.position.x, this.position.y, this.radius);
  }
}

class Spring {
  s: p5;
  anchor: p5.Vector;
  k: number;
  restLength: number;
  constructor(s: p5, anchor = s.createVector(0, 0), length = 100) {
    this.s = s;
    this.anchor = anchor;
    this.k = 0.2;
    this.restLength = length;
  }
  connect(mover: Mover) {
    const force = p5.Vector.sub(mover.position, this.anchor);
    const currentLength = force.mag();
    const x = currentLength - this.restLength;
    const F = -this.k * x;
    force.setMag(F);
    mover.applyForce(force);
  }
  display() {
    this.s.circle(this.anchor.x, this.anchor.y, 10);
  }
  displayLine(mover: Mover) {
    this.s.line(
      this.anchor.x,
      this.anchor.y,
      mover.position.x,
      mover.position.y
    );
  }
  constrainLength(mover: Mover, min: number, max: number) {
    const force = p5.Vector.sub(mover.position, this.anchor);
    const d = force.mag();
    if (d < min) {
      force.setMag(min);
      mover.position = p5.Vector.add(this.anchor, force);
      mover.velocity.mult(0);
    } else if (d > max) {
      force.setMag(max);
      mover.position = p5.Vector.add(this.anchor, force);
      mover.velocity.mult(0);
    }
  }
}

const sketch = (s: p5) => {
  let mover: Mover;
  let spring: Spring;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    let moverPosition = s.createVector(0, 100);
    mover = new Mover(s, moverPosition, 24, 32);
    let springPosition = s.createVector(0, 0);
    spring = new Spring(s, springPosition, 100);
  };

  const draw = () => {
    s.background(255);

    s.translate(s.width / 2, s.height / 2);

    const gravity = s.createVector(0, 9.8);
    mover.applyForce(gravity);

    spring.connect(mover);
    spring.constrainLength(mover, 50, 200);
    spring.displayLine(mover);

    mover.update();

    mover.display();
    spring.display();
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
