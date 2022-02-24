//config
var conf_descriptionEnabled = false;
var conf_v2_enabled = false;


// Strings
if(global_language == 'de') {
    // Strings
    var gameStringTable = [
        'hat',
        'Twitch Abonnenten',
        'hat',
        'Twitch Abonnenten',
        '',
        '',
        'Mehr',
        'Weniger'
    ];
} else {
    // Strings
    var gameStringTable = [
        'has',
        'Twitch Follower',
        'than',
        'Twitch Follower',
        '',
        '',
        'More',
        'Less'
    ];
}

// Values
var listpool = [
    // name, value, thumbnail
    ['ninja', 14727714,'https://static-cdn.jtvnw.net/jtv_user_pictures/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-300x300.png'],
    ['tfue', 7527131,'https://static-cdn.jtvnw.net/jtv_user_pictures/2470b5c6-a737-4ba6-8987-c28e0ca839e1-profile_image-300x300.jpg'],
    ['shroud', 7034885,'https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-300x300.png'],
    ['myth', 5764560,'https://static-cdn.jtvnw.net/jtv_user_pictures/d0d8b385-823b-4de5-8ec5-3737bc1c233c-profile_image-300x300.png'],
    ['riotgames', 4388100,'https://static-cdn.jtvnw.net/jtv_user_pictures/889e7697-b636-48d9-be15-a9a39e286a64-profile_image-300x300.png'],
    ['timthetatman', 4277214,'https://static-cdn.jtvnw.net/jtv_user_pictures/timthetatman-profile_image-4cb867e7d0af1448-300x300.jpeg'],
    ['dakotaz', 4244727,'https://static-cdn.jtvnw.net/jtv_user_pictures/68ae2f4b-2cb4-43e6-a34d-06e7b8d2fac7-profile_image-300x300.png'],
    ['summit1g', 4179524,'https://static-cdn.jtvnw.net/jtv_user_pictures/200cea12142f2384-profile_image-300x300.png'],
    ['drdisrespect', 4023503,'https://static-cdn.jtvnw.net/jtv_user_pictures/72a69c72-14b9-4be8-b8cb-802bc3e5f8ed-profile_image-300x300.png'],
    ['pokimane', 3928148,'https://static-cdn.jtvnw.net/jtv_user_pictures/beeafc17-3ebe-4e1d-b250-404f1ea56988-profile_image-300x300.png'],
    ['drlupo', 3823858,'https://static-cdn.jtvnw.net/jtv_user_pictures/d31a80e8-4bdd-44b8-a300-f95ddfc7255e-profile_image-300x300.png'],
    ['tsm_daequan', 3767020,'https://static-cdn.jtvnw.net/jtv_user_pictures/72b25194-8f6a-4034-97f0-150c6be52321-profile_image-300x300.png'],
    ['esl_csgo', 3456289,'https://static-cdn.jtvnw.net/jtv_user_pictures/1975b18f-fa7d-443f-b191-fba08f92f3a2-profile_image-300x300.jpeg'],
    ['rubius', 3376532,'https://static-cdn.jtvnw.net/jtv_user_pictures/a2592e98-5ba6-4c9a-9d9e-cf036d6f64c2-profile_image-300x300.jpg'],
    ['nickmercs', 3227799,'https://static-cdn.jtvnw.net/jtv_user_pictures/2e509c33-5a1c-48fc-a6ee-8385c2f9232d-profile_image-300x300.png'],
    ['loltyler1', 3065725,'https://static-cdn.jtvnw.net/jtv_user_pictures/f3591dbe4ee3d94b-profile_image-300x300.png'],
    ['syndicate', 2887432,'https://static-cdn.jtvnw.net/jtv_user_pictures/9ea9d6d3-cc64-42e2-a66f-f74624ff81be-profile_image-300x300.png'],
    ['sypherpk', 2836219,'https://static-cdn.jtvnw.net/jtv_user_pictures/595a3dc1-b291-4371-ba8f-156420929c9f-profile_image-300x300.png'],
    ['fortnite', 2803595,'https://static-cdn.jtvnw.net/jtv_user_pictures/6a8eb6f2-823b-403c-b90e-20829ddf6517-profile_image-300x300.png'],
    ['sodapoppin', 2719427,'https://static-cdn.jtvnw.net/jtv_user_pictures/sodapoppin-profile_image-10049b6200f90c14-300x300.png'],
    ['imaqtpie', 2628178,'https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-300x300.jpeg'],
    ['nightblue3', 2567379,'https://static-cdn.jtvnw.net/jtv_user_pictures/99b83e5e-4c33-496b-a33a-40ea7c17ce14-profile_image-300x300.png'],
    ['lirik', 2547855,'https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-300x300.png'],
    ['alanzoka', 2537210,'https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-300x300.png'],
    ['montanablack88', 2244922,'https://static-cdn.jtvnw.net/jtv_user_pictures/61f85a70-33e9-4144-b08a-bee144d444dc-profile_image-300x300.jpg'],
    ['faker', 2241682,'https://static-cdn.jtvnw.net/jtv_user_pictures/b2eb8a23-d6ad-45aa-bd8e-062133b64452-profile_image-300x300.png'],
    ['castro_1021', 2184636,'https://static-cdn.jtvnw.net/jtv_user_pictures/ed0f84d6-2d2d-4c4e-a5fe-7a3cc365684a-profile_image-300x300.jpg'],
    ['tsm_hamlinz', 2123227,'https://static-cdn.jtvnw.net/jtv_user_pictures/3f9e12fe-9c73-4e74-8d2b-edfa12a5aa40-profile_image-300x300.png'],
    ['couragejd', 2105418,'https://static-cdn.jtvnw.net/jtv_user_pictures/e8b0fb0c-8d54-44bc-ab16-259fad61cb4c-profile_image-300x300.png'],
    ['xqcow', 2090989,'https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-300x300.jpeg'],
    ['lolitofdez', 2044792,'https://static-cdn.jtvnw.net/jtv_user_pictures/413914fa70ed23a0-profile_image-300x300.png'],
    ['mongraal', 2025921,'https://static-cdn.jtvnw.net/jtv_user_pictures/d378b8b2-d06f-46df-a4e5-15e46c60e0b5-profile_image-300x300.jpeg'],
    ['gotaga', 2012908,'https://static-cdn.jtvnw.net/jtv_user_pictures/fbc5661c-7812-4b43-bf5e-16c3ba536d5d-profile_image-300x300.png'],
    ['cdnthe3rd', 1904628,'https://static-cdn.jtvnw.net/jtv_user_pictures/cdnthe3rd-profile_image-8246eb11f7f4b215-300x300.jpeg'],
    ['symfuhny', 1822994,'https://static-cdn.jtvnw.net/jtv_user_pictures/1d41de3c-731d-41ae-b0e7-615ad74db8f3-profile_image-300x300.png'],
    ['overwatchleague', 1806194,'https://static-cdn.jtvnw.net/jtv_user_pictures/8c55fdc6-9b84-4daf-a33b-cb318acbf994-profile_image-300x300.png'],
    ['elded', 1800169,'https://static-cdn.jtvnw.net/jtv_user_pictures/125f88f6-8228-4e33-81ad-aab37b27922f-profile_image-300x300.png'],
    ['cloakzy', 1749091,'https://static-cdn.jtvnw.net/jtv_user_pictures/320226c6-f422-4baf-8ed2-1be7eb3757e6-profile_image-300x300.png'],
    ['faceittv', 1707497,'https://static-cdn.jtvnw.net/jtv_user_pictures/faceittv-profile_image-45e9e95c0f48f50e-300x300.jpeg'],
    ['gamesdonequick', 1686358,'https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-300x300.png'],
    ['joshog', 1680303,'https://static-cdn.jtvnw.net/jtv_user_pictures/af40d3c1-0dee-4af5-a431-468a6fc4280f-profile_image-300x300.png'],
    ['thegrefg', 1679524,'https://static-cdn.jtvnw.net/jtv_user_pictures/d128ef22-ee80-4f02-a329-91c9c0d1f458-profile_image-300x300.png'],
    ['mrfreshasian', 1673050,'https://static-cdn.jtvnw.net/jtv_user_pictures/da28bd64-f6a1-4b49-9b6b-0a6faf94c700-profile_image-300x300.jpg'],
    ['boxbox', 1657432,'https://static-cdn.jtvnw.net/jtv_user_pictures/96b30bc4546e2f71-profile_image-300x300.jpeg'],
    ['gosu', 1653362,'https://static-cdn.jtvnw.net/jtv_user_pictures/b30828ba3efd51a5-profile_image-300x300.jpeg'],
    ['cizzorz', 1635945,'https://static-cdn.jtvnw.net/jtv_user_pictures/a3d679bb58fc9d7e-profile_image-300x300.jpeg'],
    ['eleaguetv', 1626533,'https://static-cdn.jtvnw.net/jtv_user_pictures/eleaguetv-profile_image-3944326c25ed471d-300x300.jpeg'],
    ['c9sneaky', 1590863,'https://static-cdn.jtvnw.net/jtv_user_pictures/c9sneaky-profile_image-03d2c6cbb19c9e5d-300x300.png'],
    ['dyrus', 1469610,'https://static-cdn.jtvnw.net/jtv_user_pictures/dyrus-profile_image-65fe199f18b9e0ff-300x300.png'],
    ['tsm_bjergsen', 1464744,'https://static-cdn.jtvnw.net/jtv_user_pictures/tsm_bjergsen-profile_image-ba41a683271a8848-300x300.jpeg'],
    ['trick2g', 1444540,'https://static-cdn.jtvnw.net/jtv_user_pictures/05529c10f7dfbf81-profile_image-300x300.png'],
    ['yassuo', 1411136,'https://static-cdn.jtvnw.net/jtv_user_pictures/yassuo-profile_image-cfd7ef046e50e94b-300x300.png'],
    ['PhantomL0rd', 1396710,'https://static-cdn.jtvnw.net/jtv_user_pictures/phantoml0rd-profile_image-c48fb029cd78d730-300x300.png'],
    ['doublelift', 1338331,'https://static-cdn.jtvnw.net/jtv_user_pictures/doublelift-profile_image-3cd6f7042b23a619-300x300.jpeg'],
    ['disguisedtoast', 1312415,'https://static-cdn.jtvnw.net/jtv_user_pictures/disguisedtoast-profile_image-56c467ceb53239f5-300x300.jpeg'],
    ['rocketleague', 1193936,'https://static-cdn.jtvnw.net/jtv_user_pictures/226651b3-35b2-46e4-84a3-74cb941b28c5-profile_image-300x300.png'],
    ['voyboy', 1148032,'https://static-cdn.jtvnw.net/jtv_user_pictures/ea6bf395-02bd-4b7c-8679-15d362522103-profile_image-300x300.png'],
    ['twitch', 1125569,'https://static-cdn.jtvnw.net/jtv_user_pictures/27bfa19d-e9ab-4d31-bff5-eea89e47a3df-profile_image-300x300.png'],
    ['pewdiepie', 1087628,'https://static-cdn.jtvnw.net/jtv_user_pictures/pewdiepie-profile_image-514cbaafc29064a2-300x300.jpeg'],
    ['starladder5', 1041280,'https://i.imgur.com/3ZVG0jD.png'],
    ['amaz', 935831,'https://static-cdn.jtvnw.net/jtv_user_pictures/amaz-profile_image-128bb4f9fe96c7ba-300x300.png'],
    ['jukes', 1113541,'https://static-cdn.jtvnw.net/jtv_user_pictures/044e146b-09ff-449d-b2a1-95a2358ac3a8-profile_image-300x300.png'],
    ['thenadeshot', 983443,'https://static-cdn.jtvnw.net/jtv_user_pictures/nadeshot-profile_image-117d4d07e78d767a-300x300.png'],
    ['callofduty', 950613,'https://static-cdn.jtvnw.net/jtv_user_pictures/ce51a4e2-ed9a-41db-add1-38eaa8e830b4-profile_image-300x300.png'],
    ['reckful', 923037,'https://static-cdn.jtvnw.net/jtv_user_pictures/reckful-profile_image-b22e4d39d3d6e045-300x300.jpeg'],
    ['shiphtur', 699132,'https://static-cdn.jtvnw.net/jtv_user_pictures/shiphtur-profile_image-e1da4894d17f08cd-300x300.jpeg'],
    ['towelliee', 695821,'https://static-cdn.jtvnw.net/jtv_user_pictures/towelliee-profile_image-f9752afc441702cc-300x300.jpeg'],
    ['dota2ti', 664803,'https://static-cdn.jtvnw.net/jtv_user_pictures/2e0d4551-0137-488f-9abd-554c1fc73f38-profile_image-300x300.png'],
    ['dreadztv', 659919,'https://static-cdn.jtvnw.net/jtv_user_pictures/78ff8a8a-e9ba-45a1-9536-d0b3d8bae0b1-profile_image-300x300.png'],
    ['rekkles', 597742,'https://static-cdn.jtvnw.net/jtv_user_pictures/989b8f4a-da3f-4c1b-9771-0c709a919921-profile_image-300x300.jpg'],
    ['handiofiblood', 571576,'https://static-cdn.jtvnw.net/jtv_user_pictures/d2d10d39-d857-4f01-a1c2-447a9fbbc9bf-profile_image-300x300.png'],
    ['nintendo', 482766,'https://static-cdn.jtvnw.net/jtv_user_pictures/nintendo-profile_image-849418bb6ce6264a-300x300.png'],
    ['anniebot', 470129,'https://static-cdn.jtvnw.net/jtv_user_pictures/a4a58680-0aa8-422a-80d9-f080eef11d91-profile_image-300x300.png'],
    ['wtcn', 1448148,'https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-300x300.png'],
    ['captainsparklez', 1434115,'https://static-cdn.jtvnw.net/jtv_user_pictures/captainsparklez-profile_image-fe5ae89fd8b8ed0f-300x300.png'],
    ['arigameplays', 1393031,'https://static-cdn.jtvnw.net/jtv_user_pictures/f0f9bd59-e984-4ca3-a39d-205a2d315b28-profile_image-300x300.png'],
    ['nl_kripp', 1345068,'https://static-cdn.jtvnw.net/jtv_user_pictures/401068e0-820a-4d9f-9e7c-1e5563398458-profile_image-300x300.png'],
    ['rainbow6', 1317429,'https://i.imgur.com/g6SlB44.png'],
    ['cohhcarnage', 1216096,'https://static-cdn.jtvnw.net/jtv_user_pictures/ed72b641-83ea-4ee6-81fd-aa195759c512-profile_image-300x300.png'],
    ['Therealknossi', 682771,'https://i.imgur.com/Uiw2wxA.png'],
    ['scarra', 1044515,'https://static-cdn.jtvnw.net/jtv_user_pictures/8bd07ef046330084-profile_image-300x300.jpeg'],
    ['warframe', 1032947,'https://static-cdn.jtvnw.net/jtv_user_pictures/15c3de17-0abf-49a6-8d96-4b82109e1464-profile_image-300x300.png'],
    ['sivhd', 1025502,'https://static-cdn.jtvnw.net/jtv_user_pictures/a0732bbd-393f-4a16-bbe0-ac10a16b69df-profile_image-300x300.png'],
    ['mithrain', 1025233,'https://static-cdn.jtvnw.net/jtv_user_pictures/70d29536-3b69-4731-8c97-8f5475a8fbf6-profile_image-300x300.png'],
    ['chocotaco', 1024948,'https://static-cdn.jtvnw.net/jtv_user_pictures/07156e3d-eac2-4d5f-acc1-8a942a59e6e2-profile_image-300x300.png'],
    ['alinity', 1020988,'https://static-cdn.jtvnw.net/jtv_user_pictures/974bf394-911b-4294-a905-f30be9feba6f-profile_image-300x300.png'],
    ['kinggothalion', 1003757,'https://static-cdn.jtvnw.net/jtv_user_pictures/79ba893e-06e7-4696-831b-1f9976a0eba2-profile_image-300x300.png'],
    ['lilypichu', 923863,'https://static-cdn.jtvnw.net/jtv_user_pictures/lilypichu-profile_image-9a1ba797a9721716-300x300.png'],
    ['tsm_theoddone', 876085,'https://static-cdn.jtvnw.net/jtv_user_pictures/tsm_theoddone-profile_image-338e7c68c54f0574-300x300.png'],
    ['shadbasemurdertv', 153529,'https://static-cdn.jtvnw.net/jtv_user_pictures/e0ffd88f-ac38-4c24-be9d-1d8fcf007c94-profile_image-300x300.jpg'],
    ['fextralife', 135662,'https://static-cdn.jtvnw.net/jtv_user_pictures/a28b0d37-81d0-415a-8ed8-1a1f998ea26d-profile_image-300x300.png'],
    ['dreamhackcs', 1615401,'https://static-cdn.jtvnw.net/jtv_user_pictures/5c1276a2-6cb5-4ae1-a4ca-268c1732ec0d-profile_image-300x300.png'],
    ['playhearthstone', 827422,'https://i.imgur.com/wZFVBHn.png'],
    ['summonersinnlive', 489733,'https://static-cdn.jtvnw.net/jtv_user_pictures/972fe1f486e6a958-profile_image-300x300.png'],
    ['lck_korea', 479210,'https://static-cdn.jtvnw.net/jtv_user_pictures/b466437b-e3cf-4be6-b954-a158ffb26c67-profile_image-300x300.jpeg'],
    ['trump', 825204,'https://static-cdn.jtvnw.net/jtv_user_pictures/a3e4571a1b9363e8-profile_image-300x300.jpeg'],
    ['destiny', 530532,'https://static-cdn.jtvnw.net/jtv_user_pictures/destiny-profile_image-951fd53950bc2f8b-300x300.png'],
    ['trymacs', 1280329,'https://static-cdn.jtvnw.net/jtv_user_pictures/22a56845-20d0-4e14-932e-0ec099b088eb-profile_image-300x300.png']
];
