 
var cx,cy; 
var rx, ry 
var cspeed; 
var x = 80;
var y = 300;
var w = 130;
var h = 30;
var circleX, circleY;
var circleSize = 38;   
var  circleColor, defaultColor;
var  circleHighlight;
var currentColor;
var circleOver = false;
var checkclick = false;

function setup() {
  createCanvas(400, 400);
   circleColor = color(255);
  circleHighlight = color(200);
  defaultColor = color(102);
  currentColor = defaultColor;
  circleX = 260
  circleY = 314
  ellipseMode(CENTER);
  stroke(255);
  cx=150;
  cy=height/2;
  cspeed =2;

}

function draw(){
  
  background(220);
  fill(10);
  rect(100,100,200,140);
  fill(120)
  rect(150,240,100,50);
  rect(70,290,260,50);
  refresh(mouseX,mouseY);
  

 
 if(mouseIsPressed){
  if(circleOver == true){
    print("test");
    fill(220)
    ellipse(cx,cy,50,50);
 cx+= cspeed;
  

  if(cx <= 130 || cx>250){  
    cspeed *= -1; 
  }
    
    
  }
 }
  
 if(mouseIsPressed){
  if(mouseX>x && mouseX <x+w && mouseY>y && mouseY <y+h){
   print("The button is pressed and the mouse is hovering over it");
   fill(0);
  }
 }
  
  fill(0);
  rect(x,y,w,h);
 var ss = " ---> ";
  var s = " hello! ";
fill(250);
text( s , 120, 310, 150, 30);
 
fill(5);
text(ss, 220, 310, 220, 40);
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
    stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
  }
  
  function refresh( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ){
    circleOver = true;
    } else {
    circleOver = false;
    }
  }

   
  function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
  
  
  
  
  }