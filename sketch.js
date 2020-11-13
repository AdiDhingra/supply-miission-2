var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1Sprite,wall2Sprite,wall3Sprite,wall1,wall2,wall3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1Sprite=createSprite(350,650,200,20)
	wall2Sprite=createSprite(450,600,20,100)
	wall3Sprite=createSprite(250,600,20,100)
	wall1Sprite.shapeColor="red"
	wall2Sprite.shapeColor="red"
	wall3Sprite.shapeColor="red"

	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5,{isStatic:true} );
	wall1 = Bodies.rectangle(350,650,200,20,{isStatic:true});
	wall3 = Bodies.rectangle(450,600,20,100,{isStatic:true});
	wall2 = Bodies.rectangle(250,600,20,100,{isStatic:true});
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 World.add(world,wall1);
 World.add(world,wall2);
 World.add(world,wall3);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.65, isStatic:false});
	World.add(world, packageBody);
    
  }
}



