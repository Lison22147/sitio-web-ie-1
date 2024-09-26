let numPelotitas = 100; 
let margen = 50; 
let espaciado; 
let tamaño; 

function setup() {
  createCanvas(500, 500); 
  noStroke(); 
  frameRate(50); 
  
}

function draw() {
  background(0); 
  let velocidad = frameCount * 0.05;
  
   if (mouseIsPressed) { 
    
    for (let i = 0; i < 6; i++) { 
    noStroke(); 
    fill(255 * (i / 5)); 
    ellipse(mouseX, mouseY, 300 - (i * 50), 300 - (i * 50)); 
     
  }
     
   }
 else{
  espaciado = (width - margen * 2) / (numPelotitas - 1);

  for (let y = 0; y < numPelotitas; y++) { 
    for (let x = 0; x < numPelotitas; x++) { 
      tamaño = random(50, 25); 
      fill(255, random(255)); 
      strokeWeight(random(0, 4)); 
      circle(margen + x * espaciado, margen + y * espaciado, tamaño); 
        }
    }
  }
}
