function playRound(playerInput,computerInput) {
    var rules = { rock:'scissors', paper:'rock', scissors:'paper'};
    if (playerInput == computerInput) {
        console.log('its a tie');
    } else if (computerInput == rules[playerInput]) {
        console.log('you win!');
    } else {
        console.log('you lose!');
    }
}

export {playRound};