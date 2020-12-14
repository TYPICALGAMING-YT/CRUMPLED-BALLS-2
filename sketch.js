
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground1;
var log1,log2,log3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(200,450,40);
    log1=new Box(790,640,10,10)
    ground1=new Ground(400,690,1500,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 log1.display();
ground1.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});


}



}

