const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;

var Balls = [];
var Ball_Barriers = [];
var divisions = [];

var score =0;
var count = 0;
var particle = null;

function setup() { 
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  for (var i = 5; i <= width; i = i + 78){
    divisions.push(new Division(i, height-300/2, 10, 300));
  }

  for (var j = 40; j <= width; j = j + 50){
    Ball_Barriers.push(new Ball_Barrier(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    Ball_Barriers.push(new Ball_Barrier(j, 150));
  }
  for (var j = 40; j <= width; j = j + 65){
    Ball_Barriers.push(new Ball_Barrier(j, 225));
  } 
}

function draw() {
  Engine.update(engine);
  background(232, 255, 255 );
  
  textSize(18)
  text("Score : "+score,20,40);
  fill("black");
  
  textSize(23)
  text("     6 ", 5, 550);
  text("     4 ", 80, 550);
  text("     2 ", 160, 550);
  text("     1 ", 240, 550);
  text("     3 ", 320, 550);
  text("     5 ", 400, 550);


  if (particle === null){
    particle = new Ball(random(width/2-30, width/2+30), 10, 10);
    Balls.push(particle);
  }

  ground.display();
  
  for (var k = 0; k < Balls.length; k++){
    Balls[k].display();
  }

  for (var j = 0; j < Ball_Barriers.length; j++){
    Ball_Barriers[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  if (particle != null) {
    if (particle.body.position.y>760)
    {
      if (particle.body.position.x > 0 && particle.body.position.x < 80) {
        score += 6;
        particle = null;     
      } else 
      if (particle.body.position.x > 80 && particle.body.position.x < 160) {
        score += 4;
        particle = null;     
      } else 
      if (particle.body.position.x > 160 && particle.body.position.x < 240) {
        score += 2;
        particle = null;     
      } else
      if (particle.body.position.x > 240 && particle.body.position.x < 320) {
        score += 1;
        particle = null;     
      } else
      if (particle.body.position.x > 320 && particle.body.position.x < 420) 
      {
        score += 3;
        particle = null;
      } else {
        score += 5;
        particle = null;
      }
    }        
  }

  drawSprites();
  
  
}

