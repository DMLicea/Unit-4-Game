# unit-4-game

* Crystal Collector is a project meant to test the coder's knowledge of Javascript, particularly jQuery. 

* Crystal Collector takes the form of a game the user can play in their browser. 

* Each time you open the game, the user is also given a random number between 19 and 120.

* There are four buttons, each labeled with a different gem. Each of these buttons is assigned a numberical value between 1 and 12- but unlike the random number, the user can not see this value.

* The user is also given a score that always starts at 0. Each time you click one of the buttons, the user's score will increase by an amount that corresponds to the value assigned to that button. 

* The goal of the game is to try to figure out how to make your score match the random number. Whether the user wins (by making their score exactly equal to the random number) or loses (by making their score higher than the random number), the game will reset afterwards.

* I started by getting all my variables down. To get random values for the buttons, i used the Math.random function with the Math.floor function to make sure all numbers would be whole, and then set it to only get numbers between 1 and 12. I used the same code for the random number, just with a different range.

* The user's score had to increase in a way visible to the user. The same applied to the random number and the amount of wins and loses. I used the .text method in ocnjuction with <span> tags for this to create dynamically updating numbers.

* Each button had an id assigned to it so i could assign a  .on method that activated on a click. This would update the score and run the play() function.

* The play() function checks if the score is equal or higher than the random number. If it finds either of those specifications to be true, it updates either the win or loss counter and runs the newGame function.

* The newGame() function resets all the variables (apart from wins and loses) so the user can start a new game.

* https://dmlicea.github.io/Unit-4-Game/
