var garden,rabbit;
var gardenImg,rabbitImg,leafImg1,leafImg2,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
leafImg1 = loadImage("orangeLeaf.png");
leafImg2 = loadImage("redImage.png");
appleImg = loadImage("apple.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var select = Math.round(random(1,3))

  if(frameCount % 60 === 0) {
    if(select == 1) {
      createApple();
    }
    else if(select == 2){
     createLeaf1();
    }
    else{
      createLeaf2();
    }
  }
}


function createApple(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale = 0.07
  apple.velocityY = 3
}

function createLeaf1(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale = 0.07
  apple.velocityY = 3
}

function createLeaf2(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale = 0.07
  apple.velocityY = 3
}
