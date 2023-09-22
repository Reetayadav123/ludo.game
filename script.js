const rollButton = document.getElementById("rollButton");
const resultText = document.getElementById("result");
const player1Dice = document.getElementById("player1");
const player2Dice = document.getElementById("player2");
rollButton.addEventListener("click", function()  {
    playAudio();
    const player1 = Math.floor(Math.random() * 6) + 1;
    const player2 = Math.floor(Math.random() * 6) + 1;
    player1Dice.src = `images/${player1}.png`;
    player2Dice.src = `images/${player2}.png`;
    if (player1 > player2) {
        resultText.innerHTML = 'Player 1 won 🥳 🎊';
    } else if (player1 < player2) {
        resultText.innerHTML = 'Player 2 won 🎉 🥳';
    } else {
        resultText.innerHTML = 'Game-Draw 😑 😒';
    }

});

function playAudio() {
    let audio = new Audio("images/b.mp3");
    audio.play();
}
