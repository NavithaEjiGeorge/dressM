function preload(){
blueD = loadAnimation("blue.gif");
yellow = loadAnimation("yello.gif");
white = loadAnimation("white.gif");
AT = loadImage("poor.jpg");
goI = loadImage("go.png")
}

function setup() {
  createCanvas(600,500)
  face = createSprite(470,300, 20, 20);
  face.scale = 2;
  face.addAnimation("b",AT)
  face.addAnimation("1",blueD);
  face.addAnimation("2",yellow)
  face.addAnimation("3",white)
  b = createSprite(100, 140, 20, 20);
  b.shapeColor = "red"
  y = createSprite(100, 200, 20, 20);
  y.shapeColor = "yellow"
  w = createSprite(100, 255, 20, 20);
  w.shapeColor = "lightgrey";
      go = createSprite(100,460,20,20);
  go.addImage(goI);
  go.scale =0.5;
  go.scale = 0.3;
}

function draw() {
 background("white")
 drawSprites();
  if (mousePressedOver(b)) {
    face.changeAnimation("1",blueD);
    face.scale =3;
  }
  if (mousePressedOver(y)) {
    face.changeAnimation("2",yellow);
    face.scale = 2;
  } 
   if (mousePressedOver(w)) {
    face.changeAnimation("3",white);
    face.scale =3;
  } 
textSize(15);
    text("When you click the go button",50,20);
    text("you will receive a click here message",10,40);
    text("After getting the message click on it to play further..",10,60)
   text("Click these blocks to see the dresses",10,400)
if(mousePressedOver(go)){
  link = createA("","CLICK HERE");
  link.position(30,400)
}
}