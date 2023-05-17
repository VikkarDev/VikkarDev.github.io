// CODED BY Spiralio
let ytVids = [];

function resetYTVids() {
    ytVids = [
        {
         "title": "German Reacts to Oversimplified's Punic Wars!",
         "date": "2022-09-04T15:33:13Z",
         "thumbnail": "https://i.ytimg.com/vi/gk2P2LT2pg8/hqdefault.jpg",
         "views": "96657"
        },
        {
         "title": "I'm BANNED From Turkey After This...",
         "date": "2022-09-02T14:30:06Z",
         "thumbnail": "https://i.ytimg.com/vi/KVKsSmqS8KU/maxresdefault.jpg",
         "views": "176731"
        },
        {
         "title": "So I Played Modern Day Russia...",
         "date": "2022-08-28T18:48:36Z",
         "thumbnail": "https://i.ytimg.com/vi/K7UqsYtSeg8/maxresdefault.jpg",
         "views": "304006"
        },
        {
         "title": "THIS Is How America Will BREAK China!",
         "date": "2022-08-26T16:23:42Z",
         "thumbnail": "https://i.ytimg.com/vi/diOkhZzxi1I/maxresdefault.jpg",
         "views": "82608"
        },
        {
         "title": "So I Played The Poorest Country In HOI4...",
         "date": "2022-08-23T15:18:36Z",
         "thumbnail": "https://i.ytimg.com/vi/ZXXSOfszKRw/maxresdefault.jpg",
         "views": "193016"
        },
        {
         "title": "Why NATO Might Break Russia Soon...",
         "date": "2022-08-20T14:58:02Z",
         "thumbnail": "https://i.ytimg.com/vi/wWcGxB82H7k/maxresdefault.jpg",
         "views": "154987"
        },
        {
         "title": "I Became The Ultimate M1LF Hunter...",
         "date": "2022-08-17T15:21:04Z",
         "thumbnail": "https://i.ytimg.com/vi/-O4ZalxatgI/maxresdefault.jpg",
         "views": "56767"
        },
        {
         "title": "I Made Germany Even Worse...",
         "date": "2022-08-14T13:30:04Z",
         "thumbnail": "https://i.ytimg.com/vi/6AJqMP-kpzI/hqdefault.jpg",
         "views": "212873"
        },
        {
         "title": "The Greatest Bannerlord Story Comes To An End...",
         "date": "2022-08-06T14:30:10Z",
         "thumbnail": "https://i.ytimg.com/vi/X5loylF9h5I/maxresdefault.jpg",
         "views": "93755"
        },
        {
         "title": "So They Added Social Credits To HOI4...",
         "date": "2022-07-31T17:39:14Z",
         "thumbnail": "https://i.ytimg.com/vi/hCarS7M6kEQ/maxresdefault.jpg",
         "views": "231508"
        },
        {
         "title": "HOI4 But I Manipulate THE WORLD With Mercenaries!",
         "date": "2022-07-28T13:51:36Z",
         "thumbnail": "https://i.ytimg.com/vi/uI9ysj7CYHs/maxresdefault.jpg",
         "views": "178625"
        },
        {
         "title": "Germans...",
         "date": "2022-07-21T14:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/83WPDdq82vw/maxresdefault.jpg",
         "views": "115054"
        },
        {
         "title": "Can YOU Form The NEW Mongolian Empire!?",
         "date": "2022-07-18T15:17:40Z",
         "thumbnail": "https://i.ytimg.com/vi/uDf2cKJR44A/maxresdefault.jpg",
         "views": "127078"
        },
        {
         "title": "The BEST HOI4 Country NOBODY Plays!",
         "date": "2022-07-13T16:17:46Z",
         "thumbnail": "https://i.ytimg.com/vi/E24zWPgejlU/maxresdefault.jpg",
         "views": "177466"
        },
        {
         "title": "WAIT! This Is The Most BASED Germany...",
         "date": "2022-07-09T14:57:26Z",
         "thumbnail": "https://i.ytimg.com/vi/sL1iAj7Z17k/maxresdefault.jpg",
         "views": "198612"
        },
        {
         "title": "German Forming a BASED Germany...",
         "date": "2022-07-06T16:36:23Z",
         "thumbnail": "https://i.ytimg.com/vi/yS-TVGCgxLw/maxresdefault.jpg",
         "views": "224732"
        },
        {
         "title": "The BEST HOI4 Mod Is Back With a HUGE Update!",
         "date": "2022-07-02T14:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/aAQL3FhCvfg/maxresdefault.jpg",
         "views": "241461"
        },
        {
         "title": "How I Manipulated EVERYONE In HOI4 Multiplayer...",
         "date": "2022-06-29T15:00:15Z",
         "thumbnail": "https://i.ytimg.com/vi/Hc1sKanm8I0/maxresdefault.jpg",
         "views": "157639"
        },
        {
         "title": "German In a Bunker BUT He WINS...",
         "date": "2022-06-25T15:00:16Z",
         "thumbnail": "https://i.ytimg.com/vi/dMdgrS0Z8yg/maxresdefault.jpg",
         "views": "187903"
        },
        {
         "title": "$5,000 If You Win This HOI4 Multiplayer Game!",
         "date": "2022-06-21T14:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/9ya2SXz_4YQ/maxresdefault.jpg",
         "views": "319028"
        },
        {
         "title": "Why YOU Must OBEY Modern Day China In 2022...",
         "date": "2022-06-18T14:00:26Z",
         "thumbnail": "https://i.ytimg.com/vi/yzK5FrtYmOY/maxresdefault.jpg",
         "views": "148176"
        },
        {
         "title": "Why The NEW Spanish Civil War Decides Everything!",
         "date": "2022-06-15T15:00:20Z",
         "thumbnail": "https://i.ytimg.com/vi/higLjHM6ULk/maxresdefault.jpg",
         "views": "208499"
        },
        {
         "title": "How I SAVED China In HOI4 Multiplayer...",
         "date": "2022-06-04T16:59:32Z",
         "thumbnail": "https://i.ytimg.com/vi/1IoMcMJYotk/maxresdefault.jpg",
         "views": "312206"
        },
        {
         "title": "When USA Gets Backstabbed...",
         "date": "2022-05-21T15:00:24Z",
         "thumbnail": "https://i.ytimg.com/vi/uzXena1JGcE/maxresdefault.jpg",
         "views": "191943"
        },
        {
         "title": "Can YOU Save Europe From The RED WAVE!?",
         "date": "2022-05-18T15:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/7bGyMwZ67Fo/maxresdefault.jpg",
         "views": "211420"
        },
        {
         "title": "When YOU Play Germany In HOI4 Pax Britannica...",
         "date": "2022-05-15T14:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/R_k1mbk4MmU/maxresdefault.jpg",
         "views": "228648"
        },
        {
         "title": "Why YOU Need To Build TANKS Again In HOI4!",
         "date": "2022-05-12T15:00:33Z",
         "thumbnail": "https://i.ytimg.com/vi/wST1KZmbFZc/maxresdefault.jpg",
         "views": "206694"
        },
        {
         "title": "HOI4 In 2022 But Everything Is RANDOM...",
         "date": "2022-05-08T14:52:29Z",
         "thumbnail": "https://i.ytimg.com/vi/3jCEpZZ0P-s/maxresdefault.jpg",
         "views": "432974"
        },
        {
         "title": "Can YOU Save The Roman Empire in 2022!?",
         "date": "2022-05-01T16:31:48Z",
         "thumbnail": "https://i.ytimg.com/vi/6moXLfLsB10/maxresdefault.jpg",
         "views": "352212"
        },
        {
         "title": "How I MANIPULATED The World With Oil In HOI4 Multiplayer...",
         "date": "2022-04-29T17:12:18Z",
         "thumbnail": "https://i.ytimg.com/vi/YmpbgmPpaGg/maxresdefault.jpg",
         "views": "302530"
        },
        {
         "title": "HOI4 Multiplayer But Every State Is Independent...",
         "date": "2022-04-23T16:00:39Z",
         "thumbnail": "https://i.ytimg.com/vi/qZEnjhx-e4c/maxresdefault.jpg",
         "views": "263762"
        },
        {
         "title": "When YOU Come To Brazil in 2022...",
         "date": "2022-04-19T15:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/Bou8ORH5GuI/maxresdefault.jpg",
         "views": "224310"
        },
        {
         "title": "When You Play Modern Day Greece In 2022...",
         "date": "2022-04-14T17:33:59Z",
         "thumbnail": "https://i.ytimg.com/vi/Tzh5CWh1ehE/maxresdefault.jpg",
         "views": "395877"
        },
        {
         "title": "Can YOU Save Modern Day Germany In 2022!?",
         "date": "2022-04-10T15:30:56Z",
         "thumbnail": "https://i.ytimg.com/vi/1d6WwB45tpE/maxresdefault.jpg",
         "views": "449057"
        },
        {
         "title": "When You Ally Germany In HOI4 Multiplayer...",
         "date": "2022-04-08T15:00:13Z",
         "thumbnail": "https://i.ytimg.com/vi/H8H9zjrsxY4/maxresdefault.jpg",
         "views": "261401"
        },
        {
         "title": "Can YOU Survive World War 3 In 2022!?",
         "date": "2022-04-02T15:12:17Z",
         "thumbnail": "https://i.ytimg.com/vi/zGoq-Zwz3Os/maxresdefault.jpg",
         "views": "317672"
        },
        {
         "title": "When Middle East Gets Nukes In The Modern Day...",
         "date": "2022-03-30T15:00:25Z",
         "thumbnail": "https://i.ytimg.com/vi/poGHnZEHDyE/maxresdefault.jpg",
         "views": "308540"
        },
        {
         "title": "Can YOU Stop China In 2022!?",
         "date": "2022-03-26T16:14:51Z",
         "thumbnail": "https://i.ytimg.com/vi/HbDh6b8mIA8/maxresdefault.jpg",
         "views": "337712"
        },
        {
         "title": "When A German Plays Modern Day Germany In HOI4...",
         "date": "2022-03-22T16:39:47Z",
         "thumbnail": "https://i.ytimg.com/vi/m1-8tAuCyPE/maxresdefault.jpg",
         "views": "513217"
        },
        {
         "title": "Can YOU Liberate Germany In Hearts Of Iron 4?",
         "date": "2022-03-12T16:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/IQ_qvZpaDJU/maxresdefault.jpg",
         "views": "352952"
        },
        {
         "title": "German Reacts To Deadliest Battle Of WW2...",
         "date": "2022-03-09T17:29:49Z",
         "thumbnail": "https://i.ytimg.com/vi/8kt6skc7hIM/maxresdefault.jpg",
         "views": "84002"
        },
        {
         "title": "Can YOU Save Ukraine In Hearts Of Iron 4?",
         "date": "2022-03-06T16:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/oSiAu0ih-CA/maxresdefault.jpg",
         "views": "283079"
        },
        {
         "title": "92% Of Players Can't Save This HOI4 Disaster!",
         "date": "2022-03-03T17:02:10Z",
         "thumbnail": "https://i.ytimg.com/vi/FmG1SwS78QA/maxresdefault.jpg",
         "views": "224703"
        },
        {
         "title": "This Was CUT From Hearts Of Iron 4...",
         "date": "2022-02-28T16:30:04Z",
         "thumbnail": "https://i.ytimg.com/vi/X2LYlYrkOZ4/maxresdefault.jpg",
         "views": "171035"
        },
        {
         "title": "When You Return To The Ultimate HOI4 Challenge...",
         "date": "2022-02-27T15:37:17Z",
         "thumbnail": "https://i.ytimg.com/vi/FR57lstugxc/maxresdefault.jpg",
         "views": "169472"
        },
        {
         "title": "German Reacts To Russia Invading Ukraine...",
         "date": "2022-02-25T16:20:22Z",
         "thumbnail": "https://i.ytimg.com/vi/IDOx1DtIQS0/maxresdefault.jpg",
         "views": "212864"
        },
        {
         "title": "When You Play Warhammer 3... #AD",
         "date": "2022-02-24T18:19:26Z",
         "thumbnail": "https://i.ytimg.com/vi/8NGarNyrXs4/maxresdefault.jpg",
         "views": "69426"
        },
        {
         "title": "When You 100% Hearts Of Iron 4...",
         "date": "2022-02-18T16:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/al5gvOZGkbE/maxresdefault.jpg",
         "views": "205174"
        },
        {
         "title": "When Your Country Borders Russia...",
         "date": "2022-02-16T16:00:18Z",
         "thumbnail": "https://i.ytimg.com/vi/FoI3OcBCLZc/maxresdefault.jpg",
         "views": "196450"
        },
        {
         "title": "When You Play Tannu Tuva In Hearts of Iron 4...",
         "date": "2022-02-12T16:45:25Z",
         "thumbnail": "https://i.ytimg.com/vi/TKueaHFt7dc/maxresdefault.jpg",
         "views": "193891"
        },
        {
         "title": "HUGE Changes Coming To HOI4 In 2022!",
         "date": "2022-02-11T15:56:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Al3vrGU6YDk/maxresdefault.jpg",
         "views": "103352"
        },
        {
         "title": "I Was Sent This Secret Balkan Package...",
         "date": "2022-02-08T16:58:54Z",
         "thumbnail": "https://i.ytimg.com/vi/YvZVLqBxEJs/maxresdefault.jpg",
         "views": "68074"
        },
        {
         "title": "Can YOU Save Germany In Stalingrad!?",
         "date": "2022-02-06T16:06:29Z",
         "thumbnail": "https://i.ytimg.com/vi/HFKkIgF5jg4/maxresdefault.jpg",
         "views": "299242"
        },
        {
         "title": "POV: You're An American Cop",
         "date": "2022-02-04T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/Mi8hp8oOIh8/maxresdefault.jpg",
         "views": "67414"
        },
        {
         "title": "What REALLY Happens In HOI4 Multiplayer...",
         "date": "2022-02-02T17:00:20Z",
         "thumbnail": "https://i.ytimg.com/vi/L2zi4Jv9I00/maxresdefault.jpg",
         "views": "171504"
        },
        {
         "title": "When You Play Turkey In Hearts of Iron 4...",
         "date": "2022-01-30T16:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/UFGzuSeC8aU/maxresdefault.jpg",
         "views": "269585"
        },
        {
         "title": "When Kaiserreich Returns In HOI4 No Step Back...",
         "date": "2022-01-26T18:37:03Z",
         "thumbnail": "https://i.ytimg.com/vi/yT74yt5PMI4/maxresdefault.jpg",
         "views": "262885"
        },
        {
         "title": "When You Form The Ultimate Baltic Country In Hearts Of Iron 4...",
         "date": "2022-01-19T17:09:09Z",
         "thumbnail": "https://i.ytimg.com/vi/AJ3rV_VU2ng/maxresdefault.jpg",
         "views": "193563"
        },
        {
         "title": "click this video right now.",
         "date": "2022-01-16T16:17:12Z",
         "thumbnail": "https://i.ytimg.com/vi/UKXsQpPKcLc/maxresdefault.jpg",
         "views": "83205"
        },
        {
         "title": "When You Join a Random HOI4 Multiplayer Game...",
         "date": "2022-01-13T18:13:41Z",
         "thumbnail": "https://i.ytimg.com/vi/-3fouOP8dHQ/maxresdefault.jpg",
         "views": "185009"
        },
        {
         "title": "When Russia Has To Conquer Germany Before Allies Land In HOI4 No Step Back...",
         "date": "2022-01-07T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/-UJ7UFpOTZQ/maxresdefault.jpg",
         "views": "239373"
        },
        {
         "title": "If You Win This HOI4 Multiplayer Game, You Get $4,000!",
         "date": "2022-01-04T16:00:51Z",
         "thumbnail": "https://i.ytimg.com/vi/aV7uGwPW4Dg/maxresdefault.jpg",
         "views": "896691"
        },
        {
         "title": "When You Randomize Everything In HOI4 Multiplayer...",
         "date": "2021-12-29T17:00:17Z",
         "thumbnail": "https://i.ytimg.com/vi/FcKnNJEco84/maxresdefault.jpg",
         "views": "159471"
        },
        {
         "title": "When The Russian Empire Strikes Back In HOI4 No Step Back...",
         "date": "2021-12-25T17:00:33Z",
         "thumbnail": "https://i.ytimg.com/vi/oSA66wSZtag/maxresdefault.jpg",
         "views": "311541"
        },
        {
         "title": "Humanity's Biggest Question! - TommyKay Reacts to The Great Silence",
         "date": "2021-12-22T17:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/72RIfyY2wOQ/maxresdefault.jpg",
         "views": "70837"
        },
        {
         "title": "When Tommy And Chat Solve The Case Of Jack The Ripper! - TommyKay Reacts",
         "date": "2021-12-21T18:15:36Z",
         "thumbnail": "https://i.ytimg.com/vi/24Q0IzNO-4E/maxresdefault.jpg",
         "views": "80543"
        },
        {
         "title": "This Is How The World Will End... - TommyKay Reacts To Consumed By The Apocalypse",
         "date": "2021-12-20T17:01:50Z",
         "thumbnail": "https://i.ytimg.com/vi/04lWdbKBK8U/maxresdefault.jpg",
         "views": "86454"
        },
        {
         "title": "Do You Know These Top 10 Facts About WW2?",
         "date": "2021-12-19T16:00:29Z",
         "thumbnail": "https://i.ytimg.com/vi/YhJQRslaiLs/maxresdefault.jpg",
         "views": "83344"
        },
        {
         "title": "ALL OUT WAR! CAN THE BLACK GUARD SAVE CALRADIA!? - Mount and Blade 2 Bannerlord",
         "date": "2021-12-18T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/S3s1DnvvuAE/maxresdefault.jpg",
         "views": "80669"
        },
        {
         "title": "Can You Beat HOI4 With 0 Factories!?",
         "date": "2021-12-17T19:28:35Z",
         "thumbnail": "https://i.ytimg.com/vi/wEp_Bero_uM/maxresdefault.jpg",
         "views": "159737"
        },
        {
         "title": "When HOI4 Gets A New Game Mode... (HOI4 Draft Multiplayer)",
         "date": "2021-12-14T18:02:20Z",
         "thumbnail": "https://i.ytimg.com/vi/M2Gmp1x7Ojc/maxresdefault.jpg",
         "views": "163596"
        },
        {
         "title": "When Hearts Of Iron 4 Gets A Little Too Real...",
         "date": "2021-12-13T18:12:57Z",
         "thumbnail": "https://i.ytimg.com/vi/f9hCbLXHAB8/maxresdefault.jpg",
         "views": "195373"
        },
        {
         "title": "How Germany Conquered All Of Europe After Losing WW1...",
         "date": "2021-12-11T16:06:57Z",
         "thumbnail": "https://i.ytimg.com/vi/WVtZgUojXbo/maxresdefault.jpg",
         "views": "100830"
        },
        {
         "title": "When You Do Cavalry Only In HOI4 No Step Back...",
         "date": "2021-12-08T18:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/EAUHbIiogqk/maxresdefault.jpg",
         "views": "259745"
        },
        {
         "title": "When You Play Poland In HOI4 No Step Back...",
         "date": "2021-12-04T21:57:39Z",
         "thumbnail": "https://i.ytimg.com/vi/YCGYocRYc6Q/maxresdefault.jpg",
         "views": "299785"
        },
        {
         "title": "When You Start The Biggest World War In HOI4 No Step Back...",
         "date": "2021-11-30T18:20:48Z",
         "thumbnail": "https://i.ytimg.com/vi/pg8OrQkXReA/maxresdefault.jpg",
         "views": "380563"
        },
        {
         "title": "When You Play Soviet Union In HOI4 No Step Back...",
         "date": "2021-11-27T20:42:21Z",
         "thumbnail": "https://i.ytimg.com/vi/P2DpSwZlJeU/maxresdefault.jpg",
         "views": "485561"
        },
        {
         "title": "When Germany Has To Conquer Russia Without Stalingrad In HOI4 No Step Back...",
         "date": "2021-11-25T19:15:06Z",
         "thumbnail": "https://i.ytimg.com/vi/i4Ir6WWrlvE/maxresdefault.jpg",
         "views": "325257"
        },
        {
         "title": "When You Play Germany In HOI4 No Step Back...",
         "date": "2021-11-23T16:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/EMlWYCB21ZQ/maxresdefault.jpg",
         "views": "476451"
        },
        {
         "title": "How Tommy Manipulated The World In HOI4 Multiplayer...",
         "date": "2021-11-21T15:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/3F9GUlqTkFg/maxresdefault.jpg",
         "views": "232293"
        },
        {
         "title": "When Tommy Plays Japan In HOI4 Multiplayer...",
         "date": "2021-11-18T16:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/uteIQLG8LMA/maxresdefault.jpg",
         "views": "410239"
        },
        {
         "title": "The War That Changed Israel And Palestine Forever...",
         "date": "2021-11-14T15:00:16Z",
         "thumbnail": "https://i.ytimg.com/vi/_xBxnVkbpj8/maxresdefault.jpg",
         "views": "131587"
        },
        {
         "title": "When You Play Israel In Hearts Of Iron 4...",
         "date": "2021-11-13T15:00:17Z",
         "thumbnail": "https://i.ytimg.com/vi/IA6HuGX64Jg/maxresdefault.jpg",
         "views": "242582"
        },
        {
         "title": "The Most Cursed Hearts of Iron 4 Mod Of 2021...",
         "date": "2021-11-10T16:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/G3cat0Xh2OA/maxresdefault.jpg",
         "views": "186504"
        },
        {
         "title": "When Scandinavia Goes To War With The World In HOI4 Multiplayer....",
         "date": "2021-11-07T15:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/KT7bpyK5TrA/maxresdefault.jpg",
         "views": "333389"
        },
        {
         "title": "Old German Boomer Outplays Everyone In This New Game Mode...",
         "date": "2021-11-05T16:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/PXI71UniqKY/maxresdefault.jpg",
         "views": "65065"
        },
        {
         "title": "When Tommy Returns To Russia In HOI4 Multiplayer...",
         "date": "2021-11-04T15:36:57Z",
         "thumbnail": "https://i.ytimg.com/vi/WYtNvtzQ3Tg/maxresdefault.jpg",
         "views": "370815"
        },
        {
         "title": "This Is How Prussia Destroyed The French Empire...",
         "date": "2021-11-02T15:30:06Z",
         "thumbnail": "https://i.ytimg.com/vi/hS102FVjGfI/maxresdefault.jpg",
         "views": "300567"
        },
        {
         "title": "When A German Plays Prussia In Hearts Of Iron 4...",
         "date": "2021-10-31T15:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/cuR4edqcTNc/maxresdefault.jpg",
         "views": "412499"
        },
        {
         "title": "If You Beat Me In This Game, I Have To Gift 500$! - Squid Games Vs Twitch Chat",
         "date": "2021-10-29T16:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/UdPxDAYQ0G8/maxresdefault.jpg",
         "views": "43588"
        },
        {
         "title": "The SECRET HOI4 Nation YOU Don't Know About! - Hearts of Iron 4 Kaiserreich",
         "date": "2021-10-27T17:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/cJAauMtmUU8/maxresdefault.jpg",
         "views": "196406"
        },
        {
         "title": "WHEN TOMMY JOINS A BOKOEN MULTIPLAYER GAME! - Hoi4 MP In A Nutshell",
         "date": "2021-10-24T15:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/qdgJvS6rEbs/maxresdefault.jpg",
         "views": "298893"
        },
        {
         "title": "This Is When The New HOI4 DLC Is Coming Out! No Step Back Release Date! - TommyKay Reacts",
         "date": "2021-10-24T13:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/tzSpwAx3gmE/maxresdefault.jpg",
         "views": "105760"
        },
        {
         "title": "CAN BULGARIA SURVIVE FIGHTING EVERYONE!? FOURTH BALKAN WAR CHALLENGE! - HOI4 Kaiserreich",
         "date": "2021-10-21T17:00:35Z",
         "thumbnail": "https://i.ytimg.com/vi/sOc_RpN5p3c/maxresdefault.jpg",
         "views": "143419"
        },
        {
         "title": "WHEN YOU PULL A DONALD TRUMP IN HOI4! STOP THE COUNT! - Hearts of Iron 4 Kaiserreich",
         "date": "2021-10-18T17:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/9csOOGTf_t8/maxresdefault.jpg",
         "views": "124874"
        },
        {
         "title": "LAST MAN STANDING! THE BETRAYAL THAT COST US EVERYTHING! - Mount and Blade 2 Bannerlord",
         "date": "2021-10-15T16:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/6jP9TCLOkrM/maxresdefault.jpg",
         "views": "102376"
        },
        {
         "title": "THIS WILL CHANGE ALL OF HOI4! HUGE META CHANGES IN NEW HOI4 DLC! - Hearts of Iron 4 No Step Back",
         "date": "2021-10-12T16:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/HFeC-T3E8AM/maxresdefault.jpg",
         "views": "122141"
        },
        {
         "title": "WORST HOI4 PATCH EVER!? HEARTS OF IRON 4 1.0 WITH NO DLCS AND UPDATES! - HOI4 Germany",
         "date": "2021-10-09T16:00:26Z",
         "thumbnail": "https://i.ytimg.com/vi/sb3WiMH6aaI/maxresdefault.jpg",
         "views": "174122"
        },
        {
         "title": "The ENTIRE World Is Against Us, It's Over...UNLESS!? - HOI4 Multiplayer",
         "date": "2021-09-25T17:00:18Z",
         "thumbnail": "https://i.ytimg.com/vi/cFtevSDo4gk/maxresdefault.jpg",
         "views": "130470"
        },
        {
         "title": "WE STAND ALONE! CAN MEXICO RISE FROM THE SHADOW OF AMERICA!? - HOI4 Multiplayer Roleplay",
         "date": "2021-09-22T16:00:37Z",
         "thumbnail": "https://i.ytimg.com/vi/oaISk3Lxa-U/maxresdefault.jpg",
         "views": "131921"
        },
        {
         "title": "DESTROYING THE PATRIARCHY IN HOI4! FEMINISM VS THE WORLD! - Hearts of Iron 4 Multiplayer Roleplay",
         "date": "2021-09-18T15:30:07Z",
         "thumbnail": "https://i.ytimg.com/vi/XVVZVL6QxkM/maxresdefault.jpg",
         "views": "118088"
        },
        {
         "title": "The Most EDGY Mod In Hearts Of Iron 4! - HOI4 Mod Review",
         "date": "2021-09-14T15:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/hQU1HMGcd3g/maxresdefault.jpg",
         "views": "154689"
        },
        {
         "title": "HOI4: RETURN OF ROLEPLAY MP! DIPLOMACY IS BACK! - Hearts of Iron 4 Old World Blues Multiplayer",
         "date": "2021-09-10T15:30:12Z",
         "thumbnail": "https://i.ytimg.com/vi/T6xygEFj6VI/maxresdefault.jpg",
         "views": "145106"
        },
        {
         "title": "Breaking NEW Kaiserreich Update! INFINITE GUNS Exploit Is OP! - HOI4 Kaiserreich Serbia",
         "date": "2021-09-07T16:00:23Z",
         "thumbnail": "https://i.ytimg.com/vi/uPy616Y3q6Q/maxresdefault.jpg",
         "views": "146694"
        },
        {
         "title": "THIS Focus Makes You Completely BROKEN! SPACE MARINE TIME! - HOI4 Old World Blues",
         "date": "2021-09-04T15:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/5mL09YGJekg/maxresdefault.jpg",
         "views": "160644"
        },
        {
         "title": "The BEST Country In All Of Hearts of Iron 4! - HOI4 Fallout Old World Blues Enclave",
         "date": "2021-09-01T15:00:20Z",
         "thumbnail": "https://i.ytimg.com/vi/hnS1a0nMg14/maxresdefault.jpg",
         "views": "376904"
        },
        {
         "title": "2000 YEARS OF PDX MEGA CAMPAIGN - EU4 - THE EMPIRE DIVIDED",
         "date": "2021-08-29T15:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/kNEPIN1DYmc/maxresdefault.jpg",
         "views": "209680"
        },
        {
         "title": "This Is How THE AXIS Get INFINITE OIL In HOI4 MP! - Hearts of Iron 4 Multiplayer",
         "date": "2021-08-25T17:14:29Z",
         "thumbnail": "https://i.ytimg.com/vi/QebUTeBOvE4/maxresdefault.jpg",
         "views": "185858"
        },
        {
         "title": "The BEST HOI4 Mod Nobody Talks About! - Hearts of Iron 4 Fallout Old World Blues",
         "date": "2021-08-22T16:30:30Z",
         "thumbnail": "https://i.ytimg.com/vi/iKZQhshahqY/maxresdefault.jpg",
         "views": "238442"
        },
        {
         "title": "THE NEW RUSSIAN CIVIL WAR! Who Will Replace The Soviet Union!? - HOI4 No Step Back DLC",
         "date": "2021-08-20T18:27:44Z",
         "thumbnail": "https://i.ytimg.com/vi/NjBtVRb0CaM/maxresdefault.jpg",
         "views": "112582"
        },
        {
         "title": "HILTER IS DEAD! Who Will Lead Germany Now!? - HOI4 TWR",
         "date": "2021-08-18T15:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/XDaocINLV8Y/maxresdefault.jpg",
         "views": "364922"
        },
        {
         "title": "HOW A WOMAN RUINED MY GAME! EPIC WAR ENDS WITH THE BIGGEST BETRAYAL! - Mount and Blade 2 Bannerlord",
         "date": "2021-08-15T16:00:13Z",
         "thumbnail": "https://i.ytimg.com/vi/ZHTDI7wyo-E/maxresdefault.jpg",
         "views": "100329"
        },
        {
         "title": "BANNERLORD'S GREATEST ARMY! HOW 1 MAN FORMED A LEGENDARY BAND OF MERCENARIES! - Mount and Blade 2",
         "date": "2021-08-12T15:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/4WtLuzrMTeA/maxresdefault.jpg",
         "views": "106741"
        },
        {
         "title": "SOVIET UNION IS BROKEN WITH THIS! BIGGEST HOI4 DEV DIARY YET! - HOI4 No Step Back DLC",
         "date": "2021-08-09T15:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/c7I47nNAs9o/maxresdefault.jpg",
         "views": "184626"
        },
        {
         "title": "FROM BEING EXILED TO THE BIGGEST COMEBACK IN HOI4!? - HOI4 Kaiserreich Lithuania",
         "date": "2021-08-06T15:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/lhNb23Sns5U/maxresdefault.jpg",
         "views": "187122"
        },
        {
         "title": "The Great HOI4 Hacker War",
         "date": "2021-08-03T15:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/Yl3LEkfLB0M/maxresdefault.jpg",
         "views": "171277"
        },
        {
         "title": "THIS IS THE PERFECT HOI4 COUNTRY! HOW EVERY NATION SHOULD BE DESIGNED! - HOI4 Kaiserreich",
         "date": "2021-07-31T16:30:09Z",
         "thumbnail": "https://i.ytimg.com/vi/qW9HSurOyL0/maxresdefault.jpg",
         "views": "176917"
        },
        {
         "title": "BHUTAN IS DEFINITELY A BALANCED COUNTRY IN KAISERREICH HOI4! - Hearts of Iron 4",
         "date": "2021-07-28T16:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/T9XR2SxWWlw/maxresdefault.jpg",
         "views": "129089"
        },
        {
         "title": "THE NEW GERMANY VS THE WORLD! BALTIC STATE TRIES TO REVIVE THE GERMAN EMPIRE! - HOI4 Kaiserreich",
         "date": "2021-07-25T17:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/xF_2uwHXDb0/maxresdefault.jpg",
         "views": "167844"
        },
        {
         "title": "WW2 PLACES ONLY EXPERTS KNOW! THE MOST CURSED SPOTS IN THE WORLD! - GeoGuessr Dark Tourist",
         "date": "2021-07-22T15:04:04Z",
         "thumbnail": "https://i.ytimg.com/vi/vFLn4x03uzQ/maxresdefault.jpg",
         "views": "67964"
        },
        {
         "title": "GERMAN REACTS TO THE HOLY ROMAN EMPIRE! - TommyKay Reacts to The Armchair Historian",
         "date": "2021-07-19T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/334RVUtRqHg/maxresdefault.jpg",
         "views": "121002"
        },
        {
         "title": "THE MOST BROKEN ASIAN ALLIANCE IN KAISERREICH! VIETNAM AND INDIA LIBERATE ASIA! - HOI4 Kaiserreich",
         "date": "2021-07-17T17:00:23Z",
         "thumbnail": "https://i.ytimg.com/vi/p22k9MUDCHI/maxresdefault.jpg",
         "views": "273371"
        },
        {
         "title": "THE VALYRIAN PIRATE KINGS OF SUNSTONE! FROM 1 ISLAND TO A PIRATE EMPIRE! - CK2 Game of Thrones Story",
         "date": "2021-07-14T17:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/DKeSd-B-wOo/maxresdefault.jpg",
         "views": "87225"
        },
        {
         "title": "THE END TIMES OF HEARTS OF IRON 4! WORST HOI4 MP GAME EVER! - HOI4 Multiplayer",
         "date": "2021-07-11T17:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/TKwVH_c8WJU/maxresdefault.jpg",
         "views": "154233"
        },
        {
         "title": "The Angriest German In All Of History...",
         "date": "2021-07-08T16:59:31Z",
         "thumbnail": "https://i.ytimg.com/vi/3z-aN6EAinw/maxresdefault.jpg",
         "views": "84452"
        },
        {
         "title": "NEW TOMMYKAY! NEW HOI4 META! THE LIGHT TANKS THAT WILL SAVE JAPAN!? - HOI4 Multiplayer",
         "date": "2021-07-06T17:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/JDxWcNPTURc/maxresdefault.jpg",
         "views": "138303"
        },
        {
         "title": "THE ULTIMATE HOI4 DIVISION! SECRET UNIT YOU NEVER HEARD ABOUT! - HOI4 Multiplayer",
         "date": "2021-07-03T17:00:20Z",
         "thumbnail": "https://i.ytimg.com/vi/jPp0POcoj5o/maxresdefault.jpg",
         "views": "131561"
        },
        {
         "title": "The Sad Kaiserreich Experience - Hearts of Iron 4",
         "date": "2021-06-29T18:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/i-A4Ds8neRA/maxresdefault.jpg",
         "views": "135141"
        },
        {
         "title": "Operation Sea Lion - HOI4 Multiplayer",
         "date": "2021-06-26T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/BdDGkT3VEDo/maxresdefault.jpg",
         "views": "159775"
        },
        {
         "title": "THE WORST HEARTS OF IRON GAME! HOI3 VS HOI4 1.0! WHICH ONE IS BETTER? - Hearts of Iron 3 in 2021",
         "date": "2021-06-22T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/58QTEq0l4ic/maxresdefault.jpg",
         "views": "162203"
        },
        {
         "title": "SHOULD CHINA BE BANNED IN HOI4 MP? IS THIS COUNTRY TOO BROKEN? - HOI4 Multiplayer",
         "date": "2021-06-19T18:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/4VWOhAYzegc/maxresdefault.jpg",
         "views": "153268"
        },
        {
         "title": "THE BIGGEST CONQUEST IN HISTORY? - TommyKay Reacts to European Colonization of Americas",
         "date": "2021-06-16T18:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/Rkrwo0mpMzc/maxresdefault.jpg",
         "views": "122538"
        },
        {
         "title": "BEST HOI4 PLAYERS VS THE WORLD? THIS ALLIANCE IS BROKEN! - HOI4 Kaiserreich",
         "date": "2021-06-13T18:00:25Z",
         "thumbnail": "https://i.ytimg.com/vi/qS5AdvwPSno/maxresdefault.jpg",
         "views": "446875"
        },
        {
         "title": "CAN YOU BEAT HOI4 ON NIGHTMARE DIFFICULTY? GERMANY VS THE MOST BROKEN AI! - HOI4 Expert AI Mod",
         "date": "2021-06-10T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/9nl9X0bgyic/maxresdefault.jpg",
         "views": "506577"
        },
        {
         "title": "GERMAN REACTS TO NAPOLEONIC WARS! - TommyKay Reacts to Napoleonic Wars by Oversimplified",
         "date": "2021-06-07T17:08:00Z",
         "thumbnail": "https://i.ytimg.com/vi/j9Gh1JsWXJA/maxresdefault.jpg",
         "views": "892461"
        },
        {
         "title": "THE ULTIMATE KAISERREICH CHALLENGE! CAN WE SAVE OUR HOMELAND ON ELITE DIFFICULTY? - HOI4 Kaiserreich",
         "date": "2021-06-05T18:00:17Z",
         "thumbnail": "https://i.ytimg.com/vi/WuyhBHy0Tj8/maxresdefault.jpg",
         "views": "352330"
        },
        {
         "title": "THE FUTURE OF HOI4! TRAINS, SOVIET FOCUS TREE AND MORE! - TommyKay Reacts to No Step Back DLC",
         "date": "2021-06-02T18:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/Cilfk3FCr8g/maxresdefault.jpg",
         "views": "156674"
        },
        {
         "title": "THIS IS THE HISTORY OF HOI4! - TommyKay Reacts to 5 Years of Hearts of Iron 4",
         "date": "2021-06-01T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/-WO2YWCpNwE/maxresdefault.jpg",
         "views": "66214"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS MEXICO!? - HOI4 Multiplayer",
         "date": "2021-05-30T18:00:12Z",
         "thumbnail": "https://i.ytimg.com/vi/U_gdgmRPXu4/maxresdefault.jpg",
         "views": "234281"
        },
        {
         "title": "THE SECRET GINGER MEETING!? - The Redhead Days #StopGingerRacism",
         "date": "2021-05-28T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/4Tzr4eyR7po/maxresdefault.jpg",
         "views": "62648"
        },
        {
         "title": "ROMANIAN ENDSIEG? WHEN JAPAN AND GERMANY FALL! - HOI4 Multiplayer",
         "date": "2021-05-26T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2grxk6uiR3o/maxresdefault.jpg",
         "views": "154735"
        },
        {
         "title": "THE BIGGEST HOI4 MOD!? BATTLE FOR THE GALAXY! - HOI4 Star Wars: Palpatine's Gamble",
         "date": "2021-05-23T18:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/hDh0RVDsEXM/maxresdefault.jpg",
         "views": "288886"
        },
        {
         "title": "VICTORIA 3! NEW HOI4 DLC! HUGE NEWS! - TommyKay Reacts to PDXCON 2021",
         "date": "2021-05-22T14:45:02Z",
         "thumbnail": "https://i.ytimg.com/vi/bjQhfnBoFc0/maxresdefault.jpg",
         "views": "146037"
        },
        {
         "title": "So I became a Ghost Hunter...",
         "date": "2021-05-20T18:00:26Z",
         "thumbnail": "https://i.ytimg.com/vi/hfuxod0_us0/maxresdefault.jpg",
         "views": "47277"
        },
        {
         "title": "THE PACIFIC WAR! PERFECT USA GAME!? - HOI4 Multiplayer",
         "date": "2021-05-16T18:15:01Z",
         "thumbnail": "https://i.ytimg.com/vi/IVSV8L94AHo/maxresdefault.jpg",
         "views": "223658"
        },
        {
         "title": "THE WALL OF AFRICA! THE ITALIAN FORTRESS WILL HOLD! - HOI4 Multiplayer",
         "date": "2021-05-13T18:06:03Z",
         "thumbnail": "https://i.ytimg.com/vi/OtmFgE6_CFg/maxresdefault.jpg",
         "views": "369134"
        },
        {
         "title": "HUGE CHANGES! TANK DESIGNER, SUPPLY SYSTEM AND POLAND REWORK!? - HOI4 Dev Diaries",
         "date": "2021-05-11T18:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/KaWohGKyh68/maxresdefault.jpg",
         "views": "106767"
        },
        {
         "title": "BATTLE OF THE MEDITERRANEAN! - HOI4 Multiplayer",
         "date": "2021-05-09T18:00:16Z",
         "thumbnail": "https://i.ytimg.com/vi/UedcBg36NHw/maxresdefault.jpg",
         "views": "230065"
        },
        {
         "title": "THE END OF 40 AND 20 WIDTH META!? MASSIVE COMBAT CHANGES IN NEW HOI4 DLC! - HOI4 Dev Diary",
         "date": "2021-05-06T19:15:42Z",
         "thumbnail": "https://i.ytimg.com/vi/52E4Kb5wiSE/maxresdefault.jpg",
         "views": "155566"
        },
        {
         "title": "WHAT HAPPENS WHEN SPARTANS VISIT ROME? GREEKS CONQUER THE WORLD! - Total War: Rome Remastered #AD",
         "date": "2021-05-05T16:00:33Z",
         "thumbnail": "https://i.ytimg.com/vi/qjH4wMFU5uA/maxresdefault.jpg",
         "views": "60226"
        },
        {
         "title": "OPERATION SUNSET! ALLIES STAND UNITED IN THE ASIA WAR! - HOI4 Multiplayer",
         "date": "2021-05-02T16:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/JyaK4io_JsM/maxresdefault.jpg",
         "views": "125218"
        },
        {
         "title": "BISMARCK, YAMATO AND THIS!? THE BEST SHP EVER MADE IN WW2 HISTORY! - World of Warships #AD",
         "date": "2021-04-29T16:00:12Z",
         "thumbnail": "https://i.ytimg.com/vi/UmIFFeYR2GY/maxresdefault.jpg",
         "views": "55214"
        },
        {
         "title": "USA GO BRRRRRR! GIANT WAKES AND FREEDOM INTENSIFIES! - HOI4 Multiplayer",
         "date": "2021-04-28T16:00:33Z",
         "thumbnail": "https://i.ytimg.com/vi/mwTux7dJLmw/maxresdefault.jpg",
         "views": "222387"
        },
        {
         "title": "RETURN OF USA! TOMMYKAY BACK ON MAJORS! - HOI4 Multiplayer",
         "date": "2021-04-24T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/aam47zCe2tY/maxresdefault.jpg",
         "views": "144176"
        },
        {
         "title": "SOMETHING TERRIBLE HAPPENED... - HOI4 Multiplayer",
         "date": "2021-04-21T17:00:16Z",
         "thumbnail": "https://i.ytimg.com/vi/kBqbMrC3L_Y/maxresdefault.jpg",
         "views": "146583"
        },
        {
         "title": "WHAT HAPPENS WHEN A GERMAN GETS A TANK!? - World of Tanks #AD",
         "date": "2021-04-17T16:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/qR86Hbwr0Vg/maxresdefault.jpg",
         "views": "42870"
        },
        {
         "title": "THE BATTLE FOR AFRICA! - HOI4 Multiplayer",
         "date": "2021-04-14T18:32:30Z",
         "thumbnail": "https://i.ytimg.com/vi/iZqCntsHszs/maxresdefault.jpg",
         "views": "133944"
        },
        {
         "title": "GRAND FINALS OF THE HOI4 INTERNATIONAL! WHO WILL 5000$!? - HOI4 Multiplayer",
         "date": "2021-04-10T16:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/0eeUhf5xqE4/maxresdefault.jpg",
         "views": "158132"
        },
        {
         "title": "BLITZKRIEG OF THE SEMIFINALS! WHO IS GOING TO THE GRAND FINALS!? - HOI4 Multiplayer",
         "date": "2021-04-07T16:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/GyaZgGiLexs/maxresdefault.jpg",
         "views": "79552"
        },
        {
         "title": "ATTACK OR DEFEND!? GERMANY OR SOVIET UNION!? WHICH META AND STRATEGY IS BETTER? - HOI4 Multiplayer",
         "date": "2021-04-04T15:30:02Z",
         "thumbnail": "https://i.ytimg.com/vi/eC8AAzt-ncg/maxresdefault.jpg",
         "views": "103949"
        },
        {
         "title": "BOKOEN JOINS THE HOI4 INTERNATIONAL! DANKUS'S LAST STAND! - HOI4 Multiplayer",
         "date": "2021-04-01T15:30:10Z",
         "thumbnail": "https://i.ytimg.com/vi/hgcJOhaOgQg/maxresdefault.jpg",
         "views": "134927"
        },
        {
         "title": "HOI4 INTERNATIONAL BEGINS! BIGGEST HOI4 EVENT AND TOURNAMENT EVER! - Hearts of Iron 4 Multiplayer",
         "date": "2021-03-30T15:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/lH_RcWjDunM/maxresdefault.jpg",
         "views": "150246"
        },
        {
         "title": "THE RETURN OF TOMMYKAY MP GAMES! MAKING HOI4 GREAT AGAIN! - HOI4 Multiplayer (Operation Phoenix)",
         "date": "2021-03-26T16:30:11Z",
         "thumbnail": "https://i.ytimg.com/vi/y_mtfOZwuxo/maxresdefault.jpg",
         "views": "129853"
        },
        {
         "title": "THIS RUSSIA IS 100% BROKEN! TOMMYKAY VS DANKUS OP SOVIET UNION! - HOI4 Multiplayer",
         "date": "2021-03-23T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3Tz4zQI8uSE/maxresdefault.jpg",
         "views": "340034"
        },
        {
         "title": "IT WAS OVER, BUT THEN THIS HAPPENED! BACK TO BACK ENCIRCLEMENTS! - HOI4 International Qualifiers",
         "date": "2021-03-20T17:30:31Z",
         "thumbnail": "https://i.ytimg.com/vi/FQYt1QUolKU/maxresdefault.jpg",
         "views": "102064"
        },
        {
         "title": "BOKOEN MOD VS COMPETITIVE MP MOD! WHAT IS THE BEST HOI4 MOD? - HOI4 Multiplayer",
         "date": "2021-03-17T17:00:27Z",
         "thumbnail": "https://i.ytimg.com/vi/rBxJZlhWQ4o/maxresdefault.jpg",
         "views": "180853"
        },
        {
         "title": "HOW DID THIS HAPPEN!? THESE PEOPLE ARE INSANE! - HOI4 International Qualifiers",
         "date": "2021-03-14T19:18:55Z",
         "thumbnail": "https://i.ytimg.com/vi/7BLra-rBPEw/maxresdefault.jpg",
         "views": "145141"
        },
        {
         "title": "THE WORST ALLIES EVER! - HOI4 Multiplayer",
         "date": "2021-03-11T16:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/eHv6TCq2a_s/maxresdefault.jpg",
         "views": "234581"
        },
        {
         "title": "THIS IS HEARTS OF IRON 2! THE BEST GAME YOU'VE NEVER SEEN! - HOI4 But It's 2005",
         "date": "2021-03-08T16:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/QAJmRo9OpOE/maxresdefault.jpg",
         "views": "167119"
        },
        {
         "title": "THE PERFECT AXIS GAME RUINED BY THIS! - HOI4 Multiplayer",
         "date": "2021-03-05T16:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/MjlZ0V0QMbE/maxresdefault.jpg",
         "views": "294621"
        },
        {
         "title": "GERMAN REACTS TO EASTERN FRONT OF WW2 ANIMATED! - TommyKay Reacts to WW2 History",
         "date": "2021-03-02T17:00:13Z",
         "thumbnail": "https://i.ytimg.com/vi/Dds7kxu_Jps/maxresdefault.jpg",
         "views": "527566"
        },
        {
         "title": "PRUSSIA IS DEFINITELY A BALANCED COUNTRY IN HOI4 EMPIRE MOD! SPACE MARINES TIME! - Hearts of Iron 4",
         "date": "2021-02-27T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1zJoEAjc4do/maxresdefault.jpg",
         "views": "566801"
        },
        {
         "title": "TOMMYKAY JAPAN VS THE BEST AI IN HOI4! BROKEN CHINA WITH BEST STATS CHALLENGE! - HOI4 Expert AI Mod",
         "date": "2021-02-24T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/B-Ld-5GNdEc/maxresdefault.jpg",
         "views": "256947"
        },
        {
         "title": "DANKUS VS GRISHA 1V1! HOI4 ESPORTS RETURNS WITH THE BATTLE OF TITANS! - HOI4 Multiplayer 1v1",
         "date": "2021-02-21T18:14:57Z",
         "thumbnail": "https://i.ytimg.com/vi/FwS3EywsEok/maxresdefault.jpg",
         "views": "202337"
        },
        {
         "title": "HOI4 GAME THAT BROKE WORLD RECORDS! THE TRANSAMUR WARS CHALLENGE! - HOI4 Kaiserreich",
         "date": "2021-02-18T17:02:44Z",
         "thumbnail": "https://i.ytimg.com/vi/OIc-Y988bj4/maxresdefault.jpg",
         "views": "1003982"
        },
        {
         "title": "GERMAN REACTS TO WESTERN FRONT OF WW2 ANIMATED! - TommyKay Reacts to WW2 History Videos",
         "date": "2021-02-15T17:00:18Z",
         "thumbnail": "https://i.ytimg.com/vi/pEh8c8jpyrQ/maxresdefault.jpg",
         "views": "312525"
        },
        {
         "title": "EQUESTRIA AT WAR! DESTROYING THE PONY WORLD AS THE QUEEN OF DEATH! - HOI4 Equestria at War Mod",
         "date": "2021-02-12T17:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/w7dUsqSPqx8/maxresdefault.jpg",
         "views": "137651"
        },
        {
         "title": "BRAZIL COMES TO YOU IN HOI4 MP! CAN BRAZIL SAVE THE AFRICAN DISASTER!? - HOI4 Multiplayer",
         "date": "2021-02-09T16:30:08Z",
         "thumbnail": "https://i.ytimg.com/vi/l9qJR8cqC3M/maxresdefault.jpg",
         "views": "189252"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A COMPETITIVE MULTIPLAYER GAME!? - HOI4 Multiplayer",
         "date": "2021-02-06T16:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/HCVfuF6TtAU/maxresdefault.jpg",
         "views": "314311"
        },
        {
         "title": "GERMAN REACTS TO LIFE IN NAZI GERMANY AND EAST GERMANY! - TommyKay Reacts to The Armchair Historian",
         "date": "2021-02-02T16:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/hG1aFNUNSdY/maxresdefault.jpg",
         "views": "268583"
        },
        {
         "title": "OUR COUNTRY STANDS ALONE! CAN POLAND WIN AND RISE FROM THE SHADOW OF GERMANY!? - HOI4 Kaiserreich",
         "date": "2021-01-30T16:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/CTF4ZmR5Qeo/maxresdefault.jpg",
         "views": "299009"
        },
        {
         "title": "THE MOD THAT HAS EVERYTHING! KAISERREDUX CHANGES ALL OF HOI4! - HOI4 Kaiserreich Expansion",
         "date": "2021-01-27T16:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/CKUsKKwzVe0/maxresdefault.jpg",
         "views": "269262"
        },
        {
         "title": "THEY SAID I COULDN'T DO IT WITH THIS DEBUFF! BECOMING AN EGYPTIAN GOD IN HOI4! - HOI4 Kaiserreich",
         "date": "2021-01-23T17:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/BZUf9SACmjE/maxresdefault.jpg",
         "views": "289981"
        },
        {
         "title": "HOI4: THE SECOND AMERICAN CIVIL WAR - A Kaiserreich Movie/Story",
         "date": "2021-01-20T17:00:18Z",
         "thumbnail": "https://i.ytimg.com/vi/qPXoopLKMe8/maxresdefault.jpg",
         "views": "321148"
        },
        {
         "title": "GREATEST ENCIRCLEMENT IN HISTORY OF HOI4! OPERATION VIVE LA FRANCE! - HOI4 Kaiserreich",
         "date": "2021-01-17T17:00:20Z",
         "thumbnail": "https://i.ytimg.com/vi/UTl5fu8mPsY/maxresdefault.jpg",
         "views": "334747"
        },
        {
         "title": "THE BEST HOI4 DLC!? RATING THE NEWEST DLC AND ACHIEVEMENTS AFTER 100%! - HOI4 Tier List",
         "date": "2021-01-15T17:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/DI0XIzhFkpw/maxresdefault.jpg",
         "views": "99263"
        },
        {
         "title": "FINLAND IS DEFINITELY A BALANCED COUNTRY IN HOI4! FINNISH HIM! - Hearts of Iron 4",
         "date": "2021-01-13T17:37:48Z",
         "thumbnail": "https://i.ytimg.com/vi/ozzD2NUv_SA/maxresdefault.jpg",
         "views": "354032"
        },
        {
         "title": "Paradox Removed Me From Crusader Kings 3 (DRAMA!)",
         "date": "2021-01-11T16:00:15Z",
         "thumbnail": "https://i.ytimg.com/vi/sZURCXRfpbU/maxresdefault.jpg",
         "views": "83467"
        },
        {
         "title": "CAN THIS ENCIRCLEMENT BE SAVED? THE UNWINNABLE DISASTER OF CHINA! - HOI4 Kaiserreich",
         "date": "2021-01-09T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/JDWqL3T5DPc/maxresdefault.jpg",
         "views": "190770"
        },
        {
         "title": "When You Walk Into The Vietnam Of Warhammer - Total War Warhammer 2",
         "date": "2021-01-06T16:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/ZaZW2oq7DzE/maxresdefault.jpg",
         "views": "50809"
        },
        {
         "title": "Just another day in the US...",
         "date": "2021-01-02T16:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Sm0Qg_Qrk6o/maxresdefault.jpg",
         "views": "94378"
        },
        {
         "title": "TURKEY WORLD CONQUEST! THE MOST INSANE GAME IN HISTORY OF HOI4! - Hearts of Iron 4 (REUPLOAD)",
         "date": "2020-12-30T16:45:01Z",
         "thumbnail": "https://i.ytimg.com/vi/KnF7pHH6eZI/maxresdefault.jpg",
         "views": "527082"
        },
        {
         "title": "GERMAN REACTS TO NAPOLEON! THE BEST GENERAL IN HISTORY! - TommyKay Reacts to Napoleonic Wars",
         "date": "2020-12-27T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4XeGaM1D5Vo/maxresdefault.jpg",
         "views": "188754"
        },
        {
         "title": "BATTLE OF THE BALKANS! CAN A UNITED BALKANS BEAT GERMANY AND THE AXIS!? - Hearts of Iron 4",
         "date": "2020-12-24T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/i0ENyW_CVT0/maxresdefault.jpg",
         "views": "211335"
        },
        {
         "title": "A GERMAN'S NIGHTMARE! - TommyKay Reacts to Prohibition by Oversimplified",
         "date": "2020-12-21T17:00:20Z",
         "thumbnail": "https://i.ytimg.com/vi/mare7VSIUkk/maxresdefault.jpg",
         "views": "538597"
        },
        {
         "title": "WE STAND ALONE! FORTRESS SWITZERLAND VERSUS THE WORLD! - HOI4 Multiplayer",
         "date": "2020-12-17T17:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/fysvfPEHmBw/maxresdefault.jpg",
         "views": "935839"
        },
        {
         "title": "THE TIME CHINA HAD A REAL LIFE BATTLE ROYALE! - TommyKay Reacts to Three Kingdoms by Oversimplified",
         "date": "2020-12-14T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/aWaLMOjmKE4/maxresdefault.jpg",
         "views": "335929"
        },
        {
         "title": "HOI4: REVENGE OF THE BYZANTINES! THE GREEK MASTER PLAN! - Hearts of Iron 4 100% Series",
         "date": "2020-12-12T17:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/achyu4DrWI4/maxresdefault.jpg",
         "views": "211038"
        },
        {
         "title": "GERMAN REACTS TO HILTER! THIS WAS BLOCKED IN GERMANY! - TommyKay Reacts to Hilter by Oversimplified",
         "date": "2020-12-09T17:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/EGepWUVq86I/maxresdefault.jpg",
         "views": "977679"
        },
        {
         "title": "HOI4: THE BAND IS BACK TOGETHER! TURKEY LEADS THE WORLD WITH GERMANY AND AUSTRIA! - HOI4 100% Series",
         "date": "2020-12-07T17:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/CWIyYyWeAvo/maxresdefault.jpg",
         "views": "296849"
        },
        {
         "title": "GERMAN REACTS TO THE COLD WAR! - TommyKay Reacts to Cold War by Oversimplified",
         "date": "2020-12-05T17:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/yHRu_JOqJWo/maxresdefault.jpg",
         "views": "1049181"
        },
        {
         "title": "GERMAN REACTS TO WW2! - TommyKay Reacts to WW2 by Oversimplified",
         "date": "2020-12-02T17:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/GUxcFRuTVyM/maxresdefault.jpg",
         "views": "2164145"
        },
        {
         "title": "GERMAN REACTS TO WW1! - TommyKay Reacts to WW1 by Oversimplified",
         "date": "2020-11-29T17:29:38Z",
         "thumbnail": "https://i.ytimg.com/vi/kAf45laeZnw/maxresdefault.jpg",
         "views": "997354"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY TRIES TO SPEEDRUN HOI4 ACHIEVEMENTS! - Hearts of Iron 4 100% Series",
         "date": "2020-11-26T16:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/5TyV3OeuKQE/maxresdefault.jpg",
         "views": "181925"
        },
        {
         "title": "So I became a Turkish Resistance Figure...",
         "date": "2020-11-22T16:00:13Z",
         "thumbnail": "https://i.ytimg.com/vi/dcZKcMPJ3FQ/maxresdefault.jpg",
         "views": "363448"
        },
        {
         "title": "THE JOURNEY OF KARL FRANZ AND THE EMPIRE - Total War Warhammer 2",
         "date": "2020-11-19T17:00:37Z",
         "thumbnail": "https://i.ytimg.com/vi/oLCL1Vzu-i4/maxresdefault.jpg",
         "views": "80890"
        },
        {
         "title": "FIXING HOI4! THE BEST AND THE WORST OF HOI4 FOCUS TREES! - HOI4 Focus Tree Tier List",
         "date": "2020-11-16T16:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/zgRel4J5IMY/maxresdefault.jpg",
         "views": "439091"
        },
        {
         "title": "HOI4: RISE OF THE EMPIRE! THE STORY OF A GREECE VERSUS THE WHOLE WORLD! - Hearts of Iron 4 Byzantium",
         "date": "2020-11-13T16:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/XkwdoUzJo8o/maxresdefault.jpg",
         "views": "239074"
        },
        {
         "title": "BOOMER GINGER VISITS AUSTRIA AND GERMANY - Boomer Vlog with TommyKay",
         "date": "2020-11-10T16:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/7WWIxKEm_Yw/maxresdefault.jpg",
         "views": "91534"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY PLAYS YUGOSLAVIA IN THE NEW HOI4 DLC!? - Hearts of Iron 4",
         "date": "2020-11-07T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/TZ2g9DMyKik/maxresdefault.jpg",
         "views": "246443"
        },
        {
         "title": "old ginger man gets chased by dead people for 50 minutes - Little Hope",
         "date": "2020-11-03T16:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/_Mhf3yaMmTE/maxresdefault.jpg",
         "views": "48016"
        },
        {
         "title": "CAN I SAVE GERMANY IN 1944 ENDSIEG? BEST HOI4 PLAYER VS THE HARDEST HOI4 CHALLENGE! - Hearts of Iron",
         "date": "2020-10-31T16:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/9a25o0X6Or0/maxresdefault.jpg",
         "views": "1053051"
        },
        {
         "title": "click this video pls",
         "date": "2020-10-28T16:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/ynDsXo8jtH4/maxresdefault.jpg",
         "views": "142919"
        },
        {
         "title": "WHAT HAPPENS WHEN HITLER FORMS KURDISTAN IN HOI4!? - HOI4 Germany Battle For the Bosporus",
         "date": "2020-10-25T15:00:29Z",
         "thumbnail": "https://i.ytimg.com/vi/YJAbjj_eE-A/maxresdefault.jpg",
         "views": "246200"
        },
        {
         "title": "HOW BULGARIA TRIED TO UNITE THE POWDER KEG OF EUROPE! BALKAN FEDERATION! - HOI4 Battle For Bosporus",
         "date": "2020-10-22T16:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1sqjnJzKAVY/maxresdefault.jpg",
         "views": "178204"
        },
        {
         "title": "BEST HOI4 PLAYER VS ENDSIEG 1918! CAN THE KAISER SURVIVE WW1 AND SAVE GERMANY!? - Hearts of Iron 4",
         "date": "2020-10-13T16:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/JDz7cC6J-iQ/maxresdefault.jpg",
         "views": "848398"
        },
        {
         "title": "THE OVERPOWERED \"TALL KINGDOM\" STRATEGY! HOW TO GET RICH IN CK3! - Crusader Kings 3",
         "date": "2020-10-10T17:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/zk6ks49AgFY/maxresdefault.jpg",
         "views": "192478"
        },
        {
         "title": "THE RETURN OF FIVE HABIBIS! MIDDLE EAST VS IMPERIALIST SUPERPOWERS! - HOI4 Multiplayer",
         "date": "2020-10-05T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/avIwV-teIDM/maxresdefault.jpg",
         "views": "264901"
        },
        {
         "title": "CK3 100% SERIES BEGINS! THE EMERALD ISLE WILL BE UNITED! - Crusader Kings 3 Achievements",
         "date": "2020-10-02T17:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/1ahAtkQkzP8/maxresdefault.jpg",
         "views": "155039"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY ESTABLISHES A DEMOCRATIC WORLD ORDER AS GREECE! - HOI4 Multiplayer Roleplay",
         "date": "2020-09-28T16:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ZQlU61SFa9Y/maxresdefault.jpg",
         "views": "212608"
        },
        {
         "title": "CK3: THE SHOWDOWN OF FOUR KINGS! WHAT HAPPENS WHEN VIKINGS INVADE BRITISH ISLES! - CK3 Multiplayer",
         "date": "2020-09-25T16:00:15Z",
         "thumbnail": "https://i.ytimg.com/vi/yta_1nE5AqM/maxresdefault.jpg",
         "views": "337942"
        },
        {
         "title": "HOW A SMALL ASIAN COUNTRY DEFEATED AN EMPIRE! VIETNAM STRIKES BACK! - HOI4 Multiplayer",
         "date": "2020-09-22T16:00:13Z",
         "thumbnail": "https://i.ytimg.com/vi/moRdztAsL9c/maxresdefault.jpg",
         "views": "218878"
        },
        {
         "title": "HOW I MADE AN EMPIRE FROM NOTHING! THIS IS HOW YOU DOMINATE AS A COUNT IN CK3! - Crusader Kings 3",
         "date": "2020-09-19T16:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/TxXb2XCtnSU/maxresdefault.jpg",
         "views": "216116"
        },
        {
         "title": "WHAT HAPPENS TO THE WORLD IF GERMANY WON WW2? THE NEW ORDER CHANGES EVERYTHING! - Hearts of Iron 4",
         "date": "2020-09-16T16:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/EZQCvZvPa5A/maxresdefault.jpg",
         "views": "271569"
        },
        {
         "title": "THE INCEST DYNASTY OF SARDINIA! FAMILY TIME WITH MY SON AND DAUGHTER - Crusader Kings 3",
         "date": "2020-09-13T16:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/EGqekcchLLM/maxresdefault.jpg",
         "views": "171375"
        },
        {
         "title": "24 Hours of a Grown Man Failing at a Kids Game",
         "date": "2020-09-10T16:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/VggZqR2DGSc/maxresdefault.jpg",
         "views": "50160"
        },
        {
         "title": "VIKINGS ARE DEFINITELY BALANCED IN CK3! INFINITE MONEY EXPLOIT WITH RAIDING! - Crusader Kings 3",
         "date": "2020-09-07T16:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/C1TxL5vkmmw/maxresdefault.jpg",
         "views": "220505"
        },
        {
         "title": "THE BEGINNING OF THE GREATEST GAME IN CK3! HOW A SMALL COUNTY BECAME AN EMPIRE! - Crusader Kings 3",
         "date": "2020-09-03T16:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/zwzS9R2mxkI/maxresdefault.jpg",
         "views": "304576"
        },
        {
         "title": "2000 YEARS OF PDX MEGA CAMPAIGN - CK2 - HOW A CITY BECAME A GALACTIC EMPIRE",
         "date": "2020-08-29T16:00:15Z",
         "thumbnail": "https://i.ytimg.com/vi/ypAJYPSUhc4/maxresdefault.jpg",
         "views": "532346"
        },
        {
         "title": "HOI4 Achievement Tier List - Ranking Every Achievement After Getting 100% in Hearts of Iron 4",
         "date": "2020-08-26T16:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/MbsyQa-PI30/maxresdefault.jpg",
         "views": "198296"
        },
        {
         "title": "HOW I GOT 100% IN HOI4! BIGGEST THING IN THE HISTORY OF HOI4! - 100% Series Finale",
         "date": "2020-08-25T16:00:13Z",
         "thumbnail": "https://i.ytimg.com/vi/tVBIvn1QQ4M/maxresdefault.jpg",
         "views": "315757"
        },
        {
         "title": "30 MINUTES OF HEL - POLAND AGAINST THE WORLD - Hearts of Iron 4 100% Series",
         "date": "2020-08-22T16:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/huaDrQqaoSk/maxresdefault.jpg",
         "views": "515809"
        },
        {
         "title": "THIS EXPLOIT BREAKS HOI4! WINNING WW2 WITH 0 CASUALTIES IS BALANCED! - Hearts of Iron 4 100% Series",
         "date": "2020-08-18T16:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3_3tbVtOtZ0/maxresdefault.jpg",
         "views": "138224"
        },
        {
         "title": "THEY ALMOST LOST BUT THEN THIS HAPPENED! THE MEXICAN TANKS ARRIVE! - Hearts of Iron 4 100% Series",
         "date": "2020-08-15T16:00:20Z",
         "thumbnail": "https://i.ytimg.com/vi/f1ZoVf7Mhmw/maxresdefault.jpg",
         "views": "185957"
        },
        {
         "title": "THE HARDEST ACHIEVEMENT! PORTUGAL VS THE WORLD HOI4! GO AHEAD MACAU MY DAY IS OP! - Hearts of Iron 4",
         "date": "2020-08-12T16:00:35Z",
         "thumbnail": "https://i.ytimg.com/vi/uW6hrY2T3fU/maxresdefault.jpg",
         "views": "471459"
        },
        {
         "title": "WARLORD CHINA VS INFINITE JAPANESE WAVE RUSH META! THIS IS ASIA IN HOI4! - Hearts of Iron 4 100%",
         "date": "2020-08-09T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/VhLyAmLKl5Q/maxresdefault.jpg",
         "views": "201978"
        },
        {
         "title": "THE WORST ACHIEVEMENTS IN HEARTS OF IRON 4! WHY NOBODY DOES ACHIEVEMENTS - HOI4 100% Series",
         "date": "2020-08-06T15:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/fLB5t79rwCg/maxresdefault.jpg",
         "views": "186601"
        },
        {
         "title": "I ALMOST LOST MY HOI4 GAME, BUT THEN DAN LIND SAVED ME! LUCKIEST GAME EVER! - Hearts of Iron 4",
         "date": "2020-08-03T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/RpqG68n5ENg/maxresdefault.jpg",
         "views": "139647"
        },
        {
         "title": "CRUSADER KINGS 2 BUT IT'S ACTUALLY HOI4 CANCER! 100% ACHIEVEMENTS SERIES! - Hearts of Iron 4",
         "date": "2020-07-31T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/KE4_buakXuE/maxresdefault.jpg",
         "views": "192314"
        },
        {
         "title": "CZECHMATE! WHAT HAPPENS WHEN A BOOMER TRIES TO GET ALL HOI4 ACHIEVEMENTS!? - Hearts of Iron 4",
         "date": "2020-07-28T16:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/jUF5IElHDgY/maxresdefault.jpg",
         "views": "169743"
        },
        {
         "title": "THE DUTCH EAST INDIES ARE SECRETLY OP! LIBERATING NETHERLANDS WITH THIS META! - Hearts of Iron 4",
         "date": "2020-07-24T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/AGH-xgHtKW4/maxresdefault.jpg",
         "views": "344704"
        },
        {
         "title": "TOMMY AND LISA COOK GORDON RAMSAY STYLE! OUR SPECIAL RISOTTO RECIPE! - Cooking with TommyKay",
         "date": "2020-07-22T15:30:02Z",
         "thumbnail": "https://i.ytimg.com/vi/TlXYuYej0Gs/maxresdefault.jpg",
         "views": "51327"
        },
        {
         "title": "HOW TO WIN EVERY COMBAT IN HOI4! YUGOSLAVIAN DIVISIONS ENCIRCLING EVERYTHING! - Hearts of Iron 4",
         "date": "2020-07-19T15:30:04Z",
         "thumbnail": "https://i.ytimg.com/vi/RH-27j9ahws/maxresdefault.jpg",
         "views": "304432"
        },
        {
         "title": "WHY DOES EVERY HOI4 GAME TURN INTO THIS!? SPANISH DOMINATION! - Hearts of Iron 4",
         "date": "2020-07-16T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/7Z_cm50BL_A/maxresdefault.jpg",
         "views": "283021"
        },
        {
         "title": "boomer who plays map games all day gets scared for 30 minutes by pixels",
         "date": "2020-07-13T15:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Ob0brr4XjKE/maxresdefault.jpg",
         "views": "141501"
        },
        {
         "title": "ORC RUSH POLAND LEAD BY A BEAR GENERAL! THE MOST OP TACTIC IN HOI4! - Hearts of Iron 4",
         "date": "2020-07-10T15:30:06Z",
         "thumbnail": "https://i.ytimg.com/vi/sUQyt0rzT_Q/maxresdefault.jpg",
         "views": "300788"
        },
        {
         "title": "HOW THIS GERMANY MP GAME TURNED INTO CHAOS! I DESTROYED THEM AND THIS HAPPENED! - HOI4 Multiplayer",
         "date": "2020-07-06T15:30:08Z",
         "thumbnail": "https://i.ytimg.com/vi/u8aF77ZezLA/maxresdefault.jpg",
         "views": "375874"
        },
        {
         "title": "HOW THE DRAGON SWALLOWED THE SUN! CHINESE EMPIRE RISES AGAIN! - Hearts of Iron 4",
         "date": "2020-07-03T15:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/okStEJnzVlk/maxresdefault.jpg",
         "views": "364198"
        },
        {
         "title": "THE BEST MINECRAFT SERVER EVER! ROLEPLAY FANTASY FACTION WORLD! - The TommyKay Minecraft Server",
         "date": "2020-06-30T15:30:02Z",
         "thumbnail": "https://i.ytimg.com/vi/qq5xwGy9GKA/maxresdefault.jpg",
         "views": "119167"
        },
        {
         "title": "THIS IS HOI4 IN 2017! HOW HOI4 LOOKED LIKE 3 YEARS AGO WITH NO DLCS! - HOI4 Multiplayer Competitive",
         "date": "2020-06-28T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/afXVF2-Cc7c/maxresdefault.jpg",
         "views": "103533"
        },
        {
         "title": "HOW FRANCE ENCIRCLED EVERYONE! THE MOST LEGENDARY HOI4 SP GAME EVER! - Hearts of Iron 4",
         "date": "2020-06-24T15:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/J40xzuLE4Xo/maxresdefault.jpg",
         "views": "267731"
        },
        {
         "title": "GERMANY IS DEFINITELY A BALANCED COUNTRY IN KAISERREICH HOI4! - Hearts of Iron 4",
         "date": "2020-06-21T15:30:06Z",
         "thumbnail": "https://i.ytimg.com/vi/cF2zH_D8ggc/maxresdefault.jpg",
         "views": "704744"
        },
        {
         "title": "THE SIMS 4 BUT 2 GERMAN BOOMERS PLAY THE GAME! - Sims 4 with GF",
         "date": "2020-06-18T15:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Z1ol02rLrqQ/maxresdefault.jpg",
         "views": "115958"
        },
        {
         "title": "USA IS EASY! GETTING THE ACHIEVEMENTS NOBODY WANTS TO GET IN HOI4! - Hearts of Iron 4",
         "date": "2020-06-16T15:30:02Z",
         "thumbnail": "https://i.ytimg.com/vi/cYC3778eMbU/maxresdefault.jpg",
         "views": "263062"
        },
        {
         "title": "THIS IS COMPETITIVE HOI4! TOMMY RETURNS TO HOI4 ESPORTS! - HOI4 Multiplayer",
         "date": "2020-06-13T16:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/IRKIRO5RrEU/maxresdefault.jpg",
         "views": "176195"
        },
        {
         "title": "THIS IS WHY HOI4 PLAYERS LOVE KAISERREICH JAPAN! A NEW JOURNEY BEGINS! - Hearts of Iron 4",
         "date": "2020-06-10T16:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/wuFvy9Sc--U/maxresdefault.jpg",
         "views": "348017"
        },
        {
         "title": "How I Turned RUSSIA Into TURAN In HOI4 Multiplayer!",
         "date": "2020-06-05T16:00:12Z",
         "thumbnail": "https://i.ytimg.com/vi/QHYdJ1vaFvM/maxresdefault.jpg",
         "views": "469364"
        },
        {
         "title": "THE GREATEST ALLIANCE YOU WILL EVER SEE! HOW THE NORTH SAVED EUROPE! - HOI4 Multiplayer",
         "date": "2020-06-02T16:00:26Z",
         "thumbnail": "https://i.ytimg.com/vi/eGv91EOQ2U4/maxresdefault.jpg",
         "views": "299871"
        },
        {
         "title": "Best streamer Germany has to offer - TommyKay the Gaming Warlord",
         "date": "2020-05-30T16:00:35Z",
         "thumbnail": "https://i.ytimg.com/vi/OyPuesk4Mq4/maxresdefault.jpg",
         "views": "203072"
        },
        {
         "title": "Paradox Interactive and HOI4 - How not to do Multiplayer (RANT)",
         "date": "2020-05-28T16:00:58Z",
         "thumbnail": "https://i.ytimg.com/vi/74hqFlK326o/maxresdefault.jpg",
         "views": "73016"
        },
        {
         "title": "THE PACIFIC SHOWDOWN! USA VS JAPAN IS THE HIGHEST LEVEL OF SKILL IN HOI4! - HOI4 Multiplayer",
         "date": "2020-05-26T15:30:07Z",
         "thumbnail": "https://i.ytimg.com/vi/EEphRMNWvA0/maxresdefault.jpg",
         "views": "213610"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS ROMANIA!? - HOI4 Multiplayer",
         "date": "2020-05-23T15:30:09Z",
         "thumbnail": "https://i.ytimg.com/vi/y-LuEeC1Q24/maxresdefault.jpg",
         "views": "320640"
        },
        {
         "title": "WHAT HAPPENS WHEN THE POPE JOINS A HOI4 MP GAME!? - HOI4 Multiplayer Italy",
         "date": "2020-05-17T16:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/aM2ajFSC1iw/maxresdefault.jpg",
         "views": "369558"
        },
        {
         "title": "HOW MY SUBMARINES DID THIS TO ITALY! WHY SUBMARINES AND MARINES ARE BROKEN! - HOI4 Multiplayer",
         "date": "2020-05-11T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2-KyIAkevM8/maxresdefault.jpg",
         "views": "228341"
        },
        {
         "title": "THE SPANISH MASTER PLAN! WHY DIPLOMACY IS BROKEN IN HOI4 MP! - HOI4 Multiplayer Roleplay",
         "date": "2020-05-08T15:30:06Z",
         "thumbnail": "https://i.ytimg.com/vi/x7Kd6SFgWOk/maxresdefault.jpg",
         "views": "355843"
        },
        {
         "title": "100 PLAYERS JOINED A HOI4 MP GAME, THIS IS WHAT HAPPENED NEXT!  - HOI4 Multiplayer Roleplay",
         "date": "2020-05-05T15:30:06Z",
         "thumbnail": "https://i.ytimg.com/vi/mbrpeUMw3Z8/maxresdefault.jpg",
         "views": "561039"
        },
        {
         "title": "CHINA IS DEFINITELY A BALANCED COUNTRY IN HOI4 MP! LA RESISTANCE IS HERE! - HOI4 Multiplayer",
         "date": "2020-05-02T15:30:02Z",
         "thumbnail": "https://i.ytimg.com/vi/-QDiuexVfog/maxresdefault.jpg",
         "views": "448647"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY SELLS HIS ENTIRE COUNTRY AWAY? - HOI4 Multiplayer",
         "date": "2020-04-29T15:30:49Z",
         "thumbnail": "https://i.ytimg.com/vi/WfIXiYgybsw/maxresdefault.jpg",
         "views": "361094"
        },
        {
         "title": "THE WORLD REVOLUTION IN HOI4 MP! TROTSKY MAKES THE ENTIRE WORLD COMMUNIST! - HOI4 Multiplayer",
         "date": "2020-04-26T15:30:20Z",
         "thumbnail": "https://i.ytimg.com/vi/_bv8RReERls/maxresdefault.jpg",
         "views": "317745"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS AUSTRIA!? - HOI4 Multiplayer",
         "date": "2020-04-19T15:30:08Z",
         "thumbnail": "https://i.ytimg.com/vi/pqE-BYLHoG8/maxresdefault.jpg",
         "views": "1673251"
        },
        {
         "title": "THIS IS WHAT 8 YEARS OF DEVELOPMENT LOOKS LIKE - The Bannerlord Experience",
         "date": "2020-04-16T16:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/llDcXo411m0/maxresdefault.jpg",
         "views": "68938"
        },
        {
         "title": "THIS IS HOW YOU DO DIPLOMACY IN HOI4 MP! HOW ITALY TRICKED ALL OF EUROPE! - HOI4 Multiplayer",
         "date": "2020-04-13T16:00:29Z",
         "thumbnail": "https://i.ytimg.com/vi/utFDuRTyFx8/maxresdefault.jpg",
         "views": "310311"
        },
        {
         "title": "TECHNOCRACY IS OP! HOW TO GET THE BEST RESEARCH IN HOI4! - HOI4 Multiplayer Japan",
         "date": "2020-04-09T16:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1g2PlP9FFXE/maxresdefault.jpg",
         "views": "271100"
        },
        {
         "title": "BANNERLORD MULTIPLAYER BUT IT'S ACTUAL TACTICS AND TEAM PLAY! - Mount and Blade",
         "date": "2020-04-05T15:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/9IQbXUAD2Gw/maxresdefault.jpg",
         "views": "104177"
        },
        {
         "title": "ADVENTURES OF A GINGER VIKING IN BANNERLORD! THE SON OF WINTER! - A Bannerlord Story",
         "date": "2020-04-02T16:00:38Z",
         "thumbnail": "https://i.ytimg.com/vi/0L0E-8wBYwE/maxresdefault.jpg",
         "views": "92256"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS POLAND!? - HOI4 Multiplayer",
         "date": "2020-03-31T16:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/TUoldWJ1wJk/maxresdefault.jpg",
         "views": "699701"
        },
        {
         "title": "THE FIRST WORLD CONQUEST IN LA RESISTANCE! IMPERIAL FEDERATION DESTROYS THE WORLD WITH NUKES! - HOI4",
         "date": "2020-03-28T16:00:44Z",
         "thumbnail": "https://i.ytimg.com/vi/vEZtwsjCj80/maxresdefault.jpg",
         "views": "238856"
        },
        {
         "title": "ONE EMPIRE WORLD CONQUEST IN LA RESISTANCE! MY BIGGEST ACHIEVEMENT RUN EVER! - HOI4",
         "date": "2020-03-25T16:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/Gwzh2NGXmVE/maxresdefault.jpg",
         "views": "368004"
        },
        {
         "title": "SEPPUKU META IS OP! WHAT HAPPENS WHEN THE BEST HOI4 PLAYER PLAYS EU4!? FIRST GAME AS JAPAN! - EU4",
         "date": "2020-03-21T16:25:22Z",
         "thumbnail": "https://i.ytimg.com/vi/klJSSXM67ew/maxresdefault.jpg",
         "views": "123153"
        },
        {
         "title": "THE 2 MOST BROKEN FEATURES IN HOI4 LA RESISTANCE! TOMMY'S OPINION! - Tommy Shorts (HOI4 Shorts)",
         "date": "2020-03-17T17:16:42Z",
         "thumbnail": "https://i.ytimg.com/vi/ehW-ytD_2eQ/maxresdefault.jpg",
         "views": "47103"
        },
        {
         "title": "INDIA IS DEFINITELY A BALANCED COUNTRY IN HOI4 MP! THIS MOD IS AMAZING! - HOI4 Multiplayer Roleplay",
         "date": "2020-03-15T18:29:20Z",
         "thumbnail": "https://i.ytimg.com/vi/WILxfYEc_m8/maxresdefault.jpg",
         "views": "661366"
        },
        {
         "title": "ORI BUT I ONE SHOT EVERYTHING AND GET ONE SHOT! - Ori and the Will of the Wisps",
         "date": "2020-03-13T16:37:54Z",
         "thumbnail": "https://i.ytimg.com/vi/QcQi9Mgpd9k/maxresdefault.jpg",
         "views": "14555"
        },
        {
         "title": "The Spanish La Resistance! How the new DLC Broke Spain - Tommy Shorts (HOI4 Shorts)",
         "date": "2020-03-11T16:32:11Z",
         "thumbnail": "https://i.ytimg.com/vi/aIQIMNhWIAU/maxresdefault.jpg",
         "views": "58962"
        },
        {
         "title": "WHEN AI PORTUGAL INTERVENES IN THE SPANISH CIVIL WAR! WELL I DIDN'T VOTE FOR YOU ACHIEVEMENT! - HOI4",
         "date": "2020-03-08T16:43:17Z",
         "thumbnail": "https://i.ytimg.com/vi/pl3POLk3c8M/maxresdefault.jpg",
         "views": "157488"
        },
        {
         "title": "HOW THE NEW FRANCE BEAT GERMANY, UK, SPAIN AT THE SAME TIME! NAPOLEON IS BACK! - HOI4 La Resistance",
         "date": "2020-03-05T17:45:32Z",
         "thumbnail": "https://i.ytimg.com/vi/sRrEkZ8OqiQ/maxresdefault.jpg",
         "views": "443278"
        },
        {
         "title": "NEW SPAIN IS BROKEN! NEW META! BEST HOI4 PLAYER SHOWS YOU HOW TO PLAY LA RESISTANCE! - HOI4 LR",
         "date": "2020-02-29T16:23:28Z",
         "thumbnail": "https://i.ytimg.com/vi/p7Vbx0Kxs5s/maxresdefault.jpg",
         "views": "245881"
        },
        {
         "title": "THE SECRET HIDDEN FORMABLE NATION IN HOI4 MP! PROJECT GOLDEN CIRCLE! - HOI4 USA Multiplayer",
         "date": "2020-02-23T16:26:38Z",
         "thumbnail": "https://i.ytimg.com/vi/5gbTQ3ZrXIE/maxresdefault.jpg",
         "views": "399827"
        },
        {
         "title": "THE BIGGEST DISASTER IN MY HOI4 MP CAREER! WHAT HAPPENS WHEN TOMMY PLAYS SIAM!? - HOI4 Multiplayer",
         "date": "2020-02-19T17:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/EeX1NLuMtRI/maxresdefault.jpg",
         "views": "224251"
        },
        {
         "title": "HOW \"HE\" FORMED THE HOLY ROMAN EMPIRE IN HOI4 MULTIPLAYER - HOI4 Germany Roleplay MP",
         "date": "2020-02-16T17:01:56Z",
         "thumbnail": "https://i.ytimg.com/vi/MOOWguMq870/maxresdefault.jpg",
         "views": "340774"
        },
        {
         "title": "I HIRED A SERBIAN TO HELP ME FORM THE BALKAN UNION IN HOI4! - HOI4 Multiplayer Roleplay - Yugoslavia",
         "date": "2020-02-14T16:30:25Z",
         "thumbnail": "https://i.ytimg.com/vi/IbOXr4MWCzY/maxresdefault.jpg",
         "views": "324542"
        },
        {
         "title": "THE SWISS MASTER PLAN! HOW SWITZERLAND MANIPULATED ALL OF EUROPE IN HOI4 MULTIPLAYER - HOI4 Roleplay",
         "date": "2020-02-11T18:24:27Z",
         "thumbnail": "https://i.ytimg.com/vi/nz3_M1cSe4I/maxresdefault.jpg",
         "views": "468872"
        },
        {
         "title": "HOW THE EMPEROR OF FRANCE FELL IN LOVE AND GAVE AWAY HALF OF HIS COUNTRY IN MP! - HOI4 Roleplay",
         "date": "2020-02-08T17:07:08Z",
         "thumbnail": "https://i.ytimg.com/vi/xL3ebXMCRFU/maxresdefault.jpg",
         "views": "172287"
        },
        {
         "title": "TROTSKY IS ACTUALLY BROKEN! MEXICO IS OP WITH THIS! LAST SP GAME BEFORE LA RESISTANCE - HOI4 SP",
         "date": "2020-02-05T17:12:33Z",
         "thumbnail": "https://i.ytimg.com/vi/AybvBeEj8gs/maxresdefault.jpg",
         "views": "182304"
        },
        {
         "title": "THE GREAT CONFLICT IN THE MIDDLE EAST! GETTING DECLARED ON BY EVERYONE! IRAN STANDS ALONE! - HOI4 MP",
         "date": "2020-02-02T16:13:30Z",
         "thumbnail": "https://i.ytimg.com/vi/IuDx8mbZZVc/maxresdefault.jpg",
         "views": "225923"
        },
        {
         "title": "HOW THE CRISIS OF NORTHERN IRELAND MADE THE CELTIC UNION IN HOI4 MULTIPLAYER! - HOI4 MP Roleplay",
         "date": "2020-01-05T17:15:46Z",
         "thumbnail": "https://i.ytimg.com/vi/F6HAvGvhPz4/maxresdefault.jpg",
         "views": "297004"
        },
        {
         "title": "HOI4 COMPETITIVE IS BACK! ESPORTS IS HERE! SHUTTING UP HATERS ON JAPAN AGAIN! - HOI4 Multiplayer",
         "date": "2019-12-27T15:59:20Z",
         "thumbnail": "https://i.ytimg.com/vi/-oGtekLtGIs/maxresdefault.jpg",
         "views": "273465"
        },
        {
         "title": "I JOINED A MP GAME WITH 80 PEOPLE AND INVADED EVERYONE! ARGENTINA VS SOUTH AMERICA -HOI4 Multiplayer",
         "date": "2019-12-24T17:25:39Z",
         "thumbnail": "https://i.ytimg.com/vi/3ndh9lh3Bhk/maxresdefault.jpg",
         "views": "211781"
        },
        {
         "title": "WE WERE ENCIRCLED BY ENEMIES EVERYWHERE, THEN THIS BETRAYAL HAPPENED! - HOI4 Netherlands Multiplayer",
         "date": "2019-12-19T17:17:06Z",
         "thumbnail": "https://i.ytimg.com/vi/t-CCsgHMuhI/maxresdefault.jpg",
         "views": "299804"
        },
        {
         "title": "THE PERFECTLY FAIR REFERENDUM OF ALAND IN COMMUNIST FINLAND! GREATER SCANDINAVIA! - HOI4 Multiplayer",
         "date": "2019-12-15T16:00:33Z",
         "thumbnail": "https://i.ytimg.com/vi/awIp2lkX2mw/maxresdefault.jpg",
         "views": "262822"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS GREECE? - HOI4 Multiplayer",
         "date": "2019-12-12T16:30:23Z",
         "thumbnail": "https://i.ytimg.com/vi/CPlaqZ_-zgk/maxresdefault.jpg",
         "views": "751607"
        },
        {
         "title": "HOW GERMANY CONQUERED EUROPE \"PEACEFULLY\" WITH DIPLOMACY IN MP! - HOI4 Multiplayer Roleplay",
         "date": "2019-12-08T16:57:40Z",
         "thumbnail": "https://i.ytimg.com/vi/B89z02WAfbM/maxresdefault.jpg",
         "views": "442618"
        },
        {
         "title": "WHAT HAPPENS WHEN EVERY NATION IN HOI4 IS A PLAYER! 84 PLAYERS IN HOI4 ROLEPLAY! - HOI4 Multiplayer",
         "date": "2019-12-04T15:33:40Z",
         "thumbnail": "https://i.ytimg.com/vi/z9dBvZwRyvs/maxresdefault.jpg",
         "views": "638969"
        },
        {
         "title": "THE BIGGEST HOI4 BETRAYAL! HOW HOI4 MP ROLEPLAY RUINS LIVES! BEST JAPAN PLAY EVER! - HOI4 MP RP",
         "date": "2019-11-27T16:25:24Z",
         "thumbnail": "https://i.ytimg.com/vi/Mx8tdhdePOI/maxresdefault.jpg",
         "views": "466276"
        },
        {
         "title": "THE BEST MOD FOR HOI4 MULTIPLAYER! EU4 IDEAS IN HOI4? 4D CHESS DIPLOMACY IN MP! - HOI4 Roleplay Iran",
         "date": "2019-11-23T16:43:35Z",
         "thumbnail": "https://i.ytimg.com/vi/QZVXe0VfSxI/maxresdefault.jpg",
         "views": "219939"
        },
        {
         "title": "HOW 1 TINY COUNTRY CONQUERED CONTINENTS IN MP! DIPLOMACY CAN WIN YOU HOI4 GAMES! - HOI4 Roleplay MP",
         "date": "2019-11-15T16:42:14Z",
         "thumbnail": "https://i.ytimg.com/vi/1PVOLXJHAcc/maxresdefault.jpg",
         "views": "511593"
        },
        {
         "title": "60 MAN HOI4 ROLEPLAY! BIGGEST MP GAME WITH ACTUAL DIPLOMACY! NEW HOI4 GAME MODE! - HOI4 Multiplayer",
         "date": "2019-11-10T18:30:57Z",
         "thumbnail": "https://i.ytimg.com/vi/KqGAYsAOYfU/maxresdefault.jpg",
         "views": "686054"
        },
        {
         "title": "THIS NEEDS TO BE BANNED! MOST BROKEN TRAIT IN THE GAME! BEST JAPAN GENERAL EVER! - HOI4 Multiplayer",
         "date": "2019-11-07T15:59:51Z",
         "thumbnail": "https://i.ytimg.com/vi/IF4xNwOYh7A/maxresdefault.jpg",
         "views": "368469"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY PLAYS FRANCE IN A HOI4 ROLEPLAY GAME!? - HOI4 Multiplayer",
         "date": "2019-11-03T17:47:04Z",
         "thumbnail": "https://i.ytimg.com/vi/K7DHsSmUWmY/maxresdefault.jpg",
         "views": "466700"
        },
        {
         "title": "THE BEST CHINA GAME I HAVE PLAYED! WHY CHINA IS OP! PERFECT GUIDE TO HOI4 ACHIEVEMENTS! - HOI4",
         "date": "2019-10-31T16:37:08Z",
         "thumbnail": "https://i.ytimg.com/vi/6GoQSNNaoQ4/maxresdefault.jpg",
         "views": "436432"
        },
        {
         "title": "HOW TO ALREADY PLAY FOR CRUSADER KINGS 3! GET ITEMS IN CK3 BEFORE IT'S OUT! - CK2 Monarch's Journey",
         "date": "2019-10-27T16:36:34Z",
         "thumbnail": "https://i.ytimg.com/vi/Pg9UiDGWGR8/maxresdefault.jpg",
         "views": "118422"
        },
        {
         "title": "BEST HOI4 AND CK2 PLAYER REACTS TO CRUSADER KINGS 3 AND NEW HOI4 DLC LA RESISTANCE! - TommyKay React",
         "date": "2019-10-26T17:24:05Z",
         "thumbnail": "https://i.ytimg.com/vi/Go1hXMrDY1g/maxresdefault.jpg",
         "views": "80745"
        },
        {
         "title": "WHY PARADOX BANNED MY NAME FROM THEIR CHAT! - PDX Con 2019, meeting Bokoen, Feedback, PDX devs...",
         "date": "2019-10-25T15:54:47Z",
         "thumbnail": "https://i.ytimg.com/vi/PMKVqBNO3bY/maxresdefault.jpg",
         "views": "64754"
        },
        {
         "title": "THE KAISER RETURNS TO CONQUER THE WORLD AS AUSTRIA! TOMMY ROLEPLAYS AS THE KAISER! - HOI4 MP RP",
         "date": "2019-10-20T19:33:06Z",
         "thumbnail": "https://i.ytimg.com/vi/9qs8IgZ268k/maxresdefault.jpg",
         "views": "376989"
        },
        {
         "title": "THE STRONGEST TANK IN HOI4! WHAT HAPPENS WHEN TOMMY PLAYS SOUTH AFRICA!? - HOI4 Multiplayer",
         "date": "2019-10-17T15:20:11Z",
         "thumbnail": "https://i.ytimg.com/vi/4CgeYJvYZrw/maxresdefault.jpg",
         "views": "405811"
        },
        {
         "title": "MY STRANGE ADDICTION TO LOSING IN HOI4 SINGLEPLAYER! ONE EMPIRE ACHIEVEMENT RUN! - HOI4 UK",
         "date": "2019-09-26T14:53:07Z",
         "thumbnail": "https://i.ytimg.com/vi/Gg4vVYi6qbA/maxresdefault.jpg",
         "views": "242964"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY PLAYS GERMANY IN A HOI4 ROLEPLAY GAME? BEST RP GAME EVER! - HOI4 Multiplayer",
         "date": "2019-09-22T15:56:26Z",
         "thumbnail": "https://i.ytimg.com/vi/myNAa49qe6s/maxresdefault.jpg",
         "views": "872034"
        },
        {
         "title": "THE CURRENT STATE OF HOI4 MULTIPLAYER! THE HOI4 MP EXPERIENCE IN 2019! - HOI4 USA MP Gameplay",
         "date": "2019-09-15T17:23:51Z",
         "thumbnail": "https://i.ytimg.com/vi/mHuFa7Z8gP8/maxresdefault.jpg",
         "views": "124776"
        },
        {
         "title": "THE BRITISH ENDSIEG! IF THIS GAME DOESN'T MAKE ME QUIT HOI4 MULTIPLAYER, NOTHING WILL! - HOI4 MP",
         "date": "2019-09-12T15:42:18Z",
         "thumbnail": "https://i.ytimg.com/vi/1jJx60DIV7Y/maxresdefault.jpg",
         "views": "387818"
        },
        {
         "title": "COMMUNIST CHINA IS BROKEN! HOI4 MULTIPLAYER ROLEPLAY AS MAO ZEDONG! BEST CHINA WORLD! - HOI4 MP",
         "date": "2019-09-08T15:24:23Z",
         "thumbnail": "https://i.ytimg.com/vi/FMZvlNdyHaE/maxresdefault.jpg",
         "views": "144744"
        },
        {
         "title": "THEY KICKED ME FROM MY TURKEY GAME, SO I DID THIS TO THEM ON ROMANIA! - HOI4 Competitive Multiplayer",
         "date": "2019-09-05T15:01:20Z",
         "thumbnail": "https://i.ytimg.com/vi/NLYUAvBzWcI/maxresdefault.jpg",
         "views": "249945"
        },
        {
         "title": "WHEN THE HOI4 COMMUNITY STARTS DOING RAP BATTLES AND DISS TRACKS! THE CURRENT STATE OF HOI4!",
         "date": "2019-08-29T15:18:56Z",
         "thumbnail": "https://i.ytimg.com/vi/UZHh8zS-SxM/maxresdefault.jpg",
         "views": "68351"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY PLAYS TURKEY IN A HOI4 ROLEPLAY GAME!? - HOI4 Multiplayer",
         "date": "2019-08-25T15:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/sD2he9Tx3VQ/maxresdefault.jpg",
         "views": "996140"
        },
        {
         "title": "MY SPAIN ENCIRCLES ALL OF RUSSIA! THESE TANKS ARE BROKEN AND NEW META!  - HOI4 Multiplayer",
         "date": "2019-08-18T15:02:49Z",
         "thumbnail": "https://i.ytimg.com/vi/LgGHonLtyXk/maxresdefault.jpg",
         "views": "167781"
        },
        {
         "title": "I GOT HACKED IN A HOI4 MULTIPLAYER GAME! MY PERFECT USA RUINED WITH EXPLOITS! - HOI4 Multiplayer",
         "date": "2019-08-14T15:02:25Z",
         "thumbnail": "https://i.ytimg.com/vi/awaiAx9LKEc/maxresdefault.jpg",
         "views": "166813"
        },
        {
         "title": "LOOK WHAT YOU MADE ME DO, HOI4 MADE ME GO BALD! ROLEPLAY PORTUGAL TIME! - HOI4 Multiplayer",
         "date": "2019-08-11T15:34:30Z",
         "thumbnail": "https://i.ytimg.com/vi/z7R9aoeM1Yo/maxresdefault.jpg",
         "views": "118401"
        },
        {
         "title": "THEY SAID MY USA AND NAVY SUCK, THEN THIS HAPPENED! BIGGEST NAVAL BATTLE EVER! - HOI4 Multiplayer",
         "date": "2019-08-07T16:10:58Z",
         "thumbnail": "https://i.ytimg.com/vi/zK-5I5C_8E8/maxresdefault.jpg",
         "views": "553727"
        },
        {
         "title": "HOW 1 MEXICAN TANK HELD GERMANY IN FRANCE! CARRYING THE ALLIES AS MEXICO IN MP! - HOI4 Multiplayer",
         "date": "2019-08-04T14:57:44Z",
         "thumbnail": "https://i.ytimg.com/vi/ND9Pk6kb4WQ/maxresdefault.jpg",
         "views": "236398"
        },
        {
         "title": "TOMMYKAY LETS VIEWERS DECIDE WHAT VIDEOS TO WATCH! LOSES HIS MIND 10 MINS LATER! - Viewer videos",
         "date": "2019-08-01T15:04:35Z",
         "thumbnail": "https://i.ytimg.com/vi/J_gLgzBh_F8/maxresdefault.jpg",
         "views": "153635"
        },
        {
         "title": "TOMMY DOES FINGER PAINTING! HOW TO CALM YOURSELF AFTER A TERRIBLE DAY (HOI4 GAME)! - TommyKay Extras",
         "date": "2019-07-18T16:21:09Z",
         "thumbnail": "https://i.ytimg.com/vi/scQWwwK-xnQ/maxresdefault.jpg",
         "views": "38865"
        },
        {
         "title": "BIGGEST ENCIRCLEMENT IN HISTORY OF HOI4 MULTIPLAYER! BEST GAME I HAVE EVER PLAYED - HOI4 MP Italy",
         "date": "2019-07-14T16:08:07Z",
         "thumbnail": "https://i.ytimg.com/vi/A9JcLFTiNqY/maxresdefault.jpg",
         "views": "1843177"
        },
        {
         "title": "TommyKay Reacts To Twitch drama (Nightblue3 and Nubrac drama, Pilav ban etc.)",
         "date": "2019-07-11T15:04:56Z",
         "thumbnail": "https://i.ytimg.com/vi/QemgbuHufuc/maxresdefault.jpg",
         "views": "64498"
        },
        {
         "title": "AIR CONTROLLER CANADA! THIS IS HOW AIR WORKS IN HOI4 MP! PERFECT AIR GUIDE! - HOI4 Multiplayer",
         "date": "2019-07-07T14:47:57Z",
         "thumbnail": "https://i.ytimg.com/vi/WUf9TFC53rg/maxresdefault.jpg",
         "views": "178508"
        },
        {
         "title": "FORTRESS CHINA, HOW TO HOLD BACK JAPAN FOREVER! BEST CHINA GAME YOU WILL SEE! - HOI4 Multiplayer",
         "date": "2019-07-03T14:58:55Z",
         "thumbnail": "https://i.ytimg.com/vi/yUtFyvz38PE/maxresdefault.jpg",
         "views": "769139"
        },
        {
         "title": "THE DAILY LIFE OF A GINGER YOUTUBER AND STREAMER! QUESADILLA TIME! - Cooking with TommyKay",
         "date": "2019-06-28T14:23:08Z",
         "thumbnail": "https://i.ytimg.com/vi/dEX1v7vNPd0/maxresdefault.jpg",
         "views": "61061"
        },
        {
         "title": "NO SHIP JAPAN META IN MULTIPLAYER! FOR SOME REASON THIS ACTUALLY WORKS... - HOI4 MP Man the Guns",
         "date": "2019-06-24T15:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/q790lpaKvtA/maxresdefault.jpg",
         "views": "260780"
        },
        {
         "title": "FORMING THE PERSIAN EMPIRE THROUGH DIPLOMACY! HOI4 MP BUT IT'S MODDED ROLEPLAY! - HOI4 Multiplayer",
         "date": "2019-06-20T15:46:45Z",
         "thumbnail": "https://i.ytimg.com/vi/MdGkx8yQB8E/maxresdefault.jpg",
         "views": "219859"
        },
        {
         "title": "THIS IS A WAR CRIME! THIS NEEDS TO BE BANNED FROM HOI4 MP! - HOI4 China Man the Guns",
         "date": "2019-06-16T14:52:18Z",
         "thumbnail": "https://i.ytimg.com/vi/bBp84LKn92w/maxresdefault.jpg",
         "views": "272297"
        },
        {
         "title": "SURVIVING HOI4 MULTIPLAYER FOR 10 HOURS! DON'T EVER DO THIS CHALLENGE! - HOI4 Man the Guns",
         "date": "2019-06-12T15:07:26Z",
         "thumbnail": "https://i.ytimg.com/vi/GzGBIh4WLTs/maxresdefault.jpg",
         "views": "201283"
        },
        {
         "title": "NEW HOI4 GAME MODE - ROLEPLAY! HOI4 BUT THERES ACTUAL DIPLOMACY AND STRATEGY! - HOI4 MTG Multiplayer",
         "date": "2019-06-09T14:57:46Z",
         "thumbnail": "https://i.ytimg.com/vi/N_2PyfRK6TM/maxresdefault.jpg",
         "views": "296983"
        },
        {
         "title": "THEY BANNED THIS COUNTRY FROM HOI4 MULTIPLAYER BECAUSE OF ME! THIS COUNTRY IS TOO BROKEN! - HOI4 MTG",
         "date": "2019-06-02T14:57:03Z",
         "thumbnail": "https://i.ytimg.com/vi/frcNPEQQ8CM/maxresdefault.jpg",
         "views": "861325"
        },
        {
         "title": "GETTING ALL HOI4 ACHIEVEMENTS AS ITALY? DUCE NUKED EM OR THE HARDEST CHALLENGE? - HOI4 Man the Guns",
         "date": "2019-05-29T16:01:20Z",
         "thumbnail": "https://i.ytimg.com/vi/LFegnQb68uE/maxresdefault.jpg",
         "views": "406730"
        },
        {
         "title": "HOW THIS CAVALRY CHARGE SAVED MY GAME! - Total War Three Kingdoms Liu Bei - China",
         "date": "2019-05-25T16:50:45Z",
         "thumbnail": "https://i.ytimg.com/vi/ZvLkh8V7P94/maxresdefault.jpg",
         "views": "101295"
        },
        {
         "title": "THIS IS WHY I DON'T PLAY IMPERATOR ROME! SPARTA ONLY WAR CHALLENGE! - TommyKay plays Imperator: Rome",
         "date": "2019-05-19T22:34:52Z",
         "thumbnail": "https://i.ytimg.com/vi/lQKoS67c1SI/maxresdefault.jpg",
         "views": "113253"
        },
        {
         "title": "THE BIGGEST BETRAYAL IN ALL OF CK2 AND GAME OF THRONES! A WILD DRAGON APPEARS - A GoT CK2 Story Ep.2",
         "date": "2019-05-16T15:37:27Z",
         "thumbnail": "https://i.ytimg.com/vi/qDxDJdsNG30/maxresdefault.jpg",
         "views": "126249"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS FRANCE? - HOI4 Multiplayer",
         "date": "2019-05-12T15:56:19Z",
         "thumbnail": "https://i.ytimg.com/vi/CIXPD9czXyk/maxresdefault.jpg",
         "views": "571441"
        },
        {
         "title": "THE STORY OF A RED WOLF! THE BEST CK2 GAME OF THRONES GAME EVER! - A GoT Crusader Kings 2 Story Ep.1",
         "date": "2019-05-08T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/PjBtxtVt6tM/maxresdefault.jpg",
         "views": "222446"
        },
        {
         "title": "I'M GONNA GET BANNED FOR THIS! TOMMY WATCHES OLD HOI4 CLIPS! - HOI4 Multiplayer",
         "date": "2019-05-05T15:46:31Z",
         "thumbnail": "https://i.ytimg.com/vi/R94JtJdi5ZM/maxresdefault.jpg",
         "views": "78879"
        },
        {
         "title": "THIS IS HOW TO PLAY THE PERFECT ROMANIA! BEST ROMANIA CHALLENGE! - HOI4 Man the Guns Multiplayer",
         "date": "2019-05-02T17:32:24Z",
         "thumbnail": "https://i.ytimg.com/vi/UbuYAuWTC9Y/maxresdefault.jpg",
         "views": "200779"
        },
        {
         "title": "TommyKay Anime Opening 3 - \"The Day Has Come\" (HOI4 Anime Opening)",
         "date": "2019-04-30T17:59:10Z",
         "thumbnail": "https://i.ytimg.com/vi/sufVLjVor7E/maxresdefault.jpg",
         "views": "135073"
        },
        {
         "title": "THIS CHINA WANTED TO MEME ME, THEN I DID THIS TO HIM! BEST JAPAN YOU WILL SEE! - HOI4 Multiplayer",
         "date": "2019-04-28T16:01:50Z",
         "thumbnail": "https://i.ytimg.com/vi/Phb9Xl0G9v8/hqdefault.jpg",
         "views": "169002"
        },
        {
         "title": "IMPERATOR ROME IS 100% BALANCED AND FAIR! ROME IS DEFINITELY NOT BROKEN! - TommyKay plays Imperator",
         "date": "2019-04-25T16:36:23Z",
         "thumbnail": "https://i.ytimg.com/vi/fNWfjHgEjY4/maxresdefault.jpg",
         "views": "203097"
        },
        {
         "title": "TommyKay - Goodbye HOI4! (Official Music Video) ft. Ed Sheeran",
         "date": "2019-04-23T16:23:12Z",
         "thumbnail": "https://i.ytimg.com/vi/VuiwgVhu468/maxresdefault.jpg",
         "views": "52031"
        },
        {
         "title": "THIS IS HOW YOU PLAY IMPERATOR ROME! TUTORIAL ON HOW TO PLAY ROME IN 15 MIN! - TommyKay plays Rome",
         "date": "2019-04-20T15:05:45Z",
         "thumbnail": "https://i.ytimg.com/vi/m33BU8lyJq0/maxresdefault.jpg",
         "views": "96464"
        },
        {
         "title": "ALLIES LOST SINGAPORE...THEN THIS HAPPENED! INDIA SAVES THE WORLD IN HOI4 MP! - HOI4 MtG Multiplayer",
         "date": "2019-04-17T17:52:06Z",
         "thumbnail": "https://i.ytimg.com/vi/b5mKEal7cDQ/maxresdefault.jpg",
         "views": "327822"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS ITALY? - HOI4 Man the Guns Multiplayer",
         "date": "2019-04-14T15:28:38Z",
         "thumbnail": "https://i.ytimg.com/vi/j7BAvd6gl8o/maxresdefault.jpg",
         "views": "589662"
        },
        {
         "title": "BRAZIL IS DEFINITELY A BALANCED COUNTRY IN HOI4 MP! GIRLFRIEND FACE REVEAL! - HOI4 MtG Multiplayer",
         "date": "2019-04-11T17:58:50Z",
         "thumbnail": "https://i.ytimg.com/vi/0eEP7h0LLgs/maxresdefault.jpg",
         "views": "498984"
        },
        {
         "title": "THIS IS HOW YOU WIN EVERY SINGLE JAPAN GAME! THE META HOW TO PLAY AGAINST CHINA! - HOI4 Multiplayer",
         "date": "2019-04-07T15:34:11Z",
         "thumbnail": "https://i.ytimg.com/vi/a82XrQr3Nc8/maxresdefault.jpg",
         "views": "340837"
        },
        {
         "title": "I Was Supposed to Run Tropico with Infinite Sugar and Rum...THEN THIS HAPPENED! - BREAKING TROPICO 6",
         "date": "2019-04-02T16:07:27Z",
         "thumbnail": "https://i.ytimg.com/vi/smHsxL38vio/maxresdefault.jpg",
         "views": "69161"
        },
        {
         "title": "NO FUEL CHALLENGE AS JAPAN IN MP! HOW TO WIN IN MULTIPLAYER WITHOUT FUEL AND OIL! - Hearts of Iron 4",
         "date": "2019-03-30T16:42:09Z",
         "thumbnail": "https://i.ytimg.com/vi/_sadPL4tlkM/maxresdefault.jpg",
         "views": "273274"
        },
        {
         "title": "THIS NEEDS TO BE BANNED! PARADOX NEEDS TO NERF THIS! MAN THE GUNS EXPLOITS! - HOI4 MtG Multiplayer",
         "date": "2019-03-27T16:46:38Z",
         "thumbnail": "https://i.ytimg.com/vi/lQOzoTz-qz0/maxresdefault.jpg",
         "views": "271977"
        },
        {
         "title": "1 SHOT FLEET! THIS NAVY 1 SHOTS EVERYONE! THE BEST NAVY IN HOI4! - HOI4 Man the Guns Multiplayer",
         "date": "2019-03-23T16:44:58Z",
         "thumbnail": "https://i.ytimg.com/vi/RRGjVazTAts/maxresdefault.jpg",
         "views": "353929"
        },
        {
         "title": "WHAT HAPPENS WHEN BYZANTIUM GETS CRUSADED!? CRAZY NEW HOLY FURY MECHANICS! - Crusader Kings 2",
         "date": "2019-03-20T17:40:16Z",
         "thumbnail": "https://i.ytimg.com/vi/jwfMEtEnN-4/maxresdefault.jpg",
         "views": "110466"
        },
        {
         "title": "GAME BREAKING GLITCH RUINS MY USA GAME! HOW TO PLAY USA IN NEW META! - Hearts of Iron IV MTG",
         "date": "2019-03-17T16:52:31Z",
         "thumbnail": "https://i.ytimg.com/vi/9I1Xxudkk2g/maxresdefault.jpg",
         "views": "230185"
        },
        {
         "title": "THE DEMON CHILD IS HERE! CHILD OF SATAN CREATES THE SITH EMPIRE! - CK2 Holy Fury",
         "date": "2019-03-13T17:01:09Z",
         "thumbnail": "https://i.ytimg.com/vi/tWzybmR8DnE/maxresdefault.jpg",
         "views": "208237"
        },
        {
         "title": "THIS IS HOW NAVY WORKS IN MAN THE GUNS! THE NEW NAVAL META GUIDE! - HOI4 Man the Guns United Kingdom",
         "date": "2019-03-09T16:47:24Z",
         "thumbnail": "https://i.ytimg.com/vi/XdgALVfKWhk/maxresdefault.jpg",
         "views": "179122"
        },
        {
         "title": "THE TIME POLICE ALMOST CAUGHT ME! TOMMY BECOMES A PUNK! - Story Time with TommyKay",
         "date": "2019-03-06T17:51:47Z",
         "thumbnail": "https://i.ytimg.com/vi/5A3sIznUnKw/maxresdefault.jpg",
         "views": "62915"
        },
        {
         "title": "HOW TO HAVE UNLIMITED FUEL IN MTG!? USA IS BROKEN IN MP! - HOI4 Man the Guns Multiplayer",
         "date": "2019-03-03T16:58:47Z",
         "thumbnail": "https://i.ytimg.com/vi/i1h3uxURGL8/maxresdefault.jpg",
         "views": "205509"
        },
        {
         "title": "24 HOURS OF HEARTS OF IRON 4!? (nope) MY BROTHER JOINS THE VIDEO! - HOI4 Multiplayer + more",
         "date": "2019-02-26T18:18:12Z",
         "thumbnail": "https://i.ytimg.com/vi/aUt43JCrGew/maxresdefault.jpg",
         "views": "95034"
        },
        {
         "title": "THEY BANNED ME FROM A HOI4 MP GAME FOR THIS! NEW JAPAN META DOMINATION! - HOI4 Multiplayer",
         "date": "2019-02-23T16:45:17Z",
         "thumbnail": "https://i.ytimg.com/vi/73FbgcQZL4E/maxresdefault.jpg",
         "views": "809077"
        },
        {
         "title": "ESPORTS IN HOI4!? TOMMYKAY 1V1's VIEWERS! - HOI4 Multiplayer Gangir Duel Mod",
         "date": "2019-02-20T16:29:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2c6S-igOY3Y/maxresdefault.jpg",
         "views": "325928"
        },
        {
         "title": "THE BATTLE OF BROTHERS! THE MOST LEGENDARY CK2 GAME! - Crusader Kings 2 Holy Fury",
         "date": "2019-02-17T17:16:21Z",
         "thumbnail": "https://i.ytimg.com/vi/CaUOHljUF_A/maxresdefault.jpg",
         "views": "165174"
        },
        {
         "title": "HEARTS OF IRON 4 MULTIPLAYER BUT IT'S TEXT TO SPEECH!",
         "date": "2019-02-13T17:16:02Z",
         "thumbnail": "https://i.ytimg.com/vi/PITEYJ0OJD4/maxresdefault.jpg",
         "views": "98584"
        },
        {
         "title": "THIS IRISH TANK IS DEFINITELY NOT BROKEN IN HOI4 MP! - Ireland HOI4 Multiplayer",
         "date": "2019-02-10T17:24:46Z",
         "thumbnail": "https://i.ytimg.com/vi/GGFkhh1MTOk/maxresdefault.jpg",
         "views": "179856"
        },
        {
         "title": "vikings.in.paris - EDITION III 'Njóla'",
         "date": "2019-02-09T15:14:23Z",
         "thumbnail": "https://i.ytimg.com/vi/8cILqbLsgyM/maxresdefault.jpg",
         "views": "29200"
        },
        {
         "title": "WE LOST AFRICA...THEN THIS HAPPENED! BEST HOI4 GAME I'VE PLAYED! - HOI4 Multiplayer",
         "date": "2019-02-07T17:01:14Z",
         "thumbnail": "https://i.ytimg.com/vi/PWeHc6Wfy6A/maxresdefault.jpg",
         "views": "424912"
        },
        {
         "title": "THIS IS WHY SPAIN SHOULDN'T BE ALLOWED IN HOI4 MULTIPLAYER! - HOI4 Multiplayer with TommyKay",
         "date": "2019-02-03T17:19:22Z",
         "thumbnail": "https://i.ytimg.com/vi/sHNwtKucVQU/maxresdefault.jpg",
         "views": "422771"
        },
        {
         "title": "BEST HOI4 PLAYER SHOWS YOU HOW TO PLAY ROMANIA! BEST TEMPLATES! - HOI4 Multiplayer",
         "date": "2019-02-01T16:59:13Z",
         "thumbnail": "https://i.ytimg.com/vi/Cw64LUxsyeQ/maxresdefault.jpg",
         "views": "106517"
        },
        {
         "title": "TommyKay - \"Ginger's Night\"",
         "date": "2019-01-29T15:41:00Z",
         "thumbnail": "https://i.ytimg.com/vi/f448mXVN_r8/maxresdefault.jpg",
         "views": "53779"
        },
        {
         "title": "DON'T EVER DO THIS IN HOI4! THE WORST THING I'VE EVER DONE! - HOI4 Multiplayer",
         "date": "2019-01-27T16:07:47Z",
         "thumbnail": "https://i.ytimg.com/vi/uxCb__s9wU8/maxresdefault.jpg",
         "views": "156575"
        },
        {
         "title": "THE BEST CK2 MULTIPLAYER GAME! DANCE OF FOUR KINGS! w/Spiffing Brit, Feedback, AlexTheRambler",
         "date": "2019-01-23T16:31:04Z",
         "thumbnail": "https://i.ytimg.com/vi/C7ErotB0vbM/maxresdefault.jpg",
         "views": "240052"
        },
        {
         "title": "RESIDENT EVIL 2 REMAKE BUT IT'S JUST A GINGER SCREAMING (HOI4 PLAYER'S WORST NIGHTMARE)",
         "date": "2019-01-20T16:02:00Z",
         "thumbnail": "https://i.ytimg.com/vi/FdDbxOtgKrU/maxresdefault.jpg",
         "views": "45863"
        },
        {
         "title": "BEST SOVIET UNION TOMMY VS BEST GERMANY ALEX! EPIC BATTLE! - HOI4 Multiplayer",
         "date": "2019-01-17T16:30:27Z",
         "thumbnail": "https://i.ytimg.com/vi/2-p0x3ekz78/maxresdefault.jpg",
         "views": "985700"
        },
        {
         "title": "THEY TRASH-TALKED ME, THEN THIS HAPPENED! GERMANY TIME! - HOI4 Multiplayer",
         "date": "2019-01-14T16:38:34Z",
         "thumbnail": "https://i.ytimg.com/vi/nNclcr1sIqI/maxresdefault.jpg",
         "views": "1229892"
        },
        {
         "title": "IS THIS THE BEST CK2 VIDEO? RAGNARSSONS BECOME LEGENDS! - CK2 Holy Fury",
         "date": "2019-01-10T16:23:32Z",
         "thumbnail": "https://i.ytimg.com/vi/6gPGlZlsx7E/maxresdefault.jpg",
         "views": "106520"
        },
        {
         "title": "THE BEST INDIA YOU WILL EVER SEE! BRITISH RAJ IS A MAJOR! - HOI4 Multiplayer",
         "date": "2019-01-06T17:40:57Z",
         "thumbnail": "https://i.ytimg.com/vi/ZYqyTnVayyg/maxresdefault.jpg",
         "views": "267687"
        },
        {
         "title": "THE STORY OF RAGNAR LOTHBROK! BEST CHARACTER IN CK2! - CK2 Holy Fury",
         "date": "2019-01-02T16:28:36Z",
         "thumbnail": "https://i.ytimg.com/vi/z1gRt8UZIFc/maxresdefault.jpg",
         "views": "178251"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS JAPAN? - HOI4 Multiplayer",
         "date": "2018-12-30T18:09:56Z",
         "thumbnail": "https://i.ytimg.com/vi/z-_fVjGhpGE/maxresdefault.jpg",
         "views": "537767"
        },
        {
         "title": "ROMANIA IS BROKEN! DESTROYING 9000 MEDIUM TANKS! - HOI4 Multiplayer",
         "date": "2018-12-27T16:36:25Z",
         "thumbnail": "https://i.ytimg.com/vi/x8czodrOnaQ/maxresdefault.jpg",
         "views": "239158"
        },
        {
         "title": "TURNING 1 ISLAND INTO AN EMPIRE! GOTLAND ACHIEVEMENT RUN! - CK2 Holy Fury",
         "date": "2018-12-24T16:49:31Z",
         "thumbnail": "https://i.ytimg.com/vi/wUE8mI0dtRU/maxresdefault.jpg",
         "views": "184432"
        },
        {
         "title": "BEST HOI4 PLAYER SHOWS YOU HOW TO PLAY GERMANY - HOI4 Multiplayer",
         "date": "2018-12-21T18:06:03Z",
         "thumbnail": "https://i.ytimg.com/vi/o7CC81hKSZk/maxresdefault.jpg",
         "views": "618568"
        },
        {
         "title": "HARDEST JAPAN CHALLENGE! NO ESCALATING THE WAR AGAINST CHINA! - HOI4 Multiplayer",
         "date": "2018-12-18T16:04:13Z",
         "thumbnail": "https://i.ytimg.com/vi/wSwyGjXqofQ/maxresdefault.jpg",
         "views": "117119"
        },
        {
         "title": "HOW TO MAKE ALPHA COOKIES WITH GIRLFRIEND! - Cooking with TommyKay",
         "date": "2018-12-15T17:18:14Z",
         "thumbnail": "https://i.ytimg.com/vi/_tDxl9SDoEc/maxresdefault.jpg",
         "views": "54449"
        },
        {
         "title": "BEST HOI4 PLAYER SHOWS YOU HOW TO PLAY ITALY - HOI4 Multiplayer",
         "date": "2018-12-11T16:16:38Z",
         "thumbnail": "https://i.ytimg.com/vi/g1JVpao9oV4/maxresdefault.jpg",
         "views": "323433"
        },
        {
         "title": "BEST CK2 GAME EVER! IMMORTAL GOD-EMPEROR OF SPARTA! - CK2 Holy Fury",
         "date": "2018-12-08T17:15:17Z",
         "thumbnail": "https://i.ytimg.com/vi/LjrbKu1A18U/maxresdefault.jpg",
         "views": "234631"
        },
        {
         "title": "ONE PROVINCE SPARTA REFORMING HELLENISM AND MAKING AN EMPIRE! - CK2 Holy Fury",
         "date": "2018-12-05T16:08:07Z",
         "thumbnail": "https://i.ytimg.com/vi/F9sS5-UTvrE/maxresdefault.jpg",
         "views": "291429"
        },
        {
         "title": "WHAT HAPPENS WHEN IRELAND LANDS ON GERMANY!? - HOI4 Multiplayer",
         "date": "2018-12-02T15:54:03Z",
         "thumbnail": "https://i.ytimg.com/vi/qtZ2FZBGBG4/maxresdefault.jpg",
         "views": "175077"
        },
        {
         "title": "THIS IS WHAT PLAYING HEARTS OF IRON 4 DID TO ME! - HOI4 Multiplayer",
         "date": "2018-11-29T16:10:06Z",
         "thumbnail": "https://i.ytimg.com/vi/K3wCwkhjWD4/maxresdefault.jpg",
         "views": "27817"
        },
        {
         "title": "TommyKay Anime Opening 2 - \"The Journey\" (HOI4 Anime Opening)",
         "date": "2018-11-26T19:35:41Z",
         "thumbnail": "https://i.ytimg.com/vi/SdI8SsH7Pog/maxresdefault.jpg",
         "views": "67333"
        },
        {
         "title": "WHAT HAPPENS WHEN YOU INVADE RUSSIA AND USA AS JAPAN!? - HOI4 Multiplayer",
         "date": "2018-11-26T17:12:21Z",
         "thumbnail": "https://i.ytimg.com/vi/9NumI-2caj4/sddefault.jpg",
         "views": "261996"
        },
        {
         "title": "IS THIS WHAT THE BEST BLACK OPS 4 PLAYER LOOKS LIKE!? - COD Blackout Memes",
         "date": "2018-11-23T16:51:27Z",
         "thumbnail": "https://i.ytimg.com/vi/orfo77dOPAs/maxresdefault.jpg",
         "views": "14711"
        },
        {
         "title": "HOW TO PLAY JAPAN IN MULTIPLAYER! TOMMY TEACHES FEEDBACK HOW TO PLAY HOI4!?",
         "date": "2018-11-20T16:06:46Z",
         "thumbnail": "https://i.ytimg.com/vi/TRSxAEZRlGg/maxresdefault.jpg",
         "views": "107649"
        },
        {
         "title": "Breaking NUKE World Record In HOI4 Multiplayer!",
         "date": "2018-11-17T17:43:29Z",
         "thumbnail": "https://i.ytimg.com/vi/5LkZmyhx1Us/maxresdefault.jpg",
         "views": "238871"
        },
        {
         "title": "THE KING IN THE NORTH! NEW VIKING MECHANICS! - CK2 Holy Fury DLC",
         "date": "2018-11-14T17:26:21Z",
         "thumbnail": "https://i.ytimg.com/vi/n8Erm6rGsW8/maxresdefault.jpg",
         "views": "106914"
        },
        {
         "title": "GREATER GERMAN REICH FORMED AND ALMOST HAS A CIVIL WAR IN HOI4 Multiplayer!?!?",
         "date": "2018-11-11T15:36:46Z",
         "thumbnail": "https://i.ytimg.com/vi/QNhl0X-M_Ek/maxresdefault.jpg",
         "views": "165549"
        },
        {
         "title": "ALEX THE RAMBLER MEETS HIS BIGGEST FAN, GUSTAV! - HOI4 Multiplayer",
         "date": "2018-11-08T16:37:15Z",
         "thumbnail": "https://i.ytimg.com/vi/03jWdmo7sgw/maxresdefault.jpg",
         "views": "94591"
        },
        {
         "title": "BEST HOI4 PLAYER SHOWS YOU HOW TO DOMINATE AS THE SOVIETS! - HOI4 Multiplayer",
         "date": "2018-11-05T16:05:30Z",
         "thumbnail": "https://i.ytimg.com/vi/R4Dzu-AWLm4/maxresdefault.jpg",
         "views": "387719"
        },
        {
         "title": "NEW HOI4 DLC!? MAN THE GREEKS!? 👀 (also new PC) - Assassin's Creed Odyssey Memes",
         "date": "2018-11-02T16:08:49Z",
         "thumbnail": "https://i.ytimg.com/vi/Rd2Te9ezb0o/maxresdefault.jpg",
         "views": "35761"
        },
        {
         "title": "3 Alphas, 3 Empires - Return of the Central Powers! - HOI4 w/Rambler, Feedbackgaming",
         "date": "2018-10-30T16:00:33Z",
         "thumbnail": "https://i.ytimg.com/vi/EnAft8VS2Dc/maxresdefault.jpg",
         "views": "294557"
        },
        {
         "title": "DIPLOMACY IN HOI4!? ROLEPLAY MP GAME IN MILLENNIUM DAWN! - HOI4 Multiplayer",
         "date": "2018-10-27T15:02:27Z",
         "thumbnail": "https://i.ytimg.com/vi/QlpNg1U_ZxY/maxresdefault.jpg",
         "views": "321279"
        },
        {
         "title": "ARE HOI4 MEMES ACTUALLY FUNNY? - HOI4 Meme Review 👏",
         "date": "2018-10-24T15:10:39Z",
         "thumbnail": "https://i.ytimg.com/vi/t8wVwXdlOIg/maxresdefault.jpg",
         "views": "37283"
        },
        {
         "title": "WHAT HAPPENS WHEN TOMMY JOINS A NOOB GAME AS CHINA? - HOI4 Multiplayer",
         "date": "2018-10-21T15:02:46Z",
         "thumbnail": "https://i.ytimg.com/vi/lJ44TH5TG2s/maxresdefault.jpg",
         "views": "471859"
        },
        {
         "title": "CHURCHILL AND THE \"ALLIES GAUNTLET\"! BEST UK IN HOI4! - HOI4 Multiplayer",
         "date": "2018-10-18T15:02:16Z",
         "thumbnail": "https://i.ytimg.com/vi/_ad3GuzuekE/maxresdefault.jpg",
         "views": "263664"
        },
        {
         "title": "When You Play Modern Day HOI4 Multiplayer...",
         "date": "2018-10-15T16:45:41Z",
         "thumbnail": "https://i.ytimg.com/vi/4pdijZVjtEg/maxresdefault.jpg",
         "views": "269245"
        },
        {
         "title": "SACRIFICING PLAYERS TO THE HOI4 GODS! HOI4 RITUAL! - HOI4 Multiplayer",
         "date": "2018-10-12T14:56:54Z",
         "thumbnail": "https://i.ytimg.com/vi/od3JvxHbbqk/maxresdefault.jpg",
         "views": "48122"
        },
        {
         "title": "THE BEST MULTIPLAYER GAME!? - HOI4 Multiplayer w/AlexTheRambler, SpiffingBrit, FeedBackGaming",
         "date": "2018-10-09T15:15:55Z",
         "thumbnail": "https://i.ytimg.com/vi/3piEmU6seWM/maxresdefault.jpg",
         "views": "250799"
        },
        {
         "title": "WHY YOU SHOULDN'T PLAY HOI4 MULTIPLAYER!",
         "date": "2018-10-03T17:38:23Z",
         "thumbnail": "https://i.ytimg.com/vi/WKx4ZGw_9U4/maxresdefault.jpg",
         "views": "145640"
        },
        {
         "title": "HOW TO FORM GREATER GERMAN REICH IN MULTIPLAYER! - HOI4 Multiplayer",
         "date": "2018-09-30T14:47:23Z",
         "thumbnail": "https://i.ytimg.com/vi/NnOiVArhcHU/maxresdefault.jpg",
         "views": "136730"
        },
        {
         "title": "WHAT IS THIS HUNGARY STRATEGY IN MULTIPLAYER??? - HOI4 Multiplayer",
         "date": "2018-09-27T16:34:17Z",
         "thumbnail": "https://i.ytimg.com/vi/5o_Zdizzm6Y/maxresdefault.jpg",
         "views": "226181"
        },
        {
         "title": "BEST HOI4 MEMES!? - HOI4 Meme Review",
         "date": "2018-09-24T16:59:16Z",
         "thumbnail": "https://i.ytimg.com/vi/z1ezQDOt4Ck/maxresdefault.jpg",
         "views": "29513"
        },
        {
         "title": "WHAT IF AUSTRALIA WAS A SUPERPOWER? 🤔 - HOI4 Multiplayer",
         "date": "2018-09-21T15:37:42Z",
         "thumbnail": "https://i.ytimg.com/vi/g41auESKfYw/maxresdefault.jpg",
         "views": "144919"
        },
        {
         "title": "TOMMY CARRIES A 12 YEAR OLD AS ITALY!? THE STORY OF GUSTAV! - HOI4 Multiplayer",
         "date": "2018-09-18T15:47:59Z",
         "thumbnail": "https://i.ytimg.com/vi/um1GrrrDKk0/maxresdefault.jpg",
         "views": "258114"
        },
        {
         "title": "NO DECKSPACE CHALLENGE!? NEW HOI4 CHALLENGE AS USA!? - HOI4 Multiplayer",
         "date": "2018-09-15T16:00:56Z",
         "thumbnail": "https://i.ytimg.com/vi/tpzyxxAUd8Y/maxresdefault.jpg",
         "views": "94357"
        },
        {
         "title": "HOW I SENT A GUY TO PRISON! - Story Time with TommyKay",
         "date": "2018-09-12T17:33:26Z",
         "thumbnail": "https://i.ytimg.com/vi/VT5UuYCUYqA/maxresdefault.jpg",
         "views": "65113"
        },
        {
         "title": "HOW TO WIN OVER A GIRL IN HOI4 MP! ITALY NEW META! - HOI4 Multiplayer",
         "date": "2018-09-09T16:01:18Z",
         "thumbnail": "https://i.ytimg.com/vi/nsGVz5iay2w/maxresdefault.jpg",
         "views": "197114"
        },
        {
         "title": "10 000 SUBSCRIBERS SPECIAL! (Best TommyKay moments)",
         "date": "2018-09-06T17:14:42Z",
         "thumbnail": "https://i.ytimg.com/vi/SOTOGhSHXvs/maxresdefault.jpg",
         "views": "17024"
        },
        {
         "title": "HOW TO CARRY AS A MINOR IN HOI4 MP!? - HOI4 Multiplayer",
         "date": "2018-09-03T15:50:36Z",
         "thumbnail": "https://i.ytimg.com/vi/qnSfCpA9Uc8/maxresdefault.jpg",
         "views": "187912"
        },
        {
         "title": "AUSTRIA-HUNGARY ACHIEVEMENT RUN! HOW TO GET HUNGARY ACHIEVEMENTS! - HOI4 with TommyKay",
         "date": "2018-08-31T15:54:26Z",
         "thumbnail": "https://i.ytimg.com/vi/Qyrlu_CeSPo/maxresdefault.jpg",
         "views": "338311"
        },
        {
         "title": "INVADING USA AS MANCHUKUO IN MULTIPLAYER!? - HOI4 Multiplayer",
         "date": "2018-08-28T17:21:46Z",
         "thumbnail": "https://i.ytimg.com/vi/ZimdOPbrOc0/maxresdefault.jpg",
         "views": "182865"
        },
        {
         "title": "TommyKay Anime Opening 1 - \"Rise\" (HOI4 Anime Opening)",
         "date": "2018-08-22T20:29:48Z",
         "thumbnail": "https://i.ytimg.com/vi/gi2T0v5VtNk/maxresdefault.jpg",
         "views": "34458"
        },
        {
         "title": "ANIME TAKES OVER THE WORLD IN MP!? BIGGEST HOI4 RIVALRY! - HOI4 Multiplayer",
         "date": "2018-08-22T16:55:57Z",
         "thumbnail": "https://i.ytimg.com/vi/J7oGxdPGAbU/maxresdefault.jpg",
         "views": "187943"
        },
        {
         "title": "Can YOU Survive The LONGEST HOI4 Multiplayer Game!?",
         "date": "2018-08-19T16:29:32Z",
         "thumbnail": "https://i.ytimg.com/vi/Oq96eXCdFSI/maxresdefault.jpg",
         "views": "313523"
        },
        {
         "title": "HOW TOMMY TRICKED THE GERMAN ARMY! - Story Time with TommyKay",
         "date": "2018-08-16T18:22:58Z",
         "thumbnail": "https://i.ytimg.com/vi/aMaZlS3UhFY/maxresdefault.jpg",
         "views": "151577"
        },
        {
         "title": "WHY IS THIS IN THE GAME PARADOX!? FIX THIS PLEASE! - HOI4 Multiplayer",
         "date": "2018-08-13T16:20:41Z",
         "thumbnail": "https://i.ytimg.com/vi/jwKjB7daHTg/maxresdefault.jpg",
         "views": "62533"
        },
        {
         "title": "ALEX BEST CO-OP IN HOI4! HARDEST MULTIPLAYER GAME EVER! - HOI4 Multiplayer w/Alex The Rambler",
         "date": "2018-08-10T16:54:46Z",
         "thumbnail": "https://i.ytimg.com/vi/uH3Rhut04QQ/maxresdefault.jpg",
         "views": "184749"
        },
        {
         "title": "GINGERBORN IN A NEW HOI4 MOD!? THE MYSTERY OF THE BUNNIES - Skyrim with TommyKay",
         "date": "2018-08-07T16:45:14Z",
         "thumbnail": "https://i.ytimg.com/vi/WxrQ_Ll6lSQ/maxresdefault.jpg",
         "views": "15429"
        },
        {
         "title": "BEST HOI4 MP GAME YOU WILL SEE! BEST HOI4 PLAYER PLAYS SOVIET UNION! - HOI4 Multiplayer",
         "date": "2018-08-04T14:39:59Z",
         "thumbnail": "https://i.ytimg.com/vi/24oJYBNwspQ/maxresdefault.jpg",
         "views": "185372"
        },
        {
         "title": "THE LIFE OF A HOI4 YOUTUBER! GIANT DONATIONS! - HOI4 Multiplayer",
         "date": "2018-08-01T14:33:37Z",
         "thumbnail": "https://i.ytimg.com/vi/U9j5i-GIlH8/maxresdefault.jpg",
         "views": "15991"
        },
        {
         "title": "THE MAP STORY! TOMMY'S BIGGEST SECRET! - Story Time with TommyKay",
         "date": "2018-07-29T14:24:23Z",
         "thumbnail": "https://i.ytimg.com/vi/4Gps8w1e0TQ/maxresdefault.jpg",
         "views": "54887"
        },
        {
         "title": "BEST SPAIN PLAYER IN THE WORLD DESTROYS THE ALLIES! - HOI4 Multiplayer",
         "date": "2018-07-26T15:36:36Z",
         "thumbnail": "https://i.ytimg.com/vi/atYuyOb_wcg/maxresdefault.jpg",
         "views": "211301"
        },
        {
         "title": "HARDEST CK2 CHALLENGE EVER! - Crusader Kings 2 with TommyKay",
         "date": "2018-07-23T15:56:05Z",
         "thumbnail": "https://i.ytimg.com/vi/dFVYpL2VgVM/maxresdefault.jpg",
         "views": "246717"
        },
        {
         "title": "PLAYING 2 COUNTRIES IN 1 HOI4 MULTIPLAYER GAME!? - HOI4 Multiplayer",
         "date": "2018-07-20T17:34:22Z",
         "thumbnail": "https://i.ytimg.com/vi/ZiPJlJR1-XE/maxresdefault.jpg",
         "views": "89931"
        },
        {
         "title": "GREATEST COMEBACK IN HOI4 MP! TOMMY PLAYS FRANCE! - HOI4 Multiplayer",
         "date": "2018-07-17T16:44:45Z",
         "thumbnail": "https://i.ytimg.com/vi/tF_6N4b6Wv4/maxresdefault.jpg",
         "views": "290645"
        },
        {
         "title": "HOW TOMMY BECAME ALPHA! - Story Time with TommyKay",
         "date": "2018-07-14T15:29:50Z",
         "thumbnail": "https://i.ytimg.com/vi/abdV5s2bWqc/maxresdefault.jpg",
         "views": "70741"
        },
        {
         "title": "BIGGEST BLUNDER IN A HOI4 MP GAME! HOW STREAM SNIPING RUINS GAMES!  - HOI4 Multiplayer",
         "date": "2018-07-11T16:51:10Z",
         "thumbnail": "https://i.ytimg.com/vi/ut_QlQrxkhw/maxresdefault.jpg",
         "views": "129345"
        },
        {
         "title": "WORST HOI4 MULTIPLAYER GAME EVER! STREAM SNIPED AS ROMANIA! - HOI4 Multiplayer",
         "date": "2018-07-07T16:56:44Z",
         "thumbnail": "https://i.ytimg.com/vi/Qp_Ny2qYnHU/maxresdefault.jpg",
         "views": "136899"
        },
        {
         "title": "THIS IS HOW YOU PLAY THE BRITISH RAJ! INDIA AND ALLIES AGAINST THE WORLD! - HOI4 Multiplayer",
         "date": "2018-07-04T15:59:04Z",
         "thumbnail": "https://i.ytimg.com/vi/c3rIo-EOhq8/maxresdefault.jpg",
         "views": "161562"
        },
        {
         "title": "How I Played The PERFECT Russia In HOI4 Multiplayer...",
         "date": "2018-06-28T15:13:36Z",
         "thumbnail": "https://i.ytimg.com/vi/t7O9tJMOBkU/maxresdefault.jpg",
         "views": "268220"
        },
        {
         "title": "THIS Australia Build Will Make YOU Rage Quit HOI4 Multiplayer!",
         "date": "2018-06-24T16:27:00Z",
         "thumbnail": "https://i.ytimg.com/vi/WbyhQQg8d3M/maxresdefault.jpg",
         "views": "231509"
        },
        {
         "title": "TOMMY STOPS SCHOOL BULLIES! - Story Time with TommyKay",
         "date": "2018-06-21T16:46:43Z",
         "thumbnail": "https://i.ytimg.com/vi/iPe7AKhMR84/maxresdefault.jpg",
         "views": "27782"
        },
        {
         "title": "HOI4 MULTIPLAYER IN A NUTSHELL! WHY HOI4 MP CAN SUCK! - HOI4 Multiplayer",
         "date": "2018-06-19T20:07:11Z",
         "thumbnail": "https://i.ytimg.com/vi/jan3ZXrDuPg/maxresdefault.jpg",
         "views": "183267"
        },
        {
         "title": "THE PERFECT JAPAN STRATEGY! HOW TO CARRY THE AXIS AS JAPAN! - HOI4 Multiplayer",
         "date": "2018-06-17T11:23:06Z",
         "thumbnail": "https://i.ytimg.com/vi/aSWau7eKsoQ/maxresdefault.jpg",
         "views": "146073"
        },
        {
         "title": "BEST MULTIPLAYER GAME EVER! GREATER GERMAN REICH IN MP! TOMMY SHUTS UP HATERS! - HOI4 Multiplayer",
         "date": "2018-06-10T18:22:54Z",
         "thumbnail": "https://i.ytimg.com/vi/0tHvcT4P7sk/maxresdefault.jpg",
         "views": "274501"
        },
        {
         "title": "FEEDBACK AND TOMMY SHOW HOW TO PLAY JAPAN IN A PRO MULTIPLAYER GAME! - HOI4 Multiplayer",
         "date": "2018-06-01T20:21:02Z",
         "thumbnail": "https://i.ytimg.com/vi/AtuCFX1voOQ/maxresdefault.jpg",
         "views": "45818"
        },
        {
         "title": "THE TIME TOMMY STOPPED A ROBBERY - Story Time with TommyKay",
         "date": "2018-05-27T17:07:11Z",
         "thumbnail": "https://i.ytimg.com/vi/tabjMEUPoWY/maxresdefault.jpg",
         "views": "59667"
        },
        {
         "title": "THE BIGGEST THING TOMMY HAS EVER DONE! - 24 HOUR STREAM (HOI4, CK2, EU4 and more)",
         "date": "2018-05-12T18:10:55Z",
         "thumbnail": "https://i.ytimg.com/vi/p8xauInQyIM/maxresdefault.jpg",
         "views": "42332"
        },
        {
         "title": "TOMMY &amp; BRAGEN PODCAST TRAILER!",
         "date": "2018-05-08T15:16:17Z",
         "thumbnail": "https://i.ytimg.com/vi/ZrK7rkgEwiw/maxresdefault.jpg",
         "views": "1415"
        },
        {
         "title": "HOW TO WIN EVERY CHINA WAR! NEW JAPAN META GUIDE!? - HOI4 Multiplayer",
         "date": "2018-05-02T17:14:58Z",
         "thumbnail": "https://i.ytimg.com/vi/Cd6mLpqoRUk/maxresdefault.jpg",
         "views": "61028"
        },
        {
         "title": "BEST CK2 PLAYER FORMS SWEDEN! VIKING COSPLAY IRL! - Crusader Kings 2",
         "date": "2018-04-26T15:59:10Z",
         "thumbnail": "https://i.ytimg.com/vi/HS1g4Rtj1H4/maxresdefault.jpg",
         "views": "59860"
        },
        {
         "title": "HOW TO MAKE 500$ BY PLAYING HOI4!? - HOI4 Multiplayer",
         "date": "2018-04-17T18:54:57Z",
         "thumbnail": "https://i.ytimg.com/vi/NtqcoyHtoEg/maxresdefault.jpg",
         "views": "20722"
        },
        {
         "title": "HOW TO PLAY THE BEST ITALY IN HOI4! BEST HOI4 PLAYER GUIDES YOU! - HOI4 Multiplayer",
         "date": "2018-04-10T19:31:24Z",
         "thumbnail": "https://i.ytimg.com/vi/LeT6DzXEQsY/maxresdefault.jpg",
         "views": "105750"
        },
        {
         "title": "ST. PATRICK's DAY HOI4 SPECIAL! 1 SHOT PER SUB! - HOI4 Multiplayer",
         "date": "2018-04-05T15:49:22Z",
         "thumbnail": "https://i.ytimg.com/vi/azIKs0pnZT0/maxresdefault.jpg",
         "views": "42407"
        },
        {
         "title": "GREATER GERMAN REICH IN HOI4 MULTIPLAYER! BEST HOI4 PLAYER DOMINATES! - HOI4 Multiplayer",
         "date": "2018-04-03T15:39:46Z",
         "thumbnail": "https://i.ytimg.com/vi/fNtZ3acFNzM/maxresdefault.jpg",
         "views": "141604"
        },
        {
         "title": "CAN TOMMY BEAT ISP, DREW, FEEDBACKGAMING!? - HOI4 Multiplayer",
         "date": "2018-03-30T19:39:23Z",
         "thumbnail": "https://i.ytimg.com/vi/5w0FXPozPcc/maxresdefault.jpg",
         "views": "198712"
        },
        {
         "title": "FIRST EVER \"I Swear I'm Not a Byzantophile\" ACHIEVEMENT - HOI4 Waking the Tiger Byzantine Empire",
         "date": "2018-03-20T15:06:27Z",
         "thumbnail": "https://i.ytimg.com/vi/hQ0aD2Xc10M/maxresdefault.jpg",
         "views": "143375"
        },
        {
         "title": "Waking the Tiger Multiplayer! Tommy does an IRL stream! - HOI4 Multiplayer",
         "date": "2018-03-16T17:01:59Z",
         "thumbnail": "https://i.ytimg.com/vi/zFaFr7T6D00/maxresdefault.jpg",
         "views": "8198"
        },
        {
         "title": "GERMAN EMPIRE ACHIEVEMENT RUN! BEST HOI4 PLAYER DOES IT AGAIN! - HOI4 Waking the Tiger",
         "date": "2018-03-12T18:43:15Z",
         "thumbnail": "https://i.ytimg.com/vi/zLP2FWRiBzI/maxresdefault.jpg",
         "views": "336691"
        },
        {
         "title": "Fastest way to lose weight! | Life Hacks with TommyKay (Workout guide)",
         "date": "2018-03-02T17:24:45Z",
         "thumbnail": "https://i.ytimg.com/vi/LltIKT30pvM/maxresdefault.jpg",
         "views": "9640"
        },
        {
         "title": "GREATEST CO-OP EVER!? Feedbackgaming and TommyKay on Japan! - HOI4 Multiplayer",
         "date": "2018-02-22T17:26:30Z",
         "thumbnail": "https://i.ytimg.com/vi/yF-AYITvooc/maxresdefault.jpg",
         "views": "17375"
        },
        {
         "title": "HOW TO BEAT USA FAST IN HOI4! ⚡⚡⚡ | HOI4 Japan Guide #2",
         "date": "2018-02-19T17:26:18Z",
         "thumbnail": "https://i.ytimg.com/vi/yHtEGeZFKkk/maxresdefault.jpg",
         "views": "85282"
        },
        {
         "title": "Perfect Japan Gameplay in Multiplayer 😱 | HOI4 Japan Guide #1",
         "date": "2018-02-16T01:00:27Z",
         "thumbnail": "https://i.ytimg.com/vi/xPQB6fBh41w/maxresdefault.jpg",
         "views": "44953"
        },
        {
         "title": "TommyKay vs SturmBG Rivalry - HOI4 Multiplayer",
         "date": "2018-02-11T16:59:48Z",
         "thumbnail": "https://i.ytimg.com/vi/Xom-5kD15Vk/maxresdefault.jpg",
         "views": "17492"
        },
        {
         "title": "100 units encircled! Celebration stream! - HOI4 Multiplayer",
         "date": "2018-02-06T18:33:13Z",
         "thumbnail": "https://i.ytimg.com/vi/Eyd_s94R3jw/maxresdefault.jpg",
         "views": "22968"
        },
        {
         "title": "Tommy hangs out with a Twitch girl streamer! - HOI4 Multiplayer",
         "date": "2018-02-02T17:59:45Z",
         "thumbnail": "https://i.ytimg.com/vi/LyJ3Gr4Zipg/maxresdefault.jpg",
         "views": "46974"
        },
        {
         "title": "Life Hacks with TommyKay: How to make baked feta cheese! (100% healthy)",
         "date": "2018-01-29T18:07:24Z",
         "thumbnail": "https://i.ytimg.com/vi/fvxJv9HFo8A/maxresdefault.jpg",
         "views": "2953"
        },
        {
         "title": "Amazon Echo - TommyKay Edition (Best HOI4 player edition)",
         "date": "2018-01-24T12:25:06Z",
         "thumbnail": "https://i.ytimg.com/vi/-2lFo3kWqo0/maxresdefault.jpg",
         "views": "16720"
        },
        {
         "title": "TommyKay in the 1v1 HOI4 Tournament (Hearts of Iron IV Multiplayer)",
         "date": "2018-01-22T15:20:19Z",
         "thumbnail": "https://i.ytimg.com/vi/FcggmzjjtxI/maxresdefault.jpg",
         "views": "64452"
        },
        {
         "title": "Tommy gets his own video game - HOI4 Multiplayer",
         "date": "2018-01-14T15:08:44Z",
         "thumbnail": "https://i.ytimg.com/vi/A38pGIyNmDY/maxresdefault.jpg",
         "views": "8203"
        },
        {
         "title": "HoI4 Community DISSTRACK(ISP,AlexTheRambler,Feedbackgaming etc.) - TommyKayLIVE",
         "date": "2018-01-06T15:44:37Z",
         "thumbnail": "https://i.ytimg.com/vi/6nTQnsBSjx4/maxresdefault.jpg",
         "views": "39452"
        },
        {
         "title": "Tommy purging his HOI4 demons - HOI4 Multiplayer",
         "date": "2018-01-01T21:26:46Z",
         "thumbnail": "https://i.ytimg.com/vi/Ja9MwzOiv2Y/maxresdefault.jpg",
         "views": "8371"
        },
        {
         "title": "Alex the Rambler invades Tommy's stream! - HOI4 Multiplayer",
         "date": "2017-12-27T16:24:51Z",
         "thumbnail": "https://i.ytimg.com/vi/cdMpPecg6Yc/maxresdefault.jpg",
         "views": "5718"
        },
        {
         "title": "Life Hacks with TommyKay: How to make Guacamole! (HOI4 style)",
         "date": "2017-12-20T17:37:38Z",
         "thumbnail": "https://i.ytimg.com/vi/zMJGNfm1Kd8/maxresdefault.jpg",
         "views": "3588"
        },
        {
         "title": "PHILIPPINES (+HOI4 lobby) DISS TRACK - HOI4 Diss Track",
         "date": "2017-12-19T10:56:29Z",
         "thumbnail": "https://i.ytimg.com/vi/T4GfOv-W2Dk/maxresdefault.jpg",
         "views": "5084"
        },
        {
         "title": "LITTLE DISS TRACK ON FEEDBACKGAMING - HOI4 Diss Track",
         "date": "2017-12-15T11:31:20Z",
         "thumbnail": "https://i.ytimg.com/vi/syDi6IZqaMU/maxresdefault.jpg",
         "views": "3249"
        },
        {
         "title": "PRO GINGER HOI4 PLAYER PLAYS SPAIN IN KAISERREICH! - HOI4 Kaiserreich Spain Hearts of Iron IV",
         "date": "2017-12-14T15:47:05Z",
         "thumbnail": "https://i.ytimg.com/vi/ZBxbSrtxYyM/maxresdefault.jpg",
         "views": "56747"
        },
        {
         "title": "Tommy vs Skritshell, the old stubborn veteran - HOI4 Multiplayer",
         "date": "2017-12-08T16:01:28Z",
         "thumbnail": "https://i.ytimg.com/vi/0DPXycZgKJ4/maxresdefault.jpg",
         "views": "23907"
        },
        {
         "title": "iSorrowproductions raids Tommy! - HOI4 Multiplayer",
         "date": "2017-11-26T19:01:46Z",
         "thumbnail": "https://i.ytimg.com/vi/0mrSBstdYhM/maxresdefault.jpg",
         "views": "62523"
        },
        {
         "title": "SKRITSHELL DISS TRACK - HOI4 Diss Track",
         "date": "2017-11-24T19:31:01Z",
         "thumbnail": "https://i.ytimg.com/vi/oCRq-SpsTj0/maxresdefault.jpg",
         "views": "9010"
        },
        {
         "title": "Tommy meets a HOI4 hacker! - HOI4 Multiplayer",
         "date": "2017-11-20T17:45:41Z",
         "thumbnail": "https://i.ytimg.com/vi/eq03AFhKZp4/maxresdefault.jpg",
         "views": "38239"
        },
        {
         "title": "HOI4 Player Rating Scale! Diss tracks! - HOI4 Multiplayer",
         "date": "2017-11-17T16:55:13Z",
         "thumbnail": "https://i.ytimg.com/vi/gJ9WUG6QWeg/maxresdefault.jpg",
         "views": "11518"
        },
        {
         "title": "BAAS AND CHAT DISS TRACK - HOI4 Diss Track",
         "date": "2017-11-17T10:47:24Z",
         "thumbnail": "https://i.ytimg.com/vi/bsVcRExGff0/maxresdefault.jpg",
         "views": "2061"
        },
        {
         "title": "Youtuber HOI4 Multiplayer Game - Japan (TommyKay - Axis) HOI4 Multiplayer",
         "date": "2017-11-14T20:35:16Z",
         "thumbnail": "https://i.ytimg.com/vi/WWVXxG-X7-Y/maxresdefault.jpg",
         "views": "21302"
        },
        {
         "title": "Tommy cooks a HOI4 dinner - HOI4 Multiplayer",
         "date": "2017-11-10T18:48:53Z",
         "thumbnail": "https://i.ytimg.com/vi/OGhcFGZkyEw/maxresdefault.jpg",
         "views": "9090"
        },
        {
         "title": "Lowgang, the toxic pro HOI4 player! - HOI4 Multiplayer",
         "date": "2017-11-07T17:46:55Z",
         "thumbnail": "https://i.ytimg.com/vi/Dshd6J9ZQFk/maxresdefault.jpg",
         "views": "28306"
        },
        {
         "title": "Getting stream sniped! 1 Million Germans in UK! - HOI4 Multiplayer",
         "date": "2017-10-26T15:37:10Z",
         "thumbnail": "https://i.ytimg.com/vi/FXyp7AveB5M/maxresdefault.jpg",
         "views": "17800"
        },
        {
         "title": "The Ways of Samurai Tommy - HOI4 Multiplayer",
         "date": "2017-10-20T20:14:27Z",
         "thumbnail": "https://i.ytimg.com/vi/bVV6qPtwLaE/maxresdefault.jpg",
         "views": "12680"
        },
        {
         "title": "Is Tommy a beta now? +100$ Donation! - HOI4 Multiplayer",
         "date": "2017-10-12T17:26:09Z",
         "thumbnail": "https://i.ytimg.com/vi/0wpOwk8pQbE/maxresdefault.jpg",
         "views": "13804"
        },
        {
         "title": "The only PRO HOI4 player gets romantic! - HOI4 Multiplayer",
         "date": "2017-10-08T17:47:23Z",
         "thumbnail": "https://i.ytimg.com/vi/QD7yIgpMHTg/maxresdefault.jpg",
         "views": "14754"
        },
        {
         "title": "The Story of Tommy and Irish in Russia - HOI4 MP Soviet Union",
         "date": "2017-10-03T21:42:36Z",
         "thumbnail": "https://i.ytimg.com/vi/q1tl_X7C0j4/maxresdefault.jpg",
         "views": "88573"
        },
        {
         "title": "When 2 Mexican Tanks beat the whole Axis - HOI4 MP",
         "date": "2017-09-19T13:08:41Z",
         "thumbnail": "https://i.ytimg.com/vi/5SmSo20zBw8/maxresdefault.jpg",
         "views": "6901"
        },
        {
         "title": "DISSTRACK ON KLS #1 R.I.P.! - HOI4 Diss Track",
         "date": "2017-08-27T13:55:35Z",
         "thumbnail": "https://i.ytimg.com/vi/FGMbJ4L6mfs/maxresdefault.jpg",
         "views": "6113"
        },
        {
         "title": "SICK RHYMES AND BEATS #1 - HOI4 Rap",
         "date": "2017-08-27T13:41:55Z",
         "thumbnail": "https://i.ytimg.com/vi/rJL5FyzF0gM/maxresdefault.jpg",
         "views": "14591"
        },
        {
         "title": "Preparing for Star Wars: The Old Republic!",
         "date": "2011-12-12T17:34:34Z",
         "thumbnail": "https://i.ytimg.com/vi/Pm9qaYiZKBg/maxresdefault.jpg",
         "views": "24773"
        }
    ]
}