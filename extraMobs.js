var canvas = document.getElementById("canvas"),
   ctx = canvas.getContext("2d");


/*
var mobYPos1 = 400;
var mobYPos2 = 550;
var mobYPos3 = 700;
*/
var extraMobRandomYPos;

var newExtraFireMobValue = 0;
var randomnizer2;
var extraFireMobArray = [];

var extraFireMobValue = 0;
var extraFireMobSpawnRate = 3000;
var extraFireMobMovementSpeed = 10;
var extraMobLife = 5;
var rate = 30;


function newExtraFireMob() {
   randomnizer2 = Math.floor(Math.random()*3);
   if (randomnizer2 == 0)
      extraMobRandomYPos = 400;
   else if (randomnizer2 == 1)
      extraMobRandomYPos = 550;
   else if (randomnizer2 == 2)
      extraMobRandomYPos = 700;
      
   extraFireMobArray[extraFireMobArray.length] = {mobXPos: 2000, mobYPos: extraMobRandomYPos, mobFrame: 0, life: extraMobLife};
}



function moveExtraMob() {
   for (var i = 0; i < extraFireMobArray.length; i++) {
      extraFireMobArray[i].mobXPos -= 1;
   }
   
   if (mobsKilled >= rate)
   {
      newExtraFireMob();
      extraFireMobValue -= extraFireMobSpawnRate;
	  rate+=30;
   }
   
   extraFireMobValue += 1; 
}


setInterval(moveExtraMob, extraFireMobMovementSpeed);


for (var i = 0; i<75 ; i++)
{
   var sourceStringExtra = "Images/extraFireMob/frame_" + i + "_delay-0.02s.gif";
    
    window['extraMob' + i] = document.createElement('img');
    window['extraMob' + i].src = sourceStringExtra;
}



var extraTempFrameString;
var extraFrameString;

function drawExtraMob() {
    for(var i = 0; i < extraFireMobArray.length; i++) {

            if (extraFireMobArray[i].mobFrame > 74)
            {extraFireMobArray[i].mobFrame = 0;}
            
            extraTempFrameString = ("extraMob" + extraFireMobArray[i].mobFrame);
            
            extraFrameString = window[extraTempFrameString];
            ctx.drawImage(extraFrameString, extraFireMobArray[i].mobXPos, extraFireMobArray[i].mobYPos-50, 250, 250);
            
            extraFireMobArray[i].mobFrame = 1 + extraFireMobArray[i].mobFrame;
            
        
    }
}
