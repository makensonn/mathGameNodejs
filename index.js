const prompt = require('prompt-sync')();
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * max);
};
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

console.log("Welcome to the multiplication math game"); 

problems = prompt("Enter amount of problems : ");  

for(let i=0; i < problems; i++){
  console.log("\n\nProblem " + probCount++); 
  mathGame(); 
}