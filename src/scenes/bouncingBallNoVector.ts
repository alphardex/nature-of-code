import p5 from "p5";

const sketch = (s: p5) => {
  let x = 100;
  let y = 100;
  let xSpeed = 2;
  let ySpeed = 6;

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    s.background(255);
  };

  const draw = () => {
    x += xSpeed;
    y += ySpeed;

    if (x > s.width || x < 0) {
      xSpeed *= -1;
    }
    if (y > s.height || y < 0) {
      ySpeed *= -1;
    }

    s.circle(x, y, 32);
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
