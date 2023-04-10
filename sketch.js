//variables
var bg, bgImg
var topGround, bottomGround
var balloon, balloonImg
var obstacleTop, obstacleTopImg
var obs1Top, obs2Top

function preload() {
  bgImg = loadImage("assets/bg.png")
  balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")
  obs1Top = loadImage("assets/obsTop1.png")
  obs2Top = loadImage("assets/obsTop2.png")
}

function setup() {
  createCanvas(800, 630)
  //background
  bg = createSprite(165, 485, 1, 1)
  bg.addImage(bgImg)
  bg.scale = 1.3
  //creating top and bottom ground
  topGround = createSprite(400, 10, 800, 20)
  bottomGround = createSprite(400, 390, 800, 20)
  topGround.visible = false
  bottomGround.visible = false
  //making balloon
  balloon = createSprite(100, 300, 20, 50)
  balloon.addAnimation("ballon",balloonImg)
  balloon.scale = 0.2
}

function draw() {
  background("blue")
//making the hot air balloon jump
  if (keyDown ("space")) {
    balloon.velocityY -= 4
  }
//adding gravity
  balloon.velocityY += 1
  drawSprites()
//calling function
  spawnObstaclesTop()
  spawnBar()
}

function spawnObstaclesTop() {
  if(frameCount%60 == 0) {
    obstacleTop = createSprite(550, 50, 40, 50)
    //generate a random number
    var r = Math.round(random(1,2))
    obstacleTop.scale = 0.2
    switch(r) {
      case 1: obstacleTop.addImage(obs1Top)
      break;
      case 2: obstacleTop.addImage(obs2Top)
      break; 
    }
    obstacleTop.velocityX -= 4
    obstacleTop.lifetime = 200
  }
}

function spawnBar() {
  if(frameCount%60 == 0) {
  var bar = createSprite(400, 200, 10, 800)
  bar.velocityX -= 4
  bar.lifetime = 200
  }
}