// CODED BY Spiralio
let ytVids = [];

function resetYTVids() {
    ytVids = [
        {
         "title": "Canadian Reacts to the Forgotten Prologue To WW1: Balkan Wars 1912-1913",
         "date": "2023-05-13T16:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/PslOfG2ycxw/maxresdefault.jpg",
         "views": "413"
        },
        {
         "title": "Reacting to the Voices of WW2 Leaders! VE Day Celebration!",
         "date": "2023-05-08T17:31:01Z",
         "thumbnail": "https://i.ytimg.com/vi/8ydW43dkLVY/maxresdefault.jpg",
         "views": "560"
        },
        {
         "title": "Napoleon's Retreat from Moscow 1812 - Epic History TV Reaction",
         "date": "2023-05-05T17:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/BL02k30quCc/maxresdefault.jpg",
         "views": "1181"
        },
        {
         "title": "Canadian Reacts to Geography Now! Serbia",
         "date": "2023-04-15T16:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/RzIJv1mXi6A/maxresdefault.jpg",
         "views": "796"
        },
        {
         "title": "Napoleon's Bloodiest Day: Borodino - Epic History TV Reaction",
         "date": "2023-04-13T16:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/FOOyIh87gmw/maxresdefault.jpg",
         "views": "1362"
        },
        {
         "title": "Napoleon's Invasion of Russia 1812 (It Begins...) - Epic History TV Reaction",
         "date": "2023-04-09T15:00:38Z",
         "thumbnail": "https://i.ytimg.com/vi/rvqWntJp2u4/maxresdefault.jpg",
         "views": "1596"
        },
        {
         "title": "Frederick the Great - Extra History Reaction (Parts 2-3)",
         "date": "2023-04-07T17:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/LAzO8nZ5KeA/maxresdefault.jpg",
         "views": "338"
        },
        {
         "title": "Frederick the Great - Extra History Reaction (Part 1)",
         "date": "2023-04-05T18:30:05Z",
         "thumbnail": "https://i.ytimg.com/vi/8cBsT5V2yxk/maxresdefault.jpg",
         "views": "556"
        },
        {
         "title": "Wellington Strikes: Salamanca 1812 - Epic History TV Reaction",
         "date": "2023-04-01T16:00:15Z",
         "thumbnail": "https://i.ytimg.com/vi/UUBn5R0Rpic/maxresdefault.jpg",
         "views": "858"
        },
        {
         "title": "Napoleon's Spanish Ulcer: Spain 1809 - 1811 - Epic History TV Reaction",
         "date": "2023-03-25T16:00:38Z",
         "thumbnail": "https://i.ytimg.com/vi/yfSuQLW5tzI/maxresdefault.jpg",
         "views": "1152"
        },
        {
         "title": "Napoleon's Revenge: Wagram 1809 - Epic History TV Reaction",
         "date": "2023-03-23T17:30:06Z",
         "thumbnail": "https://i.ytimg.com/vi/c9TlBGnAAQo/maxresdefault.jpg",
         "views": "864"
        },
        {
         "title": "Napoleon's First Campaign: Part 3 - Epic History TV Reaction",
         "date": "2023-03-18T17:00:34Z",
         "thumbnail": "https://i.ytimg.com/vi/nEIA9KsYaxI/maxresdefault.jpg",
         "views": "1490"
        },
        {
         "title": "How Family Structure Drives Ideology - Whatifalthist Reaction",
         "date": "2023-03-16T17:00:24Z",
         "thumbnail": "https://i.ytimg.com/vi/npWYtXrxvPE/maxresdefault.jpg",
         "views": "1370"
        },
        {
         "title": "1848: Europe's Year of Revolutions - Epic History TV Reaction",
         "date": "2023-03-14T18:00:23Z",
         "thumbnail": "https://i.ytimg.com/vi/ykza58f9NKo/maxresdefault.jpg",
         "views": "2468"
        },
        {
         "title": "Canadian Reacts to Geography Now! Ukraine",
         "date": "2023-03-10T18:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/deBMslHwrqM/maxresdefault.jpg",
         "views": "4565"
        },
        {
         "title": "Napoleon Defeated: Aspern 1809 - Epic History TV Reaction",
         "date": "2023-03-09T17:15:05Z",
         "thumbnail": "https://i.ytimg.com/vi/rjliXLm_40s/maxresdefault.jpg",
         "views": "895"
        },
        {
         "title": "Napoleon's Great Blunder: Spain 1808 - Epic History TV Reaction",
         "date": "2023-02-26T15:00:20Z",
         "thumbnail": "https://i.ytimg.com/vi/_iZuy1ad-sI/maxresdefault.jpg",
         "views": "1450"
        },
        {
         "title": "Napoleon Defeats Russia: Friedland 1807 - Epic History TV Reaction",
         "date": "2023-02-25T16:00:12Z",
         "thumbnail": "https://i.ytimg.com/vi/Enwuot7jalQ/maxresdefault.jpg",
         "views": "1342"
        },
        {
         "title": "Canadian Reacts to Geography Now! Spain",
         "date": "2023-02-24T17:00:36Z",
         "thumbnail": "https://i.ytimg.com/vi/lGGmYmVAE-w/maxresdefault.jpg",
         "views": "4550"
        },
        {
         "title": "What if Communism Never Existed - Whatifalthist Reaction",
         "date": "2023-02-21T18:15:00Z",
         "thumbnail": "https://i.ytimg.com/vi/amHlU37NAk0/maxresdefault.jpg",
         "views": "801"
        },
        {
         "title": "Canadian Reacts to What Even Is Europe? by Kraut",
         "date": "2023-02-18T16:00:35Z",
         "thumbnail": "https://i.ytimg.com/vi/yN08pjPxNZY/maxresdefault.jpg",
         "views": "4379"
        },
        {
         "title": "Napoleon Smashes Prussia: Jena 1806 - Epic History TV Reaction",
         "date": "2023-02-12T15:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/B2jWQAgwk54/maxresdefault.jpg",
         "views": "1471"
        },
        {
         "title": "Napoleon's First Victory: Siege of Toulon 1793 - Epic History TV Reaction",
         "date": "2023-02-10T17:00:39Z",
         "thumbnail": "https://i.ytimg.com/vi/qAbyDxrJwY8/maxresdefault.jpg",
         "views": "1076"
        },
        {
         "title": "Napoleon's Masterpiece: Austerlitz 1805 - Epic History TV Reaction",
         "date": "2023-02-08T17:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/BzBAIm7_HI4/maxresdefault.jpg",
         "views": "1882"
        },
        {
         "title": "The Loss of Life in WWI Visualized - RealLifeLore Reaction",
         "date": "2023-02-02T17:00:24Z",
         "thumbnail": "https://i.ytimg.com/vi/g7oOxulTBD8/maxresdefault.jpg",
         "views": "1352"
        },
        {
         "title": "WW1 Every Day With Army Sizes Reaction - Basically the Entire History of WW1 in ONE Video",
         "date": "2023-01-28T17:30:02Z",
         "thumbnail": "https://i.ytimg.com/vi/G9J44BaZ6Dg/maxresdefault.jpg",
         "views": "895"
        },
        {
         "title": "Napoleon's First Campaign Part 2: Castiglione - Epic History TV Reaction",
         "date": "2023-01-27T21:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/Lo7RgzB8glo/maxresdefault.jpg",
         "views": "2174"
        },
        {
         "title": "Napoleon's First Campaign Part 1: The Little Corporal - Epic History TV Reaction",
         "date": "2023-01-26T17:00:27Z",
         "thumbnail": "https://i.ytimg.com/vi/mnwbPwDX3vU/maxresdefault.jpg",
         "views": "2013"
        },
        {
         "title": "Which Was the WORST WW1 Army to Fight in?! - The Front Reaction",
         "date": "2023-01-23T16:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/G-YEvC3oWxY/maxresdefault.jpg",
         "views": "651"
        },
        {
         "title": "The Beginning of a Bright Future? The Last Human - Kurzgesagt Reaction",
         "date": "2023-01-20T15:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/GMc8rSzFw5I/maxresdefault.jpg",
         "views": "422"
        },
        {
         "title": "Mass Hysteria Throughout History - Sam O'Nella Reaction",
         "date": "2023-01-19T16:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/M5K1Q6xfoEk/maxresdefault.jpg",
         "views": "1225"
        },
        {
         "title": "Civilizations of the Future! - Whatifalthist Reaction",
         "date": "2022-12-31T17:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/cc2i3iohe88/maxresdefault.jpg",
         "views": "1266"
        },
        {
         "title": "Canadian Reacts to Geography Now! France",
         "date": "2022-12-29T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/3kl35mV2-Oc/maxresdefault.jpg",
         "views": "5545"
        },
        {
         "title": "World War 1 - 1918 - Epic History TV History Fan Reaction",
         "date": "2022-12-24T22:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/QQaHkPmLZ5o/maxresdefault.jpg",
         "views": "1370"
        },
        {
         "title": "World War 1 - 1917 - Epic History TV History Fan Reaction",
         "date": "2022-12-22T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-Vpewj_S-r4/maxresdefault.jpg",
         "views": "1139"
        },
        {
         "title": "World War 1 - 1916 - Epic History TV History Fan Reaction",
         "date": "2022-12-20T18:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/twf2Nannnog/maxresdefault.jpg",
         "views": "1382"
        },
        {
         "title": "World War 1 - 1915 - Epic History TV History Fan Reaction",
         "date": "2022-12-10T15:00:33Z",
         "thumbnail": "https://i.ytimg.com/vi/k37FiDXmFY8/maxresdefault.jpg",
         "views": "1631"
        },
        {
         "title": "World War 1 - 1914 - Epic History TV History Fan Reaction",
         "date": "2022-12-08T17:00:29Z",
         "thumbnail": "https://i.ytimg.com/vi/TA4ThgneR3Y/maxresdefault.jpg",
         "views": "2602"
        },
        {
         "title": "History Fan Reacts to FRENCH History Matters Videos!",
         "date": "2022-12-03T16:30:05Z",
         "thumbnail": "https://i.ytimg.com/vi/T-yZTxLFQ0U/maxresdefault.jpg",
         "views": "1871"
        },
        {
         "title": "How France Was Defeated By Germany! - Armchair Historian Reaction",
         "date": "2022-12-02T17:00:23Z",
         "thumbnail": "https://i.ytimg.com/vi/OV6LnQU52qk/maxresdefault.jpg",
         "views": "1161"
        },
        {
         "title": "What if Napoleon Never Rose To Power? - AlternateHistoryHub Reaction",
         "date": "2022-11-23T17:00:16Z",
         "thumbnail": "https://i.ytimg.com/vi/Nd1Awe6GYbQ/maxresdefault.jpg",
         "views": "751"
        },
        {
         "title": "History Fan Reacts to The Napoleonic Wars - Oversimplified (Part 2)",
         "date": "2022-11-20T15:00:28Z",
         "thumbnail": "https://i.ytimg.com/vi/sUGqXhVyUcI/maxresdefault.jpg",
         "views": "2977"
        },
        {
         "title": "History Fan Reacts to The Napoleonic Wars - Oversimplified (Part 1)",
         "date": "2022-11-18T15:00:19Z",
         "thumbnail": "https://i.ytimg.com/vi/WmNVG5uZPUI/maxresdefault.jpg",
         "views": "3512"
        },
        {
         "title": "History Fan Reacts to The French Revolution - Oversimplified (Part 2)",
         "date": "2022-11-12T15:00:23Z",
         "thumbnail": "https://i.ytimg.com/vi/bUmCyiSBlOo/maxresdefault.jpg",
         "views": "2023"
        },
        {
         "title": "History Fan Reacts to The French Revolution - Oversimplified (Part 1)",
         "date": "2022-11-11T16:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/Ou2L91bXeBM/maxresdefault.jpg",
         "views": "2128"
        },
        {
         "title": "World War...Zero? - The Seven Years' War - Feature History Reaction",
         "date": "2022-11-09T19:49:57Z",
         "thumbnail": "https://i.ytimg.com/vi/y0auEuyhgHU/maxresdefault.jpg",
         "views": "864"
        },
        {
         "title": "The Hundreds Years' War (France's Most Important Conflict) - History Matters Reaction",
         "date": "2022-11-05T14:00:29Z",
         "thumbnail": "https://i.ytimg.com/vi/VW-ZNddM-HA/maxresdefault.jpg",
         "views": "969"
        },
        {
         "title": "Why Do Catholics &amp; Protestants Dislike Each Other? - History Matters Reaction",
         "date": "2022-11-04T17:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/_8H0g9y1OdM/maxresdefault.jpg",
         "views": "784"
        },
        {
         "title": "Frances Greatest Leader? Charlemagne - HistoryMarche Reaction",
         "date": "2022-11-03T16:00:36Z",
         "thumbnail": "https://i.ytimg.com/vi/oyMm5v5e7pA/maxresdefault.jpg",
         "views": "901"
        },
        {
         "title": "The ENTIRE! History of France! - WonderWhy Reaction",
         "date": "2022-10-30T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/3bvqDNKamlo/maxresdefault.jpg",
         "views": "4576"
        },
        {
         "title": "Who Will Win Americas Next Civil War? - Whatifalthist Reaction",
         "date": "2022-10-27T18:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/l0MpS8MrI2Y/maxresdefault.jpg",
         "views": "1564"
        },
        {
         "title": "Canadian Test His Russian History Knowledge - What Do You Know About Russia?",
         "date": "2022-10-24T18:45:00Z",
         "thumbnail": "https://i.ytimg.com/vi/P3XARd9sP-Q/maxresdefault.jpg",
         "views": "736"
        },
        {
         "title": "Canadian Reacts to Geography Now! Russia",
         "date": "2022-10-23T14:30:20Z",
         "thumbnail": "https://i.ytimg.com/vi/tm6odLgpmjM/maxresdefault.jpg",
         "views": "4711"
        },
        {
         "title": "Fight for the Revolution! | The Russian Civil War 1918-1922 | CallMeEzekiel Reaction",
         "date": "2022-10-20T18:30:23Z",
         "thumbnail": "https://i.ytimg.com/vi/QmFnCHVIryA/maxresdefault.jpg",
         "views": "2337"
        },
        {
         "title": "Canadian Reacts to Russian Revolution - Oversimplified (Part 2!)",
         "date": "2022-10-18T18:30:11Z",
         "thumbnail": "https://i.ytimg.com/vi/JjGQGrnlyN0/maxresdefault.jpg",
         "views": "2341"
        },
        {
         "title": "Canadian Reacts to Russian Revolution - Oversimplified (Part 1!)",
         "date": "2022-10-16T14:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ahmyGkxMAYo/maxresdefault.jpg",
         "views": "3486"
        },
        {
         "title": "Heroes or Villains? - The Decembrists (Part 2!) - Epic History TV Reaction",
         "date": "2022-10-13T18:30:03Z",
         "thumbnail": "https://i.ytimg.com/vi/0s2qfD4_qIE/maxresdefault.jpg",
         "views": "1314"
        },
        {
         "title": "Russia's (FIRST?!) Revolution? - The Decembrists (Part 1!) - Epic History TV Reaction",
         "date": "2022-10-11T18:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/MMPMJaZztcg/maxresdefault.jpg",
         "views": "1865"
        },
        {
         "title": "Great Northern War (Parts 3-5!) - Extra Credits Reaction",
         "date": "2022-10-09T14:00:27Z",
         "thumbnail": "https://i.ytimg.com/vi/iEDB55SHVOk/maxresdefault.jpg",
         "views": "1026"
        },
        {
         "title": "When Sweden Fought Russia, Poland &amp; Denmark - Great Northern War (Parts 1-2) Extra Credits Reaction",
         "date": "2022-10-08T14:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/NADwh5zjPko/maxresdefault.jpg",
         "views": "1641"
        },
        {
         "title": "The History of Russia - Epic History TV Reaction (Part 2!)",
         "date": "2022-09-30T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/2pII8zDvg_o/maxresdefault.jpg",
         "views": "3654"
        },
        {
         "title": "The History of Russia - Epic History TV Reaction (Part 1!)",
         "date": "2022-09-28T16:00:25Z",
         "thumbnail": "https://i.ytimg.com/vi/LP-nwP6iqGw/maxresdefault.jpg",
         "views": "4396"
        },
        {
         "title": "Does Italian History Repeat? - History Matters Reaction",
         "date": "2022-09-26T15:00:27Z",
         "thumbnail": "https://i.ytimg.com/vi/Sum93tRgewk/maxresdefault.jpg",
         "views": "1419"
        },
        {
         "title": "The Video That Changed Everything For Me. J.J. McCullough Reaction",
         "date": "2022-09-24T15:00:18Z",
         "thumbnail": "https://i.ytimg.com/vi/UWKlZoyfMhE/maxresdefault.jpg",
         "views": "2865"
        },
        {
         "title": "No Food. No Future. Shopping in the Soviet Union - The Cold War Reaction",
         "date": "2022-09-22T18:00:18Z",
         "thumbnail": "https://i.ytimg.com/vi/x4o5n5bJ0f0/maxresdefault.jpg",
         "views": "566"
        },
        {
         "title": "The Day Russian Democracy Died (Russia's FINAL Chance?) by NFKRZ Reaction",
         "date": "2022-09-16T16:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/xFuhP5FtSf8/maxresdefault.jpg",
         "views": "3721"
        },
        {
         "title": "Russia was ALWAYS Doomed - The Origins of Russian Authoritarianism Reaction",
         "date": "2022-09-14T18:30:37Z",
         "thumbnail": "https://i.ytimg.com/vi/fPxy-GCPaIU/maxresdefault.jpg",
         "views": "3564"
        },
        {
         "title": "Canadian Reacts to Geography Now! Sweden (Swedish ELECTION 2022 Special!)",
         "date": "2022-09-10T15:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/_0FGNkL8O-U/maxresdefault.jpg",
         "views": "5859"
        },
        {
         "title": "Canadian Reacts to Prohibition by Oversimplified",
         "date": "2022-09-09T15:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/d-PFyxDS8AI/maxresdefault.jpg",
         "views": "2913"
        },
        {
         "title": "How the Internet Will Completely Change the World - Whatifalthist Reaction",
         "date": "2022-09-07T18:30:36Z",
         "thumbnail": "https://i.ytimg.com/vi/dz1SDsE0fH4/maxresdefault.jpg",
         "views": "1937"
        },
        {
         "title": "Canadian Reacts to The First Punic War - Oversimplified (Part 2)",
         "date": "2022-09-04T11:31:30Z",
         "thumbnail": "https://i.ytimg.com/vi/HhDvQLEI-5Y/maxresdefault.jpg",
         "views": "6645"
        },
        {
         "title": "Canadian Reacts to The First Punic War - Oversimplified (Part 1)",
         "date": "2022-09-03T11:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/ohXJXkfvFKs/maxresdefault.jpg",
         "views": "10406"
        },
        {
         "title": "Canadian Reacts to The Dumbest Russian Voyage Nobody Talks About by BlueJay",
         "date": "2022-08-29T18:30:25Z",
         "thumbnail": "https://i.ytimg.com/vi/_3tlgP-ziRY/maxresdefault.jpg",
         "views": "7447"
        },
        {
         "title": "The Election That RUINED Everything? (Was it Really That Bad?) AlternateHistoryHub Reaction",
         "date": "2022-08-27T15:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/Oi2_dF9wxUw/maxresdefault.jpg",
         "views": "1318"
        },
        {
         "title": "Canadian Reacts to Geography Now! Germany",
         "date": "2022-08-25T16:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/PgmSSRX68BI/maxresdefault.jpg",
         "views": "3461"
        },
        {
         "title": "Canadian Reacts to History of the Entire World, I Guess by Bill Wurtz",
         "date": "2022-08-24T15:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/T2_FXdwrnhg/maxresdefault.jpg",
         "views": "2143"
        },
        {
         "title": "Why was the USSR So Terrible? History Matters Reaction",
         "date": "2022-08-13T15:00:44Z",
         "thumbnail": "https://i.ytimg.com/vi/zZNLEjOGFHI/maxresdefault.jpg",
         "views": "1930"
        },
        {
         "title": "WHY was Germany SO EFFECTIVE in WW2?! Knowledgia Reaction",
         "date": "2022-08-12T16:36:02Z",
         "thumbnail": "https://i.ytimg.com/vi/oVurN6aJEEU/maxresdefault.jpg",
         "views": "571"
        },
        {
         "title": "Canadian Reacts to How Canada Could End by J.J. McCullough",
         "date": "2022-08-09T15:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/4o3x8OMVbCI/maxresdefault.jpg",
         "views": "1794"
        },
        {
         "title": "Canadian Reacts to The Pig War by Oversimplified (Part 2)",
         "date": "2022-07-26T17:30:31Z",
         "thumbnail": "https://i.ytimg.com/vi/6q-i_OMVSlc/maxresdefault.jpg",
         "views": "4170"
        },
        {
         "title": "Canadian Reacts to The Pig War by Oversimplified (Part 1)",
         "date": "2022-07-24T18:30:40Z",
         "thumbnail": "https://i.ytimg.com/vi/bnoH4Dym--A/maxresdefault.jpg",
         "views": "4922"
        },
        {
         "title": "Canadian Reacts to History of the United States, I guess",
         "date": "2022-07-17T19:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/qMMF8nCoH4g/maxresdefault.jpg",
         "views": "1845"
        },
        {
         "title": "What Happened to German Soldiers AFTER! WW2? - Armchair Historian Reaction",
         "date": "2022-07-13T17:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/q_HEPRSQxgc/maxresdefault.jpg",
         "views": "1463"
        },
        {
         "title": "Will Our World and Age COLLAPSE?! Very Soon? (Not Quite) - Whatifalthist Reaction",
         "date": "2022-07-09T18:37:15Z",
         "thumbnail": "https://i.ytimg.com/vi/7SDHpWxAzJ4/maxresdefault.jpg",
         "views": "1334"
        },
        {
         "title": "Is Europe Better Because of the EU? History of the EU - Geo History Reaction",
         "date": "2022-07-07T17:15:02Z",
         "thumbnail": "https://i.ytimg.com/vi/xAt7oWnvqY0/maxresdefault.jpg",
         "views": "1561"
        },
        {
         "title": "The Future (COLLAPSE?) of Europe?! Whatifalthist Reaction",
         "date": "2022-07-02T15:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/D8HBfly62nA/maxresdefault.jpg",
         "views": "4144"
        },
        {
         "title": "Canadian Debunks 50 \"Facts\" About Canada",
         "date": "2022-07-01T16:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2JIathzCfBc/maxresdefault.jpg",
         "views": "359"
        },
        {
         "title": "Why is the World Crazy Now? Whatifalthist Reaction",
         "date": "2022-06-30T16:30:14Z",
         "thumbnail": "https://i.ytimg.com/vi/spWsV_-Nr9U/maxresdefault.jpg",
         "views": "2447"
        },
        {
         "title": "Canadian Reacts to Geography Now! Canada",
         "date": "2022-06-25T16:45:03Z",
         "thumbnail": "https://i.ytimg.com/vi/XObFnszDdEI/maxresdefault.jpg",
         "views": "2011"
        },
        {
         "title": "The WW2 Battle Fought In...America? Simple History Reaction",
         "date": "2022-06-21T18:30:30Z",
         "thumbnail": "https://i.ytimg.com/vi/Kd8PizaEFJA/maxresdefault.jpg",
         "views": "582"
        },
        {
         "title": "Canadian Reacts to The Fallen of World War II",
         "date": "2022-06-19T15:05:01Z",
         "thumbnail": "https://i.ytimg.com/vi/sdzksWUj39E/maxresdefault.jpg",
         "views": "9221"
        },
        {
         "title": "Canadian Reacts to The Cold War - OverSimplified (Part 2)",
         "date": "2022-06-17T14:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/Gb-DgH4kmjU/maxresdefault.jpg",
         "views": "2042"
        },
        {
         "title": "Canadian Reacts to The Cold War - OverSimplified (Part 1)",
         "date": "2022-06-14T17:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0cdtfeVNku8/maxresdefault.jpg",
         "views": "2862"
        },
        {
         "title": "FDR's Plan To Divide Germany (Was it a Better Plan?!) - Whatifalthist Reaction",
         "date": "2022-06-12T15:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/ihmXM7YptcY/maxresdefault.jpg",
         "views": "1145"
        },
        {
         "title": "What if Germany Had Been Split Differently After WWII - AlternateHistoryHub Reaction",
         "date": "2022-06-11T15:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/24eMQVWVobo/maxresdefault.jpg",
         "views": "1866"
        },
        {
         "title": "How Did This Happen?! HOW did Germany Get So Strong After WW1? - Armchair Historian Reaction",
         "date": "2022-06-09T18:30:38Z",
         "thumbnail": "https://i.ytimg.com/vi/i7GyEv7pWiM/maxresdefault.jpg",
         "views": "640"
        },
        {
         "title": "Wars of the 2020s and 30s by Whatifalthist Reaction",
         "date": "2022-06-07T18:45:01Z",
         "thumbnail": "https://i.ytimg.com/vi/RzWdRNP_cHU/maxresdefault.jpg",
         "views": "2776"
        },
        {
         "title": "Canadian Reacts to AlternateHistoryHub's OTHER CANADA TALES!",
         "date": "2022-06-05T14:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/oS5Np5akTHU/maxresdefault.jpg",
         "views": "1345"
        },
        {
         "title": "(A Terrifying World) What if Germany WON World War 2? PART 4 - AlternateHistoryHub Reaction",
         "date": "2022-06-02T18:30:12Z",
         "thumbnail": "https://i.ytimg.com/vi/GY8hahVvJRs/maxresdefault.jpg",
         "views": "631"
        },
        {
         "title": "(No Coming Back?) WHAT IF Germany WON World War 2?! PART 3 - AlternateHistoryHub Reaction",
         "date": "2022-05-31T18:30:05Z",
         "thumbnail": "https://i.ytimg.com/vi/6HvGx4nCTJU/maxresdefault.jpg",
         "views": "762"
        },
        {
         "title": "What if Germany WON WW2?! (Does it Get Worse or Better?) Part 2- AlternateHistoryHub Reaction",
         "date": "2022-05-29T14:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/avoKdQ59B7I/maxresdefault.jpg",
         "views": "896"
        },
        {
         "title": "What if Germany WON WW2?! (End of the World?) - AlternateHistoryHub Reaction",
         "date": "2022-05-28T16:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/DPKGDfgyGK8/maxresdefault.jpg",
         "views": "1578"
        },
        {
         "title": "A Study of Decadence (The Fall of the West?) - Whatifalthist Reaction",
         "date": "2022-05-24T18:00:24Z",
         "thumbnail": "https://i.ytimg.com/vi/tTHkm02OSJw/maxresdefault.jpg",
         "views": "3788"
        },
        {
         "title": "Take HIM (You Know Who I Mean) OUT! - The Infographics Show Reaction",
         "date": "2022-05-23T18:30:09Z",
         "thumbnail": "https://i.ytimg.com/vi/BC9ruB0gRnI/maxresdefault.jpg",
         "views": "338"
        },
        {
         "title": "Nazis on...Drugs? Nazis on Crystal Meth - World War Two Reaction",
         "date": "2022-05-20T18:30:21Z",
         "thumbnail": "https://i.ytimg.com/vi/GxhFDbFdKq4/maxresdefault.jpg",
         "views": "751"
        },
        {
         "title": "Germany Could Not Win WW2 Reaction (Sorry HoI4 Players) PART 2 - Potential History",
         "date": "2022-05-17T19:15:00Z",
         "thumbnail": "https://i.ytimg.com/vi/U47kv7qEumM/maxresdefault.jpg",
         "views": "2507"
        },
        {
         "title": "Germany Could Not Win WW2 Reaction (No Matter What) PART 1 - Potential History",
         "date": "2022-05-16T18:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/14MEQwxHPE8/maxresdefault.jpg",
         "views": "3511"
        },
        {
         "title": "WW2 Every Day With Army Sizes Reaction - Basically the Entire History of WW2 in ONE Video",
         "date": "2022-05-14T18:00:14Z",
         "thumbnail": "https://i.ytimg.com/vi/QaKotHo96GU/maxresdefault.jpg",
         "views": "5987"
        },
        {
         "title": "Oversimplified Hitler Reaction PART 2!",
         "date": "2022-05-13T18:30:08Z",
         "thumbnail": "https://i.ytimg.com/vi/DAh0tbstJRI/maxresdefault.jpg",
         "views": "1579"
        },
        {
         "title": "The BANNED, INFAMOUS Oversimplified Video! Hitler (Part 1) Reaction",
         "date": "2022-05-11T18:30:32Z",
         "thumbnail": "https://i.ytimg.com/vi/QJe_JuTjW8Q/maxresdefault.jpg",
         "views": "2832"
        },
        {
         "title": "Is WW3 REALLY About To Start? (Probably Not) - Whatifalthist Reaction Video",
         "date": "2022-05-09T19:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/h9bUI29WgJQ/maxresdefault.jpg",
         "views": "2892"
        },
        {
         "title": "Canadian Reacts to CANADIAN History Matters Videos!",
         "date": "2022-05-07T16:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/amSfvVgDkjc/maxresdefault.jpg",
         "views": "3029"
        },
        {
         "title": "A Complete History of World War 1 in Countryballs - Reaction",
         "date": "2022-05-03T18:30:46Z",
         "thumbnail": "https://i.ytimg.com/vi/9xNZ46YUGnA/maxresdefault.jpg",
         "views": "771"
        },
        {
         "title": "The Borders of the 22nd Century? - Whatifalthist Reaction",
         "date": "2022-04-30T18:30:20Z",
         "thumbnail": "https://i.ytimg.com/vi/W_-8iB4g8sk/maxresdefault.jpg",
         "views": "4345"
        },
        {
         "title": "Canadian Reacts AGAIN to WW2 PART 2 - Oversimplified",
         "date": "2022-04-29T17:30:11Z",
         "thumbnail": "https://i.ytimg.com/vi/uqIMzxkFH0c/maxresdefault.jpg",
         "views": "4456"
        },
        {
         "title": "FIRST TIME WATCHING OVERSIMPLIFIED - History Fan Reacts to WW2 - Oversimplified",
         "date": "2022-04-27T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/pA_z5sFwnVQ/maxresdefault.jpg",
         "views": "4833"
        },
        {
         "title": "Canadian Reacts to How Canada Will Fall",
         "date": "2022-04-24T18:45:00Z",
         "thumbnail": "https://i.ytimg.com/vi/j4plTWf4HMM/maxresdefault.jpg",
         "views": "6661"
        }
    ]
}