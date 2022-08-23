function buildPlayerChoices() {
    //get location
    let location = document.getElementById('playBox');
    //create elements
    let playerChoices = document.createElement('div');
    let rockBtn = document.createElement('button');
    let paperBtn = document.createElement('button');
    let scissorsBtn = document.createElement('button');
    //add IDs to elements
    playerChoices.id = 'playerChoices';
    rockBtn.id = 'rockBtn';
    paperBtn.id = 'paperBtn';
    scissorsBtn.id = 'scissorsBtn';
    //add inner html
    rockBtn.innerHTML = '&#9994';
    paperBtn.innerHTML = '&#9995';
    scissorsBtn.innerHTML = '&#9996';
    //bind events
    //append items
    playerChoices.append(rockBtn,paperBtn,scissorsBtn);
    location.append(playerChoices);
    
}

export { buildPlayerChoices };