
function initHud() {
    u1.s1.innerHTML = gameStringTable[0];
    u1.s2.innerHTML = gameStringTable[1];
    u2.s1.innerHTML = gameStringTable[2];
    u2.s2.innerHTML = gameStringTable[3];

    u3.s1.innerHTML = gameStringTable[2];
    u3.s2.innerHTML = gameStringTable[3];

    document.getElementById('U2_higher_text').innerHTML = gameStringTable[6];
    document.getElementById('U2_lower_text').innerHTML = gameStringTable[7];

    document.getElementById('U3_higher_text').innerHTML = gameStringTable[6];
    document.getElementById('U3_lower_text').innerHTML = gameStringTable[7];
}

function updateGeneralHud() {
    hud.score.innerHTML = score;
    hud.highscore.innerHTML = getHighscore();

    updateEndScreen();
}

function updateOldGuessHud() {
    $('#gc1').css('background-image', 'url(' + listpool[oldguess][2] + ')');
    if (isDescriptionEnabled() && listpool[oldguess][3] != undefined)
        u1.s1.innerHTML = listpool[oldguess][3];

    u1.img.src = listpool[oldguess][2];
    u1.name.innerHTML = listpool[oldguess][0];
    u1.value.innerHTML = gameStringTable[4] + listpool[oldguess][1].toLocaleString() + gameStringTable[5];
}

function updateGuessHud() {
    $('#gc2').css('background-image', 'url(' + listpool[guess][2] + ')');
    if (isDescriptionEnabled() && listpool[guess][3] != undefined)
        u2.s1.innerHTML = listpool[guess][3];

    u2.img.src = listpool[guess][2];
    u2.name.innerHTML = listpool[guess][0];
    u2.value.innerHTML = '';
    setFeedbackUI();
}

function updateNextGuessHud() {
    $('#gc3').css('background-image', 'url(' + listpool[nextguess][2] + ')');
    if (isDescriptionEnabled() && listpool[nextguess][3] != undefined)
        u3.s1.innerHTML = listpool[nextguess][3];

    u3.img.src = listpool[nextguess][2];
    u3.name.innerHTML = listpool[nextguess][0];
    u3.value.innerHTML = '';
}

function updateButtonHud() {
    if (ui_ButtonStatus)
        $('#gamebutton').removeClass('d-none').addClass('d-flex');
    else
        $('#gamebutton').removeClass('d-flex').addClass('d-none');
}

function updateGuessHudReveal() {
    if (conf_v2_enabled) {
        $({
            Counter: 0
        }).animate({
            Counter: 60
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now, fx) {
                if (now > 30)
                    u2.value.innerHTML = gameStringTable[4] + listpool[guess][1].toLocaleString() + gameStringTable[5];
                else
                    $(u2.value).text(gameStringTable[4] + listpool[guess][1].split('').sort(function () {
                        return 0.5 - Math.random()
                    }).join('') + gameStringTable[5]);
            },
            complete: function () {
                u2.value.innerHTML = gameStringTable[4] + listpool[guess][1].toLocaleString() + gameStringTable[5];
                if (gameStatus == 'correct')
                    animateHud();
                setFeedbackUI();
                updateGeneralHud();
                endGame();
            }
        });
    } else {
        $({
            Counter: 0
        }).animate({
            Counter: listpool[guess][1]
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                L(now);
                $(u2.value).text(gameStringTable[4] + Math.ceil(now).toLocaleString() + gameStringTable[5]);
            },
            complete: function () {
                u2.value.innerHTML = gameStringTable[4] + listpool[guess][1].toLocaleString() + gameStringTable[5];
                if (gameStatus == 'correct')
                    animateHud();
                setFeedbackUI();
                updateGeneralHud();
                endGame();
            }
        });
    }
}

function animateHud() {
    setAnimationVars();

    $('#gc1, #gc2, #gc3').animate({
        [ui_direction]: ui_directionDistance + 'px',
    }, {
        duration: 1000,
        complete: function () {
            resetAnimationPostion();
            continueGame();
        }
    });
}

function resetAnimationPostion() {
    $('#gc1, #gc2, #gc3').css({
        [ui_direction]: '0px',
    });
    ui_done = false;
}

function continueGame() {
    if (gameStatus == 'correct') {
        draw();
    }
}

function updateEndScreen() {

    if (gameStatus == 'end' || gameStatus == 'incorrect') {
        setTimeout(
            function () {
                let tr_cache = getTrophy();
                if (graphics_trophy[tr_cache] == undefined) {
                    $(hud.endscreentrophy).removeAttr('src');
                }
                else {
                    $(hud.endscreentrophy).attr('src', graphics_trophy[tr_cache]);
                    if(get_carrer(5) < (tr_cache + 1))
                        update_carrer(5, tr_cache + 1);
                }

                u1.img.src = '';
                u2.img.src = '';
                u3.img.src = '';

                $(hud.endscreenmsg).html(msg_trophy[tr_cache + 1]);
                $(hud.end).removeClass("d-none").addClass("d-flex");
                $('#endscreen_id').html(score);
            }, 1000);
    } else
        $(hud.end).removeClass("d-flex").addClass("d-none");
}

// feedback

function setFeedbackUI() {
    if (gameStatus == 'correct' || gameStatus == 'end') {
        hud.gameicon.innerHTML = '<i class="fas fa-check"></i>';
        $('#gameicon-bg').removeClass('bg-dark').addClass('bg-success');
        $('.vs_hider').fadeTo("fast", 0);
    } else if (gameStatus == 'incorrect') {
        hud.gameicon.innerHTML = '<i class="fas fa-times"></i>';
        $('#gameicon-bg').removeClass('bg-dark').addClass('bg-secondary');
    } else if (gameStatus == 'reset' || gameStatus == 'init' || gameStatus == 'ingame') {
        $('.vs_hider').fadeTo("fast", 1);
        $('#gameicon-bg').removeClass('bg-success').addClass('bg-dark');
        hud.gameicon.innerHTML = 'vs';
        hud.gameicon.style = '';
    }
}


// Text Shuffle
