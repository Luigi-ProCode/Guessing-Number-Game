const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
const warning = document.getElementById("warning");

const minNum = 1;
const MaxNum = 100;
const answer = Math.floor(Math.random() * (minNum - MaxNum)) + MaxNum;

let attempts = 0;
let guess

mySubmit.onclick = function(){
  guess = myText.value;
  guess = Number(guess)

  if(isNaN(guess)){
    myResult.textContent = `Please ENTER a valid Number!`
  }
  else if(guess < 1 || guess > 100){
    myResult.textContent = `Please FOLLOW the intruction provided!`
  }
  else{
    attempts++;
    if(guess < answer){
      myResult.textContent = `TOO LOW! Try again!`
      warning.textContent = `WRONG!`
    }
    else if(guess > answer){
      myResult.textContent = `TOO HIGH! Try again!`
      warning.textContent = `WRONG!`
    }
    else{
      myResult.textContent = `CORRECT! You answered ${answer} in ${attempts} attempts! `
    }
  }
}