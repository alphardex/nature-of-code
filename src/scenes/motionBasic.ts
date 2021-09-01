import p5 from "p5";

class Mover {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  constructor(s: p5) {
    this.s = s;
    this.position = this.s.createVector(
      this.s.random(this.s.width),
      this.s.random(this.s.height)
    );
    this.velocity = this.s
      .createVector(this.s.random(-2, 2), this.s.random(-2, 2))
      .mult(3);
  }
  update() {
    this.position.add(this.velocity);
  }
  checkEdge() {
    if (this.position.x > this.s.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = this.s.width;
    }
    if (this.position.y > this.s.height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = this.s.height;
    }
  }
  display() {
    this.s.circle(this.position.x, this.position.y, 48);
  }
}

const sketch = (s: p5) => {
  let mover: Mover;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    mover = new Mover(s);
  };

  const draw = () => {
    mover.update();
    mover.checkEdge();
    mover.display();
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
