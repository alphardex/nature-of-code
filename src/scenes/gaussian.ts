import p5 from "p5";

const sketch = (s: p5) => {
  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);

    s.noStroke();
    s.background(127);
  };

  const draw = () => {
    const xloc = s.randomGaussian(s.width / 2, 60);
    s.fill(0, 10);
    s.ellipse(xloc, s.height / 2, 16, 16);
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
