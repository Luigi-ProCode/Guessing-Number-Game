const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
const warning = document.getElementById("warning");

const minNum = 1;
const MaxNum = 100;
const answer = Math.floor(Math.random() * (minNum - MaxNum)) + MaxNum;
const correct = new Audio();
correct.src = "./correct.mp3"
const wrong = new Audio();
wrong.src = "./wrong.mp3"

let attempts = 0;
let guess

mySubmit.onclick = function(){
  guess = myText.value;
  guess = Number(guess)
      setTimeout(()=>{
        myResult.style.removeProperty(`animation`)
      }, 1000)

  if(isNaN(guess)){
    myResult.textContent = `Please ENTER a valid Number!`
    myResult.style.animation = `jumpIn 0.5s ease`
    myText.style.outlineColor = `red`
    wrong.play()
  }
  else if(guess < 1 || guess > 100){
    myResult.textContent = `Please FOLLOW the intruction provided!`
    myResult.style.animation = `jumpIn 0.5s ease` 
    myText.style.outlineColor = `red`
    wrong.play()
  }
  else{
    attempts++;
    if(guess < answer){
      myResult.textContent = `TOO LOW! Try again!`
      myResult.style.animation = `jumpIn 0.5s ease`
      warning.textContent = `WRONG!`
      myText.style.outlineColor = `red`
      wrong.play()
    }
    else if(guess > answer){
      myResult.textContent = `TOO HIGH! Try again!`
      myResult.style.animation = `jumpIn 0.5s ease`
      warning.textContent = `WRONG!`
      myText.style.outlineColor = `red`
      wrong.play()
    }
    else{
      myResult.textContent = `CORRECT! You answered ${answer} in ${attempts} attempts! `
      myResult.style.animation = `jumpIn 0.5s ease`
      warning.textContent = ``
      myText.style.border = `3px solid yellowgreen`
      mySubmit.textContent = `Play Again`
      correct.play()
      
      mySubmit.onclick = function(){
        if (mySubmit.textContent === `Play Again`) {
          location.reload(true)
        }
      }
    }
  }
}
