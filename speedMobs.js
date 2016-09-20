
var speedMobRandomYPos;

var newSpeedFireMobValue = 0;
var randomnizer2;
var speedFireMobArray = [];

var speedFireMobValue = 0;
var speedFireMobSpawnRate = 3000;
var speedFireMobMovementSpeed = 10;
var speedRate = 1;
var speedMobLife = 10;
var speedMobsKilled = 0;
var speedMobSpeed = 5;


function newSpeedFireMob() {
   randomnizer2 = Math.floor(Math.random()*3);
   if (randomnizer2 == 0)
      speedMobRandomYPos = 400;
   else if (randomnizer2 == 1)
      speedMobRandomYPos = 550;
   else if (randomnizer2 == 2)
      speedMobRandomYPos = 700;
      
   speedFireMobArray[speedFireMobArray.length] = {mobXPos: 2000, mobYPos: speedMobRandomYPos, mobFrame: 0, life: speedMobLife};
}



function moveSpeedMob() {
   for (var i = 0; i < speedFireMobArray.length; i++) {
      speedFireMobArray[i].mobXPos -= speedMobSpeed;
   }
   
   if (mobsKilled >= speedRate)
   {
      newSpeedFireMob();
      speedFireMobValue -= speedFireMobSpawnRate;
	  speedRate += 5;
   }
 }


setInterval(moveSpeedMob, speedFireMobMovementSpeed);


for (var i = 0; i<75 ; i++)
{
   var sourceStringSpeed = "Images/speedFireMob/frame_" + i + "_delay-0.02s.gif";
    
    window['speedMob' + i] = document.createElement('img');
    window['speedMob' + i].src = sourceStringSpeed;
}



var speedTempFrameString;
var speedFrameString;

function drawSpeedMob() {
    for(var i = 0; i < speedFireMobArray.length; i++) {

            if (speedFireMobArray[i].mobFrame > 74)
            {speedFireMobArray[i].mobFrame = 0;}
            
            speedTempFrameString = ("speedMob" + speedFireMobArray[i].mobFrame);
            
            speedFrameString = window[speedTempFrameString];
            ctx.drawImage(speedFrameString, speedFireMobArray[i].mobXPos, speedFireMobArray[i].mobYPos, 125, 125);
            
            speedFireMobArray[i].mobFrame = 1 + speedFireMobArray[i].mobFrame;
            
        
    }
}
