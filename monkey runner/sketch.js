
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground;
var bannanaGroup;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.3;
  
  ground = createSprite(200,399,1000,50);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
}


function draw() {
  background(999);
  
  text("Survival Time: "+ score, 150,50);
  score = score + Math.round(frameCount/60);
  
   if (ground.x < 0){
    ground.x = ground.width/2;
  } 
  
       if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -13;
       
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  monkey.collide(ground);
  
  

 if (frameCount % 80 === 0){
   var bannana = createSprite(400,165,10,40);
   //bannana.addImage(bannanaImage);
   bannana.velocityX = -6;
   bannana.y = Math.round(random(120,200));
   bannana.lifetime = 100;
   }

  
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,400 ,100,100);
   //obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.lifetime = 100;
   }
  
  
  drawSprites();
}






