let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
 const genCompChoice =() => {
   const options = ["rock", "paper" , "scissor"];
   const randomIdx = Math.floor(Math.random() *3);
   return options[randomIdx];
 }
 const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game Was Draw."; 
  msg.style.backgroundColor= "#F2C18D";
 };
 const showWinner = (userwin,userChoice,compChoice) => {
  if(userwin){
    console.log("you Win!");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText = `you Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    
  }else{
    console.log("you lose.");
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText = `you lost. ${userChoice} beats your ${compChoice}`;
    msg.style.backgroundColor= "red";
  }}
 

const playGame = (userChoice) => {
   console.log("userChoice =" , userChoice);
   const compChoice = genCompChoice();
   console.log("compChoice", compChoice);

   if(userChoice === compChoice) {
   drawGame();
   }else {
    let userWin = true;
    if(userChoice === "rock"){
       userWin = compChoice === "paper" ? false : true;
    }else if(userChoice==="paper"){
       userWin = compChoice === "scissor"  ? false:true;
    }else{
      userWin= compChoice==="rock" ? false:true;
    }
     showWinner( userWin,userChoice,compChoice);
     
   }
   }

   choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => { 
      const userChoice= choice.getAttribute("id");
   playGame(userChoice);
   });
});
