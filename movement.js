function movement() {
  if (keyIsDown(LEFT_ARROW)) {
    if (playerx > 0 + 0.5 * playerW) {
      playerx -= 5;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (playerx < width - 0.5 * playerW) {
      playerx += 5;
    }
  }
}

function collision() {
  //65 == pipeheight + (player height /2)
  if (pipey > playery - 65) {
    if (playery > pipey - 15) {
      if (holeX - holeW / 2 > playerx - playerW / 2) {
        hit = true;
      } else if (holeX + holeW / 2 < playerx + playerW / 2) {
        hit = true;
      }
    }
  }
}
