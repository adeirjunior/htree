let animate = true,
  angle = 0,
  limit = 20,
  scrub = 0.01,
  animMult = 0.0002,
  sizeMult = 0.26,
  brLenRatio = 0.67;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, TWO_PI, QUARTER_PI, scrub);
  slider.addClass("slider");
}

function draw() {
  stroke(200);
  strokeWeight(1);
  background(50);

  if (animate === true) {
    angle = slider.value() + millis() * animMult;
  } else {
    angle = slider.value();
  }

  translate(width / 2, height);
  branch(height * sizeMult);
}

function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);

  push();
  rotate(angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();

  push();
  rotate(-angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
