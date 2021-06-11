var rocket1, rocket1Img,rocket2Img
var track,track1
var obstacles, obstacleImg1,obstacleImg2,obstacleImg3;
var altitude = 0;

function preload(){
    rocket1Img = loadImage("Images/Rocket1.png");
    rocket2Img = loadImage("Images/rocket2.png");
    track = loadImage("Images/Track.jpg");
    obstacleImg3 = loadImage("Images/Satallite1.png");
    obstacleImg2 = loadImage("Images/Satallite 4.png");
    obstacleImg1 = loadImage("Images/Astroid.png");
}

function setup(){
 createCanvas(400,1000);
 track1 = createSprite(200,-2473,800,2000);
    track1.addImage(track)

 rocket1 = createSprite(250,750,10,10)
   rocket1.addImage(rocket1Img)
}

function draw(){
    background("red")
    camera.x = 200;
    camera.y =  
  
    console.log(altitude)
    if(keyCode === 24){
        altitude+=1;
    }

    if (altitude<4) {
       rocket1 = changeImage(rocket2Img) 
    }
  drawSprites()
}