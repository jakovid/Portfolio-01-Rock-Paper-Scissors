import { scores } from "./scores";
import { rules } from "./gameRules";

function playRound(playerInput,computerInput) {
    //get elements
    let mainAnnouncement = document.getElementById('mainAnnouncement');
    let subAnnouncement = document.getElementById('subAnnouncement');

    if (playerInput == computerInput) {
        mainAnnouncement.innerHTML = 'Its A Tie!';
        subAnnouncement.innerHTML = `you both threw ${playerInput}`;
    } else if (computerInput == rules[playerInput]) {
        mainAnnouncement.innerHTML = 'You Win!';
        subAnnouncement.innerHTML = `${playerInput} beats ${computerInput}`;
        scores.player += 1;
    } else {
        mainAnnouncement.innerHTML = 'You Lose!';
        subAnnouncement.innerHTML = `${computerInput} beats ${playerInput}`;
        scores.computer += 1;
    }
}

export {playRound};