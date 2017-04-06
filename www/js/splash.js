//var splash = document.getElementById('splashScreen');
//splash.style.background = 'aquamarine';

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
    var forwardbtn = document.getElementById('forwardbtn');
    forwardbtn.style.display = 'block';
}

difficultyLevel = 1; // Var for difficulty level. 1 - Medium by default. During the game can be changed to 0 (Easy) and 2 (Hard).


//function closeSplash() {
//$.mobile.changePage("#menu");
//}

