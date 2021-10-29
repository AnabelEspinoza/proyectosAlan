var cuadrito;
function setup() {
  createCanvas(400, 400);
  cuadrito = createSprite(200,200,30,30);
}

function draw() {
  background(220);
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    cuadrito.position.x = cuadrito.position.x +5;
  }
  drawSprites();
}