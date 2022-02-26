var graphics_trophy = [
    '../img/game/icons/trophy.svg',
    'https://image.flaticon.com/icons/svg/744/744962.svg',
    'https://image.flaticon.com/icons/svg/744/744929.svg',
    'https://image.flaticon.com/icons/svg/744/744957.svg'
];



// Utilities


Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

Array.prototype.remove = function () {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


function prepareCouldUseListpoolLogic() {
    listpoolCouldUse = [];
    for (let i = 0; i < listpool.length; i++) {
        listpoolCouldUse.push(i);
    }
}


function getNotUsedListPoolId() {

    listpoolFoundItem = false;

    while (listpoolFoundItem == false) {
        if (listpoolCouldUse.length == 0) {
            return false;
        }
        listpoolNewPick = listpoolCouldUse.random();

        if (listpoolCouldUse.contains(listpoolNewPick)) {
            listpoolCouldUse.remove(listpoolNewPick);
            listpoolFoundItem = true;
        }
    }

    return listpoolNewPick;
}

function setAnimationVars() {
    L('isMobile: ' + isMobile());
    if (isMobile()) {
        ui_direction = 'bottom';
        ui_directionDistance = window.innerHeight / 100 * 43;
    } else {
        ui_direction = 'right';
        ui_directionDistance = window.innerWidth / 2;
    }
}

function isMobile() {
    let w = window.innerWidth;
    return (w < 576) ? true : false;
}

function isDescriptionEnabled() {
    if (conf_v2_enabled == false && conf_descriptionEnabled) {
        if (listpool[0][3] != undefined) {
            return true;
        } else {
            L('CONFIG_ERROR: Description is enabled but there is no description.');
            return false;
        }
    } else {
        return false;
    }
}

Number.prototype.toHHMMSS = function () {
    var seconds = Math.floor(this),
        hours = Math.floor(seconds / 3600);
    seconds -= hours*3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes*60;

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

// Cookies

function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';path=/;expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, '-1');
}


// developer utilies
function L(i) {
    console.log(i);
}

function getGameStatus() {
    L('GameStatus: ' + gameStatus);
    return gameStatus;
}
