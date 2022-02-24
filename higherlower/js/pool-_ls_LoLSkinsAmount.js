//config
var conf_descriptionEnabled = false;
var conf_v2_enabled = false;

// Strings
if(global_language == 'de') {
    // Strings
    var gameStringTable = [
        'hat',
        'Skins',
        'hat',
        'Skins',
        '',
        '',
        'Mehr',
        'Weniger'
    ];
} else {
    // Strings
    var gameStringTable = [
        'has',
        'skins',
        'than',
        'skins',
        '',
        '',
        'More',
        'Less'
    ];
}



// Values
var listpool = [
    // name, value, thumbnail
    ['Aphelios', 1,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d1/Aphelios_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20191126220558'],
    ['Ornn', 1,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/df/Ornn_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021072714'],
    ['Sett', 1,'https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e3/Sett_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20191212011104'],
    ['Ivern', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/77/Ivern_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021094548'],
    ['Kayn', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1a/Kayn_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021200737'],
    ['Kindred', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a6/Kindred_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021191912'],
    ['Kled', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1e/Kled_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021093834'],
    ['Illaoi', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0b/Illaoi_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021053828'],
    ['Aurelion Sol', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/05/Aurelion_Sol_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021061452'],
    ['Senna', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bc/Senna_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20191030040849'],
    ['Sylas', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/98/Sylas_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20190108215838'],
    ['Taliyah', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9d/Taliyah_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021080218'],
    ['Yuumi', 2,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9b/Yuumi_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20190430193606'],
    ['Kalista', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/18/Kalista_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021110056'],
    ['Bard', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b5/Bard_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021095528'],
    ['Camille', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/32/Camille_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021102016'],
    ["Rek'Sai", 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/71/Rek%27Sai_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021061755'],
    ['Neeko', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c3/Neeko_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181119220901'],
    ['Pyke', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Pyke_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021052139'],
    ['Qiyana', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0f/Qiyana_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20190611183707'],
    ['Tahm Kench', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/17/Tahm_Kench_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021105930'],
    ["Vel'Koz", 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5f/Vel%27Koz_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021105217'],
    ['Zac', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f8/Zac_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021104725'],
    ['Zoe', 3,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/57/Zoe_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021025332'],
    ['Azir', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e2/Azir_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021040839'],
    ['Lissandra', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b3/Lissandra_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021094047'],
    ['Skarner', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/56/Skarner_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021041751'],
    ['Rumble', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/36/Rumble_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021034038'],
    ['Quinn', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/64/Quinn_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021100106'],
    ['Urgot', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/aa/Urgot_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021122432'],
    ['Xerath', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a0/Xerath_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021030751'],
    ['Xayah', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Xayah_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021020058'],
    ['Viktor', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e8/Viktor_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021083052'],
    ['Yorick', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d3/Yorick_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021101837'],
    ['Zyra', 4,'https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fd/Zyra_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021022022'],
    ["Kha'Zix", 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a2/Kha%27Zix_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021093941'],
    ['Mordekaiser', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/57/Mordekaiser_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20190529200453'],
    ['Jayce', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/89/Jayce_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021121203'],
    ['Jhin', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/52/Jhin_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021095701'],
    ["Kai'Sa", 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/65/Kai%27Sa_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021044153'],
    ['Cassiopeia', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/df/Cassiopeia_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021090944'],
    ['Elise', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/60/Elise_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021094810'],
    ['Swain', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d1/Swain_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021110155'],
    ['Sion', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/64/Sion_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021201219'],
    ['Nautilus', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0b/Nautilus_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021065645'],
    ['Rakan', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0c/Rakan_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021015322'],
    ['Udyr', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5b/Udyr_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021044803'],
    ['Taric', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d4/Taric_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021071059'],
    ['Volibear', 5,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/ba/Volibear_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021081129'],
    ['Lucian', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1f/Lucian_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021041635'],
    ['Heimerdinger', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/aa/Heimerdinger_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021043654'],
    ['Karthus', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c9/Karthus_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021122149'],
    ['Kassadin', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7d/Kassadin_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021040906'],
    ['Braum', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/06/Braum_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021064035'],
    ['Aatrox', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/92/Aatrox_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021120902'],
    ['Diana', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/79/Diana_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021043539'],
    ['Ekko', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a7/Ekko_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021110536'],
    ['Gnar', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9a/Gnar_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021102321'],
    ['Shyvana', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2b/Shyvana_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021082209'],
    ['Rengar', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c9/Rengar_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021065446'],
    ['Trundle', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d4/Trundle_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021091357'],
    ['Syndra', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8c/Syndra_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021104327'],
    ['Wukong', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/4/48/Wukong_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021060656'],
    ['Zed', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b4/Zed_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021050416'],
    ['Zilean', 6,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b1/Zilean_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021040707'],
    ['Malzahar', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3e/Malzahar_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021025847'],
    ['Maokai', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/02/Maokai_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021095415'],
    ['Kennen', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/10/Kennen_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021081847'],
    ['LeBlanc', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/63/LeBlanc_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021094721'],
    ['Brand', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5c/Brand_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021045242'],
    ["Cho'Gath", 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d8/Cho%27Gath_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021091106'],
    ['Galio', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d3/Galio_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021043248'],
    ['Nocturne', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/4/45/Nocturne_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021190815'],
    ['Nami', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ec/Nami_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20180412204516'],
    ['Talon', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/83/Talon_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021101417'],
    ['Vi', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a0/Vi_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021024832'],
    ['Yasuo', 7,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/39/Yasuo_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021032917'],
    ['Lulu', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/25/Lulu_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021040348'],
    ['Malphite', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bc/Malphite_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021050321'],
    ['Hecarim', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/61/Hecarim_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021025612'],
    ['Jinx', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/21/Jinx_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021081757'],
    ['Anivia', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3b/Anivia_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021033654'],
    ['Evelynn', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a2/Evelynn_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021094308'],
    ['Draven', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/82/Draven_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021105629'],
    ['Darius', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/18/Darius_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021074227'],
    ['Fiora', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Fiora_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021072310'],
    ['Sona', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9e/Sona_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021014549'],
    ['Shen', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b9/Shen_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021100040'],
    ['Shaco', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/af/Shaco_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021200810'],
    ['Olaf', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f7/Olaf_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021074840'],
    ['Nunu & Willump', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c4/Nunu_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20180814202011'],
    ['Nasus', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/86/Nasus_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021060311'],
    ['Pantheon', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6b/Pantheon_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20190730200815'],
    ['Orianna', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a1/Orianna_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021082529'],
    ['Varus', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/16/Varus_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021095954'],
    ['Thresh', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f3/Thresh_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021053334'],
    ['Xin Zhao', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/75/Xin_Zhao_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021035636'],
    ['Ziggs', 8,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/93/Ziggs_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021104706'],
    ['Leona', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3e/Leona_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021041840'],
    ['Jarvan IV', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/36/Jarvan_IV_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021035800'],
    ['Irelia', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/69/Irelia_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021045158'],
    ['Karma', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/50/Karma_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021043801'],
    ['Kayle', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7f/Kayle_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20190823022047'],
    ['Corki', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c3/Corki_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021103609'],
    ['Fizz', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/55/Fizz_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021073841'],
    ['Fiddlesticks', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/72/Fiddlesticks_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20200317195930'],
    ['Gangplank', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/80/Gangplank_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021045959'],
    ['Singed', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/77/Singed_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021054534'],
    ['Sejuani', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/cb/Sejuani_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021032725'],
    ['Morgana', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a5/Morgana_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20190823022123'],
    ['Poppy', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/da/Poppy_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021070631'],
    ['Rammus', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/87/Rammus_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021073243'],
    ['Vladimir', 9,'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a3/Vladimir_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021074658'],
    ['Master Yi', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/09/Master_Yi_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021054630'],
    ["Kog'Maw", 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/19/Kog%27Maw_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021103708'],
    ['Janna', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c9/Janna_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021093624'],
    ['Amumu', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/33/Amumu_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021095204'],
    ['Dr. Mundo', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/50/Dr._Mundo_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021032038'],
    ['Gragas', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b8/Gragas_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021114037'],
    ['Graves', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9b/Graves_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021070930'],
    ['Nidalee', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/34/Nidalee_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021114159'],
    ['Veigar', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/89/Veigar_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021053947'],
    ['Vayne', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/22/Vayne_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021045111'],
    ['Tryndamere', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b5/Tryndamere_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021031023'],
    ['Twitch', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9a/Twitch_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021104758'],
    ['Teemo', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3b/Teemo_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021055924'],
    ['Tristana', 10,'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/29/Tristana_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021102036'],
    ['Lux', 13,'https://vignette.wikia.nocookie.net/leagueoflegends/images/4/44/Lux_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021045718'],
    ['Lee Sin', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Lee_Sin_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021104539'],
    ['Jax', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2d/Jax_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021105603'],
    ['Caitlyn', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7b/Caitlyn_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021020339'],
    ['Blitzcrank', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/d/dc/Blitzcrank_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021025457'],
    ['Ahri', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/3/33/Ahri_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021035420'],
    ['Ashe', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c0/Ashe_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021092804'],
    ['Soraka', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/66/Soraka_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021094844'],
    ['Sivir', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Sivir_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021104116'],
    ['Riven', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/81/Riven_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021014421'],
    ['Renekton', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/17/Renekton_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021055725'],
    ['Twisted Fate', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/f/ff/Twisted_Fate_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021192225'],
    ['Warwick', 11,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6c/Warwick_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021055054'],
    ['Katarina', 12,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/97/Katarina_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021021026'],
    ['Akali', 12,'https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f7/Akali_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20180717205227'],
    ['Annie', 12,'https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8a/Annie_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021052608'],
    ['Garen', 12,'https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6d/Garen_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021041018'],
    ['Ryze', 12,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/ce/Ryze_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021102857'],
    ['Alistar', 13,'https://vignette.wikia.nocookie.net/leagueoflegends/images/5/54/Alistar_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021083619'],
    ['Ezreal', 13,'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/25/Ezreal_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20180925192611'],
    ['Miss Fortune', 14,'https://vignette.wikia.nocookie.net/leagueoflegends/images/9/91/Miss_Fortune_OriginalSkin.jpg/revision/latest/scale-to-width-down/700?cb=20181021020210']
];
