let bulldog;
let mAmplitude;
let mFFT;

function preload() {
  bulldog = loadSound("../assets/bulldogshort.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  checkbox1 = createCheckbox("volume");
  checkbox1.position(10, 10);

  checkbox2 = createCheckbox("bass");
  checkbox2.position(10, 30);

  checkbox3 = createCheckbox("lowMid");
  checkbox3.position(10, 50);

  checkbox4 = createCheckbox("mid");
  checkbox4.position(10, 70);

  checkbox5 = createCheckbox("highMid");
  checkbox5.position(10, 90);

  checkbox6 = createCheckbox("treble");
  checkbox6.position(10, 110);

  mAmplitude = new p5.Amplitude();
  mFFT = new p5.FFT();
}

function draw() {
  background(255);
  let spectrum = mFFT.analyze();
  noStroke();

  if (checkbox1.checked()) {
    let mVolume = map(mAmplitude.getLevel(), 0, 1, 0, height);
    fill("red");
    rect(width / 2 - 120, 0, 40, mVolume);
  }

  if (checkbox2.checked()) {
    let mBass = map(mFFT.getEnergy("bass"), 0, 255, 0, height);
    fill("orange");
    rect(width / 2 - 80, 0, 40, mBass);
  }

  if (checkbox3.checked()) {
    let mLowMid = map(mFFT.getEnergy("lowMid"), 0, 255, 0, height);
    fill("yellow");
    rect(width / 2 - 40, 0, 40, mLowMid);
  }

  if (checkbox4.checked()) {
    let mMid = map(mFFT.getEnergy("mid"), 0, 255, 0, height);
    fill("green");
    rect(width / 2, 0, 40, mMid);
  }

  if (checkbox5.checked()) {
    let mHighMid = map(mFFT.getEnergy("highMid"), 0, 255, 0, height);
    fill("blue");
    rect(width / 2 + 40, 0, 40, mHighMid);
  }

  if (checkbox6.checked()) {
    let mTreble = map(mFFT.getEnergy("treble"), 0, 255, 0, height);
    fill("purple");
    rect(width / 2 + 80, 0, 40, mTreble);
  }
}

function keyPressed() {
  if (bulldog.isPlaying()) {
    bulldog.pause();
  } else {
    bulldog.play();
  }
}
