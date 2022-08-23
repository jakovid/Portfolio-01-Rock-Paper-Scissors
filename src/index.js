import { buildPlayerChoices } from "./modules/buildPlayerChoices";
import { buildGameBox } from "./modules/buildGameBox";
import { buildAnnouncementsBox } from "./modules/buildAnnouncementsBox";

(function(){
    var rpsMain = {
        playerScore: 0,
        computerScore: 0,
        init: function() {
            buildAnnouncementsBox();
            buildGameBox();
            buildPlayerChoices();
        },
    }
    rpsMain.init();
})();