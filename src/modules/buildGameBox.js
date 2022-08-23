function buildGameBox() {
    //get location
    let location = document.getElementById('playBox');
    //create elements
    let gameBox = document.createElement('div');
    let playerGameBox = document.createElement('div');
    let playerGameIcon = document.createElement('div');
    let playerGameScore = document.createElement('div');
    let computerGameBox = document.createElement('div');
    let computerGameIcon = document.createElement('div');
    let computerGameScore = document.createElement('div');
    //add IDs to elements
    gameBox.id = 'gameBox';
    playerGameBox.id = 'playerGameBox';
    playerGameIcon.id = 'playerGameIcon';
    playerGameScore.id = 'playerGameScore';
    computerGameBox.id = 'computerGameBox';
    computerGameIcon.id = 'computerGameIcon';
    computerGameScore.id = 'computerGameScore';
    //add inner html
    playerGameIcon.innerHTML = '&#10067';
    playerGameScore.innerHTML = 'Player: 0';
    computerGameIcon.innerHTML = '&#10067';
    computerGameScore.innerHTML = 'Computer: 0';
    //append items
    playerGameBox.append(playerGameIcon,playerGameScore);
    computerGameBox.append(computerGameIcon,computerGameScore);
    gameBox.append(playerGameBox,computerGameBox);
    location.append(gameBox);
}

export { buildGameBox };