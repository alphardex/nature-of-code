import p5 from "p5";

const sketch = (s: p5) => {
  let angle = 0;
  let angleVelocity = 0.05;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    s.background(255);

    const amplitude = 100;

    const x = s.sin(angle) * amplitude;

    s.translate(s.width / 2, s.height / 2);
    s.circle(x, 0, 20);
    s.line(0, 0, x, 0);

    angle += angleVelocity;
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
