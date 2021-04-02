const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var box1,box2;


function setup() {
  createCanvas(800,800);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,770,800,20);
  box1=new Box(330,400,80,50);
  box2=new Box(300,200,80,80);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
}