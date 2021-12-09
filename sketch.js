function setup() {
  createCanvas(300, 300);
  
}

function draw() {
  background(51);
  let  d = color('black')
  noFill();
  stroke(0, 0, 0);
  bezier(220, 218, 127, 157, 270, 167, 200, 76)
  bezier(240, 218, 147, 157, 290, 167, 220, 76)
  stroke(0,0,0);
  fill(d);
  ellipse(250, 250, 55, 55);
  let c = color(235,195,109)
  fill(c)
  noStroke();
  arc(300, 0, 120, 120, HALF_PI, PI);
  let a = color('#ffffff')
  fill(a)
 
  triangle(50, 75, 68, 30, 86, 75);
  triangle(50, 75, 5, 75, 45, 100);
  triangle(86, 75, 131, 75, 91, 100);
  triangle(45, 100, 35, 150, 65, 110);
  triangle(91, 100, 101, 150, 65, 110);
  beginShape();
vertex(50, 75);
vertex(86, 75);
vertex(91, 100);
vertex(65, 110);
vertex(45, 100);
  endShape(CLOSE);
  let  b = color(240,100,100,40)
  fill(b)
  quad(93, 37, 120, 20, 104, 63, 85, 70);
  quad(18, 10, 30, 3, 25, 40, 20, 43);
  quad(110, 160, 120, 150, 200, 200, 90, 180);
  quad(28, 231, 86, 220, 69, 276, 30, 263);
  
}