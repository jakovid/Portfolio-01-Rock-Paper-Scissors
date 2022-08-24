import { buildPlayerChoices } from "./modules/buildPlayerChoices";
import { buildGameBox } from "./modules/buildGameBox";
import { buildAnnouncementsBox } from "./modules/buildAnnouncementsBox";
import { playGame } from "./modules/playGame";

(function(){
    var rpsMain = {
        init: function() {
            buildAnnouncementsBox();
            buildGameBox();
            buildPlayerChoices();
            this.cacheGame();
            this.bindEvents();
        },
        cacheGame: function() {
            let rockBtn = document.getElementById('rockBtn');
            let paperBtn = document.getElementById('paperBtn');
            let scissorsBtn = document.getElementById('scissorsBtn');
            console.log('btns cached');
        },
        bindEvents: function() {
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
    }
    rpsMain.init();
})();