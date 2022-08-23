import { buildPlayerChoices } from "./modules/buildPlayerChoices";

(function(){
    var rpsMain = {
        init: function() {
            buildPlayerChoices();
        },
    }
    rpsMain.init();
})();