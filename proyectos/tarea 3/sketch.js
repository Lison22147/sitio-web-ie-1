let angle = 10; // Angle initial
let radius = 10; // Rayon initial
let angleIncrement = 0.9; // Incrément de l'angle
let radiusIncrement = 0.5; // Incrément du rayon
let numLines = 40; // Nombre de lignes dans le tourbillon


function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(0);

   push(); 
   translate(width / 2, height / 2);

 
  
  rotate(frameCount * 0.05);
 scale(1 + sin(frameCount * 0.01) * 0.4);
  let r = 50;
  let points = 50;
  
  
  for (let i = 0; i < points; i++) {
    let angle = TWO_PI / points * i; 
    
    
    let x = r * cos(angle);
    let y = r * sin(angle);
    
     
    
    
    let x2 = (radius + radiusIncrement) * cos(angle);
    let y2 = (radius + radiusIncrement) * sin(angle);
    noStroke();
    fill(50 - x2, 150 + y2, 100 - x2);
    ellipse(x, y, 10, 5);   
  }
  
  pop();   
  
  
  
  push();
  
 

  scale(1 + sin(frameCount * 0.01) * 0.4);

  noFill(); 
  
  for (let i = 0; i < 200; i++) {
    let x1 = radius * cos(angle);
    let y1 = radius * sin(angle);
    
    
    let x2 = (radius + radiusIncrement) * cos(angle);
    let y2 = (radius + radiusIncrement) * sin(angle);

     
    
  if (x1 > width || x1 < 0 || y1> height || y1< 0) {
    x1 = width / 2;
    y1 = height / 2;
  }
    
    
    for (let i = 0; i < numLines; i++) {
    stroke(50 - y2, 150 + y2, 100 - x2); 
    strokeWeight(01);} 
    line(x1, y1, x2, y2); 

    angle += 100; // Incrémente l'angle
    radius += radiusIncrement / numLines; // Incrémente le rayon pour une spirale douce
  }

  angle += angleIncrement; // Incrémente l'angle pour l'animation
  radius += radiusIncrement; // Incrémente le rayon pour l'animation
  
  pop();
    
   
  
  
}

