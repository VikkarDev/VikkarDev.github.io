// Config
var conf_descriptionEnabled = false;
var conf_v2_enabled = false;

// Strings
if(global_language == 'de') {
    // Strings
    var gameStringTable = [
        'hat',
        'YouTube Abonnenten',
        'hat',
        'YouTube Abonnenten',
        '',
        '',
        'Mehr',
        'Weniger'
    ];
} else {
    // Strings
    var gameStringTable = [
        'has',
        'YouTube Subscribers',
        'than',
        'YouTube Subscribers',
        '',
        '',
        'More',
        'Less'
    ];
}


// Values
var listpool = [
    // name, value, thumbnail
    ['Lachlan', 12500000,'https://yt3.ggpht.com/a/AATXAJxKou8iy1hgh3brlBPXyt0lnc803APsBg-mHw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Tfue', 11500000,'https://yt3.ggpht.com/a/AATXAJydKzgeEdPCr2bLh5zKZFMm9VzbTTOqJlY=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Muselk', 8250000,'https://yt3.ggpht.com/a/AATXAJxV8spMJcsbvKIqytgZxF8DkOYWC2DyLJ5dxA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['LazarBeam', 12800000,'https://yt3.ggpht.com/a/AATXAJzGLiAGBJVUCecUb34uDtwMwAvX5WLsioM2cQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Ninja', 22900000,'https://yt3.ggpht.com/a/AATXAJzI2-iPLioy-RFlAX7dh0j7lIBvwjdzYnYNiw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['mrfreshasian', 2890000,'https://yt3.ggpht.com/a/AATXAJxClRm4I7P1lFihAW0QKPrKTMUPJzEHT-aUQg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['dakotaz', 3000000,'https://yt3.ggpht.com/a/AATXAJz08zQYbAlHDiMSWH4inBVtfTSV3--4woOfBw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['DrLupo', 1610000,'https://yt3.ggpht.com/a/AATXAJzLDOpqo9p4wOVTziRSd4CNBuz5wNGpjwRNcw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Daequan Loco', 5210000,'https://yt3.ggpht.com/a/AATXAJxiDUIxpEO5UH-HRAuO7TkLX79AoIxGpArXew=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Ceeday', 6610000,'https://yt3.ggpht.com/a/AATXAJzC8vBkY94TGKfb5jiZjLu4qeZ53BuKvZcjEQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['SypherPK', 2610000,'https://yt3.ggpht.com/a/AATXAJzGSxQ92XhWY4UZbW3sJC8me0TXW9OdQFbMuQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Vikkstar123', 5730000,'https://yt3.ggpht.com/a/AATXAJw5PrTYLrGrt1q2HU3U5BBYCqHdyDXprVEq1g=s200-c-k-c0xffffffff-no-rj-mo'],
    ['TimTheTatman', 1870000,'https://yt3.ggpht.com/a/AATXAJzBI9o32SUBkTou90N1vdG0AFuMUuoGCRzVAQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Pokimane', 4640000,'https://yt3.ggpht.com/a/AATXAJw35iLJZEF-cXCjIG6FG03j251-sXMKi-qNjw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Cloakzy', 1020000,'https://yt3.ggpht.com/a/AATXAJy-TwKieXZNFOScP5Ix5rXYxHhe02r0zAMLKA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Ali-A', 16500000,'https://yt3.ggpht.com/a/AATXAJxwXMHkaXZ_2L56wbnGgexUmbtTu0eaewLPJA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['BCC Trolling', 10500000,'https://yt3.ggpht.com/a/AATXAJw5fywLC-DtsBx3sEtJ_zxUhr_PmceDUzB1dg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['McCreamy', 4000000,'https://yt3.ggpht.com/a/AATXAJxNK51TRcVs00UCkJgGS1VAOL-eQKH4cFVqWQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['SSundee', 13300000,'https://yt3.ggpht.com/a/AATXAJwfG2l128vCinuSm790F7rDEwJj1LNM8jxigw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Avxry', 2120000,'https://yt3.ggpht.com/a/AATXAJwE3MRG3OlBi4ac3HHky_jBHAze99U5_FOcog=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Clix', 531000,'https://yt3.ggpht.com/a/AATXAJz0y5-_qfpU3fw59N4_TT5R08X5LHOHFBWsDg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Mongraal', 2500000,'https://yt3.ggpht.com/a/AATXAJyXeGVmmW0uJc9i-7pqn3qXUNcntZLWdx1xKw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Bugha', 1920000,'https://yt3.ggpht.com/a/AATXAJz_kDM92Pro9JVH1yrJuIiPnnr2lTYINYTVhA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['FaZe H1ghSky1', 1430000,'https://yt3.ggpht.com/a/AATXAJxRl8j1xDbN66lTbdPXO6ZkxT_NOCJjlEwZPQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Randumb', 2430000,'https://yt3.ggpht.com/a/AATXAJwoKVQFf_cLcCQeE4wTPkOAKtRFcit2mTYdLA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Typical Gamer', 8990000,'https://yt3.ggpht.com/a/AATXAJyg4uEXFLVr28XFKdH9e0EnPOXBAsGMGNgSmQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Yung Chip', 1570000,'https://yt3.ggpht.com/a/AATXAJz5gIc7bJaD1joccm09R8gFo1MyhniNG032ww=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Pinky', 1830000,'https://yt3.ggpht.com/a/AATXAJzZLn2cWHrxqzPmqiQ3SWRonAaPYk5NBwnJ-g=s200-c-k-c0xffffffff-no-rj-mo'],
    ['benjyfishy', 595000,'https://yt3.ggpht.com/a/AATXAJyEtjGMJX2h_5oCzuKVMUeQYHAXtchKeILMvQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['DanTDM', 22500000,'https://yt3.ggpht.com/a/AATXAJyyP_t1jv2joLvov1qm_3qmWOHQ7EXjH9RPcw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['I Talk Fortnite', 529000,'https://yt3.ggpht.com/a/AATXAJwwrRfvCuNV_ok7svmxwoLbsTyW6PZJS8Cy1A=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Bakbak', 686000,'https://yt3.ggpht.com/a/AATXAJzk87_p-Rracno5dpqqJxHA9_H6PapU-tqzLQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Kiwiz', 2720000,'https://yt3.ggpht.com/a/AATXAJwRak2SuqZIx_-9h67CEZFXKEjfWWfuC6Nu3A=s200-c-k-c0xffffffff-no-rj-mo'],
    ['NoahJAFK', 395000,'https://yt3.ggpht.com/a/AATXAJyVUqbFnuATZIdwMNoJ1_BLjIg9kxJxXkKowQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['MM7Games', 4100000,'https://yt3.ggpht.com/a/AATXAJwS_UraqT0X0QpZqtXnf98Pxi0oR_fdxzydxA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['AlexRamiGaming', 710000,'https://yt3.ggpht.com/a/AATXAJxFK0X5kEV2Q6B-5pBS5eSTqMfMthY1FjDg-w=s200-c-k-c0xffffffff-no-rj-mo']
];
