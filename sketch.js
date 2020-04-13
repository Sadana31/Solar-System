//creates the planets variable
var sun;
var mercury;
var venus;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;

//creates the angle variables
var angle;
var angleSpeed;
var sunRadius;

//creates the images variables
var sunImg;
var mercuryImg;
var venusImg;
var earthImg;
var marsImg;
var jupiterImg;
var saturnImg;
var uranusImg;
var neptuneImg;

//loads the images
function preload(){
  sunImg = loadImage("sun.png");
  mercuryImg = loadImage("mercury.png");
  venusImg = loadImage("venus.png");
  earthImg = loadImage("earth.png");
  marsImg = loadImage("mars.png");
  jupiterImg = loadImage("jupiter.png");
  saturnImg = loadImage("saturn.png");
  uranusImg = loadImage("uranus.png");
  neptuneImg = loadImage("neptune.png");
}

//creates the canvas and planets
function setup() {
  createCanvas(1350,600);
  sun = createSprite(700,300);
  sun.addImage("sun", sunImg);
   
  mercury = createSprite(600,150);
  mercury.addImage("mercury", mercuryImg);
  mercury.scale = 0.07;
  mercury.setCollider("circle", 0, 0, 100);

  venus = createSprite(890,290);
  venus.addImage("venus", venusImg);
  venus.scale = 0.2;
  venus.setCollider("circle",0,0,150);

  earth = createSprite(450,350);
  earth.addImage("earth", earthImg);
  earth.scale = 0.6;
  earth.setCollider("circle",0,0,60);

  mars = createSprite(750,520);
  mars.addImage("mars", marsImg);
  mars.scale = 0.07;
  mars.setCollider("circle",0,0,60);
  
  jupiter = createSprite(290,200);
  jupiter.addImage("jupiter", jupiterImg);
  jupiter.scale = 0.1;
  jupiter.setCollider("circle",0,0,150);

  saturn = createSprite(1100,400);
  saturn.addImage("saturn", saturnImg);
  saturn.scale = 0.2;
  saturn.setCollider("circle",0,0,180);

  uranus = createSprite(180,400);
  uranus.addImage("uranus", uranusImg);
  uranus.scale = 0.25;
  uranus.setCollider("circle",0,0,120);

  neptune = createSprite(1150,150);
  neptune.addImage("neptune", neptuneImg);
  neptune.scale = 0.2;
  neptune.setCollider("circle",0,0,170);
}

function draw() {
  background(0);   
  
  //makes the sun move
  angleMode(DEGREES);
  translate(width/2);
  rotate(angle);

  //makes the planets disappear
  if(mercury.collide(sun)){
    mercury.visible = false;
  }
  
  if(venus.collide(sun)){
    venus.visible = false;
  }

  if(earth.collide(sun)){
    earth.visible = false;
  }

  if(mars.collide(sun)){
    mars.visible = false;
  }

  if(jupiter.collide(sun)){
    jupiter.visible = false;
  }

  if(saturn.collide(sun)){
    saturn.visible = false;
  }

  if(uranus.collide(sun)){
    uranus.visible = false;
  }

  if(neptune.collide(sun)){
    neptune.visible = false;
  }

  //increases the size of the sun
  angle = angle + angleSpeed;
  if(frameCount % 1 === 0){
    sun.scale = sun.scale + 0.01;
  }  
  
  drawSprites();
}