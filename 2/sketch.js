let bulldog;
let lovelyrita;
let dayinthelife;

let red;
let green;
let blue;

let DELAY = 0;

class Button {
  constructor(label, x, y, onClick) {
    this.button = createButton(label);
    this.button.position(x, y);
    this.button.mouseClicked(onClick);
  }
}

function preload() {
  bulldog = loadSound("../assets/bulldoglong.mp3");
  lovelyrita = loadSound("../assets/lovelyrita.mp3");
  dayinthelife = loadSound("../assets/dayinthelife.mp3");
}

function toColor(_peakVal) {
  return map(abs(_peakVal), 0, 1, 0, 255);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  red = bulldog.getPeaks().map(toColor);
  green = lovelyrita.getPeaks().map(toColor);
  blue = dayinthelife.getPeaks().map(toColor);

  play0 = new Button("play", 10, height / 4 - 60, play0Clicked);
  play1 = new Button("play", 10, height / 2 - 60, play1Clicked);
  play2 = new Button("play", 10, (height * 3) / 4 - 60, play2Clicked);

  stop0 = new Button("stop", 50, height / 4 - 60, stop0Clicked);
  stop1 = new Button("stop", 50, height / 2 - 60, stop1Clicked);
  stop2 = new Button("stop", 50, (height * 3) / 4 - 60, stop2Clicked);
}

function draw() {
  background(0);

  for (idx = 0; idx < red.length; idx++) {
    let sat = red[idx];
    let x = map(idx, 0, red.length, 0, width);
    let y = height / 4;

    stroke(sat, 0, 0);
    line(x, y - 30, x, y + 30);
  }

  for (idx = 0; idx < green.length; idx++) {
    let sat = green[idx];
    let x = map(idx, 0, green.length, 0, width);
    let y = height / 2;

    stroke(0, sat, 0);
    line(x, y - 30, x, y + 30);
  }

  for (idx = 0; idx < blue.length; idx++) {
    let sat = blue[idx];
    let x = map(idx, 0, blue.length, 0, width);
    let y = (height * 3) / 4;

    stroke(0, 0, sat);
    line(x, y - 30, x, y + 30);
  }
}

function play0Clicked() {
  bulldog.play();
}

function play1Clicked() {
  lovelyrita.play();
}

function play2Clicked() {
  dayinthelife.play();
}

function stop0Clicked() {
  bulldog.stop();
}

function stop1Clicked() {
  lovelyrita.stop();
}

function stop2Clicked() {
  dayinthelife.stop();
}
