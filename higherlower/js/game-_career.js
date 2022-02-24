var user_stats = [];
var user = [];
var currenGameKey;
var statsTrophy;

//custom stats variables
var startDate = new Date();
var endDate;


var avatars = [
    {
        name: 'Smile',
        src: 'img/game/icons/avatars/smile.svg'
    }, {
        name: 'Sweat',
        src: 'img/game/icons/avatars/sweat.svg'
    }, {
        name: 'Sampire',
        src: 'img/game/icons/avatars/vampire.svg'
    }, {
        name: 'Sleepy',
        src: 'img/game/icons/avatars/sleepy.svg'
    }, {
        name: 'Sick',
        src: 'img/game/icons/avatars/sick.svg'
    }, {
        name: 'Selfie',
        src: 'img/game/icons/avatars/selfie.svg'
    }, {
        name: 'Robot',
        src: 'img/game/icons/avatars/robot.svg'
    }, {
        name: 'Popcorn',
        src: 'img/game/icons/avatars/popcorn.svg'
    }, {
        name: 'Pain',
        src: 'img/game/icons/avatars/pain.svg'
    }, {
        name: 'Music',
        src: 'img/game/icons/avatars/music.svg'
    }, {
        name: 'Heart',
        src: 'img/game/icons/avatars/heart.svg'
    }, {
        name: 'Confused',
        src: 'img/game/icons/avatars/confused.svg'
    }, {
        name: 'Cheering',
        src: 'img/game/icons/avatars/cheering.svg'
    }, {
        name: 'Bored',
        src: 'img/game/icons/avatars/bored.svg'
    }, {
        name: 'Birthday Boy',
        src: 'img/game/icons/avatars/birthday-boy.svg'
    }, {
        name: 'Angry',
        src: 'img/game/icons/avatars/angry.svg'
    }, {
        name: '3D Glasses',
        src: 'img/game/icons/avatars/3d-glasses.svg'
    }
];

// user_stats = [timesplayed]
function init_carrer() {
    if (getCookie('ml_user_stats')) {
        user_stats = JSON.parse(getCookie('ml_user_stats'));
        L('cookie exist');
    } else {
        L('cookie doesnt exits');
        setCookie('ml_user_stats', JSON.stringify(user_stats), '5000');
    }
    init_carrer_currentGame();

    L('init_carrer');
    L(user_stats);
}

function init_carrer_currentGame() {
    //Check if there is GameData in cookie
    if (getCurrentGameArray() === false) {
        //Check if there is a highscore from the old system
        if (getCookie('mol_hs_' + game_id)) {
            L('Old data exists! : Convert into new career system');
            highscore = parseInt(getCookie('mol_hs_' + game_id)); //Set all highscore to current highscore
            statsTrophy = getTrophy(highscore);
            statsTrophy++;
            eraseCookie('mol_hs_' + game_id); //deletes the old cookie
        } else {
            statsTrophy = 0;
            highscore = 0;
        }
        // 0                        1               2       3           4               5
        //game_id ($game->slug), timesplayed, highscore, timeplayed, score_in_total, trophy (0 = no trophy, 1 = bronze...)
        user_stats.push([game_id, 1, highscore, 0, highscore, statsTrophy]); //pushes the data including old highscore if exists
        setCookie('ml_user_stats', JSON.stringify(user_stats), '5000');
    }
    currenGameKey = getCurrentGameArray();
}


function update_carrer(key, value) {
    user_stats = JSON.parse(getCookie('ml_user_stats'));
    if (value == '+')
        user_stats[currenGameKey][key]++;
    else if (value == '-')
        user_stats[currenGameKey][key]--;
    else
        user_stats[currenGameKey][key] = value;

    //Update Custom vals in background

    //Time online
    endDate = new Date();
    user_stats[currenGameKey][3] += Math.round((endDate.getTime() - startDate.getTime()) / 1000);
    startDate = new Date();

    setCookie('ml_user_stats', JSON.stringify(user_stats), '5000');
}


function get_carrer(key) {
    return user_stats[currenGameKey][key];
}

function get_carrer_all(key) {
    let cache = 0;
    for (var i = 0; i < user_stats.length; i++) {
        cache += parseInt(user_stats[i][key]);
    }
    return cache;
}

function get_carrer_isnotzero(key) {
    let cache = 0;
    for (var i = 0; i < user_stats.length; i++) {
        if (user_stats[i][key] > 0)
            cache++;
    }
    return cache;
}

