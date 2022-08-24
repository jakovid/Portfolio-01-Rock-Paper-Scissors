import { buildAnnouncementsBox } from "./buildAnnouncementsBox";
import { buildGameBox } from "./buildGameBox";
import { buildPlayerChoices } from "./buildPlayerChoices";
import { playGame } from "./playGame";

function resetGame() {
    buildAnnouncementsBox();
    buildGameBox();
    buildPlayerChoices();
    //get elements
    let rockBtn = document.getElementById('rockBtn');
    let paperBtn = document.getElementById('paperBtn');
    let scissorsBtn = document.getElementById('scissorsBtn');
    //bind events
    rockBtn.addEventListener('click', e => {
        playGame('rock');
    });
    paperBtn.addEventListener('click', e => {
        playGame('paper');
    });
    scissorsBtn.addEventListener('click', e => {
        playGame('scissors');
    });
}

export { resetGame };