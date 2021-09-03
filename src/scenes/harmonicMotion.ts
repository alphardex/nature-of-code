import p5 from "p5";

const sketch = (s: p5) => {
  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    s.background(255);

    const amplitude = 100;
    const period = 120;

    const x = s.sin((s.TWO_PI * s.frameCount) / period) * amplitude;

    s.translate(s.width / 2, s.height / 2);
    s.circle(x, 0, 20);
    s.line(0, 0, x, 0);
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
