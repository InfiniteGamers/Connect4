var bg,bgImg;
var rcoin,rcoinImg;
var ycoin,ycoinImg;

function preload(){
  bgImg = loadImage("c4board.jpg");
}

function setup(){
  createCanvas(windowHeight,windowHeight)
  bg = createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImg);
  bg.scale = 5;
}

function draw(){
  background(bgImg);
  //drawSprites();
}