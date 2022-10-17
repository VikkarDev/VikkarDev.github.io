// CODED BY Spiralio
let ytVids = [];

function resetYTVids() {
    ytVids = [
        {
         "title": "Canadian Reacts to Russian RevolutionOversimplified (Part 1!)",
         "date": "2022-10-16T14:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ahmyGkxMAYo/maxresdefault.jpg",
         "views": "559"
        },
        {
         "title": "Heroes or Villains? - The Decembrists (Part 2!) - Epic History TV Reaction",
         "date": "2022-10-13T18:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/0s2qfD4_qIE/maxresdefault.jpg",
         "views": "501"
        },
        {
         "title": "Russia's (FIRST?!) Revolution? - The Decembrists (Part 1!) - Epic History TV Reaction",
         "date": "2022-10-11T18:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/MMPMJaZztcg/maxresdefault.jpg",
         "views": "692"
        },
        {
         "title": "Great Northern War (Parts 3-5!) - Extra Credits Reaction",
         "date": "2022-10-09T14:00:27Z",
         "thumbnail": "https://i.ytimg.com/vi/iEDB55SHVOk/maxresdefault.jpg",
         "views": "458"
        },
        {
         "title": "When Sweden Fought Russia, Poland &amp; Denmark - Great Northern War (Parts 1-2) Extra Credits Reaction",
         "date": "2022-10-08T14:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/NADwh5zjPko/maxresdefault.jpg",
         "views": "657"
        },
        {
         "title": "The History of Russia - Epic History TV Reaction (Part 2!)",
         "date": "2022-09-30T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/2pII8zDvg_o/sddefault.jpg",
         "views": "1466"
        },
        {
         "title": "The History of Russia - Epic History TV Reaction (Part 1!)",
         "date": "2022-09-28T16:00:25Z",
         "thumbnail": "https://i.ytimg.com/vi/LP-nwP6iqGw/maxresdefault.jpg",
         "views": "1699"
        },
        {
         "title": "Does Italian History Repeat? - History Matters Reaction",
         "date": "2022-09-26T15:00:27Z",
         "thumbnail": "https://i.ytimg.com/vi/Sum93tRgewk/maxresdefault.jpg",
         "views": "755"
        },
        {
         "title": "The Video That Changed Everything For Me. J.J. McCullough Reaction",
         "date": "2022-09-24T15:00:18Z",
         "thumbnail": "https://i.ytimg.com/vi/UWKlZoyfMhE/maxresdefault.jpg",
         "views": "1800"
        },
        {
         "title": "No Food. No Future. Shopping in the Soviet Union - The Cold War Reaction",
         "date": "2022-09-22T18:00:18Z",
         "thumbnail": "https://i.ytimg.com/vi/x4o5n5bJ0f0/maxresdefault.jpg",
         "views": "375"
        },
        {
         "title": "The Day Russian Democracy Died (Russia's FINAL Chance?) by NFKRZ Reaction",
         "date": "2022-09-16T16:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/xFuhP5FtSf8/maxresdefault.jpg",
         "views": "1726"
        },
        {
         "title": "Russia was ALWAYS Doomed - The Origins of Russian Authoritarianism Reaction",
         "date": "2022-09-14T18:30:37Z",
         "thumbnail": "https://i.ytimg.com/vi/fPxy-GCPaIU/maxresdefault.jpg",
         "views": "1378"
        },
        {
         "title": "Canadian Reacts to Geography Now! Sweden (Swedish ELECTION 2022 Special!)",
         "date": "2022-09-10T15:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/_0FGNkL8O-U/maxresdefault.jpg",
         "views": "1522"
        },
        {
         "title": "Canadian Reacts to Prohibition by Oversimplified",
         "date": "2022-09-09T15:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/d-PFyxDS8AI/maxresdefault.jpg",
         "views": "1717"
        },
        {
         "title": "How the Internet Will Completely Change the World - Whatifalthist Reaction",
         "date": "2022-09-07T18:30:36Z",
         "thumbnail": "https://i.ytimg.com/vi/dz1SDsE0fH4/maxresdefault.jpg",
         "views": "1560"
        },
        {
         "title": "Canadian Reacts to The First Punic War - Oversimplified (Part 2)",
         "date": "2022-09-04T11:31:30Z",
         "thumbnail": "https://i.ytimg.com/vi/HhDvQLEI-5Y/maxresdefault.jpg",
         "views": "5424"
        },
        {
         "title": "Canadian Reacts to The First Punic War - Oversimplified (Part 1)",
         "date": "2022-09-03T11:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/ohXJXkfvFKs/maxresdefault.jpg",
         "views": "8834"
        },
        {
         "title": "Canadian Reacts to The Dumbest Russian Voyage Nobody Talks About by BlueJay",
         "date": "2022-08-29T18:30:25Z",
         "thumbnail": "https://i.ytimg.com/vi/_3tlgP-ziRY/maxresdefault.jpg",
         "views": "1583"
        },
        {
         "title": "The Election That RUINED Everything? (Was it Really That Bad?) AlternateHistoryHub Reaction",
         "date": "2022-08-27T15:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/Oi2_dF9wxUw/maxresdefault.jpg",
         "views": "788"
        },
        {
         "title": "Canadian Reacts to Geography Now! Germany",
         "date": "2022-08-25T16:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/PgmSSRX68BI/maxresdefault.jpg",
         "views": "2637"
        },
        {
         "title": "Canadian Reacts to History of the Entire World, I Guess by Bill Wurtz",
         "date": "2022-08-24T15:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/T2_FXdwrnhg/maxresdefault.jpg",
         "views": "1442"
        },
        {
         "title": "Why was the USSR So Terrible? History Matters Reaction",
         "date": "2022-08-13T15:00:44Z",
         "thumbnail": "https://i.ytimg.com/vi/zZNLEjOGFHI/maxresdefault.jpg",
         "views": "1134"
        },
        {
         "title": "WHY was Germany SO EFFECTIVE in WW2?! Knowledgia Reaction",
         "date": "2022-08-12T16:36:02Z",
         "thumbnail": "https://i.ytimg.com/vi/oVurN6aJEEU/maxresdefault.jpg",
         "views": "436"
        },
        {
         "title": "Canadian Reacts to How Canada Could End by J.J. McCullough",
         "date": "2022-08-09T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/4o3x8OMVbCI/maxresdefault.jpg",
         "views": "1252"
        },
        {
         "title": "Canadian Reacts to The Pig War by Oversimplified (Part 2)",
         "date": "2022-07-26T17:30:31Z",
         "thumbnail": "https://i.ytimg.com/vi/6q-i_OMVSlc/maxresdefault.jpg",
         "views": "2463"
        },
        {
         "title": "Canadian Reacts to The Pig War by Oversimplified (Part 1)",
         "date": "2022-07-24T18:30:40Z",
         "thumbnail": "https://i.ytimg.com/vi/bnoH4Dym--A/maxresdefault.jpg",
         "views": "2955"
        },
        {
         "title": "Canadian Reacts to History of the United States, I guess",
         "date": "2022-07-17T19:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/qMMF8nCoH4g/maxresdefault.jpg",
         "views": "1344"
        },
        {
         "title": "What Happened to German Soldiers AFTER! WW2? - Armchair Historian Reaction",
         "date": "2022-07-13T17:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/q_HEPRSQxgc/maxresdefault.jpg",
         "views": "965"
        },
        {
         "title": "Will Our World and Age COLLAPSE?! Very Soon? (Not Quite) - Whatifalthist Reaction",
         "date": "2022-07-09T18:37:15Z",
         "thumbnail": "https://i.ytimg.com/vi/7SDHpWxAzJ4/maxresdefault.jpg",
         "views": "1188"
        },
        {
         "title": "Is Europe Better Because of the EU? History of the EU - Geo History Reaction",
         "date": "2022-07-07T17:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/xAt7oWnvqY0/maxresdefault.jpg",
         "views": "907"
        },
        {
         "title": "The Future (COLLAPSE?) of Europe?! Whatifalthist Reaction",
         "date": "2022-07-02T15:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/D8HBfly62nA/maxresdefault.jpg",
         "views": "3204"
        },
        {
         "title": "Canadian Debunks 50 \"Facts\" About Canada", 
         "date": "2022-07-01T16:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2JIathzCfBc/maxresdefault.jpg",
         "views": "282"
        },
        {
         "title": "Why is the World Crazy Now? Whatifalthist Reaction",
         "date": "2022-06-30T16:30:14Z",
         "thumbnail": "https://i.ytimg.com/vi/spWsV_-Nr9U/maxresdefault.jpg",
         "views": "1977"
        },
        {
         "title": "Canadian Reacts to Geography Now! Canada",
         "date": "2022-06-25T16:45:03Z",
         "thumbnail": "https://i.ytimg.com/vi/XObFnszDdEI/maxresdefault.jpg",
         "views": "1419"
        },
        {
         "title": "The WW2 Battle Fought In...America? Simple History Reaction",
         "date": "2022-06-21T18:30:30Z",
         "thumbnail": "https://i.ytimg.com/vi/Kd8PizaEFJA/maxresdefault.jpg",
         "views": "455"
        },
        {
         "title": "Canadian Reacts to The Fallen of World War II",
         "date": "2022-06-19T15:05:01Z",
         "thumbnail": "https://i.ytimg.com/vi/sdzksWUj39E/maxresdefault.jpg",
         "views": "6521"
        },
        {
         "title": "Canadian Reacts to The Cold War - OverSimplified (Part 2)",
         "date": "2022-06-17T14:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/Gb-DgH4kmjU/maxresdefault.jpg",
         "views": "1377"
        },
        {
         "title": "Canadian Reacts to The Cold War - OverSimplified (Part 1)",
         "date": "2022-06-14T17:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0cdtfeVNku8/maxresdefault.jpg",
         "views": "1911"
        },
        {
         "title": "FDR's Plan To Divide Germany (Was it a Better Plan?!) - Whatifalthist Reaction",
         "date": "2022-06-12T15:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/ihmXM7YptcY/maxresdefault.jpg",
         "views": "842"
        },
        {
         "title": "What if Germany Had Been Split Differently After WWII - AlternateHistoryHub Reaction",
         "date": "2022-06-11T15:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/24eMQVWVobo/maxresdefault.jpg",
         "views": "1137"
        },
        {
         "title": "How Did This Happen?! HOW did Germany Get So Strong After WW1? - Armchair Historian Reaction",
         "date": "2022-06-09T18:30:38Z",
         "thumbnail": "https://i.ytimg.com/vi/i7GyEv7pWiM/maxresdefault.jpg",
         "views": "531"
        },
        {
         "title": "Wars of the 2020s and 30s by Whatifalthist Reaction",
         "date": "2022-06-07T18:45:01Z",
         "thumbnail": "https://i.ytimg.com/vi/RzWdRNP_cHU/maxresdefault.jpg",
         "views": "2321"
        },
        {
         "title": "Canadian Reacts to AlternateHistoryHub's OTHER CANADA TALES!",
         "date": "2022-06-05T14:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/oS5Np5akTHU/maxresdefault.jpg",
         "views": "944"
        },
        {
         "title": "The WORST History Video on YouTube! American Eye Reaction",
         "date": "2022-06-04T15:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/Bke-CmkD9f8/maxresdefault.jpg",
         "views": "289"
        },
        {
         "title": "(A Terrifying World) What if Germany WON World War 2? PART 4 - AlternateHistoryHub Reaction",
         "date": "2022-06-02T18:30:12Z",
         "thumbnail": "https://i.ytimg.com/vi/GY8hahVvJRs/maxresdefault.jpg",
         "views": "506"
        },
        {
         "title": "(No Coming Back?) WHAT IF Germany WON World War 2?! PART 3 - AlternateHistoryHub Reaction",
         "date": "2022-05-31T18:30:05Z",
         "thumbnail": "https://i.ytimg.com/vi/6HvGx4nCTJU/maxresdefault.jpg",
         "views": "619"
        },
        {
         "title": "What if Germany WON WW2?! (Does it Get Worse or Better?) Part 2- AlternateHistoryHub Reaction",
         "date": "2022-05-29T14:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/avoKdQ59B7I/maxresdefault.jpg",
         "views": "714"
        },
        {
         "title": "What if Germany WON WW2?! (End of the World?) - AlternateHistoryHub Reaction",
         "date": "2022-05-28T16:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/DPKGDfgyGK8/maxresdefault.jpg",
         "views": "1184"
        },
        {
         "title": "A Study of Decadence (The Fall of the West?) - Whatifalthist Reaction",
         "date": "2022-05-24T18:00:24Z",
         "thumbnail": "https://i.ytimg.com/vi/tTHkm02OSJw/maxresdefault.jpg",
         "views": "2789"
        },
        {
         "title": "Take HIM (You Know Who I Mean) OUT! - The Infographics Show Reaction",
         "date": "2022-05-23T18:30:09Z",
         "thumbnail": "https://i.ytimg.com/vi/BC9ruB0gRnI/maxresdefault.jpg",
         "views": "305"
        },
        {
         "title": "Nazis on...Drugs? Nazis on Crystal Meth - World War Two Reaction",
         "date": "2022-05-20T18:30:21Z",
         "thumbnail": "https://i.ytimg.com/vi/GxhFDbFdKq4/maxresdefault.jpg",
         "views": "624"
        },
        {
         "title": "Germany Could Not Win WW2 Reaction (Sorry HoI4 Players) PART 2 - Potential History",
         "date": "2022-05-17T19:15:00Z",
         "thumbnail": "https://i.ytimg.com/vi/U47kv7qEumM/maxresdefault.jpg",
         "views": "1780"
        },
        {
         "title": "Germany Could Not Win WW2 Reaction (No Matter What) PART 1 - Potential History",
         "date": "2022-05-16T18:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/14MEQwxHPE8/maxresdefault.jpg",
         "views": "2470"
        },
        {
         "title": "WW2 Every Day With Army Sizes Reaction - Basically the Entire History of WW2 in ONE Video",
         "date": "2022-05-14T18:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/QaKotHo96GU/maxresdefault.jpg",
         "views": "4511"
        },
        {
         "title": "Oversimplified Hitler Reaction PART 2!",
         "date": "2022-05-13T18:30:08Z",
         "thumbnail": "https://i.ytimg.com/vi/DAh0tbstJRI/maxresdefault.jpg",
         "views": "1204"
        },
        {
         "title": "The BANNED, INFAMOUS Oversimplified Video! Hitler (Part 1) Reaction",
         "date": "2022-05-11T18:30:32Z",
         "thumbnail": "https://i.ytimg.com/vi/QJe_JuTjW8Q/maxresdefault.jpg",
         "views": "2238"
        },
        {
         "title": "Is WW3 REALLY About To Start? (Probably Not) - Whatifalthist Reaction Video",
         "date": "2022-05-09T19:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/h9bUI29WgJQ/maxresdefault.jpg",
         "views": "2569"
        },
        {
         "title": "Canadian Reacts to CANADIAN History Matters Videos!",
         "date": "2022-05-07T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/amSfvVgDkjc/maxresdefault.jpg",
         "views": "2243"
        },
        {
         "title": "A Complete History of World War 1 in Countryballs - Reaction",
         "date": "2022-05-03T18:30:46Z",
         "thumbnail": "https://i.ytimg.com/vi/9xNZ46YUGnA/maxresdefault.jpg",
         "views": "496"
        },
        {
         "title": "The Borders of the 22nd Century? - Whatifalthist Reaction",
         "date": "2022-04-30T18:30:20Z",
         "thumbnail": "https://i.ytimg.com/vi/W_-8iB4g8sk/maxresdefault.jpg",
         "views": "3537"
        },
        {
         "title": "Canadian Reacts AGAIN to WW2 PART 2 - Oversimplified",
         "date": "2022-04-29T17:30:11Z",
         "thumbnail": "https://i.ytimg.com/vi/uqIMzxkFH0c/maxresdefault.jpg",
         "views": "3811"
        },
        {
         "title": "Canadian Reacts to WW2 - Oversimplified",
         "date": "2022-04-27T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/pA_z5sFwnVQ/maxresdefault.jpg",
         "views": "3894"
        },
        {
         "title": "Canadian Reacts to How Canada Will Fall",
         "date": "2022-04-24T18:45:00Z",
         "thumbnail": "https://i.ytimg.com/vi/j4plTWf4HMM/maxresdefault.jpg",
         "views": "5777"
        }
    ]
}