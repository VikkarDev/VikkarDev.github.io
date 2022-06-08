let ytVids = [];

function resetYTVids() {
    ytVids = [
        {
         "title": "Wars of the 2020s and 30s by Whatifalthist Reaction",
         "date": "2022-06-07T18:45:01Z",
         "thumbnail": "https://i.ytimg.com/vi/RzWdRNP_cHU/hqdefault.jpg",
         "views": "463"
        },
        {
         "title": "Canadian Reacts to AlternateHistoryHub's OTHER CANADA TALES!",
         "date": "2022-06-05T14:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/oS5Np5akTHU/maxresdefault.jpg",
         "views": "240"
        },
        {
         "title": "The Worst History Video on YouTube  - American Eye Reaction",
         "date": "2022-06-04T15:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/Bke-CmkD9f8/maxresdefault.jpg",
         "views": "137"
        },
        {
         "title": "(A Terrifying World) What if Germany WON World War 2? PART 4 - AlternateHistoryHub Reaction",
         "date": "2022-06-02T18:30:12Z",
         "thumbnail": "https://i.ytimg.com/vi/GY8hahVvJRs/hqdefault.jpg",
         "views": "258"
        },
        {
         "title": "(No Coming Back?) WHAT IF Germany WON World War 2?! PART 3 - AlternateHistoryHub Reaction",
         "date": "2022-05-31T18:30:05Z",
         "thumbnail": "https://i.ytimg.com/vi/6HvGx4nCTJU/maxresdefault.jpg",
         "views": "367"
        },
        {
         "title": "What if Germany WON WW2?! (Does it Get Worse or Better?) Part 2- AlternateHistoryHub Reaction",
         "date": "2022-05-29T14:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/avoKdQ59B7I/maxresdefault.jpg",
         "views": "412"
        },
        {
         "title": "What if Germany WON WW2?! (End of the World?) - AlternateHistoryHub Reaction",
         "date": "2022-05-28T16:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/DPKGDfgyGK8/maxresdefault.jpg",
         "views": "655"
        },
        {
         "title": "A Study of Decadence (The Fall of the West?) - Whatifalthist Reaction",
         "date": "2022-05-24T18:00:24Z",
         "thumbnail": "https://i.ytimg.com/vi/tTHkm02OSJw/hqdefault.jpg",
         "views": "1450"
        },
        {
         "title": "Take HIM (You Know Who I Mean) OUT! - The Infographics Show Reaction",
         "date": "2022-05-23T18:30:09Z",
         "thumbnail": "https://i.ytimg.com/vi/BC9ruB0gRnI/maxresdefault.jpg",
         "views": "234"
        },
        {
         "title": "Nazis on...Drugs? Nazis on Crystal Meth - World War Two Reaction",
         "date": "2022-05-20T18:30:21Z",
         "thumbnail": "https://i.ytimg.com/vi/GxhFDbFdKq4/hqdefault.jpg",
         "views": "459"
        },
        {
         "title": "Germany Could Not Win WW2 Reaction (Sorry HoI4 Players) PART 2 - Potential History",
         "date": "2022-05-17T19:15:00Z",
         "thumbnail": "https://i.ytimg.com/vi/U47kv7qEumM/maxresdefault.jpg",
         "views": "820"
        },
        {
         "title": "Germany Could Not Win WW2 Reaction (No Matter What) PART 1 - Potential History",
         "date": "2022-05-16T18:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/14MEQwxHPE8/maxresdefault.jpg",
         "views": "1101"
        },
        {
         "title": "WW2 Every Day With Army Sizes Reaction - Basically the Entire History of WW2 in ONE Video",
         "date": "2022-05-14T18:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/QaKotHo96GU/maxresdefault.jpg",
         "views": "2426"
        },
        {
         "title": "Oversimplified Hitler Reaction PART 2!",
         "date": "2022-05-13T18:30:08Z",
         "thumbnail": "https://i.ytimg.com/vi/DAh0tbstJRI/maxresdefault.jpg",
         "views": "776"
        },
        {
         "title": "The BANNED, INFAMOUS Oversimplified Video! Hitler (Part 1) Reaction",
         "date": "2022-05-11T18:30:32Z",
         "thumbnail": "https://i.ytimg.com/vi/QJe_JuTjW8Q/maxresdefault.jpg",
         "views": "1521"
        },
        {
         "title": "Is WW3 REALLY About To Start? (Probably Not) - Whatifalthist Reaction Video",
         "date": "2022-05-09T19:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/h9bUI29WgJQ/hqdefault.jpg",
         "views": "1953"
        },
        {
         "title": "Canadian Reacts to CANADIAN History Matters Videos!",
         "date": "2022-05-07T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/amSfvVgDkjc/maxresdefault.jpg",
         "views": "896"
        },
        {
         "title": "A Complete History of World War 1 in Countryballs - Reaction",
         "date": "2022-05-03T18:30:46Z",
         "thumbnail": "https://i.ytimg.com/vi/9xNZ46YUGnA/maxresdefault.jpg",
         "views": "296"
        },
        {
         "title": "The Borders of the 22nd Century? - Whatifalthist Reaction",
         "date": "2022-04-30T18:30:20Z",
         "thumbnail": "https://i.ytimg.com/vi/W_-8iB4g8sk/maxresdefault.jpg",
         "views": "2077"
        },
        {
         "title": "Canadian Reacts AGAIN to WW2 PART 2 - Oversimplified",
         "date": "2022-04-29T17:30:11Z",
         "thumbnail": "https://i.ytimg.com/vi/uqIMzxkFH0c/maxresdefault.jpg",
         "views": "2727"
        },
        {
         "title": "Canadian Reacts to WW2 - Oversimplified",
         "date": "2022-04-27T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/pA_z5sFwnVQ/maxresdefault.jpg",
         "views": "2392"
        },
        {
         "title": "Canadian Reacts to How Canada Will Fall by Whatifalthist",
         "date": "2022-04-24T18:45:00Z",
         "thumbnail": "https://i.ytimg.com/vi/j4plTWf4HMM/maxresdefault.jpg",
         "views": "3711"
        },
        {
         "title": "When the Historical Horst Game Lasts Past 1944...",
         "date": "2022-03-23T18:00:17Z",
         "thumbnail": "https://i.ytimg.com/vi/ptfRtJ9DqEQ/maxresdefault.jpg",
         "views": "228"
        },
        {
         "title": "FUNNIEST RP Game Ever? ROLEPLAY as Sweden!",
         "date": "2022-01-23T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/AfbOel3jpbY/maxresdefault.jpg",
         "views": "155"
        },
        {
         "title": "When Russia has to save the Allies...again | WINNING as AC CANADA",
         "date": "2022-01-19T18:31:17Z",
         "thumbnail": "https://i.ytimg.com/vi/xbkhyCgLyYo/hqdefault.jpg",
         "views": "134"
        },
        {
         "title": "LOSING AS AC HUNGARY ft. SeeMops",
         "date": "2022-01-03T22:15:31Z",
         "thumbnail": "https://i.ytimg.com/vi/hizoEavk8wo/maxresdefault.jpg",
         "views": "168"
        },
        {
         "title": "SO I 1v1'd MY STREAM",
         "date": "2021-11-15T19:00:15Z",
         "thumbnail": "https://i.ytimg.com/vi/wzMf77ROUYc/maxresdefault.jpg",
         "views": "159"
        },
        {
         "title": "MORE WORLD CONQUESTS? - VideoLife Reacts to No Step Back Achievements",
         "date": "2021-11-11T18:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/9WwUEe61K74/hqdefault.jpg",
         "views": "243"
        }
    ]
}