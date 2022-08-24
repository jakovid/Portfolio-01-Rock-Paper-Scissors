import { playRound } from "./playRound";
import { computerPick } from "./computerPick";

function playGame(playerInput) {
    playRound(playerInput,computerPick());
}

export { playGame };