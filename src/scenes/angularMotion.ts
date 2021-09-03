import p5 from "p5";

const sketch = (s: p5) => {
  let angle = 0;
  let aVelocity = 0;
  let aAcceleration = 0.0001;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    s.background(255);

    s.translate(s.width / 2, s.height / 2);
    s.rotate(angle);

    s.line(-60, 0, 60, 0);
    s.circle(60, 0, 16);
    s.circle(-60, 0, 16);

    angle += aVelocity;
    aVelocity += aAcceleration;
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
