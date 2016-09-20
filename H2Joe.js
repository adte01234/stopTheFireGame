for (var i = 0; i < 16; i++) {
   var sourceStringJoe = "Images/WalkingAnimation/H2JoeWalk" + (i+4) + ".png";
   window['joe' + i] = document.createElement('img');
   window['joe' + i].src = sourceStringJoe;
}

var joeFrame = 0;
var tempJoeFrame;

function drawJoe(x, y) {
   if (joeFrame >= 15)
   {joeFrame = 0}
   
   tempJoeFrame = "joe" + Math.floor(joeFrame);
   var tempJoeFrame2 = window[tempJoeFrame]
   ctx.drawImage(tempJoeFrame2, x, y, 150, 150);
   joeFrame += 0.3;
}
