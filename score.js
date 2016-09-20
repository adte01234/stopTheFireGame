var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var number0 = document.createElement('img');
number0.src = "Images/Numbers/0.png";

var number1 = document.createElement('img');
number1.src = "Images/Numbers/1.png";

var number2 = document.createElement('img');
number2.src = "Images/Numbers/2.png";

var number3 = document.createElement('img');
number3.src = "Images/Numbers/3.png";

var number4 = document.createElement('img');
number4.src = "Images/Numbers/4.png";

var number5 = document.createElement('img');
number5.src = "Images/Numbers/5.png";

var number6 = document.createElement('img');
number6.src = "Images/Numbers/6.png";

var number7 = document.createElement('img');
number7.src = "Images/Numbers/7.png";

var number8 = document.createElement('img');
number8.src = "Images/Numbers/8.png";

var number9 = document.createElement('img');
number9.src = "Images/Numbers/9.png";

var numberToDisplay;
var displayNumber;

var scoreThingy;
var scoreDigits;
var digitPlace;
var scoreX;
var scoreY;
var score;
var log2;
var scoreToDisplay;
var scoreForFunction;

function drawScore(scoreToDisplay) {
    
    if (scoreToDisplay == 0)
        {log2 = 0;}
    else {log2 = Math.log10(scoreToDisplay);}
    scoreDigits = (Math.floor(log2) + 1);
    scoreX = 50;
    scoreY = 50;
    score = scoreToDisplay;
	digitPlace = scoreDigits;
	
    for (var i = 0; i < scoreDigits; i++) {
        var temporaryNumber2 = Math.pow(10, (scoreDigits - (i+1)));
        var temporaryNumber = score/temporaryNumber2;
        numberToDisplay = Math.floor(temporaryNumber);
        switch (numberToDisplay) {
            case 0:
                scoreThingy = 0;
                break;
            case 1:
                scoreThingy = 1;
                break;
            case 2:
                scoreThingy = 2;
                break;
            case 3:
                scoreThingy = 3;
				break;
            case 4:
                scoreThingy = 4;
                break;
            case 5:
                scoreThingy = 5;
                break;
            case 6:
                scoreThingy = 6;
                break;
            case 7:
                scoreThingy = 7;
                break;
            case 8:
                scoreThingy = 8;
                break;
            case 9:
                scoreThingy = 9;
                break;
            default:
                alert("Error with Score. Talk to Adrian");
        }
		
		
        displayNumber = "number" + scoreThingy;
        if (scoreToDisplay < 0) {displayNumber = "number0";}
        ctx.drawImage(window[displayNumber], (scoreX + i*100), (scoreY));
        score -= (scoreThingy*temporaryNumber2);
		digitPlace -= 1;
		
		
    }
    
}
