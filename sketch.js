//created variables
var bow, arrow, red_balloon, green_balloon, pink_balloon, blue_balloon, background, score;
var bowImage, arrowImage, red_balloonImage, green_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage, redB, pinkB, blueB, greenB, arrowGroup;
 

var score = 0;

// loaded all the images here.
function preload(){
 //load your images here
  
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
  
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  // created background, bow, arrow and all the balloons.
  
  background = createSprite(0,0,800,800);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage);
  bow.scale = 1;
  
  redB = new Group();
  pinkB = new Group();
  blueB = new Group();
  greenB = new Group();
  arrowGroup = new Group();
  
}

function draw() {

  //add code here
  // gave movement to the background.
  
  background.velocityX = -3
  
  // made the arrow shoot from the bow when the space key is pressed.
  
  if (keyDown("space")) {
    var temparrow = createarrow();
    temparrow.addImage(arrowImage);
    temparrow.y = bow.y
  }
  
  if (background.x < 0){
    background.x = background.width/2;
   }
  
  bow.y = World.mouseY;
  
  var select_Balloon = Math.round(random(1,4));
  if(World.frameCount % 80 == 0) {
    if(select_Balloon == 1){
       redBalloon();
  }
  else if(select_Balloon == 2){
    greenBalloon();
  }
  else if(select_Balloon == 3) {
    pinkBalloon();
  }
  else {
  blueBalloon();
  }
}

  drawSprites();
  
  text ("score : " + score,500,50);
  
}


  if(arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  if(arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }
  if(arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  }
  if(arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 4;
  }
          
  
// created the function createarrow to store the variable arrow in it and returning the value.
function createarrow(){
  arrow = createSprite(360,100,5,10);
  arrow.velocityX = -6;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
   
}

 function pinkBalloon() {
    var pink = createSprite(0,Math.round(random(20,370)),10,10);
    pink.addImage(pink_balloonImage);
    pink.velocityX=3;
    pink.lifetime = 160;
    pink.scale=1.2;
    pinkB.add(pink);
    }
  
  function greenBalloon() {
    var green = createSprite(0,Math.round(random(20,370)),10,10);
    green.addImage(green_balloonImage);
    green.velocityX = 3
    green.lifetime = 160;
    green.scale = 0.1;
    greenB.add(green);
  }
    
    
  function blueBalloon() {
    var blue = createSprite(0,Math.round(random(20,370)),10,10);
    blue.addImage(blue_balloonImage);
    blue.velocityX=3;
    blue.lifetime = 160;
    blue.scale=0.1;
    blueB.add(blue);
    }
  
  function redBalloon(){
    var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red.addImage(red_balloonImage);
    red.velocityX = 3;
    red.lifetime = 160;
    red.scale = 0.1
    redB.add(red);
  } 