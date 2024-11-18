let song0;
let song1;
let song2;

let vol0;
let vol1;
let vol2;

let DELAY = 0;

function preload() {
  song0 = loadSound("../assets/bulldoglong.mp3");
  song1 = loadSound("../assets/lovelyrita.mp3");
  song2 = loadSound("../assets/dayinthelife.mp3");
}

function toColor(_peakVal) {
  return map(abs(_peakVal), 0, 1, 0, 255);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  vol0 = song0.getPeaks().map(toColor);
  vol1 = song1.getPeaks().map(toColor);
  vol2 = song2.getPeaks().map(toColor);
}

function draw() {
  background(0);

  if (song0.isPlaying()) {
    let tPos = song0.currentTime() / song0.duration();
    let dIndexDelay = floor(tPos * vol0.length + DELAY);
    let dIndex = constrain(dIndexDelay, 0, vol0.length - 1);
    let sat = vol0[dIndex];
    fill(sat, 0, 0);
    ellipse(width / 4, height / 2, 400);
  }

  if (song1.isPlaying()) {
    let tPos = song1.currentTime() / song1.duration();
    let dIndexDelay = floor(tPos * vol1.length + DELAY);
    let dIndex = constrain(dIndexDelay, 0, vol1.length - 1);
    let sat = vol1[dIndex];
    fill(0, sat, 0);
    ellipse(width / 2, height / 2, 400);
  }

  if (song2.isPlaying()) {
    let tPos = song2.currentTime() / song2.duration();
    let dIndexDelay = floor(tPos * vol2.length + DELAY);
    let dIndex = constrain(dIndexDelay, 0, vol2.length - 1);
    let sat = vol2[dIndex];
    fill(0, 0, sat);
    ellipse((width * 3) / 4, height / 2, 400);
  }
}

function keyPressed() {
  let playing0 = song0.isPlaying();
  let playing1 = song1.isPlaying();
  let playing2 = song2.isPlaying();

  if (playing2) {
    song2.stop();
  } else if (playing1) {
    song1.stop();
    song2.play();
  } else if (playing0) {
    song0.stop();
    song1.play();
  } else {
    song0.play();
  }
}
