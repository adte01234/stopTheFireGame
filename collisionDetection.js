var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var dropletDX = 12; 
var dropletRadius = 8; 
var waterDroplet = {waterX: 0, waterY: 0, status: 0};
var droplets = [];
var myInterval;
var bossLife = incr = 3;
var mobLife = 2;
var mobLifev2 = 3;

function shootWaterDroplet() { 
    for (var i = 0; i < droplets.length; i++) {
        droplets[i].waterX += dropletDX; //Moves water droplet
        
        if (droplets[i].waterX > canvas.width) { //Checks to see if the water droplet is past the width of the canvas. 
            droplets[i].status = 0;
            droplets.splice(i, 1);
            
            if (droplets.length == 0) {
                clearInterval(myInterval);
            }
        } else {
            ctx.beginPath();
            ctx.arc(droplets[i].waterX, droplets[i].waterY, dropletRadius, 0, Math.PI * 2);
            ctx.fillStyle = "blue";
            ctx.fill(); 
            ctx.closePath(); 
            }
    } 
}
