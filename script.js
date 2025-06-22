let cpuscore = 0;
let userScore_span = document.getElementById("user-score")
let cpuScore_span = document.getElementById("computer-score")
let result_div = document.querySelector(".result > p")
let userscore = 0;
let scoreboard = document.querySelector(".score-board")
let rock_div = document.getElementById("rock")
let paper_div = document.getElementById("paper")
let scissor_div = document.getElementById("scissor")

function CPUChoice(){
    const choices = ["rock","paper","scissor"]
    const random = Math.floor(Math.random()*3)
    return choices[random]
}
function game(user){
    document.getElementById("rock").classList.remove('green-glow')
    document.getElementById("paper").classList.remove('green-glow')
    document.getElementById("scissor").classList.remove('green-glow')
    document.getElementById("paper").classList.remove('red-glow')
    document.getElementById("rock").classList.remove('red-glow')
    document.getElementById("scissor").classList.remove('red-glow')
    let cpu = CPUChoice();
    console.log(user + cpu)
    switch(user + cpu){
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            win(user,cpu);
            break;

        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            lose(user,cpu);
            break;
        case "scissorscissor":
        case "rockrock":
        case "paperpaper":
            draw(user,cpu);
            break;
    }
}
function win(user,cpu){
    userscore++;
    userScore_span.innerHTML = userscore;
    cpuScore_span.innerHTML = cpuscore;
    result_div.innerHTML = user+" beats "+cpu+" you win";
    document.getElementById(user).classList.add('green-glow')
}
function lose(user,cpu){
    cpuscore++;
    userScore_span.innerHTML = userscore;
    cpuScore_span.innerHTML = cpuscore;
    result_div.innerHTML = cpu+" beats "+user+" you lose";
    document.getElementById(user).classList.add('red-glow')
}
function draw(){
    result_div.innerHTML = " it's a draw";
}
function main(){
    rock_div.addEventListener('click',function(){
        game("rock");
    })
    paper_div.addEventListener('click',function(){
        game("paper");
    })
    scissor_div.addEventListener('click',function(){
        game("scissor");
    })
}
main();