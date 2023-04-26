function pipe() {
  if (pipey == -50 + pipespeed) {
    pipeEater();
  }
  rectMode(CORNER);
  fill("green");
  rect(-10, pipey, 10 + holeX - holeW / 2, 50);
  rect(holeX + holeW / 2, pipey, 500, 50);
  rect(-30 + holeX - holeW / 2, pipey - 5, 30, 60);
  rect(holeX + holeW / 2, pipey - 5, 30, 60);

  if (pipey > height + 20) {
    pipey = -50;
  }
}

function pipeEater() {
  holeW = int(random(80, 200));
  holeX = int(random(80, width - 80));
}
