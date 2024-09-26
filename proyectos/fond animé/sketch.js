let amplitudeBase = 50;
let frecuencia = 0.05;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  
  let velocidad = frameCount*0.05;
  background(250,235,215)
  
  for(let i=0; i<5; i++){
    let offset = i*10;
    
    let amplitud = amplitudeBase +sin(frameCount*0.03+i)*50;
    
    if (i == 0){
      stroke(240,164,93,100);
    }
    
    else if (i==1){
      stroke(240,204,96,50);
    }
    
    else if (i==2){
      stroke(255);
    }
    
    else if (i==3){
      stroke(240,108,93,140);
    }
        
      else {
      stroke(245,202,200,100);
    }
    
    strokeWeight (2+i);
  noFill();
  
  beginShape();
  for(let x = 0; x < width; x++){
    let y = height/2+sin(x*frecuencia+velocidad +offset)*amplitud;
    vertex(x,y);
  }
    
    endShape();    
  }
    
  for (let x =0; x<width; x+=50){
    let y =height/2 + sin( x * frecuencia + velocidad)*amplitudeBase;
    fill(255,204,60,150);
    noStroke();
    circle(x, y, 10);
    
  }
  
  }