function setup() {
  createCanvas(600, 600);

  pipeEater();

  generateStars(200);

  generatePoint();
}

function draw() {
  updateBG();

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    winMenu();
  }

  if (gameState == 3) {
    HowTo();
  }

  //checks if framerate is stable.
  //print(frameRate(), millis());
}

function game() {
  starMaxSpeed = 2.8;

  deathRay();

  drawPlayer();

  pipe();

  collision();

  if (hit == false) {
    pipey += pipespeed;
    pointY += pipespeed;
    movement();
    points();

    rectMode(CORNER);
    fill("Purple");
    rect(10, 10, Raylen, 10);
  } else {
    if (time == false) {
      finalTime = millis();
      print(finalTime);
      time = true;
    }
    crashAnimation(playerx, playery, 80);
    starMaxSpeed = 0.5;
    if (millis() > finalTime + 2000) {
      playerx = 300;
      playery = 500;
      playerW = 60;
      pipey = -50;
      gameState = 0;
      Raylen = 100;
      generatePoint();
    }
  }
}

function menu() {
  starMaxSpeed = 2;

  hit = false;
  fill(65, 255, 65);
  textAlign(CENTER);
  textSize(45);
  text("FLYING SPACE BIRDS", width / 2, 100);
  fill(0, 191, 255);
  textSize(30);
  text("Highscore:", width / 2, 150);
  text(Highscore, width / 2, 190);

  fill("grey");
  rectMode(CENTER);
  rect(width / 2, 250, 100, 50, 10);
  fill("white");
  textSize(25);
  text("START", width / 2, 258);

  if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50) {
    if (mouseY > 225 && mouseY < 275) {
      if (mouseIsPressed == true) {
        gameSetup = false;
        gameState = 1;
      }
    }
  }
  fill("grey");

  rect(width / 2, 350, 150, 50, 10);
  fill("white");
  textSize(25);
  text("How to play", width / 2, 358);

  if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75) {
    if (mouseY > 325 && mouseY < 375) {
      if (mouseIsPressed == true) {
        gameState = 3;
      }
    }
  }
}

function winMenu() {
  starMaxSpeed = 2;

  hit = false;
  fill(65, 255, 65);
  textAlign(CENTER);
  textSize(45);
  text("FLYING SPACE BIRDS", width / 2, 100);
  fill(0, 191, 255);
  textSize(30);
  text("Highscore:", width / 2, 150);
  text(Highscore, width / 2, 190);

  fill("grey");
  rectMode(CENTER);
  rect(width / 2, 250, 100, 50, 10);
  fill("white");
  textSize(25);
  text("START", width / 2, 258);

  if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50) {
    if (mouseY > 225 && mouseY < 275) {
      if (mouseIsPressed == true) {
        gameSetup = false;
        gameState = 1;
        hit;
      }
    }
  }
}

function HowTo() {
  starMaxSpeed = 1;
  fill("grey");
  rect(300, 300, 400, 550, 50);

  fill("grey");
  rectMode(CENTER);
  rect(150, 90, 50, 30, 10);
  fill("black");
  textSize(12);
  text("Back", 150, 94);

  if (mouseX > 125 && mouseX < 175) {
    if (mouseY > 75 && mouseY < 105) {
      fill("black");
      rectMode(CENTER);
      rect(150, 90, 50, 30, 10);
      fill("grey");
      textSize(12);
      text("Back", 150, 94);
      if (mouseIsPressed == true) {
        gameState = 0;
      }
    }
  }

  fill("Black");
  textAlign(CENTER);
  textSize(30);
  text("How to Play:", width / 2, 100);

  textSize(20);
  textWrap(WORD);
  text(
    "The objective of the game, is to fill the purple line at the top at the screen, while avoiding the pipes falling towards you.",
    width / 2,
    150,
    300
  );
  text(
    "To fill the purple line, you must shoot the yellow points falling with your LASER.",
    width / 2,
    270,
    300
  );
  text(
    "To steer your space ship from side to side, use the arrows. To use the LASER use arrow up or spacebar. ",
    width / 2,
    370,
    300
  );
  text(
    "But beware! When shooting the laser you lose energy. If you have none you'll EXPLODE!",
    width / 2,
    480,
    300
  );
}
