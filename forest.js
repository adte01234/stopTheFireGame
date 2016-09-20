var XposForest = 20;
var YposForest1 = 400;

var ableToBuy = true;

var forestLives = 3;
    
var Image;

var forestWidth = 380;
var forestHeight = 350;

var wall1 = false;
var wall2 = false;
var wall3 = false;


var Forest = new Image();//worthless warnings
Forest.src = "Images/Forest.png";

var Burn = new Image();//worthless warnings
Burn.src = "Images/ForestSlightlyBurnt.png";

var ReallyBurnt = new Image();
ReallyBurnt.src = "Images/ForestFire.png";

var gameOverImage = new Image();
gameOverImage.src = "Images/Gameover.png";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var Ash = new Image();
Ash.src = "Images/Ash.png";

var Trump = new Image();
Trump.src = "Images/Wall.png";

var Gun = new Image();
Gun.src = "Images/WaterTurret.png";

function GameOver()
{context.drawImage(gameOverImage, 150, 50);
abletoBuy = false;
}

function UpdateForest()//Collision detection for forests
{
    
    for (var i = 0; i < mobFireArray.length; i++) 
   {
        if (mobFireArray[i].mobXPos < XposForest + forestWidth)
        {
                    mobFireArray[i].mobStatus = 0;
                    mobFireArray.splice(i, 1);
                   forestLives -= 1;
                   if (forestLives <= 0)
                      {forest1 = false;}
        }
    }
    
    for (var i = 0; i < extraFireMobArray.length; i++) {
            if (extraFireMobArray[i].mobXPos < XposForest + forestWidth)
        {
            extraFireMobArray.splice(i, 1);
            forestLives -= 2;
            if (forestLives <= 0)
                {forest1 = false;}
        }
    }
    
    for (var i = 0; i < speedFireMobArray.length; i++) {
            if (speedFireMobArray[i].mobXPos < XposForest + forestWidth)
        {
            speedFireMobArray.splice(i, 1);
            forestLives -= 2;
            if (forestLives <= 0)
                {forest1 = false;}
        }
    }
    
    forestDraw();
}

function forestDraw() {
    if (forest1 == false/* && forest2 == false && forest3 == false*/)
        {GameOver();
        context.drawImage(Ash,XposForest,YposForest1,forestWidth,forestHeight);
        }
    if (forest1 == true && forestLives == 3)
        {context.drawImage(Forest, XposForest, YposForest1,forestWidth,forestHeight);}
    else if (forest1 == true && forestLives == 2)
        {context.drawImage(Burn,XposForest,YposForest1,forestWidth,forestHeight);}
    else if (forest1 == true && forestLives == 1)
        {context.drawImage(ReallyBurnt,XposForest,YposForest1,forestWidth,forestHeight);}
    /*else if (forest1 == false)
        {context.drawImage(Burn, XposForest, YposForest1,125,115);}
    
    if (forest2 == true)
        {context.drawImage(Forest, XposForest, YposForest2, 125, 115);}
    else if (forest2 == false)
        {context.drawImage(Burn, XposForest, YposForest2, 125, 115);}
    
    if (forest3 == true)
        {context.drawImage(Forest, XposForest, YposForest3, 125, 115);}
    else if (forest3 == false)
        {context.drawImage(Burn, XposForest, YposForest3, 125, 115);}*/
    
}
/*
function ForestDraw()//Detects what forests should be burned and which ones should not be burned
{if (forest1 == true && forest2 == true && forest3 == true)
{   context.drawImage(Forest, XposForest, YposForest1,115,125);
    context.drawImage(Forest, XposForest, YposForest2,115,125);
    context.drawImage(Forest, XposForest, YposForest3,115,125);}

if (forest1 == false && forest2 == true && forest3 == true)
{   context.drawImage(Burn, XposForest, YposForest1,115,125);
    context.drawImage(Forest, XposForest, YposForest2,115,125);
    context.drawImage(Forest, XposForest, YposForest3,115,125);}

if (forest1 == false && forest2 == false && forest3 == true)
{   context.drawImage(Burn, XposForest, YposForest1,115,125);
    context.drawImage(Burn, XposForest, YposForest2,115,125);
    context.drawImage(Forest, XposForest, YposForest3,115,125);}

if (forest1 == false && forest2 == false && forest3 == false)
{   GameOver()}

if (forest1 == false && forest2 == true && forest3 == false)
    {context.drawImage(Burn, XposForest, YposForest1,115,125);
    context.drawImage(Forest, XposForest, YposForest2,115,125);
    context.drawImage(Burn, XposForest, YposForest3,115,125);}
    
if (forest1 == false && forest2 == true && forest3 == false)
    {context.drawImage(Burn, XposForest, YposForest1,115,125);
    context.drawImage(Forest, XposForest, YposForest2,115,125);
    context.drawImage(Burn, XposForest, YposForest3,115,125);}
    
if (forest1 == true && forest2 == true && forest3 == false)
    {context.drawImage(Forest, XposForest, YposForest1,115,125);
    context.drawImage(Forest, XposForest, YposForest2,115,125);
    context.drawImage(Burn, XposForest, YposForest3,115,125);}
    
if (forest1 == false && forest2 == true && forest3 == false)
    {context.drawImage(Burn, XposForest, YposForest1,115,125);
    context.drawImage(Forest, XposForest, YposForest2,115,125);
    context.drawImage(Burn, XposForest, YposForest3,115,125);}
}*/

setInterval(UpdateForest,10);