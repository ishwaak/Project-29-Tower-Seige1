//bas
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var engine, world;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24,block25;

var ground1, ground2, ground3;
var img;
var polygon;
var slingShotObject;

function preload(){
  img = loadImage("hexagon (1).png");
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;

//block1
  block1 = new Block(630,260,40,50);
  block2 = new Block(670,260,40,50);
  block3 = new Block(710,260,40,50);
  block4 = new Block(750,260,40,50);
  block5 = new Block(790,260,40,50);
  block6 = new Block(830,260,40,50);
  block7 = new Block(870,260,40,50);

  //block2
  block8 = new Block(670,210,40,50);
  block9 = new Block(710,210,40,50);
  block10 = new Block(750,210,40,50);
  block11= new Block(790,210,40,50);
  block12 = new Block(830,210,40,50);

  //Block3
  block13 = new Block(710,160,40,50);
  block14 = new Block(750,160,40,50);
  block15 = new Block(790,160,40,50);


//Block2

  block16 = new Block(750,110,40,50);


//Block 1

block17 = new Block(1020,50,40,50);
block18 = new Block(1060,50,40,50);
block19 = new Block(1100,50,40,50);
block20 = new Block(1140,50,40,50);
block21 = new Block(1180,50,40,50);
  
//Block2

block22=new Block(1060,30,40,50);
block23=new Block(1100,30,40,50);
block24=new Block(1140,30,40,50);

block25=new Block(1100,10,40,50);
     



   
polygon = Bodies.circle(100,300,50);
World.add(world,polygon);   

slingShotObject=new slingshot(this.polygon,{x:100,y:300});


  ground1 = new Ground(750,450,350,10);
  ground2 = new Ground(1100,195,300,10);
  ground3 = new Ground(750, 600, 1500, 40)


 
  
}

function draw() {
  background(56,44,44);
  Engine.update(engine);


 fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


fill("  pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

fill(" light blue")
  block13.display();
  block14.display();
  block15.display();

fill("yellow");
  block16.display();

fill("yellow");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

fill("blue");
  block22.display();
  block23.display();
  block24.display();

fill("pink");
  block25.display();



  imageMode(CENTER);
  image(img,polygon.position.x,polygon.position.y,40,40);


slingShotObject.display();
  

  ground1.display();
  ground2.display();
  ground3.display();

  
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShotObject.fly();

}

function keyPressed(){
  if(keyCode===32){
  slingShotObject.attach(this.polygon);
  }
}