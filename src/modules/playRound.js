import { scores } from "./scores";
import { rules } from "./gameRules";

function playRound(playerInput,computerInput) {
    if (playerInput == computerInput) {
        console.log('its a tie');
    } else if (computerInput == rules.playerInput) {
        console.log('you win!');
        scores.player += 1;
    } else {
        console.log('you lose!');
        scores.computer += 1;
    }
}

export {playRound};