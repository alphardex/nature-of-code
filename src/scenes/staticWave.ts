import p5 from "p5";

const sketch = (s: p5) => {
  let startAngle = 0;
  let aVelocity = 0.1;
  let amplitude = 100;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    s.background(255);

    s.translate(0, s.height / 2);

    startAngle += 0.015;
    let angle = startAngle;

    for (let x = 0; x < s.width; x += 24) {
      let y = s.sin(angle) * amplitude;

      s.circle(x, y, 48);

      angle += aVelocity;
    }
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
