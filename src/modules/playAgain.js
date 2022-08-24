import { scores } from "./scores";
import {buildAnnouncementsBox} from "./buildAnnouncementsBox";
import {buildGameBox} from "./buildGameBox";
import {buildPlayerChoices} from "./buildPlayerChoices";
import { resetGame } from "./resetGame";

function playAgain() {
    //reset scores
    scores.player = 0;
    scores.computer = 0;
    // clear playBox
    let playBox = document.getElementById('playBox');
    playBox.innerHTML = '';
    //build play area
    resetGame();
}

export {playAgain};