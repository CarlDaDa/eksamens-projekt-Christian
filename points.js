function generatePoint() {
  pointX = random(100, 500);
  pointY = pipey - height / 2;
}

function points() {
  fill("yellow");
  circle(pointX, pointY, pointR);

  if (pointY + pointR / 2 > height) {
    pointX = random(100, 500);
    pointY = pointY - (height + 70);
  }
}
