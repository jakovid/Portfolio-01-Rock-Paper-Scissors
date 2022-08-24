import { resetGame } from "./modules/resetGame";

(function(){
    var rpsMain = {
        init: function() {
            resetGame();
        }
    }
    rpsMain.init();
})();