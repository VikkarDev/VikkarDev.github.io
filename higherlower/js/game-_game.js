function drawLogic(i) {
    if(gameStatus != 'ingame')
        return false;

    updateButtonHud();
    if(conf_v2_enabled) {
        if(listpool[oldguess][3] > listpool[guess][3] && i == 1 ||
            listpool[oldguess][3] < listpool[guess][3] && i == 0 ||
            listpool[oldguess][3] == listpool[guess][3]) {
            gameStatus = 'correct';
            score++;

            //update Stats
            update_carrer(4, '+');
            if(score == 1) {
                update_carrer(1, '+');
                stats_ScoreCounted = true;
            }
            if(preEnd) {
                gameStatus = 'end';
            }
        } else {
            gameStatus = 'incorrect';
        }
    } else {
        if(listpool[oldguess][1] < listpool[guess][1] && i == 1 ||
            listpool[oldguess][1] > listpool[guess][1] && i == 0 ||
            listpool[oldguess][1] == listpool[guess][1]) {
            gameStatus = 'correct';
            score++;

            //update Stats
            update_carrer(4, '+');
            if(score == 1) {
                update_carrer(1, '+');
                stats_ScoreCounted = true;
            }
            if(preEnd) {
                gameStatus = 'end';
            }
        } else {
            gameStatus = 'incorrect';
        }
    }


    ui_ButtonStatus = false;
    updateButtonHud();

    updateGuessHudReveal();
}

function drawOldGuess() {
    if(oldguess == undefined) {
        oldguess = getNotUsedListPoolId();
    } else if(oldguess != undefined) {
        oldguess = guess;
    }
    L('oldguess is : '+ oldguess);

    updateOldGuessHud();
}

function drawGuess() {

    if(score == 0)
        guess = getNotUsedListPoolId();
    else
        guess = nextguess;
    L('guess is : '+ guess);

    ui_ButtonStatus = true;
    updateButtonHud();

    updateGuessHud();
}

function drawNextGuess() {
    nextguess = getNotUsedListPoolId();
    L('nextguess is : '+ nextguess);

    if(nextguess === false) {
        preEnd = true;
    } else
        updateNextGuessHud();

}


function getTrophy(tr_score = score) {
    /*
    trophy = value;
        value -1: No trophy
        value 0: Bronze
        value 1: Silver
        value 2: Gold
        value 3: Diamond
    */
    let trophy_notfound = true;
    let trophy = tr_score;
    while(trophy_notfound) {
        if(trophy == 0) {
            trophy = -1;
            trophy_notfound = false;
            break;
        }

        if(winner_trophy.lastIndexOf(trophy) == '-1') {
            trophy--;
        } else {
            trophy = winner_trophy.lastIndexOf(trophy);
            trophy_notfound = false;
        }
    }

    return trophy;
}
