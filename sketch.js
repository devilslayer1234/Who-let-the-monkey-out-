
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivaltime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkeyrun",monkey_running);
  monkey.scale=0.1;
 
  
  
  ground=createSprite(400,350,900,10);

 FoodGroup=createGroup();
 obstacleGroup=createGroup(); 
  
}

score=0;
survivaltime=0;
function draw() {
 background("white") ;
  
score = Math.ceil(frameCount/frameRate());
  
  stroke("black");
  textSize=20;
  fill("black");
  text("Survival Time: "+ score,250,20);
  
  
  
  
    ground.velocityX=-4;
    ground.x=ground.width/2;
    //console.log(ground.x);
  // console.log(Math.round(monkey.y))
  
  if(keyDown("space") && monkey.y>=305){
    monkey.velocityY=-18;
   
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  
  
  
  spawnFood()
  spawnObstacles()
 drawSprites() 
}
function spawnFood(){
  
if(frameCount % 60 === 0){
   banana=createSprite(400,200,10,10);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage); 
   banana.velocityX=-7; 
   banana.scale=0.1;
   banana.lifetime=200 
   FoodGroup.add(banana);                 
 
  }
  
}

function spawnObstacles(){
  if(frameCount%150===0){
    obstacle=createSprite(400,330,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-7;
    obstacle.scale=0.1
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
    
  }
  
}





