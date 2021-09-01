import p5 from "p5";

class Mover {
  s: p5;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  topSpeed: number;
  constructor(s: p5) {
    this.s = s;
    this.position = this.s.createVector(
      this.s.random(this.s.width),
      this.s.random(this.s.height)
    );
    this.velocity = this.s.createVector(0, 0);
    this.acceleration = this.s.createVector(0, 0);
    this.topSpeed = 10;
  }
  update() {
    const mouse = this.s.createVector(this.s.mouseX, this.s.mouseY);
    const direction = p5.Vector.sub(mouse, this.position);
    this.acceleration = direction;
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
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
  // let mover: Mover;
  let movers: Mover[] = [];

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    // mover = new Mover(s);
    for (let i = 0; i < 10; i++) {
      movers[i] = new Mover(s);
    }
  };

  const draw = () => {
    // mover.update();
    // mover.checkEdge();
    // mover.display();
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
