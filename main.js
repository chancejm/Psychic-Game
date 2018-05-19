var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// variables used 
var wins = 0;
var losses = 0;
var chance = 9;
var guesses = [];
var computerGuess = "";
var userGuess = "";

var reset = function () {
    document.getElementById('win').innerHTML = + wins;
    document.getElementById('lose').innerHTML = losses;
    document.getElementById('guesses').innerHTML = chance;
    document.getElementById('userguessed').innerHTML = '__ __ __ __ __ __ __ __ __';
}

reset();


computerGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeypress = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    guesses.push(" " + userGuess);
    document.getElementById("userguessed").innerHTML = guesses;


    if (userGuess === computerGuess) {
        document.getElementById('message').innerHTML = 'Are you a real psychic?!?!?';
        wins++;
        document.getElementById('win').innerHTML = wins;
        guesses = [];
        chance = 9;
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        reset();
        alert("The letter " + computerGuess + " is correct!!! You may be a psychic! Try Again?");

    } else {
        chance--;                      
        if (chance === 0) {
            document.getElementById('message').innerHTML = 'Sorry friend, Try Again?';
            losses++;                   
            guesses = [];
            chance = 9;
            computerGuess = letters[Math.floor(Math.random() * letters.length)];
            reset();
            alert('Sorry I was thinking of the letter ' + computerGuess + ". You may not be a psychic. Try Again?");
        }

    }

    document.getElementById("lose").innerHTML = losses; 
    document.getElementById("guesses").innerHTML = chance;
    

}


























//document.onkeypress = function(event) {
  //  var node = document.createElement('li');
    //var textnode = document.createTextNode(event.key + );
    //node.appendChild(textnode);

    //document.getElementById("test").appendChild(node);
    
//}