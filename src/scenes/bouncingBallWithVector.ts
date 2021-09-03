import p5 from "p5";

const sketch = (s: p5) => {
  let position = s.createVector(100, 100);
  let velocity = s.createVector(2, 6);

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    s.background(255);

    position.add(velocity);

    if (position.x > s.width || position.x < 0) {
      velocity.x *= -1;
    }
    if (position.y > s.height || position.y < 0) {
      velocity.y *= -1;
    }

    s.circle(position.x, position.y, 32);
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
