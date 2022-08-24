function computerPick() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

export { computerPick };