import { buildPlayerChoices } from "./modules/buildPlayerChoices";
import { buildGameBox } from "./modules/buildGameBox";
import { buildAnnouncementsBox } from "./modules/buildAnnouncementsBox";

(function(){
    var rpsMain = {
        init: function() {
            buildAnnouncementsBox();
            buildGameBox();
            buildPlayerChoices();
        },
    }
    rpsMain.init();
})();