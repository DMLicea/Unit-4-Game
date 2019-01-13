$(document).ready(function() {

  //variables

var wins = 0;
var loses = 0;
var yourScore = 0;
var yourWins = document.getElementById("wins");
var yourLoses = document.getElementById("loses");
var button1 = Math.floor(Math.random() * 12+1);
var button2 = Math.floor(Math.random() * 12+1);
var button3 = Math.floor(Math.random() * 12+1);
var button4 = Math.floor(Math.random() * 12+1);
var randomNum = Math.floor(Math.random() * 120+19);

// logs

console.log(yourWins)
console.log(yourLoses)
console.log(wins)
console.log(loses)
console.log(button1)
console.log(button2)
console.log(button3)
console.log(button4)
console.log(randomNum)
console.log(yourScore)

//text in html (locates the span id and assign text based on the variable)

$('#wins').text(wins);
$('#loses').text(loses);
$('#yourScore').text(yourScore);
$('#randomNum').text(randomNum);



//buttons 
// (.on Method, on click runs a function that updates your score and updates the score text[see above], runs play)

$("#oneG").on("click", function() {

    yourScore = yourScore + button1;
    $('#yourScore').text(yourScore); 
    play()
  });


  $("#twoG").on("click", function() {

    yourScore = yourScore + button2;
    $('#yourScore').text(yourScore); 
    play()
  });
 
  $("#threeG").on("click", function() {

    yourScore = yourScore + button3;
    $('#yourScore').text(yourScore);
    play()
  });

  $("#fourG").on("click", function() {

    yourScore = yourScore + button4;
    $('#yourScore').text(yourScore);
    play()
  });


  // winlose
  // if statements (if your score is equal, you win, if it's too high, you lose)
  // either way newGame runs

  var play = function () {
  if (yourScore === randomNum)
  {
    wins++;
    $("#wins").text(wins);
    newGame();}

  if (yourScore > randomNum)
  {loses++;
    $("#loses").text(loses);
    newGame();} 


// logs

console.clear()
console.log("yourWins",yourWins)
console.log("YourLost",yourLoses)
console.log("wins",wins)
console.log("loses",loses)
console.log("randomNum",randomNum)
console.log("yourScore",yourScore)

  
  }

//functions reset
//varaibles reset


function newGame(){
yourScore = 0;
button1 = Math.floor(Math.random() * 12+1);
button2 = Math.floor(Math.random() * 12+1);
button3 = Math.floor(Math.random() * 12+1);
button4 = Math.floor(Math.random() * 12+1);
randomNum = Math.floor(Math.random() * 120+19);

$('#yourScore').text(yourScore);
$('#randomNum').text(randomNum);

}






});

//end

/* Gem Game Pseudocode
* The player is shown a number
* Each of the buttons gets randomly assigned a number that the player does not see
* Each time you click, the value is added to your score
* If you match the score, you win.
* If your score reaches a number higher than the random number, you lose.
The game restarts whenever the player wins or loses.

* When the game begins again, the player should see a new random number. 
* Also, all the crystals will have four new hidden values. 
* Of course, the user's score (and score counter) will reset to zero.
*The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
*/
