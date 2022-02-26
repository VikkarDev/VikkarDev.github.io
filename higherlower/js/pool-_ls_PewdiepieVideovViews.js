// Config
var conf_descriptionEnabled = true;
var conf_v2_enabled = false;


// Strings
if(global_language == 'de') {
    // Strings
    var gameStringTable = [
        'hat',
        'Video Views',
        'hat',
        'Video Views',
        '',
        '',
        'Mehr',
        'Weniger'
    ];
} else {
    var gameStringTable = [
        'has',
        'Video Views',
        'has',
        'Video Views',
        '',
        '',
        'More',
        'Less'
    ];
}

// Values
var listpool = [
    // name, value, thumbnail
    ['bitch lasagna', 245346796,'https://i3.ytimg.com/vi/6Dh-RL__uN4/maxresdefault.jpg'],
    ['Congratulations', 170678249,'https://i3.ytimg.com/vi/PHgc8Q6qTjc/maxresdefault.jpg'],
    ['A Funny Montage', 89206989,'https://i3.ytimg.com/vi/gRyPjRrjS34/maxresdefault.jpg'],
    ['THE RUBY PLAYBUTTON / YouTube 50 Mil Sub Reward Unbox', 76324147,'https://i3.ytimg.com/vi/7Vj5M0qKh8g/maxresdefault.jpg'],
    ["YouTube Rewind 2018, but it's actually good", 72374855,'https://i3.ytimg.com/vi/By_Cn5ixYLg/maxresdefault.jpg'],
    ['FUNNY MONTAGE.. #2', 71872381,'https://i3.ytimg.com/vi/MkXVM6ad9nI/maxresdefault.jpg'],
    ['Jabba the Hutt (PewDiePie Song) by Schmoyoho', 66570688,'https://i3.ytimg.com/vi/lxw3C5HJ2XU/maxresdefault.jpg'],
    ['FUNNY GAMING MONTAGE!', 50699591,'https://i3.ytimg.com/vi/rc1XYAJCZ80/maxresdefault.jpg'],
    ['Unboxing 100 MIL YouTube AWARD!!', 48163835,'https://i3.ytimg.com/vi/DYlesHOaPkY/maxresdefault.jpg'],
    ['JAKE PAUL', 42376608,'https://i3.ytimg.com/vi/TuIcBPm90aM/maxresdefault.jpg'],
    ['WORLDS MOST OFFENSIVE GAME? - (Fridays With PewDiePie - Part 73)', 41404385,'https://i3.ytimg.com/vi/z-3xIw730pg/maxresdefault.jpg'],
    ['FUNNY MONTAGE (bonus)', 41149488,'https://i3.ytimg.com/vi/X3HON0P6q6c/maxresdefault.jpg'],
    ['FUNNY MONTAGE #3', 40814821,'https://i3.ytimg.com/vi/nxQO53J2_OQ/maxresdefault.jpg'],
    ['BROFIST (PewDiePie Song, By Roomie)', 40593530,'https://i3.ytimg.com/vi/5pEPpNpbnCI/maxresdefault.jpg'],
    ['GAME BANNED FROM KIDS? - Talking Angela', 38296468,'https://i3.ytimg.com/vi/pzYxlKSgxh0/maxresdefault.jpg'],
    ['Minecraft Part 1', 37397734,'https://i3.ytimg.com/vi/VGt-BZ-SxGI/maxresdefault.jpg'],
    ['PewDiePie Hej Monika Remix by Party In Backyard', 36997458,'https://i3.ytimg.com/vi/Vk8UEWHYfEg/maxresdefault.jpg'],
    ['FLAPPY BIRD - DONT PLAY THIS GAME!', 36671502,'https://i3.ytimg.com/vi/lQz6xhlOt18/maxresdefault.jpg'],
    ['DELETING MY CHANNEL', 36213030,'https://i3.ytimg.com/vi/Y39LE5ZoKjw/hqdefault.jpg'],
    ['DRAW MY LIFE - PewDiePie', 35136613,'https://i3.ytimg.com/vi/6yBBO8PzWFI/maxresdefault.jpg'],
    ['LOGAN PAUL', 34228001,'https://i3.ytimg.com/vi/nFmSepfF48o/maxresdefault.jpg'],
    ['FABULOUS! (PewDiePie Song, By: Roomie) | PewDiePie', 33755304,'https://i3.ytimg.com/vi/oLaOsNwmieE/hqdefault.jpg'],
    ['SHOOTING MY 50 MILLION AWARD!', 33710286,'https://i3.ytimg.com/vi/Jrvfoybj98Q/maxresdefault.jpg'],
    ['READING MEAN COMMENTS. - (Fridays With PewDiePie - Part 78)', 33346170,'https://i3.ytimg.com/vi/5163pfq4xAg/maxresdefault.jpg'],
    ['Bitch Lasagna v1.2', 32092748,'https://i3.ytimg.com/vi/PX5QgITQAwk/maxresdefault.jpg'],
    ['Marzia & Felix - Wedding 19.08.2019', 31926193,'https://i3.ytimg.com/vi/7PIMiDcwNvc/maxresdefault.jpg'],
    ['THE DIAMOND PLAY BUTTON!! (Part 1)', 31528249,'https://i3.ytimg.com/vi/VY4wCi1pPkU/maxresdefault.jpg'],
    ['His Name Is Pewdiepie - Extended Version (By Roomie)', 31415153,'https://i3.ytimg.com/vi/BmxCR4_abd4/maxresdefault.jpg'],
    ['YouTube Rewind 2018 review', 31195826,'https://i3.ytimg.com/vi/wYT1Qq6mo4I/maxresdefault.jpg'],
    ['THE MOST ANNOYING SOUND IN THE WORLD!', 30454730,'https://i3.ytimg.com/vi/baylWdHClNE/maxresdefault.jpg'],
    ["WHO'S MORE LIKELY TO...?", 29999604,'https://i3.ytimg.com/vi/jA0xR2Ho9UU/maxresdefault.jpg'],
    ['HAPPY WHEELS - FUNNY MOMENTS MONTAGE #3', 29792002,'https://i3.ytimg.com/vi/tNwFexjnbyM/maxresdefault.jpg'],
    ['No Swear Electric Challenge. (The Impossible Game)', 29688921,'https://i3.ytimg.com/vi/BXO1J3y2i6w/maxresdefault.jpg'],
    ['PewDiePie Reacts To: Elders React To: PewDiePie... | PewDiePie', 29635634,'https://i3.ytimg.com/vi/p-KQW-cSpoc/hqdefault.jpg'],
    ['HAPPY WHEELS - FUNNY MOMENTS MONTAGE', 28756001,'https://i3.ytimg.com/vi/pXO76dbictU/maxresdefault.jpg'],
    ['GREATEST PERVERT GAME OF ALL TIME. (Love Death 4: Realtime Lovers)', 28727523,'https://i3.ytimg.com/vi/Jy8fAyXTij4/hqdefault.jpg'],
    ['Can this video hit 1 million likes?', 28426078,'https://i3.ytimg.com/vi/hHR9aM494rs/maxresdefault.jpg'],
    ['The Impossible Quiz.', 28032602,'https://i3.ytimg.com/vi/rOZ0OHaPmnk/maxresdefault.jpg'],
    ['TESTING OUT EYETRACKING', 27128088,'https://i3.ytimg.com/vi/ySfDi1EwgQ8/maxresdefault.jpg'],
    ['Dr. Phil DESTROYS spoiled brat!!!! . -- Dr Phil #7', 26422009,'https://i3.ytimg.com/vi/fBc4Q_htqPg/maxresdefault.jpg'],
    ['12 Year Old Simulator', 26188135,'https://i3.ytimg.com/vi/VO7BkG6mTFs/maxresdefault.jpg'],
    ['BOTTLEFLIP CHALLENGE!', 25535774,'https://i3.ytimg.com/vi/lyl6ibqnyis/maxresdefault.jpg'],
    ['I Google Myself..', 25334061,'https://i3.ytimg.com/vi/Yr14Io0wsiU/maxresdefault.jpg'],
];
