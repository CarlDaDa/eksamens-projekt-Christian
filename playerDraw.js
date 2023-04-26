function drawPlayer() {
  rectMode(CENTER);
  let engineW = 20;
  if (hit == false) {
    fill("orange");

    if (keyIsDown(LEFT_ARROW)) {
      arc(playerx, playery + 10, 50, 50, (1 / 4) * PI, 0.5 * PI);
    } else if (keyIsDown(RIGHT_ARROW)) {
      arc(playerx, playery + 10, 50, 50, 0.5 * PI, (3 / 4) * PI);
    } else {
      arc(playerx, playery + 10, 50, 50, (1 / 3) * PI, (2 / 3) * PI);
    }
  }
  fill("grey");
  triangle(
    playerx,
    playery,
    playerx - 0.5 * engineW,
    playery + 20,
    playerx + 0.5 * engineW,
    playery + 20
  );
  fill("blue");
  rect(playerx, playery, playerW, 30, 3);
}

function crashAnimation(x, y, r) {
  if (crashR <= 130) {
    if (crashR <= r) {
      fill("orange");
      circle(x, y, crashR + 20);
    }

    if (crashR <= r + 10) {
      fill("yellow");
      circle(x, y, crashR + 10);
    }

    if (crashR >= r - 30) {
      fill("grey");
      circle(x, y, crashR);
    }

    crashR = crashR + 1;
  }
}
