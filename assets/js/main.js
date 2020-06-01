let spielstandUser = document.getElementById("spielstandUser");
let spielstandComp = document.getElementById("spielstandComp");

let steinIMG = document.getElementById("steinIMG");
let papierIMG = document.getElementById("papierIMG");
let schereIMG = document.getElementById("schereIMG");


let rock = 1;
let paper = 2;
let schere = 3;
let button3 = document.getElementById("round3");
let button5 = document.getElementById("round5");
let button7 = document.getElementById("round7");
let buttonNewGame = document.getElementById("newGame");

let game = document.getElementById("game");
let spielrunden = document.getElementById("spielrunden");


//check if rounds is checked


function displayNone() {
    game.style.display = "inherit";
    spielrunden.style.display = "none";
    buttonNewGame.style.display = "none";
}

function start() {

    if (button3.checked) {
        displayNone();
   
    } else if (button5.checked) {
        displayNone();

    } else if (button7.checked) {
        displayNone();

        } else alert("Bitte wähle die Spielpunkte aus!");
   }

function play (symbol) {
    let comp = Math.floor(Math.random()*3) +1;
    console.log(symbol,comp);
   
    if (symbol == comp){
        answer.innerHTML = "Der Computer hat dasselbe wie du gewählt. Das war ein Unentschieden!"
        chosenSymbols.innerHTML = "<img src='./assets/img/rock_tie.png'>" + "<img src='./assets/img/paper_tie.png'>" + "<img src='./assets/img/scissors_tie.png'>";

    }
    else if (symbol == rock && comp == paper){
        answer.innerHTML = "Der Computer hat das Papier gewählt. Du hast leider verloren!";
        chosenSymbols.innerHTML = "<img src='./assets/img/rock_loose.png'>" + "<img src='./assets/img/papier.png'>";
        spielstandComp.innerHTML++ ;

    }
    else if (symbol == rock && comp == schere){
        answer.innerHTML = "Der Computer hat die Schere gewählt. Du hast gewonnen!"
        chosenSymbols.innerHTML = "<img src='./assets/img/stein.png'>" + "<img src='./assets/img/scissors-loose.png'>"
        spielstandUser.innerHTML++ 
    }

    else if(symbol == schere && comp == paper){
        answer.innerHTML = "Der Computer hat das Papier gewählt. Du hast gewonnen!"
        chosenSymbols.innerHTML = "<img src='./assets/img/schere.png'>" + "<img src='./assets/img/paper_loose.png'>"
        spielstandUser.innerHTML++ 
    }
    else if(symbol == schere && comp == rock){
        answer.innerHTML = "Der Computer hat den Stein gewählt. Du hast leider verloren!"
        chosenSymbols.innerHTML = "<img src='./assets/img/scissors-loose.png'>" + "<img src='./assets/img/stein.png'>"
        spielstandComp.innerHTML++ 
    }
    else if(symbol == paper && comp == rock){
        answer.innerHTML = "Der Computer hat den Stein gewählt. Du hast gewonnen!"
        chosenSymbols.innerHTML = "<img src='./assets/img/papier.png'>" + "<img src='./assets/img/rock_loose.png'>"
        spielstandUser.innerHTML++ 
    }
    else if(symbol == paper && comp == schere){
        answer.innerHTML = "Der Computer hat die Schere gewählt. Du hast leider verloren!"
        chosenSymbols.innerHTML = "<img src='./assets/img/paper_loose.png'>" + "<img src='./assets/img/schere.png'>"
        spielstandComp.innerHTML++ 
    }
}

//Check ob nach 3, 5 oder 7 Runden gewonnen wurde
        

function rounds() { 

if (button3.checked && spielstandUser.innerHTML >= 3 ) {
    answer.innerHTML += ("<br><h3>Hurra! Du hast das Spiel gewonnen!</h3>");
    disableIMG();

    }
    else if (button3.checked && spielstandComp.innerHTML >= 3) { 
    answer.innerHTML += ("<br><h3>Schade, du hast das Spiel verloren! Nochmal?</h3>");
    disableIMG();

}
if (button5.checked && spielstandUser.innerHTML >= 5 ) {
    answer.innerHTML += ("<br><h2>Hurra! Du hast das Spiel gewonnen!</h2>");
    disableIMG();
    
    }
    else if (button5.checked && spielstandComp.innerHTML >= 5) { 
        answer.innerHTML += ("<br><h2>Schade, du hast das  Spiel verloren! Nochmal?</h2>");
        disableIMG();
}
if (button7.checked && spielstandUser.innerHTML >= 7 ) {
    answer.innerHTML += ("<br><h2>Hurra! Du hast das Spiel gewonnen!</h2>");
    disableIMG();
    }
    else if (button5.checked && spielstandComp.innerHTML >= 7) { 
        answer.innerHTML += ("<br><h2>Schade, du hast das Spiel verloren! Nochmal?</h2>");
        disableIMG();
}
}



function newGame() {
    location.reload();
    game.style.display = "none";
    spielrunden.style.display = "inherit";
}


function disableIMG() {
    steinIMG.onclick = "";
    schereIMG.onclick = "";
    papierIMG.onclick = "";
    buttonNewGame.style.display = "inherit";
}