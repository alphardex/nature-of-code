import p5 from "p5";

class Mover {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  mass: number;
  radius: number;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1, radius = 1) {
    this.s = s;
    this.position = position;
    this.velocity = this.s.createVector(0, 0);
    this.acceleration = this.s.createVector(0, 0);
    this.mass = mass;
    this.radius = radius;
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
    this.s.circle(this.position.x, this.position.y, this.radius);
  }
}

const sketch = (s: p5) => {
  let movers: Mover[] = [];

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    for (let i = 0; i < 10; i++) {
      const x = 0;
      const y = 0;
      const m = s.random(0.1, 8);
      const r = m * 8;
      const mover = new Mover(s, s.createVector(x, y), m, r);
      movers.push(mover);
    }
  };

  const draw = () => {
    s.background(255);

    movers.forEach((mover) => {
      mover.applyFriction(0.01);
      const gravity = s.createVector(0, 0.1 * mover.mass);
      mover.applyForce(gravity);
      const wind = s.createVector(0.05, 0);
      mover.applyForce(wind);
      mover.update();
      mover.checkEdge();
      mover.display();
    });
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
