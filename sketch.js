var movingRect,fixedRect;

function setup() {

  createCanvas(800,1200);
  fixedRect=createSprite(600, 200, 70, 50);
  movingRect=createSprite(600,400,50,70);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  movingRect.debug=true;
  fixedRect.debug=true;
  fixedRect.velocityY=5;
movingRect.velocityY=-5;
}

function draw() {
  background(200); 
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 
    ){
      movingRect.velocityX=movingRect.velocityX*-1;
      fixedRect.velocityX=fixedRect.velocityX*-1;
    }
    if(movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 
      && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 
      ){
        movingRect.velocityY=movingRect.velocityY*-1;
        fixedRect.velocityY=fixedRect.velocityY*-1;
      }
     

  drawSprites();
}