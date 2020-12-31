
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3;
var groundBody, paperBody;

function setup() 
{
	createCanvas(800, 700);

	var options = 
	{
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2

	}
	groundSprite = createSprite(width/2, height - 50, width,15);
	groundSprite.shapeColor = color("yellow");

	logsprite1 = createSprite(600,635,150,15);
	logsprite2 = createSprite(681.5,592,15,100);
	logsprite3 = createSprite(518.5,592,15,100);
	
	engine = Engine.create();
	world = engine.world;

	//Ground body
	groundBody = Bodies.rectangle(width/2, height - 35, width,45,{isStatic:true})
	World.add(world,groundBody);
	
	//Dustbin
	log1 = Bodies.rectangle(600,635,150,15,{isStatic:true});
	World.add(world,log1);
	log2 = Bodies.rectangle(681.5,592,15,100,{isStatic:true});
	World.add(world,log2);
	log3 = Bodies.rectangle(518.5,592,15,100,{isStatic:true});
	World.add(world,log3);

	//Crumpled ball
	paperBody = Bodies.circle(width-770,height-75,15,options);
	World.add(world,paperBody);	
	
	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(0);
  ellipse(paperBody.position.x,paperBody.position.y,30);
  drawSprites();
}
function keyPressed()
{
	
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBody,{x:paperBody.position.x,y:paperBody.position.y},{x:20,y:-20})
	
	}

}




