let ytVids = [];

function resetYTVids() {
    ytVids = [
        {
         "title": "I Annexed Denmark 3 TIMES Then NUKED Them",
         "date": "2022-09-01T13:01:08Z",
         "thumbnail": "https://i.ytimg.com/vi/tf5HulEV0TM/maxresdefault.jpg",
         "views": "65434"
        },
        {
         "title": "THIS Just Doesn't Work!*",
         "date": "2022-08-20T11:00:44Z",
         "thumbnail": "https://i.ytimg.com/vi/Nb7O0xm0hUU/maxresdefault.jpg",
         "views": "112550"
        },
        {
         "title": "The Path NO ONE Takes As FRANCE 🏳️",
         "date": "2022-08-06T11:04:36Z",
         "thumbnail": "https://i.ytimg.com/vi/8eTAb_bzgB8/maxresdefault.jpg",
         "views": "168502"
        },
        {
         "title": "Debug Mode On IRONMAN??? ACHIEVEMENTS Are Now BROKEN!",
         "date": "2022-07-31T12:05:55Z",
         "thumbnail": "https://i.ytimg.com/vi/SHZM8bk6CAU/maxresdefault.jpg",
         "views": "125503"
        },
        {
         "title": "Can You Go Through The Maginot Line? - DLC BREAKS FORTS",
         "date": "2022-07-30T12:34:39Z",
         "thumbnail": "https://i.ytimg.com/vi/y1nJpGN6yIo/maxresdefault.jpg",
         "views": "196792"
        },
        {
         "title": "The Biggest Exploit EVER!",
         "date": "2022-07-14T12:55:33Z",
         "thumbnail": "https://i.ytimg.com/vi/WB2LNaJy9wI/maxresdefault.jpg",
         "views": "269738"
        },
        {
         "title": "BASED OR CURSED?",
         "date": "2022-07-09T11:20:34Z",
         "thumbnail": "https://i.ytimg.com/vi/gTGeA4c1R5g/maxresdefault.jpg",
         "views": "196219"
        },
        {
         "title": "Hearts of Iron 4 - Volunteer ONLY Challenge",
         "date": "2022-07-05T12:25:25Z",
         "thumbnail": "https://i.ytimg.com/vi/DfJpMpst1-A/maxresdefault.jpg",
         "views": "138013"
        },
        {
         "title": "WHY Has No One Played This Country!",
         "date": "2022-06-29T13:11:05Z",
         "thumbnail": "https://i.ytimg.com/vi/eE250CMF4Tc/maxresdefault.jpg",
         "views": "178350"
        },
        {
         "title": "The Path NO ONE Takes As Germany",
         "date": "2022-06-15T14:18:26Z",
         "thumbnail": "https://i.ytimg.com/vi/EmWHznV5Kpk/maxresdefault.jpg",
         "views": "628278"
        },
        {
         "title": "WHAT STRUGGLE? I Broke it - Crusader Kings 3 Fate of Iberia",
         "date": "2022-06-11T11:42:16Z",
         "thumbnail": "https://i.ytimg.com/vi/AP5lSsgWTZE/maxresdefault.jpg",
         "views": "45138"
        },
        {
         "title": "SPAM BUILD THESE! - Crossfire: Legion",
         "date": "2022-06-02T14:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/s8mBdemWKeI/maxresdefault.jpg",
         "views": "13850"
        },
        {
         "title": "New Exploit? AND It WILL 100% Get Patched - HOI4 USA",
         "date": "2022-05-18T13:43:37Z",
         "thumbnail": "https://i.ytimg.com/vi/EOceUQtxAno/maxresdefault.jpg",
         "views": "142875"
        },
        {
         "title": "50 Player USA BATTLE ROYALE! - Hearts of iron 4 Multiplayer ft. @TommyKay @discardpixel",
         "date": "2022-05-10T14:00:17Z",
         "thumbnail": "https://i.ytimg.com/vi/RXfRYMpCDoQ/maxresdefault.jpg",
         "views": "247301"
        },
        {
         "title": "HUGE CHAD Breaks Dune: Spice Wars - CONQUEST VICTORY",
         "date": "2022-04-29T15:44:37Z",
         "thumbnail": "https://i.ytimg.com/vi/zO9ahoyS4vc/maxresdefault.jpg",
         "views": "48633"
        },
        {
         "title": "Has THIS Meta Gone too Far? - Can Greece Stop WW2?",
         "date": "2022-04-17T12:59:31Z",
         "thumbnail": "https://i.ytimg.com/vi/zHyuoEzwMig/maxresdefault.jpg",
         "views": "381639"
        },
        {
         "title": "You've Been Playing CK3 Wrong Until Now. TRY THIS 2/2",
         "date": "2022-04-13T15:03:58Z",
         "thumbnail": "https://i.ytimg.com/vi/H-W_C0SiZnk/maxresdefault.jpg",
         "views": "53344"
        },
        {
         "title": "You've Been Playing Crusader Kings 3 ALL WRONG 1/2",
         "date": "2022-04-06T14:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/AnBiREuGxxE/maxresdefault.jpg",
         "views": "151672"
        },
        {
         "title": "Use ALL THE METAS To Form Austria-Hungary As Czechoslovakia",
         "date": "2022-03-27T11:14:42Z",
         "thumbnail": "https://i.ytimg.com/vi/MxxsyMDLuLM/maxresdefault.jpg",
         "views": "369368"
        },
        {
         "title": "New Tank META Changes EVERYTHING! 😱",
         "date": "2022-03-15T13:40:38Z",
         "thumbnail": "https://i.ytimg.com/vi/1J_WwHlnbJg/maxresdefault.jpg",
         "views": "225485"
        },
        {
         "title": "NOBODY is Talking About This Mod - Hearts of Iron 4 Ukraine Kaiserreich",
         "date": "2022-03-08T13:25:13Z",
         "thumbnail": "https://i.ytimg.com/vi/WpoYTerm8RI/maxresdefault.jpg",
         "views": "300756"
        },
        {
         "title": "The Path No One Chooses For CHINA - UNIFY Peacefully 😩",
         "date": "2022-02-27T12:19:34Z",
         "thumbnail": "https://i.ytimg.com/vi/Iaj6c0dnIy4/maxresdefault.jpg",
         "views": "513634"
        },
        {
         "title": "PROOF CAS Spam Is META - Every Single Click hoi4 Germany",
         "date": "2022-02-18T15:07:32Z",
         "thumbnail": "https://i.ytimg.com/vi/Aibfo5tQJ28/maxresdefault.jpg",
         "views": "189470"
        },
        {
         "title": "THIS Will Change How You Play CK3 FOREVER -  Crusader Kings 3 Royal Court",
         "date": "2022-02-12T13:42:11Z",
         "thumbnail": "https://i.ytimg.com/vi/jMeBR3P5Upk/maxresdefault.jpg",
         "views": "115622"
        },
        {
         "title": "10 Width and CAS Is Unplayable - Every Single Click hoi4 Germany",
         "date": "2022-02-09T16:39:00Z",
         "thumbnail": "https://i.ytimg.com/vi/AYrgdpFcYn0/maxresdefault.jpg",
         "views": "252865"
        },
        {
         "title": "ROYAL COURT Lets You Create Interesting Cultures -  Crusader Kings 3 Royal Court",
         "date": "2022-02-08T00:59:12Z",
         "thumbnail": "https://i.ytimg.com/vi/B1CeY2HtzXA/maxresdefault.jpg",
         "views": "130855"
        },
        {
         "title": "The META TANK Design + UNLIMITED XP AGAIN - HOI4 No Step Back",
         "date": "2022-02-02T12:58:50Z",
         "thumbnail": "https://i.ytimg.com/vi/LfB5CdiEWyk/maxresdefault.jpg",
         "views": "235015"
        },
        {
         "title": "LOGISTICS STRIKES Is A Game CHANGER! - HOI4 No Step Back",
         "date": "2022-01-27T13:23:20Z",
         "thumbnail": "https://i.ytimg.com/vi/icijV2ka8RA/maxresdefault.jpg",
         "views": "290044"
        },
        {
         "title": "UNLIMITED NAVAL PRODUCTION - This Exploit Has Been Around FOR OVER A YEAR!",
         "date": "2022-01-18T14:38:14Z",
         "thumbnail": "https://i.ytimg.com/vi/G3PqwePpzWQ/maxresdefault.jpg",
         "views": "342331"
        },
        {
         "title": "No Step Back DLC BREAKS USA  - TANK ONLY",
         "date": "2022-01-15T16:07:09Z",
         "thumbnail": "https://i.ytimg.com/vi/p6qvzVjGm78/maxresdefault.jpg",
         "views": "648931"
        },
        {
         "title": "THIS EXPLOIT Was So BAD They Patched It THE NEXT DAY! FT. grishaputin - Age of Empires 4 Aoe4",
         "date": "2021-12-23T14:19:15Z",
         "thumbnail": "https://i.ytimg.com/vi/GeUqxpsKyg0/maxresdefault.jpg",
         "views": "32083"
        },
        {
         "title": "Which is most BROKEN? TALL Vs WIDE Guide FT. @Ludi et Historia - EU4 Europa Universalis 4",
         "date": "2021-12-11T15:39:25Z",
         "thumbnail": "https://i.ytimg.com/vi/Ag4gtynTqqk/maxresdefault.jpg",
         "views": "42369"
        },
        {
         "title": "NOBODY Is Talking About THIS BUG - Hearts of Iron 4 No Step Back HOI4",
         "date": "2021-12-05T15:35:28Z",
         "thumbnail": "https://i.ytimg.com/vi/OgtEN8s3YjI/maxresdefault.jpg",
         "views": "207098"
        },
        {
         "title": "Russian Civil War WON in 12 MONTHS?? - Hearts of Iron 4 No Step Back HOI4",
         "date": "2021-11-28T14:12:21Z",
         "thumbnail": "https://i.ytimg.com/vi/q30bSDVgEGY/maxresdefault.jpg",
         "views": "513784"
        },
        {
         "title": "THIS Is Why NO STEP BACK Changes EVERYTHING! - Hearts of Iron 4",
         "date": "2021-11-23T16:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/H1kYAYSeo5s/maxresdefault.jpg",
         "views": "518552"
        },
        {
         "title": "MAXED 100,000 GOLD - 100+ Relics Bug - Age of Empires 4 Rus Aoe4",
         "date": "2021-11-20T13:05:48Z",
         "thumbnail": "https://i.ytimg.com/vi/rsQ2dNc5J4k/maxresdefault.jpg",
         "views": "22953"
        },
        {
         "title": "DEFEAT Germany As TANK ONLY UK - Hearts of Iron 4 hoi4",
         "date": "2021-11-17T15:02:37Z",
         "thumbnail": "https://i.ytimg.com/vi/KPHJsP1YqsY/maxresdefault.jpg",
         "views": "166168"
        },
        {
         "title": "I'm Going To HELL For THIS - AOE4 MONGOLS DOUCHE IS BROKEN! - Age of Empires 4 AOE4",
         "date": "2021-11-14T13:22:14Z",
         "thumbnail": "https://i.ytimg.com/vi/x16uUQrqX9M/maxresdefault.jpg",
         "views": "34047"
        },
        {
         "title": "THIS Event Cost me 15,000$ - Mali EU4 Origins",
         "date": "2021-11-11T10:22:50Z",
         "thumbnail": "https://i.ytimg.com/vi/qAh661fHtS0/maxresdefault.jpg",
         "views": "88044"
        },
        {
         "title": "Vichy FRANCE in 1936? AND My CAPITAL Is Djibouti",
         "date": "2021-10-30T13:06:17Z",
         "thumbnail": "https://i.ytimg.com/vi/_R_YWogrZvE/maxresdefault.jpg",
         "views": "282723"
        },
        {
         "title": "UK Makes 10,000 TANKS by 1939?!?! - Hearts of Iron 4 Every Single Click",
         "date": "2021-10-23T14:40:28Z",
         "thumbnail": "https://i.ytimg.com/vi/_lVNTGdcK4Q/maxresdefault.jpg",
         "views": "370906"
        },
        {
         "title": "Millhouse's Arcane Explosion Spam IS OP! - Hearthstone Mercenaries #ad",
         "date": "2021-10-17T13:57:31Z",
         "thumbnail": "https://i.ytimg.com/vi/OCpqfMjsg6E/maxresdefault.jpg",
         "views": "9470"
        },
        {
         "title": "ULTIMATE Heavy TANK Micro Guide - Hearts of Iron 4 Every Single Click",
         "date": "2021-10-10T14:02:00Z",
         "thumbnail": "https://i.ytimg.com/vi/BjjOKj7AHqc/maxresdefault.jpg",
         "views": "203921"
        },
        {
         "title": "😩BECOME Genghis Khan in 867 AND As Stalin?!?!? - Mongols Crusader Kings 3 CK3",
         "date": "2021-10-07T13:04:06Z",
         "thumbnail": "https://i.ytimg.com/vi/tTGMHVPgZUg/maxresdefault.jpg",
         "views": "125957"
        },
        {
         "title": "You Won't Believe PARADOX Forgot About THIS - Hugeoslavia Achievement Guide",
         "date": "2021-10-01T13:50:14Z",
         "thumbnail": "https://i.ytimg.com/vi/n1n1t4xQG9E/maxresdefault.jpg",
         "views": "372692"
        },
        {
         "title": "THIS IS Why 'Democratic' Mexico Is INSANE!",
         "date": "2021-09-19T14:00:16Z",
         "thumbnail": "https://i.ytimg.com/vi/i3bvOgloU7I/maxresdefault.jpg",
         "views": "302684"
        },
        {
         "title": "You Won't BELIEVE How OP Light Tanks AND Mechanized Are!",
         "date": "2021-09-16T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/T5FdQ9RO_R0/maxresdefault.jpg",
         "views": "531817"
        },
        {
         "title": "This Simple Important NATIONAL SPIRIT Will Blow Your Mind!",
         "date": "2021-09-05T13:33:26Z",
         "thumbnail": "https://i.ytimg.com/vi/UAfknNVx87k/maxresdefault.jpg",
         "views": "138704"
        },
        {
         "title": "No Air, HEAVY TANK hoi4 Russia! -  Hearts of Iron 4 Every Single Click",
         "date": "2021-09-03T16:04:33Z",
         "thumbnail": "https://i.ytimg.com/vi/6bLeDMCkus0/maxresdefault.jpg",
         "views": "243744"
        },
        {
         "title": "THIS Is The ONLY 14 Day Focus In Hearts of Iron 4",
         "date": "2021-08-25T14:00:39Z",
         "thumbnail": "https://i.ytimg.com/vi/2HbltATr1qk/maxresdefault.jpg",
         "views": "169489"
        },
        {
         "title": "NOBODY Is Talking About The Modern Age In HUMANKIND + NUKES Are Perfect #ad",
         "date": "2021-08-23T15:37:14Z",
         "thumbnail": "https://i.ytimg.com/vi/bxpMUsMeiW8/maxresdefault.jpg",
         "views": "79104"
        },
        {
         "title": "Top CONSOLE COMMANDS You NEVER Knew Existed!  - Hearts of Iron 4 hoi4 CHEATS! / Console commands",
         "date": "2021-08-18T15:59:10Z",
         "thumbnail": "https://i.ytimg.com/vi/GFNb2SfODh0/maxresdefault.jpg",
         "views": "315230"
        },
        {
         "title": "This Is Why FINLAND Is Broken! Annex Russia in 1 Week - FINNISH HIM hoi4",
         "date": "2021-08-08T15:14:59Z",
         "thumbnail": "https://i.ytimg.com/vi/BF64fFN1QQs/maxresdefault.jpg",
         "views": "197976"
        },
        {
         "title": "NOBODY Is Talking About THIS Event! - Dutch hoi4",
         "date": "2021-08-03T15:15:24Z",
         "thumbnail": "https://i.ytimg.com/vi/j6VJqobu90w/maxresdefault.jpg",
         "views": "465585"
        },
        {
         "title": "260 CIVS as Hungary? - HOI4 MOST HISTORICAL GAME",
         "date": "2021-07-27T14:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/C1YLFQabvaI/maxresdefault.jpg",
         "views": "203952"
        },
        {
         "title": "New Meta? Cruiser SPAM is BROKEN! - Hoi4 Naval Guide Man The Guns Navy MTG",
         "date": "2021-07-18T13:49:33Z",
         "thumbnail": "https://i.ytimg.com/vi/dFZTXH5X-_s/maxresdefault.jpg",
         "views": "231860"
        },
        {
         "title": "999 NUKES Germany In 1939. WUT? -  Hearts of Iron 4 hoi4",
         "date": "2021-07-11T13:30:02Z",
         "thumbnail": "https://i.ytimg.com/vi/l6LNqgn6Alc/maxresdefault.jpg",
         "views": "93253"
        },
        {
         "title": "LEGIT 100 STAT SPYMASTER? -  OP Crusader Kings 3 Lets Play ck3",
         "date": "2021-07-04T11:17:55Z",
         "thumbnail": "https://i.ytimg.com/vi/cJBbtKj-P4s/maxresdefault.jpg",
         "views": "65866"
        },
        {
         "title": "Brand New Decision! - NUCLEAR ETHIOPIA GUIDE",
         "date": "2021-06-30T14:45:36Z",
         "thumbnail": "https://i.ytimg.com/vi/XbCC6Bu5UkU/maxresdefault.jpg",
         "views": "393770"
        },
        {
         "title": "British Empire BUT 100 Resistance EVERYWHERE - Historical",
         "date": "2021-06-21T15:30:46Z",
         "thumbnail": "https://i.ytimg.com/vi/Phbu3WPbfNI/maxresdefault.jpg",
         "views": "82227"
        },
        {
         "title": "HOW TO FORM European Union of the Pan American British Empire - NOT CLICKBAIT",
         "date": "2021-06-15T13:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/oP6onz47oZA/maxresdefault.jpg",
         "views": "341135"
        },
        {
         "title": "PAIN Till 1952 - One King Two Crowns",
         "date": "2021-05-26T13:39:41Z",
         "thumbnail": "https://i.ytimg.com/vi/kRHbcONzvPQ/maxresdefault.jpg",
         "views": "310399"
        },
        {
         "title": "I Drop 2000 Nukes On Italy - HISTORICAL ITALY BTW",
         "date": "2021-05-22T14:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/-MH9P55V_ec/maxresdefault.jpg",
         "views": "73280"
        },
        {
         "title": "10,000 YEARS OLD - Brutally Broken! Crusader Kings 3 Guide ck3",
         "date": "2021-05-11T15:05:41Z",
         "thumbnail": "https://i.ytimg.com/vi/NE8yiBT_nuo/maxresdefault.jpg",
         "views": "339655"
        },
        {
         "title": "Elite GERMANY with 151 Civs by 1939? -  Hearts of Iron 4 Every Single Click",
         "date": "2021-05-02T13:36:04Z",
         "thumbnail": "https://i.ytimg.com/vi/-WTqHDjmcq8/maxresdefault.jpg",
         "views": "349919"
        },
        {
         "title": "UNLIMITED MONEY UNLIMITED MANPOWER IS BROKEN! - Europa Universalis 4 Leviathan EU4",
         "date": "2021-04-24T18:00:13Z",
         "thumbnail": "https://i.ytimg.com/vi/XCa86tBkHbQ/maxresdefault.jpg",
         "views": "51329"
        },
        {
         "title": "The NEXT Hardest Achievement? North Sea Empire! - Crusader Kings 3 Northern Lords CK3",
         "date": "2021-04-16T15:29:17Z",
         "thumbnail": "https://i.ytimg.com/vi/IkbhiDWHsZ8/maxresdefault.jpg",
         "views": "59139"
        },
        {
         "title": "One WEIRD Trick To Make BILL GATES MAD! - +1000 DAMAGE KNIGHTS Age of Empires 2 Definitive Edition",
         "date": "2021-03-29T15:02:08Z",
         "thumbnail": "https://i.ytimg.com/vi/Qh8qtEgHlvg/maxresdefault.jpg",
         "views": "20009"
        },
        {
         "title": "PDX Will NERF This! INSANELY STRONG Become a Pirate Viking! - Crusader Kings 3 Northern Lords CK3",
         "date": "2021-03-16T17:00:23Z",
         "thumbnail": "https://i.ytimg.com/vi/XNaaWtKo1Eo/maxresdefault.jpg",
         "views": "194972"
        },
        {
         "title": "The GREATEST Crossover Ever? - Hearts of Iron 4 Hoi4 MP VS DEVS",
         "date": "2021-03-14T15:55:23Z",
         "thumbnail": "https://i.ytimg.com/vi/_TpFsV7rgTc/maxresdefault.jpg",
         "views": "138522"
        },
        {
         "title": "CANADA IS SUS IN 1937 - Hearts of Iron 4 Hoi4 #ad",
         "date": "2021-03-03T18:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/V6GvfBlIcvc/maxresdefault.jpg",
         "views": "164112"
        },
        {
         "title": "MOST BRUTAL ACHIEVEMENT - Crusader Kings 3 Mother of Us All CK3",
         "date": "2021-02-19T17:21:21Z",
         "thumbnail": "https://i.ytimg.com/vi/nVYrfkVXHNQ/maxresdefault.jpg",
         "views": "451006"
        },
        {
         "title": "What If POLAND ANNIHILATED GERMANY? - Hearts of Iron 4 Poland Hoi4",
         "date": "2021-02-10T17:38:00Z",
         "thumbnail": "https://i.ytimg.com/vi/ugtU8N24uR8/maxresdefault.jpg",
         "views": "430394"
        },
        {
         "title": "STRONGEST Start In CK3 - Crusader Kings 3 FACTIONS Guide, Tips, Tutorial",
         "date": "2021-02-07T15:37:35Z",
         "thumbnail": "https://i.ytimg.com/vi/YUVRF0oRdrg/maxresdefault.jpg",
         "views": "97301"
        },
        {
         "title": "7.3 MILLION Manpower For ITALY? - Hearts of Iron 4 Italy",
         "date": "2021-02-05T15:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/3beg82-UD1M/maxresdefault.jpg",
         "views": "613509"
        },
        {
         "title": "MERITOCRACY Is Broken! - Crusader Kings 3 Exploit, Cheap, Cheat",
         "date": "2021-02-01T15:44:13Z",
         "thumbnail": "https://i.ytimg.com/vi/RB_kr1kTUBg/maxresdefault.jpg",
         "views": "206780"
        },
        {
         "title": "HARDEST HOI4 AI - Multiplayer Hearts of Iron 4",
         "date": "2021-01-31T15:08:14Z",
         "thumbnail": "https://i.ytimg.com/vi/Met_opCJomI/maxresdefault.jpg",
         "views": "67344"
        },
        {
         "title": "Sicilians Tower Rush Is BROKEN - Age of Empires II: Definitive Edition",
         "date": "2021-01-29T15:00:34Z",
         "thumbnail": "https://i.ytimg.com/vi/rTsoioOuQTM/maxresdefault.jpg",
         "views": "23030"
        },
        {
         "title": "Do What Hitler Could NEVER Do! - FINNISH HIM! In Hearts of Iron 4 hoi4 achievement guide",
         "date": "2020-12-24T10:09:10Z",
         "thumbnail": "https://i.ytimg.com/vi/bJdKkojrAqA/maxresdefault.jpg",
         "views": "580415"
        },
        {
         "title": "Japan China Alliance in 1936? Historical? - HEARTS OF IRON 4 New Exploit",
         "date": "2020-12-21T15:02:39Z",
         "thumbnail": "https://i.ytimg.com/vi/gkqbaWwGb-U/maxresdefault.jpg",
         "views": "257240"
        },
        {
         "title": "Cyberpunk 2077 IS A DISASTER!  - UNLIMITED MONEY In Cyberpunk 2077",
         "date": "2020-12-18T02:28:14Z",
         "thumbnail": "https://i.ytimg.com/vi/gNZS8q_VbmE/maxresdefault.jpg",
         "views": "12109"
        },
        {
         "title": "WTF Happened to Cyberpunk 2077? - FOUND THE BIGGEST Cyberpunk 2077 BUG!",
         "date": "2020-12-14T15:34:17Z",
         "thumbnail": "https://i.ytimg.com/vi/KJN5Ls3t3aQ/maxresdefault.jpg",
         "views": "12497"
        },
        {
         "title": "Hearts of Iron 4 HUGE PP TURKEY!! - Unlimited Political Power",
         "date": "2020-12-02T15:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/XY3aXHrI68E/maxresdefault.jpg",
         "views": "122058"
        },
        {
         "title": "Hearts of Iron 4 ALL Commie UK Exploits/Achievements - Crush the dream, Hoofin' It, House of Kurds",
         "date": "2020-11-30T15:06:50Z",
         "thumbnail": "https://i.ytimg.com/vi/hW8d3bs_V2Q/maxresdefault.jpg",
         "views": "194940"
        },
        {
         "title": "Crusader Kings 3 'Habsburg' Character Creator IS CURSED! - LIVE TO 100+ YEARS OLD!",
         "date": "2020-11-24T11:32:15Z",
         "thumbnail": "https://i.ytimg.com/vi/Hqy0pr_UiMc/maxresdefault.jpg",
         "views": "72076"
        },
        {
         "title": "Hearts of Iron 4 British Guy DESTROYS The American Election - Battle for the Bosporus",
         "date": "2020-11-16T15:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/fFkJ5PDeLb0/maxresdefault.jpg",
         "views": "120888"
        },
        {
         "title": "Hearts of Iron 4 COMPLETE (OP) BULGARIA GUIDE - Battle for the Bosporus",
         "date": "2020-11-09T15:19:39Z",
         "thumbnail": "https://i.ytimg.com/vi/QGznH3qer3c/maxresdefault.jpg",
         "views": "209665"
        },
        {
         "title": "Hearts of Iron 4 A BRITISH CHAP BREAKS NEW ZEALAND - Broken Method To Form Polynesia",
         "date": "2020-11-02T15:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/5ylXXRsFFkQ/maxresdefault.jpg",
         "views": "156003"
        },
        {
         "title": "Hearts of Iron 4 IS BROKEN! CORE EVERYTHING! - Battle for the Bosporus Hugeslavia",
         "date": "2020-10-29T15:55:00Z",
         "thumbnail": "https://i.ytimg.com/vi/sXkzwYhh0oA/maxresdefault.jpg",
         "views": "164191"
        },
        {
         "title": "Hearts of Iron 4 THE MOST BROKEN TURKEY EVER! - Turan Empire! Battle for the Bosporus",
         "date": "2020-10-24T14:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/6Vl3ybyac88/maxresdefault.jpg",
         "views": "500980"
        },
        {
         "title": "Hearts of Iron 4 I BREAK The Battle for the Bosporus - I Swear I'm Not a Byzantophile",
         "date": "2020-10-14T14:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/h8C8xPBoEcE/maxresdefault.jpg",
         "views": "251495"
        },
        {
         "title": "Crusader Kings 3 COUNT TO EMPIRE IN 1 LIFETIME CHALLENGE! - Every Single Broken Strategy",
         "date": "2020-10-11T15:08:04Z",
         "thumbnail": "https://i.ytimg.com/vi/ElYpAiNX8fA/maxresdefault.jpg",
         "views": "214396"
        },
        {
         "title": "EVERY SINGLE EXPLOIT IN 1 VIDEO! - Max Broken Germany Hearts of Iron 4",
         "date": "2020-10-07T14:00:12Z",
         "thumbnail": "https://i.ytimg.com/vi/wU5X9VBFrAs/maxresdefault.jpg",
         "views": "492939"
        },
        {
         "title": "Hearts of Iron 4 IS A PERFECTLY BALANCED GAME WITH NO EXPLOITS - No Tax Glitch",
         "date": "2020-10-01T14:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/IyLKS3Tmqhc/maxresdefault.jpg",
         "views": "174159"
        },
        {
         "title": "Crusader Kings 3 AT LAST! TOMMY Vs FEEDBACK - FT, Tommykaylive, Alex The Rambler and Drew Durnil",
         "date": "2020-09-26T15:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/IbhOkBvuhmE/maxresdefault.jpg",
         "views": "48391"
        },
        {
         "title": "Crusader Kings 3 I EXPLOITED - ROMAN (N@KED) EMPIRE - Count to Empire in 20 years",
         "date": "2020-09-24T14:00:19Z",
         "thumbnail": "https://i.ytimg.com/vi/xK9Y6IPafuQ/maxresdefault.jpg",
         "views": "97702"
        },
        {
         "title": "Space Engineers WE BUILD WW2 FIGHTERS AND DOG FIGHT! - space engineers multiplayer survival",
         "date": "2020-09-21T14:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/ppLqVZgu97M/maxresdefault.jpg",
         "views": "14842"
        },
        {
         "title": "Hearts of Iron 4 BIGGEST EXPLOIT YET?? - One Empire Cheese",
         "date": "2020-09-16T14:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/18q6bO4LpJs/maxresdefault.jpg",
         "views": "415601"
        },
        {
         "title": "Hearts of Iron 4 AND I MAKE 2 TINY MISTAKES - Tojo Shot First, Sunrise Invasion, Tour de France",
         "date": "2020-09-09T14:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/pTbRi_bDen4/maxresdefault.jpg",
         "views": "204817"
        },
        {
         "title": "Crusader Kings 3 CHEATS COMMANDS! CONSOLE COMMANDS! DEBUG MODE!",
         "date": "2020-09-06T14:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/R5ttlzJMk40/maxresdefault.jpg",
         "views": "185667"
        },
        {
         "title": "THIS! Is The ULTIMATE Paratrooper Division - Hail to the Qing, The Dragon Swallowed the Sun",
         "date": "2020-09-04T15:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/xKA48V0P6bY/maxresdefault.jpg",
         "views": "618805"
        },
        {
         "title": "Crusader Kings 3 I CHEAT, EXTORT, EXPLOIT MY WAY TO BRITANNIA! ck3 tips",
         "date": "2020-09-01T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/A6eHr6omK6M/maxresdefault.jpg",
         "views": "306244"
        },
        {
         "title": "Hearts of Iron 4 THIS FOCUS MAKES YOU OP INSTANTLY! - Awake and Angry",
         "date": "2020-08-21T14:47:37Z",
         "thumbnail": "https://i.ytimg.com/vi/38y69osqyTI/maxresdefault.jpg",
         "views": "588740"
        },
        {
         "title": "Hearts of Iron 4 WHAT IF MEXICO WAS OP? - The New Home of the Revolution, Assuming Direct Control",
         "date": "2020-08-13T14:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/iPvXbq3865E/maxresdefault.jpg",
         "views": "214630"
        },
        {
         "title": "Space Engineers BATTLE ROBOTS FIGHT IN THE ARENA! (Battle Rover Designs) -  space engineers gameplay",
         "date": "2020-08-04T15:55:34Z",
         "thumbnail": "https://i.ytimg.com/vi/pZcuMixwgEY/maxresdefault.jpg",
         "views": "10840"
        },
        {
         "title": "ANARCHIST WORLD CONQUEST - Hearts of Iron 4",
         "date": "2020-07-31T15:01:23Z",
         "thumbnail": "https://i.ytimg.com/vi/y4qG3bXU0hQ/maxresdefault.jpg",
         "views": "518869"
        },
        {
         "title": "Space Engineers Make A Rover To Climb A Mountain?!??! - FLAWLESS ROVER DESIGNS TUTORIAL/RACE",
         "date": "2020-07-28T17:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/0B93BhaSWNQ/maxresdefault.jpg",
         "views": "14799"
        },
        {
         "title": "What If Germany Got Nukes In WW2? - Hearts of Iron 4 hoi4",
         "date": "2020-07-17T17:40:18Z",
         "thumbnail": "https://i.ytimg.com/vi/aUuV6QgKv1Q/maxresdefault.jpg",
         "views": "489702"
        },
        {
         "title": "Stellaris BUT With Infinity Stones - SO OVERPOWERED!",
         "date": "2020-07-10T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-JXZ1Cjyuj8/maxresdefault.jpg",
         "views": "42225"
        },
        {
         "title": "Hearts of Iron 4 I BREAK The Spanish Civil War - Indepth Guide To Anarchist Spain",
         "date": "2020-07-06T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0beQOUspzAA/maxresdefault.jpg",
         "views": "510479"
        },
        {
         "title": "Command &amp; Conquer NOD BIKES ARE BROKEN! - I Challenge My Discord To 1v1's",
         "date": "2020-06-24T16:25:21Z",
         "thumbnail": "https://i.ytimg.com/vi/Ybfz3M_Fc9I/maxresdefault.jpg",
         "views": "15332"
        },
        {
         "title": "Hearts of Iron 4 I WAS SPONSORED TO DESTROY THE HOI4 DEVS",
         "date": "2020-06-17T17:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/XUlQGeHt-iQ/maxresdefault.jpg",
         "views": "276293"
        },
        {
         "title": "Hearts of Iron 4 UNLIMITED MANPOWER EXPLOIT IS BROKEN!",
         "date": "2020-06-09T17:00:21Z",
         "thumbnail": "https://i.ytimg.com/vi/w4iJiVVV55w/maxresdefault.jpg",
         "views": "254991"
        },
        {
         "title": "Europa Universalis 4 Emperor FRANCE VASSAL SWARM IS BROKEN!",
         "date": "2020-06-06T07:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/EqnumaTFrKs/maxresdefault.jpg",
         "views": "76877"
        },
        {
         "title": "Disgustingly Broken! THE NEW GREEK FOCUS TREE IS BROKEN! - Hearts of Iron IV",
         "date": "2020-05-27T17:00:26Z",
         "thumbnail": "https://i.ytimg.com/vi/wplyQxrY5ag/maxresdefault.jpg",
         "views": "557288"
        },
        {
         "title": "Crusader Kings 2 And I Eat My Own Children And Worship Satan",
         "date": "2020-05-24T12:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/R7AJgzA8MPM/maxresdefault.jpg",
         "views": "52290"
        },
        {
         "title": "Hearts of Iron 4, FLAWLESS! Go Ahead Macau My Day - ULTIMATE ACHIVEMENT GUIDE",
         "date": "2020-05-22T16:32:07Z",
         "thumbnail": "https://i.ytimg.com/vi/cuXHlsFZqQ0/maxresdefault.jpg",
         "views": "631730"
        },
        {
         "title": "Crusader Kings 2 And What If A Englishman Held A County In Africa The Middle Ages? - LIFETIME LEGEND",
         "date": "2020-05-19T17:00:16Z",
         "thumbnail": "https://i.ytimg.com/vi/O2OH3cKZq3M/maxresdefault.jpg",
         "views": "33487"
        },
        {
         "title": "Hearts of Iron IV What If Hitler Formed The EU?",
         "date": "2020-05-17T17:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/BhLOnGKbvrI/maxresdefault.jpg",
         "views": "280205"
        },
        {
         "title": "Crusader Kings 2 And I Cheat On The QUEEN! OVER AND OVER",
         "date": "2020-05-15T17:00:15Z",
         "thumbnail": "https://i.ytimg.com/vi/I_lN2FyuAL8/maxresdefault.jpg",
         "views": "35543"
        },
        {
         "title": "Stellaris AND Unlimnited Energy is BROKEN!",
         "date": "2020-05-13T11:32:16Z",
         "thumbnail": "https://i.ytimg.com/vi/YBdiQCcOHdw/maxresdefault.jpg",
         "views": "23224"
        },
        {
         "title": "Hearts of Iron IV Unlimited Experience  - The Revenge of Montezuma Achievement Guide Achievcheese",
         "date": "2020-05-04T16:28:19Z",
         "thumbnail": "https://i.ytimg.com/vi/sC3hxu0RWc8/maxresdefault.jpg",
         "views": "118270"
        },
        {
         "title": "Hearts of Iron IV DUTCH, JOIN THE AXIS?  - Treading The Narrow Path Achievement Guide Achievcheese",
         "date": "2020-04-30T17:00:23Z",
         "thumbnail": "https://i.ytimg.com/vi/c-J0tflmgZw/maxresdefault.jpg",
         "views": "179024"
        },
        {
         "title": "Mount &amp; Blade II: Bannerlord RAISE AN ARMY WITHOUT FIGHTING ANY BATTLES CHALLENGE!",
         "date": "2020-04-26T17:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/NH0ik3TObso/maxresdefault.jpg",
         "views": "16949"
        },
        {
         "title": "Hearts of Iron IV UNLIMITED SPECIAL FORCES IS OP  - Britzkrieg &amp; William Wallis HOI4 Achievcheese",
         "date": "2020-04-17T16:10:44Z",
         "thumbnail": "https://i.ytimg.com/vi/2ALRoaQffiA/maxresdefault.jpg",
         "views": "184625"
        },
        {
         "title": "Imperator: Rome JEWISH OMENS ARE OP!",
         "date": "2020-04-15T17:06:30Z",
         "thumbnail": "https://i.ytimg.com/vi/38D7gODIVxA/maxresdefault.jpg",
         "views": "37949"
        },
        {
         "title": "Europa Universalis 4 UNLIMITED POINTS NATION DESIGNER",
         "date": "2020-04-09T16:05:12Z",
         "thumbnail": "https://i.ytimg.com/vi/DGpbWPjGGkU/maxresdefault.jpg",
         "views": "61011"
        },
        {
         "title": "Hearts of Iron IV 99 SPY'S AT ONCE - La Resistance DLC",
         "date": "2020-04-03T16:09:56Z",
         "thumbnail": "https://i.ytimg.com/vi/pd12LMEUnKM/maxresdefault.jpg",
         "views": "68785"
        },
        {
         "title": "STELLARIS TECHNOLOGY STACKING IS OP - Federations DLC",
         "date": "2020-03-25T18:04:25Z",
         "thumbnail": "https://i.ytimg.com/vi/nTwBWHzdykU/maxresdefault.jpg",
         "views": "59716"
        },
        {
         "title": "Hearts of Iron IV DON'T DIE FOR YOUR COUNTRY IS BROKEN! - La Resistance DLC",
         "date": "2020-03-18T18:00:11Z",
         "thumbnail": "https://i.ytimg.com/vi/MabflzjMdPo/maxresdefault.jpg",
         "views": "124691"
        },
        {
         "title": "Hearts of Iron IV DUPE EXPLOIT IS BROKEN! - La Resistance DLC",
         "date": "2020-03-11T18:03:08Z",
         "thumbnail": "https://i.ytimg.com/vi/YwqOHMhMxSs/maxresdefault.jpg",
         "views": "102495"
        },
        {
         "title": "Hearts of Iron IV COLLABORATION GOVERNMENTS ARE BROKEN! - La Resistance DLC",
         "date": "2020-03-07T19:21:43Z",
         "thumbnail": "https://i.ytimg.com/vi/1MP-Wu4NYAY/maxresdefault.jpg",
         "views": "189988"
        },
        {
         "title": "Age of Empires 2 HOW TO BEAT EXTREME AI - Age of Empires II: Definitive Edition",
         "date": "2020-03-04T17:49:02Z",
         "thumbnail": "https://i.ytimg.com/vi/TFYRRenc3Cg/maxresdefault.jpg",
         "views": "34299"
        },
        {
         "title": "Hearts of Iron IV UNITED KINGDOM OF PORTUGAL IN 1 YEAR! - La Resistance DLC",
         "date": "2020-03-01T17:34:31Z",
         "thumbnail": "https://i.ytimg.com/vi/8Q8ocLKEipU/maxresdefault.jpg",
         "views": "172735"
        },
        {
         "title": "Hearts of Iron IV WIN THE SPANISH CIVIL WAR IN 1 WEEK!  - La Resistance DLC",
         "date": "2020-02-28T18:48:25Z",
         "thumbnail": "https://i.ytimg.com/vi/SApC6AX3KoE/maxresdefault.jpg",
         "views": "310330"
        },
        {
         "title": "Hearts of Iron IV NAPPY FRANCE IS BROKEN! - La Resistance DLC",
         "date": "2020-02-27T16:00:52Z",
         "thumbnail": "https://i.ytimg.com/vi/fOdj-pxPJfQ/maxresdefault.jpg",
         "views": "278117"
        },
        {
         "title": "Hearts of Iron IV INTEL IS OP! - La Resistance DLC",
         "date": "2020-02-23T16:28:21Z",
         "thumbnail": "https://i.ytimg.com/vi/b7mlVQPRrnI/maxresdefault.jpg",
         "views": "288850"
        },
        {
         "title": "Hearts of Iron IV AS THE SOVIETS IS BROKEN! - The Revolution Triumphant Achievement",
         "date": "2020-02-19T20:29:34Z",
         "thumbnail": "https://i.ytimg.com/vi/nhW34OXYmgg/maxresdefault.jpg",
         "views": "210791"
        },
        {
         "title": "Kingdom Come: Deliverance AND Flower Picking Is BROKEN! - MAX VITALITY GLITCH",
         "date": "2020-02-15T12:49:02Z",
         "thumbnail": "https://i.ytimg.com/vi/gVy02UhgEjQ/maxresdefault.jpg",
         "views": "44819"
        },
        {
         "title": "(ACTUAL) PYRRHIC VICTORY CHALLENGE! - Imperator: Rome",
         "date": "2020-02-06T17:42:22Z",
         "thumbnail": "https://i.ytimg.com/vi/R012_i_kWIM/maxresdefault.jpg",
         "views": "33133"
        },
        {
         "title": "GUIDE! HOW TO LEAVE THE EU - Hearts of Iron IV",
         "date": "2020-01-31T20:07:40Z",
         "thumbnail": "https://i.ytimg.com/vi/PbOyErBZbQA/maxresdefault.jpg",
         "views": "78848"
        },
        {
         "title": "BIG EXPLOIT FOUND! Free Armies! - Imperator: Rome",
         "date": "2020-01-25T12:04:14Z",
         "thumbnail": "https://i.ytimg.com/vi/_9giWPMGeQQ/maxresdefault.jpg",
         "views": "61989"
        },
        {
         "title": "EASY way of becoming a MAJOR POWER!",
         "date": "2020-01-18T20:36:38Z",
         "thumbnail": "https://i.ytimg.com/vi/p6glAQGmhzI/maxresdefault.jpg",
         "views": "84975"
        },
        {
         "title": "BREAK Rome &amp; Form The Empire In 5 YEARS! - Beginners Guide To Imperator: Rome",
         "date": "2020-01-09T19:36:58Z",
         "thumbnail": "https://i.ytimg.com/vi/i0i1nkDEJSk/maxresdefault.jpg",
         "views": "78867"
        },
        {
         "title": "I Supported Minorities And Got A Civil War! 😱 - Imperator: Rome",
         "date": "2019-12-20T18:05:47Z",
         "thumbnail": "https://i.ytimg.com/vi/QnKkeNzmkrU/maxresdefault.jpg",
         "views": "78671"
        },
        {
         "title": "TOTALLY annihilate Germany after watching this video! - BIG Entente - Hearts of Iron 4",
         "date": "2019-12-11T17:13:12Z",
         "thumbnail": "https://i.ytimg.com/vi/Kggbu6H9YEI/maxresdefault.jpg",
         "views": "299677"
        },
        {
         "title": "Austria Gets A Focus Tree??? - Hearts of Iron 4",
         "date": "2019-12-03T17:28:19Z",
         "thumbnail": "https://i.ytimg.com/vi/UM3-jBgiVc8/maxresdefault.jpg",
         "views": "302237"
        },
        {
         "title": "FLAWLESS* Way of Forming BYZANTIUM!!! - I Swear I'm Not a Byzantophile",
         "date": "2019-11-21T17:48:54Z",
         "thumbnail": "https://i.ytimg.com/vi/WLdOvDRRwac/maxresdefault.jpg",
         "views": "505951"
        },
        {
         "title": "FOUR Toughest HOI4 Achievements In ONE VIDEO - The Empire Strikes Back, The Puppetmaster, One Empire",
         "date": "2019-11-07T17:42:57Z",
         "thumbnail": "https://i.ytimg.com/vi/X1DtNDiGU_I/maxresdefault.jpg",
         "views": "756298"
        },
        {
         "title": "THE PERFECT COUNTRY FOR THE 10x MOD - Poland World Conquest",
         "date": "2019-10-28T17:29:15Z",
         "thumbnail": "https://i.ytimg.com/vi/bwe-3aJxUk8/maxresdefault.jpg",
         "views": "207920"
        },
        {
         "title": "Easiest Bevrijding Ever! BONUS DEFEAT 1.7.1 GERMANY! - Bevrijding",
         "date": "2019-10-03T19:18:31Z",
         "thumbnail": "https://i.ytimg.com/vi/uZHs6ZLbl-4/maxresdefault.jpg",
         "views": "419829"
        },
        {
         "title": "How To Get Senior Hilter! AND Eat America - USA VS ARGENTINA! AGAIN?!?",
         "date": "2019-09-27T17:08:17Z",
         "thumbnail": "https://i.ytimg.com/vi/7ozPTnHflb8/maxresdefault.jpg",
         "views": "225637"
        },
        {
         "title": "Achievcheese ULTRA FAST!!! - monarchy back in fashion, the bell tolls for us, freegypt",
         "date": "2019-09-19T17:42:18Z",
         "thumbnail": "https://i.ytimg.com/vi/bxBqqFfVWwI/maxresdefault.jpg",
         "views": "287911"
        },
        {
         "title": "HOW TO BECOME AN OP MINOR POWER IN HEARTS OF IRON 4",
         "date": "2019-09-12T17:25:29Z",
         "thumbnail": "https://i.ytimg.com/vi/_luycwAV45o/maxresdefault.jpg",
         "views": "240646"
        },
        {
         "title": "UNIFY RED CHINA IN 1936!! - The People Have Stood Up! hearts of iron 4",
         "date": "2019-09-02T17:19:24Z",
         "thumbnail": "https://i.ytimg.com/vi/i376zKTZiIg/maxresdefault.jpg",
         "views": "716051"
        },
        {
         "title": "Mine Laying In The English Channel In 1936 LOLOL! - Do You Mined?",
         "date": "2019-08-30T16:50:12Z",
         "thumbnail": "https://i.ytimg.com/vi/hMGpNiLhE8w/maxresdefault.jpg",
         "views": "367381"
        },
        {
         "title": "ANNEX All of RUSSIA Wile At PEACE! - History Repeated Itself - Hearts of Iron 4 hoi4",
         "date": "2019-08-26T17:56:07Z",
         "thumbnail": "https://i.ytimg.com/vi/ozUgyKDkfsM/maxresdefault.jpg",
         "views": "591316"
        },
        {
         "title": "THIS IS IMPOSSIBLE! - 100k Special",
         "date": "2019-08-23T17:02:57Z",
         "thumbnail": "https://i.ytimg.com/vi/MpM2X8lIAxk/maxresdefault.jpg",
         "views": "184413"
        },
        {
         "title": "What If Turkey Was In WW2? - Ataturk's Turkey",
         "date": "2019-08-19T17:01:58Z",
         "thumbnail": "https://i.ytimg.com/vi/urrNodHQC6o/maxresdefault.jpg",
         "views": "188384"
        },
        {
         "title": "500 Super Heavy Tanks In ONE Division! - BIG BOB NEW ZEALAND",
         "date": "2019-08-12T17:18:18Z",
         "thumbnail": "https://i.ytimg.com/vi/DcbjqLHvBdU/maxresdefault.jpg",
         "views": "487571"
        },
        {
         "title": "I Was Asked, Can You BREAK The Netherlands? - Putting the Raid on the Medway to Shame",
         "date": "2019-08-09T16:56:14Z",
         "thumbnail": "https://i.ytimg.com/vi/KwD90RLjTYs/maxresdefault.jpg",
         "views": "648265"
        },
        {
         "title": "UNLIMITED EQUIPMENT USA, IS BROKEN - To Arms in Dixie!",
         "date": "2019-08-05T17:39:25Z",
         "thumbnail": "https://i.ytimg.com/vi/aQbvwms7WiM/maxresdefault.jpg",
         "views": "188085"
        },
        {
         "title": "THE FAMOUS! Bypass Rhineland Exploit - EUROPEAN UNION WORLD CONQUEST! - Hearts of Iron 4 hoi4",
         "date": "2019-08-01T16:56:14Z",
         "thumbnail": "https://i.ytimg.com/vi/DS4pvsfHkwA/maxresdefault.jpg",
         "views": "663052"
        },
        {
         "title": "THIS! Breaks Spain - Nobody expects...",
         "date": "2019-07-29T16:26:09Z",
         "thumbnail": "https://i.ytimg.com/vi/8gwESOapjKU/maxresdefault.jpg",
         "views": "395365"
        },
        {
         "title": "NOT AGAIN 😓 - Convoy Raiding Battle Cruisers Are Broken!!! - Nothing Wrong with our Bloody Ships",
         "date": "2019-07-26T16:58:05Z",
         "thumbnail": "https://i.ytimg.com/vi/T-PdGmt2ULc/maxresdefault.jpg",
         "views": "197866"
        },
        {
         "title": "Hirohito Breaks HOI4 3x Times",
         "date": "2019-07-22T17:27:10Z",
         "thumbnail": "https://i.ytimg.com/vi/4X8LLVCz83k/maxresdefault.jpg",
         "views": "386046"
        },
        {
         "title": "The Most Broken USA Strategy EVER!!! - Team America",
         "date": "2019-07-18T16:29:56Z",
         "thumbnail": "https://i.ytimg.com/vi/9c8oGB2YieM/maxresdefault.jpg",
         "views": "656783"
        },
        {
         "title": "Mexican Cheese - Mi Casa es tu Casa",
         "date": "2019-07-15T18:45:54Z",
         "thumbnail": "https://i.ytimg.com/vi/HjF2Cqs_aSA/maxresdefault.jpg",
         "views": "245600"
        },
        {
         "title": "300 Factories Instantly? EASY!",
         "date": "2019-07-11T16:31:40Z",
         "thumbnail": "https://i.ytimg.com/vi/XM2CGdJ9IIE/maxresdefault.jpg",
         "views": "311405"
        },
        {
         "title": "Surviving For 14 HOURS As Poland - 30 Minutes of Hel",
         "date": "2019-06-03T17:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/TfHtLxdsgt4/maxresdefault.jpg",
         "views": "1427434"
        },
        {
         "title": "Easy 250,000$ A Week! - Cities: Skylines Campus",
         "date": "2019-05-21T14:45:34Z",
         "thumbnail": "https://i.ytimg.com/vi/-WpOKST96lY/maxresdefault.jpg",
         "views": "33919"
        },
        {
         "title": "WHY ARE VEGANS SO ANNOYING??? - Surviving Mars: Green Planet",
         "date": "2019-05-17T17:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/mDgbBoi98Z4/maxresdefault.jpg",
         "views": "12687"
        },
        {
         "title": "IMPERATOR: ROME BUT! WITH WOMEN - Guide/Tutorial",
         "date": "2019-05-14T17:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/EvzYz2u0zbo/maxresdefault.jpg",
         "views": "15248"
        },
        {
         "title": "HOI4 DOUBLE RESEARCH EXPLOIT",
         "date": "2019-05-04T13:13:19Z",
         "thumbnail": "https://i.ytimg.com/vi/cNYwhyPN1Vg/maxresdefault.jpg",
         "views": "173127"
        },
        {
         "title": "30 MINUTES OF HEL - Achievcheese",
         "date": "2019-04-21T18:56:39Z",
         "thumbnail": "https://i.ytimg.com/vi/8DDa0i0_XhY/maxresdefault.jpg",
         "views": "1258101"
        },
        {
         "title": "HEARTS OF IRON IV AND THE KINGDOM OF HEAVEN!",
         "date": "2019-04-06T16:57:53Z",
         "thumbnail": "https://i.ytimg.com/vi/GdR1VDCZ1tE/maxresdefault.jpg",
         "views": "66822"
        },
        {
         "title": "HEARTS OF IRON IV HIGHEST RESEARCH SPEED POSSIBLE??? - Guide/Tutorial",
         "date": "2019-04-05T16:28:16Z",
         "thumbnail": "https://i.ytimg.com/vi/us_Xh3PdLII/maxresdefault.jpg",
         "views": "172833"
        },
        {
         "title": "HEARTS OF IRON IV MOTORISED ARTILLERY SHOULDN'T WORK! - Guide/Tutorial",
         "date": "2019-04-02T17:19:04Z",
         "thumbnail": "https://i.ytimg.com/vi/ygpe6S1amZ0/maxresdefault.jpg",
         "views": "214295"
        },
        {
         "title": "HEARTS OF IRON IV AND TORPEDOES ARE BROKEN IN MAN THE GUNS! - Guide/Tutorial",
         "date": "2019-03-30T18:17:26Z",
         "thumbnail": "https://i.ytimg.com/vi/vk494VOPZoc/maxresdefault.jpg",
         "views": "141367"
        },
        {
         "title": "SUPER SWEDEN IS BROKEN! - Hearts of Iron IV Man The Guns",
         "date": "2019-03-26T18:15:01Z",
         "thumbnail": "https://i.ytimg.com/vi/wxMA6k9ziiU/maxresdefault.jpg",
         "views": "378243"
        },
        {
         "title": "BIGGEST MTG EXPLOIT FOUND - Hearts of Iron IV Man The Guns",
         "date": "2019-03-24T18:02:12Z",
         "thumbnail": "https://i.ytimg.com/vi/6_KdlZIyVbw/maxresdefault.jpg",
         "views": "208418"
        },
        {
         "title": "THIS MAKES YOU A NAVAL POWER!!! - Hearts of Iron IV Man The Guns",
         "date": "2019-03-21T18:02:37Z",
         "thumbnail": "https://i.ytimg.com/vi/Na6SVxokT98/maxresdefault.jpg",
         "views": "186498"
        },
        {
         "title": "SUPER CHAD - Hearts of Iron IV Man The Guns",
         "date": "2019-03-19T18:20:22Z",
         "thumbnail": "https://i.ytimg.com/vi/ulPXd5s9CIo/maxresdefault.jpg",
         "views": "286024"
        },
        {
         "title": "THIS BEATS AMERICA EVERY TIME [2 of 2] Super Mexico - Hearts of Iron IV Man The Guns",
         "date": "2019-03-17T18:01:56Z",
         "thumbnail": "https://i.ytimg.com/vi/mks3pSj60c0/maxresdefault.jpg",
         "views": "166014"
        },
        {
         "title": "MEXICO IS BROKEN [1 of 2] Super Mexico - Hearts of Iron IV Man The Guns",
         "date": "2019-03-16T18:02:39Z",
         "thumbnail": "https://i.ytimg.com/vi/jqCJJWe-oQM/maxresdefault.jpg",
         "views": "294761"
        },
        {
         "title": "NAVY GUIDE Hearts of Iron 4 Man The Guns [2 of 2] Germany Hoi4 Naval Guide Man The Guns Naval Guide",
         "date": "2019-03-07T17:55:36Z",
         "thumbnail": "https://i.ytimg.com/vi/kO1gZhak0XY/maxresdefault.jpg",
         "views": "109521"
        },
        {
         "title": "NAVY GUIDE Hearts of Iron 4 Man The Guns [1 of 2] Germany HOI4 Man The Guns Naval Guide",
         "date": "2019-03-06T17:56:31Z",
         "thumbnail": "https://i.ytimg.com/vi/tWbsxONW6OY/maxresdefault.jpg",
         "views": "224308"
        },
        {
         "title": "SUPER MARINES ARE BACK!!! [3 of 3] UK - Hearts of Iron IV Man The Guns",
         "date": "2019-03-03T17:50:44Z",
         "thumbnail": "https://i.ytimg.com/vi/R5GH32WM1vc/maxresdefault.jpg",
         "views": "116772"
        },
        {
         "title": "HEAVIER THAN THE YAMATO??? [2 of 3] UK - Hearts of Iron IV Man The Guns",
         "date": "2019-03-02T17:40:27Z",
         "thumbnail": "https://i.ytimg.com/vi/R0b6G-YWm5c/maxresdefault.jpg",
         "views": "180303"
        },
        {
         "title": "HOW TO FORM THE IMPERIAL FEDERATION [1 of 3] UK - Hearts of Iron IV Man The Guns",
         "date": "2019-03-01T17:59:46Z",
         "thumbnail": "https://i.ytimg.com/vi/Z0fAMRNM2hk/maxresdefault.jpg",
         "views": "218567"
        },
        {
         "title": "AMERICA IS NOW BROKEN!!! [3 of 3] CSA - Hearts of Iron IV Man The Guns",
         "date": "2019-02-27T17:55:54Z",
         "thumbnail": "https://i.ytimg.com/vi/LQi5fH6seb4/maxresdefault.jpg",
         "views": "144785"
        },
        {
         "title": "THE PERFECT LIGHT CRUISER??? [2 of 3] CSA - Hearts of Iron IV Man The Guns",
         "date": "2019-02-26T17:55:46Z",
         "thumbnail": "https://i.ytimg.com/vi/jo9obwJJr-c/maxresdefault.jpg",
         "views": "200805"
        },
        {
         "title": "HOW TO FORM THE CONFEDERATE STATES OF AMERICA [1 of 3] CSA - Hearts of Iron IV Man The Guns",
         "date": "2019-02-25T08:06:20Z",
         "thumbnail": "https://i.ytimg.com/vi/JOVmiaUi3Ek/maxresdefault.jpg",
         "views": "514737"
        },
        {
         "title": "IS THIS HOT??? [2 of 2] Romania - Hearts of Iron IV",
         "date": "2019-02-23T16:49:46Z",
         "thumbnail": "https://i.ytimg.com/vi/JJtLqwRWmSc/maxresdefault.jpg",
         "views": "113357"
        },
        {
         "title": "HOI4 SECRET EVENT??? [1 of 2] Romania - Hearts of Iron IV",
         "date": "2019-02-22T19:27:03Z",
         "thumbnail": "https://i.ytimg.com/vi/S9eDl-K-jrU/maxresdefault.jpg",
         "views": "195984"
        },
        {
         "title": "Europa Universalis BUT You're A Banker - Evil Bank Manager",
         "date": "2019-02-19T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/GG3naT3AnaE/maxresdefault.jpg",
         "views": "17853"
        },
        {
         "title": "101 WAYS TO BREAK CANADA - Hearts of Iron IV",
         "date": "2019-02-15T18:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/qLwoTgf8lNY/maxresdefault.jpg",
         "views": "88034"
        },
        {
         "title": "EU4 IN 1000 AD!!! - Europa Universalis IV",
         "date": "2019-02-14T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/70QnIbbGLII/maxresdefault.jpg",
         "views": "8543"
        },
        {
         "title": "Time To Say Goodbye",
         "date": "2019-02-13T12:01:28Z",
         "thumbnail": "https://i.ytimg.com/vi/uqF1T8qELp8/maxresdefault.jpg",
         "views": "32226"
        },
        {
         "title": "HOW TO PLAY HEARTS OF IRON 4 COMPLETE GUIDE - Tutorial Compilation",
         "date": "2019-02-09T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/gr0IWSQqBOM/maxresdefault.jpg",
         "views": "54830"
        },
        {
         "title": "THE IMPOSSIBLE IS NOW POSSIBLE - Hearts of Iron IV",
         "date": "2019-02-08T18:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/zIjdzGt3Was/maxresdefault.jpg",
         "views": "163347"
        },
        {
         "title": "50$ PRIZE POOL! - 1v1 GANGIR DUEL TOURNAMENT 'GREENHORN' - Hearts of Iron IV",
         "date": "2019-02-07T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/JtzbqyCPvjM/maxresdefault.jpg",
         "views": "14650"
        },
        {
         "title": "28th of FEBRUARY Is The Release Date For Man The Guns - Hearts of Iron IV",
         "date": "2019-02-07T17:40:46Z",
         "thumbnail": "https://i.ytimg.com/vi/9iYVovqEvC4/maxresdefault.jpg",
         "views": "6243"
        },
        {
         "title": "TOUGHEST ACHIEVEMENTS YET!!! - Dev Diary - Hearts of Iron IV",
         "date": "2019-02-06T18:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/zuxjFNR4UBs/maxresdefault.jpg",
         "views": "65918"
        },
        {
         "title": "WHATS A AAR? - Dev Diary - Hearts of Iron IV",
         "date": "2019-02-05T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/mRqbVorsMzA/maxresdefault.jpg",
         "views": "14366"
        },
        {
         "title": "HEARTS OF IRON 4 IN 867 AD 😱😱😱 - Hearts of Kings 4",
         "date": "2019-02-04T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/kEvHTyxSLkw/maxresdefault.jpg",
         "views": "9872"
        },
        {
         "title": "LIKE = 1 HOUR EPISODE [3] Form Greater Indonesia - Hearts of Iron IV",
         "date": "2019-02-03T18:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/mge5EgaCqr0/maxresdefault.jpg",
         "views": "66475"
        },
        {
         "title": "THIS BREAKS THE GAME [2] Form Greater Indonesia - Hearts of Iron IV",
         "date": "2019-02-02T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/drKN3_MWUmU/maxresdefault.jpg",
         "views": "120675"
        },
        {
         "title": "FORMABLE NATION EVERYONE FORGOT ABOUT [1] Form Greater Indonesia - Hearts of Iron IV",
         "date": "2019-02-01T18:00:37Z",
         "thumbnail": "https://i.ytimg.com/vi/w6i_35Dt50w/maxresdefault.jpg",
         "views": "253505"
        },
        {
         "title": "RULE BRITANNIA ACHIEVEMENT [3] Form Zimbabwe Empire - Hearts of Iron IV",
         "date": "2019-01-30T19:00:22Z",
         "thumbnail": "https://i.ytimg.com/vi/tvKM9yJVTmw/maxresdefault.jpg",
         "views": "42096"
        },
        {
         "title": "I CHALLENGE YOU! GANGIR DUEL MOD!  - Hearts of Iron IV",
         "date": "2019-01-30T12:20:50Z",
         "thumbnail": "https://i.ytimg.com/vi/uI8DuvxRaxY/maxresdefault.jpg",
         "views": "44056"
        },
        {
         "title": "AFRICA FOR AFRICANS!!! [2] Form Zimbabwe Empire - Hearts of Iron IV",
         "date": "2019-01-29T19:07:38Z",
         "thumbnail": "https://i.ytimg.com/vi/vQpzhi6f7ho/maxresdefault.jpg",
         "views": "110538"
        },
        {
         "title": "Fix Checksum Error / Fail To Connect / Desyncs Issues - Paradox Interactive Games",
         "date": "2019-01-29T15:52:10Z",
         "thumbnail": "https://i.ytimg.com/vi/A1X9lW6Yukc/maxresdefault.jpg",
         "views": "59754"
        },
        {
         "title": "EXPLOIT YOUR WAY TO GREATNESS! [1] Form Zimbabwe Empire - Hearts of Iron IV",
         "date": "2019-01-28T20:22:13Z",
         "thumbnail": "https://i.ytimg.com/vi/sTRzIZyuGUs/maxresdefault.jpg",
         "views": "235221"
        },
        {
         "title": "BONUS [5] Non-Aligned Yugoslavia - Hearts of Iron IV",
         "date": "2019-01-26T17:53:48Z",
         "thumbnail": "https://i.ytimg.com/vi/KWDrLml3YF4/maxresdefault.jpg",
         "views": "20109"
        },
        {
         "title": "PAUL KING OF OMEGASLAVIA [4] Non-Aligned Yugoslavia - Hearts of Iron IV",
         "date": "2019-01-25T19:57:33Z",
         "thumbnail": "https://i.ytimg.com/vi/zEDKUhh7V9s/maxresdefault.jpg",
         "views": "60065"
        },
        {
         "title": "OMEGALUL [3] Non-Aligned Yugoslavia - Hearts of Iron IV",
         "date": "2019-01-24T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ObexOI0P2yg/maxresdefault.jpg",
         "views": "56197"
        },
        {
         "title": "RELEASE DATE SOON??? - Dev Diary - Hearts of Iron IV",
         "date": "2019-01-24T14:16:58Z",
         "thumbnail": "https://i.ytimg.com/vi/oT4etkxp4Hk/maxresdefault.jpg",
         "views": "10793"
        },
        {
         "title": "2 GAME CHANGERS [2] Non-Aligned Yugoslavia - Hearts of Iron IV",
         "date": "2019-01-23T19:00:13Z",
         "thumbnail": "https://i.ytimg.com/vi/jsRERvnnvdw/maxresdefault.jpg",
         "views": "87563"
        },
        {
         "title": "101 WAYS TO BREAK HOI4 [1] Non-Aligned Yugoslavia - Hearts of Iron IV",
         "date": "2019-01-22T18:04:00Z",
         "thumbnail": "https://i.ytimg.com/vi/NYY2Y8pkW1k/maxresdefault.jpg",
         "views": "194752"
        },
        {
         "title": "ANGRY STALIN AND BIG FONTS [6] How To Form The Nordic Empire - Hearts of Iron IV",
         "date": "2019-01-21T19:02:50Z",
         "thumbnail": "https://i.ytimg.com/vi/zQSwTm4em1g/maxresdefault.jpg",
         "views": "23141"
        },
        {
         "title": "TENSION RACE [3] Super Brazil - Hearts of Iron IV",
         "date": "2019-01-20T19:02:56Z",
         "thumbnail": "https://i.ytimg.com/vi/nBwZvqYQIBQ/maxresdefault.jpg",
         "views": "18050"
        },
        {
         "title": "I'VE NOT SEEN THIS HAPPEN BEFORE [2] Super Brazil - Hearts of Iron IV",
         "date": "2019-01-19T18:35:37Z",
         "thumbnail": "https://i.ytimg.com/vi/46_qhmGOZkY/maxresdefault.jpg",
         "views": "37324"
        },
        {
         "title": "WORLD RECORD IDEOLOGY CHANGE [1] Super Brazil - Hearts of Iron IV",
         "date": "2019-01-18T19:04:59Z",
         "thumbnail": "https://i.ytimg.com/vi/kIigO0BwK2g/maxresdefault.jpg",
         "views": "82300"
        },
        {
         "title": "MAN THE GUNS RELEASE DATE?? - Bonus Dev Diary - Hearts of Iron IV",
         "date": "2019-01-18T13:13:01Z",
         "thumbnail": "https://i.ytimg.com/vi/eAycHJ2jyv4/maxresdefault.jpg",
         "views": "10827"
        },
        {
         "title": "EXPLOIT THIS! [5] How To Form The Nordic Empire - Hearts of Iron IV",
         "date": "2019-01-17T18:40:50Z",
         "thumbnail": "https://i.ytimg.com/vi/5hd2hOyZy-E/maxresdefault.jpg",
         "views": "14225"
        },
        {
         "title": "50 NEW TECHNOLOGIES - Dev Diary - Hearts of Iron IV",
         "date": "2019-01-17T14:52:02Z",
         "thumbnail": "https://i.ytimg.com/vi/2pIdMBGDzcs/maxresdefault.jpg",
         "views": "27180"
        },
        {
         "title": "BL00DBATH [4] How To Form The Nordic Empire - Hearts of Iron IV",
         "date": "2019-01-16T22:49:17Z",
         "thumbnail": "https://i.ytimg.com/vi/E8S7yaSdiJI/maxresdefault.jpg",
         "views": "20572"
        },
        {
         "title": "NEW ENEMIES [3] How To Form The Nordic Empire - Hearts of Iron IV",
         "date": "2019-01-15T19:12:43Z",
         "thumbnail": "https://i.ytimg.com/vi/5FN1qtr8dtQ/maxresdefault.jpg",
         "views": "24619"
        },
        {
         "title": "DISARMED GERMANY [2] How To Form The Nordic Empire - Hearts of Iron IV",
         "date": "2019-01-14T19:02:10Z",
         "thumbnail": "https://i.ytimg.com/vi/uSlRMo6x5uw/maxresdefault.jpg",
         "views": "32062"
        },
        {
         "title": "HOW TO BREAK DENMARK [1] How To Form The Nordic Empire - Hearts of Iron IV",
         "date": "2019-01-13T14:23:04Z",
         "thumbnail": "https://i.ytimg.com/vi/2bya7jQX2C4/maxresdefault.jpg",
         "views": "48319"
        },
        {
         "title": "PROOF COMMUNISM WORKS [6] Persia - Hearts of Iron IV",
         "date": "2019-01-12T18:54:46Z",
         "thumbnail": "https://i.ytimg.com/vi/3kuEPysJgQQ/maxresdefault.jpg",
         "views": "28446"
        },
        {
         "title": "PEACE CONFERENCE MASTERY [5] Persia - Hearts of Iron IV",
         "date": "2019-01-11T19:02:58Z",
         "thumbnail": "https://i.ytimg.com/vi/NXQ-2ufrMLs/maxresdefault.jpg",
         "views": "26679"
        },
        {
         "title": "CHANGE OF PLAN [4] Persia - Hearts of Iron IV",
         "date": "2019-01-10T22:38:39Z",
         "thumbnail": "https://i.ytimg.com/vi/ZwgYJZVES64/maxresdefault.jpg",
         "views": "29292"
        },
        {
         "title": "CONFIRMED! MOTORISED ARTILLERY!!! - Dev Diary - Hearts of Iron IV",
         "date": "2019-01-10T14:28:18Z",
         "thumbnail": "https://i.ytimg.com/vi/b6uq6YfhhZk/maxresdefault.jpg",
         "views": "15843"
        },
        {
         "title": "HOW TO GET ADAPTABLE GENERAL TRAIT [3] Persia - Hearts of Iron IV",
         "date": "2019-01-09T19:02:44Z",
         "thumbnail": "https://i.ytimg.com/vi/SeB5CkPGgwc/maxresdefault.jpg",
         "views": "37490"
        },
        {
         "title": "MOBILE WARFARE FOR AFGHANISTAN??? [2] Persia - Hearts of Iron IV",
         "date": "2019-01-08T18:02:20Z",
         "thumbnail": "https://i.ytimg.com/vi/Obn_oN-S9zI/maxresdefault.jpg",
         "views": "58705"
        },
        {
         "title": "HOW TO FORM PERSIA, IRONMAN EXPLOITS [1] Persia - Hearts of Iron IV",
         "date": "2019-01-07T14:48:17Z",
         "thumbnail": "https://i.ytimg.com/vi/Rv-j84CDEes/maxresdefault.jpg",
         "views": "93179"
        },
        {
         "title": "PARTY LIKE ITS 1000 BC [4] Kaiserreich Egypt - Hearts of Iron IV",
         "date": "2019-01-03T22:59:36Z",
         "thumbnail": "https://i.ytimg.com/vi/Y7aouM6CF0c/maxresdefault.jpg",
         "views": "15291"
        },
        {
         "title": "OVER? [3] Kaiserreich Egypt - Hearts of Iron IV",
         "date": "2019-01-02T19:02:41Z",
         "thumbnail": "https://i.ytimg.com/vi/_Qa5-afuTzU/maxresdefault.jpg",
         "views": "13586"
        },
        {
         "title": "THIS IS RARE! [2] Kaiserreich Egypt - Hearts of Iron IV",
         "date": "2019-01-01T16:55:52Z",
         "thumbnail": "https://i.ytimg.com/vi/KMCNkIUrENo/maxresdefault.jpg",
         "views": "19793"
        },
        {
         "title": "HOW TO RESTORE PHARAONIST EGYPT [1] Kaiserreich Egypt - Hearts of Iron IV",
         "date": "2018-12-31T15:57:18Z",
         "thumbnail": "https://i.ytimg.com/vi/firODEfRlB8/maxresdefault.jpg",
         "views": "36726"
        },
        {
         "title": "STUPID EASY! [3] Kaiserreich Qing China - Hearts of Iron IV",
         "date": "2018-12-24T16:05:31Z",
         "thumbnail": "https://i.ytimg.com/vi/1VbAEUvtpy4/maxresdefault.jpg",
         "views": "26832"
        },
        {
         "title": "EVERYTHING GOES WRONG [2] Kaiserreich Qing China - Hearts of Iron IV",
         "date": "2018-12-23T19:08:09Z",
         "thumbnail": "https://i.ytimg.com/vi/F1Dtc3MfKVg/maxresdefault.jpg",
         "views": "35835"
        },
        {
         "title": "QING CHINA IS BROKEN [1] Kaiserreich Qing China - Hearts of Iron IV",
         "date": "2018-12-22T20:53:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ptIA_EWEQ_U/maxresdefault.jpg",
         "views": "94909"
        },
        {
         "title": "EASTERN SLAVS UNIFIED [3] Kaiserreich Poland - Hearts of Iron IV",
         "date": "2018-12-21T19:58:52Z",
         "thumbnail": "https://i.ytimg.com/vi/nUhDDlD8TtQ/maxresdefault.jpg",
         "views": "22646"
        },
        {
         "title": "HALLELUJAH [2] Kaiserreich Poland - Hearts of Iron IV",
         "date": "2018-12-20T19:03:23Z",
         "thumbnail": "https://i.ytimg.com/vi/PdgK6lrEshU/maxresdefault.jpg",
         "views": "25264"
        },
        {
         "title": "FORM THE POLISH-LITHUANIAN EMPIRE [1] Kaiserreich Poland - Hearts of Iron IV",
         "date": "2018-12-19T19:14:53Z",
         "thumbnail": "https://i.ytimg.com/vi/BkF-7h8UXVk/maxresdefault.jpg",
         "views": "57883"
        },
        {
         "title": "ONE FINAL TEST FOR THE NAVY [4] Naval Germany - Hearts of Iron IV",
         "date": "2018-12-18T19:07:44Z",
         "thumbnail": "https://i.ytimg.com/vi/s2fBb_yaWcA/maxresdefault.jpg",
         "views": "37334"
        },
        {
         "title": "BATTLE OF THE MEDITERRANEAN [3] Naval Germany - Hearts of Iron IV",
         "date": "2018-12-17T22:33:17Z",
         "thumbnail": "https://i.ytimg.com/vi/WiKnx8EUq1c/maxresdefault.jpg",
         "views": "39531"
        },
        {
         "title": "THIS IS ESSENTIAL [2] Naval Germany - Hearts of Iron IV",
         "date": "2018-12-16T20:05:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1slgB8T-NvE/maxresdefault.jpg",
         "views": "49414"
        },
        {
         "title": "THE PERFECT GERMAN NAVY GUIDE [1] Naval Germany - Hearts of Iron IV",
         "date": "2018-12-15T20:37:31Z",
         "thumbnail": "https://i.ytimg.com/vi/mca1ZufcugU/maxresdefault.jpg",
         "views": "95008"
        },
        {
         "title": "😩 DREAM OF PANAMAICATION 😩 - Hearts of Iron IV",
         "date": "2018-12-13T18:59:09Z",
         "thumbnail": "https://i.ytimg.com/vi/6EKvfflDCiQ/maxresdefault.jpg",
         "views": "11921"
        },
        {
         "title": "SUBS SUBS SUBS - Dev Diary - Hearts of Iron IV",
         "date": "2018-12-13T17:42:55Z",
         "thumbnail": "https://i.ytimg.com/vi/gnV_2ndNESU/maxresdefault.jpg",
         "views": "7583"
        },
        {
         "title": "PERFECT VS POLAND TANK GUIDE Last Tip Will Blow Your Mind! - Hearts of Iron 4",
         "date": "2018-12-12T19:20:37Z",
         "thumbnail": "https://i.ytimg.com/vi/ud6Cu1MGUIc/maxresdefault.jpg",
         "views": "23563"
        },
        {
         "title": "HOW TO SPEED UP HOI4 BY 50% - Hearts of Iron 4",
         "date": "2018-12-08T18:33:23Z",
         "thumbnail": "https://i.ytimg.com/vi/Pnw8E-mYkJ0/maxresdefault.jpg",
         "views": "181378"
        },
        {
         "title": "NEW BATTALION? - Dev Diary - Hearts of Iron IV",
         "date": "2018-12-07T13:48:11Z",
         "thumbnail": "https://i.ytimg.com/vi/Sry1IZN5Vag/maxresdefault.jpg",
         "views": "12361"
        },
        {
         "title": "Did you mean: french military defeats [6] Kaiserreich USA - Hearts of Iron IV",
         "date": "2018-12-06T18:57:42Z",
         "thumbnail": "https://i.ytimg.com/vi/GaAYokSZSwc/maxresdefault.jpg",
         "views": "14343"
        },
        {
         "title": "HOW DID THIS HAPPEN? [5] Kaiserreich USA - Hearts of Iron IV",
         "date": "2018-12-05T18:58:08Z",
         "thumbnail": "https://i.ytimg.com/vi/FRqBYTBR0iA/maxresdefault.jpg",
         "views": "9547"
        },
        {
         "title": "MAPLE SYRUP DEMAND HITS ALL TIME HIGH [4] Kaiserreich USA - Hearts of Iron IV",
         "date": "2018-12-04T19:49:50Z",
         "thumbnail": "https://i.ytimg.com/vi/39sjtQWElGw/maxresdefault.jpg",
         "views": "13936"
        },
        {
         "title": "TOO MANY??? [3] Kaiserreich USA - Hearts of Iron IV",
         "date": "2018-12-03T19:03:43Z",
         "thumbnail": "https://i.ytimg.com/vi/XPhjaq1tYQs/maxresdefault.jpg",
         "views": "14727"
        },
        {
         "title": "141k LOL [2] Kaiserreich USA - Hearts of Iron IV",
         "date": "2018-12-02T18:57:39Z",
         "thumbnail": "https://i.ytimg.com/vi/uJzoMvZBxFY/maxresdefault.jpg",
         "views": "19947"
        },
        {
         "title": "HOW TO AVOID THE AMERICAN CIVIL WAR [1] Kaiserreich USA - Hearts of Iron IV",
         "date": "2018-12-01T19:00:15Z",
         "thumbnail": "https://i.ytimg.com/vi/Bru9_t0NjfI/maxresdefault.jpg",
         "views": "48837"
        },
        {
         "title": "BECOME GODLIKE! Last Tip Will Blow Your Mind! - Hearts of Iron 4",
         "date": "2018-11-29T19:41:14Z",
         "thumbnail": "https://i.ytimg.com/vi/pqRPLzXgYeM/maxresdefault.jpg",
         "views": "16638"
        },
        {
         "title": "IS THIS THE NEW WORLD CONQUEST CHALLENGE? - Dev Diary - Hearts of Iron IV",
         "date": "2018-11-29T12:40:59Z",
         "thumbnail": "https://i.ytimg.com/vi/wViL2dkAcgg/maxresdefault.jpg",
         "views": "15738"
        },
        {
         "title": "TYPE F IN THE ROOSEVELT [5] Japan MP Min-Maxing - Hearts of Iron IV",
         "date": "2018-11-28T18:58:05Z",
         "thumbnail": "https://i.ytimg.com/vi/Ao36_mAj-RU/maxresdefault.jpg",
         "views": "21848"
        },
        {
         "title": "EVERYTHING ON THICC SINGAPORE [4] Japan MP Min-Maxing - Hearts of Iron IV",
         "date": "2018-11-27T19:39:45Z",
         "thumbnail": "https://i.ytimg.com/vi/-i01RqWOZv8/maxresdefault.jpg",
         "views": "24430"
        },
        {
         "title": "HOW TO EXCAVATE ALL OF CHINA [3] Japan MP Min-Maxing - Hearts of Iron IV",
         "date": "2018-11-26T18:57:28Z",
         "thumbnail": "https://i.ytimg.com/vi/7eH9e8vQdL4/maxresdefault.jpg",
         "views": "32235"
        },
        {
         "title": "AND IT GOES WRONG [2] Japan MP Min-Maxing - Hearts of Iron IV",
         "date": "2018-11-25T17:06:02Z",
         "thumbnail": "https://i.ytimg.com/vi/S5DdufElVSU/maxresdefault.jpg",
         "views": "36836"
        },
        {
         "title": "HOW TO BECOME ALPHA [1] Japan MP Min-Maxing - Hearts of Iron IV",
         "date": "2018-11-24T18:03:25Z",
         "thumbnail": "https://i.ytimg.com/vi/wv4KYmtRufo/maxresdefault.jpg",
         "views": "74152"
        },
        {
         "title": "I'M NO LONGER LIVING I'M JUST SURVIVING MARS - Surviving Mars",
         "date": "2018-11-22T19:03:09Z",
         "thumbnail": "https://i.ytimg.com/vi/a19u6M5uOYo/maxresdefault.jpg",
         "views": "3378"
        },
        {
         "title": "WHAT DO THE BUTTONS MEAN? - Dev Diary - Hearts of Iron IV",
         "date": "2018-11-22T14:32:12Z",
         "thumbnail": "https://i.ytimg.com/vi/aFMehuuUaOk/maxresdefault.jpg",
         "views": "7875"
        },
        {
         "title": "HOW NOT TO PLAY CRUSADER KINGS 2 - FT. Aldrahill - Crusader Kings II",
         "date": "2018-11-20T18:05:29Z",
         "thumbnail": "https://i.ytimg.com/vi/EdekGmJYm_8/maxresdefault.jpg",
         "views": "3952"
        },
        {
         "title": "Super European Union SUPERCUT - Hearts of Iron IV",
         "date": "2018-11-18T20:00:51Z",
         "thumbnail": "https://i.ytimg.com/vi/9wWO3E6vvMM/maxresdefault.jpg",
         "views": "10635"
        },
        {
         "title": "THICC DADDY IS HAPPY [7] Kaiserreich Russia - Hearts of Iron IV",
         "date": "2018-11-17T20:32:28Z",
         "thumbnail": "https://i.ytimg.com/vi/9ait74cU8fc/maxresdefault.jpg",
         "views": "18961"
        },
        {
         "title": "GERMAN SANDWICH [6] Kaiserreich Russia - Hearts of Iron IV",
         "date": "2018-11-16T22:31:39Z",
         "thumbnail": "https://i.ytimg.com/vi/ytBi1uku9dU/maxresdefault.jpg",
         "views": "17246"
        },
        {
         "title": "EAST VS WEST [5] Kaiserreich Russia - Hearts of Iron IV",
         "date": "2018-11-15T20:08:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Iihlq2Na0Xc/maxresdefault.jpg",
         "views": "18831"
        },
        {
         "title": "HOW DID THIS HAPPEN??? [4] Kaiserreich Russia - Hearts of Iron IV",
         "date": "2018-11-14T20:04:37Z",
         "thumbnail": "https://i.ytimg.com/vi/25-odaDwSB8/maxresdefault.jpg",
         "views": "20837"
        },
        {
         "title": "LIMITS??? - Dev Diary - Hearts of Iron IV",
         "date": "2018-11-14T16:24:40Z",
         "thumbnail": "https://i.ytimg.com/vi/ALMgVwDNz7c/maxresdefault.jpg",
         "views": "13399"
        },
        {
         "title": "WINTERWAR 2.0 [3] Kaiserreich Russia - Hearts of Iron IV",
         "date": "2018-11-13T18:49:12Z",
         "thumbnail": "https://i.ytimg.com/vi/7AZBGcIlaA8/maxresdefault.jpg",
         "views": "24941"
        },
        {
         "title": "MY PRECIOUS [2] Kaiserreich Russia - Hearts of Iron IV",
         "date": "2018-11-11T19:33:50Z",
         "thumbnail": "https://i.ytimg.com/vi/4IlXj8UOp4s/maxresdefault.jpg",
         "views": "28215"
        },
        {
         "title": "LIBTARD RUSSIA [1] (BLIND) Kaiserreich Russia - Hearts of Iron IV",
         "date": "2018-11-10T19:06:43Z",
         "thumbnail": "https://i.ytimg.com/vi/lPPsRgV5Djw/maxresdefault.jpg",
         "views": "43433"
        },
        {
         "title": "HISTORICAL ACCURATE FRANCE - Hearts of Iron IV",
         "date": "2018-11-07T20:13:11Z",
         "thumbnail": "https://i.ytimg.com/vi/62jthUM4cKk/maxresdefault.jpg",
         "views": "23293"
        },
        {
         "title": "THIS IS HUGE! - Dev Diary - Hearts of Iron IV",
         "date": "2018-11-07T16:56:15Z",
         "thumbnail": "https://i.ytimg.com/vi/WlFD3y1CaHE/maxresdefault.jpg",
         "views": "47748"
        },
        {
         "title": "NOCB [9] Super European Union - Hearts of Iron IV",
         "date": "2018-11-05T20:01:58Z",
         "thumbnail": "https://i.ytimg.com/vi/P38gnEjfD9o/maxresdefault.jpg",
         "views": "17090"
        },
        {
         "title": "IS THIS PERFECTION??? [8] Super European Union - Hearts of Iron IV",
         "date": "2018-11-04T20:01:49Z",
         "thumbnail": "https://i.ytimg.com/vi/hZC3g6a1UYc/maxresdefault.jpg",
         "views": "29622"
        },
        {
         "title": "HEAVEN EXISTS [7] Super European Union - Hearts of Iron IV",
         "date": "2018-11-03T20:02:50Z",
         "thumbnail": "https://i.ytimg.com/vi/ZDvbyO67FrM/maxresdefault.jpg",
         "views": "63479"
        },
        {
         "title": "CANADIAN MAGINOT [6] Super European Union - Hearts of Iron IV",
         "date": "2018-11-02T20:50:59Z",
         "thumbnail": "https://i.ytimg.com/vi/bo3NUtd4DsQ/maxresdefault.jpg",
         "views": "28638"
        },
        {
         "title": "UP AND ATOM! [5] Super European Union - Hearts of Iron IV",
         "date": "2018-11-01T20:09:51Z",
         "thumbnail": "https://i.ytimg.com/vi/8zbAnfMQCBE/maxresdefault.jpg",
         "views": "32305"
        },
        {
         "title": "COLLAB NO ONE ASKED FOR  - FT. Alex The Rambler! &amp; TommyKayLIVE - Hearts of Iron IV",
         "date": "2018-11-01T18:58:34Z",
         "thumbnail": "https://i.ytimg.com/vi/OIt1EwHOCQU/maxresdefault.jpg",
         "views": "19848"
        },
        {
         "title": "I'M GOING TO HELL FOR THIS [4] Super European Union - Hearts of Iron IV",
         "date": "2018-10-31T20:02:19Z",
         "thumbnail": "https://i.ytimg.com/vi/42p_VkFZVF0/maxresdefault.jpg",
         "views": "44636"
        },
        {
         "title": "NEW PUPPET - Dev Diary - Hearts of Iron IV",
         "date": "2018-10-31T15:42:23Z",
         "thumbnail": "https://i.ytimg.com/vi/Zl2kSacm7e4/maxresdefault.jpg",
         "views": "22285"
        },
        {
         "title": "NUMBER 1 [3] Super European Union - Hearts of Iron IV",
         "date": "2018-10-30T20:02:42Z",
         "thumbnail": "https://i.ytimg.com/vi/Br8Q2HLhfSg/maxresdefault.jpg",
         "views": "63920"
        },
        {
         "title": "THIS HAS NEVER HAPPENED BEFORE [2] Super European Union - Hearts of Iron IV",
         "date": "2018-10-29T20:03:45Z",
         "thumbnail": "https://i.ytimg.com/vi/f5ge5A1m3v8/maxresdefault.jpg",
         "views": "77950"
        },
        {
         "title": "STUPID EASY WAY OF FORMING THE EU [1] Super European Union - Hearts of Iron IV",
         "date": "2018-10-28T10:34:07Z",
         "thumbnail": "https://i.ytimg.com/vi/ZhIZjszYQJo/maxresdefault.jpg",
         "views": "206750"
        },
        {
         "title": "Super Ottoman Empire KASIERREICH SUPERCUT - Hearts of Iron IV",
         "date": "2018-10-25T20:00:26Z",
         "thumbnail": "https://i.ytimg.com/vi/Kwp49wq1Gpc/maxresdefault.jpg",
         "views": "10094"
        },
        {
         "title": "GUESS WHO'S BACK!!! - Dev Diary - Hearts of Iron IV",
         "date": "2018-10-24T18:37:44Z",
         "thumbnail": "https://i.ytimg.com/vi/8bpJV50jC4s/maxresdefault.jpg",
         "views": "16495"
        },
        {
         "title": "Super Ottoman Empire SUPERCUT - Hearts of Iron IV",
         "date": "2018-10-23T19:44:28Z",
         "thumbnail": "https://i.ytimg.com/vi/dkKcQ_3PnJs/maxresdefault.jpg",
         "views": "11096"
        },
        {
         "title": "EASY ONE UMPIRE ACHIEVEMENT! - Hearts of Iron IV",
         "date": "2018-10-20T12:58:22Z",
         "thumbnail": "https://i.ytimg.com/vi/_3FgpG5Xpj0/maxresdefault.jpg",
         "views": "22333"
        },
        {
         "title": "Super Holy Roman Empire SUPERCUT - Hearts of Iron IV",
         "date": "2018-10-19T19:38:21Z",
         "thumbnail": "https://i.ytimg.com/vi/_hmD2qI7uD8/maxresdefault.jpg",
         "views": "8961"
        },
        {
         "title": "NAVAL STRIKE FORCES - Dev Diary - Hearts of Iron IV",
         "date": "2018-10-18T12:37:58Z",
         "thumbnail": "https://i.ytimg.com/vi/Sf36Gkq3b0c/maxresdefault.jpg",
         "views": "14841"
        },
        {
         "title": "Super Xibei San Ma SUPERCUT - Hearts of Iron IV",
         "date": "2018-10-16T19:22:38Z",
         "thumbnail": "https://i.ytimg.com/vi/TmhWsF-CdW4/maxresdefault.jpg",
         "views": "10233"
        },
        {
         "title": "NEW MAPMODES - Dev Diary - Hearts of Iron IV",
         "date": "2018-10-12T11:48:02Z",
         "thumbnail": "https://i.ytimg.com/vi/6N9UyolzT4o/maxresdefault.jpg",
         "views": "16676"
        },
        {
         "title": "IMPOSSIBLE! [5] Super Holy Roman Empire - Hearts of Iron IV",
         "date": "2018-10-10T19:18:32Z",
         "thumbnail": "https://i.ytimg.com/vi/LoKD564NCJM/maxresdefault.jpg",
         "views": "50660"
        },
        {
         "title": "HOW TO GET THE SECRET EVENT [4] Super Holy Roman Empire - Hearts of Iron IV",
         "date": "2018-10-09T20:07:47Z",
         "thumbnail": "https://i.ytimg.com/vi/KU-Cp-cmxHY/maxresdefault.jpg",
         "views": "139207"
        },
        {
         "title": "MADE IN EUROPE [3] Super Holy Roman Empire - Hearts of Iron IV",
         "date": "2018-10-08T19:08:58Z",
         "thumbnail": "https://i.ytimg.com/vi/rzzqzONhmeI/maxresdefault.jpg",
         "views": "58249"
        },
        {
         "title": "HOW TO FORM THE HOLY ROMAN EMPIRE [2] Super Holy Roman Empire - Hearts of Iron IV",
         "date": "2018-10-07T17:54:42Z",
         "thumbnail": "https://i.ytimg.com/vi/YmF-IuSUPpY/maxresdefault.jpg",
         "views": "76621"
        },
        {
         "title": "THE MOST BROKEN EXPLOIT EVER [1] Super Holy Roman Empire - Hearts of Iron IV",
         "date": "2018-10-06T16:47:17Z",
         "thumbnail": "https://i.ytimg.com/vi/kv10ZnJhKT4/maxresdefault.jpg",
         "views": "110665"
        },
        {
         "title": "HOI4 LEAKS - BONUS Dev Diary - Hearts of Iron IV",
         "date": "2018-10-04T12:29:46Z",
         "thumbnail": "https://i.ytimg.com/vi/h_eZtMuSLkQ/maxresdefault.jpg",
         "views": "26687"
        },
        {
         "title": "HOW TO SPEED UP HOI4 LATE GAME [6] Super Ottoman Empire Kaiserreich  - Hearts of Iron IV",
         "date": "2018-10-03T19:02:03Z",
         "thumbnail": "https://i.ytimg.com/vi/1BjMX45PdrA/maxresdefault.jpg",
         "views": "36098"
        },
        {
         "title": "MEXICO - Dev Diary - Hearts of Iron IV",
         "date": "2018-10-03T17:43:20Z",
         "thumbnail": "https://i.ytimg.com/vi/AL9mSIzZA50/maxresdefault.jpg",
         "views": "17847"
        },
        {
         "title": "UNITED STATES IN EUROPE??? [5] Super Ottoman Empire Kaiserreich  - Hearts of Iron IV",
         "date": "2018-10-02T19:33:31Z",
         "thumbnail": "https://i.ytimg.com/vi/fVH-X0LKB6w/maxresdefault.jpg",
         "views": "30636"
        },
        {
         "title": "PERFECT TIMING! [4] Super Ottoman Empire Kaiserreich  - Hearts of Iron IV",
         "date": "2018-10-01T19:03:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Me5jGX4LPTc/maxresdefault.jpg",
         "views": "31274"
        },
        {
         "title": "HOW TO BAIT THE AI [3] Super Ottoman Empire Kaiserreich  - Hearts of Iron IV",
         "date": "2018-09-30T19:01:24Z",
         "thumbnail": "https://i.ytimg.com/vi/dLHp62T-PoQ/maxresdefault.jpg",
         "views": "33373"
        },
        {
         "title": "ACE SPAM EXPLOIT [2] Super Ottoman Empire Kaiserreich  - Hearts of Iron IV",
         "date": "2018-09-29T13:24:45Z",
         "thumbnail": "https://i.ytimg.com/vi/C5wAv3bs28Q/maxresdefault.jpg",
         "views": "35108"
        },
        {
         "title": "MIN-MAXING/SUPER OTTOMANS [1] Super Ottoman Empire Kaiserreich  - Hearts of Iron IV",
         "date": "2018-09-28T18:32:03Z",
         "thumbnail": "https://i.ytimg.com/vi/WBFtZHxaJJw/maxresdefault.jpg",
         "views": "64041"
        },
        {
         "title": "DUTCH COURAGE - Dev Diary - Hearts of Iron IV",
         "date": "2018-09-26T18:14:54Z",
         "thumbnail": "https://i.ytimg.com/vi/1x93d6Op-Cg/maxresdefault.jpg",
         "views": "28502"
        },
        {
         "title": "SUPER CHEESEY EXPLOIT [5] Super Xibei San Ma - Hearts of Iron IV",
         "date": "2018-09-24T18:27:48Z",
         "thumbnail": "https://i.ytimg.com/vi/_mTkABfaOU0/maxresdefault.jpg",
         "views": "46555"
        },
        {
         "title": "JAPAN PEACES OUT THE WRONG CHINA [4] Super Xibei San Ma - Hearts of Iron IV",
         "date": "2018-09-23T16:18:24Z",
         "thumbnail": "https://i.ytimg.com/vi/4YPvpE0ldFs/maxresdefault.jpg",
         "views": "48963"
        },
        {
         "title": "TANKS + HORSES TOGETHER??? [3] Super Xibei San Ma - Hearts of Iron IV",
         "date": "2018-09-22T18:40:05Z",
         "thumbnail": "https://i.ytimg.com/vi/KZd7CqkS3cA/maxresdefault.jpg",
         "views": "64835"
        },
        {
         "title": "UNLIMITED BORDER CONFLICT EXPLOIT [2] Super Xibei San Ma - Hearts of Iron IV",
         "date": "2018-09-21T19:27:07Z",
         "thumbnail": "https://i.ytimg.com/vi/F0c1nGEDMHc/maxresdefault.jpg",
         "views": "89459"
        },
        {
         "title": "BATTLECRY ACHIEVEMENT [1] Super Xibei San Ma - Hearts of Iron IV",
         "date": "2018-09-20T18:38:36Z",
         "thumbnail": "https://i.ytimg.com/vi/tg4K8q_uCDo/maxresdefault.jpg",
         "views": "147498"
        },
        {
         "title": "POLAND IN EXILE - Dev Diary - Hearts of Iron IV",
         "date": "2018-09-20T10:37:39Z",
         "thumbnail": "https://i.ytimg.com/vi/E0SGs7_JqhM/maxresdefault.jpg",
         "views": "31495"
        },
        {
         "title": "BOATY MCBOATFACE HERE AT LAST! - Dev Diary - Hearts of Iron IV",
         "date": "2018-09-12T18:13:48Z",
         "thumbnail": "https://i.ytimg.com/vi/7W0M10m9CFI/maxresdefault.jpg",
         "views": "17539"
        },
        {
         "title": "ADMIRALS ARE OP - Dev Diary - Hearts of Iron IV",
         "date": "2018-09-05T15:37:37Z",
         "thumbnail": "https://i.ytimg.com/vi/79CMnJdbDBA/maxresdefault.jpg",
         "views": "12693"
        },
        {
         "title": "SUPER CHINA 2 - MIN-MAX/GUIDE - Hearts of Iron IV",
         "date": "2018-08-30T15:07:56Z",
         "thumbnail": "https://i.ytimg.com/vi/iZgrmiCYatk/maxresdefault.jpg",
         "views": "403879"
        },
        {
         "title": "DEMOCRACY REWORKED - Dev Diary - Hearts of Iron IV",
         "date": "2018-08-29T17:06:08Z",
         "thumbnail": "https://i.ytimg.com/vi/pfayGpFmXVY/maxresdefault.jpg",
         "views": "39464"
        },
        {
         "title": "HOW TO MAKE SUPER AUSTRALIA - MIN-MAX/GUIDE - Hearts of Iron IV",
         "date": "2018-08-25T16:23:35Z",
         "thumbnail": "https://i.ytimg.com/vi/a9fcycns7z0/maxresdefault.jpg",
         "views": "169350"
        },
        {
         "title": "MINE, MINE, MINE, MINE - Dev Diary - Hearts of Iron IV",
         "date": "2018-08-22T20:12:50Z",
         "thumbnail": "https://i.ytimg.com/vi/DMQfNkIUOgI/maxresdefault.jpg",
         "views": "24563"
        },
        {
         "title": "CAN GREAT WAR TANKS ONLY WORK??? - 1000x Mod - Hearts of Iron IV",
         "date": "2018-08-21T16:20:36Z",
         "thumbnail": "https://i.ytimg.com/vi/Q7Peocpgu_c/maxresdefault.jpg",
         "views": "115424"
        },
        {
         "title": "POLAND-LITHUANIA IN 1936??? - Hearts of Iron IV",
         "date": "2018-08-18T15:07:13Z",
         "thumbnail": "https://i.ytimg.com/vi/Tb_FyUR9VjU/maxresdefault.jpg",
         "views": "39348"
        },
        {
         "title": "DON'T GET ON THE BOATS BUTTON - Dev Diary - Hearts of Iron IV",
         "date": "2018-08-16T16:11:46Z",
         "thumbnail": "https://i.ytimg.com/vi/mFCiuDr-BvI/maxresdefault.jpg",
         "views": "13462"
        },
        {
         "title": "HOW TO AVOID THE SPANISH CIVIL WAR (In Waking The Tiger) - Vanilla HOI4",
         "date": "2018-08-14T15:54:02Z",
         "thumbnail": "https://i.ytimg.com/vi/qPkzOZyiXq8/maxresdefault.jpg",
         "views": "79180"
        },
        {
         "title": "IMPERIAL FEDERATION??? - Dev Diary - Hearts of Iron IV",
         "date": "2018-08-11T12:26:11Z",
         "thumbnail": "https://i.ytimg.com/vi/KyJzeRCNMIs/maxresdefault.jpg",
         "views": "32406"
        },
        {
         "title": "HOW TO MAKE SUPER SPAIN - CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-08-08T13:48:29Z",
         "thumbnail": "https://i.ytimg.com/vi/HIJL1wYj9T4/maxresdefault.jpg",
         "views": "137549"
        },
        {
         "title": "HOW TO FORM OTTOMAN EMPIRE [2] Hearts of Iron IV",
         "date": "2018-08-05T16:19:53Z",
         "thumbnail": "https://i.ytimg.com/vi/yCsti8QvPJs/maxresdefault.jpg",
         "views": "38963"
        },
        {
         "title": "HOW TO FORM OTTOMAN EMPIRE [1] Hearts of Iron IV",
         "date": "2018-08-04T11:11:46Z",
         "thumbnail": "https://i.ytimg.com/vi/GKIJ6JkBusY/maxresdefault.jpg",
         "views": "78676"
        },
        {
         "title": "MULTIPLAYER 2.0??? - Dev Diary - Hearts of Iron IV",
         "date": "2018-08-02T11:30:32Z",
         "thumbnail": "https://i.ytimg.com/vi/DK8BEoXYiLY/maxresdefault.jpg",
         "views": "10811"
        },
        {
         "title": "SHOULD YOU PLAY BLACK ICE??? [11] GERMANY - Hearts of Iron IV",
         "date": "2018-08-01T19:06:47Z",
         "thumbnail": "https://i.ytimg.com/vi/5NIuK71JFyI/maxresdefault.jpg",
         "views": "8205"
        },
        {
         "title": "PURGE THE SPECIAL DIVISIONS [10] GERMANY - Hearts of Iron IV",
         "date": "2018-07-31T21:20:17Z",
         "thumbnail": "https://i.ytimg.com/vi/2kSy9L_qKKY/maxresdefault.jpg",
         "views": "6273"
        },
        {
         "title": "PARTISANS AND SUPPRESSION [9] GERMANY - Hearts of Iron IV",
         "date": "2018-07-30T19:01:31Z",
         "thumbnail": "https://i.ytimg.com/vi/wKiZ7EgwKZ0/maxresdefault.jpg",
         "views": "6090"
        },
        {
         "title": "ENCIRCLEMENT'S IN WINTER [8] GERMANY - Hearts of Iron IV",
         "date": "2018-07-29T19:00:47Z",
         "thumbnail": "https://i.ytimg.com/vi/VvagoXg6_UY/maxresdefault.jpg",
         "views": "7266"
        },
        {
         "title": "COMBAT CHANGES [7] GERMANY - Hearts of Iron IV",
         "date": "2018-07-28T21:12:04Z",
         "thumbnail": "https://i.ytimg.com/vi/pSEnTtzFf98/maxresdefault.jpg",
         "views": "8345"
        },
        {
         "title": "Top 10 Most Fun Latin American Countries In Hearts of Iron 4",
         "date": "2018-07-28T13:28:07Z",
         "thumbnail": "https://i.ytimg.com/vi/V2z75Wu59OY/maxresdefault.jpg",
         "views": "23075"
        },
        {
         "title": "CONSCRIPTION POLICIES [6] GERMANY - Hearts of Iron IV",
         "date": "2018-07-27T19:46:31Z",
         "thumbnail": "https://i.ytimg.com/vi/XH0eEbqLzG4/maxresdefault.jpg",
         "views": "8658"
        },
        {
         "title": "GARRISONS AND SUPPRESSION [5] GERMANY - Hearts of Iron IV",
         "date": "2018-07-26T19:00:59Z",
         "thumbnail": "https://i.ytimg.com/vi/dHF6mvZ_QTo/maxresdefault.jpg",
         "views": "11322"
        },
        {
         "title": "LAWS AND POLICIES [4] GERMANY - Hearts of Iron IV #heartsofiron4 #hoi4 #blackicemod",
         "date": "2018-07-25T18:16:06Z",
         "thumbnail": "https://i.ytimg.com/vi/TCteWS-O3U4/maxresdefault.jpg",
         "views": "11872"
        },
        {
         "title": "GENERALS AND TRAITS [3] GERMANY - Hearts of Iron IV",
         "date": "2018-07-24T19:36:49Z",
         "thumbnail": "https://i.ytimg.com/vi/K59q7fuNrQY/maxresdefault.jpg",
         "views": "13857"
        },
        {
         "title": "PRODUCTION AND RESEARCH [2] GERMANY - Hearts of Iron IV",
         "date": "2018-07-23T18:53:00Z",
         "thumbnail": "https://i.ytimg.com/vi/xE2lgYKWbwA/maxresdefault.jpg",
         "views": "21033"
        },
        {
         "title": "HOW TO MAKE SUPER PERU [2] CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-07-22T17:41:00Z",
         "thumbnail": "https://i.ytimg.com/vi/HhDzgY3Pq4I/maxresdefault.jpg",
         "views": "49790"
        },
        {
         "title": "HOW TO PLAY BLACK ICE MOD [1] GERMANY - Hearts of Iron IV",
         "date": "2018-07-22T14:01:54Z",
         "thumbnail": "https://i.ytimg.com/vi/Dsn_pUdFMsw/maxresdefault.jpg",
         "views": "75764"
        },
        {
         "title": "COMMENT SUGGESTIONS FOR FUTURE MIN MAX VIDEOS [7] Hearts of Iron IV",
         "date": "2018-07-21T15:12:07Z",
         "thumbnail": "https://i.ytimg.com/vi/Vfyatj5B-5E/maxresdefault.jpg",
         "views": "7549"
        },
        {
         "title": "HOW TO MAKE SUPER PERU [1] CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-07-21T13:03:32Z",
         "thumbnail": "https://i.ytimg.com/vi/lX-TMR7jpmk/maxresdefault.jpg",
         "views": "88237"
        },
        {
         "title": "GERMANY SENT TO SIBERIA [6] Hearts of Iron IV",
         "date": "2018-07-20T18:19:17Z",
         "thumbnail": "https://i.ytimg.com/vi/1yZyzifPbyc/maxresdefault.jpg",
         "views": "8363"
        },
        {
         "title": "2700 BREAKTHROUGH!!! [5] Hearts of Iron IV",
         "date": "2018-07-19T19:01:44Z",
         "thumbnail": "https://i.ytimg.com/vi/dpweoLkbyGg/maxresdefault.jpg",
         "views": "10957"
        },
        {
         "title": "SOUTH AFRICA VS SUPER ITALY [4] Hearts of Iron IV",
         "date": "2018-07-18T19:00:56Z",
         "thumbnail": "https://i.ytimg.com/vi/gGpsVFEyjz8/maxresdefault.jpg",
         "views": "13490"
        },
        {
         "title": "WHAT IS THIS? - Bonus Dev Diary - Hearts of Iron IV",
         "date": "2018-07-18T12:25:17Z",
         "thumbnail": "https://i.ytimg.com/vi/NdsWjocN-V4/maxresdefault.jpg",
         "views": "13995"
        },
        {
         "title": "HEAVY TANKS, TOO HEAVY [3] Hearts of Iron IV",
         "date": "2018-07-17T20:59:08Z",
         "thumbnail": "https://i.ytimg.com/vi/2TlHACs_uDM/maxresdefault.jpg",
         "views": "22669"
        },
        {
         "title": "AHISTORICAL STUFF! BREAKS THE GAME [2] Hearts of Iron IV",
         "date": "2018-07-16T19:02:15Z",
         "thumbnail": "https://i.ytimg.com/vi/n8ZF2gH1eXw/maxresdefault.jpg",
         "views": "33698"
        },
        {
         "title": "SOUTH AFRICA MIN-MAXING GUIDE [1] Hearts of Iron IV",
         "date": "2018-07-15T18:42:54Z",
         "thumbnail": "https://i.ytimg.com/vi/48XtMF0CCEg/maxresdefault.jpg",
         "views": "65614"
        },
        {
         "title": "HOW TO MAKE SUPER HUNGARY [ATTEMPT 2] CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-07-15T17:13:09Z",
         "thumbnail": "https://i.ytimg.com/vi/UQc8Iy_mB0o/maxresdefault.jpg",
         "views": "96477"
        },
        {
         "title": "HOW TO MAKE SUPER HUNGARY [ATTEMPT 1] CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-07-14T12:38:53Z",
         "thumbnail": "https://i.ytimg.com/vi/F00pRpig9BM/maxresdefault.jpg",
         "views": "205204"
        },
        {
         "title": "THE ANCESTORS ARE SMILING [7] Hearts of Iron IV",
         "date": "2018-07-12T19:00:41Z",
         "thumbnail": "https://i.ytimg.com/vi/oIw-qoAzDvc/maxresdefault.jpg",
         "views": "6880"
        },
        {
         "title": "THE GREATEST OVERRUN YOU WILL EVER SEE [6] Hearts of Iron IV",
         "date": "2018-07-11T19:01:56Z",
         "thumbnail": "https://i.ytimg.com/vi/y4knNDDRLOE/maxresdefault.jpg",
         "views": "7149"
        },
        {
         "title": "50+ NEW NATIONS!!! - Dev Diary - Hearts of Iron IV",
         "date": "2018-07-11T13:29:32Z",
         "thumbnail": "https://i.ytimg.com/vi/FQcsjggt-wA/maxresdefault.jpg",
         "views": "40095"
        },
        {
         "title": "VERY STRANGE COUP IN ROMANIA [5] Hearts of Iron IV",
         "date": "2018-07-10T19:00:37Z",
         "thumbnail": "https://i.ytimg.com/vi/67NcGK7Wj6M/maxresdefault.jpg",
         "views": "7602"
        },
        {
         "title": "INTO EUROPE [4] Hearts of Iron IV",
         "date": "2018-07-09T21:36:28Z",
         "thumbnail": "https://i.ytimg.com/vi/rzIWsniDHxE/maxresdefault.jpg",
         "views": "7915"
        },
        {
         "title": "GIMME FUEL GIMME FIRE GIMME THAT WHICH I DESIRE - Dev Diary - Hearts of Iron IV",
         "date": "2018-07-09T13:13:52Z",
         "thumbnail": "https://i.ytimg.com/vi/IujDn2KI5Rk/maxresdefault.jpg",
         "views": "18609"
        },
        {
         "title": "EAST TO BAGHDAD [3] Hearts of Iron IV",
         "date": "2018-07-08T20:01:22Z",
         "thumbnail": "https://i.ytimg.com/vi/9wRj3AX9UYQ/maxresdefault.jpg",
         "views": "9003"
        },
        {
         "title": "NO GREAT WALL [2] Hearts of Iron IV",
         "date": "2018-07-07T21:26:22Z",
         "thumbnail": "https://i.ytimg.com/vi/5RiCvXPzb3o/maxresdefault.jpg",
         "views": "11698"
        },
        {
         "title": "WHAT IF MONGOLIA EMPIRE EXISTED TODAY? [1] Hearts of Iron IV",
         "date": "2018-07-06T18:50:12Z",
         "thumbnail": "https://i.ytimg.com/vi/LcHEs8Mzl0U/maxresdefault.jpg",
         "views": "20319"
        },
        {
         "title": "THE HOME OF MARX??? - Dev Diary - Hearts of Iron IV",
         "date": "2018-07-05T14:20:25Z",
         "thumbnail": "https://i.ytimg.com/vi/3DchkQUlNRI/maxresdefault.jpg",
         "views": "42165"
        },
        {
         "title": "VAULT NATION [10] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-07-03T18:59:06Z",
         "thumbnail": "https://i.ytimg.com/vi/2gegK-FPAks/maxresdefault.jpg",
         "views": "9817"
        },
        {
         "title": "MESSIEST FRONT LINES EVER [9] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-07-02T19:04:14Z",
         "thumbnail": "https://i.ytimg.com/vi/rW2TU4WbjnQ/maxresdefault.jpg",
         "views": "8684"
        },
        {
         "title": "APC OR ROBOT [8] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-07-01T18:35:56Z",
         "thumbnail": "https://i.ytimg.com/vi/p8oSX48lgj8/maxresdefault.jpg",
         "views": "9507"
        },
        {
         "title": "THE GRAND PLAN [7] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-06-30T18:58:53Z",
         "thumbnail": "https://i.ytimg.com/vi/8NR1rxkuKGU/maxresdefault.jpg",
         "views": "11344"
        },
        {
         "title": "POWER ARMOUR VS TANKS [6] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-06-29T19:01:16Z",
         "thumbnail": "https://i.ytimg.com/vi/3RIZB27HA_E/maxresdefault.jpg",
         "views": "14875"
        },
        {
         "title": "ITS TIME FOR HOOVER DAM [5] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-06-28T18:58:38Z",
         "thumbnail": "https://i.ytimg.com/vi/h-FV7FskTsg/maxresdefault.jpg",
         "views": "16585"
        },
        {
         "title": "MASSIVE CIVIL WAR [4] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-06-27T19:11:15Z",
         "thumbnail": "https://i.ytimg.com/vi/p5zAlr-P5O4/maxresdefault.jpg",
         "views": "19745"
        },
        {
         "title": "WAR ON 3 FRONTS [3] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-06-26T18:58:57Z",
         "thumbnail": "https://i.ytimg.com/vi/oY9y6kbe5E0/maxresdefault.jpg",
         "views": "20594"
        },
        {
         "title": "THE SECRET TO EXPANSION! [2] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-06-25T18:48:44Z",
         "thumbnail": "https://i.ytimg.com/vi/YdXL7B9xSyg/maxresdefault.jpg",
         "views": "28675"
        },
        {
         "title": "VAULT CITY WORLD CONQUEST! [1] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-06-24T17:37:33Z",
         "thumbnail": "https://i.ytimg.com/vi/yIr9VA6fs4c/maxresdefault.jpg",
         "views": "54458"
        },
        {
         "title": "HOW TO MAKE SUPER ROMANIA - CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-06-23T13:28:37Z",
         "thumbnail": "https://i.ytimg.com/vi/EY1tLiLSV5g/maxresdefault.jpg",
         "views": "179296"
        },
        {
         "title": "THIS IS MY 6TH ATTEMPT AT THIS [12] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-19T19:28:29Z",
         "thumbnail": "https://i.ytimg.com/vi/F5vz3JATy2A/maxresdefault.jpg",
         "views": "8746"
        },
        {
         "title": "6.8 MILLION MANPOWER [11] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-18T18:33:44Z",
         "thumbnail": "https://i.ytimg.com/vi/Xuju1ofSw8I/maxresdefault.jpg",
         "views": "8007"
        },
        {
         "title": "ENCIRCLEMENT PRON [10] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-17T18:20:21Z",
         "thumbnail": "https://i.ytimg.com/vi/JtuNhy9IfJY/maxresdefault.jpg",
         "views": "6286"
        },
        {
         "title": "HUGE FALLBACK [9] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-16T18:43:13Z",
         "thumbnail": "https://i.ytimg.com/vi/vYq_FZDcbME/maxresdefault.jpg",
         "views": "5801"
        },
        {
         "title": "HOW TO MAKE SUPER POLAND - CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-06-16T12:46:27Z",
         "thumbnail": "https://i.ytimg.com/vi/QjdL7KH0NDg/maxresdefault.jpg",
         "views": "275644"
        },
        {
         "title": "A CHANCE OF A LIFETIME [8] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-15T18:58:33Z",
         "thumbnail": "https://i.ytimg.com/vi/WJlUPfBcjA0/maxresdefault.jpg",
         "views": "5857"
        },
        {
         "title": "ROMANIA SAYS NOPE [7] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-14T18:58:54Z",
         "thumbnail": "https://i.ytimg.com/vi/bh9dQ0Ko0e4/maxresdefault.jpg",
         "views": "7285"
        },
        {
         "title": "BEST DEFENSIVE GENERAL EVER [6] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-13T18:58:52Z",
         "thumbnail": "https://i.ytimg.com/vi/jGy0x8Nq8LU/maxresdefault.jpg",
         "views": "7924"
        },
        {
         "title": "THIS IS A SUPER POLAND [5] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-12T18:59:42Z",
         "thumbnail": "https://i.ytimg.com/vi/2F0yX5fRHgA/maxresdefault.jpg",
         "views": "9185"
        },
        {
         "title": "POLAND VS RUSSIA [4] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-11T18:54:18Z",
         "thumbnail": "https://i.ytimg.com/vi/_WBvJxOdWHs/maxresdefault.jpg",
         "views": "10181"
        },
        {
         "title": "DAWN OF THE SUPER CENTRAL POWER [3] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-10T17:23:42Z",
         "thumbnail": "https://i.ytimg.com/vi/Q_KKY2-D42E/maxresdefault.jpg",
         "views": "12165"
        },
        {
         "title": "SUPER EASTERN FACTIONS FORM [2] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-09T18:46:53Z",
         "thumbnail": "https://i.ytimg.com/vi/dMLGtmYtjLo/maxresdefault.jpg",
         "views": "14345"
        },
        {
         "title": "HOW TO MAKE SUPER GERMANY PART 2 - CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-06-09T13:43:51Z",
         "thumbnail": "https://i.ytimg.com/vi/Tx0vSH1gKRs/maxresdefault.jpg",
         "views": "147282"
        },
        {
         "title": "IMPOSSIBLE CHALLENGE [1] Hearts of Iron 4 (HOI4)",
         "date": "2018-06-08T18:38:09Z",
         "thumbnail": "https://i.ytimg.com/vi/kV-FZuGZues/maxresdefault.jpg",
         "views": "36141"
        },
        {
         "title": "END + TIME LAPSE [12] Hearts of Iron IV",
         "date": "2018-06-05T17:23:46Z",
         "thumbnail": "https://i.ytimg.com/vi/dbKENE7yQ98/maxresdefault.jpg",
         "views": "15140"
        },
        {
         "title": "How To Play NOBUNAGA’S AMBITION: TAISHI",
         "date": "2018-06-04T16:05:44Z",
         "thumbnail": "https://i.ytimg.com/vi/lrg-LWLD1OE/maxresdefault.jpg",
         "views": "40864"
        },
        {
         "title": "STRANGE AUSSIE TEMPLATE [11] Hearts of Iron IV",
         "date": "2018-06-03T18:58:54Z",
         "thumbnail": "https://i.ytimg.com/vi/CBpF2H4t8R4/maxresdefault.jpg",
         "views": "16858"
        },
        {
         "title": "HOW TO MAKE SUPER GERMANY - CHEAT/EXPLOIT - Hearts of Iron IV",
         "date": "2018-06-03T13:01:26Z",
         "thumbnail": "https://i.ytimg.com/vi/GooXuMskQp8/maxresdefault.jpg",
         "views": "387001"
        },
        {
         "title": "USA WAKES UP AND STARTS TAKING ISLANDS [10] Hearts of Iron IV",
         "date": "2018-06-02T18:56:28Z",
         "thumbnail": "https://i.ytimg.com/vi/U8NqLX1vTGI/maxresdefault.jpg",
         "views": "17729"
        },
        {
         "title": "THE NEW COPY AND PASTE STRATEGY [9] Hearts of Iron IV",
         "date": "2018-06-01T18:44:32Z",
         "thumbnail": "https://i.ytimg.com/vi/wcmlHfgIGew/maxresdefault.jpg",
         "views": "15262"
        },
        {
         "title": "NEW OP TACTIC [8] Hearts of Iron IV",
         "date": "2018-05-31T18:58:48Z",
         "thumbnail": "https://i.ytimg.com/vi/kp1jCOB4Gts/maxresdefault.jpg",
         "views": "17334"
        },
        {
         "title": "SUCCESS ON LAND FAILURE AT SEA [7] Hearts of Iron IV",
         "date": "2018-05-30T18:52:53Z",
         "thumbnail": "https://i.ytimg.com/vi/9N5zmb-hrQI/maxresdefault.jpg",
         "views": "20028"
        },
        {
         "title": "NAVAL AND AIR FORCE DEVELOPMENT [6] Hearts of Iron IV",
         "date": "2018-05-29T16:30:40Z",
         "thumbnail": "https://i.ytimg.com/vi/IQnWAoy73Sk/maxresdefault.jpg",
         "views": "22231"
        },
        {
         "title": "MANCHU DEMANDS WE BECOME THEIR PUPPET [5] Hearts of Iron IV",
         "date": "2018-05-27T18:29:26Z",
         "thumbnail": "https://i.ytimg.com/vi/7XIknC7AVWY/maxresdefault.jpg",
         "views": "28956"
        },
        {
         "title": "PICK THEM OFF ONE BY ONE [4] Hearts of Iron IV",
         "date": "2018-05-26T18:47:44Z",
         "thumbnail": "https://i.ytimg.com/vi/Kj52eLA_Mm0/maxresdefault.jpg",
         "views": "27287"
        },
        {
         "title": "5000+ EQUIPMENT CAPTURED [3] Hearts of Iron IV",
         "date": "2018-05-25T19:07:15Z",
         "thumbnail": "https://i.ytimg.com/vi/Fe3fvJzEhWA/maxresdefault.jpg",
         "views": "32944"
        },
        {
         "title": "INSANE ENCIRCLEMENTS [2] Hearts of Iron IV",
         "date": "2018-05-24T19:07:59Z",
         "thumbnail": "https://i.ytimg.com/vi/Z4uOCxSrEQs/maxresdefault.jpg",
         "views": "46014"
        },
        {
         "title": "HISTORICAL JAPAN [1] Hearts of Iron IV",
         "date": "2018-05-23T18:58:46Z",
         "thumbnail": "https://i.ytimg.com/vi/7cdvaLkgA6E/maxresdefault.jpg",
         "views": "83930"
        },
        {
         "title": "UNBELIEVABLE VICTORY! (NOT) [8] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-05-22T20:14:52Z",
         "thumbnail": "https://i.ytimg.com/vi/eKtprRzXJmA/maxresdefault.jpg",
         "views": "6686"
        },
        {
         "title": "FALLOUT WORLD WAR [7] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-05-21T18:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/h6Nl3wUZTyg/maxresdefault.jpg",
         "views": "8492"
        },
        {
         "title": "BROTHERHOOD VS BROTHERHOOD [6] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-05-20T18:42:36Z",
         "thumbnail": "https://i.ytimg.com/vi/vCglAVfV35A/maxresdefault.jpg",
         "views": "9168"
        },
        {
         "title": "ALMOST LOST MY WHOLE ARMY [5] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-05-19T19:19:21Z",
         "thumbnail": "https://i.ytimg.com/vi/TFC2RZq62eY/maxresdefault.jpg",
         "views": "10215"
        },
        {
         "title": "BUILD THE WALL! [4] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-05-18T17:59:48Z",
         "thumbnail": "https://i.ytimg.com/vi/HpLUVhmlx1E/maxresdefault.jpg",
         "views": "12627"
        },
        {
         "title": "THE BROTHERHOOD OF TROLLS [3] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-05-17T20:12:28Z",
         "thumbnail": "https://i.ytimg.com/vi/0Zc_DMIUJWE/maxresdefault.jpg",
         "views": "17195"
        },
        {
         "title": "I HAVE A JUSTIFICATION FOR WAR ON MYSELF [2] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-05-16T18:58:45Z",
         "thumbnail": "https://i.ytimg.com/vi/jm1o_PrvRk0/maxresdefault.jpg",
         "views": "23304"
        },
        {
         "title": "SUPER MUTANT TROLLS [1] Old World Blues Mod - Hearts of Iron IV",
         "date": "2018-05-15T19:04:40Z",
         "thumbnail": "https://i.ytimg.com/vi/D0p86LYZpPo/maxresdefault.jpg",
         "views": "40438"
        },
        {
         "title": "ROMANIA WON'T GIVE UP [9] Hearts of Iron IV",
         "date": "2018-05-14T18:56:53Z",
         "thumbnail": "https://i.ytimg.com/vi/CSWRtbsajbA/maxresdefault.jpg",
         "views": "14855"
        },
        {
         "title": "CROATIAN - NEW ZEALAND WAR [8] Hearts of Iron IV",
         "date": "2018-05-13T16:50:35Z",
         "thumbnail": "https://i.ytimg.com/vi/ZnOD0zAxjKc/maxresdefault.jpg",
         "views": "15889"
        },
        {
         "title": "Hearts Of Iron 4: MULTIPLAYER REINVENTED!",
         "date": "2018-05-13T13:35:28Z",
         "thumbnail": "https://i.ytimg.com/vi/_i4BWHmAGTA/maxresdefault.jpg",
         "views": "9468"
        },
        {
         "title": "5K TANKS DESTROYED [7] Hearts of Iron IV",
         "date": "2018-05-12T18:58:47Z",
         "thumbnail": "https://i.ytimg.com/vi/au9g7jF_glM/maxresdefault.jpg",
         "views": "18080"
        },
        {
         "title": "HOW TO SPEED UP HEARTS OF IRON IV - HOI4 CPU Benchmarks",
         "date": "2018-05-12T11:52:45Z",
         "thumbnail": "https://i.ytimg.com/vi/umjmoid5S8A/maxresdefault.jpg",
         "views": "83411"
        },
        {
         "title": "GERMAN GOD DIVISIONS [6] Hearts of Iron IV",
         "date": "2018-05-11T19:44:37Z",
         "thumbnail": "https://i.ytimg.com/vi/uTSz909AVHQ/maxresdefault.jpg",
         "views": "23629"
        },
        {
         "title": "40 WIDTH HEAVY TANKS [5] Hearts of Iron IV",
         "date": "2018-05-10T18:54:54Z",
         "thumbnail": "https://i.ytimg.com/vi/UKzbXATr77s/maxresdefault.jpg",
         "views": "31758"
        },
        {
         "title": "EMERGENCY FACTORY CONVERSION [4] Hearts of Iron IV",
         "date": "2018-05-09T20:20:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Fj35UF3RfPU/maxresdefault.jpg",
         "views": "29075"
        },
        {
         "title": "THE ONE WHERE IT WAS ALDRAHILLS FAULT [7] Hearts of Iron IV",
         "date": "2018-05-09T18:59:01Z",
         "thumbnail": "https://i.ytimg.com/vi/7aNuyfaJFms/maxresdefault.jpg",
         "views": "3758"
        },
        {
         "title": "POLAND SURVIVES, WHAT??? [3] Hearts of Iron IV",
         "date": "2018-05-08T19:00:59Z",
         "thumbnail": "https://i.ytimg.com/vi/eXcYMDypDjE/maxresdefault.jpg",
         "views": "35968"
        },
        {
         "title": "NEW GARRISON EXPLOIT FOUND??? [2] Hearts of Iron IV",
         "date": "2018-05-07T15:37:39Z",
         "thumbnail": "https://i.ytimg.com/vi/B4q_oi3s9v0/maxresdefault.jpg",
         "views": "42210"
        },
        {
         "title": "ENEMIES WITHIN AND WITHOUT [5] Hearts of Iron IV",
         "date": "2018-05-07T14:28:55Z",
         "thumbnail": "https://i.ytimg.com/vi/Ws-gPYBtTq0/maxresdefault.jpg",
         "views": "3540"
        },
        {
         "title": "FRANCE MIN-MAXING GUIDE [1] Hearts of Iron IV",
         "date": "2018-05-06T17:09:56Z",
         "thumbnail": "https://i.ytimg.com/vi/EI6Doe8kPio/maxresdefault.jpg",
         "views": "92844"
        },
        {
         "title": "STALIN WANTS A NAVY!!! [3] Hearts of Iron IV",
         "date": "2018-05-05T21:15:08Z",
         "thumbnail": "https://i.ytimg.com/vi/lkqbF1uqlUY/maxresdefault.jpg",
         "views": "8056"
        },
        {
         "title": "STALIN AND TROTSKY ARE IN LOVE! [1] Hearts of Iron IV",
         "date": "2018-05-03T19:19:02Z",
         "thumbnail": "https://i.ytimg.com/vi/4H9WONVVmEc/maxresdefault.jpg",
         "views": "13914"
        },
        {
         "title": "THE IMPOSSIBLE IS POSSIBLE(NOT REALLY) [9] Hearts of Iron IV",
         "date": "2018-05-02T20:44:23Z",
         "thumbnail": "https://i.ytimg.com/vi/TECaEvVAAy4/maxresdefault.jpg",
         "views": "8191"
        },
        {
         "title": "2 TRIPS TO JAPAN IN 1 YEAR!!! [8] Hearts of Iron IV",
         "date": "2018-05-01T19:04:17Z",
         "thumbnail": "https://i.ytimg.com/vi/BdqzT8P4pw0/maxresdefault.jpg",
         "views": "6420"
        },
        {
         "title": "CARRIER FLEET TAKEN OUT IN 1 BATTLE [7] Hearts of Iron IV",
         "date": "2018-04-30T18:44:08Z",
         "thumbnail": "https://i.ytimg.com/vi/zi7liskNafQ/maxresdefault.jpg",
         "views": "8343"
        },
        {
         "title": "ULTIMATE MOUNTAINEER DIVISION [6] Hearts of Iron IV",
         "date": "2018-04-29T16:40:56Z",
         "thumbnail": "https://i.ytimg.com/vi/5gY2WPcB170/maxresdefault.jpg",
         "views": "12081"
        },
        {
         "title": "AI FALLS A SLEEP THEN WAKES UP [5] Hearts of Iron IV",
         "date": "2018-04-28T16:41:03Z",
         "thumbnail": "https://i.ytimg.com/vi/GG1Zwy1wlJs/maxresdefault.jpg",
         "views": "10017"
        },
        {
         "title": "LOL!!! HUNGARY RELOCATES TO THE FAR EAST [4] Hearts of Iron IV",
         "date": "2018-04-27T18:50:50Z",
         "thumbnail": "https://i.ytimg.com/vi/9yQMjCYpCzk/maxresdefault.jpg",
         "views": "12689"
        },
        {
         "title": "FEEDBACKGAMING MAKES A CUSTOM MAP [0] Hearts of Iron IV",
         "date": "2018-04-27T13:21:54Z",
         "thumbnail": "https://i.ytimg.com/vi/bfF5_nxmGbE/maxresdefault.jpg",
         "views": "105689"
        },
        {
         "title": "CHEESIEST EXPLOIT EVER!!! [3] Hearts of Iron IV",
         "date": "2018-04-26T18:32:51Z",
         "thumbnail": "https://i.ytimg.com/vi/CFCQCRnKOII/maxresdefault.jpg",
         "views": "13923"
        },
        {
         "title": "DOUBLE TROUBLE! ITALIANS INTERVENE! [2] Hearts of Iron IV",
         "date": "2018-04-25T18:58:38Z",
         "thumbnail": "https://i.ytimg.com/vi/ITf1yPYGVec/maxresdefault.jpg",
         "views": "15583"
        },
        {
         "title": "GERMAN-FRANCO-UNION DREAMS [1] Hearts of Iron IV",
         "date": "2018-04-24T16:36:10Z",
         "thumbnail": "https://i.ytimg.com/vi/16W6KfsyEaA/maxresdefault.jpg",
         "views": "27879"
        },
        {
         "title": "UBER HORSE CHARGE [11] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-21T18:27:01Z",
         "thumbnail": "https://i.ytimg.com/vi/o_BF3Y-_VVE/maxresdefault.jpg",
         "views": "5628"
        },
        {
         "title": "MUTINIES AND STRIKES [10] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-20T18:58:51Z",
         "thumbnail": "https://i.ytimg.com/vi/BwTTSlVwcxc/maxresdefault.jpg",
         "views": "4213"
        },
        {
         "title": "KOREA UNITED UNDER KIM IL SUNG [9] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-19T18:35:35Z",
         "thumbnail": "https://i.ytimg.com/vi/EYQ4PxvsG7I/maxresdefault.jpg",
         "views": "5218"
        },
        {
         "title": "TROUBLE IN SOUTH AMERICA [8] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-18T18:56:46Z",
         "thumbnail": "https://i.ytimg.com/vi/UadB0qFT3mc/maxresdefault.jpg",
         "views": "5003"
        },
        {
         "title": "GO FOR JAPAN FIRST? [7] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-17T18:56:21Z",
         "thumbnail": "https://i.ytimg.com/vi/yRK3uOT3r_0/maxresdefault.jpg",
         "views": "5865"
        },
        {
         "title": "A FEW MOMENTS LATER [6] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-16T18:58:49Z",
         "thumbnail": "https://i.ytimg.com/vi/VVGSt_hS-E0/maxresdefault.jpg",
         "views": "7091"
        },
        {
         "title": "THE GIANTS MEET [5] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-15T18:45:01Z",
         "thumbnail": "https://i.ytimg.com/vi/apbsNbrch7Y/maxresdefault.jpg",
         "views": "8354"
        },
        {
         "title": "100,000 EQUIPMENT LEND LEASE [4] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-14T18:20:19Z",
         "thumbnail": "https://i.ytimg.com/vi/f50xswu8-vg/maxresdefault.jpg",
         "views": "11078"
        },
        {
         "title": "GLORIOUS CHARGE!!! [3] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-13T18:59:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5g8IhQUv2rM/maxresdefault.jpg",
         "views": "9820"
        },
        {
         "title": "FORM THE HORSE WALL [2] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-12T18:59:12Z",
         "thumbnail": "https://i.ytimg.com/vi/NMHg7tVKkdc/maxresdefault.jpg",
         "views": "11432"
        },
        {
         "title": "SWORDS ONLY VS THE JAPANESE [1] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-11T18:58:57Z",
         "thumbnail": "https://i.ytimg.com/vi/Xs_hiYMIzWA/maxresdefault.jpg",
         "views": "20874"
        },
        {
         "title": "LETS BRING THEM DEMOCRACY [11] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-10T19:59:32Z",
         "thumbnail": "https://i.ytimg.com/vi/oKowz4PQMAI/maxresdefault.jpg",
         "views": "6676"
        },
        {
         "title": "THE SOVIETS ARE BACK! [8] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-10T19:03:55Z",
         "thumbnail": "https://i.ytimg.com/vi/DOI_gGjHy3M/maxresdefault.jpg",
         "views": "4200"
        },
        {
         "title": "OVER 1000 DEFENCE GERMAN DIVISIONS [10] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-09T19:58:21Z",
         "thumbnail": "https://i.ytimg.com/vi/IJkwkauUyUs/maxresdefault.jpg",
         "views": "7566"
        },
        {
         "title": "DISASTER! WAY TOO MANY LOSSES [7] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-09T18:59:05Z",
         "thumbnail": "https://i.ytimg.com/vi/xCUHd1pomzo/maxresdefault.jpg",
         "views": "3844"
        },
        {
         "title": "LETS LOOK AT THE CASUALTIES SCREEN [9] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-08T20:51:21Z",
         "thumbnail": "https://i.ytimg.com/vi/39E7gz_H8sI/maxresdefault.jpg",
         "views": "7570"
        },
        {
         "title": "WALTER THE GOD [6] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-08T19:39:13Z",
         "thumbnail": "https://i.ytimg.com/vi/niVsL3V4Bkg/maxresdefault.jpg",
         "views": "4125"
        },
        {
         "title": "WHAT!!! THE GREATER GERMAN REICH!!! [8] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-07T20:01:21Z",
         "thumbnail": "https://i.ytimg.com/vi/I49jJdd4iAI/maxresdefault.jpg",
         "views": "7146"
        },
        {
         "title": "AI ACTING STRANGE [5] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-07T18:59:58Z",
         "thumbnail": "https://i.ytimg.com/vi/Tt6xSvla60A/maxresdefault.jpg",
         "views": "3799"
        },
        {
         "title": "THE ONE WHERE SPAIN CAPITULATES TWICE [7] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-06T21:17:18Z",
         "thumbnail": "https://i.ytimg.com/vi/RVM29W95ASI/maxresdefault.jpg",
         "views": "6347"
        },
        {
         "title": "INSANELY LUCKY!!! [4] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-06T19:14:53Z",
         "thumbnail": "https://i.ytimg.com/vi/IWVBsFTC6eo/maxresdefault.jpg",
         "views": "4907"
        },
        {
         "title": "LOL!!! FRANCE JOINS ITALY [3] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-05T20:05:46Z",
         "thumbnail": "https://i.ytimg.com/vi/IpMKy0wl-FI/maxresdefault.jpg",
         "views": "6672"
        },
        {
         "title": "THE CHINESE CHINESE WAR [6] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-05T19:06:09Z",
         "thumbnail": "https://i.ytimg.com/vi/2SVUEwygntc/maxresdefault.jpg",
         "views": "6468"
        },
        {
         "title": "9 ATTACK GENERAL!!! [5] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-04T20:15:42Z",
         "thumbnail": "https://i.ytimg.com/vi/7GH1xwSDMUI/maxresdefault.jpg",
         "views": "8275"
        },
        {
         "title": "THROUGH THE ARDENNES??? [2] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-04T19:14:27Z",
         "thumbnail": "https://i.ytimg.com/vi/dBVFYQ9rFww/maxresdefault.jpg",
         "views": "7579"
        },
        {
         "title": "MEFO REBALANCED AND TANK MODELS - Dev Diary - Hearts of Iron IV",
         "date": "2018-04-04T17:34:25Z",
         "thumbnail": "https://i.ytimg.com/vi/tflu2iI0tF8/maxresdefault.jpg",
         "views": "10424"
        },
        {
         "title": "NO AIR CHALLENGE [1] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-03T20:01:09Z",
         "thumbnail": "https://i.ytimg.com/vi/eXYCLFUtAZQ/maxresdefault.jpg",
         "views": "11568"
        },
        {
         "title": "PERFECT ENCIRCLEMENTS IN ITALY [4] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-03T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/bVWWsZsUzRs/maxresdefault.jpg",
         "views": "10186"
        },
        {
         "title": "LOL! SOVIET UNION FINDS A NEW HOME [10] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-02T19:59:24Z",
         "thumbnail": "https://i.ytimg.com/vi/mRra1GsbUJs/maxresdefault.jpg",
         "views": "6705"
        },
        {
         "title": "TEST THE TROOPS IN ITALY [3] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-02T18:59:49Z",
         "thumbnail": "https://i.ytimg.com/vi/5OI8_R-YYLU/maxresdefault.jpg",
         "views": "14818"
        },
        {
         "title": "TIME FOR BOOTS ON THE GROUND??? [9] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-01T15:45:40Z",
         "thumbnail": "https://i.ytimg.com/vi/AXp2dWOB5Zg/maxresdefault.jpg",
         "views": "5355"
        },
        {
         "title": "USA SAYS STOP!!! [2] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-04-01T13:42:47Z",
         "thumbnail": "https://i.ytimg.com/vi/GfNF0PrFAfo/maxresdefault.jpg",
         "views": "22610"
        },
        {
         "title": "EXPOSED! AI USES EXPLOITS! [8] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-31T17:24:41Z",
         "thumbnail": "https://i.ytimg.com/vi/BQLICpF5xmg/maxresdefault.jpg",
         "views": "7377"
        },
        {
         "title": "HOW TO FORM THE UNITED STATES OF CENTRAL AMERICA [1] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-31T15:08:28Z",
         "thumbnail": "https://i.ytimg.com/vi/Cv4kUNlAdbk/maxresdefault.jpg",
         "views": "33365"
        },
        {
         "title": "IS THIS A FAIL??? [7] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-30T18:59:42Z",
         "thumbnail": "https://i.ytimg.com/vi/RlFTp1zSjOQ/maxresdefault.jpg",
         "views": "6178"
        },
        {
         "title": "HEAVEN IS A PLACE ON EARTH [11] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-30T17:10:49Z",
         "thumbnail": "https://i.ytimg.com/vi/RjkkU7Wcv4A/maxresdefault.jpg",
         "views": "15957"
        },
        {
         "title": "AA BUFFED, AIR NERFED AND INSANE MODDING TOOLS - Dev Diary - Hearts of Iron IV",
         "date": "2018-03-30T13:58:01Z",
         "thumbnail": "https://i.ytimg.com/vi/nqwvanvW084/maxresdefault.jpg",
         "views": "9564"
        },
        {
         "title": "18 MILLION SOVIET LOSSES [6] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-29T20:32:42Z",
         "thumbnail": "https://i.ytimg.com/vi/h1bAH2-YEdA/maxresdefault.jpg",
         "views": "9687"
        },
        {
         "title": "120 CONVOYS SUNK [10] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-29T18:59:48Z",
         "thumbnail": "https://i.ytimg.com/vi/VmY7VIHM11o/maxresdefault.jpg",
         "views": "13114"
        },
        {
         "title": "OP BOMBING TACTICS [5] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-28T22:38:17Z",
         "thumbnail": "https://i.ytimg.com/vi/OC8lP8_S9yk/maxresdefault.jpg",
         "views": "15370"
        },
        {
         "title": "SHOULD I TAKE TIBET AND KOREA??? [9] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-28T19:41:45Z",
         "thumbnail": "https://i.ytimg.com/vi/jSu8eNPY3rQ/maxresdefault.jpg",
         "views": "15760"
        },
        {
         "title": "Hearts Of Iron 4: GERMANY GETS ACCESS TO THE DARK ARTS!",
         "date": "2018-03-28T18:29:38Z",
         "thumbnail": "https://i.ytimg.com/vi/mBojGb8Ig-U/maxresdefault.jpg",
         "views": "13543"
        },
        {
         "title": "4000 CONVOYS SUNK [4] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-27T20:10:22Z",
         "thumbnail": "https://i.ytimg.com/vi/Z__TWc36qdU/maxresdefault.jpg",
         "views": "9153"
        },
        {
         "title": "SUPERPOWER STATUS [8] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-27T19:04:07Z",
         "thumbnail": "https://i.ytimg.com/vi/fSWAwNNWLRk/maxresdefault.jpg",
         "views": "16932"
        },
        {
         "title": "SHOULD I GO FOR JETS??? [3] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-26T20:43:49Z",
         "thumbnail": "https://i.ytimg.com/vi/p5JXSGHmm_c/maxresdefault.jpg",
         "views": "10375"
        },
        {
         "title": "DARK DAY FOR JAPAN [7] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-26T18:59:24Z",
         "thumbnail": "https://i.ytimg.com/vi/8S8rLeD5jQw/maxresdefault.jpg",
         "views": "18740"
        },
        {
         "title": "CAN WE HOLD FRANCE??? [2] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-25T20:54:00Z",
         "thumbnail": "https://i.ytimg.com/vi/bkNLo0HF2dg/maxresdefault.jpg",
         "views": "15819"
        },
        {
         "title": "CHINESE INDUSTRIAL REVOLUTION [6] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-25T18:49:30Z",
         "thumbnail": "https://i.ytimg.com/vi/FdOLXV02KVU/maxresdefault.jpg",
         "views": "21277"
        },
        {
         "title": "SEA OR AIR INVASION??? [5] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-24T18:07:38Z",
         "thumbnail": "https://i.ytimg.com/vi/JpGbaVkrbf8/maxresdefault.jpg",
         "views": "23176"
        },
        {
         "title": "AIR ONLY CHALLENGE [1] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-24T14:56:08Z",
         "thumbnail": "https://i.ytimg.com/vi/cK4X97Gtdkw/maxresdefault.jpg",
         "views": "23560"
        },
        {
         "title": "JAPAN STRIKES AGAIN [4] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-23T19:54:24Z",
         "thumbnail": "https://i.ytimg.com/vi/Ekbt0-pMIc0/maxresdefault.jpg",
         "views": "27346"
        },
        {
         "title": "SUPER OP NATIONAL FOCUS [3] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-22T19:55:39Z",
         "thumbnail": "https://i.ytimg.com/vi/MWEWi397iMg/maxresdefault.jpg",
         "views": "33976"
        },
        {
         "title": "SUCCESS AND FAILURES [2] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-21T19:30:30Z",
         "thumbnail": "https://i.ytimg.com/vi/XI_5Xn0SFw4/maxresdefault.jpg",
         "views": "37774"
        },
        {
         "title": "'THE' GREATER GERMANY REICH [18] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-20T20:08:49Z",
         "thumbnail": "https://i.ytimg.com/vi/z9XwVodFM9Q/maxresdefault.jpg",
         "views": "54456"
        },
        {
         "title": "ELITE QING CHALLENGE [1] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-20T15:52:11Z",
         "thumbnail": "https://i.ytimg.com/vi/nbqO9oXy6Xc/maxresdefault.jpg",
         "views": "64840"
        },
        {
         "title": "NEW ENEMIES [17] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-19T20:09:38Z",
         "thumbnail": "https://i.ytimg.com/vi/WTfpaiUAMrk/maxresdefault.jpg",
         "views": "33748"
        },
        {
         "title": "WHAT? UKRAINE CIVIL WAR [16] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-18T19:38:22Z",
         "thumbnail": "https://i.ytimg.com/vi/UGtBvB38IRU/maxresdefault.jpg",
         "views": "39772"
        },
        {
         "title": "WAKING THE TIGER WAR SUPPORT AND STABILITY - DAY 7# - Hearts of Iron 4 (HOI4)",
         "date": "2018-03-18T15:03:43Z",
         "thumbnail": "https://i.ytimg.com/vi/Dq4yoSmFNI0/maxresdefault.jpg",
         "views": "29477"
        },
        {
         "title": "BIGGEST FAIL YET [15] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-17T19:59:23Z",
         "thumbnail": "https://i.ytimg.com/vi/LfdOpBHnIA0/maxresdefault.jpg",
         "views": "36703"
        },
        {
         "title": "WAKING THE TIGER CHANGES TO SPECIAL FORCES - DAY 6# - Hearts of Iron 4 (HOI4)",
         "date": "2018-03-17T14:18:06Z",
         "thumbnail": "https://i.ytimg.com/vi/2BBHg0aU9Vg/maxresdefault.jpg",
         "views": "22974"
        },
        {
         "title": "AUTONOMY IN OCCUPIED TERRITORY [14] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-16T19:51:22Z",
         "thumbnail": "https://i.ytimg.com/vi/dEKjDwvp2ss/maxresdefault.jpg",
         "views": "40740"
        },
        {
         "title": "WAKING THE TIGER FACTORIES OR INFRASTRUCTURE? - DAY 5# - Hearts of Iron 4 (HOI4)",
         "date": "2018-03-16T13:28:38Z",
         "thumbnail": "https://i.ytimg.com/vi/GqcmwoJJWo0/maxresdefault.jpg",
         "views": "34498"
        },
        {
         "title": "UNITED ANCIENT EMPIRES [11] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-15T20:58:37Z",
         "thumbnail": "https://i.ytimg.com/vi/CpSASaNr0bs/maxresdefault.jpg",
         "views": "17118"
        },
        {
         "title": "SHOULD I BLOW UP THE SUEZ CANAL??? [13] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-15T20:04:48Z",
         "thumbnail": "https://i.ytimg.com/vi/7WeNqwEgEcI/maxresdefault.jpg",
         "views": "43513"
        },
        {
         "title": "WAKING THE TIGER COMMAND ABILITIES - DAY 4# - Hearts of Iron 4 (HOI4)",
         "date": "2018-03-15T19:08:15Z",
         "thumbnail": "https://i.ytimg.com/vi/f79nIv9sPEY/maxresdefault.jpg",
         "views": "11409"
        },
        {
         "title": "LIBERATE ROMAN ROMANIA [10] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-14T23:24:51Z",
         "thumbnail": "https://i.ytimg.com/vi/yQGpKnXzncM/maxresdefault.jpg",
         "views": "16283"
        },
        {
         "title": "HIMMLER IS WOUNDED!!! [12] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-14T21:20:06Z",
         "thumbnail": "https://i.ytimg.com/vi/yS6mwyfDyz0/maxresdefault.jpg",
         "views": "46729"
        },
        {
         "title": "WAKING THE TIGER GENERAL TRAITS - DAY 3# - Hearts of Iron 4 (HOI4)",
         "date": "2018-03-14T12:34:44Z",
         "thumbnail": "https://i.ytimg.com/vi/uGmAYCjuiBI/maxresdefault.jpg",
         "views": "30778"
        },
        {
         "title": "HIMMLER BECOMES A FIELD MARSHAL [11] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-13T20:58:19Z",
         "thumbnail": "https://i.ytimg.com/vi/GxQtt4-my10/maxresdefault.jpg",
         "views": "59731"
        },
        {
         "title": "ITALIAN PANZERS [9] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-13T20:02:13Z",
         "thumbnail": "https://i.ytimg.com/vi/oQ6szDc0Odk/maxresdefault.jpg",
         "views": "15072"
        },
        {
         "title": "WAKING THE TIGER COMMAND POWER - DAY 2# - Hearts of Iron 4 (HOI4)",
         "date": "2018-03-13T13:45:44Z",
         "thumbnail": "https://i.ytimg.com/vi/QtWnBx_nzng/maxresdefault.jpg",
         "views": "18084"
        },
        {
         "title": "THE GREAT BUILD UP [8] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-12T22:18:09Z",
         "thumbnail": "https://i.ytimg.com/vi/B3QL96sU0rQ/maxresdefault.jpg",
         "views": "14890"
        },
        {
         "title": "GREATER GERMAN NAVY [10] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-12T21:33:12Z",
         "thumbnail": "https://i.ytimg.com/vi/nuvPNViUVGE/maxresdefault.jpg",
         "views": "61068"
        },
        {
         "title": "WAKING THE TIGER BATTLE PLANS GUIDE 2.0  - DAY 1# - Hearts of Iron 4 (HOI4)",
         "date": "2018-03-12T15:36:53Z",
         "thumbnail": "https://i.ytimg.com/vi/-QgOkbudXmg/maxresdefault.jpg",
         "views": "58267"
        },
        {
         "title": "RISKY INVASION [7] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-11T21:04:54Z",
         "thumbnail": "https://i.ytimg.com/vi/3gWedh84HQM/maxresdefault.jpg",
         "views": "18173"
        },
        {
         "title": "SIEGE THE MEANS OF PRODUCTION [9] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-11T20:05:02Z",
         "thumbnail": "https://i.ytimg.com/vi/5hvNSGhpzjQ/maxresdefault.jpg",
         "views": "69788"
        },
        {
         "title": "RUSSIA VS GERMANY [6] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-10T20:58:59Z",
         "thumbnail": "https://i.ytimg.com/vi/4P971Nf0hvw/maxresdefault.jpg",
         "views": "18261"
        },
        {
         "title": "HIMMLER OVERTHROWS THE FUHRER [8] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-10T20:09:42Z",
         "thumbnail": "https://i.ytimg.com/vi/8z3ux2kdeE0/maxresdefault.jpg",
         "views": "116334"
        },
        {
         "title": "AFRICA LOCKED DOWN [5] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-09T20:59:31Z",
         "thumbnail": "https://i.ytimg.com/vi/xfs5qjU6Vys/maxresdefault.jpg",
         "views": "18506"
        },
        {
         "title": "HUGE SOVIET COUNTERATTACK [7] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-09T19:59:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ddBQYApD6HE/maxresdefault.jpg",
         "views": "75065"
        },
        {
         "title": "HANGING ON BY A THREAD [4] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-08T22:23:36Z",
         "thumbnail": "https://i.ytimg.com/vi/h_JQhfExL4U/maxresdefault.jpg",
         "views": "20859"
        },
        {
         "title": "PANZER POCKET HUNTING [6] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-08T19:59:35Z",
         "thumbnail": "https://i.ytimg.com/vi/FTytx-7RkxI/maxresdefault.jpg",
         "views": "79240"
        },
        {
         "title": "EARLY WAR VS THE ALLIES [3] With Aldrahill - Hearts of Iron IV Waking The Tiger DLC",
         "date": "2018-03-07T20:58:53Z",
         "thumbnail": "https://i.ytimg.com/vi/Uw4m3rYLwK4/maxresdefault.jpg",
         "views": "24299"
        },
        {
         "title": "DIRECTIVE 21 [5] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-07T20:03:47Z",
         "thumbnail": "https://i.ytimg.com/vi/_G6clW5-XkU/maxresdefault.jpg",
         "views": "108146"
        },
        {
         "title": "USA SUPER NAVY FOUND LOL!!! [14] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-03-06T22:39:31Z",
         "thumbnail": "https://i.ytimg.com/vi/1qVt6F8dbGs/maxresdefault.jpg",
         "views": "2972"
        },
        {
         "title": "TURKEY TOO STRONG [2] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-06T21:07:43Z",
         "thumbnail": "https://i.ytimg.com/vi/xKKrVdRS0Nk/maxresdefault.jpg",
         "views": "32659"
        },
        {
         "title": "EMBARRASSING MISTAKE [4] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-06T20:12:09Z",
         "thumbnail": "https://i.ytimg.com/vi/xm2eidNVgps/maxresdefault.jpg",
         "views": "113404"
        },
        {
         "title": "THE MAN IN THE HIGH CASTLE [13] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-03-05T22:09:56Z",
         "thumbnail": "https://i.ytimg.com/vi/m0xZXKuJgbI/maxresdefault.jpg",
         "views": "2385"
        },
        {
         "title": "HOW TO FORM THE ROMAN EMPIRE [1] With Aldrahill - Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-05T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/OV-l2FR56sA/maxresdefault.jpg",
         "views": "60294"
        },
        {
         "title": "INSANE NEW GENERAL TRAITS [3] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-05T19:58:49Z",
         "thumbnail": "https://i.ytimg.com/vi/H5aa1aCHKh4/maxresdefault.jpg",
         "views": "132269"
        },
        {
         "title": "CRAZY UK BREAKOUT [12] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-03-04T20:59:27Z",
         "thumbnail": "https://i.ytimg.com/vi/tsnENtEE-7w/maxresdefault.jpg",
         "views": "1607"
        },
        {
         "title": "PUPPET HUNGARY AND ROMANIA [2] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-04T19:51:57Z",
         "thumbnail": "https://i.ytimg.com/vi/qcxujEfCSpQ/maxresdefault.jpg",
         "views": "150310"
        },
        {
         "title": "HOW TO FORM THE GREATER GERMAN REICH [1] Hearts of Iron IV - Waking The Tiger DLC",
         "date": "2018-03-04T08:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/PZx5j4IfDkg/maxresdefault.jpg",
         "views": "360939"
        },
        {
         "title": "HUGE DISASTER AGAIN [11] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-03-03T20:01:24Z",
         "thumbnail": "https://i.ytimg.com/vi/ZctkAskNrQc/maxresdefault.jpg",
         "views": "1545"
        },
        {
         "title": "GEOGRAPHY LESSON WHERE IS TRUK??? [10] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-03-02T20:49:20Z",
         "thumbnail": "https://i.ytimg.com/vi/ml_EjjPUuhY/maxresdefault.jpg",
         "views": "1464"
        },
        {
         "title": "GREATEST NAVY EVER??? [9] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-03-01T20:59:09Z",
         "thumbnail": "https://i.ytimg.com/vi/sswoxS7V5Qc/maxresdefault.jpg",
         "views": "1952"
        },
        {
         "title": "THE GIANT AWAKENS [8] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-28T20:58:48Z",
         "thumbnail": "https://i.ytimg.com/vi/MtUdma75vB8/maxresdefault.jpg",
         "views": "1508"
        },
        {
         "title": "IS THIS THE END?",
         "date": "2018-02-27T23:36:33Z",
         "thumbnail": "https://i.ytimg.com/vi/-9CvXDceacQ/maxresdefault.jpg",
         "views": "16902"
        },
        {
         "title": "PACIFIC CLEAN UP [7] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-27T20:02:52Z",
         "thumbnail": "https://i.ytimg.com/vi/hnesOiaQAo8/maxresdefault.jpg",
         "views": "1545"
        },
        {
         "title": "EPIC FAIL [6] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-26T20:49:20Z",
         "thumbnail": "https://i.ytimg.com/vi/e3gYIWNGHsE/maxresdefault.jpg",
         "views": "1660"
        },
        {
         "title": "STALINS BAD DAY [5] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-25T20:45:16Z",
         "thumbnail": "https://i.ytimg.com/vi/z2TCa2zlRC4/maxresdefault.jpg",
         "views": "2056"
        },
        {
         "title": "PREPARE FOR THE WORSE BORDERGORE [4] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-24T21:00:25Z",
         "thumbnail": "https://i.ytimg.com/vi/BvYZLKYmkgA/maxresdefault.jpg",
         "views": "2562"
        },
        {
         "title": "Hearts Of Iron 4: THE WORST MULTIPLAYER GAME EVER?",
         "date": "2018-02-24T16:42:15Z",
         "thumbnail": "https://i.ytimg.com/vi/Bc66zJJsZxc/maxresdefault.jpg",
         "views": "9002"
        },
        {
         "title": "CHINA ANNEX SPEEDRUN [3] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-23T22:07:43Z",
         "thumbnail": "https://i.ytimg.com/vi/mWllPEuAs9Y/maxresdefault.jpg",
         "views": "3557"
        },
        {
         "title": "FINALE WITH A BANG [5 of 5] With Count Cristo SUPERCUT - Apocalypse DLC - Stellaris",
         "date": "2018-02-23T21:04:23Z",
         "thumbnail": "https://i.ytimg.com/vi/xwOKaZt0r1Y/maxresdefault.jpg",
         "views": "1170"
        },
        {
         "title": "MOST OP TACTICAL BOMBERS [2] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-22T20:59:15Z",
         "thumbnail": "https://i.ytimg.com/vi/yMtx96s0NJ4/maxresdefault.jpg",
         "views": "3405"
        },
        {
         "title": "WAKING OF A GIANT [4 of 5] With Count Cristo SUPERCUT - Apocalypse DLC - Stellaris",
         "date": "2018-02-22T20:00:57Z",
         "thumbnail": "https://i.ytimg.com/vi/e5o2Ol5xHX8/maxresdefault.jpg",
         "views": "861"
        },
        {
         "title": "PERFORMANCE IMPROVEMENTS! Dev Diary - Hearts of Iron IV",
         "date": "2018-02-22T14:02:04Z",
         "thumbnail": "https://i.ytimg.com/vi/xoc2DJyH6ds/maxresdefault.jpg",
         "views": "8398"
        },
        {
         "title": "BORDER GORE CASUS BELLI [3 of 5] With Count Cristo SUPERCUT - Apocalypse DLC - Stellaris",
         "date": "2018-02-22T00:23:27Z",
         "thumbnail": "https://i.ytimg.com/vi/bv0tVjYls6w/maxresdefault.jpg",
         "views": "1238"
        },
        {
         "title": "CAN JAPAN INTO CHINA??? [1] Japan - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-21T21:21:18Z",
         "thumbnail": "https://i.ytimg.com/vi/nm6ecxxp3mw/maxresdefault.jpg",
         "views": "15347"
        },
        {
         "title": "GIFTS FROM THE CAT PEOPLE [2 of 5] With Count Cristo SUPERCUT - Apocalypse DLC - Stellaris",
         "date": "2018-02-20T19:58:44Z",
         "thumbnail": "https://i.ytimg.com/vi/HzTcqG00yYA/maxresdefault.jpg",
         "views": "1485"
        },
        {
         "title": "THE APOCALYPSE! [1 of 5] With Count Cristo SUPERCUT - Apocalypse DLC - Stellaris",
         "date": "2018-02-19T14:05:47Z",
         "thumbnail": "https://i.ytimg.com/vi/wILwu9F47wo/maxresdefault.jpg",
         "views": "4817"
        },
        {
         "title": "HEARTS OF IRON 2 CHEATS / Console Commands (HOI2)",
         "date": "2018-02-18T19:49:10Z",
         "thumbnail": "https://i.ytimg.com/vi/auD_Jg58gEE/maxresdefault.jpg",
         "views": "15505"
        },
        {
         "title": "EUROPA UNIVERSALIS 4 CHEATS / Console Commands (EU4)",
         "date": "2018-02-17T14:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4K3tm1XfPNo/maxresdefault.jpg",
         "views": "186840"
        },
        {
         "title": "THE ZIMBAB-WAE [7 of 7] SUPERCUT - Millennium Dawn Modern day Mod - Hearts of Iron IV HOI4",
         "date": "2018-02-16T19:58:46Z",
         "thumbnail": "https://i.ytimg.com/vi/XNBivt8KfZc/maxresdefault.jpg",
         "views": "7346"
        },
        {
         "title": "UNITED EU SUPER STATE [6 of 7] SUPERCUT - Millennium Dawn Modern day Mod - Hearts of Iron IV HOI4",
         "date": "2018-02-15T19:59:10Z",
         "thumbnail": "https://i.ytimg.com/vi/l4B9q_ePOCo/maxresdefault.jpg",
         "views": "7283"
        },
        {
         "title": "THIS NEEDS TO BE NERFED!! [5 of 7] SUPERCUT - Millennium Dawn Modern day Mod - Hearts of Iron IV",
         "date": "2018-02-14T19:59:12Z",
         "thumbnail": "https://i.ytimg.com/vi/cuETi5tTuDI/maxresdefault.jpg",
         "views": "7803"
        },
        {
         "title": "NEW FORMABLE NATIONS! Dev Diary - Hearts of Iron IV",
         "date": "2018-02-14T14:06:59Z",
         "thumbnail": "https://i.ytimg.com/vi/lJzxe1ui5W0/maxresdefault.jpg",
         "views": "13766"
        },
        {
         "title": "FACTION RAGE QUITS [4 of 7] SUPERCUT - Millennium Dawn Modern day Mod - Hearts of Iron IV HOI4",
         "date": "2018-02-13T19:59:40Z",
         "thumbnail": "https://i.ytimg.com/vi/1Nn3Btlo7J0/maxresdefault.jpg",
         "views": "8577"
        },
        {
         "title": "INDIA WINS! [3 of 7] SUPERCUT - Millennium Dawn Modern day Mod - Hearts of Iron IV HOI4",
         "date": "2018-02-12T19:26:36Z",
         "thumbnail": "https://i.ytimg.com/vi/WrttpDKek88/maxresdefault.jpg",
         "views": "9333"
        },
        {
         "title": "ANGOLA JUSTIFIES [2 of 7] SUPERCUT  - Millennium Dawn Modern day Mod - Hearts of Iron IV HOI4",
         "date": "2018-02-11T17:11:34Z",
         "thumbnail": "https://i.ytimg.com/vi/UI288uLKIh4/maxresdefault.jpg",
         "views": "10952"
        },
        {
         "title": "WORST EXPLOIT IN HEARTS OF IRON 4 EVER! Method 2# (HOI4)",
         "date": "2018-02-10T22:06:31Z",
         "thumbnail": "https://i.ytimg.com/vi/E1Ecs-yNI4E/maxresdefault.jpg",
         "views": "18841"
        },
        {
         "title": "WORST EXPLOIT IN HEARTS OF IRON 4 EVER! Method 1# (HOI4)",
         "date": "2018-02-10T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/LySAUUfqlrw/maxresdefault.jpg",
         "views": "22767"
        },
        {
         "title": "GOTTERDAMMERUNG [15] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-10T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nP8OEG1CCTc/maxresdefault.jpg",
         "views": "3832"
        },
        {
         "title": "GREATEST AFRICAN NATION! [Part 1 of 7] SUPERCUT - Millennium Dawn Modern day Mod - Hearts of Iron IV",
         "date": "2018-02-10T14:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/vMhsLdT91e8/maxresdefault.jpg",
         "views": "17965"
        },
        {
         "title": "BRAND NEW NAVY Dev Diary - Hearts of Iron IV",
         "date": "2018-02-09T21:29:25Z",
         "thumbnail": "https://i.ytimg.com/vi/wSXUyUJtvXY/maxresdefault.jpg",
         "views": "8107"
        },
        {
         "title": "HOW TO LOSE HISTORICALLY [14] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-09T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/X6IeUe3LN9I/maxresdefault.jpg",
         "views": "3190"
        },
        {
         "title": "UNITED SOVIET REPUBLICS OF EARTH [24] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-09T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/6gKqfenHftY/maxresdefault.jpg",
         "views": "13371"
        },
        {
         "title": "CONSTRUCTION AND ASSUMING CONTROL [13] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-08T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/Hln3OYMZBls/maxresdefault.jpg",
         "views": "1624"
        },
        {
         "title": "USA USA USA USA USA [23] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-08T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5pAJty8CUw4/maxresdefault.jpg",
         "views": "8224"
        },
        {
         "title": "DEPOTS AND MANUAL SLIDERS [12] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-07T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/GB6Kw50NwF8/maxresdefault.jpg",
         "views": "1659"
        },
        {
         "title": "LONGEST SNAKE TO MOSCOW [22] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-07T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/_6KaWSMUZYs/maxresdefault.jpg",
         "views": "8237"
        },
        {
         "title": "REVOLTS AND TERRAIN [11] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-06T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ZgyC5HhDaXQ/maxresdefault.jpg",
         "views": "1750"
        },
        {
         "title": "WORLD RUNNING OUT OF MANPOWER [21] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-06T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/_woZJ0WLfx0/maxresdefault.jpg",
         "views": "8578"
        },
        {
         "title": "TRADE AGREEMENTS AND ECONOMY [10] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-05T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8vStPJBlmdc/maxresdefault.jpg",
         "views": "2226"
        },
        {
         "title": "USA HAS 0 MANPOWER [20] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-05T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/wcB5peZBdFY/maxresdefault.jpg",
         "views": "9356"
        },
        {
         "title": "BLUEPRINTS AND MINISTERS [9] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-04T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/FXWaLuqOcSU/maxresdefault.jpg",
         "views": "2134"
        },
        {
         "title": "COUNTDOWN TO 0 [19] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-04T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/wznVJL4R23c/maxresdefault.jpg",
         "views": "8560"
        },
        {
         "title": "INTELLIGENCE AND AIR MISSIONS [8] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-03T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/nquj7psqzVQ/maxresdefault.jpg",
         "views": "2558"
        },
        {
         "title": "DEVASTATING MODERN TANKS [18] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-03T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/JlfAwJDfPjg/maxresdefault.jpg",
         "views": "10211"
        },
        {
         "title": "My Changes To Hearts of Iron 4 To Improve The Game (HOI4)",
         "date": "2018-02-03T13:40:37Z",
         "thumbnail": "https://i.ytimg.com/vi/CdHFLDjtjNo/maxresdefault.jpg",
         "views": "13461"
        },
        {
         "title": "ENCIRCLEMENTS AND TRANSPORT CAPACITY [7] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-02T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/N7b3_qqmyTs/maxresdefault.jpg",
         "views": "2781"
        },
        {
         "title": "A NEW WAR [17] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-02T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/EqF9Q-gq1U4/maxresdefault.jpg",
         "views": "9526"
        },
        {
         "title": "WEATHER AND HOLDING FRONTLINES [6] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-02-01T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/8C-YJLA1KUs/maxresdefault.jpg",
         "views": "3203"
        },
        {
         "title": "BIGGEST OVERRUN CHAIN EVER [16] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-02-01T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/g4rwnO91IeE/maxresdefault.jpg",
         "views": "10247"
        },
        {
         "title": "PARTISANS AND BRITISH COUNTER ATTACK [5] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-01-31T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8pqcX9zcy0w/maxresdefault.jpg",
         "views": "4477"
        },
        {
         "title": "HAT DLC Dev Diary - Hearts of Iron IV",
         "date": "2018-01-31T14:32:30Z",
         "thumbnail": "https://i.ytimg.com/vi/CzC0L0IkhKc/maxresdefault.jpg",
         "views": "7790"
        },
        {
         "title": "COMBAT AND AIR WINGS [4] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-01-30T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/lQmmXfgXnCg/maxresdefault.jpg",
         "views": "5346"
        },
        {
         "title": "CHERNOBYL NUKED [15] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-30T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/SvXd_mMPS74/maxresdefault.jpg",
         "views": "10594"
        },
        {
         "title": "CZECHOSLOVAKIA ARTISTS [3] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-01-29T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/fB-ASEPWX7Y/maxresdefault.jpg",
         "views": "6085"
        },
        {
         "title": "ALL ADULTS SERVE [14] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-29T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/S7-WZaHaVC8/maxresdefault.jpg",
         "views": "10153"
        },
        {
         "title": "UPGRADES AND PRODUCTION [2] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-01-28T21:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/qCOmw0An8G8/maxresdefault.jpg",
         "views": "9318"
        },
        {
         "title": "MUNICH SURROUNDED [13] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-28T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/POXzFewe3nM/maxresdefault.jpg",
         "views": "9758"
        },
        {
         "title": "ARMIES AND RESEARCH [1] Germany - Hearts of Iron 2 HOI2 Paradox Interactive",
         "date": "2018-01-27T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nyuciv7S6m0/maxresdefault.jpg",
         "views": "39751"
        },
        {
         "title": "SAVE THE TANKS !!! [12] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-27T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/R11qpoU2PS4/maxresdefault.jpg",
         "views": "10986"
        },
        {
         "title": "Annex United States SPEEDRUN (Japan) - Day #3 - Hearts of Iron 4 (HOI4)",
         "date": "2018-01-27T19:00:50Z",
         "thumbnail": "https://i.ytimg.com/vi/nbQUWGCmy7g/maxresdefault.jpg",
         "views": "24212"
        },
        {
         "title": "3 MILLION MAN POCKET [11] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-26T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ZBhc9RRe2P4/maxresdefault.jpg",
         "views": "12652"
        },
        {
         "title": "ELITE DIFFICULTY??? Dev Diary - Hearts of Iron IV",
         "date": "2018-01-26T16:22:06Z",
         "thumbnail": "https://i.ytimg.com/vi/ldNMqRDiY4c/maxresdefault.jpg",
         "views": "7147"
        },
        {
         "title": "PUSH FOR ALUMINIUM [10] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-25T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Hjx49LZ166Q/maxresdefault.jpg",
         "views": "11621"
        },
        {
         "title": "LACK OF WAR MATERIALS CRITICAL [9] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-24T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/S2mO8a2DNpM/maxresdefault.jpg",
         "views": "12061"
        },
        {
         "title": "USA 0 MANPOWER [8] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-23T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/BfZ-A65gmJA/maxresdefault.jpg",
         "views": "14539"
        },
        {
         "title": "LANDINGS EVERYWHERE [7] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-22T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/nTt_Tc4-XFg/maxresdefault.jpg",
         "views": "15114"
        },
        {
         "title": "OPERATION UNTHINKABLE [6] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-21T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/WF1GR2EN7YI/maxresdefault.jpg",
         "views": "21736"
        },
        {
         "title": "PILE ON JAPAN [5] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-20T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/z2g0f5cAZTg/maxresdefault.jpg",
         "views": "21937"
        },
        {
         "title": "Annex United States SPEEDRUN (United Kingdom) - Day #2 - Hearts of Iron 4 (HOI4)",
         "date": "2018-01-20T14:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/KgBDCDtK3xg/maxresdefault.jpg",
         "views": "8725"
        },
        {
         "title": "RESEARCH TIME '1 DAY' [4] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-19T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/MUfNN-J3U5c/maxresdefault.jpg",
         "views": "29399"
        },
        {
         "title": "MASSIVE CHANGES FOR MODDERS Dev Diary - Hearts of Iron IV",
         "date": "2018-01-19T16:53:43Z",
         "thumbnail": "https://i.ytimg.com/vi/GYk7vz1GTOk/maxresdefault.jpg",
         "views": "5611"
        },
        {
         "title": "THE WORLD DISTRACTED [3] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-18T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Y969xfAoFi8/maxresdefault.jpg",
         "views": "33374"
        },
        {
         "title": "REPUBLICAN SPAIN COUNTER ATTACK!  [2] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-17T20:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/yQZzVhGLQ-U/maxresdefault.jpg",
         "views": "48383"
        },
        {
         "title": "EMPEROR OF CHINA !!! Dev Diary - Hearts of Iron IV",
         "date": "2018-01-17T17:47:33Z",
         "thumbnail": "https://i.ytimg.com/vi/lEqz_yI3tMk/maxresdefault.jpg",
         "views": "9754"
        },
        {
         "title": "REPLYING TO COMMENTS [7] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2018-01-17T11:49:29Z",
         "thumbnail": "https://i.ytimg.com/vi/3pVyaJsCfmA/maxresdefault.jpg",
         "views": "8238"
        },
        {
         "title": "TROTSKY'S PERMANENT REVOLUTION [1] Soviet Russia - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-16T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/L7ngwBW6gTE/maxresdefault.jpg",
         "views": "105533"
        },
        {
         "title": "WHATS IN THE BAG? Dev Diary - Hearts of Iron IV",
         "date": "2018-01-16T19:10:00Z",
         "thumbnail": "https://i.ytimg.com/vi/C75rP-Ny8bw/maxresdefault.jpg",
         "views": "6498"
        },
        {
         "title": "GERMANIFICATION OF THE WORLD [13] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-11T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/bvJFELJTiIk/maxresdefault.jpg",
         "views": "6946"
        },
        {
         "title": "BOMBING BEGINS [12] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-10T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/WKybfVGe7kw/maxresdefault.jpg",
         "views": "4618"
        },
        {
         "title": "AFRICA SECURE [11] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-09T19:30:02Z",
         "thumbnail": "https://i.ytimg.com/vi/MRHlDpst-mM/maxresdefault.jpg",
         "views": "4732"
        },
        {
         "title": "WW1 TANK PRODUCTION [10] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-08T20:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/_GkkWi26tOM/maxresdefault.jpg",
         "views": "6281"
        },
        {
         "title": "PORTUGAL AND INDIA [9] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-07T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/gG2VJuJFvwI/maxresdefault.jpg",
         "views": "5574"
        },
        {
         "title": "NEW FACTION [8] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-03T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/My679VepXuo/maxresdefault.jpg",
         "views": "7460"
        },
        {
         "title": "BICYCLE DIVISIONS! JAPAN REWORK Dev Diary - Hearts of Iron IV",
         "date": "2018-01-03T15:46:27Z",
         "thumbnail": "https://i.ytimg.com/vi/emDKemBPQWo/maxresdefault.jpg",
         "views": "26865"
        },
        {
         "title": "FULL AIR CONTROL [7] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2018-01-02T20:00:10Z",
         "thumbnail": "https://i.ytimg.com/vi/yQVr-cRGONM/maxresdefault.jpg",
         "views": "7257"
        },
        {
         "title": "EXPLOIT/CHEAT SUPER FAST DANZIG OR WAR - Hearts of Iron 4 (HOI4)",
         "date": "2017-12-22T16:26:07Z",
         "thumbnail": "https://i.ytimg.com/vi/m_JLElrUC6k/maxresdefault.jpg",
         "views": "40461"
        },
        {
         "title": "Annex Soviet Union SPEEDRUN - Day #1 - Hearts of Iron 4 (HOI4)",
         "date": "2017-12-18T22:01:36Z",
         "thumbnail": "https://i.ytimg.com/vi/1cAGN6taeZk/maxresdefault.jpg",
         "views": "15930"
        },
        {
         "title": "EXPLOIT/CHEAT LOW SUPPLY BUG - Hearts of Iron 4 (HOI4)",
         "date": "2017-12-16T21:54:52Z",
         "thumbnail": "https://i.ytimg.com/vi/ZeYtScFLgfo/maxresdefault.jpg",
         "views": "20322"
        },
        {
         "title": "GO EAST! [6] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-12-16T21:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/r5So6IrrDSI/maxresdefault.jpg",
         "views": "10130"
        },
        {
         "title": "STRUGGLE FOR POWER Dev Diary - Hearts of Iron IV",
         "date": "2017-12-15T13:32:47Z",
         "thumbnail": "https://i.ytimg.com/vi/xilyE8dIbmw/maxresdefault.jpg",
         "views": "8313"
        },
        {
         "title": "MANDATE IS BROKEN [30] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-14T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/cE0_4wzzQnY/maxresdefault.jpg",
         "views": "2369"
        },
        {
         "title": "WAR VS MING [29] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-13T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6cRe-pu51GY/maxresdefault.jpg",
         "views": "1518"
        },
        {
         "title": "FURTHER EAST [28] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-12T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3MlZ8RFGXSk/maxresdefault.jpg",
         "views": "1336"
        },
        {
         "title": "HIGHWAY TO MING [27] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-11T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/550SyTjqJOc/maxresdefault.jpg",
         "views": "1582"
        },
        {
         "title": "UNIFIED ISLAM [26] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-10T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/9RwGPEv0p8I/maxresdefault.jpg",
         "views": "1988"
        },
        {
         "title": "EAST IS SECURE [25] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-09T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ZHJgVjYqEuA/maxresdefault.jpg",
         "views": "1752"
        },
        {
         "title": "EXPLOIT/CHEAT FREE SPANISH PUPPET - Hearts of Iron 4 (HOI4)",
         "date": "2017-12-09T12:50:22Z",
         "thumbnail": "https://i.ytimg.com/vi/d-Y2KoSSZl8/maxresdefault.jpg",
         "views": "45876"
        },
        {
         "title": "NORTH IS SECURE [24] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-08T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/vyi0LgVqQCU/maxresdefault.jpg",
         "views": "1570"
        },
        {
         "title": "WEST IS SECURE [23] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-07T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/W_sG-kZfZBA/maxresdefault.jpg",
         "views": "1549"
        },
        {
         "title": "North Korea Vs South Korea Ep15 - Hearts of Iron 4 (HOI4)",
         "date": "2017-12-07T16:23:40Z",
         "thumbnail": "https://i.ytimg.com/vi/qwWOJYOMJgM/maxresdefault.jpg",
         "views": "24501"
        },
        {
         "title": "TIME FOR A GAMBLE [5] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-12-06T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/apR-6tUVbO4/maxresdefault.jpg",
         "views": "16233"
        },
        {
         "title": "COMMANDOS GET BUFFED! Dev Diary - Hearts of Iron IV",
         "date": "2017-12-06T15:28:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0V0fk1ublsw/maxresdefault.jpg",
         "views": "11854"
        },
        {
         "title": "ATTACKING THE UK NOT SO EASY [4] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-12-05T20:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/sD8JYKfcpzs/maxresdefault.jpg",
         "views": "17483"
        },
        {
         "title": "MUSLIMS RETURN TO EUROPE? [22] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-04T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/09NLBNZdfBo/maxresdefault.jpg",
         "views": "2021"
        },
        {
         "title": "HOW TO TAKE OUT ITALY [3] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-12-04T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/W5_H3sJe6Hw/maxresdefault.jpg",
         "views": "24021"
        },
        {
         "title": "WESTERN BREAKTHROUGH [21] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-03T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/73YRyM4Ev2k/maxresdefault.jpg",
         "views": "1676"
        },
        {
         "title": "HOW TO TAKE OUT BELGIUM QUICK  [2] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-12-03T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/X4VeiRo28uI/maxresdefault.jpg",
         "views": "34702"
        },
        {
         "title": "WHERE IS FRANCES ARMY? [20] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-02T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Eo0ec5lHkoc/maxresdefault.jpg",
         "views": "1851"
        },
        {
         "title": "MIN MAXING THE GERMAN EMPIRE [1] Germany - The Great War Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-12-02T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/rCmlmBGsNGg/maxresdefault.jpg",
         "views": "58749"
        },
        {
         "title": "China Vs India Ep14 - Hearts of Iron 4 (HOI4)",
         "date": "2017-12-02T13:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/NLjjiXS15Zc/maxresdefault.jpg",
         "views": "14852"
        },
        {
         "title": "EMPIRE DISMANTLED [19] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-12-01T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/b22rSodU1nM/maxresdefault.jpg",
         "views": "1706"
        },
        {
         "title": "France Vs United Kingdom Ep13 - Hearts of Iron 4 (HOI4)",
         "date": "2017-12-01T13:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/WXq2_N0SNKY/maxresdefault.jpg",
         "views": "16263"
        },
        {
         "title": "THE END OF THE OTTOMANS [18] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-30T21:31:18Z",
         "thumbnail": "https://i.ytimg.com/vi/Mn0sYQ31Hu0/maxresdefault.jpg",
         "views": "1670"
        },
        {
         "title": "3 YEARS HAVE PASSED [12] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-30T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/_45wEBTPUNg/maxresdefault.jpg",
         "views": "3431"
        },
        {
         "title": "USA Vs Mexico Ep12 - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-30T14:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/W5DeH2HqrEE/maxresdefault.jpg",
         "views": "11735"
        },
        {
         "title": "WHERE? NORTH, WEST OR EAST [17] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-29T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/IEW91P2J4iM/maxresdefault.jpg",
         "views": "1556"
        },
        {
         "title": "HUMAN WAVE IS STRONG [11] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-29T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/eZOisP3tbC8/maxresdefault.jpg",
         "views": "2872"
        },
        {
         "title": "GENERALS CAN LEVEL UP! Dev Diary - Hearts of Iron IV",
         "date": "2017-11-29T18:48:43Z",
         "thumbnail": "https://i.ytimg.com/vi/MWhT383gRTs/maxresdefault.jpg",
         "views": "13863"
        },
        {
         "title": "DEMONITIZED - WHAT'S NEXT? NOVEMBER 2017",
         "date": "2017-11-29T18:00:40Z",
         "thumbnail": "https://i.ytimg.com/vi/6w30vDArApM/maxresdefault.jpg",
         "views": "8563"
        },
        {
         "title": "Argentina Vs Brazil Ep11 - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-29T14:19:23Z",
         "thumbnail": "https://i.ytimg.com/vi/JIIxo7JWYg4/maxresdefault.jpg",
         "views": "9684"
        },
        {
         "title": "EAST COAST NUKED [10] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-28T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/D68Lxd6FH70/maxresdefault.jpg",
         "views": "2817"
        },
        {
         "title": "Belgium Vs Netherlands Ep10 - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-28T17:29:05Z",
         "thumbnail": "https://i.ytimg.com/vi/np0uMSEND6s/maxresdefault.jpg",
         "views": "12998"
        },
        {
         "title": "FAIL! MASSIVE LOSSES [9] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-27T20:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/n7MMoVAdj44/maxresdefault.jpg",
         "views": "3627"
        },
        {
         "title": "Spain Vs France Ep9 - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-27T14:44:32Z",
         "thumbnail": "https://i.ytimg.com/vi/b4duVAfxqSo/maxresdefault.jpg",
         "views": "12347"
        },
        {
         "title": "ABSOLUTE END TO COALITIONS [16] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-26T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/C7EMuRSc-ME/maxresdefault.jpg",
         "views": "2116"
        },
        {
         "title": "IS PORT STRIKE ANY GOOD? [8] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-26T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/VQ1x3EtjRiM/maxresdefault.jpg",
         "views": "4220"
        },
        {
         "title": "COALITION VS EVERYONE [15] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-25T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/YqGxizJ2yoc/maxresdefault.jpg",
         "views": "1941"
        },
        {
         "title": "TAKE OUT FRANCE AGAIN [7] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-25T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/XhyjbYvKTXM/maxresdefault.jpg",
         "views": "4195"
        },
        {
         "title": "EXPLOIT/CHEAT FREE MANPOWER - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-25T11:06:50Z",
         "thumbnail": "https://i.ytimg.com/vi/CfYdqMgnKhY/maxresdefault.jpg",
         "views": "40233"
        },
        {
         "title": "ROYAL COUP!!! [14] - MAMLUKS - Cradle of Civilization on EU4 Paradox Interactive",
         "date": "2017-11-24T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/k8DOChIhAUg/maxresdefault.jpg",
         "views": "2267"
        },
        {
         "title": "HEAVY ARMOUR DIVISION [6] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-24T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/fmxbyGMzT6I/maxresdefault.jpg",
         "views": "5126"
        },
        {
         "title": "SHOULD I UNIFY ISLAM? [13] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-23T21:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/rd1Ycb98e1w/maxresdefault.jpg",
         "views": "3704"
        },
        {
         "title": "MODERN ARMY [5] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-23T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3KfLLbxH-5k/maxresdefault.jpg",
         "views": "5254"
        },
        {
         "title": "SHARED FOCUS TREES? RED CHINA Dev Diary - Hearts of Iron IV",
         "date": "2017-11-23T17:34:06Z",
         "thumbnail": "https://i.ytimg.com/vi/XT3l12MQntU/maxresdefault.jpg",
         "views": "9464"
        },
        {
         "title": "OTTOMANS STRIKE AGAIN [12] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-22T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Zq1ZzQbRByk/maxresdefault.jpg",
         "views": "2023"
        },
        {
         "title": "1 MILLION STRONG [4] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-22T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/N4wdR1xii_0/maxresdefault.jpg",
         "views": "6771"
        },
        {
         "title": "MORE DEVELOPMENT THAN MING [11] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-21T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0giCbaxhIUY/maxresdefault.jpg",
         "views": "2415"
        },
        {
         "title": "UNIFICATION [3] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-21T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/sc_zSiogTuU/maxresdefault.jpg",
         "views": "8005"
        },
        {
         "title": "MERCENARY SPAM [10] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-20T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/hqkKZi9VePQ/maxresdefault.jpg",
         "views": "2374"
        },
        {
         "title": "SURPRISE ATTACK [2] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-20T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/-QaoOpWRZbg/maxresdefault.jpg",
         "views": "9395"
        },
        {
         "title": "WAR VS OTTOMANS [9] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-19T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/2GqkBpEuqfg/maxresdefault.jpg",
         "views": "3116"
        },
        {
         "title": "DOMINION OF INDIA [1] India - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-19T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/YcXcclnD3Do/maxresdefault.jpg",
         "views": "16203"
        },
        {
         "title": "THE TURKS STRIKE [8] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-18T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/CeNCGZyMi40/maxresdefault.jpg",
         "views": "2603"
        },
        {
         "title": "51 MINUTES OF LAG [11] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-18T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/jwxsAimiG84/maxresdefault.jpg",
         "views": "9765"
        },
        {
         "title": "5 SKILL PHILOSOPHER [7] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-17T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/ITHUxa0Q59s/maxresdefault.jpg",
         "views": "2773"
        },
        {
         "title": "TO INDIA [10] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-17T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/uGPan8IGuc4/maxresdefault.jpg",
         "views": "8296"
        },
        {
         "title": "OTTOMANS INSULT US [6] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-16T21:46:34Z",
         "thumbnail": "https://i.ytimg.com/vi/wlEFbKMYhsE/maxresdefault.jpg",
         "views": "3295"
        },
        {
         "title": "UK INVASION! MAYBE [9] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-16T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/UNuhRc8F9Gg/maxresdefault.jpg",
         "views": "10347"
        },
        {
         "title": "LOSSES 9 MILLION [8] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-15T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5X2a9HEruBM/maxresdefault.jpg",
         "views": "14270"
        },
        {
         "title": "WAKING THE TIGER ANNOUNCED! Dev Diary - Hearts of Iron IV",
         "date": "2017-11-15T15:42:51Z",
         "thumbnail": "https://i.ytimg.com/vi/pxV5khQC36g/maxresdefault.jpg",
         "views": "15639"
        },
        {
         "title": "ETHIOPIAN CLAIMS [5] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-14T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/f4hemZwVd14/maxresdefault.jpg",
         "views": "3228"
        },
        {
         "title": "TRADE CONFLICT IN THE HORN OF AFRICA [4] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-13T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/bLkBDuAAvtU/maxresdefault.jpg",
         "views": "4117"
        },
        {
         "title": "HOW TO BUILD THE ATLANTIC WALL [6] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-13T20:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/wRQvBXomz2s/maxresdefault.jpg",
         "views": "17787"
        },
        {
         "title": "100 ARMY DRILL [3] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-12T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/_od4P5Nc2dw/maxresdefault.jpg",
         "views": "5339"
        },
        {
         "title": "HOW TO INVADE RUSSIA [5] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-12T20:45:01Z",
         "thumbnail": "https://i.ytimg.com/vi/YKDyztKZxog/maxresdefault.jpg",
         "views": "23141"
        },
        {
         "title": "PARATROOPERS GUIDE - DAY 7# - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-12T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/cdGb863t2xM/maxresdefault.jpg",
         "views": "161823"
        },
        {
         "title": "HOW TO PREPARE TO ATTACK RUSSIA [4] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-11T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/jpkpnDqCcsQ/maxresdefault.jpg",
         "views": "22378"
        },
        {
         "title": "SHOULD YOU ANNEX OR PUPPET? - DAY 6# - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-11T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/o-HkJiAA-IQ/maxresdefault.jpg",
         "views": "163016"
        },
        {
         "title": "AMIRS REVOLT [2] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-11T14:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/qXbIGchXpYA/maxresdefault.jpg",
         "views": "5668"
        },
        {
         "title": "ADMINISTRATIVE GENIUS [1] - MAMLUKS - Cradle of Civilization EU4 Paradox Interactive",
         "date": "2017-11-11T14:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Yb-mJtswfNU/maxresdefault.jpg",
         "views": "18534"
        },
        {
         "title": "DO THE PERFECT BLITZKRIEG [3] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-10T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/LFOVwlvrrS8/maxresdefault.jpg",
         "views": "45165"
        },
        {
         "title": "LESS COMMONLY USED EQUIPMENT - DAY 5# - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-10T13:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/dKWrqgEzJDc/maxresdefault.jpg",
         "views": "316845"
        },
        {
         "title": "HOW TO BECOME AN ECONOMIC POWER [2] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-09T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/qVxftRFu3lI/maxresdefault.jpg",
         "views": "32034"
        },
        {
         "title": "SOFTNESS AND HARDNESS EXPLAINED - DAY 4# - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-09T17:51:04Z",
         "thumbnail": "https://i.ytimg.com/vi/07c2GOAeJh0/maxresdefault.jpg",
         "views": "12355"
        },
        {
         "title": "MIN MAXING GUIDE FOR GERMANY [1] MULTIPLAYER GERMANY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-11-08T20:32:47Z",
         "thumbnail": "https://i.ytimg.com/vi/QiG3lxH8MZQ/maxresdefault.jpg",
         "views": "55767"
        },
        {
         "title": "EVENTS AND DECISIONS ARE BACK! Dev Diary - Hearts of Iron IV",
         "date": "2017-11-08T16:07:11Z",
         "thumbnail": "https://i.ytimg.com/vi/QhNhJsmCwWM/maxresdefault.jpg",
         "views": "14987"
        },
        {
         "title": "REDUCE SLOWDOWN/LAG - DAY 3# - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-08T14:20:44Z",
         "thumbnail": "https://i.ytimg.com/vi/vSkafmrTnac/maxresdefault.jpg",
         "views": "134206"
        },
        {
         "title": "SUPER TANK WORLD TOUR [14] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-07T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/VaMousaXxOA/maxresdefault.jpg",
         "views": "5755"
        },
        {
         "title": "OCCUPATION LAWS AND SUPPRESSION GUIDE - DAY 2# - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-07T17:32:51Z",
         "thumbnail": "https://i.ytimg.com/vi/uPpwTXKlnxk/maxresdefault.jpg",
         "views": "35579"
        },
        {
         "title": "MAKING ENCIRCLEMENT'S - DAY 1# - Hearts of Iron 4 (HOI4)",
         "date": "2017-11-06T20:43:38Z",
         "thumbnail": "https://i.ytimg.com/vi/_Ys_7q-ONeM/maxresdefault.jpg",
         "views": "76520"
        },
        {
         "title": "TRAFFIC JAM IN BURMA [13] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-06T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/D76jZRyAcEA/maxresdefault.jpg",
         "views": "4339"
        },
        {
         "title": "THE PUPPET MASTER [12] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-05T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/LCh_zjfhLLE/maxresdefault.jpg",
         "views": "6153"
        },
        {
         "title": "INDIA A MAJOR ??? [11] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-04T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/p00U5IvQsXk/maxresdefault.jpg",
         "views": "5192"
        },
        {
         "title": "Top 10 Nations In MILLENNIUM DAWN Mod Year 2000 In Hearts of Iron 4 (HOI4)",
         "date": "2017-11-04T13:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Qq1aZ-ErWCo/maxresdefault.jpg",
         "views": "116814"
        },
        {
         "title": "ARM THE CHINESE [10] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-11-03T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/wpzIncXQxa0/maxresdefault.jpg",
         "views": "5986"
        },
        {
         "title": "HOI4 LOOTBOXES ARE HERE! Dev Diary - Hearts of Iron IV",
         "date": "2017-11-02T13:33:07Z",
         "thumbnail": "https://i.ytimg.com/vi/cFPb2BYeslA/maxresdefault.jpg",
         "views": "12110"
        },
        {
         "title": "RUSSIAN ENEMIES [9] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-31T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/-HhinyqYyS0/maxresdefault.jpg",
         "views": "6541"
        },
        {
         "title": "ELECTIONS [8] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-30T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/RYIeNtPUVa0/maxresdefault.jpg",
         "views": "7503"
        },
        {
         "title": "COLONIES THREATENED [7] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-29T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/fjHlecAOmrw/maxresdefault.jpg",
         "views": "6973"
        },
        {
         "title": "China Vs Russia Ep8 - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-29T13:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/7i_WLMUCWUo/maxresdefault.jpg",
         "views": "17570"
        },
        {
         "title": "COLONIES THREATENED [6] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-28T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/d8My2Ii5NEg/maxresdefault.jpg",
         "views": "8618"
        },
        {
         "title": "Israel Vs Egypt Ep7 - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-28T12:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/_oQotNBeRPo/maxresdefault.jpg",
         "views": "21095"
        },
        {
         "title": "EASTERN BUFFER DISMANTLED [5] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-27T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/hIsRaAVB6JQ/maxresdefault.jpg",
         "views": "11724"
        },
        {
         "title": "Serbia Vs Croatia Ep6 - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-27T12:00:08Z",
         "thumbnail": "https://i.ytimg.com/vi/tIq3jk93x_0/maxresdefault.jpg",
         "views": "23429"
        },
        {
         "title": "EXTENSION OF BUFFER STATES [4] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-26T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/sw18eCYBwxY/maxresdefault.jpg",
         "views": "13227"
        },
        {
         "title": "Germany Vs Poland Ep5 - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-26T12:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/E7UJHVYFvCc/maxresdefault.jpg",
         "views": "18671"
        },
        {
         "title": "PRODUCTION TAB CHANGES  Dev Diary - Hearts of Iron IV",
         "date": "2017-10-25T19:05:24Z",
         "thumbnail": "https://i.ytimg.com/vi/gmFZAL4hN94/maxresdefault.jpg",
         "views": "7251"
        },
        {
         "title": "SUPER ENTRENCHED [3] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-25T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/O2PdTGbvjxs/maxresdefault.jpg",
         "views": "15623"
        },
        {
         "title": "Greece Vs Turkey Ep4 - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-25T12:02:58Z",
         "thumbnail": "https://i.ytimg.com/vi/A4QIOV9yOcE/maxresdefault.jpg",
         "views": "41382"
        },
        {
         "title": "WHAT! EARLY WAR [2] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-24T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5SbLnhJiuI8/maxresdefault.jpg",
         "views": "18108"
        },
        {
         "title": "Pakistan Vs India Ep3 - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-24T16:24:37Z",
         "thumbnail": "https://i.ytimg.com/vi/7Om7JMmqZSI/maxresdefault.jpg",
         "views": "24764"
        },
        {
         "title": "PEACEFUL GERMANY [1] Germany - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-23T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/jbPA_xMHmQ0/maxresdefault.jpg",
         "views": "33339"
        },
        {
         "title": "Finland Vs Sweden Ep2 - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-23T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/U_DYbj-CYGg/maxresdefault.jpg",
         "views": "17270"
        },
        {
         "title": "Medieval Kingdom Wars - Skirmish Castle Defence 2/2",
         "date": "2017-10-23T10:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/p5kn0ydZEfc/maxresdefault.jpg",
         "views": "1430"
        },
        {
         "title": "Medieval Kingdom Wars - Skirmish Castle Defence 1/2",
         "date": "2017-10-23T10:15:00Z",
         "thumbnail": "https://i.ytimg.com/vi/VcaZtjyFFT0/maxresdefault.jpg",
         "views": "4753"
        },
        {
         "title": "NEW WORLD ORDER [18] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-22T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Y4WUI6ysJOk/maxresdefault.jpg",
         "views": "6245"
        },
        {
         "title": "RUSSIAN BULLY [17] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-21T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/q5QTBhig6ho/maxresdefault.jpg",
         "views": "4406"
        },
        {
         "title": "Top 10 Nations For New Players In Hearts of Iron 4 (HOI4)",
         "date": "2017-10-21T15:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5tFyIV_2PW8/maxresdefault.jpg",
         "views": "366115"
        },
        {
         "title": "CANADA DECLARES ON AMERICA [16] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-20T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/IJcqNURc1fM/maxresdefault.jpg",
         "views": "4184"
        },
        {
         "title": "Iran Vs Iraq Ep1 - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-20T14:28:38Z",
         "thumbnail": "https://i.ytimg.com/vi/JsKQBTNZPwg/maxresdefault.jpg",
         "views": "27297"
        },
        {
         "title": "POLITICAL DISASTER [15] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-19T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/qNwcBB6Ed-g/maxresdefault.jpg",
         "views": "4274"
        },
        {
         "title": "MASSIVE CHANGES TO GERMANY!  Dev Diary - Hearts of Iron IV",
         "date": "2017-10-19T11:14:14Z",
         "thumbnail": "https://i.ytimg.com/vi/gnDvyZRZX_w/maxresdefault.jpg",
         "views": "24759"
        },
        {
         "title": "UK OR GERMANY ??? [14] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-18T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/huhB2M0SN1s/maxresdefault.jpg",
         "views": "4777"
        },
        {
         "title": "TRAPPED IN THE MOUNTAINS [13] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-17T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/CXG17glVNkI/maxresdefault.jpg",
         "views": "4540"
        },
        {
         "title": "ITALY DECLARE [12] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-16T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/qYCbw1VUI2E/maxresdefault.jpg",
         "views": "5393"
        },
        {
         "title": "FULLY MECHANISED ARMY [11] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-15T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/V86_tNX2BUw/maxresdefault.jpg",
         "views": "6535"
        },
        {
         "title": "GERMANY IN EXILE SOMEWHERE [10] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-14T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8yTfjVHc1kA/maxresdefault.jpg",
         "views": "7556"
        },
        {
         "title": "EXPLOIT/CHEAT FREE EQUIPMENT - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-14T12:16:25Z",
         "thumbnail": "https://i.ytimg.com/vi/w-R7j6qZbGE/maxresdefault.jpg",
         "views": "39826"
        },
        {
         "title": "SOUTH AMERICA THEATRE [9] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-13T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/MZV0oaSv3lk/maxresdefault.jpg",
         "views": "6750"
        },
        {
         "title": "TANKS DON'T WORK IN MOUNTAINS [8] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-12T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/816eLed0hjg/maxresdefault.jpg",
         "views": "7558"
        },
        {
         "title": "NEW MULTIPLAYER FEATURES Dev Diary - Hearts of Iron IV",
         "date": "2017-10-12T11:59:00Z",
         "thumbnail": "https://i.ytimg.com/vi/LkRJlLUbVsA/maxresdefault.jpg",
         "views": "6014"
        },
        {
         "title": "2 FRONTS [7] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-11T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/8ToHQhj5P5U/maxresdefault.jpg",
         "views": "9152"
        },
        {
         "title": "CHALLENGE AXIS OF ASIA [6] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-10T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ALgvIZquwJM/maxresdefault.jpg",
         "views": "11812"
        },
        {
         "title": "FORTRESS BRITAIN [5] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-09T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/aNTbHHyj1hQ/maxresdefault.jpg",
         "views": "14580"
        },
        {
         "title": "FRENCH AVOID SURRENDER [4] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-08T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Jv3aik2uR6A/maxresdefault.jpg",
         "views": "14888"
        },
        {
         "title": "IBERIAN UNION ??? [3] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-07T19:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/zSi6CQJNfBI/maxresdefault.jpg",
         "views": "22331"
        },
        {
         "title": "DEFENCE OF THE UNITED KINGDOM GUIDE - Hearts of Iron 4 (HOI4)",
         "date": "2017-10-07T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/TMx0-t3RV9k/maxresdefault.jpg",
         "views": "15679"
        },
        {
         "title": "TROUBLE IN AFRICA [2] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-07T11:20:38Z",
         "thumbnail": "https://i.ytimg.com/vi/XvFw8CJtnrE/maxresdefault.jpg",
         "views": "20354"
        },
        {
         "title": "RESOURCE OVERHAUL Dev Diary - Hearts of Iron IV",
         "date": "2017-10-07T11:16:03Z",
         "thumbnail": "https://i.ytimg.com/vi/CkT3C2v53TM/maxresdefault.jpg",
         "views": "6882"
        },
        {
         "title": "KINGDOM OF PORTUGAL [1] Portugal - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-10-05T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/S3SzDWJPYq0/maxresdefault.jpg",
         "views": "43235"
        },
        {
         "title": "HISTORICAL DIVISION NAMES Dev Diary - Hearts of Iron IV",
         "date": "2017-10-03T13:03:29Z",
         "thumbnail": "https://i.ytimg.com/vi/T_bFdwmOMII/maxresdefault.jpg",
         "views": "5397"
        },
        {
         "title": "INTRO TO SUPPORT AND STABILITY Dev Diary - Hearts of Iron IV",
         "date": "2017-09-27T13:18:48Z",
         "thumbnail": "https://i.ytimg.com/vi/Q8qVXFdOONg/maxresdefault.jpg",
         "views": "11176"
        },
        {
         "title": "INCOMING CHAIN OF COMMAND Dev Diary - Hearts of Iron IV",
         "date": "2017-09-26T16:38:38Z",
         "thumbnail": "https://i.ytimg.com/vi/67XyivffY2w/maxresdefault.jpg",
         "views": "11375"
        },
        {
         "title": "GERMANY VS GERMANY [14] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-19T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/w5uZMo8QxYo/maxresdefault.jpg",
         "views": "8738"
        },
        {
         "title": "GERMANY HAS NUKES ??? [13] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-18T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6VZBYUCYvBY/maxresdefault.jpg",
         "views": "6952"
        },
        {
         "title": "BATTLECRUISER OPERATIONAL [12] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-17T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/SUX4_bB7GvA/maxresdefault.jpg",
         "views": "5906"
        },
        {
         "title": "NEW ENEMY DECLARES WAR !!! [11] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-16T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/7eM8xtOuwEw/maxresdefault.jpg",
         "views": "8281"
        },
        {
         "title": "MOP UP [10] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-15T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/noX71sCNc5c/maxresdefault.jpg",
         "views": "9503"
        },
        {
         "title": "BATTLE OF BRITAIN AGAIN [9] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-14T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/asnxFlTJwzY/maxresdefault.jpg",
         "views": "9397"
        },
        {
         "title": "FRANCE ROUND 2 [8] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-13T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/c-5YA-lXBNc/maxresdefault.jpg",
         "views": "10431"
        },
        {
         "title": "A NEW HOPE [7] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-12T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/OLhHYUX1Gp4/maxresdefault.jpg",
         "views": "12815"
        },
        {
         "title": "WHAT WENT WRONG? [6] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-08T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/QC2iiC04EE8/maxresdefault.jpg",
         "views": "11577"
        },
        {
         "title": "AUSTRIA IN DANGER [5] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-07T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6YAif7w-WNA/maxresdefault.jpg",
         "views": "14931"
        },
        {
         "title": "GERMANY IN DANGER [4] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-06T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3dFXOwMkIao/maxresdefault.jpg",
         "views": "22492"
        },
        {
         "title": "AUSTRIAN VOLUNTEERS GO ON WORLD TOUR [3] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-05T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/NyHtCJY3Mmk/maxresdefault.jpg",
         "views": "25486"
        },
        {
         "title": "CENTRALIZE THE EMPIRE [2] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-04T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/gwSKe02L-3I/maxresdefault.jpg",
         "views": "32879"
        },
        {
         "title": "AUSTRIA EMPIRE [1] Austria - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-09-03T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Mn_99QMlhrY/maxresdefault.jpg",
         "views": "68759"
        },
        {
         "title": "HOW TO BECOME SUPER SUPER CHINA [5] MULTIPLAYER CHINA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-09-02T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Us4rnPRFMHY/maxresdefault.jpg",
         "views": "13969"
        },
        {
         "title": "HOW TO INVADE JAPAN [4] MULTIPLAYER CHINA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-09-01T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/5VrZrx12NXk/maxresdefault.jpg",
         "views": "15893"
        },
        {
         "title": "HOW TO PUSH JAPAN OUT OF CHINA [3] MULTIPLAYER CHINA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-31T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/KujsLmgbVp8/maxresdefault.jpg",
         "views": "15512"
        },
        {
         "title": "HOW TO DEFEAT JAPAN [2] MULTIPLAYER CHINA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-30T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/1enWB7-lla0/maxresdefault.jpg",
         "views": "24544"
        },
        {
         "title": "MIN MAXING GUIDE FOR CHINA [1] MULTIPLAYER CHINA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-29T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4X67eUQgBTQ/maxresdefault.jpg",
         "views": "52160"
        },
        {
         "title": "FEEDBACK RAGE QUITS [8] Siam Multiplayer - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-28T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/qeWb8rRjfLM/maxresdefault.jpg",
         "views": "5221"
        },
        {
         "title": "FALL OF FEEDBACK [7] Siam Multiplayer - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-27T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/I6hABGOwA_k/maxresdefault.jpg",
         "views": "5709"
        },
        {
         "title": "INDIAN UNSTABLE AND TROUBLE IN RUSSIA [6] Siam Multiplayer - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-26T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/G-jo-I_cMKY/maxresdefault.jpg",
         "views": "5277"
        },
        {
         "title": "AMPHIBIOUS HACK - CHEAT/EXPLOIT - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-26T12:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/xiojsx7gvFk/maxresdefault.jpg",
         "views": "18480"
        },
        {
         "title": "2 MAJORS POWERS COLLAPSE [5] Siam Multiplayer - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-25T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/SoissNH8uTE/maxresdefault.jpg",
         "views": "6417"
        },
        {
         "title": "CANADIAN TURKEY TANK TRAP [4] Siam Multiplayer - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-24T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/C750TCzJcNU/maxresdefault.jpg",
         "views": "7289"
        },
        {
         "title": "WHAT? CHINA IS BEATING JAPAN [3] Siam Multiplayer - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-23T19:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/ge8dbzWQyYk/maxresdefault.jpg",
         "views": "8707"
        },
        {
         "title": "PREPARE FOR WAR [2] Siam Multiplayer - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-22T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/RRFqmDpWUto/maxresdefault.jpg",
         "views": "10371"
        },
        {
         "title": "SIAM JOINS THE AXIS [1] Siam Multiplayer - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-08-21T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/adr76ajxD1Y/maxresdefault.jpg",
         "views": "31952"
        },
        {
         "title": "THE SUN NEVER SETS ON THE BRITISH EMPIRE [7] Multiplayer United Kingdom - Hearts of Iron IV HOI4",
         "date": "2017-08-20T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/KefTKZoeQxw/maxresdefault.jpg",
         "views": "12494"
        },
        {
         "title": "HOW TO DO ENCIRCLEMENT'S [6] Multiplayer United Kingdom - Hearts of Iron IV HOI4",
         "date": "2017-08-19T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/PzxE3kRYIlA/maxresdefault.jpg",
         "views": "11368"
        },
        {
         "title": "HOW TO MAKE SUPER CHINA - CHEAT/EXPLOIT - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-19T12:41:17Z",
         "thumbnail": "https://i.ytimg.com/vi/5nVp-ne0c30/maxresdefault.jpg",
         "views": "86209"
        },
        {
         "title": "ACCIDENTAL DDAY [5] Multiplayer United Kingdom - Hearts of Iron IV HOI4",
         "date": "2017-08-18T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/VHl9qDmSgKQ/maxresdefault.jpg",
         "views": "16398"
        },
        {
         "title": "HOW TO INVADE ITALY [4] Multiplayer United Kingdom - Hearts of Iron IV HOI4",
         "date": "2017-08-17T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/CBvmkpwSPJ4/maxresdefault.jpg",
         "views": "17597"
        },
        {
         "title": "HOW TO WIN CONTROL OF THE MEDITERRANEAN SEA [3] Multiplayer United Kingdom - Hearts of Iron IV HOI4",
         "date": "2017-08-16T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/zAhh10f3Kos/maxresdefault.jpg",
         "views": "20106"
        },
        {
         "title": "HOW TO WIN THE BATTLE OF BRITAIN [2] Multiplayer United Kingdom - Hearts of Iron IV HOI4",
         "date": "2017-08-15T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/R4MvrYMMC5Q/maxresdefault.jpg",
         "views": "28724"
        },
        {
         "title": "UNITED KINGDOM MIN-MAXING Multiplayer Guide [1] Multiplayer United Kingdom - Hearts of Iron IV HOI4",
         "date": "2017-08-14T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/_RYjh19SKMQ/maxresdefault.jpg",
         "views": "57334"
        },
        {
         "title": "20 MILLION LOST [17] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-13T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nOskKYNtEz8/maxresdefault.jpg",
         "views": "6884"
        },
        {
         "title": "PLANES TYPES GUIDE - DAY 7# - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-13T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/P-UvKJRg9zU/maxresdefault.jpg",
         "views": "34437"
        },
        {
         "title": "SECOND SPANISH AMERICAN WAR [16] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-12T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/4omraGhFSfQ/maxresdefault.jpg",
         "views": "4350"
        },
        {
         "title": "SUPPLY GUIDE - DAY 6# - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-12T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/_9KWO8OzG94/maxresdefault.jpg",
         "views": "82205"
        },
        {
         "title": "NUCLEAR CARPET BOMBING [15] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-11T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nB7qE74aU9g/maxresdefault.jpg",
         "views": "3916"
        },
        {
         "title": "LOGISTICS AND PRODUCTION GUIDE - DAY 5# - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-11T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/7fxLJn7IFZA/maxresdefault.jpg",
         "views": "53973"
        },
        {
         "title": "ITALY DECLARES WAR [14] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-10T19:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/ztchyPqiRnI/maxresdefault.jpg",
         "views": "3683"
        },
        {
         "title": "GERMAN NAVY GUIDE - DAY 4# - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-10T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/A1t_rS3Pa6k/maxresdefault.jpg",
         "views": "35387"
        },
        {
         "title": "FALL OF RUSSIA ??? [13] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-09T19:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/JbrIETodTZE/maxresdefault.jpg",
         "views": "3940"
        },
        {
         "title": "BATTLE PLANS GUIDE - DAY 3# - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-09T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/Ay52pi3S-J8/maxresdefault.jpg",
         "views": "36227"
        },
        {
         "title": "FALL OF MITTELEUROPA [12] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-08T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0X-laX5wcGo/maxresdefault.jpg",
         "views": "4167"
        },
        {
         "title": "VEHICLE VARIANTS GUIDE - DAY 2# - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-08T13:52:50Z",
         "thumbnail": "https://i.ytimg.com/vi/pd-z69nPJyY/maxresdefault.jpg",
         "views": "18016"
        },
        {
         "title": "EXILED GERMANY [11] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-07T19:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/uJ2ZsFkjVLY/maxresdefault.jpg",
         "views": "5471"
        },
        {
         "title": "DIVISION TEMPLATE ROLES TUTORIAL GUIDE - DAY 1# - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-07T15:49:42Z",
         "thumbnail": "https://i.ytimg.com/vi/IsfQZIbrE2A/maxresdefault.jpg",
         "views": "42811"
        },
        {
         "title": "BACK STAB GERMANY [10] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-06T19:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/oGPds_5I72k/maxresdefault.jpg",
         "views": "6164"
        },
        {
         "title": "RETAKE THE COLONIES [9] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-05T19:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/gglRZWUIrvI/maxresdefault.jpg",
         "views": "6773"
        },
        {
         "title": "SHIP COMPOSITION / NAVY GUIDE - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-05T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/8rEXKfFRRlw/maxresdefault.jpg",
         "views": "73735"
        },
        {
         "title": "JUNGLE HIGHWAYS [8] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-04T19:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/6sqVbF0GlnM/maxresdefault.jpg",
         "views": "5448"
        },
        {
         "title": "PRO GAME MULTIPLAYER GAME ANALYSIS 3# - Hearts of Iron 4 (HOI4)",
         "date": "2017-08-04T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/G06fgdVi-EU/maxresdefault.jpg",
         "views": "14791"
        },
        {
         "title": "LONGEST EASTERN FRONT [7] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-03T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/l9r0SDZTTu8/maxresdefault.jpg",
         "views": "7680"
        },
        {
         "title": "UNIFIED IBERIA [6] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-02T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/usNgzTvPPPY/maxresdefault.jpg",
         "views": "9870"
        },
        {
         "title": "FRANCO SPANISH KINGDOM FORMED [5] - Spain - Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-08-01T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/VDvoL0285PA/maxresdefault.jpg",
         "views": "12200"
        },
        {
         "title": "INVAS1ON DISASTER [4] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-07-31T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/M8UQ9Nng804/maxresdefault.jpg",
         "views": "10872"
        },
        {
         "title": "COUNTER REV0LUTION BEGINS [3] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-07-30T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/bBKdLJ6tw1w/maxresdefault.jpg",
         "views": "15298"
        },
        {
         "title": "KINGDOMS F1GHT TOGETHER [2] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-07-29T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/9Duu2TdASSY/maxresdefault.jpg",
         "views": "20316"
        },
        {
         "title": "Top 10 Countries That Need A National Focus In Hearts of Iron 4 (HOI4)",
         "date": "2017-07-29T18:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/jIZ6blVTlrg/maxresdefault.jpg",
         "views": "85467"
        },
        {
         "title": "HOW TO AVOID THE SPANISH CIVIL WAR [1] - Spain- Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-07-28T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/SvUmeakAkCI/maxresdefault.jpg",
         "views": "36020"
        },
        {
         "title": "TOTAL TITOISM [16] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-27T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ncw2rgCgNTU/maxresdefault.jpg",
         "views": "6846"
        },
        {
         "title": "O BOY [15] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-26T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/WMbi_flFAvA/maxresdefault.jpg",
         "views": "3061"
        },
        {
         "title": "CHEATER YOU CHEATER!  [14] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-25T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/sNoKHA42730/maxresdefault.jpg",
         "views": "3953"
        },
        {
         "title": "MODERN RUSSIAN TANKS [13] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-22T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/BT7TkPb6LAk/maxresdefault.jpg",
         "views": "5034"
        },
        {
         "title": "PUPPETS DOING ALL THE WORK [12] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-21T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/5432RmClc9U/maxresdefault.jpg",
         "views": "5270"
        },
        {
         "title": "HOW TO BOMB JAPAN [7] MULTIPLAYER USA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-15T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/hbRDW5kQKsY/maxresdefault.jpg",
         "views": "12037"
        },
        {
         "title": "PRO GAME MULTIPLAYER GAME ANALYSIS 2# - Hearts of Iron 4 (HOI4)",
         "date": "2017-07-15T13:35:34Z",
         "thumbnail": "https://i.ytimg.com/vi/Pr6_AOcRt7c/maxresdefault.jpg",
         "views": "18405"
        },
        {
         "title": "10 FORT IN PARIS [11] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-14T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/-JoIwz-e0RA/maxresdefault.jpg",
         "views": "6275"
        },
        {
         "title": "OPERATION HUSKY [6] MULTIPLAYER USA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-14T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/EwHbgcFXcrM/maxresdefault.jpg",
         "views": "9105"
        },
        {
         "title": "GOOD IDEA TO FIGHT IN DESERT? [10] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-13T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/q-52DsTUZ8Q/maxresdefault.jpg",
         "views": "5739"
        },
        {
         "title": "ISLAND HOPPING GUIDE [5] MULTIPLAYER USA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-13T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/M_Xk6zCoQvI/maxresdefault.jpg",
         "views": "10672"
        },
        {
         "title": "SUPER HEAVY TANKS A GOOD IDEA? [9] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-12T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/v14MbxmsQcE/maxresdefault.jpg",
         "views": "10226"
        },
        {
         "title": "HOW TO LIBERATE AFRICA [4] MULTIPLAYER USA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-12T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ISX8aK8mTuQ/maxresdefault.jpg",
         "views": "13703"
        },
        {
         "title": "HOW TO GET RID OF DEPRESSION [3] MULTIPLAYER USA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-09T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/5ETvp3q6LzQ/maxresdefault.jpg",
         "views": "22605"
        },
        {
         "title": "100% WORLD TENSION [2] MULTIPLAYER USA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-08T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/Qdz6gSRvWWM/maxresdefault.jpg",
         "views": "24808"
        },
        {
         "title": "PRO GAME MULTIPLAYER GAME ANALYSIS 1# - Hearts of Iron 4 (HOI4)",
         "date": "2017-07-08T14:14:51Z",
         "thumbnail": "https://i.ytimg.com/vi/FAGkOVK43mk/maxresdefault.jpg",
         "views": "92925"
        },
        {
         "title": "NEW FACTIONS ARE BORN [8] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-07T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/bvSKISRHwzw/maxresdefault.jpg",
         "views": "10578"
        },
        {
         "title": "MIN MAXING GUIDE FOR AMERICA [1] MULTIPLAYER USA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-07T19:01:11Z",
         "thumbnail": "https://i.ytimg.com/vi/u-Pb96T-8Vk/maxresdefault.jpg",
         "views": "48420"
        },
        {
         "title": "BRING THEM COMMUN1SM [7] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-06T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/7bQDUBHBDrI/maxresdefault.jpg",
         "views": "12583"
        },
        {
         "title": "3 WAY WORLD WAR [6] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-05T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/cz6_l3jnLUM/maxresdefault.jpg",
         "views": "12963"
        },
        {
         "title": "TWITCH Q&amp;A [7] Romania - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-04T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/he8HFHVlFaE/maxresdefault.jpg",
         "views": "17466"
        },
        {
         "title": "HEAVY SELF PROPELLED ARTILLERY [5] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-04T19:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/lIy91Il80X0/maxresdefault.jpg",
         "views": "18206"
        },
        {
         "title": "ACID TRIP [6] Romania - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-03T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/iY3oabYcQQE/maxresdefault.jpg",
         "views": "17609"
        },
        {
         "title": "PAN-SLAVIC WORKERS CONGRESS FORMS  [4] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-03T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/6XFtnJAEuxw/maxresdefault.jpg",
         "views": "22257"
        },
        {
         "title": "GREAT GREATER ROMANIA [4] Romania - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-02T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/9CSwy7qZ_Dk/maxresdefault.jpg",
         "views": "26081"
        },
        {
         "title": "DEFEATED TITO :( [3] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-02T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/ollaRxNtlmw/maxresdefault.jpg",
         "views": "22354"
        },
        {
         "title": "RETAKE BESSARABIA [5] Romania - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-07-01T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/vYuB0UDcdjA/maxresdefault.jpg",
         "views": "25473"
        },
        {
         "title": "WAR WHAT IS IT GOOD FOR? [2] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-07-01T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/D8FWfv23BsU/maxresdefault.jpg",
         "views": "27139"
        },
        {
         "title": "THE ULTIMATE DIVISION SUPER MARINE / SPACE MARINE - Hearts of Iron 4 (HOI4)",
         "date": "2017-07-01T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/k389VW-3F4s/maxresdefault.jpg",
         "views": "91057"
        },
        {
         "title": "SOVIETS DEMAND BESSARABIA [3] Romania - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-30T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/KamPwXF_bHU/maxresdefault.jpg",
         "views": "34502"
        },
        {
         "title": "KINDA HISTORICAL TITO [1] Yugoslavia - Death or Dishonor - Hearts of Iron IV",
         "date": "2017-06-30T19:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/wY_cCk67Dfs/maxresdefault.jpg",
         "views": "49045"
        },
        {
         "title": "NON AGGRESSIVE ROMANIA [2] Romania - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-29T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/OhGVMJTsu5Q/maxresdefault.jpg",
         "views": "38242"
        },
        {
         "title": "BALKAN DOMINANCE [1] Romania - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-28T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/CDjV7Sc-2AE/maxresdefault.jpg",
         "views": "74734"
        },
        {
         "title": "PARADOX NUKED [16] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-28T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/8B723i0x8kY/maxresdefault.jpg",
         "views": "22266"
        },
        {
         "title": "NEW ALLIES [15] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-27T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/ZAm2kgPSMTw/maxresdefault.jpg",
         "views": "14884"
        },
        {
         "title": "THE WAR TO END ALL WARS AGAIN 2# [14] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-26T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/WZfhDUpYyr4/maxresdefault.jpg",
         "views": "17343"
        },
        {
         "title": "LAND OF THE NOT SO FREE [13] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-25T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/xAQcS-paZuY/maxresdefault.jpg",
         "views": "18435"
        },
        {
         "title": "WORLD REVOLUTION! [12] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-24T19:00:24Z",
         "thumbnail": "https://i.ytimg.com/vi/wmkB9dllR4Q/maxresdefault.jpg",
         "views": "19026"
        },
        {
         "title": "HOW TO MAKE SUPER ITALY - CHEAT/EXPLOIT - Hearts of Iron 4 (HOI4)",
         "date": "2017-06-24T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/5ANABwFSHwM/maxresdefault.jpg",
         "views": "316774"
        },
        {
         "title": "UNITED STATES OF CZECHOSLOVAKIA [10] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4",
         "date": "2017-06-23T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/HwCUa6I3DGk/maxresdefault.jpg",
         "views": "9235"
        },
        {
         "title": "WHAT SHOULD I DO NEXT? [11] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-23T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/BiVpzrNCr2w/maxresdefault.jpg",
         "views": "14667"
        },
        {
         "title": "MY UNITED STATES OF WHATEVER [9] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-22T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/Fb94nadAW9M/maxresdefault.jpg",
         "views": "7509"
        },
        {
         "title": "SHOULD I ATTACK CHINA? [10] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-22T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/ovMXk1zNYDE/maxresdefault.jpg",
         "views": "19546"
        },
        {
         "title": "CZECHOSLOVICTORY! [8] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-21T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/b4kNLJJWmms/maxresdefault.jpg",
         "views": "8065"
        },
        {
         "title": "TIME FOR PEACE? [9] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-21T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/9WAsIED1F-E/maxresdefault.jpg",
         "views": "23404"
        },
        {
         "title": "WHAT ARE YOU DOING AI ??? [7] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-20T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/U8kOt_bO9U4/maxresdefault.jpg",
         "views": "8734"
        },
        {
         "title": "HOW FAR CAN I EXPAND? [8] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-20T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/S2tP-en64No/maxresdefault.jpg",
         "views": "27274"
        },
        {
         "title": "FULL CZECH BRAZILIAN [6] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-19T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8_wJQ1476bU/maxresdefault.jpg",
         "views": "11282"
        },
        {
         "title": "WE NEED A NAVY [7] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-19T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/aR79xgTlEDQ/maxresdefault.jpg",
         "views": "33087"
        },
        {
         "title": "I WANT TO BREAK FREE [5] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-18T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/FPXfgeT1lC8/maxresdefault.jpg",
         "views": "16313"
        },
        {
         "title": "CAN WE TAKE GERMANY? [6] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-18T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/G45gO7BAgLw/maxresdefault.jpg",
         "views": "39400"
        },
        {
         "title": "WORST BORDERGORE EVER [4] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-17T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8EhJQPTN5cU/maxresdefault.jpg",
         "views": "19082"
        },
        {
         "title": "EMPIRE ASSEMBLES [5] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-17T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8sGN4k3XNds/maxresdefault.jpg",
         "views": "46876"
        },
        {
         "title": "DEATH OR DISHONOR NEW FEATURE - VEHICLE LICENCING Hearts of Iron IV HOI4",
         "date": "2017-06-17T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/MtwuHDvXc8k/maxresdefault.jpg",
         "views": "17524"
        },
        {
         "title": "ELITE CZECH COMMANDOS [3] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-16T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/iDqgHb3-5nY/maxresdefault.jpg",
         "views": "23817"
        },
        {
         "title": "SUPER DIVISIONS IN ACTION [4] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-16T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ecf7hTHcW-Y/maxresdefault.jpg",
         "views": "62381"
        },
        {
         "title": "DEATH OR DISHONOR NEW FEATURE - EQUIPMENT CONVERSION Hearts of Iron IV HOI4",
         "date": "2017-06-16T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/LfeJ-hXDCgA/maxresdefault.jpg",
         "views": "28745"
        },
        {
         "title": "CZECHMATE [2] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-15T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/DYU22gVzuog/maxresdefault.jpg",
         "views": "30339"
        },
        {
         "title": "WHAT SHOULD I DO ABOUT ROMANIA? [3] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-15T19:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/jHS09W_5OnY/maxresdefault.jpg",
         "views": "79118"
        },
        {
         "title": "CZECHOSLOVAKIAN PUPPET [1] CZECHOSLOVAKIA - Death or Dishonor - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-06-14T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/eVuDu_7EWH0/maxresdefault.jpg",
         "views": "61127"
        },
        {
         "title": "STUCK IN THE ALPS [2] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-14T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-IfIUXioEWk/maxresdefault.jpg",
         "views": "114824"
        },
        {
         "title": "AUSTRO-HUNGARIAN EMPIRE [1] HUNGARY - Death or Dishonor - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-13T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/APXKqqYeeHo/maxresdefault.jpg",
         "views": "222502"
        },
        {
         "title": "ETHIOPIA INTO JAPAN? [5] Ethiopia - Hearts of Iron IV",
         "date": "2017-06-12T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/WSglxH6Xkf0/maxresdefault.jpg",
         "views": "36280"
        },
        {
         "title": "JOIN THE WINNING SIDE LOL [4] Ethiopia - Hearts of Iron",
         "date": "2017-06-11T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/r1m5mhRgJI4/maxresdefault.jpg",
         "views": "45995"
        },
        {
         "title": "HOW TO WIN THE WINTER WAR - PART 2 - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-11T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/C8H5w207Vi4/maxresdefault.jpg",
         "views": "92293"
        },
        {
         "title": "HOW TO WIN THE WINTER WAR - PART 1 - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-11T17:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-VA31M43qtM/maxresdefault.jpg",
         "views": "166686"
        },
        {
         "title": "DISASTER IN IRAN [3] Ethiopia - Hearts of Iron IV",
         "date": "2017-06-10T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ag-zSLyd6Nw/maxresdefault.jpg",
         "views": "57636"
        },
        {
         "title": "NORTHERN EXPANSION [2] Ethiopia - Hearts of Iron IV",
         "date": "2017-06-09T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/2X06a7AbYfs/maxresdefault.jpg",
         "views": "86132"
        },
        {
         "title": "LEGACY OF SOLOMON [1] Ethiopia - Hearts of Iron IV",
         "date": "2017-06-08T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/J0cyWZ-3qHg/maxresdefault.jpg",
         "views": "168215"
        },
        {
         "title": "Dev Diary 7th of June 2017 - Hearts of Iron IV",
         "date": "2017-06-08T15:45:33Z",
         "thumbnail": "https://i.ytimg.com/vi/_6zeNn5v_bY/maxresdefault.jpg",
         "views": "3451"
        },
        {
         "title": "FREE CONTENT PACK - Dev Diary 1 Year Anniversary - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-06-06T18:40:41Z",
         "thumbnail": "https://i.ytimg.com/vi/E-3o5xYKWrc/maxresdefault.jpg",
         "views": "5642"
        },
        {
         "title": "HEARTS OF IRON 4 CHEATS #2 / Console commands - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-04T20:43:48Z",
         "thumbnail": "https://i.ytimg.com/vi/g1zSpqeBD6M/maxresdefault.jpg",
         "views": "351261"
        },
        {
         "title": "HOW TO TAKE OUT JAPAN [5] RUSSIA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-03T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/mZeJIf9WZR8/maxresdefault.jpg",
         "views": "20370"
        },
        {
         "title": "HOW TO WIN OPERATION BARBAROSSA [4] MULTIPLAYER RUSSIA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-02T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3M1eRzooQro/maxresdefault.jpg",
         "views": "28994"
        },
        {
         "title": "SO PEACEFUL [20] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-01T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/A1TQzt6xcZA/maxresdefault.jpg",
         "views": "11083"
        },
        {
         "title": "HOW TO BEAT THE JAPANESE [3] MULTIPLAYER RUSSIA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-06-01T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/NXiGfDjMO3w/maxresdefault.jpg",
         "views": "26384"
        },
        {
         "title": "Dev Diary 31st of May 2017 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-06-01T14:31:11Z",
         "thumbnail": "https://i.ytimg.com/vi/Ryy6YUYyfIc/maxresdefault.jpg",
         "views": "3048"
        },
        {
         "title": "NEW ENCIRCLEMENT TACTICS [19] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-31T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/qrLyL_NoQbc/maxresdefault.jpg",
         "views": "6105"
        },
        {
         "title": "HOW TO WIN THE SPANISH CIVIL WAR [2] MULTIPLAYER RUSSIA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-31T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nLL3Yzzein8/maxresdefault.jpg",
         "views": "29420"
        },
        {
         "title": "NEAR DISASTER [18] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-30T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/QQC4QP51FwE/maxresdefault.jpg",
         "views": "6763"
        },
        {
         "title": "MIN MAXING GUIDE FOR RUSSIA [1] MULTIPLAYER RUSSIA - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-30T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/ERNoSo2nHII/maxresdefault.jpg",
         "views": "73138"
        },
        {
         "title": "BREAKOUT [17] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-28T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/VhpRXHaSVp0/maxresdefault.jpg",
         "views": "6298"
        },
        {
         "title": "Dev Diary 24th of May 2017 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-05-28T10:49:45Z",
         "thumbnail": "https://i.ytimg.com/vi/huwTt7KqUDM/maxresdefault.jpg",
         "views": "3775"
        },
        {
         "title": "A SPEARHEAD TOO FAR [16] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-27T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/CWxODGhGr1Y/maxresdefault.jpg",
         "views": "6222"
        },
        {
         "title": "YUGOSLAVIA CHEATS [15] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-24T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/9F4crR0Mj8g/maxresdefault.jpg",
         "views": "8175"
        },
        {
         "title": "GREATER FINLAND IS BORN [14] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-23T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/q6dnEkcYUA0/maxresdefault.jpg",
         "views": "7805"
        },
        {
         "title": "WINTER WAR PART 2 [13] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-22T19:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/Z3GqVRNvQls/maxresdefault.jpg",
         "views": "7509"
        },
        {
         "title": "JAPANESE LAND IN OREGON [12] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-21T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/MLg0wB_C7ts/maxresdefault.jpg",
         "views": "8947"
        },
        {
         "title": "CAN I HOLD? [11] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-20T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/8q4quryWVhQ/maxresdefault.jpg",
         "views": "10505"
        },
        {
         "title": "TOP END GAME TECH In Hearts of Iron 4 (HOI4)",
         "date": "2017-05-20T14:35:06Z",
         "thumbnail": "https://i.ytimg.com/vi/2xLT1T2XATg/maxresdefault.jpg",
         "views": "33344"
        },
        {
         "title": "MERICA PLANNING [10] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-19T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/2z7cdZEecIE/maxresdefault.jpg",
         "views": "9491"
        },
        {
         "title": "Dev Diary 19th of May 2017 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-05-19T10:19:34Z",
         "thumbnail": "https://i.ytimg.com/vi/QK2One3mO3I/maxresdefault.jpg",
         "views": "4618"
        },
        {
         "title": "FRANCO-SPAINO UNIONO [28] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-17T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/WgNIneCFvVo/maxresdefault.jpg",
         "views": "3463"
        },
        {
         "title": "RUSSIAN REVOLUTION [27] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-16T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/W6j8O-Avivw/maxresdefault.jpg",
         "views": "1957"
        },
        {
         "title": "SUPER MING VISITS BRAZIL [26] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-15T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/IcBraLUM7eQ/maxresdefault.jpg",
         "views": "1756"
        },
        {
         "title": "KOREAN MEXICO FALLS TO MEXICO MEXICO [25] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-14T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/FqYmLLK2adY/maxresdefault.jpg",
         "views": "2065"
        },
        {
         "title": "ULTIMATE DIVISION TEMPLATE GUIDE PART 2 - Hearts of Iron 4 (HOI4)",
         "date": "2017-05-14T19:31:43Z",
         "thumbnail": "https://i.ytimg.com/vi/IM42aTjiw3o/maxresdefault.jpg",
         "views": "27170"
        },
        {
         "title": "IM SUPER RICH [24] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-13T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/sP6DCtHRSNw/maxresdefault.jpg",
         "views": "1751"
        },
        {
         "title": "PROGRESS STALLED [9] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-13T19:03:29Z",
         "thumbnail": "https://i.ytimg.com/vi/GbnrHm5mLNc/maxresdefault.jpg",
         "views": "12608"
        },
        {
         "title": "ULTIMATE DIVISION TEMPLATE GUIDE PART 1 - Hearts of Iron 4 (HOI4)",
         "date": "2017-05-13T18:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/heVOQEo5gqw/maxresdefault.jpg",
         "views": "70457"
        },
        {
         "title": "HISTORICAL KOREA FOUNDS MEXICO [23] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-12T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Vx5kIei36SU/maxresdefault.jpg",
         "views": "1852"
        },
        {
         "title": "EUROPE IN TROUBLE [8] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-12T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/YlQf8ZAMPBM/maxresdefault.jpg",
         "views": "13283"
        },
        {
         "title": "0 MANPOWER [22] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-11T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3eW1hpge83g/maxresdefault.jpg",
         "views": "1289"
        },
        {
         "title": "JAPAN SPREADS PEACE [7] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-11T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/UU3KSTHIaZs/maxresdefault.jpg",
         "views": "15602"
        },
        {
         "title": "RICH AND STUPID [21] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-10T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/DV5NSaMR-1M/maxresdefault.jpg",
         "views": "1482"
        },
        {
         "title": "INDIA CIVIL W@R PART 2 [6] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-10T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/EzX7yJzkz-c/maxresdefault.jpg",
         "views": "17163"
        },
        {
         "title": "Dev Diary - 10th of May 2017 - Hearts of Iron 4 HOI4 Paradox Interactiven IV HOI4",
         "date": "2017-05-10T12:36:06Z",
         "thumbnail": "https://i.ytimg.com/vi/vJ3ySviuG3U/maxresdefault.jpg",
         "views": "4213"
        },
        {
         "title": "WEEB GOD GENERAL [20] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-09T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/__TV_7dlFm4/maxresdefault.jpg",
         "views": "1593"
        },
        {
         "title": "INDIA CIVIL W@R [5] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-09T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/BfBm-ajzqdY/maxresdefault.jpg",
         "views": "20777"
        },
        {
         "title": "AGE OF WEEB WARZ [19] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-08T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1D-JKSoS-QI/maxresdefault.jpg",
         "views": "1691"
        },
        {
         "title": "A NEW EASTERN EUROPE [4] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-08T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/G_7NWWoDnek/maxresdefault.jpg",
         "views": "29594"
        },
        {
         "title": "DISASTER AT SEA [18] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-07T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/2mqrMq8e8Zk/maxresdefault.jpg",
         "views": "3090"
        },
        {
         "title": "C0MMUNISM DOESN'T WORK [3] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-07T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/B71MBKg-3Jo/maxresdefault.jpg",
         "views": "30896"
        },
        {
         "title": "KOREAN AUSSIES [17] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-06T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Dt7ndWNGWiI/maxresdefault.jpg",
         "views": "1978"
        },
        {
         "title": "ARSENAL OF DEMOCRACY [2] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-06T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/0F_me50q8KA/maxresdefault.jpg",
         "views": "44242"
        },
        {
         "title": "Top EXPLOITS In Hearts of Iron 4 (HOI4)",
         "date": "2017-05-06T18:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/v-4YEQaGDY8/maxresdefault.jpg",
         "views": "143255"
        },
        {
         "title": "CLICKED THE WRONG THING [16] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-05T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Ot-hMTRCxDc/maxresdefault.jpg",
         "views": "1780"
        },
        {
         "title": "PEACEFUL JAPAN [1] Democratic Japan - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-05-05T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/vdhSn_b4GBw/maxresdefault.jpg",
         "views": "103792"
        },
        {
         "title": "Dev Diary - 3rd of May 2017 - Hearts of Iron 4 HOI4 Paradox Interactiven IV HOI4",
         "date": "2017-05-03T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/zCDI_b_ejls/maxresdefault.jpg",
         "views": "6012"
        },
        {
         "title": "100k REBEL STACK [15] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-05-01T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3KCElMt6crU/maxresdefault.jpg",
         "views": "2453"
        },
        {
         "title": "2 FRONT! COALITION WARZ! [14] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-04-30T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/yOWU_R8T8sI/maxresdefault.jpg",
         "views": "2216"
        },
        {
         "title": "HOLY COW ROAST [13] - Korea - Mandate of Heaven EU4 Paradox",
         "date": "2017-04-29T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/N7lCofxdLfg/maxresdefault.jpg",
         "views": "2169"
        },
        {
         "title": "Dev Diary - 26th of April 2017 - Hearts of Iron 4 HOI4 Paradox Interactiven IV HOI4",
         "date": "2017-04-29T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/y-RPWNLEWCg/maxresdefault.jpg",
         "views": "5083"
        },
        {
         "title": "WEEB WARZ RETURN OF THE WEEB [12] - Korea - Mandate of Heaven EU4 Paradox",
         "date": "2017-04-28T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ATnQ06hLd-M/maxresdefault.jpg",
         "views": "2326"
        },
        {
         "title": "BALI KOREAN BBQ [11] - Korea - Mandate of Heaven EU4 Paradox",
         "date": "2017-04-27T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ZrW1Y4YBxXY/maxresdefault.jpg",
         "views": "2395"
        },
        {
         "title": "ELIMNIATE THE WEEBS [10] - Korea - Mandate of Heaven EU4 Paradox",
         "date": "2017-04-26T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6Ho1cGZIeyQ/maxresdefault.jpg",
         "views": "2767"
        },
        {
         "title": "BALI VACATION [9] - Korea - Mandate of Heaven EU4 Paradox",
         "date": "2017-04-25T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/nnLdr4uaaN8/maxresdefault.jpg",
         "views": "2358"
        },
        {
         "title": "HOW TO TAKE OUT AMERICA [4] MULTIPLAYER ITALY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-25T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/7xdtb4kdSKk/maxresdefault.jpg",
         "views": "19091"
        },
        {
         "title": "PARIKIA WARZ VERY SPICY [8] - Korea - Mandate of Heaven EU4 Paradox",
         "date": "2017-04-24T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/LLNX4Uv-gZk/maxresdefault.jpg",
         "views": "2703"
        },
        {
         "title": "HOW TO TAKE OUT RUSSIA [3] MULTIPLAYER ITALY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-24T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Kvgy4bXyNAg/maxresdefault.jpg",
         "views": "22698"
        },
        {
         "title": "KOREANS WARZ OF TUMERIC [7] - Korea - Mandate of Heaven EU4 Paradox",
         "date": "2017-04-23T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/I0J6oJBG8WQ/maxresdefault.jpg",
         "views": "3489"
        },
        {
         "title": "HOW TO TAKE OUT AFRICA [2] MULTIPLAYER ITALY - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-23T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Js9Q_o66seQ/maxresdefault.jpg",
         "views": "34555"
        },
        {
         "title": "Army Experience EXPLOIT! Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-22T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/rJJH5ysk_VM/maxresdefault.jpg",
         "views": "25887"
        },
        {
         "title": "HE WHO CONTROLS THE CINNAMON CONTROLS THE UNIVERSE [6] - Korea - Mandate of Heaven EU4 Paradox",
         "date": "2017-04-22T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/nIuxJj6r69s/maxresdefault.jpg",
         "views": "4442"
        },
        {
         "title": "ITALY MIN-MAXING Multiplayer Guide [1] MULTIPLAYER ITALY - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-04-22T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/VUqVx9CHPtc/maxresdefault.jpg",
         "views": "86835"
        },
        {
         "title": "AT LAST, REWARDS",
         "date": "2017-04-22T14:42:47Z",
         "thumbnail": "https://i.ytimg.com/vi/U2ygWOObyho/maxresdefault.jpg",
         "views": "1873"
        },
        {
         "title": "BABY SITTING GERMANY [16] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-21T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/fRbASSItv6E/maxresdefault.jpg",
         "views": "9356"
        },
        {
         "title": "500 CONVOYS AND COUNTING [15] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-20T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/K-fnDQk2FyE/maxresdefault.jpg",
         "views": "7178"
        },
        {
         "title": "Dev Diary - 12th and 18th of April 2017 - Hearts of Iron 4 HOI4 Paradox Interactiven IV HOI4",
         "date": "2017-04-20T18:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/z5magLTdBvE/maxresdefault.jpg",
         "views": "4221"
        },
        {
         "title": "NUCLEAR CHARGED [14] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-19T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/y6vkyJtf0U4/maxresdefault.jpg",
         "views": "7622"
        },
        {
         "title": "B0MBING BEGINS [13] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-18T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/WSsZaB69XW0/maxresdefault.jpg",
         "views": "8073"
        },
        {
         "title": "CARRIER HAS ARRIVED [12] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-17T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/hAiptX_VFLA/maxresdefault.jpg",
         "views": "9824"
        },
        {
         "title": "AFRICA DESERT STORM [11] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-16T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/uOjB5-6w4UA/maxresdefault.jpg",
         "views": "8913"
        },
        {
         "title": "2 SUPER HEAVY GRAVES [10] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-15T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/KmKmAM54_Vc/maxresdefault.jpg",
         "views": "11003"
        },
        {
         "title": "B@TTLESHIPS SUCK [9] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-13T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/XLotwCS7srk/maxresdefault.jpg",
         "views": "10465"
        },
        {
         "title": "SOVIETS DECLARE W@R [8] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-12T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/EPFw3ESlai4/maxresdefault.jpg",
         "views": "12553"
        },
        {
         "title": "RECOVERY [7] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-11T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/4tQQat3qaos/maxresdefault.jpg",
         "views": "13624"
        },
        {
         "title": "LOSING ON ALL FRONTS [6] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-10T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/dY-kdwBuNsk/maxresdefault.jpg",
         "views": "16356"
        },
        {
         "title": "USA DECLARES W@R [5] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-09T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nEaiJPIm62c/maxresdefault.jpg",
         "views": "18274"
        },
        {
         "title": "TIME FOR WARZ [4] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-08T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/YkrCSUUf3bM/maxresdefault.jpg",
         "views": "23302"
        },
        {
         "title": "GERMANY IN TROUBLE [3] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-07T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/uyM95dby_R8/maxresdefault.jpg",
         "views": "26353"
        },
        {
         "title": "SUPER SUPER HEAVY B@TTLESHIP [2] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-06T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/EpJiJxxWMng/maxresdefault.jpg",
         "views": "33644"
        },
        {
         "title": "THE AGE OF REFORMATION [5] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-04-06T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/O6p9sSfGyqo/maxresdefault.jpg",
         "views": "7306"
        },
        {
         "title": "ECONOMIC POWERHOUSE [1] Italy - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-05T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/q-x-WpSgzgc/maxresdefault.jpg",
         "views": "62055"
        },
        {
         "title": "BIRTH OF KOLONIZATION [4] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-04-05T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/DPN8RZKT5qw/maxresdefault.jpg",
         "views": "9125"
        },
        {
         "title": "KIVIL W@R [3] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-04-04T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Exsuqr1iFCQ/maxresdefault.jpg",
         "views": "8522"
        },
        {
         "title": "KOLONICAL KOREA [2] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-04-03T13:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/K-1e5cOGO4E/maxresdefault.jpg",
         "views": "11972"
        },
        {
         "title": "MANDATE OF HEAVEN [1] - Korea - Mandate of Heaven EU4 Paradox Interactive",
         "date": "2017-04-03T01:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6ThAIBnGqSI/maxresdefault.jpg",
         "views": "36777"
        },
        {
         "title": "American Guarantees EXPLAINED! Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-04-02T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/spEnAreb1MI/maxresdefault.jpg",
         "views": "37745"
        },
        {
         "title": "ZOG SUBMITS - ALBANIA WORLD DOMINATION - Hearts of Iron IV HOI4",
         "date": "2017-04-01T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/yaMfqF3Tows/maxresdefault.jpg",
         "views": "47461"
        },
        {
         "title": "Planning Bonus Tutorial + Bonus Exploit Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-03-31T19:00:09Z",
         "thumbnail": "https://i.ytimg.com/vi/xT5pFrcjASw/maxresdefault.jpg",
         "views": "14936"
        },
        {
         "title": "HORSE (NOT) STRONG [8] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-03-30T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/wkIMr7Lzujc/maxresdefault.jpg",
         "views": "12387"
        },
        {
         "title": "STEPPE BADLANDS [7] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-03-29T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/NVMB044BptM/maxresdefault.jpg",
         "views": "10365"
        },
        {
         "title": "CHARGE [6] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-03-28T19:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/qrZc3VGzXVI/maxresdefault.jpg",
         "views": "9977"
        },
        {
         "title": "DO OR D1E! THE FINAL [24] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-27T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4AE_51phd9U/maxresdefault.jpg",
         "views": "2824"
        },
        {
         "title": "INSTALL REINDEER GOVERNMENT [23] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-26T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/QSdsjvxHA2E/maxresdefault.jpg",
         "views": "1946"
        },
        {
         "title": "General/Field Marshal Tutorial + Ethiopia Exploit Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-03-26T16:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ClIxjBIed5s/maxresdefault.jpg",
         "views": "68184"
        },
        {
         "title": "IN THE BANKERS POCKET [22] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-25T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/gMxcNNrYdCE/maxresdefault.jpg",
         "views": "1735"
        },
        {
         "title": "Top 10 Underdog Nations In Hearts of Iron 4 (HOI4)",
         "date": "2017-03-25T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/jiEfjBzvluI/maxresdefault.jpg",
         "views": "381934"
        },
        {
         "title": "3 FRONTS [5] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-03-24T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/kOzBisBjTHo/maxresdefault.jpg",
         "views": "14172"
        },
        {
         "title": "2 FRONTS [4] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-03-23T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/eiTb_l2X-H8/maxresdefault.jpg",
         "views": "16537"
        },
        {
         "title": "OTTOMAN OR OTTOMEN [21] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-22T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/CndLS-Q4Nzc/maxresdefault.jpg",
         "views": "1996"
        },
        {
         "title": "RUSSIA DECLARES [3] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-03-22T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/u4JTABscoNM/maxresdefault.jpg",
         "views": "18980"
        },
        {
         "title": "LAPPS TAKE OVER [20] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-21T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/IvGVJXxkt_g/maxresdefault.jpg",
         "views": "1778"
        },
        {
         "title": "GENGHIS KHAN II [2] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-03-21T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/ScCWMqprb7g/maxresdefault.jpg",
         "views": "23747"
        },
        {
         "title": "DENMARKED [19] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-20T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/iXF26DiruWk/maxresdefault.jpg",
         "views": "1760"
        },
        {
         "title": "MONGOL EMPIRE OVERPOWERED [1] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-03-20T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/_R173YAo5h0/maxresdefault.jpg",
         "views": "50359"
        },
        {
         "title": "POLISH POLAND BEST POLAND [18] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-18T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Uh3EQI0cvos/maxresdefault.jpg",
         "views": "2356"
        },
        {
         "title": "VERY ENLIGHTENING [17] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-17T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8Lr0-EudqwI/maxresdefault.jpg",
         "views": "1777"
        },
        {
         "title": "THE PURGE [16] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-16T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/arY92h1xYOo/maxresdefault.jpg",
         "views": "1688"
        },
        {
         "title": "CALM BEFORE THE PURGE [15] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-15T21:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/hrFwHOut6Jc/maxresdefault.jpg",
         "views": "1736"
        },
        {
         "title": "OVER CONFIDENCE [14] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-15T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/xQnqsaOaOWE/maxresdefault.jpg",
         "views": "1086"
        },
        {
         "title": "THEOCRACY REQUIRES DIPLOMATIC IDEAS [13] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-15T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/FGsQZkDPc4A/maxresdefault.jpg",
         "views": "1276"
        },
        {
         "title": "CLAIMS [12] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-15T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/B6qV-bJPxcQ/maxresdefault.jpg",
         "views": "1213"
        },
        {
         "title": "Patch 1.3.3 Overview - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-03-12T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/pYaKF60f7T0/maxresdefault.jpg",
         "views": "24480"
        },
        {
         "title": "WHAT'S NEXT? March 2017 + MULTIPLAYER!",
         "date": "2017-03-12T13:11:31Z",
         "thumbnail": "https://i.ytimg.com/vi/sAiWJ31MlJ0/maxresdefault.jpg",
         "views": "1612"
        },
        {
         "title": "PUTIN'S PROUDEST MOMENT [11] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-11T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/aCrlJ6Bv2eQ/maxresdefault.jpg",
         "views": "2733"
        },
        {
         "title": "UNBEARABLE [10] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-10T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/GDFusanP5tk/maxresdefault.jpg",
         "views": "2204"
        },
        {
         "title": "NORWAY NOWAY! [9] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-09T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/cI6wfnVKNFM/maxresdefault.jpg",
         "views": "2338"
        },
        {
         "title": "UNCIVIL W@R [8] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-08T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/J0H0f1RFUgk/maxresdefault.jpg",
         "views": "2225"
        },
        {
         "title": "REINDEER VS BEAR PART 3 [7 Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-07T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/c-Fr25IV5a8/maxresdefault.jpg",
         "views": "2397"
        },
        {
         "title": "OCCUPY PARADOX HEADQUARTERS [6] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-06T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/__9zPizje-8/maxresdefault.jpg",
         "views": "3122"
        },
        {
         "title": "REINDEER VS BEAR PART 2 [5] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-05T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5Hs_4yYCVHg/maxresdefault.jpg",
         "views": "3389"
        },
        {
         "title": "REINDEER VS BEAR PART 1 [4] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-04T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/_qycPqisfec/maxresdefault.jpg",
         "views": "4769"
        },
        {
         "title": "ASSIMILATION [3] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-03T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/1idYGXPfRRc/maxresdefault.jpg",
         "views": "4879"
        },
        {
         "title": "SUGAR DADDY LITHUANIA [2] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-02T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/7lud2PtwVbs/maxresdefault.jpg",
         "views": "5691"
        },
        {
         "title": "REINDEER REPUBLIC [1] Lappland - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-03-01T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/r4E6hr2sQUM/maxresdefault.jpg",
         "views": "15624"
        },
        {
         "title": "THE FINAL COALITION [17] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-22T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/_730Ku9hmck/maxresdefault.jpg",
         "views": "10354"
        },
        {
         "title": "RETAKE CONSTANTINOPLE [16] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-21T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/mQ4THdnMTLI/maxresdefault.jpg",
         "views": "6458"
        },
        {
         "title": "MZAB REVOLT [15] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-20T21:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/vL7v1k0WZ2E/maxresdefault.jpg",
         "views": "4070"
        },
        {
         "title": "GOAL IBERIA [14] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-19T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/kQ7e8k0C9Vk/maxresdefault.jpg",
         "views": "4033"
        },
        {
         "title": "INTO INDIA [13] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-18T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/nDZFCbfSgvA/maxresdefault.jpg",
         "views": "5946"
        },
        {
         "title": "Dev Diary - 15th of February 2017 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-02-18T14:24:33Z",
         "thumbnail": "https://i.ytimg.com/vi/UYzD9klYKgg/maxresdefault.jpg",
         "views": "4721"
        },
        {
         "title": "FRANPLOSION [12] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-15T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/__1VQbHGcAM/maxresdefault.jpg",
         "views": "6095"
        },
        {
         "title": "EASTERN JIHAD [11] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-14T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/S8WSIKdXMDI/maxresdefault.jpg",
         "views": "5272"
        },
        {
         "title": "PERSIANS COMPROMISE [10] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-13T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/da9MOCN8GC0/maxresdefault.jpg",
         "views": "6589"
        },
        {
         "title": "ABBASID REVOLUTION [9] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-12T21:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/wcnZ378PITs/maxresdefault.jpg",
         "views": "8791"
        },
        {
         "title": "GO EAST [8] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-11T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/MmcZQlkQerM/maxresdefault.jpg",
         "views": "6832"
        },
        {
         "title": "Top 5 Alternative History Mods  In Hearts of Iron 4 (HOI4)",
         "date": "2017-02-11T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/TC5bPQNcHIw/maxresdefault.jpg",
         "views": "250890"
        },
        {
         "title": "LAND REFORMS [7] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-10T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/fRwK-pSuaF0/maxresdefault.jpg",
         "views": "8084"
        },
        {
         "title": "NUCLEAR APOCALYPSE [12] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-10T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Us4IjUA6Nd4/maxresdefault.jpg",
         "views": "10788"
        },
        {
         "title": "UMAYYADS TAKE CONTROL [6] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-09T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/gY26r7i5BUQ/maxresdefault.jpg",
         "views": "11319"
        },
        {
         "title": "RADIOACTIVE EUROPE [11] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-09T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/UHIMut1j3ic/maxresdefault.jpg",
         "views": "6703"
        },
        {
         "title": "GOLDEN AGE IS OVER [5] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-08T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/JwLYkotRL7s/maxresdefault.jpg",
         "views": "9528"
        },
        {
         "title": "CRASH AND BURN [10] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-08T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/DLfrkfQY1is/maxresdefault.jpg",
         "views": "6773"
        },
        {
         "title": "Dev Diary - 8th of February 2017 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-02-08T19:41:18Z",
         "thumbnail": "https://i.ytimg.com/vi/kKn0OrQMfIU/maxresdefault.jpg",
         "views": "4620"
        },
        {
         "title": "CHRISTIAN COALITION [4] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-07T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/W8ipV03Tqa8/maxresdefault.jpg",
         "views": "12082"
        },
        {
         "title": "TROUBLE IN EUROPE [9] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-07T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4jOxxODTuk4/maxresdefault.jpg",
         "views": "7126"
        },
        {
         "title": "CONVERT THE BERBERS [3] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-06T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/mU5mM1M7WBA/maxresdefault.jpg",
         "views": "13903"
        },
        {
         "title": "REVOLUTIONS [8] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-06T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ootig1aiMKk/maxresdefault.jpg",
         "views": "8458"
        },
        {
         "title": "ROME RESISTS [2] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-05T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/9tm4c61mcWY/maxresdefault.jpg",
         "views": "20256"
        },
        {
         "title": "COLD WAR [7] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-05T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/K81BKyXIjk4/maxresdefault.jpg",
         "views": "11679"
        },
        {
         "title": "A NEW RELIGION [1] Rise of Islam - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-02-04T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/fdmB4bkBVYI/maxresdefault.jpg",
         "views": "69552"
        },
        {
         "title": "COALITION FORMS [6] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-04T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/cQ3fSgcwrzY/maxresdefault.jpg",
         "views": "12648"
        },
        {
         "title": "Rocket Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-02-04T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/I58kcsc9Xhs/maxresdefault.jpg",
         "views": "135161"
        },
        {
         "title": "WORDS ARE BACKED UP WITH NUCLEAR WEAPONS [5] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-03T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/s1PyKlq_V8M/maxresdefault.jpg",
         "views": "15111"
        },
        {
         "title": "Battle of Britain Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-02-03T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/O9b7ag5NDE4/maxresdefault.jpg",
         "views": "17455"
        },
        {
         "title": "COMMIE VS COMMIE [4] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-02T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/gpXFcUBweH8/maxresdefault.jpg",
         "views": "19731"
        },
        {
         "title": "WHAT'S NEXT? February 2017 + El Salvador Gameplay + 15k Subs",
         "date": "2017-02-02T16:28:42Z",
         "thumbnail": "https://i.ytimg.com/vi/lnrvatL0hqY/maxresdefault.jpg",
         "views": "1641"
        },
        {
         "title": "NATIONALIST COMMUNIST [3] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-02-01T20:02:03Z",
         "thumbnail": "https://i.ytimg.com/vi/DaxEWgE1ng4/maxresdefault.jpg",
         "views": "22764"
        },
        {
         "title": "CHINESE MANPOWER [2] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-31T20:02:05Z",
         "thumbnail": "https://i.ytimg.com/vi/hFwx3Xmrijg/maxresdefault.jpg",
         "views": "29971"
        },
        {
         "title": "MALAYSIAN WORKERS REVOLT [1] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-30T20:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/q3OcWWvB7I0/maxresdefault.jpg",
         "views": "78503"
        },
        {
         "title": "UNIFICATION SHIASTAN [22] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-28T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Gk3-oO0DRrI/maxresdefault.jpg",
         "views": "4046"
        },
        {
         "title": "THE FINAL BATTLE [21] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-27T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/tZfXCRl-XiY/maxresdefault.jpg",
         "views": "3299"
        },
        {
         "title": "SHIA RAJ [20] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-26T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/i4itrxWIQtU/maxresdefault.jpg",
         "views": "1717"
        },
        {
         "title": "AUSTRIAN INDIA [19] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-25T21:01:02Z",
         "thumbnail": "https://i.ytimg.com/vi/579afIlx7mc/maxresdefault.jpg",
         "views": "1705"
        },
        {
         "title": "NEW TRUMP ORDER [5] Millennium Dawn Modern day Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-01-25T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/uW9fmSxdrhs/maxresdefault.jpg",
         "views": "28322"
        },
        {
         "title": "RUSSIANS IN INDIA [18] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-24T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/v9ckzQSj-i0/maxresdefault.jpg",
         "views": "1755"
        },
        {
         "title": "END OF CALL CENTRES [4] Millennium Dawn Modern day Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-01-24T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/LDe32clwrok/maxresdefault.jpg",
         "views": "27395"
        },
        {
         "title": "WE'RE NUMBER 1 [17] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-23T21:00:31Z",
         "thumbnail": "https://i.ytimg.com/vi/wBbGQzU_oAU/maxresdefault.jpg",
         "views": "1712"
        },
        {
         "title": "RETURN TO PARIS [10] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-23T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/u9d-efFl2TI/maxresdefault.jpg",
         "views": "18299"
        },
        {
         "title": "WAR WITH CHINA [3] Millennium Dawn Modern day Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-01-23T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/gY12cIGlGDM/maxresdefault.jpg",
         "views": "36729"
        },
        {
         "title": "ISLAMIC REPUBLIC [16] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-22T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/AwyAg1sAjss/maxresdefault.jpg",
         "views": "2191"
        },
        {
         "title": "CARVING UP THE WORLD [12] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-22T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Wt7dOtRsNMk/maxresdefault.jpg",
         "views": "10146"
        },
        {
         "title": "THE WALL IS COMPLETE [2] Millennium Dawn Modern day Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-01-22T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/XjxgmfoxdyQ/maxresdefault.jpg",
         "views": "38124"
        },
        {
         "title": "INAUGURATION OF TRUMP [1] Millennium Dawn Modern day Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2017-01-21T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1yu-ix3VVDI/maxresdefault.jpg",
         "views": "98056"
        },
        {
         "title": "MUSLIM INDIA [15] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-21T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/gNYMuzBcisY/maxresdefault.jpg",
         "views": "2302"
        },
        {
         "title": "AIR SUPERIROITY [11] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-21T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/E3UpVtxIQ14/maxresdefault.jpg",
         "views": "6912"
        },
        {
         "title": "How To Go Through The Maginot Line - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-01-21T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/lb8_uoLk_qU/maxresdefault.jpg",
         "views": "285367"
        },
        {
         "title": "INDIAN CONTROL [14] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-20T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/2w4V9HCnFt4/maxresdefault.jpg",
         "views": "1711"
        },
        {
         "title": "ALLIANCE OF EAST AND WEST [10] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-20T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/aBxb38SqKw4/maxresdefault.jpg",
         "views": "7134"
        },
        {
         "title": "How To Drop Nuclear Bombs Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-01-20T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/CmLdGH3Z55A/maxresdefault.jpg",
         "views": "35168"
        },
        {
         "title": "BREAKTHOUGH [13] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-19T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/9BPdNV4FyxQ/maxresdefault.jpg",
         "views": "1613"
        },
        {
         "title": "THE WAR OF IDEAS [9] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-19T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/lAWxzXgx5o4/maxresdefault.jpg",
         "views": "7718"
        },
        {
         "title": "FORTIFY THE SOUTH [12] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-18T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/_VGPM9RzpW8/maxresdefault.jpg",
         "views": "1693"
        },
        {
         "title": "ARAB SPRING [8] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-18T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/38pYmm1GkH8/maxresdefault.jpg",
         "views": "9762"
        },
        {
         "title": "WAR EXHAUSTED [11] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-17T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/OZ3UCQX1RRk/maxresdefault.jpg",
         "views": "1816"
        },
        {
         "title": "THE GRAND STRATEGY [7] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-17T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/Za_FQv1MLYo/maxresdefault.jpg",
         "views": "10305"
        },
        {
         "title": "DELHI PART 2 [10] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-16T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Xa-PiiU14NE/maxresdefault.jpg",
         "views": "2231"
        },
        {
         "title": "GERMAN SANDWICH [6] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-16T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/XL4QBH36JHE/maxresdefault.jpg",
         "views": "13263"
        },
        {
         "title": "SUPER POWER STATUS [9] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-15T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/_FYZlDx9iEY/maxresdefault.jpg",
         "views": "2081"
        },
        {
         "title": "THE SECOND WELTKRIEG [5] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-15T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Etnh9fr5vys/maxresdefault.jpg",
         "views": "15245"
        },
        {
         "title": "Indepth Navy Orders Composition Doctrines Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-01-15T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Il1LxKWFHxg/maxresdefault.jpg",
         "views": "99785"
        },
        {
         "title": "MINGSPLOSION [8] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-14T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/qgxH58qdlHE/maxresdefault.jpg",
         "views": "2605"
        },
        {
         "title": "A NEW ROMANIA [3] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-14T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ZWfEm5DAFDQ/maxresdefault.jpg",
         "views": "19694"
        },
        {
         "title": "Top 10 Shortcuts In Hearts of Iron 4 (HOI4)",
         "date": "2017-01-14T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/meZsHOydOsE/maxresdefault.jpg",
         "views": "13266"
        },
        {
         "title": "HOLD THE LINE [7] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-13T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ThzhBNDCij0/maxresdefault.jpg",
         "views": "2791"
        },
        {
         "title": "QUICK VICTORY NOT A OPTION [4] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-13T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/pnldu3Qs2Vo/maxresdefault.jpg",
         "views": "20342"
        },
        {
         "title": "How To Conquer Russia Fast WORLD RECORD Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-01-13T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/QdAdRTKkmXc/maxresdefault.jpg",
         "views": "271219"
        },
        {
         "title": "NEW CULTURE [6] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-12T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/PrhqsxWWEsQ/maxresdefault.jpg",
         "views": "2842"
        },
        {
         "title": "TRANSYLVANIAN OPPORTUNITY [2] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-12T20:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/_rPTC9jWKVo/maxresdefault.jpg",
         "views": "25580"
        },
        {
         "title": "BUST THEN BOOM [5] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-11T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/YpUA4EQVPP4/maxresdefault.jpg",
         "views": "3019"
        },
        {
         "title": "NATIONAL POPULISM ON THE RISE [1] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-11T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/oYVhLw1Yko4/maxresdefault.jpg",
         "views": "43892"
        },
        {
         "title": "CLASH OF THE INDIAN SUPER POWERS [4] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-10T21:21:30Z",
         "thumbnail": "https://i.ytimg.com/vi/aEgDHOE-PMw/maxresdefault.jpg",
         "views": "3449"
        },
        {
         "title": "THE COMMUNISM EXPERIMENT [9] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-10T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/1la_07XYwig/maxresdefault.jpg",
         "views": "17748"
        },
        {
         "title": "GREAT POWER AT THE DOOR [3] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-09T21:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/x9wafc-JDO0/maxresdefault.jpg",
         "views": "4049"
        },
        {
         "title": "BATTLE OF BRITAIN [8] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-09T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0hkYWMcyQek/maxresdefault.jpg",
         "views": "16622"
        },
        {
         "title": "SHIA FOR HIRE [2] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-08T21:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/c8rWML8khGM/maxresdefault.jpg",
         "views": "5124"
        },
        {
         "title": "HOME AT LAST [7] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-08T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/UzX_PNgFWFk/maxresdefault.jpg",
         "views": "21882"
        },
        {
         "title": "INDIAN SULTAN [1] Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2017-01-07T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/zofbIRg5vw8/maxresdefault.jpg",
         "views": "14600"
        },
        {
         "title": "LE JOUR DE LA LIBERATION [6] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-07T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/FoUU7WuSZ50/maxresdefault.jpg",
         "views": "20607"
        },
        {
         "title": "INDIAN TROUBLES [5] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-06T20:01:00Z",
         "thumbnail": "https://i.ytimg.com/vi/VQRZQqJMdr8/maxresdefault.jpg",
         "views": "21203"
        },
        {
         "title": "WAR OF LIBERATION [4] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-05T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/bl_nzwnnL0c/maxresdefault.jpg",
         "views": "32009"
        },
        {
         "title": "Top 10 Worst Starts In Hearts of Iron 4 (HOI4)",
         "date": "2017-01-04T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/sl0DbHHFPoA/maxresdefault.jpg",
         "views": "697751"
        },
        {
         "title": "BLITZ THROUGH AFRICA [3] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-04T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/O8MxXl3EIc0/maxresdefault.jpg",
         "views": "28637"
        },
        {
         "title": "How To Do The Perfect DDay Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-01-03T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/aHrTedikEoQ/maxresdefault.jpg",
         "views": "164539"
        },
        {
         "title": "COLONIES REBEL [2] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-03T20:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/wsHwEP4C8RU/maxresdefault.jpg",
         "views": "35641"
        },
        {
         "title": "WHAT'S NEXT? January 2017 + Ecuador Gameplay + 9000 Subs",
         "date": "2017-01-03T14:40:41Z",
         "thumbnail": "https://i.ytimg.com/vi/N2Z2A73fY9o/maxresdefault.jpg",
         "views": "2156"
        },
        {
         "title": "World Tension Exploit Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-01-02T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/gzApe6s4nJQ/maxresdefault.jpg",
         "views": "78697"
        },
        {
         "title": "FRANCE IN EXILE [1] Kaiserreich Mod - Hearts of Iron IV HOI4 Paradox",
         "date": "2017-01-02T20:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/x5sW0ODf63Y/maxresdefault.jpg",
         "views": "105313"
        },
        {
         "title": "How To Conquer China Fast! WORLD RECORD Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2017-01-01T22:17:46Z",
         "thumbnail": "https://i.ytimg.com/vi/iOP758bvm5A/maxresdefault.jpg",
         "views": "186831"
        },
        {
         "title": "INDIAN SUPERPOWER [7] Together For Victory - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-12-31T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6hlznCzZDNA/maxresdefault.jpg",
         "views": "14305"
        },
        {
         "title": "GANDHI MAKES NUKES [6] Together For Victory - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-12-30T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/DRO4gfhT5fg/maxresdefault.jpg",
         "views": "11627"
        },
        {
         "title": "MODERNIZATION [5] Together For Victory - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-12-29T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/PnHI0WayUVk/maxresdefault.jpg",
         "views": "14655"
        },
        {
         "title": "THE PUPPET MASTER [18] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-29T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/bTNWUQ0u-HI/maxresdefault.jpg",
         "views": "11502"
        },
        {
         "title": "INDIA DECLARES INDEPENDENCE [4] Together For Victory - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-12-28T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/YilOE0nWCps/maxresdefault.jpg",
         "views": "22509"
        },
        {
         "title": "FRENCH INVASION STALLS [17] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-28T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/TtJco9lQ--Y/maxresdefault.jpg",
         "views": "6024"
        },
        {
         "title": "HOW TO DO AN EASY WORLD CONQUEST! - Parody Video - Hearts of Iron IV HOI4",
         "date": "2016-12-27T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-wvKXehBeOo/maxresdefault.jpg",
         "views": "47112"
        },
        {
         "title": "DOMINION OF INDIA [3] Together For Victory - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-12-27T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Sa3raNJshA4/maxresdefault.jpg",
         "views": "21043"
        },
        {
         "title": "JAPANEASE INVASION OF EUROPE [16] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-27T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/HvqptvbLclo/maxresdefault.jpg",
         "views": "7178"
        },
        {
         "title": "EUROPE IN FLAMES [2] Together For Victory - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-12-26T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5CMSNR6kaU0/maxresdefault.jpg",
         "views": "24768"
        },
        {
         "title": "NEW ZEALAND NUKED [15] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-26T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/PbvOgCDVZYw/maxresdefault.jpg",
         "views": "6357"
        },
        {
         "title": "NUCLEAR GANDHI [1] Together For Victory - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-12-25T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/FwU6AfUfSxo/maxresdefault.jpg",
         "views": "50219"
        },
        {
         "title": "JAPAN HAS WMDS [14] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-25T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ojlU7R-eYgQ/maxresdefault.jpg",
         "views": "7076"
        },
        {
         "title": "TESTING OUT THE NEW FLEET [13] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-24T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/dP243h1xcbE/maxresdefault.jpg",
         "views": "6808"
        },
        {
         "title": "AMAZON WARRIORS [12] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-23T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Xc2wxzL1-es/maxresdefault.jpg",
         "views": "8279"
        },
        {
         "title": "RULES THE WAVES AND THE WORLD [11] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4",
         "date": "2016-12-22T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/uv2FHnZvGL4/maxresdefault.jpg",
         "views": "7864"
        },
        {
         "title": "NEW MODEL FLEET [11] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-22T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0V-UEsFT_jc/maxresdefault.jpg",
         "views": "8991"
        },
        {
         "title": "SURPRISE ATTACK [10] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-21T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/RTZjT2-UDyA/maxresdefault.jpg",
         "views": "5780"
        },
        {
         "title": "GUNS FALL SILENT IN EUROPE [10] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-21T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/puoEXSJOrig/maxresdefault.jpg",
         "views": "11912"
        },
        {
         "title": "EUROPE FALLS [38] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-20T21:19:40Z",
         "thumbnail": "https://i.ytimg.com/vi/fHPPNfguens/maxresdefault.jpg",
         "views": "3808"
        },
        {
         "title": "SURPRISE ATTACK [9] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-20T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/tidIeDS1jlc/maxresdefault.jpg",
         "views": "6993"
        },
        {
         "title": "CAPITULATION ANNEXATION DEVASTATION [9] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-20T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1kJkgC61Zvo/maxresdefault.jpg",
         "views": "12365"
        },
        {
         "title": "CARVING UP THE RUSSIA [8] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-19T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Xp091qQvSj8/maxresdefault.jpg",
         "views": "8350"
        },
        {
         "title": "STARVE THE WORLD OF RUBBER AND OIL [8] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-19T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/I5Qt5C-zOm0/maxresdefault.jpg",
         "views": "12922"
        },
        {
         "title": "LOGISTICAL NIGHTMARES [7] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-18T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8IpAvu1PK6Q/maxresdefault.jpg",
         "views": "8389"
        },
        {
         "title": "CHINA TROOPS INVADES INDIA [7] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-18T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/g6DizhKmCFU/maxresdefault.jpg",
         "views": "13963"
        },
        {
         "title": "How To Use The New Spearhead Order In Together For Victory Expansion - Hearts of Iron 4 HOI4 Paradox",
         "date": "2016-12-18T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/kxJxGZv2Y1I/maxresdefault.jpg",
         "views": "82641"
        },
        {
         "title": "40 YEARS OF WAR [40] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-17T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/QTcXGoihumU/maxresdefault.jpg",
         "views": "12782"
        },
        {
         "title": "THAILAND ULTIMATUM [6] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-17T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/N3SwiVn9cOM/maxresdefault.jpg",
         "views": "17465"
        },
        {
         "title": "How To Abuse Your Puppets In Together For Victory Expansion - Hearts of Iron 4 HOI4 Paradox",
         "date": "2016-12-17T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/JFfakq1ioD8/maxresdefault.jpg",
         "views": "55064"
        },
        {
         "title": "UNIFIED FRONT [39] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-16T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/_3MG-ht-dfQ/maxresdefault.jpg",
         "views": "4457"
        },
        {
         "title": "LOGISTICAL STRUGGLE [6] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-16T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/VLCpQfC9_7w/maxresdefault.jpg",
         "views": "9445"
        },
        {
         "title": "INVASION CANCELLED [5] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-16T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ZATjQSm0xrI/maxresdefault.jpg",
         "views": "17241"
        },
        {
         "title": "Top Releasable Nations In Together For Victory Expansion PART 2 - Hearts of Iron 4 (HOI4)",
         "date": "2016-12-16T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/oiih3CJcOWs/maxresdefault.jpg",
         "views": "27919"
        },
        {
         "title": "EUROPE FALLS [38] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-15T22:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/eQrJJ5R8uZA/maxresdefault.jpg",
         "views": "2370"
        },
        {
         "title": "SUBDUING INDIA [5] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-15T21:00:32Z",
         "thumbnail": "https://i.ytimg.com/vi/onnk6w0GmU8/maxresdefault.jpg",
         "views": "13299"
        },
        {
         "title": "USA VS JAPAN [4] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-15T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/pUT-cH3iEFs/maxresdefault.jpg",
         "views": "24928"
        },
        {
         "title": "How To Use The New Autonomy System In Together For Victory Expansion - Hearts of Iron 4 HOI4 Paradox",
         "date": "2016-12-15T18:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/It_hTHl0tr0/maxresdefault.jpg",
         "views": "68387"
        },
        {
         "title": "REVERSE BARBAROSSA [37] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-14T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/aOOcl_oSU1w/maxresdefault.jpg",
         "views": "3992"
        },
        {
         "title": "ULTRA NATIONALISM IN THE EU [4] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-14T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/qSEzczwDbKI/maxresdefault.jpg",
         "views": "16887"
        },
        {
         "title": "WAKE THE SLEEPING GIANT [3] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-14T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1i2T198rP4c/maxresdefault.jpg",
         "views": "25916"
        },
        {
         "title": "Dev Diary - 14th of December 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-14T16:16:47Z",
         "thumbnail": "https://i.ytimg.com/vi/rT0Zy2RVtOw/maxresdefault.jpg",
         "views": "1064"
        },
        {
         "title": "Top 10 Features In Together For Victory Expansion - Hearts of Iron 4 (HOI4)",
         "date": "2016-12-14T14:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/S6KC-ZBd1zU/maxresdefault.jpg",
         "views": "51651"
        },
        {
         "title": "GERMAN STALEMATE [36] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-13T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/66bJZrD3gdM/maxresdefault.jpg",
         "views": "4296"
        },
        {
         "title": "POLITICALLY IMPOTENT [3] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-13T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Lb_JKK7hv7w/maxresdefault.jpg",
         "views": "14992"
        },
        {
         "title": "TOGETHER FOR VICTORY [2] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-13T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/Oe9OtPgQAXE/maxresdefault.jpg",
         "views": "30935"
        },
        {
         "title": "BLITZ THOUGH EUROPE [35] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-12T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/dKVI_xgoGl0/maxresdefault.jpg",
         "views": "3959"
        },
        {
         "title": "RETURN TO THE ABSOLUTE [2] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-12T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/5xWwzSzv4Ww/maxresdefault.jpg",
         "views": "17406"
        },
        {
         "title": "PUPPET MASTER JAPAN [1] Together For Victory - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-12T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nW06sPE5OhU/maxresdefault.jpg",
         "views": "75453"
        },
        {
         "title": "ANGLO-GERMAN ALLIANCE [1] Together For Victory FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-11T23:04:46Z",
         "thumbnail": "https://i.ytimg.com/vi/DjcLeS-tYGM/maxresdefault.jpg",
         "views": "49670"
        },
        {
         "title": "MISSION LIBERATE THE UK [34] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-11T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/zLz78t5ULJw/maxresdefault.jpg",
         "views": "3972"
        },
        {
         "title": "NAVAL DOMINATION [33] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-10T22:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/iKJQg_pK43E/maxresdefault.jpg",
         "views": "5347"
        },
        {
         "title": "Top Division Templates - Hearts of Iron 4 (HOI4)",
         "date": "2016-12-10T20:59:26Z",
         "thumbnail": "https://i.ytimg.com/vi/ePP-UXpVh-k/maxresdefault.jpg",
         "views": "633535"
        },
        {
         "title": "AFRICA RESOURCE GRAB [32] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-09T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/DEoPLOnMWR0/maxresdefault.jpg",
         "views": "5071"
        },
        {
         "title": "NAVAL AND AIR REFORMS [31] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-08T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/eCXeyY1t0Vo/maxresdefault.jpg",
         "views": "4715"
        },
        {
         "title": "FORTRESS JAPAN [11] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-08T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Qx4pB2D8KRA/maxresdefault.jpg",
         "views": "5031"
        },
        {
         "title": "ARSENAL OF DEMOCRACY [30] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-07T22:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/qE5JN0Xy-y0/maxresdefault.jpg",
         "views": "13856"
        },
        {
         "title": "FORTRESS JAPAN [10] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-07T21:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/rhy8SlB6DMc/maxresdefault.jpg",
         "views": "3299"
        },
        {
         "title": "Dev Diary - 7th of December 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-07T17:43:54Z",
         "thumbnail": "https://i.ytimg.com/vi/S0ErCd33a34/maxresdefault.jpg",
         "views": "1144"
        },
        {
         "title": "LONG WAR [29] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-06T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/mpSInTBy4uM/maxresdefault.jpg",
         "views": "9779"
        },
        {
         "title": "THE EMPIRE COLLASPSES [9] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-06T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/Kh95mVgnO-o/maxresdefault.jpg",
         "views": "4609"
        },
        {
         "title": "DUNKIRKED [28] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-05T22:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/t44MNA-C1Nk/maxresdefault.jpg",
         "views": "4760"
        },
        {
         "title": "WORLD VS RUSSIA [27] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-04T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ef6n7PaQ76I/maxresdefault.jpg",
         "views": "5494"
        },
        {
         "title": "ASIAN TOTALWAR [8] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-04T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/29Dknd6JoUY/maxresdefault.jpg",
         "views": "4481"
        },
        {
         "title": "Top 10 Countries To Play In Together For Victory DLC Hearts of Iron 4 (HOI4)",
         "date": "2016-12-04T19:08:16Z",
         "thumbnail": "https://i.ytimg.com/vi/uMpYv9h0leU/maxresdefault.jpg",
         "views": "42439"
        },
        {
         "title": "UNITED SOVIET EUROASIA [26] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-03T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/Oar9yua8g5I/maxresdefault.jpg",
         "views": "5366"
        },
        {
         "title": "NEW ENEMIES [7] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-03T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/nnXhBq9IV9Q/maxresdefault.jpg",
         "views": "5858"
        },
        {
         "title": "Top Releasable Countries in Hearts of Iron 4 (HOI4)",
         "date": "2016-12-03T19:31:22Z",
         "thumbnail": "https://i.ytimg.com/vi/IKiqhCD668I/maxresdefault.jpg",
         "views": "135811"
        },
        {
         "title": "FALL OF EUROPE [25] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-02T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/QuCIIudfIMw/maxresdefault.jpg",
         "views": "6071"
        },
        {
         "title": "JAPAN SPHERE [6] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-02T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4A1I4hIfflk/maxresdefault.jpg",
         "views": "6493"
        },
        {
         "title": "Top 10 Most Valuable States In Hearts of Iron 4 (HOI4)",
         "date": "2016-12-02T20:23:43Z",
         "thumbnail": "https://i.ytimg.com/vi/6-TQRWCwVf0/maxresdefault.jpg",
         "views": "172924"
        },
        {
         "title": "TREATY OF VERSAILLES [16] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-02T19:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/lROSJv-WKSU/maxresdefault.jpg",
         "views": "17189"
        },
        {
         "title": "END OF A ERA [24] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-01T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/UEctr0WBryA/maxresdefault.jpg",
         "views": "5925"
        },
        {
         "title": "EASTERN GOALS [5] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-12-01T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1YaB8qoQfq0/maxresdefault.jpg",
         "views": "8027"
        },
        {
         "title": "WITHDRAWAL FROM THE EAST [15] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-12-01T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/NRcZeqmQlko/maxresdefault.jpg",
         "views": "6400"
        },
        {
         "title": "WHAT'S NEXT? December 2016 + MILESTONE ACHIEVED + Q&amp;A",
         "date": "2016-12-01T18:52:20Z",
         "thumbnail": "https://i.ytimg.com/vi/L0rCfA904Nc/maxresdefault.jpg",
         "views": "430"
        },
        {
         "title": "LOGISTICS SUPPLY AND PLANNING [23] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-30T22:50:15Z",
         "thumbnail": "https://i.ytimg.com/vi/2Ex5n6xtYEQ/maxresdefault.jpg",
         "views": "5074"
        },
        {
         "title": "WAR OF PRODUCTION [4] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-11-30T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/GCo_VfLZQ04/maxresdefault.jpg",
         "views": "11324"
        },
        {
         "title": "THE END ??? [14] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-30T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/24wq1xav3MM/maxresdefault.jpg",
         "views": "8266"
        },
        {
         "title": "Dev Diary - 30th of November 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-30T16:00:41Z",
         "thumbnail": "https://i.ytimg.com/vi/VURp9zGEMRw/maxresdefault.jpg",
         "views": "787"
        },
        {
         "title": "SOCIALISM VS IMPERIALISM [3] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-11-29T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/alMkrzz3bks/maxresdefault.jpg",
         "views": "12683"
        },
        {
         "title": "POCKET HUNTING [13] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-29T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2UtaeDryCC4/maxresdefault.jpg",
         "views": "7548"
        },
        {
         "title": "EASTERN FRONT ABANDONED [22] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-28T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/n3FI90c0kBo/maxresdefault.jpg",
         "views": "6119"
        },
        {
         "title": "SECOND AMERICAN CIVIL WAR [2] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-11-28T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/z4OVr0trm5c/maxresdefault.jpg",
         "views": "18617"
        },
        {
         "title": "ITALIAN OPPORTUNITIES [12] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-28T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/hRxbBH953iQ/maxresdefault.jpg",
         "views": "7125"
        },
        {
         "title": "STABBED IN THE BACK [21] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-27T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/0pOBSwVhQ9o/maxresdefault.jpg",
         "views": "6177"
        },
        {
         "title": "WORLD REVOLUTION [1] Kaiserreich Mod FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-11-27T21:30:01Z",
         "thumbnail": "https://i.ytimg.com/vi/vg1fKklmH7U/maxresdefault.jpg",
         "views": "50013"
        },
        {
         "title": "SIEGE OF PARIS [11] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-27T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6j8QRWU7fJM/maxresdefault.jpg",
         "views": "9366"
        },
        {
         "title": "Patch 1.19 Denmark Update Overview - Europa Universalis 4 EU4 Paradox",
         "date": "2016-11-26T23:09:01Z",
         "thumbnail": "https://i.ytimg.com/vi/VmLlOyGXT4I/maxresdefault.jpg",
         "views": "8499"
        },
        {
         "title": "A NEW KIND OF WARFARE [10] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-26T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/jFc0PC7-30s/maxresdefault.jpg",
         "views": "10713"
        },
        {
         "title": "COMMUNISM WEST AND EAST [20] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-25T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/97a-TPvRysc/maxresdefault.jpg",
         "views": "8766"
        },
        {
         "title": "MANPOWER CRISIS [9] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-25T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/cY5uq8PbuT0/maxresdefault.jpg",
         "views": "10699"
        },
        {
         "title": "THE NEW EASTERN FRONT [8] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-24T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/1tRbh9c8gF0/maxresdefault.jpg",
         "views": "14063"
        },
        {
         "title": "Dev Diary - 23rd of November 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-23T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/veWtsBUN6rQ/maxresdefault.jpg",
         "views": "1209"
        },
        {
         "title": "EASTERN FRONT COLLAPSING [7] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-23T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Y6-OR-ZYduM/maxresdefault.jpg",
         "views": "16239"
        },
        {
         "title": "CENTRAL POWERS ARE WINNING [6] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-22T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/_gm2FoTcxKs/maxresdefault.jpg",
         "views": "17655"
        },
        {
         "title": "FASCISM JUGGERNAUT [19] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-21T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6xzcRfZH1kI/maxresdefault.jpg",
         "views": "9002"
        },
        {
         "title": "REVOLUTION !!! [31] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-21T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/o7boX1XPZfk/maxresdefault.jpg",
         "views": "4350"
        },
        {
         "title": "ARABIAN CONQUEST [5] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-21T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/7Z4R9BvccLI/maxresdefault.jpg",
         "views": "19162"
        },
        {
         "title": "COMMUNISM SPREADS [18] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-20T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/riiBdiYVwUI/maxresdefault.jpg",
         "views": "8675"
        },
        {
         "title": "WAR TO UNITE AMERICA [30] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-20T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-3Aif-PqOU8/maxresdefault.jpg",
         "views": "1719"
        },
        {
         "title": "How To Win The Spanish Civil War FAST - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-11-20T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Q9SPJkLy0q4/maxresdefault.jpg",
         "views": "115177"
        },
        {
         "title": "TURKS JOIN THE WAR [4] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-20T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/bg4iydWN4Zo/maxresdefault.jpg",
         "views": "24753"
        },
        {
         "title": "THE SECOND GREAT WAR [17] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-19T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/vtrimkNKKik/maxresdefault.jpg",
         "views": "10751"
        },
        {
         "title": "SPANISH CANADA [29] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-19T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2gWPRrtq1vk/maxresdefault.jpg",
         "views": "1248"
        },
        {
         "title": "ZOG SUBMITS AGAIN [9] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-19T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/9aPSdBMEgWg/maxresdefault.jpg",
         "views": "5812"
        },
        {
         "title": "THE GREAT WAR [3] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-19T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4Msc5T6e2MQ/maxresdefault.jpg",
         "views": "23591"
        },
        {
         "title": "FLASH POINT [16] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-18T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/_Sc0xAcNhLY/maxresdefault.jpg",
         "views": "9827"
        },
        {
         "title": "UNCONTESTED [28] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-18T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/KJA3xDbNwvo/maxresdefault.jpg",
         "views": "1329"
        },
        {
         "title": "ATTACK SO STRONG IT CRASHED [8] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-18T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/xaw1WhQjBrQ/maxresdefault.jpg",
         "views": "4350"
        },
        {
         "title": "WAR IN THE BALKANS [2] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-18T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/dH6ser8zI-k/maxresdefault.jpg",
         "views": "31544"
        },
        {
         "title": "DESTABILIZED EUROPE [15] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-17T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/k6V_ST1COhg/maxresdefault.jpg",
         "views": "10691"
        },
        {
         "title": "SPANISH AFRICA [27] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-17T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Qm_ROxJSTT8/maxresdefault.jpg",
         "views": "1347"
        },
        {
         "title": "MAKE THE WORLD GREAT AGAIN [7] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-17T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/EJX2uz5t3MU/maxresdefault.jpg",
         "views": "5430"
        },
        {
         "title": "TONIGHT WE DINE IN HELL HA OOH! [1] WWI Ottomans - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-17T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/7aZ7Jk04FwU/maxresdefault.jpg",
         "views": "56558"
        },
        {
         "title": "INTERWAR [14] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-16T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/jOmqfR-tHFw/maxresdefault.jpg",
         "views": "15561"
        },
        {
         "title": "A SECOND CHANCE [26] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-16T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/09EUKlaOGfs/maxresdefault.jpg",
         "views": "1241"
        },
        {
         "title": "Dev Diary - 16th of November 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-16T20:29:02Z",
         "thumbnail": "https://i.ytimg.com/vi/mSt_ZmrvpdQ/maxresdefault.jpg",
         "views": "832"
        },
        {
         "title": "REUNITED STATES [6] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-16T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/89FhW5MW5tY/maxresdefault.jpg",
         "views": "7715"
        },
        {
         "title": "10 MILLION DEAD [13] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-15T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/H8nGJNjWYGk/maxresdefault.jpg",
         "views": "14257"
        },
        {
         "title": "POLAND INTO SPACE [16] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-15T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/DAJ-UgctgmM/maxresdefault.jpg",
         "views": "4761"
        },
        {
         "title": "BOAT TRIPS [5] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-15T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/ubXzD9Vr7DI/maxresdefault.jpg",
         "views": "7368"
        },
        {
         "title": "HEARTS OF IRON 4 CHEATS! / Console commands - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-11-15T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/R1FGRT5CYsA/maxresdefault.jpg",
         "views": "1061582"
        },
        {
         "title": "TRENCH WARFARE [12] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-14T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4x6bsMwkku0/maxresdefault.jpg",
         "views": "11960"
        },
        {
         "title": "FEEDBACK IS A CHEATER [15] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-14T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/8HRDvOKbw6Y/maxresdefault.jpg",
         "views": "2397"
        },
        {
         "title": "EAST VS WEST [4] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-14T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/H5t-MjsjGn4/maxresdefault.jpg",
         "views": "11294"
        },
        {
         "title": "Invade USA Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-11-14T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/HVLJ95V7OhQ/maxresdefault.jpg",
         "views": "154345"
        },
        {
         "title": "OPERATION POLAND [11] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-13T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/tWjZokPdNns/maxresdefault.jpg",
         "views": "13103"
        },
        {
         "title": "ALL OUT OF NOODLES AND SUSHI [14] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-13T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6dS5lERC1gw/maxresdefault.jpg",
         "views": "2063"
        },
        {
         "title": "2016 FIGHT BACK [3] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-13T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/fVkcRlStzjQ/maxresdefault.jpg",
         "views": "13128"
        },
        {
         "title": "THE GREAT WAR BECOMES GREATER [10] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-12T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/ImBf61-JaYA/maxresdefault.jpg",
         "views": "16393"
        },
        {
         "title": "FATLAND DECLARES WAR [13] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-12T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/m500FT_1pfM/maxresdefault.jpg",
         "views": "2884"
        },
        {
         "title": "UNUNITED STATES OF AMERICA [2] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-12T20:00:06Z",
         "thumbnail": "https://i.ytimg.com/vi/hhuGw5LzNZM/maxresdefault.jpg",
         "views": "18234"
        },
        {
         "title": "FRANCE SURRENDERS [9] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-11T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/tuIztg3KtEg/maxresdefault.jpg",
         "views": "18268"
        },
        {
         "title": "SUSHI OR NOODLES ??? [12] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-11T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/gvY7_8HFwZ4/maxresdefault.jpg",
         "views": "2838"
        },
        {
         "title": "2016 ELECTION FALLOUT [1] USA Divided - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-11T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/36pV2ldbyTI/maxresdefault.jpg",
         "views": "33907"
        },
        {
         "title": "Dev Diary - 9th of November 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-11T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/13rlmgDPokc/maxresdefault.jpg",
         "views": "697"
        },
        {
         "title": "GERMAN BREAKTHROUGH [8] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-10T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/7ir_UMaLNww/maxresdefault.jpg",
         "views": "21022"
        },
        {
         "title": "PORTUGAL HIDES IN AFRICA [11] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-10T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/_aC-EyteQyQ/maxresdefault.jpg",
         "views": "3486"
        },
        {
         "title": "BIRTH OF THE USSR [7] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-09T22:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/rdjFXA0hkUY/maxresdefault.jpg",
         "views": "26276"
        },
        {
         "title": "TACTICAL GENIUS [10] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-09T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Z9L9UKdx3S8/maxresdefault.jpg",
         "views": "4245"
        },
        {
         "title": "COMMUNIST REVOLUTION !!! [6] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-08T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/SPLoGo4vgQM/maxresdefault.jpg",
         "views": "54046"
        },
        {
         "title": "ITALY VS RUSSIA [9] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-08T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Kwtmk1B0dVM/maxresdefault.jpg",
         "views": "3843"
        },
        {
         "title": "RUSSIAN REVOLUTION [5] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-07T22:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/nmo1YjRs_Xs/maxresdefault.jpg",
         "views": "46273"
        },
        {
         "title": "MODERNIZE POLAND [8] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-07T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/kBqFncmLGRM/maxresdefault.jpg",
         "views": "4505"
        },
        {
         "title": "TRENCH WARFARE [4] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-06T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Tsoa-MMI8c0/maxresdefault.jpg",
         "views": "41073"
        },
        {
         "title": "DISASTER IN INDIA [25] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-06T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/MKWfL73FvRw/maxresdefault.jpg",
         "views": "1822"
        },
        {
         "title": "MUSHROOM CLOUD [10] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-11-06T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/A2mZavfXt0s/maxresdefault.jpg",
         "views": "364"
        },
        {
         "title": "THE WAR TO END ALL WARS [3] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-05T22:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/C9i45CXgv5Y/maxresdefault.jpg",
         "views": "34899"
        },
        {
         "title": "CREATE GREATER POLAND [7] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-05T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ufRNJbepcGI/maxresdefault.jpg",
         "views": "6301"
        },
        {
         "title": "INDIAN AMBITIONS [24] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-05T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/rHAjKcyM2VE/maxresdefault.jpg",
         "views": "1246"
        },
        {
         "title": "MANHATTAN PROJECT [9] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-11-05T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/URJrx5tN8jE/maxresdefault.jpg",
         "views": "687"
        },
        {
         "title": "ITALY DECLARES WAR ON TURKEY [2] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-04T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/TCmj6Hqg_vo/maxresdefault.jpg",
         "views": "34259"
        },
        {
         "title": "HUGE LOSSES [6] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-04T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/XPiO7g9PSuE/maxresdefault.jpg",
         "views": "4846"
        },
        {
         "title": "SPANISH 13 COLONIES [23] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-04T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/vSAAbxtgQh4/maxresdefault.jpg",
         "views": "1567"
        },
        {
         "title": "FALL OF GERMANY [8] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-11-04T19:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/31m9FywY108/maxresdefault.jpg",
         "views": "239"
        },
        {
         "title": "THE GERMAN EMPIRE [1] The Great War Mod - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-03T22:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/fxL6zCUsHcg/maxresdefault.jpg",
         "views": "97094"
        },
        {
         "title": "GERMAN STALEMATE [5] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-03T21:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/q-CgurTagTY/maxresdefault.jpg",
         "views": "5533"
        },
        {
         "title": "COLONIAL OVERLORD [22] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-03T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/R2uxZ3KLEq8/maxresdefault.jpg",
         "views": "1452"
        },
        {
         "title": "GERMANY DECLARES WAR [7] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-11-03T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/BdnDldSmzQE/maxresdefault.jpg",
         "views": "230"
        },
        {
         "title": "WHAT'S NEXT? November 2016",
         "date": "2016-11-02T22:24:57Z",
         "thumbnail": "https://i.ytimg.com/vi/EiMwaFL5Csg/maxresdefault.jpg",
         "views": "513"
        },
        {
         "title": "CAN POLAND INTO GERMANY ??? [4] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-02T21:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/dC7dl9Dgc5o/maxresdefault.jpg",
         "views": "10754"
        },
        {
         "title": "OTTOMEN OPPORTUNTIES [21] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-02T20:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/07rgt5TmKto/maxresdefault.jpg",
         "views": "1277"
        },
        {
         "title": "BARBARIANS OF THE SOUTH [6] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-11-02T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/AsJtDqJQ4Nw/maxresdefault.jpg",
         "views": "188"
        },
        {
         "title": "Dev Diary - 2nd of November 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-02T14:11:41Z",
         "thumbnail": "https://i.ytimg.com/vi/GsRMdRMvWuY/maxresdefault.jpg",
         "views": "800"
        },
        {
         "title": "DANZIG OR WAR !!! [3] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-11-01T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/NWe3X_ck2kI/maxresdefault.jpg",
         "views": "10874"
        },
        {
         "title": "SPREADING SPANISH CULTURE [20] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-11-01T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/xxsUo42bkt8/maxresdefault.jpg",
         "views": "1675"
        },
        {
         "title": "SCIENCE !!! [5] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-11-01T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/gwQ8g132mtE/maxresdefault.jpg",
         "views": "388"
        },
        {
         "title": "CHINA BALL [2] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-31T21:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/sOrXuLmHank/maxresdefault.jpg",
         "views": "11237"
        },
        {
         "title": "HEIR ASSASSINATED RIP [19] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-31T20:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/TVVV23ngTI4/maxresdefault.jpg",
         "views": "1480"
        },
        {
         "title": "THE SIEGE OF SEOUL [4] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-10-31T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/avAcZGsS8Q0/maxresdefault.jpg",
         "views": "370"
        },
        {
         "title": "POLAND CAN INTO SPACE ??? [1] Poland - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-30T21:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/JM4B51o0O0o/maxresdefault.jpg",
         "views": "48164"
        },
        {
         "title": "FRANCE SURROUNDED [18] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-30T20:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/V1i_tYtYEUk/maxresdefault.jpg",
         "views": "1624"
        },
        {
         "title": "END OF THE USA [3] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-10-30T19:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/Lf1Iz6CpPDw/maxresdefault.jpg",
         "views": "480"
        },
        {
         "title": "CONTROL OF WEST AFRICA [17] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-29T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/bJVCkjCxWP0/maxresdefault.jpg",
         "views": "1684"
        },
        {
         "title": "USA VS RUSSIA [2] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-10-29T18:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/nKBCgvoEw-Y/maxresdefault.jpg",
         "views": "721"
        },
        {
         "title": "ONE WORLD ROMAN EMPIRE [15] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-28T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/vj0pqZrxs0M/maxresdefault.jpg",
         "views": "14192"
        },
        {
         "title": "PORTUGAL RIP [16] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-28T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/2538q98clz0/maxresdefault.jpg",
         "views": "1644"
        },
        {
         "title": "FOUNDING SAINT PETERSBURG [1] Peter The Great - Civilization 6 CIV6 CIV VI",
         "date": "2016-10-28T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/HSuUV-AKtg8/maxresdefault.jpg",
         "views": "1733"
        },
        {
         "title": "ITS NOT OVER! [14] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-27T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2Az9OEWycRY/maxresdefault.jpg",
         "views": "6329"
        },
        {
         "title": "ASSIMILATION [15] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-27T19:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/Dot_48Hofy8/maxresdefault.jpg",
         "views": "1847"
        },
        {
         "title": "AMERICAN INVASION [13] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-26T20:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/Jc_VdavEG4A/maxresdefault.jpg",
         "views": "5369"
        },
        {
         "title": "SPANISH EMPIRE ! [14] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-26T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/HX60nfmRbmc/maxresdefault.jpg",
         "views": "2125"
        },
        {
         "title": "Dev Diary - 26th of October 2016 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-26T17:02:15Z",
         "thumbnail": "https://i.ytimg.com/vi/tFZdziXTe18/maxresdefault.jpg",
         "views": "616"
        },
        {
         "title": "THE BIGGEST INVASION IN HISTORY [12] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-25T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/fk7WyPe0juk/maxresdefault.jpg",
         "views": "7079"
        },
        {
         "title": "COALITION GROWS [13] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-25T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/IdWs_fKNZ7M/maxresdefault.jpg",
         "views": "1880"
        },
        {
         "title": "ROME DOWN UNDER [11] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-24T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/so_e9OVChVs/maxresdefault.jpg",
         "views": "6678"
        },
        {
         "title": "COALITION !!! [12] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-24T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/nBMBxPARplQ/maxresdefault.jpg",
         "views": "1962"
        },
        {
         "title": "UNITED AFRICA [10] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-23T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/VBh5CvLu2_0/maxresdefault.jpg",
         "views": "9042"
        },
        {
         "title": "HALF A MILLION CASUALTIES [11] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-23T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/M8rkEKk_zCg/maxresdefault.jpg",
         "views": "2647"
        },
        {
         "title": "How To Improve Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-23T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/myFHxU3ON_w/maxresdefault.jpg",
         "views": "4283"
        },
        {
         "title": "HUGE LOSSES IN NORWAY [9] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-22T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/nyf-GSfztVQ/maxresdefault.jpg",
         "views": "7270"
        },
        {
         "title": "WAR WITH FRANCE ??? [10] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-22T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-I3XO7FGLyo/maxresdefault.jpg",
         "views": "2421"
        },
        {
         "title": "Dev Diary - 19th of October 2016 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-22T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/QsDl5JNLxug/maxresdefault.jpg",
         "views": "518"
        },
        {
         "title": "AFRICAN STRUGGLES [8] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-21T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Xgp82zglIv8/maxresdefault.jpg",
         "views": "10180"
        },
        {
         "title": "STABLITY [9] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-21T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Pmub6a3ewws/maxresdefault.jpg",
         "views": "2564"
        },
        {
         "title": "Dev Diary - 12th of October 2016 2016 - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-21T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5SlbBLdtMTQ/maxresdefault.jpg",
         "views": "572"
        },
        {
         "title": "START OF WORLD WAR ROME [7] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-20T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8v--dPA65Q4/maxresdefault.jpg",
         "views": "11883"
        },
        {
         "title": "ANARCHY [8] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-20T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/CylYjb0v0YU/maxresdefault.jpg",
         "views": "3070"
        },
        {
         "title": "THE RISE OF A GIANT [6] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-19T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/nJ6M7T2phBA/maxresdefault.jpg",
         "views": "14119"
        },
        {
         "title": "END OF CASTILE [7] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-19T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/iajYVGFjUlU/maxresdefault.jpg",
         "views": "3323"
        },
        {
         "title": "DISASTER AT SEA [5] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-18T21:34:45Z",
         "thumbnail": "https://i.ytimg.com/vi/jFsLXaaDTRA/maxresdefault.jpg",
         "views": "14445"
        },
        {
         "title": "FALL OF ROME [6] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-18T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Uo9cMK12Vog/maxresdefault.jpg",
         "views": "3242"
        },
        {
         "title": "ROMANS INVADE CHINA [4] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-17T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/MqK2J9m2LpQ/maxresdefault.jpg",
         "views": "24966"
        },
        {
         "title": "HUGE VICTORY IN AFRICA [5] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-17T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ZOCkobgjvmQ/maxresdefault.jpg",
         "views": "3262"
        },
        {
         "title": "DEFEATED [3] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-16T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/HCt1TLM0cGA/maxresdefault.jpg",
         "views": "22446"
        },
        {
         "title": "AFRICAN EXTORTION [4] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-16T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/_kFVI5kq3yE/maxresdefault.jpg",
         "views": "4263"
        },
        {
         "title": "GERMANY DECLARES WAR [2] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-15T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/sqZZ6GKnDYw/maxresdefault.jpg",
         "views": "28925"
        },
        {
         "title": "FRANCE DECLARES WAR !!! [3] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-15T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/uASj9PXZ7wc/maxresdefault.jpg",
         "views": "4680"
        },
        {
         "title": "BIRTH OF NEW NEW ROME [1] World War Rome - Hearts of Iron 4 HOI4 Paradox Interactive",
         "date": "2016-10-14T21:36:27Z",
         "thumbnail": "https://i.ytimg.com/vi/fdT91e3YEeM/maxresdefault.jpg",
         "views": "86732"
        },
        {
         "title": "INSANELY LUCKY [2] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-14T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/py19Lw4E7kY/maxresdefault.jpg",
         "views": "5761"
        },
        {
         "title": "BIRTH OF MILITANT SPAIN [1] The Rights of Man DLC - Europa Universalis 4 EU4 Paradox Interactive",
         "date": "2016-10-13T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/vCGccJqwcBc/maxresdefault.jpg",
         "views": "16647"
        },
        {
         "title": "Arumba vs. Feedbackgaming [4] HITLER TOO STRONK - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-12T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/SZybDshdsuw/maxresdefault.jpg",
         "views": "8091"
        },
        {
         "title": "Arumba vs. Feedbackgaming [3] HITLER TOO STRONK - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-11T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/qZG7xHab8lA/maxresdefault.jpg",
         "views": "8854"
        },
        {
         "title": "Arumba vs. Feedbackgaming [2] HITLER TOO STRONK - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-10T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/tsSnTD8NaZQ/maxresdefault.jpg",
         "views": "7184"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [16] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-10T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/fKQePp1vWLI/maxresdefault.jpg",
         "views": "456"
        },
        {
         "title": "Arumba vs. Feedbackgaming [1] HITLER TOO STRONK - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-09T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/ju_srXEJBg8/maxresdefault.jpg",
         "views": "24508"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [15] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-09T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Z_n38hy83D8/maxresdefault.jpg",
         "views": "215"
        },
        {
         "title": "GREATEST COUNTRY IN THE WORLD [5] North Korea - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-08T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/HRBMDomHgKY/maxresdefault.jpg",
         "views": "26701"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [14] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-08T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/MSJaZTL2MCw/maxresdefault.jpg",
         "views": "239"
        },
        {
         "title": "GREATEST COUNTRY IN THE WORLD [4] North Korea - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-07T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/_C1ij-OBbjE/maxresdefault.jpg",
         "views": "18917"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [13] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-07T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/hVLaYu4MiCM/maxresdefault.jpg",
         "views": "215"
        },
        {
         "title": "GREATEST COUNTRY IN THE WORLD [3] North Korea - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-06T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/inFjrUp3jcM/maxresdefault.jpg",
         "views": "22428"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [12] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-06T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ejuse9ZUV2I/maxresdefault.jpg",
         "views": "204"
        },
        {
         "title": "FACE REVEAL - 3000 Subscribers! Support me on Patreon: https://www.patreon.com/user?u=392382",
         "date": "2016-10-06T16:01:09Z",
         "thumbnail": "https://i.ytimg.com/vi/ypf9g9BNR-k/maxresdefault.jpg",
         "views": "3386"
        },
        {
         "title": "GREATEST COUNTRY IN THE WORLD [2] North Korea - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-05T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/PMR-X2bv6EA/maxresdefault.jpg",
         "views": "26768"
        },
        {
         "title": "Invade the Soviet Union! Operation Barbarossa Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-05T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/oBDbjmRfjO4/maxresdefault.jpg",
         "views": "172032"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [11] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-05T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Kp1q2_9R4ns/maxresdefault.jpg",
         "views": "232"
        },
        {
         "title": "GREATEST COUNTRY IN THE WORLD [1] North Korea - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-04T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/4Hicz9fagwE/maxresdefault.jpg",
         "views": "74541"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [10] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-04T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/RqDYap1jOfM/maxresdefault.jpg",
         "views": "262"
        },
        {
         "title": "Invade the United Kingdom! Operation Sea Lion Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-10-04T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5Z4lQriTcLc/maxresdefault.jpg",
         "views": "175779"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [9] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-03T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/J0wljfzZroA/maxresdefault.jpg",
         "views": "298"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [8] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-02T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/tEFPGEHtEkU/maxresdefault.jpg",
         "views": "284"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [7] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-10-01T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/ad7N6UAdoxM/maxresdefault.jpg",
         "views": "330"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [15] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-30T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Ow2UtSrD2as/maxresdefault.jpg",
         "views": "3021"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [6] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-09-30T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Vr7p-Ap1HFs/maxresdefault.jpg",
         "views": "369"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [14] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-29T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/WlVWlOE9qUE/maxresdefault.jpg",
         "views": "1229"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [5] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-09-29T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/7gouUhWgL6M/maxresdefault.jpg",
         "views": "426"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [13] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-28T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/kLBEelqkGPo/maxresdefault.jpg",
         "views": "1530"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [4] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-09-28T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/x1fKpQ_Mn2Y/maxresdefault.jpg",
         "views": "450"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [12] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-27T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/MmHpyKqf3Ew/maxresdefault.jpg",
         "views": "1377"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [3] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-09-27T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/t3sH2vvQuEw/maxresdefault.jpg",
         "views": "587"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [11] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-26T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/7gvplMD6Okk/maxresdefault.jpg",
         "views": "1488"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [2] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-09-26T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/soa67TWtrLQ/maxresdefault.jpg",
         "views": "727"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [10] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-25T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/tF7NkYDQ2M0/maxresdefault.jpg",
         "views": "1753"
        },
        {
         "title": "Become KING! How To Play Crusader Kings II [1] FT. Alex Berg - CK2 Paradox Interactive",
         "date": "2016-09-25T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/LyCjwZm-iOE/maxresdefault.jpg",
         "views": "3473"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [9] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-24T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/CAtR9qtEk7M/maxresdefault.jpg",
         "views": "1905"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [8] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-23T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/kc7XcpSKrbQ/maxresdefault.jpg",
         "views": "1986"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [16] Soviet Union - Paradox Interactive",
         "date": "2016-09-23T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nnKsrv6UEMM/maxresdefault.jpg",
         "views": "2127"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [7] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-22T20:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Wv9TR8dUL6g/maxresdefault.jpg",
         "views": "2115"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [15] Soviet Union - Paradox Interactive",
         "date": "2016-09-22T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6vCaUj_-oDk/maxresdefault.jpg",
         "views": "1943"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [6] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-21T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/DnLNbPWR8E8/maxresdefault.jpg",
         "views": "2414"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [14] Soviet Union - Paradox Interactive",
         "date": "2016-09-21T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/68U_3GAIx8c/maxresdefault.jpg",
         "views": "2172"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [5] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-20T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/5gyK5eQ3zrQ/maxresdefault.jpg",
         "views": "2993"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [13] Soviet Union - Paradox Interactive",
         "date": "2016-09-20T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/1lcK7yixlaA/maxresdefault.jpg",
         "views": "2201"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [4] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-19T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ZJZ7_P68XZk/maxresdefault.jpg",
         "views": "4377"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [12] Soviet Union - Paradox Interactive",
         "date": "2016-09-19T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/4VD180aaPXM/maxresdefault.jpg",
         "views": "2341"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [3] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-18T14:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/o-wb67isT5E/maxresdefault.jpg",
         "views": "4474"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [11] Soviet Union - Paradox Interactive",
         "date": "2016-09-18T12:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/2s7_xpmA0Pc/maxresdefault.jpg",
         "views": "2566"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [2] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-17T14:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/EuVMoMzGq18/maxresdefault.jpg",
         "views": "5912"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [10] Soviet Union - Paradox Interactive",
         "date": "2016-09-17T12:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8VY-xVkyzt4/maxresdefault.jpg",
         "views": "2997"
        },
        {
         "title": "Shenryyr vs. Feedbackgaming - Tito's Yugoslavia [1] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-16T20:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/fMPXWv1DKRY/maxresdefault.jpg",
         "views": "18212"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [9] Soviet Union - Paradox Interactive",
         "date": "2016-09-16T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/F4OZPKy54ho/maxresdefault.jpg",
         "views": "3316"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [8] Soviet Union - Paradox Interactive",
         "date": "2016-09-15T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/I7kUKIohg04/maxresdefault.jpg",
         "views": "3693"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [7] Soviet Union - Paradox Interactive",
         "date": "2016-09-14T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Jd6I0UgjN5U/maxresdefault.jpg",
         "views": "4163"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [6] Soviet Union - Paradox Interactive",
         "date": "2016-09-13T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/6NDh4DuQ_zM/maxresdefault.jpg",
         "views": "4965"
        },
        {
         "title": "How To Install Beta Patches On Steam",
         "date": "2016-09-12T23:10:26Z",
         "thumbnail": "https://i.ytimg.com/vi/OKG0AFSVBwU/maxresdefault.jpg",
         "views": "7789"
        },
        {
         "title": "Patch 1.2 Sunflower BETA Overview - Hearts of Iron IV HOI4 HOI4 Paradox Interactive",
         "date": "2016-09-12T22:59:36Z",
         "thumbnail": "https://i.ytimg.com/vi/OvK3E8PHnz4/maxresdefault.jpg",
         "views": "8426"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [5] Soviet Union - Paradox Interactive",
         "date": "2016-09-12T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/g-uijJEVqJI/maxresdefault.jpg",
         "views": "5868"
        },
        {
         "title": "Persia Rising - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-11T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/kG-l5eKmP38/maxresdefault.jpg",
         "views": "1411"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [4] Soviet Union - Paradox Interactive",
         "date": "2016-09-11T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/mOZokn7ocYk/maxresdefault.jpg",
         "views": "7588"
        },
        {
         "title": "Food and Rations - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-10T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/qm6US1UxY_E/maxresdefault.jpg",
         "views": "3316"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [3] Soviet Union - Paradox Interactive",
         "date": "2016-09-10T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/A-4qhG1mK4E/maxresdefault.jpg",
         "views": "9989"
        },
        {
         "title": "Black Ice - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-09T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/8DWh4K5s_VU/maxresdefault.jpg",
         "views": "14168"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [2] Soviet Union - Paradox Interactive",
         "date": "2016-09-09T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/uFMj283bq20/maxresdefault.jpg",
         "views": "15125"
        },
        {
         "title": "Dev Diary - 9th of September 2016 - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-09T17:30:00Z",
         "thumbnail": "https://i.ytimg.com/vi/paJGIyLXvS8/maxresdefault.jpg",
         "views": "349"
        },
        {
         "title": "Après Moi, Le Déluge - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-08T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Z-Du3v3LBfY/maxresdefault.jpg",
         "views": "8901"
        },
        {
         "title": "How To Play Hearts of Iron 4 Beginners Guide [1] Soviet Union - Paradox Interactive",
         "date": "2016-09-08T18:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/hIEGz0ZuhHE/maxresdefault.jpg",
         "views": "49909"
        },
        {
         "title": "Scandinavian Union - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-06T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/QUE6AXRjGPY/maxresdefault.jpg",
         "views": "2084"
        },
        {
         "title": "National Focus Project - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-05T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/YcWpzBl-_ps/maxresdefault.jpg",
         "views": "5003"
        },
        {
         "title": "Dev Diary - 2nd of September 2016 - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-05T18:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/hLPzo3N5UNQ/maxresdefault.jpg",
         "views": "544"
        },
        {
         "title": "August Storm - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-04T13:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/PlLFU3y3O6I/maxresdefault.jpg",
         "views": "3937"
        },
        {
         "title": "Land Doctrine Rebalance 1.1 - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-09-03T13:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/wR9TpfE093g/maxresdefault.jpg",
         "views": "2078"
        },
        {
         "title": "Japan Joins The AXIS [11] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-09-01T16:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/3V1fhp4M54M/maxresdefault.jpg",
         "views": "4658"
        },
        {
         "title": "Japan Joins The AXIS [10] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox",
         "date": "2016-08-31T16:00:07Z",
         "thumbnail": "https://i.ytimg.com/vi/j5xKyoTGjSU/maxresdefault.jpg",
         "views": "4044"
        },
        {
         "title": "Japan Joins The AXIS [9] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-30T16:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/42D67fh_ml4/maxresdefault.jpg",
         "views": "3420"
        },
        {
         "title": "Infected Mod - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-29T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/IhKAccPbFYs/maxresdefault.jpg",
         "views": "1627"
        },
        {
         "title": "Japan Joins The AXIS [8] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-29T16:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/3wSOy0G83Fs/maxresdefault.jpg",
         "views": "3975"
        },
        {
         "title": "New World Order Mod - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-28T18:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/82UaC1gq0QM/maxresdefault.jpg",
         "views": "6331"
        },
        {
         "title": "Japan Joins The AXIS [7] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-28T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/T2MqGbN92j4/maxresdefault.jpg",
         "views": "4471"
        },
        {
         "title": "Millennium Dawn Mod Update - Mod Spotlight - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-27T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/VBnDkef9FhE/maxresdefault.jpg",
         "views": "8499"
        },
        {
         "title": "Japan Joins The AXIS [6] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-27T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/mnskdiY8KQk/maxresdefault.jpg",
         "views": "5239"
        },
        {
         "title": "Dev Diary - 26th of August 2016 [4] Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-26T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/VkX-iBHhpmw/maxresdefault.jpg",
         "views": "917"
        },
        {
         "title": "Japan Joins The AXIS [5] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-26T16:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-RSDWBXojh0/maxresdefault.jpg",
         "views": "5587"
        },
        {
         "title": "Hints Tips and Tricks - Beginner Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-25T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6a6YOKda9xg/maxresdefault.jpg",
         "views": "28283"
        },
        {
         "title": "Japan Joins The AXIS [4] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-25T16:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/yaqyft2aJGI/maxresdefault.jpg",
         "views": "7549"
        },
        {
         "title": "Japan Joins The AXIS [3] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-24T16:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/yCtXPZjeu9g/maxresdefault.jpg",
         "views": "7100"
        },
        {
         "title": "The Division Stats Guide - Beginner Tutorial - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-23T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/xp-W840SbVQ/maxresdefault.jpg",
         "views": "141331"
        },
        {
         "title": "Japan Joins The AXIS [2] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-23T16:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/Tsmy27tm1X4/maxresdefault.jpg",
         "views": "8447"
        },
        {
         "title": "President Trump USA [12] Hearts of Iron IV HOI4",
         "date": "2016-08-22T20:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/LWzahPLunRI/maxresdefault.jpg",
         "views": "4804"
        },
        {
         "title": "Japan Joins The AXIS [1] + Germany CO-OP! FT. Alex Berg - Hearts of Iron IV HOI4 Paradox Interactive",
         "date": "2016-08-22T19:54:22Z",
         "thumbnail": "https://i.ytimg.com/vi/UE4zAZHgSfw/maxresdefault.jpg",
         "views": "27726"
        },
        {
         "title": "President Trump USA [11] Hearts of Iron IV HOI4",
         "date": "2016-08-21T12:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Vpwhqi7vOVM/maxresdefault.jpg",
         "views": "2958"
        },
        {
         "title": "Dev Diary - 19th of August 2016 [3] Hearts of Iron IV HOI4",
         "date": "2016-08-20T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/GKqWQv5lvcw/maxresdefault.jpg",
         "views": "523"
        },
        {
         "title": "President Trump USA [10] Hearts of Iron IV HOI4",
         "date": "2016-08-20T16:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/YJQwWiSUiqs/maxresdefault.jpg",
         "views": "2255"
        },
        {
         "title": "President Trump USA [9] Hearts of Iron IV HOI4",
         "date": "2016-08-19T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/MSofr_iQQGI/maxresdefault.jpg",
         "views": "1834"
        },
        {
         "title": "President Trump USA [8] Hearts of Iron IV HOI4",
         "date": "2016-08-18T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/6gvX4rOjQ6Q/maxresdefault.jpg",
         "views": "1848"
        },
        {
         "title": "President Trump USA [7] Hearts of Iron IV HOI4",
         "date": "2016-08-17T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/SQPqmKgXqI8/maxresdefault.jpg",
         "views": "2648"
        },
        {
         "title": "President Trump USA [6] Hearts of Iron IV HOI4",
         "date": "2016-08-16T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/MzLkRcI97RY/maxresdefault.jpg",
         "views": "2524"
        },
        {
         "title": "Argentina vs USA [27] Hearts of Iron IV HOI4",
         "date": "2016-08-16T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/MmwRds_O304/maxresdefault.jpg",
         "views": "5043"
        },
        {
         "title": "Essential Interface Mods - Hearts of Iron IV HOI4",
         "date": "2016-08-15T22:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/dT6w-emzA-A/maxresdefault.jpg",
         "views": "35224"
        },
        {
         "title": "President Trump USA [5] Hearts of Iron IV HOI4",
         "date": "2016-08-15T20:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/DIVPwuop3YA/maxresdefault.jpg",
         "views": "3237"
        },
        {
         "title": "Argentina vs USA [26] Hearts of Iron IV HOI4",
         "date": "2016-08-15T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6_1N_iXYWtI/maxresdefault.jpg",
         "views": "1789"
        },
        {
         "title": "President Trump USA [4] Hearts of Iron IV HOI4",
         "date": "2016-08-14T13:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/-hZLptsRY2c/maxresdefault.jpg",
         "views": "4281"
        },
        {
         "title": "Argentina vs USA [25] Hearts of Iron IV HOI4",
         "date": "2016-08-14T12:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ZYv0q-jMeY0/maxresdefault.jpg",
         "views": "1344"
        },
        {
         "title": "Argentina vs USA [24] Hearts of Iron IV HOI4",
         "date": "2016-08-13T12:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/TlINNG2R3t8/maxresdefault.jpg",
         "views": "1453"
        },
        {
         "title": "President Trump USA [1] Hearts of Iron IV HOI4",
         "date": "2016-08-12T20:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/XrYuHAwNNj8/maxresdefault.jpg",
         "views": "21682"
        },
        {
         "title": "Argentina vs USA [23] Hearts of Iron IV HOI4",
         "date": "2016-08-12T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/aZTMwOyekzw/maxresdefault.jpg",
         "views": "1233"
        },
        {
         "title": "Dev Diary - 12th of August 2016 [2] Hearts of Iron IV HOI4",
         "date": "2016-08-12T16:07:16Z",
         "thumbnail": "https://i.ytimg.com/vi/S3-pt9ChsIM/maxresdefault.jpg",
         "views": "858"
        },
        {
         "title": "President Trump USA [2] Hearts of Iron IV HOI4",
         "date": "2016-08-12T14:40:49Z",
         "thumbnail": "https://i.ytimg.com/vi/WkCc7dhiy9c/maxresdefault.jpg",
         "views": "7807"
        },
        {
         "title": "President Trump USA [3] Hearts of Iron IV HOI4",
         "date": "2016-08-12T14:40:39Z",
         "thumbnail": "https://i.ytimg.com/vi/HH9YH0sX87Q/maxresdefault.jpg",
         "views": "4591"
        },
        {
         "title": "Argentina vs USA [22] Hearts of Iron IV HOI4",
         "date": "2016-08-11T17:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/dGvF9dQ5BD8/maxresdefault.jpg",
         "views": "1252"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [9] Hearts of Iron IV HOI4",
         "date": "2016-08-10T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/GBj_awejDIY/maxresdefault.jpg",
         "views": "16727"
        },
        {
         "title": "Argentina vs USA [21] Hearts of Iron IV HOI4",
         "date": "2016-08-10T17:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/h9usyAAQG0U/maxresdefault.jpg",
         "views": "1493"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [8] Hearts of Iron IV HOI4",
         "date": "2016-08-09T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/i-svJndHG-k/maxresdefault.jpg",
         "views": "12048"
        },
        {
         "title": "Argentina vs USA [20] Hearts of Iron IV HOI4",
         "date": "2016-08-09T17:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/q-zMdvxHL4o/maxresdefault.jpg",
         "views": "1680"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [7] Hearts of Iron IV HOI4",
         "date": "2016-08-08T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/zwBHlDP-6TQ/maxresdefault.jpg",
         "views": "13990"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [6] Hearts of Iron IV HOI4",
         "date": "2016-08-07T14:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/w7CT1YY-IjM/maxresdefault.jpg",
         "views": "9568"
        },
        {
         "title": "Argentina vs USA [19] Hearts of Iron IV HOI4",
         "date": "2016-08-07T12:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/JltGvvKfJrY/maxresdefault.jpg",
         "views": "2014"
        },
        {
         "title": "Argentina vs USA [18] Hearts of Iron IV HOI4",
         "date": "2016-08-06T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/H9ikSRT7bSQ/maxresdefault.jpg",
         "views": "2103"
        },
        {
         "title": "Dev Diary - 5th of August 2016 [1] Hearts of Iron IV HOI4",
         "date": "2016-08-06T00:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/JWoA26y3rFI/maxresdefault.jpg",
         "views": "1867"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [5] Hearts of Iron IV HOI4",
         "date": "2016-08-05T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/nLSjJebc4U8/maxresdefault.jpg",
         "views": "10446"
        },
        {
         "title": "Argentina vs USA [17] Hearts of Iron IV HOI4",
         "date": "2016-08-05T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/7Lsk9pDeWMo/maxresdefault.jpg",
         "views": "2060"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [RECAP] Hearts of Iron IV HOI4",
         "date": "2016-08-04T21:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/RnZsDOoH2XU/maxresdefault.jpg",
         "views": "8033"
        },
        {
         "title": "Argentina vs USA [16] Hearts of Iron IV HOI4",
         "date": "2016-08-04T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/9Zr2zhpk3CE/maxresdefault.jpg",
         "views": "2034"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [4] Hearts of Iron IV HOI4",
         "date": "2016-08-03T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/6HPVCco1YjY/maxresdefault.jpg",
         "views": "17681"
        },
        {
         "title": "Argentina vs USA [14] Hearts of Iron IV HOI4",
         "date": "2016-08-03T17:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/uru76tg_e9E/maxresdefault.jpg",
         "views": "2095"
        },
        {
         "title": "Argentina vs USA [15] Hearts of Iron IV HOI4",
         "date": "2016-08-03T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/4AhOFxoduIk/maxresdefault.jpg",
         "views": "2343"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [3] Hearts of Iron IV HOI4",
         "date": "2016-08-02T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/5be58MU07l8/maxresdefault.jpg",
         "views": "13634"
        },
        {
         "title": "Argentina vs USA [13] Hearts of Iron IV HOI4",
         "date": "2016-08-02T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/dESBCzMgVfI/maxresdefault.jpg",
         "views": "2342"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [2] Hearts of Iron IV HOI4",
         "date": "2016-08-01T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/67u3eehaDPQ/maxresdefault.jpg",
         "views": "18149"
        },
        {
         "title": "Argentina vs USA [12] Hearts of Iron IV HOI4",
         "date": "2016-08-01T17:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/rr0yFdv2gHM/maxresdefault.jpg",
         "views": "2646"
        },
        {
         "title": "Chinese Democracy vs Japan 1939 [1] Hearts of Iron IV HOI4",
         "date": "2016-07-31T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/rX3aNOfUvzA/maxresdefault.jpg",
         "views": "51476"
        },
        {
         "title": "Argentina vs USA [11] Hearts of Iron IV HOI4",
         "date": "2016-07-31T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/IPKyZKKQazc/maxresdefault.jpg",
         "views": "2602"
        },
        {
         "title": "Argentina vs USA [10] Hearts of Iron IV HOI4",
         "date": "2016-07-30T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/1NZrtp_Kgmo/maxresdefault.jpg",
         "views": "3116"
        },
        {
         "title": "Argentina vs USA [9] Hearts of Iron IV HOI4",
         "date": "2016-07-29T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/Grt7t3fY0SI/maxresdefault.jpg",
         "views": "3237"
        },
        {
         "title": "Argentina vs USA [8] Hearts of Iron IV HOI4",
         "date": "2016-07-28T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/cOZSgCmGYRQ/maxresdefault.jpg",
         "views": "3573"
        },
        {
         "title": "Argentina vs USA [7] Hearts of Iron IV HOI4",
         "date": "2016-07-27T17:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/nCWBo-jr4KM/maxresdefault.jpg",
         "views": "4100"
        },
        {
         "title": "Peaceful Germany [14] Hearts of Iron IV HOI4",
         "date": "2016-07-26T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/oBuargosI00/maxresdefault.jpg",
         "views": "19968"
        },
        {
         "title": "Argentina vs USA [6] Hearts of Iron IV HOI4",
         "date": "2016-07-26T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/ZpFY3JR7PdM/maxresdefault.jpg",
         "views": "4785"
        },
        {
         "title": "Peaceful Germany [13] Hearts of Iron IV HOI4",
         "date": "2016-07-25T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/RPkGIj55sig/maxresdefault.jpg",
         "views": "7738"
        },
        {
         "title": "Argentina vs USA [5] Hearts of Iron IV HOI4",
         "date": "2016-07-25T17:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/jSe-UlsafEM/maxresdefault.jpg",
         "views": "5698"
        },
        {
         "title": "Peaceful Germany [12] Hearts of Iron IV HOI4",
         "date": "2016-07-24T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Sd45nLbPzC0/maxresdefault.jpg",
         "views": "7972"
        },
        {
         "title": "Land Doctrines - Beginner Tutorial - Hearts of Iron IV HOI4",
         "date": "2016-07-24T17:01:18Z",
         "thumbnail": "https://i.ytimg.com/vi/TbqNx1yOYAE/maxresdefault.jpg",
         "views": "102057"
        },
        {
         "title": "Argentina vs USA [4] Hearts of Iron IV HOI4",
         "date": "2016-07-24T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/0268rF4mOsc/maxresdefault.jpg",
         "views": "7883"
        },
        {
         "title": "Peaceful Germany [11] Hearts of Iron IV HOI4",
         "date": "2016-07-23T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/lzXFVUYps5U/maxresdefault.jpg",
         "views": "8199"
        },
        {
         "title": "Argentina vs USA [3] Hearts of Iron IV HOI4",
         "date": "2016-07-23T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/gXnpfn01ZWQ/maxresdefault.jpg",
         "views": "8284"
        },
        {
         "title": "Peaceful Germany [10] Hearts of Iron IV HOI4",
         "date": "2016-07-22T19:00:05Z",
         "thumbnail": "https://i.ytimg.com/vi/t-Ds74jWQ-Q/maxresdefault.jpg",
         "views": "12079"
        },
        {
         "title": "Argentina vs USA [2] Hearts of Iron IV HOI4",
         "date": "2016-07-22T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/JZTT08k5Ld0/maxresdefault.jpg",
         "views": "9393"
        },
        {
         "title": "Peaceful Germany [9] Hearts of Iron IV HOI4",
         "date": "2016-07-21T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/BrP21lcA6bI/maxresdefault.jpg",
         "views": "14112"
        },
        {
         "title": "Argentina vs USA [1] Hearts of Iron IV HOI4",
         "date": "2016-07-21T17:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/_Z55VNr2oXs/maxresdefault.jpg",
         "views": "25141"
        },
        {
         "title": "Fascist Italy [19] Hearts of Iron IV HOI4",
         "date": "2016-07-20T18:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/YZyNrV9hRfs/maxresdefault.jpg",
         "views": "2283"
        },
        {
         "title": "Peaceful Germany [7] Hearts of Iron IV HOI4",
         "date": "2016-07-19T19:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/Vv7p7x8OiIQ/maxresdefault.jpg",
         "views": "23069"
        },
        {
         "title": "Fascist Italy [18] Hearts of Iron IV HOI4",
         "date": "2016-07-19T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/dQbN4rbgfsw/maxresdefault.jpg",
         "views": "1006"
        },
        {
         "title": "Peaceful Germany [6] Hearts of Iron IV HOI4",
         "date": "2016-07-18T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/a-xyd1dK-lQ/maxresdefault.jpg",
         "views": "27977"
        },
        {
         "title": "Fascist Italy [17] Hearts of Iron IV HOI4",
         "date": "2016-07-18T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/6ZUE7OcLtgI/maxresdefault.jpg",
         "views": "1047"
        },
        {
         "title": "Peaceful Germany [5] Hearts of Iron IV HOI4",
         "date": "2016-07-17T19:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/FEJVbShD2m4/maxresdefault.jpg",
         "views": "42375"
        },
        {
         "title": "Fascist Italy [16] Hearts of Iron IV HOI4",
         "date": "2016-07-17T17:00:30Z",
         "thumbnail": "https://i.ytimg.com/vi/-ZZbMgXWLUE/maxresdefault.jpg",
         "views": "615"
        },
        {
         "title": "Peaceful Germany [4] Hearts of Iron IV HOI4",
         "date": "2016-07-16T19:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/qj1Y0qWTAWw/maxresdefault.jpg",
         "views": "31971"
        },
        {
         "title": "Fascist Italy [15] Hearts of Iron IV HOI4",
         "date": "2016-07-16T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/BfyNRoit5dM/maxresdefault.jpg",
         "views": "627"
        },
        {
         "title": "Peaceful Germany [3] Hearts of Iron IV HOI4",
         "date": "2016-07-15T19:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/V_vvqmlblUs/maxresdefault.jpg",
         "views": "34861"
        },
        {
         "title": "Fascist Italy [14] Hearts of Iron IV HOI4",
         "date": "2016-07-15T17:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/kTUyxN4lgq0/maxresdefault.jpg",
         "views": "714"
        },
        {
         "title": "Peaceful Germany [2] Hearts of Iron IV HOI4",
         "date": "2016-07-14T19:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/fw5R1_y1C5E/maxresdefault.jpg",
         "views": "51405"
        },
        {
         "title": "Fascist Italy [13] Hearts of Iron IV HOI4",
         "date": "2016-07-14T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/LipoTfyDdXE/maxresdefault.jpg",
         "views": "755"
        },
        {
         "title": "Peaceful Germany [1] Hearts of Iron IV HOI4",
         "date": "2016-07-13T19:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/49DWmbIh25g/maxresdefault.jpg",
         "views": "114946"
        },
        {
         "title": "Fascist Italy [12] Hearts of Iron IV HOI4",
         "date": "2016-07-13T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/bgzB9J9IpG0/maxresdefault.jpg",
         "views": "869"
        },
        {
         "title": "Fascist Italy [11] Hearts of Iron IV HOI4",
         "date": "2016-07-12T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/EEI8WHndgsw/maxresdefault.jpg",
         "views": "900"
        },
        {
         "title": "Fascist Italy [10] Hearts of Iron IV HOI4",
         "date": "2016-07-11T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/pQV6SX5RXC4/maxresdefault.jpg",
         "views": "1071"
        },
        {
         "title": "Fascist Italy [9] Hearts of Iron IV HOI4",
         "date": "2016-07-10T17:00:01Z",
         "thumbnail": "https://i.ytimg.com/vi/Hd480yHkYVs/maxresdefault.jpg",
         "views": "1080"
        },
        {
         "title": "Fascist Italy [8] Hearts of Iron IV HOI4",
         "date": "2016-07-09T17:00:00Z",
         "thumbnail": "https://i.ytimg.com/vi/6-PartvZ-3s/maxresdefault.jpg",
         "views": "1587"
        },
        {
         "title": "Fascist Italy [7] Hearts of Iron IV HOI4",
         "date": "2016-07-08T17:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/r2NiEjjlI9w/maxresdefault.jpg",
         "views": "1471"
        },
        {
         "title": "Fascist Italy [6] Hearts of Iron IV HOI4",
         "date": "2016-07-07T17:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/ty9syd65pbY/maxresdefault.jpg",
         "views": "1992"
        },
        {
         "title": "Fascist Italy [5] Hearts of Iron IV HOI4",
         "date": "2016-07-06T17:00:04Z",
         "thumbnail": "https://i.ytimg.com/vi/pYKYshrDz7M/maxresdefault.jpg",
         "views": "1532"
        },
        {
         "title": "Fascist Italy [4] Hearts of Iron IV HOI4",
         "date": "2016-07-05T17:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/xmdol5ntiFI/maxresdefault.jpg",
         "views": "1703"
        },
        {
         "title": "Fascist Italy [3] Hearts of Iron IV HOI4",
         "date": "2016-07-04T17:00:03Z",
         "thumbnail": "https://i.ytimg.com/vi/xdUuJ6llaso/maxresdefault.jpg",
         "views": "1941"
        },
        {
         "title": "Fascist Italy [2] Hearts of Iron IV HOI4",
         "date": "2016-07-03T17:00:02Z",
         "thumbnail": "https://i.ytimg.com/vi/vGFYkaLpSRo/maxresdefault.jpg",
         "views": "2845"
        },
        {
         "title": "Fascist Italy [1] Hearts of Iron IV HOI4",
         "date": "2016-07-02T19:16:00Z",
         "thumbnail": "https://i.ytimg.com/vi/svVjRFf07pc/maxresdefault.jpg",
         "views": "11408"
        }
    ]
}