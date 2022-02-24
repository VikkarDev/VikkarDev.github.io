/**
 * @name		Game Mode V2 Example
 * @author		moreorless.io
 * @version 	1.0
 * @url			https://moreorless.io/credits
 * @license		MIT License
 * */

// Enables the description field (only gm_v1)
var conf_descriptionEnabled = false;

// Enables the gm_v2 (Game Version 2 with Custom Textes)
var conf_v2_enabled = true;


// Strings

if(global_language == 'de') {
    // Strings for DE
    var gameStringTable = [
        'war',
        '',
        'war',
        '',
        '',
        '',
        'Danach',
        'Davor'
    ];


// Values
    var listpool = [
        /*
            Custom Gamemodes V2

            NOTE: conf_descriptionEnabled must be set to false with V2.
                name            : Name of the item.
                custom text     : Text which will display after the User clicked button.
                thumbnail       : Preview of the item
                order           : Value of the item.
        */

        ['Shaker', 'Anfang 19Jh.', 'https://www.b-prisma.de/object-shop/images/product_images/popup_images/7_0.jpg', 15],
        ['Industrialisierung', 'Anfang/Mitte 19Jh.', 'https://i.imgur.com/aIAmLO9.jpg', 14],
        ['Arts and Crafts', '1834-1896', 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Artichoke_wallpaper_Morris_and_Co_J_H_Dearle.jpg', 13],
        ['Historismus/Eklektizismus', '1850-1914', 'https://www.hampel-auctions.com/img/auktionen/A87/b/Hampel-84168011.jpg', 12],
        ['Jugendstil/Frühe Moderne', '1890-1920', 'https://moebeltipps.ch/wp-content/uploads/2016/01/Massons_study.jpg', 11],
        ['Funktionalismus Dt. Werkbund', '1907-heute', 'https://www.kunstkopie.de/kunst/peter_behrens/AEG-Ventilator.jpg', 10],
        ['De Stijl', '1917-1940', 'https://www.kunstkopie.de/kunst/piet_mondrian_11026/piet_mondrian_11026_preview-2.jpg', 9],
        ['Bauhaus', '1919-1933', 'https://www.eosgroup.de/bueromoebel/images/product_images/info_images/bauhaus-freischwinger.jpg', 8],
        ['Art Deco', '1920-1930', 'https://img.freepik.com/vektoren-kostenlos/art-deco-nahtlose-musterung_1319-778.jpg?size=626&ext=jpg', 7],
        ['Streamline', '1920-1950', 'https://assets.hemmings.com/blog/wp-content/uploads//2014/05/Phantom_Corsair_Six_Passenger_Coupe_1938_01.jpg', 6],
        ['Nachkriegszeit', '40er bis 60er', 'https://fritzhansenimagecdn.azureedge.net/~/media/images/products/chairs/ant/3101_ant_black_coloured_ash-png.png', 5],
        ['HFG Ulm / Gute Form', '1950-1968', 'https://www.ulm.de/-/media/ulm/zoea/bilder/stadtgeschichte/markenzeichen/hfg/stapelgeschirr_tc100_ulmer_hocker.jpg?h=327&w=770&la=de-DE&hash=54A59393C2EC9B059B90FF29D2101FD7', 4],
        ['Bel Design (Italien)', '1946-1973', 'https://i.pinimg.com/originals/48/1e/08/481e0839a0ff312378d49590b00288fe.png', 3],
        ['Pop Design', '1964-1972', 'https://i.pinimg.com/originals/a3/19/53/a31953ec29166d3a4e3d5d6b51c1594d.jpg', 2],
        ['Postmoderne', '1970-1985', 'https://i.pinimg.com/originals/7f/94/e5/7f94e5c6e0b948489e6a9bdcedcc254c.jpg', 1],
        ['Design heute', 'heute', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188', 0]
    ];
} else {
    // Strings for EN
    var gameStringTable = [
        'was',
        '',
        'was',
        '',
        '',
        '',
        'Later',
        'Before'
    ];


// Values
    var listpool = [
        /*
            Custom Gamemodes V2

            NOTE: conf_descriptionEnabled must be set to false with V2.
                name            : Name of the item.
                custom text     : Text which will display after the User clicked button.
                thumbnail       : Preview of the item
                order           : Value of the item.
        */

        ['Shaker', 'Anfang 19Jh.', 'https://www.b-prisma.de/object-shop/images/product_images/popup_images/7_0.jpg', 15],
        ['Industrialisation', 'Early/Mid 19th century.', 'https://i.imgur.com/aIAmLO9.jpg', 14],
        ['Arts and Crafts', '1834-1896', 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Artichoke_wallpaper_Morris_and_Co_J_H_Dearle.jpg', 13],
        ['Historicism/Eclecticism', '1850-1914', 'https://www.hampel-auctions.com/img/auktionen/A87/b/Hampel-84168011.jpg', 12],
        ['Art Nouveau', '1890-1920', 'https://moebeltipps.ch/wp-content/uploads/2016/01/Massons_study.jpg', 11],
        ['Functionalism Dt. Werkbund', '1907-today', 'https://www.kunstkopie.de/kunst/peter_behrens/AEG-Ventilator.jpg', 10],
        ['De Stijl', '1917-1940', 'https://www.kunstkopie.de/kunst/piet_mondrian_11026/piet_mondrian_11026_preview-2.jpg', 9],
        ['Bauhaus', '1919-1933', 'https://www.eosgroup.de/bueromoebel/images/product_images/info_images/bauhaus-freischwinger.jpg', 8],
        ['Art Deco', '1920-1930', 'https://img.freepik.com/vektoren-kostenlos/art-deco-nahtlose-musterung_1319-778.jpg?size=626&ext=jpg', 7],
        ['Streamline', '1920-1950', 'https://assets.hemmings.com/blog/wp-content/uploads//2014/05/Phantom_Corsair_Six_Passenger_Coupe_1938_01.jpg', 6],
        ['Post-war era', '40s to 60s', 'https://fritzhansenimagecdn.azureedge.net/~/media/images/products/chairs/ant/3101_ant_black_coloured_ash-png.png', 5],
        ['HFG Ulm / Gute Form', '1950-1968', 'https://www.ulm.de/-/media/ulm/zoea/bilder/stadtgeschichte/markenzeichen/hfg/stapelgeschirr_tc100_ulmer_hocker.jpg?h=327&w=770&la=de-DE&hash=54A59393C2EC9B059B90FF29D2101FD7', 4],
        ['Bel Design (Italy)', '1946-1973', 'https://i.pinimg.com/originals/48/1e/08/481e0839a0ff312378d49590b00288fe.png', 3],
        ['Pop Design', '1964-1972', 'https://i.pinimg.com/originals/a3/19/53/a31953ec29166d3a4e3d5d6b51c1594d.jpg', 2],
        ['Postmodernism', '1970-1985', 'https://i.pinimg.com/originals/7f/94/e5/7f94e5c6e0b948489e6a9bdcedcc254c.jpg', 1],
        ['Design today', 'today', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188', 0]
    ];
}
