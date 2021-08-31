import p5 from "p5";

class Walker {
  s: p5;
  x: number;
  y: number;
  constructor(s: p5) {
    this.s = s;
    this.x = s.width / 2;
    this.y = s.height / 2;
  }
  display() {
    this.s.stroke(0);
    this.s.point(this.x, this.y);
  }
  step() {
    const r = this.s.random(0, 1);
    if (r < 0.4) {
      this.x += 1;
    } else if (r < 0.6) {
      this.x -= 1;
    } else if (r < 0.8) {
      this.y += 1;
    } else {
      this.y -= 1;
    }
  }
}

const sketch = (s: p5) => {
  let walker: Walker;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    s.noStroke();
    s.background(255);

    walker = new Walker(s);
  };

  const draw = () => {
    walker.display();
    walker.step();
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
