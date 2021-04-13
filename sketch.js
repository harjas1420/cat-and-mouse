var bgImg , cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    catImg1 = loadAnimation("cat2.png , cat3.png , cat4.png");
    mouseImg = loadImage("mouse1.png");
    mouseImg1 = loadAnimation("mouse2.png ,mouse3.png, mouse4.png");



}

function setup(){
    createCanvas(1000,800); 
    //create tom and jerry sprites here
   cat = createSprite(200,200,20,20);
   cat.addImage(catImg);
   mouse = createSprite(250,200,20,20);
   mouse.addImage(mouseImg);

}

function draw() {
     //Write condition here to evalute if tom and jerry collide

    background(255);
    
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2){

    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

  if(keyPressed === LEFT_ARROW){
   mouse.addAnimation("mouseTeasing" , mouseImg1)
   mouse.changeAnimation("mouseTeasing")
  }

  if(keyPressed === RIGHT_ARROW){
    cat.addAnimation("catChasing" , catImg1)
    cat.changeAnimation("catChasing")
   }
 
}
