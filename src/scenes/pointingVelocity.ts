import p5 from "p5";

class PhysicsObject {
  s: p5;
  position: p5.Vector;
  mass: number;
  radius: number;
  diameter: number;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1, radius = 1) {
    this.s = s;
    this.position = position;
    this.mass = mass;
    this.radius = radius;
    this.diameter = radius * 2;
  }
  display() {
    this.s.push();
    this.s.translate(this.position.x, this.position.y);
    this.s.circle(0, 0, this.diameter);
    this.s.pop();
  }
}

class Mover extends PhysicsObject {
  velocity: p5.Vector;
  acceleration: p5.Vector;
  angle: number;
  aVelocity: number;
  aAcceleration: number;
  topSpeed: number;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1, radius = 1) {
    super(s, position, mass, radius);
    this.velocity = this.s.createVector(0, 0);
    this.acceleration = this.s.createVector(0, 0);
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0.001;
    this.topSpeed = 4;
  }
  applyForce(force: p5.Vector) {
    // Newton Law 2: F = ma
    const acceleration = p5.Vector.div(force, this.mass);
    this.acceleration.add(acceleration);
  }
  update() {
    const mouse = this.s.createVector(this.s.mouseX, this.s.mouseY);
    const dir = p5.Vector.sub(mouse, this.position).setMag(0.5);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);

    this.angle += this.aVelocity;

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
    this.s.push();
    this.s.translate(this.position.x, this.position.y);
    const angle = this.velocity.heading();
    this.s.rotate(angle);
    this.s.circle(0, 0, this.diameter);
    this.s.line(0, 0, this.radius, 0);
    this.s.pop();
  }
}

const sketch = (s: p5) => {
  let movers: Mover[] = [];

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    for (let i = 0; i < 1; i++) {
      const x = s.random(s.width);
      const y = s.random(s.height);
      const m = s.random(2, 4);
      const r = m * 8;
      const moverPosition = s.createVector(x, y);
      const mover = new Mover(s, moverPosition, m, r);
      movers.push(mover);
    }
  };

  const draw = () => {
    movers.forEach((mover) => {
      mover.update();
      mover.checkEdge();
      mover.display();
    });
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
