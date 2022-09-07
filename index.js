// Promopt functions that takes users input
const prompt = require('prompt-sync')();

//Random number generator
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * max);
};

//Math Game function
const mathGame = () => {
  let answer, first = getRandomInt(1,12), second = getRandomInt(1,12); 
  var answerS = "Correct ";

  for (let i=0; i < 1; i++){
    answer = prompt("\n" + first + " * " + second + " = "); 
   
    if (first * second == answer){
      console.log(answerS);
    }

    else if (first * second != answer){
      console.log("Wrong");
      answer = first * second; 
      console.log( "The correct answer is: " + answer);  
    } 
  }
} 

let problems, probCount=1; 

//Welcome screen
console.log("Welcome to the multiplication math game"); 

//A prompt for the amount of math problmes the user wants to do.
problems = prompt("Enter amount of problems : ");  

//A loop of math problems, loop stops after reaching the amount of math problens
for(let i=0; i < problems; i++){
  console.log("\n\nProblem " + probCount++); 
  mathGame(); 
}