import { emojis } from "./emojis";

function updateGameBoxDom(playerInput,playerScore,computerInput,computerScore) {
    //get elements
    let playerIcon = document.getElementById('playerGameIcon');
    let computerIcon = document.getElementById('computerGameIcon');
    let playerDomScore = document.getElementById('playerGameScore');
    let computerDomScore = document.getElementById('computerGameScore');
    // update innerhtml
    playerIcon.innerHTML = emojis[playerInput];
    computerIcon.innerHTML = emojis[computerInput];
    playerDomScore.innerHTML = 'Player: ' + playerScore;
    computerDomScore.innerHTML = 'Computer: ' + computerScore;
}

export { updateGameBoxDom };