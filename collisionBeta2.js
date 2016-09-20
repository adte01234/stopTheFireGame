var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
var forestsLeft =3;

var updates = 0; 

var counter = 0; 

canvas.width = 1900
canvas.height = 916;

var x = 300,  //initial x
    y = 500,  // initial y
    velY = 0,
    velX = 0,
    speed = 2, // max speed
    friction = 0.9, // friction
    keys = [];

var background = new Image();
background.src = "Images/background.png";

var player = new Image();
player.src = "Images/Tiny.png";



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
    } else if (x <= 0) {
        x = 0;
    }

    if (y > 780) {
        y = 780;
    } else if (y <= 370) {
        y = 370;
    }

    // do the drawing
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(background,0,0);
    ctx.beginPath();
    drawScore(mobsKilled);
	ctx.drawImage(player, x, y);
	ForestDraw();
	drawMob();
	
    
    
	
	document.onkeydown = function(e) {
    
        counter++; 
        console.log(counter); 
        switch(e.keyCode) {
            case 13: 
                getDropletCoordinates(dropletXCor, dropletYCor); 
                
                waterDroplet = {waterX: dropletXCor, waterY: dropletYCor, status: 1};
                droplets.push(waterDroplet); 
            
                if (droplets.length == 1) { 
                    myInterval = setInterval(shootWaterDroplet, 10);
                }
                break; 
        }
    
	}
    
    
    setTimeout(update, 10);
}

update();

// key events
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});