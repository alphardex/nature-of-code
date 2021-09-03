import p5 from "p5";

class Pendulum {
  s: p5;
  angle: number;
  origin: p5.Vector;
  position: p5.Vector;
  radius: number;
  aVelocity: number;
  aAcceleration: number;
  aDamping: number;
  constructor(s: p5, origin = s.createVector(0, 0), radius = 128) {
    this.s = s;
    this.angle = this.s.PI / 4;
    this.origin = origin;
    this.position = s.createVector(0, 0);
    this.radius = radius;
    this.aVelocity = 0;
    this.aAcceleration = 0;
    this.aDamping = 0.995;
  }
  update() {
    const gravity = 0.4;
    this.aAcceleration = (-gravity * this.s.sin(this.angle)) / this.radius;
    this.aVelocity += this.aAcceleration;
    this.aVelocity *= this.aDamping;
    this.angle += this.aVelocity;
  }
  display() {
    this.position.set(
      this.radius * this.s.sin(this.angle),
      this.radius * this.s.cos(this.angle)
    );
    this.position.add(this.origin);

    this.s.push();
    this.s.translate(this.s.width / 2, this.s.height / 2);
    this.s.circle(this.position.x, this.position.y, 32);
    this.s.line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    this.s.pop();
  }
}

const sketch = (s: p5) => {
  let pendulum: Pendulum;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    pendulum = new Pendulum(s);
  };

  const draw = () => {
    pendulum.update();
    pendulum.display();
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
