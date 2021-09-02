import p5 from "p5";

class Mover {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  mass: number;
  radius: number;
  constructor(s: p5, position = s.createVector(0, 0), mass = 1) {
    this.s = s;
    this.position = position;
    this.velocity = this.s.createVector(0, 0);
    this.acceleration = this.s.createVector(0, 0);
    this.mass = mass;
    this.radius = this.mass * 8;
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
  display() {
    this.s.circle(this.position.x, this.position.y, this.radius);
  }
}

const sketch = (s: p5) => {
  let movers: Mover[] = [];

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    for (let i = 0; i < 10; i++) {
      const x = s.width / 2;
      const y = s.random(0, s.height / 2);
      const m = s.random(0.1, 8);
      movers.push(new Mover(s, s.createVector(x, y), m));
    }
  };

  const draw = () => {
    movers.forEach((mover) => {
      const gravity = s.createVector(0, 0.1);
      mover.applyForce(gravity);
      if (s.mouseIsPressed) {
        const wind = s.createVector(0.1, 0);
        mover.applyForce(wind);
      }
      mover.update();
      mover.checkEdge();
      mover.display();
    });
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
