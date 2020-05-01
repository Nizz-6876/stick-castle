const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var brick1;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    brick1=new Brick(400,400,400,300,"red");
    brick2=new Brick(650,350,100,400,"blue");
    brick3=new Brick(150,350,100,400,"blue");
    brick4=new Brick(400,500,100,100,"yellow");
    brick5=new Brick(250,350,75,75,"aqua");
    brick6=new Brick(550,350,75,75,"aqua");
    
    
    
    

    
}

function draw(){
  background("black");
  Engine.update(engine);
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();

}