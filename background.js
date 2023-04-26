function generateStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    starpossition.push([
      (starR = random(1, starMaxR)),
      (starX = random(-10, width + 10)),
      (starY = random(-10, height + 10)),
    ]);
  }
}

function updateBG() {
  background(22, 20, 22);
  fill(230, 230, 230);
  noStroke;
  for (let i = 0; i < starpossition.length; i++) {
    circle(starpossition[i][1], starpossition[i][2], starpossition[i][0]);
  }

  for (let i = 0; i < starpossition.length; i++) {
    starpossition[i][2] =
      starpossition[i][2] +
      map(starpossition[i][0], 0, starMaxR, 0, starMaxSpeed);
  }

  for (let j = 0; j < starpossition.length; j++) {
    if (starpossition[j][2] > height + 10) {
      starpossition[j][2] = -40;
    }
  }
}