function getCurrentGameArray() {
    for (let j = 0; j < user_stats.length; j++) {
        if (user_stats[j][0] == game_id)
            return j;
    }
    return false;
}

// User Career Profile

function getOldStats() {
    for (var i = 0; i < games.length; i++) {
        if (getCookie('mol_hs_' + games[i].slug)) {
            highscore = parseInt(getCookie('mol_hs_' + games[i].slug));
            L('Cookie Exists with slug: ' + games[i].slug + ' and highscore of ' + highscore);
            statsTrophy = highscore > 49 ? 4 : highscore > 19 ? 3 : highscore > 9 ? 2 : highscore > 4 ? 1 : 0;
            eraseCookie('mol_hs_' + games[i].slug);
            user_stats.push([games[i].slug, 1, highscore, 0, highscore, statsTrophy]);
            setCookie('ml_user_stats', JSON.stringify(user_stats), '5000');
        }
    }
}1

function displayStats() {
    getOldStats();
    if (getCookie('ml_user_stats')) {
        user_stats = JSON.parse(getCookie('ml_user_stats'));
        L('cookie exist');
    } else {
        return false;
    }
    for (var i = 0; i < user_stats.length; i++) {
        console.log(user_stats[i][0]);
        gamecards.items.push({
            id: user_stats[i][0],
            timesplayed: user_stats[i][1],
            highscore: parseInt(user_stats[i][2]),
            timeplayed: user_stats[i][3].toHHMMSS(),
            totalscore: user_stats[i][4],
            trophy: user_stats[i][5],
            trophysrc: graphics_trophy[user_stats[i][5] - 1],
            title: games[pickGame(user_stats[i][0])].title,
            thumb: 'img/' + games[pickGame(user_stats[i][0])].thumbnail.replace('/', '/og/'),
            url: 'game/' + user_stats[i][0],
        });
    }
}

function pickGame(slug) {
    for (var i = 0; i < games.length; i++) {
        if (games[i].slug == slug) {
            return i;
        }
    }
}

function displayUserStats() {

    let score_total = get_carrer_all(4);
    let playedtimes_total = get_carrer_all(1);
    let timeplayed = get_carrer_all(3);
    let average_score = Math.round(score_total / playedtimes_total * 10) / 10;
    let amounttrophies = get_carrer_isnotzero(5);

    if (getCookie('ml_user')) {
        user = JSON.parse(getCookie('ml_user'));

        user = {
            name: user.name,
            avatar: user.avatar,
            registerDate: user.registerDate,
            totalscore: score_total,
            totaltimesplayed: playedtimes_total,
            totaltimeplayed: timeplayed,
            averagescore: average_score,
            alltrophies: amounttrophies
        };
    } else {
        L('cookie doesnt exits: ml_user');
        user = {
            name: pickRandomName(),
            avatar: avatars[Math.floor(Math.random() * avatars.length)],
            registerDate: new Date(),
            totalscore: score_total,
            totaltimesplayed: playedtimes_total,
            totaltimeplayed: timeplayed,
            averagescore: average_score,
            alltrophies: amounttrophies
        };
    }
    setCookie('ml_user', JSON.stringify(user), '5000');

    var userProfile = new Vue({
            el: '.profilevuejs',
            data: {
                name: user.name,
                avatar: user.avatar,
                registerDate: String(user.registerDate).slice(0, 10),
            }
        }
    );

    var userProfile = new Vue({
            el: '.highlightsvuejs',
            data: {
                totalscore: user.totalscore,
                totaltimesplayed: user.totaltimesplayed,
                totaltimeplayed: user.totaltimeplayed.toHHMMSS(),
                averagescore: user.averagescore,
                alltrophies: user.alltrophies
            }
        }
    );
}

function updateUsername(name) {

    if (getCookie('ml_user')) {
        user = JSON.parse(getCookie('ml_user'));
        if (user.name !== undefined) {
            user.name = name;
            user.avatar = avatars[Math.floor(Math.random() * avatars.length)];
        }
        setCookie('ml_user', JSON.stringify(user), '5000');
    }
}

function pickRandomName() {
    let names = ['Zoe', 'Michael', 'Steve', 'George', 'Dave', 'Julian', 'Kathi', 'Bruno', 'Tommy'];
    return names[Math.floor(Math.random() * names.length)];
}


// Functions for Hud

function getHighscore() {
    if (highscore == undefined) {
        highscore = get_carrer(2);
    }
    if (score > highscore) {
        highscore = score;
        update_carrer(2, score);
    }
    return highscore;
}
