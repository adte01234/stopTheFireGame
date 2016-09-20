var gameStart = false;

var spawnMobs = true;
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
    
var fireMob = document.createElement('img');
fireMob.src = "Images/fireEnemy2.gif";

var forest1 = true;
var forest2 = true;
var forest3 = true;

fireMob.style.height = '200px';
fireMob.style.width = '200px';

var mobXPos2 = 2000;


var mobYPos2 = 550;
var mobYPos3 = 700;

var randomnizer;
var mobRandomYPos;
var mobStatus2 = 1;
var mobsKilled = 0;
var extraMobsKilled = 0;
var newMobValue = 3000;
var mobFrame2 = 1;

var mobFireArray = [];
var secondsGone = 0;

var baseNewMobSpawnRate = 7.5;
var baseMobMovementRate = 2.5;

var newMobSpawnRate = 7.5;
var mobMovementRate = 2.5;
var flag1 = false;

function timeCounter() {
    secondsGone ++;
    newMobSpawnRate = (baseNewMobSpawnRate + Math.pow(Math.log10(secondsGone-5)), 5);
    mobMovementRate = (baseMobMovementRate + Math.pow(Math.log10(secondsGone-5)), 5);

    if (secondsGone > 6) {
    gameStart = true;
    newMob();
    if(flag1 == false)
    {
        setInterval(moveMob, 15);
        flag1 = true;
    }
}
    
   // extraFireMobMovementSpeed = extraFireMobMovementSpeed * Math.log10(secondsGone);
}

setInterval(timeCounter, 1000);


function newMob() {
    randomnizer = Math.floor(Math.random() * 3) + 1;
    if (randomnizer==1 && forest1)
        {mobRandomYPos = mobYPos1}
    else if (randomnizer==2 && forest2)
        {mobRandomYPos = mobYPos2}
    else if (randomnizer==3 && forest3)
        {mobRandomYPos = mobYPos3}
        
    mobFireArray[mobFireArray.length] = {mobXPos: 2000, mobYPos: mobRandomYPos, mobStatus: mobStatus2, mobFrame: mobFrame2};
}

function moveMob() {
    for(var i = 0; i < mobFireArray.length; i++) {
        if(mobFireArray[i].mobStatus == 1) {
        mobFireArray[i].mobXPos -= mobMovementRate;}
    }
    
    if (newMobValue >= 3000) {
        newMob();
        newMobValue -= 3000;
    }
    newMobValue += newMobSpawnRate;
}

if (secondsGone > 3) {
    gameStart = true;
    newMob();
    setInterval(moveMob, 15);
}




for (var i = 0; i < 75 ; i++)
{    var sourceString = "Images/fireMob/frame_" + i + "_delay-0.02s.gif";
    
    window['fireMob' + i] = document.createElement('img');
    window['fireMob' + i].src = sourceString;
}

var tempFrameString;
var frameString;

function drawMob() {
    for(var i = 0; i < mobFireArray.length; i++) {
        if (mobFireArray[i].mobStatus == 1) {
            
            if (mobFireArray[i].mobFrame > 74)
            {mobFireArray[i].mobFrame = 0;}
            
            tempFrameString = ("fireMob" + mobFireArray[i].mobFrame);
            
            frameString = window[tempFrameString];
            //frameString.style.height = '200px';
            //frameString.style.width = '200px';
            ctx.drawImage(frameString, mobFireArray[i].mobXPos, mobFireArray[i].mobYPos, 150, 150);
            
            mobFireArray[i].mobFrame = 1 + mobFireArray[i].mobFrame;
            
        }
    }
}


