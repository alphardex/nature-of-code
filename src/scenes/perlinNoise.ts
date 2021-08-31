import p5 from "p5";

class Walker {
  s: p5;
  position: p5.Vector;
  noise: p5.Vector;
  constructor(s: p5) {
    this.s = s;
    this.position = this.s.createVector(this.s.width / 2, this.s.height / 2);
    this.noise = this.s.createVector(
      this.s.random(0, 1000),
      this.s.random(0, 1000)
    );
  }
  display() {
    this.s.stroke(0);
    this.s.fill(51);
    this.s.ellipse(this.position.x, this.position.y, 48, 48);
  }
  step() {
    this.position.x = this.s.map(
      this.s.noise(this.noise.x),
      0,
      1,
      0,
      this.s.width
    );
    this.position.y = this.s.map(
      this.s.noise(this.noise.y),
      0,
      1,
      0,
      this.s.height
    );
    this.noise.add(0.01, 0.01, 0);
  }
}

const sketch = (s: p5) => {
  let walker: Walker;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    s.noStroke();

    walker = new Walker(s);
  };

  const draw = () => {
    walker.step();
    walker.display();
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
