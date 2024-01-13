/*
 1. Design UI
    - Draw a picture
    - Determine where you will display feedback. 
    - Determine what is clickable, what will recieve key input, change input
      timers, scroll events, etc
    - rough in the elements in HTML, style is less important

*/

/*
  2. Declare variables: DOM hooks
    - In the Javascript, create variables for each of the DOM elements that will display feedback
    - create variables for the elements that will receive input
    - set each variable to its DOM element like:
*/
var winsEl = document.querySelector(".scoreboard__score__value--wins");
var lossesEl = document.querySelector(".scoreboard__score__value--losses");
var timerEl = document.querySelector(".gameboard__timer");
var startGameButtonEl = document.querySelector(".controls__playgame");
var gameboardEl = document.querySelector(".gameboard");
var gameresultEl = document.querySelector(".gameboard__result");
var gameDisplayEl = document.querySelector(".gameboard__display");
var controlsEl = document.querySelector(".controls");

/*
 3. Declare variables: state
    - What are the datq that need to be kept track of? 
    - Global state variables sometimes emerge while working on event handlers (i.e., it
      becomes clearer what needs to be tracked across the application)
    - state variables:
      "State describes the status of the entire program or an individual
       object. It could be text, a number, a boolean, or another data type.

       It’s a common tool for coordinating code. For example, once you update state, a bunch of different functions can instantly react to that change."
       https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/
    - Does the state variable need to be global (i.e., used by all the event handlers) or does it only need to be local
      to the event handler?
*/

var wins = 0;
var losses = 0;
var timer = null;
var timeLeft = 0;
var currentWordIndex;
var currentGuess;

/*
 4. Declare variables: constants
    - What are the data the application needs that won't change?
    - e.g. Math constants, pre-created content (maybe the questions and answers?)
*/

var kWordList = [
	"variable",
	"style",
	"markdown",
	"javascript",
	"node",
	"webpack",
	"indexeddb",
];

var kDuration = 20;

/*
 5. Identify events
    - Based on the variables created in Step 2, create event handlers

      theElement.addeventListener([EVENT TYPE], function(event){
        // do stuff here...
      })

    ...where [EVENT TYPE] is "click" or "change" or "keydown" or whatver

    - Identify the things that should happen in the click handlers
    - Rememember: there is always a page load event. Usually have a function for anything
      that needs setting up at the beginning, before people interact with the 
      page. Start the execution of this setup function at the bottom of page
*/

//Event: Page load
function init() {
	console.log("Game loading...");
}

//Event: Click start
function handleClickStart(event) {
	console.log("Game started!");
}
startGameButtonEl.addEventListener("click", handleClickStart);
//Event: Timer tick
function handleTimeTick(event) {
	console.log("timer ticked!");
}

//Event: Type letter
function handleKeyDown(event) {
	console.log("key pressed: ", event.key);
}
document.addEventListener("keydown", handleKeyDown);

//Event: Game ends
function handleGameEnds() {}
/*
 6. Refactor
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/

//Start the Game
init();
