//select the element from html
let btn = document.querySelector(".button");
let btn2 = document.querySelector(".button2");
let congrats = document.querySelector("h3");
let number = document.querySelector(".question");
let score = document.getElementById("score");
let scoreValue = 20;

//generate random number 
let num = Math.floor(Math.random() * 20) + 1;
console.log(num);

//guess button
btn.addEventListener("click", check);


function check() {
    let inp = document.querySelector("input");

    if(scoreValue > 0){
        scoreValue--;
        score.innerText = `Score : ${scoreValue}`;
    }else {
        congrats.innerHTML = "Game Over! Try Again <br> The correct number is " + num;
        document.querySelector("body").style.backgroundColor = "brown";
        number.innerText = num;
        return; 
    
    }

    if(inp.value == num){
        document.querySelector("body").style.backgroundColor = "pink";
        document.querySelector("body").style.color = "black";
        number.innerText = inp.value;
        congrats.innerText = "Congrats! You won";
        
    }else if(inp.value > num) {
        congrats.innerText = "Too high!";
        inp.value = "";
    }else if(inp.value < num) {
        congrats.innerText = "Too Low!";
        inp.value = "";
    }
}

//refresh button
btn2.addEventListener("click", () =>{
    let inp = document.querySelector("input");
    inp.value = '';
    let congrats = document.querySelector("h3");
    congrats.innerText = "Start Guessing";
    number.innerText = "?";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    scoreValue = 20;
    score.innerText = `Score :  ${scoreValue}`;
    num = Math.floor(Math.random() * 20) + 1; 
    console.log(num);
})

