/**
 * @name		Game Mode V1 Example
 * @author		moreorless.io
 * @version 	1.0
 * @url			https://moreorless.io/credits
 * @license		MIT License
 * */

// Enables the description field (only gm_v1)
var conf_descriptionEnabled = false;
// Enables the gm_v2 (Game Version 2 with Custom Textes)
var conf_v2_enabled = false;


// Strings
if(global_language == 'de') {
    // Strings for DE
    var gameStringTable = [
        'hat einen',
        'Tomatometer Score',
        'hat einen',
        'Tomatometer Score',
        '',
        '%',
        'Mehr',
        'Weniger'
    ];
} else {
    // Strings for EN
    var gameStringTable = [
        'has a',
        'Tomatometer Score',
        'has a',
        'Tomatometer Score',
        '',
        '%',
        'More',
        'Less'
    ];
}


// Values
var listpool = [
    // name, value, thumbnail, description (optional)
    ['Star Wars: The Rise of Skywalker', 52,'https://i.imgur.com/xwOMwC2.jpg'],
    ['Playmobil: The Movie', 17,'https://i.imgur.com/OvupV7U.jpg'],
    ['Dolittle', 15,'https://i.imgur.com/vfKjcBE.png'],
    ["Charlie's Angels (2019)", 52,'https://i.imgur.com/CjMXnPK.jpg'],
    ['The Grudge', 20,'https://i.imgur.com/uEDDkYl.jpg'],
    ['The Hunt', 55,'https://i.imgur.com/DslXaoB.jpg'],
    ['The Night Clerk', 37,'https://i.imgur.com/arhT9fa.jpg'],
    ['Bloodshot', 30,'https://i.imgur.com/KdCB2kW.jpg'],
    ['Cats', 20,'https://i.imgur.com/yBLmZDy.jpg'],
    ['I Still Believe', 49,'https://i.imgur.com/lpPyNV9.jpg'],
    ['Run This Town', 45,'https://i.imgur.com/SIkFeiS.jpg'],
    ['Impossible Monsters', 50,'https://i.imgur.com/n7Awr25.jpg'],
    ['Intrigo: Death of an Author', 13,'https://i.imgur.com/RVPbgWZ.jpg'],
    ['The Kindness of Strangers', 15,'https://i.imgur.com/kau2izS.jpg'],
    ['2050', 20,'https://i.imgur.com/jrYdCZZ.jpg'],
    ['The Corrupted', 30,'https://i.imgur.com/vKxSI8k.jpg'],
    ['Brahms: The Boy II', 10,'https://i.imgur.com/F6ahvOA.jpg'],
    ['Imprisoned', 0,'https://i.imgur.com/1BJ9Dqa.jpg'],
    ['Jexi', 14,'https://i.imgur.com/NzUCN0K.jpg'],
    ['The Great Alaskan Race', 11,'https://i.imgur.com/WKkifVw.jpg'],
    ['Like a Boss', 20,'https://i.imgur.com/yKGsHHm.jpg'],
    ['Countdown', 26,'https://i.imgur.com/smOMkVt.jpg'],
    ['The Climbers', 33,'https://assets.cdn.moviepilot.de/files/2c514f1396f6d647dc8581e14b74978c223715fa0a59c0ac0a24bf20131e/limit/500/1000/The+Climbers_p_01.jpg'],
    ['The Host', 33,'https://i.imgur.com/uvF0ZEp.jpg'],
    ['Invasion Planet Earth', 0,'https://i.imgur.com/XFSK0mO.jpg'],
    ['John Henry', 0,'https://i.imgur.com/sxwzufM.jpg'],
    ['Disturbing the Peace', 21,'https://i.imgur.com/pHPeY74.jpg'],
    ['Get Gone', 0,'https://i.imgur.com/VZNyqbx.jpg'],
    ['The Murder of Nicole Brown Simpson', 0,'https://i.imgur.com/ZCsDCwa.jpg'],
    ["Tyler Perry's A Fall from Grace", 0,'https://i.imgur.com/e7YtZIM.jpg'],
    ['The Last Thing He Wanted', 6,'https://i.imgur.com/6CrIL9G.jpg'],
    ['Impractical Jokers: The Movie', 35,'https://i.imgur.com/R6nF4M9.jpg'],
    ['Clover', 33,'https://i.imgur.com/9tBzdXJ.jpg'],
    ['Coda', 33,'https://i.imgur.com/Vptz8vi.jpg'],
    ['Lazy Susan', 11,'https://i.imgur.com/MR3vCN4.jpg'],
    ['The Postcard Killings', 28,'https://i.imgur.com/WUMugWx.jpg'],
    ['Coffee & Kareem', 23,'https://i.imgur.com/0f4RGNE.jpg'],
    ['Pretenders', 20,'https://i.imgur.com/x6qM78g.jpg'],
    ['Polaroid', 0,'https://i.imgur.com/eEHc2lO.jpg'],
    ['The Kitchen', 24,'https://i.imgur.com/cPI0ICl.jpg'],
    ['Welcome To Curiosity', 0,'https://i.imgur.com/qaULu7S.jpg'],
    ['A Million Little Pieces', 27,'https://i.imgur.com/ds7zsP9.jpg'],
    ['The Death and Life of John F. Donovan', 21,'https://i.imgur.com/DPBzcsW.jpg'],
    ['Prey', 13,'https://i.imgur.com/k0wjn0p.jpg'],
    ['Rattlesnake', 28,'https://i.imgur.com/RZrnTrf.jpg'],
    ['Corporate Animals', 25,'https://i.imgur.com/tdPHQe3.jpg'],
    ['Rambo: Last Blood', 27,'https://i.imgur.com/sP0daje.jpg'],
    ['Lucy in the Sky', 22,'https://i.imgur.com/cPM5GCl.jpg'],
    ['Mary', 4,'https://i.imgur.com/zer05sL.jpg'],
    ['Drive (2019)', 0,'https://i.imgur.com/ac7Cl6A.jpg'],
    ['Verotika', 27,'https://i.imgur.com/9TSQZjO.jpg'],
    ['The Influence (La influencia)', 0,'https://i.imgur.com/99smqup.jpg'],
    ['Killerman', 26,'https://i.imgur.com/cH8sC40.png'],
    ['Semper Fi', 19,'https://i.imgur.com/cqI79EJ.jpg'],
    ['Lucky Day', 11,'https://i.imgur.com/uRTk18B.jpg'],
    ['Entangled', 20,'https://i.imgur.com/GG1Iqfa.jpg'],
    ['The Mandela Effect', 20,'https://i.imgur.com/VOvcXoX.jpg'],
    ['Dark Phoenix', 23,'https://i.imgur.com/AEkYtfy.png'],
    ['Men in Black International', 23,'https://i.imgur.com/ClPYkpZ.jpg'],
    ['Iron Sky: The Coming Race', 29,'https://i.imgur.com/wBYlt2b.jpg'],
    ['Red Joan', 30,'https://i.imgur.com/F73B8XN.jpg'],
    ["Jacob's Ladder", 5,'https://i.imgur.com/Vewmz8L.jpg'],
    ['Otherhood', 25,'https://i.imgur.com/bTiHDKK.jpg'],
    ['The Curse of La Llorona', 29,'https://i.imgur.com/E7pAGOT.jpg'],
    ['Sextuplets', 14,'https://i.imgur.com/45ksNTU.png'],
    ['Night Hunter (Nomis)', 14,'https://i.imgur.com/DkRte2s.jpg'],
    ['Slender Man', 6,'https://i.imgur.com/6JPpmXm.png'],
    ["Tyler Perry's A Madea Family Funeral", 12,'https://i.imgur.com/ic1vnzO.jpg'],
    ['I Still See You', 8,'blob:https://imgur.com/11266912-18ff-4328-9f42-5a7b6bbdcb17'],
    ['Siberia', 11,'https://i.imgur.com/SdYQTtq.jpg']
];
