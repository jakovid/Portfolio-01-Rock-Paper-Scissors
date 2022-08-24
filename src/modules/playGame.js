import { playRound } from "./playRound";
import { computerPick } from "./computerPick";
import { updateGameBoxDom } from "./updateGameBoxDom";
import { scores } from "./scores";
import { winCheck } from "./winCheck";

function playGame(playerInput) {
    let computerInput = computerPick()
    playRound(playerInput, computerInput);
    updateGameBoxDom(playerInput,scores.player,computerInput,scores.computer);
    winCheck(scores.player,scores.computer);
}

export { playGame };