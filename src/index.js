import { buildPlayerChoices } from "./modules/buildPlayerChoices";
import { buildGameBox } from "./modules/buildGameBox";

(function(){
    var rpsMain = {
        init: function() {
            buildGameBox();
            buildPlayerChoices();
        },
    }
    rpsMain.init();
})();