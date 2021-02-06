'use strict';


let randomNumber=Math.trunc(Math.random()*20)+1;

let score=10;
let highscore=0;
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
    }


console.log(randomNumber);

document.querySelector('.check').addEventListener('click',function(){
    const guess=document.querySelector('.guess').value;
    console.log(guess);


   if (document.querySelector('.message').textContent==="You guessed it right")
   {
       displayMessage("Click on Again to generate new number and play again");
       document.querySelector('.score').textContent=0;
       console.log(true);
   }
       
  else{   
//When No number is input
if(!guess)
{
displayMessage("No value given");
}
//When player wins
else if(Number(guess)===randomNumber)
{
    displayMessage("You guessed it right");
    highscore++;
    score=0;
    document.querySelector('.score').textContent=score;
    document.querySelector('.highscore').textContent=highscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    console.log("i ws clicked");
}
//when guess is wrong
else if(score>1)
{
    //Number guessed is low
if(guess<randomNumber)
{
    displayMessage("Number is low");

document.querySelector('.score').textContent=score;
score--;
}
//Number guessed is high
else if(guess>randomNumber)
{
    displayMessage("Number is high");
score--;
document.querySelector('.score').textContent=score;
}
}

//Ultimately user lost
else
{
    displayMessage("You've lost");
    document.querySelector('.score').textContent=0;
}
}
}
);
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    randomNumber=Math.trunc(Math.random()*20)+1;
    console.log(randomNumber);
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    //For CSS tag will not be .tagname.. it will be just tagname..
    document.querySelector('body').style.backgroundColor = '#222';
    
});
