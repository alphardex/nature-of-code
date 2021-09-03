import p5 from "p5";

class Oscillator {
  s: p5;
  angle: p5.Vector;
  aVelocity: p5.Vector;
  amplitude: p5.Vector;
  constructor(s: p5) {
    this.s = s;
    this.angle = s.createVector(0, 0);
    this.aVelocity = s.createVector(
      s.random(-0.05, 0.05),
      s.random(-0.05, 0.05)
    );
    this.amplitude = s.createVector(
      s.random(20, s.width / 2),
      s.random(20, s.height / 2)
    );
  }
  oscillate() {
    this.angle.add(this.aVelocity);
  }
  display() {
    let x = this.s.sin(this.angle.x) * this.amplitude.x;
    let y = this.s.sin(this.angle.y) * this.amplitude.y;

    this.s.push();
    this.s.translate(this.s.width / 2, this.s.height / 2);
    this.s.circle(x, y, 32);
    this.s.line(0, 0, x, y);
    this.s.pop();
  }
}

const sketch = (s: p5) => {
  let oscillator: Oscillator;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    oscillator = new Oscillator(s);
  };

  const draw = () => {
    oscillator.oscillate();
    oscillator.display();
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
