let x = 0;
function setup() {
  createCanvas(400, 400);
 noLoop();
  

}
function draw() {
    
 
  let d=color (255, 203, 98)
  let s=color (236, 33, 33)
  let c=color (223,255,7)
  let m=color (124 , 93, 31)
   background(220);
  
  // pizza
  fill(d);
  noStroke();
  ellipse(200, 200, 250, 250);
  fill(s);
  noStroke();
  ellipse(200, 200, 240, 240);
  fill(c);
  noStroke();
  ellipse(200, 200, 230, 230);
  // pepperoni
  if (mouseIsPressed) {
    fill(s);
    noStroke();
    ellipse(150, 250, 25, 25);
    ellipse(125, 200, 25, 25);
    ellipse(135, 125, 25, 25);
    ellipse(180, 140, 25, 25);
    ellipse(270, 130, 25, 25);
    ellipse(220, 100, 25, 25);
    ellipse(240, 170, 25, 25);
    ellipse(200, 225, 25, 25);
    ellipse(260, 260, 25, 25);
  } else {  
  }
  print(mouseIsPressed)
fill(m);
  noStroke()
  rect(120,150,25,25)
  rect(150,100,25,25)
  rect(220,125,25,25)
  rect(170,250,25,25)
  rect(240,200,25,25)
  rect(180,180,25,25)
  rect(110,220,25,25)
  if (keyIsPressed === true) {
  fill(c);
  noStroke()
  rect(120,150,25,25)
  rect(150,100,25,25)
  rect(220,125,25,25)
  rect(170,250,25,25)
  rect(240,200,25,25)
  rect(180,180,25,25)
  rect(110,220,25,25)
  }else{
    
  }
  fill(s);
  noStroke()
  ellipse(100, 200, 25, 25);
}
