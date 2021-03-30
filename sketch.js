
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper1=new paper(100,600)
ground1=new ground(400,680,800,20)
side1=new dustbin(550,620,20,100)
side2=new dustbin(635,660,150,20)
side3=new dustbin(720,620,20,100)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper1.display()
  ground1.display()
  side1.display()
  side2.display()
  side3.display()
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
	}
}



