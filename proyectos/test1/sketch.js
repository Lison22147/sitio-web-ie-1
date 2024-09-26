function setup() {
  createCanvas(400, 400);
  background(220)
}

function draw() {
  
  
  if(mouseIsPressed){
    fill(random(255),random(255),random(255));
    circle(mouseX,mouseY,50);
  }
  else{
    fill("grey")
    circle(mouseX,mouseY,10)
  }
}