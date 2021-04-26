
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world,dustbin,crumpledPaper;
var binimage,bin

function preload(){
  binimage = loadImage("dustbingreen.png");
  crumpledPaper= loadImage("paper.png");
}


function setup() {
	createCanvas(1600,700);
  

	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
   rightSide = new Dustbin(670,620,15,100);
   
   leftSide = new Dustbin(560,620,15,100);
   bottom = new Dustbin(615,660,90,20);
   ground = new Ground(200,900,800,20)
  crumpledPaper = new Paper(700,500,90,20);
  
   bin = createSprite(615,600 ,100,100);
   bin.addImage(binimage)
    bin.scale = 0.45

    var render = Render.create({
      element :document.body,
      options: {
        width: 1600,
      height : 700  ,  
    wireframes: false  }
    });
   Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  bottom.display();
  crumpledPaper.display();
 ground.display();
 leftSide.display();
 rightSide.display();
 bin.display();
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {
			x:40,
			y:-70
		})
	}
}


