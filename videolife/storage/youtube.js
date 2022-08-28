let ytVids = [];

function resetYTVids() {
    ytVids = [
        {
         "title": "The Election That RUINED Everything? (Was it Really That Bad?) AlternateHistoryHub Reaction",
         "date": "2022-08-27T15:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/Oi2_dF9wxUw/maxresdefault.jpg",
         "views": "221"
        },
        {
         "title": "Canadian Reacts to Geography Now! Germany",
         "date": "2022-08-25T16:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/PgmSSRX68BI/maxresdefault.jpg",
         "views": "881"
        },
        {
         "title": "Canadian Reacts to History of the Entire World, I Guess by Bill Wurtz",
         "date": "2022-08-24T15:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/T2_FXdwrnhg/hqdefault.jpg",
         "views": "541"
        },
        {
         "title": "Why was the USSR So Terrible? History Matters Reaction",
         "date": "2022-08-13T15:00:44Z",
         "thumbnail": "https://i.ytimg.com/vi/zZNLEjOGFHI/maxresdefault.jpg",
         "views": "625"
        },
        {
         "title": "WHY was Germany SO EFFECTIVE in WW2?! Knowledgia Reaction",
         "date": "2022-08-12T16:36:02Z",
         "thumbnail": "https://i.ytimg.com/vi/oVurN6aJEEU/maxresdefault.jpg",
         "views": "312"
        },
        {
         "title": "Canadian Reacts to How Canada Could End by J.J. McCullough",
         "date": "2022-08-09T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/4o3x8OMVbCI/maxresdefault.jpg",
         "views": "757"
        },
        {
         "title": "Canadian Reacts to The Pig War by Oversimplified (Part 2)",
         "date": "2022-07-26T17:30:31Z",
         "thumbnail": "https://i.ytimg.com/vi/6q-i_OMVSlc/maxresdefault.jpg",
         "views": "1402"
        },
        {
         "title": "Canadian Reacts to The Pig War by Oversimplified (Part 1)",
         "date": "2022-07-24T18:30:40Z",
         "thumbnail": "https://i.ytimg.com/vi/bnoH4Dym--A/maxresdefault.jpg",
         "views": "1807"
        },
        {
         "title": "Canadian Reacts to History of the United States, I guess",
         "date": "2022-07-17T19:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/qMMF8nCoH4g/maxresdefault.jpg",
         "views": "1086"
        },
        {
         "title": "What Happened to German Soldiers AFTER! WW2? - Armchair Historian Reaction",
         "date": "2022-07-13T17:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/q_HEPRSQxgc/maxresdefault.jpg",
         "views": "716"
        },
        {
         "title": "Will Our World and Age COLLAPSE?! Very Soon? (Not Quite) - Whatifalthist Reaction",
         "date": "2022-07-09T18:37:15Z",
         "thumbnail": "https://i.ytimg.com/vi/7SDHpWxAzJ4/maxresdefault.jpg",
         "views": "1076"
        },
        {
         "title": "Is Europe Better Because of the EU? History of the EU - Geo History Reaction",
         "date": "2022-07-07T17:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/xAt7oWnvqY0/maxresdefault.jpg",
         "views": "682"
        },
        {
         "title": "The Future (COLLAPSE?) of Europe?! Whatifalthist Reaction",
         "date": "2022-07-02T15:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/D8HBfly62nA/maxresdefault.jpg",
         "views": "2724"
        },
        {
         "title": "Canadian Reacts to 50 AMAZING Facts About Canada",
         "date": "2022-07-01T16:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2JIathzCfBc/maxresdefault.jpg",
         "views": "237"
        },
        {
         "title": "Why is the World Crazy Now? Whatifalthist Reaction",
         "date": "2022-06-30T16:30:14Z",
         "thumbnail": "https://i.ytimg.com/vi/spWsV_-Nr9U/maxresdefault.jpg",
         "views": "1745"
        },
        {
         "title": "Canadian Reacts to Geography Now! Canada",
         "date": "2022-06-25T16:45:03Z",
         "thumbnail": "https://i.ytimg.com/vi/XObFnszDdEI/maxresdefault.jpg",
         "views": "910"
        },
        {
         "title": "The WW2 Battle Fought In...America? Simple History Reaction",
         "date": "2022-06-21T18:30:30Z",
         "thumbnail": "https://i.ytimg.com/vi/Kd8PizaEFJA/maxresdefault.jpg",
         "views": "376"
        },
        {
         "title": "Canadian Reacts to The Fallen of World War II",
         "date": "2022-06-19T15:05:01Z",
         "thumbnail": "https://i.ytimg.com/vi/sdzksWUj39E/maxresdefault.jpg",
         "views": "5224"
        },
        {
         "title": "Canadian Reacts to The Cold War - OverSimplified (Part 2)",
         "date": "2022-06-17T14:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/Gb-DgH4kmjU/maxresdefault.jpg",
         "views": "1032"
        },
        {
         "title": "Canadian Reacts to The Cold War - OverSimplified (Part 1)",
         "date": "2022-06-14T17:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0cdtfeVNku8/maxresdefault.jpg",
         "views": "1449"
        },
        {
         "title": "FDR's Plan To Divide Germany (Was it a Better Plan?!) - Whatifalthist Reaction",
         "date": "2022-06-12T15:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/ihmXM7YptcY/maxresdefault.jpg",
         "views": "733"
        },
        {
         "title": "What if Germany Had Been Split Differently After WWII - AlternateHistoryHub Reaction",
         "date": "2022-06-11T15:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/24eMQVWVobo/maxresdefault.jpg",
         "views": "846"
        },
        {
         "title": "How Did This Happen?! HOW did Germany Get So Strong After WW1? - Armchair Historian Reaction",
         "date": "2022-06-09T18:30:38Z",
         "thumbnail": "https://i.ytimg.com/vi/i7GyEv7pWiM/maxresdefault.jpg",
         "views": "443"
        },
        {
         "title": "Wars of the 2020s and 30s by Whatifalthist Reaction",
         "date": "2022-06-07T18:45:01Z",
         "thumbnail": "https://i.ytimg.com/vi/RzWdRNP_cHU/maxresdefault.jpg",
         "views": "2095"
        },
        {
         "title": "Canadian Reacts to AlternateHistoryHub's OTHER CANADA TALES!",
         "date": "2022-06-05T14:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/oS5Np5akTHU/maxresdefault.jpg",
         "views": "719"
        },
        {
         "title": "The Worst History Video on YouTube  - American Eye Reaction",
         "date": "2022-06-04T15:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/Bke-CmkD9f8/maxresdefault.jpg",
         "views": "242"
        },
        {
         "title": "(A Terrifying World) What if Germany WON World War 2? PART 4 - AlternateHistoryHub Reaction",
         "date": "2022-06-02T18:30:12Z",
         "thumbnail": "https://i.ytimg.com/vi/GY8hahVvJRs/maxresdefault.jpg",
         "views": "460"
        },
        {
         "title": "(No Coming Back?) WHAT IF Germany WON World War 2?! PART 3 - AlternateHistoryHub Reaction",
         "date": "2022-05-31T18:30:05Z",
         "thumbnail": "https://i.ytimg.com/vi/6HvGx4nCTJU/maxresdefault.jpg",
         "views": "571"
        },
        {
         "title": "What if Germany WON WW2?! (Does it Get Worse or Better?) Part 2- AlternateHistoryHub Reaction",
         "date": "2022-05-29T14:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/avoKdQ59B7I/maxresdefault.jpg",
         "views": "653"
        },
        {
         "title": "What if Germany WON WW2?! (End of the World?) - AlternateHistoryHub Reaction",
         "date": "2022-05-28T16:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/DPKGDfgyGK8/maxresdefault.jpg",
         "views": "1028"
        },
        {
         "title": "A Study of Decadence (The Fall of the West?) - Whatifalthist Reaction",
         "date": "2022-05-24T18:00:24Z",
         "thumbnail": "https://i.ytimg.com/vi/tTHkm02OSJw/maxresdefault.jpg",
         "views": "2467"
        },
        {
         "title": "Take HIM (You Know Who I Mean) OUT! - The Infographics Show Reaction",
         "date": "2022-05-23T18:30:09Z",
         "thumbnail": "https://i.ytimg.com/vi/BC9ruB0gRnI/maxresdefault.jpg",
         "views": "290"
        },
        {
         "title": "Nazis on...Drugs? Nazis on Crystal Meth - World War Two Reaction",
         "date": "2022-05-20T18:30:21Z",
         "thumbnail": "https://i.ytimg.com/vi/GxhFDbFdKq4/maxresdefault.jpg",
         "views": "575"
        },
        {
         "title": "Germany Could Not Win WW2 Reaction (Sorry HoI4 Players) PART 2 - Potential History",
         "date": "2022-05-17T19:15:00Z",
         "thumbnail": "https://i.ytimg.com/vi/U47kv7qEumM/maxresdefault.jpg",
         "views": "1458"
        },
        {
         "title": "Germany Could Not Win WW2 Reaction (No Matter What) PART 1 - Potential History",
         "date": "2022-05-16T18:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/14MEQwxHPE8/maxresdefault.jpg",
         "views": "2005"
        },
        {
         "title": "WW2 Every Day With Army Sizes Reaction - Basically the Entire History of WW2 in ONE Video",
         "date": "2022-05-14T18:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/QaKotHo96GU/maxresdefault.jpg",
         "views": "3899"
        },
        {
         "title": "Oversimplified Hitler Reaction PART 2!",
         "date": "2022-05-13T18:30:08Z",
         "thumbnail": "https://i.ytimg.com/vi/DAh0tbstJRI/maxresdefault.jpg",
         "views": "1018"
        },
        {
         "title": "The BANNED, INFAMOUS Oversimplified Video! Hitler (Part 1) Reaction",
         "date": "2022-05-11T18:30:32Z",
         "thumbnail": "https://i.ytimg.com/vi/QJe_JuTjW8Q/maxresdefault.jpg",
         "views": "1955"
        },
        {
         "title": "Is WW3 REALLY About To Start? (Probably Not) - Whatifalthist Reaction Video",
         "date": "2022-05-09T19:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/h9bUI29WgJQ/maxresdefault.jpg",
         "views": "2421"
        },
        {
         "title": "Canadian Reacts to CANADIAN History Matters Videos!",
         "date": "2022-05-07T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/amSfvVgDkjc/maxresdefault.jpg",
         "views": "1881"
        },
        {
         "title": "A Complete History of World War 1 in Countryballs - Reaction",
         "date": "2022-05-03T18:30:46Z",
         "thumbnail": "https://i.ytimg.com/vi/9xNZ46YUGnA/maxresdefault.jpg",
         "views": "425"
        },
        {
         "title": "The Borders of the 22nd Century? - Whatifalthist Reaction",
         "date": "2022-04-30T18:30:20Z",
         "thumbnail": "https://i.ytimg.com/vi/W_-8iB4g8sk/maxresdefault.jpg",
         "views": "3263"
        },
        {
         "title": "Canadian Reacts AGAIN to WW2 PART 2 - Oversimplified",
         "date": "2022-04-29T17:30:11Z",
         "thumbnail": "https://i.ytimg.com/vi/uqIMzxkFH0c/maxresdefault.jpg",
         "views": "3477"
        },
        {
         "title": "Canadian Reacts to WW2 - Oversimplified",
         "date": "2022-04-27T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/pA_z5sFwnVQ/maxresdefault.jpg",
         "views": "3435"
        },
        {
         "title": "Canadian Reacts to How Canada Will Fall by Whatifalthist",
         "date": "2022-04-24T18:45:00Z",
         "thumbnail": "https://i.ytimg.com/vi/j4plTWf4HMM/maxresdefault.jpg",
         "views": "5339"
        }
    ]
}