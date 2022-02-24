/* +++++++++++++++START Variables+++++++++++++ */


// Game Logic
var listpoolCouldUse = [];
var oldguess, guess, nextguess, listpoolNewPick, listpoolFoundItem, gameStatus, score, highscore, ui_direction, ui_directionDistance, ui_inAnimation, ui_done, preEnd, ui_ButtonStatus, stats_ScoreCounted;
var developer = 1;

// Hud
var hud = {
    score: document.getElementById('score'),
    highscore: document.getElementById('highscore'),
    btnH: document.getElementById('U2_higher'),
    btnL: document.getElementById('U2_lower'),
    end: document.getElementById('end'),
    gamebutton: document.getElementById('gamebutton'),
    gameicon: document.getElementById('gameicon'),
    endscreentrophy: document.getElementById('endscreen_trophy'),
    endscreenmsg: document.getElementById('endscreen_msg')

};

var u1 = {
    name: document.getElementById('U1_name'),
    s1: document.getElementById('U1_s1'),
    s2: document.getElementById('U1_s2'),
    img: document.getElementById('U1_preview'),
    value: document.getElementById('U1_var')
};

var u2 = {
    name: document.getElementById('U2_name'),
    s1: document.getElementById('U2_s1'),
    s2: document.getElementById('U2_s2'),
    img: document.getElementById('U2_preview'),
    value: document.getElementById('U2_var'),
};

var u3 = {
    name: document.getElementById('U3_name'),
    s1: document.getElementById('U3_s1'),
    s2: document.getElementById('U3_s2'),
    img: document.getElementById('U3_preview'),
    value: document.getElementById('U3_var')
};


// Trophies

var maxscore = listpool.length - 1;
if(maxscore < 22) {
    var winner_trophy = [
        Math.floor(maxscore / 3), //Bronze
        Math.floor(maxscore / 3 * 1.5), //Silber
        Math.floor(maxscore / 3 * 2), //Gold
        maxscore //Diamond
    ];
}
else {
    var winner_trophy = [
        5, //Bronze
        10, //Silber
        20, //Gold
        maxscore //Diamond
    ];
}


if(global_language == 'de') {
    var msg_trophy = [
        'Das kannst du besser!',
        'Bronze-Medaille',
        'Silber-Medaille, nicht schlecht.',
        'Gold-Medaille, gut gemacht!',
        'Wow! Du hast alles richtig geraten.'
    ];
} else {
    var msg_trophy = [
        'You can do this better. We both know!', //TY Raznek
        'Bronze Medal',
        'Silver Medal, not bad.',
        'Gold Medal, impressive!',
        'Wow! You guessed everything correct.'
    ];
}

/* +++++++++++++++END Variables+++++++++++++ */


setup();

function setup() {
    gameStatus = 'init';
    score = 0;
    preEnd = false;
    ui_ButtonStatus = true;
    stats_ScoreCounted = false;

    init_carrer();

    prepareCouldUseListpoolLogic();

    createEventListeners();
    updateGeneralHud();
    initHud();
    draw();
}

function draw() {
    gameStatus = 'ingame';
    drawOldGuess();
    drawGuess();
    drawNextGuess();
}

function resetGame() {
    L('resetGame');
    oldguess = undefined;
    guess = undefined;
    gameStatus = 'reset';
    score = 0;
    preEnd = false;
    ui_ButtonStatus = true;
    stats_ScoreCounted = false;

    prepareCouldUseListpoolLogic();

    updateGeneralHud();
    draw();
}


function createEventListeners() {
    hud.btnH.addEventListener('click', function () {
        drawLogic(1);
    });

    hud.btnL.addEventListener('click', function () {
        drawLogic(0);
    });
    if (developer == 1) {
        document.getElementById('dev_newgame').addEventListener('click', function () {
            if (gameStatus == 'incorrect' || gameStatus == 'end')
                resetGame();
        });
    }
}


function endGame() {
    if (gameStatus == 'correct' || gameStatus == 'ingame')
        return false;
    L('Game is ended because of ' + gameStatus);

    if(stats_ScoreCounted == false) {
        update_carrer(1, '+');
        stats_ScoreCounted = true;
    }
    updateGeneralHud();
}
