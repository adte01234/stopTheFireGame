var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
var forestsLeft =3;
var drawBullets = false;
var waitForNextShot = false;  
var locked = false; 
canvas.width = 1900;
canvas.height = 916;

var mobsScore = 0;
var XposWall = 500;

var Song = new Audio("MainTheme.mp3");

Song.play();

var johnCena = new Audio("John Cena - AND HIS NAME IS JOHN CENA.mp3"); 

var x= 500;  //initial x
var y= 500;  // initial y
var velY= 0;
var velX= 0;
var speed= 8; // max speed
var friction= 0.9; // friction
var keys= [];
var powerup = [];

var background = document.createElement('img');
background.src = "Images/background.png";

var player = document.createElement('img');
player.src = "Images/Tiny.png";

var wallY1 = 400;
var wallY2 = 550;
var wallY3 = 700;

var upgradeTotalCost = 0;

var turret1 = false;
var turret2 = false;
var turret3 = false;

var wall1 = false;
var wall2 = false;
var wall3 = false;

var Trump = new Image();
Trump.src = "Images/WaterTurret.png";

var Gun = new Image();
Gun.src = "Images/WaterTurret.png";

var XposTurret = XposWall - 15;

var XposWall = 450;
var ammunition = INITIAL_AMMUNITION = 20;

var droppedDroplet = {dropletX: 0, dropletY: 0, status: 0}; 
var droppedDroplets = []; 

var playerXCor; 
var playerYCor; 

var songPlaying = true; 
function Wall()//this function is used for building walls
{
    if (wall1 == true)
    {ctx.drawImage(Trump,XposWall,wallY1,125,115)}
    if (wall2 == true)
    {ctx.drawImage(Trump,XposWall,wallY2,125,115)}
    if (wall3 == true)
    {ctx.drawImage(Trump,XposWall,wallY3,125,115)}
    
    for (var j = 0; j < mobFireArray.length; j++)
    {
        
        if (mobFireArray[j].mobXPos < XposWall && mobFireArray[j].mobYPos == wallY1 && wall1)
        {   mobFireArray.splice(j, 1);
            wall1 = false;
           
        }
        
        if (mobFireArray[j].mobXPos < XposWall && mobFireArray[j].mobYPos == wallY2 && wall2)
        {   mobFireArray.splice(j, 1);
            wall2 = false;
        }
        
        if (mobFireArray[j].mobXPos < XposWall && mobFireArray[j].mobYPos == wallY3 && wall3)
        {   mobFireArray.splice(j, 1);
            wall3 = false;
        }
    }
    
    for (var l = 0; l < speedFireMobArray.length; l++)
    {
        
        if (speedFireMobArray[l].mobXPos < XposTurret && speedFireMobArray[l].mobYPos == wallY1 && turret1)
        {   speedFireMobArray.splice(l, 1);
            turret1 = false;
            
        }
        
        if (speedFireMobArray[l].mobXPos < XposTurret && speedFireMobArray[l].mobYPos == wallY2 && turret2)
        {   speedFireMobArray.splice(l, 1);
            turret2 = false;
        }
        
        if (speedFireMobArray[l].mobXPos < XposTurret && speedFireMobArray[l].mobYPos == wallY3 && turret3)
        {   speedFireMobArray.splice(l, 1);
            turret3 = false;
        }
    }
    
}

function Turret()//this function is used for building walls
{
    if (turret1 == true)
    {ctx.drawImage(Gun,XposTurret,wallY1,125,115)}
    if (turret2 == true)
    {ctx.drawImage(Gun,XposTurret,wallY2,125,115)}
    if (turret3 == true)
    {ctx.drawImage(Gun,XposTurret,wallY3,125,115)}
    
    for (var j = 0; j < mobFireArray.length; j++)
    {
        
        if (mobFireArray[j].mobXPos < XposTurret && mobFireArray[j].mobYPos == wallY1 && turret1)
        {   mobFireArray.splice(j, 1);
            turret1 = false;
            
        }
        
        if (mobFireArray[j].mobXPos < XposTurret && mobFireArray[j].mobYPos == wallY2 && turret2)
        {   mobFireArray.splice(j, 1);
            turret2 = false;
        }
        
        if (mobFireArray[j].mobXPos < XposTurret && mobFireArray[j].mobYPos == wallY3 && turret3)
        {   mobFireArray.splice(j, 1);
            turret3 = false;
        }
    }
    
    for (var l = 0; l < speedFireMobArray.length; l++)
    {
        
        if (speedFireMobArray[l].mobXPos < XposTurret && speedFireMobArray[l].mobYPos == wallY1 && turret1)
        {   speedFireMobArray.splice(l, 1);
            turret1 = false;
            
        }
        
        if (speedFireMobArray[l].mobXPos < XposTurret && speedFireMobArray[l].mobYPos == wallY2 && turret2)
        {   speedFireMobArray.splice(l, 1);
            turret2 = false;
        }
        
        if (speedFireMobArray[l].mobXPos < XposTurret && speedFireMobArray[l].mobYPos == wallY3 && turret3)
        {   mobFireArray.splice(l, 1);
            turret3 = false;
        }
    }
    
}


