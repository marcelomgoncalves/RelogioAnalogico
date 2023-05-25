function setup() {
  createCanvas(400, 400);
  background('black');
  angleMode(DEGREES);  
}

function draw() {
  background('black');
  translate(width/2, height/2);
  strokeWeight(4);
  noStroke();
  fill(255);
  circle(0,0,10);
  push();
  stroke(255);
  rotate((minute() * 6));
  line(0,0,0,-100);
  pop();
  push();
  stroke(0,255,0);
  rotate(hour() % 12 * 30);
  line(0,-6,0,-80);
  pop();  
  push();
  stroke(255,0,0);
  rotate((second() * 6));
  line(0,-6,0,-120);
  pop();
  
  noStroke();
  fill('white');
  textSize(30);
  textAlign(CENTER);
  for (let i = 1; i <= 12; i++) {
    text(i,
      cos(i * 30 - 90) * 150,
      sin(i * 30 - 90) * 150 
    );
  }
  
}