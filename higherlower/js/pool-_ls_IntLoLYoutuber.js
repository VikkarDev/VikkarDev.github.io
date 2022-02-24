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
    ['MagikarpUsedFly', 1220000,'https://yt3.ggpht.com/a/AATXAJyG8eza0R9f9SB5PR3mAqSVojnXRa1TlLgt2g=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Nightblue3', 2700000,'https://yt3.ggpht.com/a/AATXAJy9kJ2hfLOWCZJNT5WcIzyljBvjuAkhQUh9cQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['BunnyFuFuu', 1680000,'https://yt3.ggpht.com/a/AATXAJzw14WwDeF1WgM3ckUvv240aric1SvqIr3rHg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Trick2G', 1130000,'https://yt3.ggpht.com/a/AATXAJzSEAkSyuKexiNTnxKLd3KEUXwvwGw_yWa-og=s200-c-k-c0xffffffff-no-rj-mo'],
    ['SoloRenektonOnly', 581000,'https://yt3.ggpht.com/a/AATXAJz0IGnhJU7eynUwIz-PPaEaxsVUatPz74ZZdQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Anklespankin', 652000,'https://yt3.ggpht.com/a/AATXAJxtT2MbpuV1-SRMgTKMGl-NDZFR-_AXkhy_NQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Dyrus', 814000,'https://yt3.ggpht.com/a/AATXAJyKUxTmXBFmxCHjinu3wnymU3tb3mYbjd0wDQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Redmercy', 1260000,'https://yt3.ggpht.com/a/AATXAJyN1qmFrQuiDkrH6T_IK1b77DGntCtzQ2ODlw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Gosu', 1390000,'https://yt3.ggpht.com/a/AATXAJwBdcfddr3ViUW5Qpk44S90V-cHEqE6Vn6JCQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Pants are Dragon', 637000,'https://yt3.ggpht.com/a/AATXAJzfa1aBaQiFNN2a2kMv9Euud58eCHGkwSkvGA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Kshaway', 1030000,'https://yt3.ggpht.com/a/AATXAJxZWH9SfOvEutIAWlTE_92kXArRk5CIE3jh3w=s200-c-k-c0xffffffff-no-rj-mo'],
    ['LilyPichu', 1980000,'https://yt3.ggpht.com/a/AATXAJy5tOcDmPE2QjQHQuedafhJBluMoeYPmmAqJA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Dumbs', 379000,'https://yt3.ggpht.com/a/AATXAJw8BIcitjjYo59-nRvKFXpj6N4TaYUVExclnw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Pokimane', 4630000,'https://yt3.ggpht.com/a/AATXAJw35iLJZEF-cXCjIG6FG03j251-sXMKi-qNjw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Instalok', 1370000,'https://yt3.ggpht.com/a/AATXAJyPTNzzAvO5SxdSKDmotRrijOI7y4pmnh2mGA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Professor Akali', 767000,'https://yt3.ggpht.com/a/AATXAJx-bW-O4cDs3rVONMIgO0Mqz9WyC5qiq8nT9Q=s200-c-k-c0xffffffff-no-rj-mo'],
    ['TSM', 2230000,'https://yt3.ggpht.com/a/AATXAJxKXGLgdzOI4n-fJDS-07R0WfAmOzzPERCIaA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Cowsep', 713000,'https://yt3.ggpht.com/a/AATXAJyaAzgbOI_978OylSVjk2vjqMRqtJYd0RH5=s200-c-k-c0xffffffff-no-rj-mo'],
    ['lone coyote', 466000,'https://yt3.ggpht.com/a/AATXAJzCLQ9BJMxMLS2ekXB-VF_516Mvh4mk6aTgkA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['RememberTheBeat', 200000,'https://yt3.ggpht.com/a/AATXAJxUoXCsNjubGY7ppWO-WiFqhnWJyg2hLfe4iw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Protatomonster', 1090000,'https://yt3.ggpht.com/a/AATXAJy8udMFlpFVYgQtZRcPe0tJKlWguDPeVjx-eg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Bricky', 599000,'https://yt3.ggpht.com/a/AATXAJy2hboVqWFsSH5qYVy7i7ZJGW6Up7Nrl_ZOEQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Gbay99', 463000,'https://yt3.ggpht.com/a/AATXAJyDofxWSa0fibnYqWn_dIhaAcAh19abi6lS_w=s200-c-k-c0xffffffff-no-rj-mo'],
    ['loltyler1', 2120000,'https://yt3.ggpht.com/a/AATXAJzXr1sp3F5WCjGqGNleKJfIh-gwwgsSDuqkKA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Imaqtpie', 1670000,'https://yt3.ggpht.com/a/AATXAJyaRA4stqKIAVDzyGcxqIDs200QVHFwToCVRiA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Shaclone', 346000,'https://yt3.ggpht.com/a/AATXAJyB3doy_9gHoy_LfwSdWSCCipHQBHHGIIn21A=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Boxbox', 1300000,'https://yt3.ggpht.com/a/AATXAJzYREcakWMWXdw1RK8E5Mt8au6if-h3Tc6AHQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Sky Williams', 841000,'https://yt3.ggpht.com/a/AATXAJwOEFIA28walfifKUy8Utlsn0HlRDfr4Zzs7w=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Sneaky', 427000,'https://yt3.ggpht.com/a/AATXAJyRWXnSGMBJqxCGCT8_K5y2fWU-2ZRK1kd3Ig=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Today on the Korean Server', 469000,'https://yt3.ggpht.com/a/AATXAJxMmUk79UwN67oN7QwWRq4fw2rxP2Bh9Fg2jw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Yassuo', 1420000,'https://yt3.ggpht.com/a/AATXAJxyUhrGCvloEqdnDDwjOXqtVa-QCrVAXuOWjQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Youmuus', 369000,'https://yt3.ggpht.com/a/AATXAJxmSX78DCFPazZ8RDuVfuJbwqnxgkvCpjdqjA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Tobias Fate', 713000,'https://yt3.ggpht.com/a/AATXAJxhBnzV5HEgJnZutVZOe3ou8l3o6M0L-hCOqQ=s200-c-k-c0xffffffff-no-rj-mo']
];

