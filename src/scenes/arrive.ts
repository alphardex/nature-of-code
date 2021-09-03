import p5 from "p5";

class Vehicle {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  size: number;
  mass: number;
  maxSpeed: number;
  maxForce: number;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1) {
    this.s = s;
    this.position = position;
    this.velocity = this.s.createVector(0, 0);
    this.acceleration = this.s.createVector(0, 0);
    this.size = 32;
    this.mass = mass;
    this.maxSpeed = 8;
    this.maxForce = 0.2;
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
  display() {
    const theta = this.velocity.heading() - this.s.PI / 2;
    this.s.push();
    this.s.translate(this.position.x, this.position.y);
    this.s.rotate(theta);
    const l = this.size / 2;
    this.s.triangle(-l, -l, l, -l, 0, l);
    this.s.pop();
  }
  arrive(target: p5.Vector) {
    const desired = p5.Vector.sub(target, this.position);
    const d = desired.mag();
    const r = 200;
    if (d < r) {
      const m = this.s.map(d, 0, r, 0, this.maxSpeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxSpeed);
    }
    const steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }
}

const sketch = (s: p5) => {
  let vehicle: Vehicle;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    vehicle = new Vehicle(s);
  };

  const draw = () => {
    s.background(255);

    vehicle.update();
    vehicle.display();

    const target = s.createVector(s.mouseX, s.mouseY);
    vehicle.arrive(target);
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
