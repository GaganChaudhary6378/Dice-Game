let player1Score=0;
let player2Score=0;
let player1Turn=true;
let imageEl=document.getElementById("img-el");
let score1el=document.getElementById("scorebox1el");
let score2el=document.getElementById("scorebox2el");
let score1player=document.getElementById("scorea-el");
let score2player=document.getElementById("scoreb-el");
let message=document.getElementById("scoreboard-el");

let rollBtn=document.getElementById("roll-el");
let resetBtn=document.getElementById("reset-el");

function showDisplay(){
    rollBtn.style.display="none";
    resetBtn.style.display="block";
    imageEl.style.display="block";
}
rollBtn.addEventListener("click",function(){
    generateGame();
})

resetBtn.addEventListener("click",function(){
    reset();
})

function generateGame(){
    const randomNum=Math.floor(Math.random()*6)+1;
    if(player1Turn){
        score1el.textContent=randomNum;
        player1Turn=false;
        player1Score+=randomNum;
        score1player.textContent="Score: "+player1Score;
        message.textContent="Player 2 Turn!";
    }else{
        score2el.textContent=randomNum;
        player1Turn=true;
        player2Score+=randomNum;
        score2player.textContent="Score: "+player2Score;
        message.textContent="Player 1 Turn!";
    }
    if(player1Score>=20){
        message.textContent="Player 1 has won !🥳";
        showDisplay();
    }else if(player2Score>=20){
        message.textContent="Player 2 has won !🎉";
        showDisplay();
    }
}
function reset(){
    message.textContent="Player 1 Turn!";
    score1player.textContent="Score: 0";
    score2player.textContent="Score: 0";
    score1el.textContent="_";
    score2el.textContent="_";
    player1Score=0;
    player2Score=0;
    player1Turn=true;
    rollBtn.style.display="block";
    resetBtn.style.display="none";
    imageEl.style.display="none";
}