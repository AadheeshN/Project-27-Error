
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var rope1;	
var Anchor1, Anchor2;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 655);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob();
	bob2 = new Bob();
	bob3 = new Bob();
	bob4 = new Bob();
	bob5 = new Bob();


	//rope1 = new Rope(bob1.body, roof1, -bobDiameter*2, 0);


	Engine.run(engine);

	roof1 = createSprite(400, 50, 850, 20);
	roof1.shapeColor = color("Orange");
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



