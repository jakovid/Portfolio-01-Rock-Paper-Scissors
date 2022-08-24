import { gameOver } from "./gameOver";

function winCheck (playerScore,computerScore) {
    if (playerScore == 5) {
        gameOver('win');
    } else if (computerScore == 5) {
        gameOver('lose');
    }
}

export { winCheck };