/**
 * @name		Bankability Index Value per Movie for February
 * @author		moreorless.io
 * @version 	1.0
 * @url			https://moreorless.io/credits
 * @license		MIT License
 * */

// Enables the description field (only gm_v1)
var conf_descriptionEnabled = false;
// Enables the gm_v2 (Game Version 2 with Custom Textes)
var conf_v2_enabled = false;


/* Strings
            //LEFT CARD
        0: "has"
        1: "money in his pocket"
            //RIGHT CARD
        2: "has"
        3: "money in his pocket"
            //Other
        4: "PREFIX"
        5: "SUFFIX"
        6: "BUTTON MORE"
        7: "BUTTON LESS"
   */
if(global_language == 'de') {
    // Strings for DE
    var gameStringTable = [
        'ist',
        'pro Film wert',
        'ist',
        'pro Film wert',
        '$',
        '',
        'Mehr',
        'Weniger'
    ];
} else {
    // Strings for EN
    var gameStringTable = [
        'is',
        'worth per movie',
        'is',
        'worth per movie',
        '$',
        '',
        'More',
        'Less'
    ];
}


// Values
var listpool = [
    ["Tom Cruise", 22085864, "https://i.imgur.com/EFISjQN.jpg"],
    ["Will Smith", 17230889, "https://i.imgur.com/PKEglTo.jpg"],
    ["Robert Downey, Jr.", 16624747, "https://i.imgur.com/q3Kzn2X.jpg"],
    ["Kathleen Kennedy", 15602209, "https://i.imgur.com/dN1rZI5.png"],
    ["Clint Eastwood", 14551541, "https://i.imgur.com/rMeqgtz.png"],
    ["Jon Favreau", 14137867, "https://i.imgur.com/zt7Fcu8.png"],
    ["Denzel Washington", 13977780, "https://i.imgur.com/VmLZh2K.png"],
    ["Zack Snyder", 13968862, "https://i.imgur.com/c3FbQvQ.png"],
    ["Kevin Feige", 12752456, "https://i.imgur.com/YsrjsEl.jpg"],
    ["Ben Affleck", 12496754, "https://i.imgur.com/yGGVxg1.png"],
    ["Bradley Cooper", 12345380, "https://i.imgur.com/DA4cEeF.png"],
    ["Vin Diesel", 12270415, "https://i.imgur.com/Rz0WfEp.png"],
    ["Jerry Bruckheimer", 12079061, "https://i.imgur.com/hlrqjQl.jpg"],
    ["Steven Spielberg", 11402240, "https://i.imgur.com/LnKrWVM.jpg"],
    ["Alan Silvestri", 11036356, "https://i.imgur.com/qpKJjpt.png"],
    ["Dwayne Johnson", 10821886, "https://i.imgur.com/G1krAzj.png"],
    ["John Williams", 10729824, "https://i.imgur.com/ZBMBBqy.png"],
    ["John Lasseter", 10569950, "https://i.imgur.com/IXZE4VU.jpg"],
    ["Emma Watson", 10469934, "https://i.imgur.com/LJqHDUZ.png"],
    ["Leonardo DiCaprio", 10358198, "https://i.imgur.com/JvJAunk.jpg"],
    ["Ian McKellen", 10284344, "https://i.imgur.com/p4bv9wn.png"],
    ["Tom Hanks", 10190295, "https://i.imgur.com/zfR6u3z.png"],
    ["Gwyneth Paltrow", 10083474, "https://i.imgur.com/RHiXlFc.png"],
    ["George Clooney", 10074905, "https://i.imgur.com/tBiW2hU.png"],
    ["Michael Keaton", 10035879, "https://i.imgur.com/SsTvxGS.jpg"],
    ["Cameron Diaz", 9712910, "https://i.imgur.com/P0coQce.jpg"],
    ["Adam Sandler", 9323568, "https://i.imgur.com/aAbd3eP.png"],
    ["Matt Damon", 9219842, "https://i.imgur.com/7z0PvUm.png"],
    ["Jim Carrey", 9175675, "https://i.imgur.com/Zd7PT83.png"],
    ["Chiwetel Ejiofor", 9004973, "https://i.imgur.com/i8LRVbH.png"],
    ["Angelina Jolie", 8871406, "https://i.imgur.com/Q7MnF4t.png"],
    ["Julia Roberts", 8866995, "https://i.imgur.com/QbZuA8q.jpg"],
    ["Brad Pitt", 8820085, "https://i.imgur.com/QSiVCs7.png"],
    ["Tom Hardy", 8734439, "https://i.imgur.com/lVIk5vT.png"],
    ["Jason Statham", 8684475, "https://i.imgur.com/HkhStcu.png"],
    ["Samuel L. Jackson", 8565766, "https://i.imgur.com/QiAMvxW.png"],
    ["David Heyman", 8500725, "https://i.imgur.com/9lxr1Jj.png"],
    ["Scarlett Johansson", 8482157, "https://i.imgur.com/bQPljkF.png"],
    ["Djimon Hounsou", 8248214, "https://i.imgur.com/sOY73IP.png"],
    ["Jennifer Lopez", 8127598, "https://i.imgur.com/Ph2iftR.png"],
    ["Bruce Berman", 7984554, "https://i.imgur.com/YxxQY4u.png"],
    ["Ryan Reynolds", 7968746, "https://i.imgur.com/qpgQioM.png"],
    ["Johnny Depp", 7936779, "https://i.imgur.com/Ifl7Ov2.png"],
    ["Harrison Ford", 7844744, "https://i.imgur.com/0jqqjxA.png"],
    ["Russell Crowe", 7844649, "https://i.imgur.com/nJ1hJVN.jpg"],
    ["Seth Rogen", 7556752, "https://i.imgur.com/tYNXT3K.png"],
    ["Eddie Redmayne", 7521214, "https://i.imgur.com/HiDGNqH.jpg"],
    ["Giovanni Ribisi", 7462256, "https://i.imgur.com/ymLqbaP.jpg"],
    ["Chris Evans", 7420240, "https://i.imgur.com/GIgW8dy.png"],
    ["Robin Wright", 7407998, "https://i.imgur.com/GqduQbb.png"]
];
