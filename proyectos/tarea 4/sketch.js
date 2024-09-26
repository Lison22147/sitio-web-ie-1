let d;
let div = 20; 
let sym = 360 / div; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES); 
  pixelDensity(5); 
}

function draw() {
  background(250, 234, 214);  
  if (mouseIsPressed) { 
    background(255,155,5, 70);
    fill(250, 234, 214);  
    noStroke();
    d = map(mouseX, 0, width, 0, 90);   

  for (i = 0; i < 360; i += sym) { 
    push();                                
    translate(width / 2, height / 2);
    rotate(i);
    branch(100);  
    pop(); 
  }
  }
  
  else{
  
  stroke (255,155,5);
  noFill();
  d = map(mouseX, 0, width, 0, 90);   // Mapea la posición horizontal del mouse en el rango [0, width] al rango [0, 90], que se usará para controlar la rotación.

  for (i = 0; i < 360; i += sym) { // Bucle que repite el patrón rotado, aumentando `i` en cada paso según el valor de `sym`.
    push();                                
    translate(width / 2, height / 2); // Traslada el origen de coordenadas al centro del lienzo.
    rotate(i);// Rota el lienzo en función del valor de `i`, lo que genera las divisiones simétricas.
    branch(70);  // Llama a la función `branch` para dibujar la rama, con una longitud inicial de 50.
    pop(); // Restaura el estado previo de las transformaciones para evitar que las rotaciones y traslaciones afecten las siguientes iteraciones.
  }
  }
}

function branch(br) {
  
  ellipse(30, 10, 20, -br*0.2);  // Dibuja una línea vertical hacia arriba con longitud `br` desde el origen (0,0).
  translate(0, -br); // Mueve el origen de coordenadas al final de la línea, preparándose para dibujar la próxima rama.

  if (br >20 ) { // Si la longitud de la rama es mayor a 12, se continúa con la recursión.
    push();
    rotate(d);  // Rota en el ángulo `d`, determinado por la posición del mouse.
    branch(br * 0.5); // Llama a la función recursiva `branch` con una longitud reducida al 70% de la anterior.
    pop();          

    push();           
    rotate(-d); // Rota en el ángulo opuesto `-d` para crear una segunda rama simétrica.
    branch(br * 0.7); // Llama a la función recursiva para dibujar otra rama, también al 70% del tamaño.
    pop(); 
  }
}