function Shop()
{
    // ZXC for the first second and third water turret
    //123 for the first second and third wall
    
    if (scoreForFunction >= 50 && ableToBuy != false) {
        
   
    if (keys[49] && wall1 != true) {
        upgradeTotalCost += 50;
        wall1 = true;
        mobsScore -= 50;
       
    }
    else if (keys[50] && wall2 != true) 
        upgradeTotalCost += 50;
        wall2 = true;
        mobsScore -= 50;
       
    }
    else if (keys[51] && wall3 != true)
    {
        upgradeTotalCost += 50;
        wall3 = true;
        mobsScore -= 50;
       
    }
    
    if (keys[90] && turret1 != true) {
        upgradeTotalCost += 50;
        turret1 = true;
        mobsScore -= 50;
       
    }
    else if (keys[88] && turret2 != true) {
        upgradeTotalCost += 50;
        turret2= true;
        mobsScore-= 50;
        
    }
    else if (keys[67] && turret3 != true)
    {
        upgradeTotalCost += 50;
        turret3 = true;
        mobsScore -= 50;
        
    }
}

function update() {
    
    
    // check the keys and do the movement.
    if (keys[38]) {
        if (velY > -speed) {
            velY--;
        }
    }

    if (keys[40]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[39]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[37]) {
        if (velX > -speed) {
            velX--;
        }
    }

    // apply some friction to y velocity.
    velY *= friction;
    y += velY;

    // apply some friction to x velocity.
    velX *= friction;
    x += velX;

    // bounds checking
    if (x >= 1820) {
        x = 1820;
    } else if (x <= 400) {
        x = 400;
    }

    if (y > 700) {
        y = 700;
    } else if (y <= 370) {
        y = 370;
    }

    // do the drawing
   mobsScore = (mobsKilled*10 + extraMobsKilled*20);
   scoreForFunction = mobsScore - upgradeTotalCost;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(background,0,0,1900,1200);
	//ctx.drawImage(player, x, y);
	drawJoe(x, y);
	Shop();
	Wall();
	Turret();
	var mobsScore = (mobsKilled*10 + extraMobsKilled*30 + speedMobsKilled*15);
	var scoreForFunction = (mobsScore - upgradeTotalCost);
    drawScore(scoreForFunction);
    
	forestDraw();
	if (gameStart) {
	drawMob();
	}
	if (extraFireMobArray.length > 0) {
	drawExtraMob();  
	}
	if (speedFireMobArray.length > 0) {
	    drawSpeedMob();
	    
	}
	dropADroplet(); 
	killMob(); 
	gatherBullets(); 
	
	if (ammunition > 0) {
        displayText("Ammo: " + ammunition, canvas.width - 500, 100);
        if (ammunition > 0 && ammunition <= 15) {
            displayText("LOW AMMO!!", canvas.width - 500, 200); 
        }
        
        if (ammunition > 0  && ammunition >= 100) {
            displayText("KEEP WRECKING!!!", canvas.width - 500, 200); 
        }
        
        if (ammunition > 0 && ammunition >= 200) {
            displayText("", canvas.width - 500, 200); 
        }
    }
    
    
    if (mobsKilled < 110 && mobsKilled > 100 || mobsKilled < 410 && mobsKilled > 400 || mobsKilled < 810 && mobsKilled > 800) {
        johnCena.play(); 
        songPlaying = false; 
    }
	//Displays the number of remaining bullets
	//Shoots water droplets, prevents spam
    shootingHandler(); 
}
setInterval(update, 10);
update();

