
var dropletDX = 5; 

var dropletRadius = 8; 
var dropletXCor; 
var dropletYCor; 

var size = 0; 

var droplets = []; 


var waterDroplet = {waterX: 0, waterY: 0, status: 0};
//Shoots water droplets

 
var myInterval; 
var shotWait;  

var lastDroplet; 

function shootWaterDroplet() {
    updates++;
    
    console.log(updates + " > " + 100 + "\n" + size + " < " + counter); 
    if (updates > 100) {
        if (size < counter) {
            size++;
            counter = 0; 
        }
        updates = 0; 
    }
    
   
    for (var i = 0; i < size; i++) {
        moveDroplet(i, dropletDX) //Moves water droplet
        
        if (droplets[i].waterX > canvas.width) { //Checks to see if the water droplet is past the width of the canvas. 
            droplets[i].status = 0;
            droplets.pop(i);
            i--; 
            size--;  
            
            if (droplets.length == 0) {
                clearInterval(myInterval);  
            }
        }
    
        ctx.beginPath();
        ctx.arc(droplets[i].waterX, droplets[i].waterY, dropletRadius, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill(); 
        ctx.closePath(); 
            

            //killMob(); 
    }
    
}

function moveDroplet(i, DX) {
    droplets[i].waterX += DX; 
}

function getDropletCoordinates(xCor, yCor) {
        xCor = x + velX + 10; 
        yCor = y + velY + 60;
}









function killMob() {
    for (var i = 0; i < mobFireArray.length; i++) {
        for (var b = 0; b < droplets.length; b++) {
            if (droplets[b].waterX > mobFireArray[i].mobXPos && droplets[b].waterY + (dropletRadius / 2) > mobFireArray[i].mobXPos) {
                mobFireArray[i].status = 0; 
                droplets[i].status = 0; 
            }
        }
    }
}




// Note from Adrian: If a fireMob hits a forest. The variable forestsLeft is decreased by 1. When it hit 0, the game is finished.
// Another note: When a mob is killed. Add 1 to mobsKilled.
