


var won = false;
var mainDiv = document.getElementById('app');
var body = document.getElementById('main');
var lost = false

var buttonPoints = 0;
var maxButtons = Math.floor(Math.random() * 10) + 1;;

var buttons = [];

var start = document.getElementById('start');


function youWon() {
    if (lost) return;
    body.innerText = "You Won!";
    addRefreshBtn();
    won = true;
}


function refreshPage() {
    window.location.reload(true);
}

function addRefreshBtn() {
    var btn = document.createElement("button");
    btn.innerText = "Restart!";
    btn.addEventListener('click', event => {
        event.stopPropagation(); 
       refreshPage(); 
    });
    body.appendChild(btn);
}

function youLost() {
    if (won) return;
    body.innerText = "You Lose!";
    addRefreshBtn();
    lost = true;
}

function buildAButton () { 
var btn = document.createElement("button");
btn.style.position = "absolute";
btn.style.display = "none";
btn.style.left = (100 + Math.random() * 300) + 'px';
btn.style.top = (100 + Math.random() * 300) + 'px';
btn.innerText = "click me!";
btn.addEventListener('click', event => {
    event.stopPropagation(); 
    buttonPoints = buttonPoints + 1;
    btn.style.display = "none";
if (buttonPoints >= maxButtons) {
    youWon();
    }
})
buttons.push(btn);
body.appendChild(btn);
}
for (var i = 0; i < maxButtons; i++) {
    buildAButton();
}

console.log(buttons);




x = Math.floor((Math.random() * 10) + 1 * 1000); 

function startRound() {
    mainDiv.innerText = "ROUND STARTED!";
    buttons.forEach(button => {
        button.style.display = "";
    });
    body.addEventListener('click', () => {
    youLost();
})
    
    
setTimeout(youLost, maxButtons * 1000);

}

start.addEventListener('click', () => {
    start.style.display = "none";
    setTimeout(startRound, Math.random(), x)
});








