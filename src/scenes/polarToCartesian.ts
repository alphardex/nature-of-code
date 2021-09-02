import p5 from "p5";

const sketch = (s: p5) => {
  let r = 0;
  let theta = 0;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    s.translate(s.width / 2, s.height / 2);

    let x = r * s.cos(theta);
    let y = r * s.sin(theta);

    s.circle(x, y, 32);

    theta += 0.02;
    r += 0.1;
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
