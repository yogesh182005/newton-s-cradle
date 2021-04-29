
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var ground;
var bob;
var rope;

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(350,100,300,30);
	bob1=new Bob(250,300);
	bob2=new Bob(300,300);
	bob3=new Bob(350,300);
	bob4=new Bob(400,300);
	bob5=new Bob(450,300);
	


	rope1=new Rope(bob1.body,ground.body,-100,-250)
    World.add(world,rope1)

	rope2=new Rope(bob2.body,ground.body,-50,-250)
    World.add(world,rope2)


	rope3=new Rope(bob3.body,ground.body,0,-250)
    World.add(world,rope3)


	rope4=new Rope(bob4.body,ground.body,+50,-250)
    World.add(world,rope4)


	rope5=new Rope(bob5.body,ground.body,+100,-250)
    World.add(world,rope5)


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  


 ground.display();
 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
 

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0})
}

}

