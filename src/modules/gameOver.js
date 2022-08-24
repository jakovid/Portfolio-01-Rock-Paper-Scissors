import { playAgain } from "./playAgain";

function gameOver(outcome) {
    let upperOut = outcome.toUpperCase();
    //clear space
    let playBox = document.getElementById('playBox');
    playBox.innerHTML = '';
    //create Elements
    let gameOverAnnouncement = document.createElement('div');
    let outcomeAnnouncement = document.createElement('div');
    let playAgainBtn = document.createElement('button');
    //add ids
    //add innerHTML
    gameOverAnnouncement.innerHTML = "GAME OVER!";
    outcomeAnnouncement.innerHTML = `YOU ${upperOut}`;
    playAgainBtn.innerHTML = "Play Again?";
    //bind events
    playAgainBtn.addEventListener('click',playAgain);
    //append items
    playBox.append(gameOverAnnouncement,outcomeAnnouncement,playAgainBtn);

}

export { gameOver };