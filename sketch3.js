function setup() {
  createCanvas(400, 400);
  frameRate(30);
  textSize(30);
  textAlign(CENTER);
  
}

function draw() {
  let bb = 55.5
  
  background(200);
  text(frameCount, width / 2, height / 2);
  fill(51)
  rect(50,200, 50,100)
  rect(50,300,300,50)
  rect(300,200, 50,100)
  colorMode(HSB);
fill(255, 204, 100);
  ellipse(100,150,20,20)
  ellipse(150,120,30,30)
  ellipse(250,170,bb / 2,bb / 2)
  ellipse(200,220,20,20)
  ellipse(200,140, bb,bb)
  ellipse(275,100,bb - 10,bb - 10)
  rect(100,250,200,50)
  let x = mouseX;
  let c = 
print('The value of x is not ' + x + 10)
print('The value of y IS ' + mouseY)
  
  ellipse(mouseX, mouseY, 40, 40);
  
  let leftWall = 100;
  let rightWall = 300;
  let xm = mouseX;
  let xc = constrain(mouseX, leftWall, rightWall);
  stroke(150);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);
    ellipse(xc, 66, 9, 9); 
}