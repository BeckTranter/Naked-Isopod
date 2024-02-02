let circleSize = 50;
let outlineSize = 10;
let myVariable = 0;
let speedX = 75;
let speedY = 37.5;
let x = 200;
let y = 100;
let a = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(220);
}

function draw() {
  
  stroke(256, 0, 256)
  fill(0, 0, 256)
  square(x, y, 100,);
  
  x = x + speedX;
  y = y + speedY;
  
  // AND &&
  // OR ||
  
  if (x > width || x < 0) {
    
    console.log(x);
    speedX = speedX * -1;
  }
  
  if (y > height || y < 0) {
      
    console.log(y);
    speedY = speedY * -1;
  }
  
  stroke(256, 256, 0);
  fill(0, 256, 256);
  circleSize = random(10, 50);
  outlineSize = random(0, 25)
  strokeWeight(outlineSize);
  
circle(random(-100,width), random(height), circleSize);
}