function dropADroplet() {
    for (var i = 0; i < droppedDroplets.length; i++) {
        if (droppedDroplets[i].status == 1) {
            ctx.beginPath();
            ctx.arc(droppedDroplets[i].dropletX, droppedDroplets[i].dropletY, dropletRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#FB2C1B";
            ctx.fill(); 
            ctx.closePath();
        }
    }    
}

function shootingHandler() {
	//Displays bullets left
	displayText("Ammo: " + ammunition, canvas.width - 500, 100);
	
    gatherBullets(); 
	if(drawBullets) {
        shootWaterDroplet();
	}
    if (locked) {
        return;
    }
    

    locked = true; 
    if (keys[83] && ammunition > 0 && keys[107] && ammunition > 0) {
        ammunition--;
        drawBullets = true;
        dropletXCor = x + velX + 55; 
        dropletYCor = y + velY + 78;
        addDroplet(dropletXCor, dropletYCor, 1);
    }
    setTimeout(function(){ locked = false;},200);    
}

function addDroplet(xCor, yCor, statusNum) {
    waterDroplet = {waterX: xCor, waterY: yCor, status: statusNum}
    droplets.push(waterDroplet);
    if (droplets.length == 1) {
        drawBullets = true;
    }
}

function displayText(text, xCor, yCor) { 
    ctx.font = "50px Impact";
    ctx.fillStyle='#FB2C1B';
    ctx.fillText(text,xCor,yCor);
}

function gatherBullets() {
    playerXCor = x + velX;
    playerYCor = y + velY;
    
    for (var i = 0; i < droppedDroplets.length; i++) {
        if (droppedDroplets[i].dropletX > playerXCor && droppedDroplets[i].dropletX < playerXCor + 150 && droppedDroplets[i].dropletY > playerYCor && droppedDroplets[i].dropletY < playerYCor + 150) {
            
            droppedDroplets[i].status = 0;
            droppedDroplets.splice(i, 1);
            
            ammunition += 2; 
        }
    }
}

function killMob() {
    for (var i = 0; i < mobFireArray.length; i++) {
        for (var b = 0; b < droplets.length; b++) {
			if(mobsKilled <= 150){
            if (droplets[b].waterX + dropletRadius > mobFireArray[i].mobXPos + 15 && droplets[b].waterY > mobFireArray[i].mobYPos && droplets[b].waterY < mobFireArray[i].mobYPos + 150) {
                mobsKilled++;
            
                
                mobFireArray[i].status = 0;
                mobFireArray.splice(i, 1);
                
                droppedDroplet = {dropletX: droplets[b].waterX, dropletY: droplets[b].waterY, status: 1};
                droppedDroplets.push(droppedDroplet);
 
                droplets[b].status = 0;
                droplets.splice(b, 1);
                
			}
            }
			else if((150 < mobsKilled) && (mobsKilled <= 300)){
				if (droplets[b].waterX + dropletRadius > mobFireArray[i].mobXPos + 15 && droplets[b].waterY > mobFireArray[i].mobYPos && droplets[b].waterY < mobFireArray[i].mobYPos + 150) {
                mobsKilled++;
				mobLife--;
                
                droppedDroplet = {dropletX: droplets[b].waterX, dropletY: droplets[b].waterY, status: 1};
                droppedDroplets.push(droppedDroplet);
                dropADroplet();
                
				if(mobLife<=0){
                mobFireArray[i].status = 0;
                mobFireArray.splice(i, 1);
				mobLife = 2;
				}
 
                droplets[b].status = 0;
                droplets.splice(b, 1);
                
			}
            }
			else if(300 < mobsKilled){
				if (droplets[b].waterX + dropletRadius > mobFireArray[i].mobXPos + 15 && droplets[b].waterY > mobFireArray[i].mobYPos && droplets[b].waterY < mobFireArray[i].mobYPos + 150) {
                mobsKilled++;
				mobLifev2--;
                
                droppedDroplet = {dropletX: droplets[b].waterX, dropletY: droplets[b].waterY, status: 1};
                droppedDroplets.push(droppedDroplet);
                dropADroplet();
                
				if(mobLifev2<=0){
                mobFireArray[i].status = 0;
                mobFireArray.splice(i, 1);
				mobLifev2 = 3;
				}
 
                droplets[b].status = 0;
                droplets.splice(b, 1);
                
			}
            }
        }
    }
    
    for (var i = 0; i< extraFireMobArray.length; i++) {
        for (var b = 0; b < droplets.length; b++) {
            if (droplets[b].waterX + dropletRadius > extraFireMobArray[i].mobXPos + 15 && droplets[b].waterY > extraFireMobArray[i].mobYPos + 25 && droplets[b].waterY < extraFireMobArray[i].mobYPos + 250) {
                mobsKilled++;
                bossLife--;
                
                if(bossLife <= 0){
                    extraFireMobArray[i].status = 0;
                    extraFireMobArray.splice(i, 1);
					if(incr <= 11){
                    bossLife = incr+2;
					incr = incr+2;
					}
					else{
					bossLife = 11;
					}
                }
                
                droplets[b].status = 0;
                droplets.splice(b, 1);
        
            }    
        }   
    }
    
    
    for (var i = 0; i < speedFireMobArray.length; i++){
		for (var b = 0; b < droplets.length; b++) {
			            if (droplets[b].waterX + dropletRadius > speedFireMobArray[i].mobXPos + 15 && droplets[b].waterY > speedFireMobArray[i].mobYPos && droplets[b].waterY < speedFireMobArray[i].mobYPos + 150) {
							console.log(speedFireMobArray[i].mobXPos);
                			speedMobsKilled++;

							droppedDroplet = {dropletX: droplets[b].waterX, dropletY: droplets[b].waterY, status: 1};
							droppedDroplets.push(droppedDroplet);
							dropADroplet();
							
							speedFireMobArray.splice(i, 1); 
							droplets[b].status = 0;
                			droplets.splice(b, 1);
            }
			
		}
	}
    
    
}


// key events
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

