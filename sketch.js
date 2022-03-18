
var trex ,trex_running;

var floor, floorImg
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
floorImg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,300)
  
  //create a trex sprite
 trex = createSprite(50,240,60,50);
 trex.addAnimation("trexrun", trex_running);
 floor= createSprite(300, 290, 600, 20);
 floor.velocityX = -6
 trex.scale = 0.7;
 floor.addImage(floorImg);

}

function draw(){
  background("white");

  if(keyDown("space")){

    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY + 0.5;

  background("skyblue")

  drawSprites();
  
  trex.collide(floor);

  if(floor.x < 0){
    
    floor.x = floor.width/2;
  }
}