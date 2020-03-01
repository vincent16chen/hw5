var musicSound;
var stopSound;
var nextSound; 
var img1
var img2


function preload() {
  soundFormats("mp3");
  musicSound = loadSound("IzoneFiesta.mp3");
  stopSound = loadSound("pop.mp3");
  nextSound = loadSound("Psycho.mp3");
  img1 = loadImage("FIESTA.jpg");
  img2 = loadImage("Psycho.jpg");
}

function setup() {
  createCanvas(600, 600);
  frameRate(10);
}


function cdPlayer(){
  fill(200);
  ellipse(300, 300, 480, 480);
  stroke(100);
  
  fill(100);
  ellipse(300, 180, 210, 85);
}

function cdWindow(){
  ellipse(300, 180, 200, 80);
}

function cdPlayerBase(){
  ellipse(300, 300, 520, 520);
}


function draw() {
  background(250, 250, 250, 40);
  noStroke();
  fill(random(255), random(255), random(255));
  rect(random(width), random(height), random(width), random(height));
  circle(random(width), random(height), random(50, 100));
  fill(180);
  cdPlayerBase(300,300);
  cdPlayer(300, 300);
  fill(255)
  cdWindow(300, 180);
 
  
  
//"Play" button
  //inteaction
  if (mouseIsPressed && mouseX > 275 && mouseX < 325 && mouseY > 475 && mouseY < 525) {
    fill(5)
    image(img1, 250, 160, 100, 30);
  }
  //button color
  else {
    fill(255);
    
  }
  
  //button shape
  noStroke()
  circle(300, 500, 50);
  //"play" icon
  fill(50)
  triangle(290, 485, 315, 500, 290, 515);
  
  
//"Next" button
  //interaction
  if (mouseIsPressed && mouseX > 335 && mouseX < 385 && mouseY > 465 && mouseY < 515) {
    fill(5); 
    image(img2, 240, 160, 120, 30);
  }
  //button color
  else {
    fill(255);
  }
 
  //button shape
  noStroke()
  circle(360, 490, 50);
  //"next" icon
  fill(50)
  triangle(347.5, 475.5, 367.5, 490.5, 347.5, 505.5);
  triangle(360, 475.5, 380, 490.5, 360, 505.5);
  
//"Stop" bitton
  //interaction
  if (mouseIsPressed && mouseX > 215 && mouseX < 265 && mouseY > 465 && mouseY < 515) {
    fill(5);
  }
  //button color
  else {
    fill(255);
  }
  
  //button shape
  noStroke()
  circle(240, 490, 50);
  //"stop" icon
  fill(50)
  rect(227.5, 477.5, 25, 25);
  
}

function mousePressed() {
  
  //"Play" button_Fiesta
  if (mouseX > 275 && mouseX < 325 && mouseY > 475 && mouseY < 525) {
    musicSound.play();
    nextSound.stop();
    background(250, 175, 50);
    noStroke();
    fill(250, 175, 50);
    cdPlayerBase(300,300);
    cdPlayer(300, 300);
    fill(250, 175, 50);
    cdWindow(300, 180);
    loop()
  
    
  }
  
  //"Next" button_Psycho  
  if (mouseX > 335 && mouseX < 385 && mouseY > 465 && mouseY < 515) {
    musicSound.stop();
    nextSound.play();
    background(50, 100, 50);
    noStroke();
    fill(50, 100, 50);
    cdPlayerBase(300,300);
    cdPlayer(300, 300);
    fill(50, 100, 50);
    cdWindow(300, 180);
    loop()
   }
  
  if (mouseX > 215 && mouseX < 265 && mouseY > 465 && mouseY < 515) {
    fill(5);
    musicSound.stop();
    nextSound.stop(); 
    background(255);
    fill(255);
    cdWindow(300, 180);
    noLoop()
  }
}
  
