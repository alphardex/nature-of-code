import p5 from "p5";

const sketch = (s: p5) => {
  let total = 20;
  let randomCounts = Array(total).fill(0);

  const setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
  };

  const draw = () => {
    let index = s.floor(s.random(total));
    randomCounts[index] += 1;

    let w = s.width / total;

    randomCounts.forEach((h, i) => {
      s.rect(w * i, s.height - h, w, h);
    });
  };

  s.setup = setup;
  s.draw = draw;
};

export default sketch;
