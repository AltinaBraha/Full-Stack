var nrSelect = document.getElementById('nrSelect');
var btnGuess = document.getElementById('btnGuess');

var count = 1;

var guessNumber = false;

btnGuess.onclick = function (){
    count = 1;
    guessNumber = false;

    while(guessNumber == false){
        var random = Math.floor(Math.random()*6);

        console.log(random)

        if(nrSelect.value == random){
            guessNumber = true;
            console.log("Guessed within : " + count + "times");

        }
        else{
            count= count + 1;//me marrme live server
        }
    }
    
}



/*var circle = document.getElementById("circle");
var showTime = document.getElementById("time");
var timeStart = new Date().getTime();
var number = 11; 
var guessCount = 0; 
var generatedNumbers = []; 

function generateRandomNumber() {
    return Math.floor(Math.random() * 30) + 1; 
}

function guessNumber() {
    let randomNumber;
    do {
        randomNumber = generateRandomNumber();
        generatedNumbers.push(randomNumber); 
        guessCount++;
    } while (randomNumber !== number);

    return guessCount;
}

function showCircle(){
    circle.style.display = 'block';
    
    circle.style.top = Math.random() * 500 + 'px';
    circle.style.left = Math.random() * 900 + 'px';
    circle.style.backgroundColor = randomColor();
}

showCircle();

circle.onclick = function(){
    circle.style.display = 'none';
    setTimeout(showCircle, 1000);
    
    var timeEnd = new Date().getTime();
    var time = (timeEnd - timeStart) / 1000;
    showTime.innerHTML = `Time: ${time}s`;
    
    generatedNumbers = []; 
    var guesses = guessNumber();
    
    showTime.innerHTML += "<br>It took " + guesses + " guesses to hit the number " + number + "!";
    showTime.innerHTML += "<br>Generated numbers: " + generatedNumbers.join(', ');
}

function randomColor(){
    var s = '0123456789ABCDEF';
    var color = '#';

    for(var i = 0; i < 6; i++){
        color += s[Math.floor(Math.random() * 16)];
    }
    return color;
}*/
