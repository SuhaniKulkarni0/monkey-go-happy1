
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survivalTime = 0
var jungleImg, jungle


function preload(){
  
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  jungleImg = loadImage("jungle.jpg")
 
  
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
}



function setup() {
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  
  jungle = createSprite(0,75)
  jungle.velocityX = -3
  jungle.scale = 1.2
  
  console.log(ground.x)
  
  jungle.depth = monkey.depth
  monkey.depth = monkey.depth +1
  
  bananaGroup.depth = monkey.depth
  obstacleGroup.depth = monkey.depth
 
}


function draw() { 
  createCanvas(400,400)

  
  jungle.addImage(jungleImg)
  
  food()
  obstacles()
  

  if(monkey.isTouching(bananaGroup)){
    
    score = score+2
    bananaGroup.destroyEach()}
    

  switch(score){
    case 10: monkey.scale = 0.12
      break
    case 20: monkey.scale = 0.14
      break
    case 30: monkey.scale = 0.16
      break
    case 40: monkey.scale = 0.18
      break
      default: break

  }   
      
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1
  }
  
  
  if(jungle.x< 5){
    jungle.x = jungle.width/2}
    
  if(ground.x >= 5){
    ground.x = ground.width/2
  ground.visible = false
    
  }
  
      
      
  if(keyDown("space")){
    monkey.velocityY = -10

  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground)
      
  drawSprites()
 
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+score,300,50)
  
  
}

function food(){
  
  if(frameCount%80===0){
    
    banana = createSprite(400,0,50,50)
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.velocityX = -4.5
    banana.lifetime = 200
    banana.scale = 0.1
    
    bananaGroup.add(banana)
                    
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,330,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.lifetime = 150
    obstacle.velocityX = -4
    obstacle.scale = 0.1
    obstacleGroup.add(obstacle)
    
  }
  
}





