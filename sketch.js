
function preload(){
  //pre-load images
  runnerImg=loadAnimation("runner-1.png","runner-2.png");
  path=("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = createSprite(200,200,25,25);
  runner.addAnimation("moving",runnerImg);
  runner.scale = 0.2;

  path=createSprite(200,200);
  path.addImage(pathImg);
  

  

  

}

function draw() {
 background("black");

  

  


  drawSprites()

}
