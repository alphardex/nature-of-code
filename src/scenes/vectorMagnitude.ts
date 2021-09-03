import p5 from "p5";

const sketch = (s: p5) => {
  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    s.background(255);

    let mouse = s.createVector(s.mouseX, s.mouseY);
    let center = s.createVector(s.width / 2, s.height / 2);
    mouse.sub(center);

    let m = mouse.mag();
    s.rect(0, 0, m, 10);

    s.translate(s.width / 2, s.height / 2);
    s.strokeWeight(2);
    s.line(0, 0, mouse.x, mouse.y);
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
