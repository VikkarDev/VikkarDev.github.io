//config
var conf_descriptionEnabled = false;
var conf_v2_enabled = false;

// Strings
if(global_language == 'de') {
    // Strings
    var gameStringTable = [
        'hat',
        'YouTube Abonnenten',
        'hat',
        'YouTube Abonnenten',
        '',
        '',
        'Mehr',
        'Weniger'
    ];
} else {
    // Strings
    var gameStringTable = [
        'has',
        'YouTube Subscribers',
        'has',
        'YouTube Subscribers',
        '',
        '',
        'More',
        'Less'
    ];
}

// UPDATED 08.11.2021 MC

// Values
var listpool = [
    // name, value, thumbnail
    ['T-Series', 197000000,'https://yt3.ggpht.com/a/AGF-l7_pAUMBrwUj9lIAPzwKL1MKmb9q875ck73n2Q=s200-c-k-c0xffffffff-no-rj-mo'],
    ['PewDiePie', 110000000,'https://yt3.ggpht.com/a/AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['5-Minute Crafts', 74200000,'https://yt3.ggpht.com/a/AGF-l7_Ig-3kRzbVXf3NRh3XWDFVyzXRANCQsltkvQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Like Nastya', 78200000,'https://yt3.ggpht.com/a/AGF-l78DPAXccWn_Vo9D9FdJ3bXiK8xkhb6MFYKFWg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Badabun', 45000000,'https://yt3.ggpht.com/a/AGF-l78x3T7ChRLSqiVCXCphxYL7nBPfaSERNevWHw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['whinderssonnunes', 43200000,'https://yt3.ggpht.com/a/AGF-l7_sALN4sLnZxs7_D60uUDH2xX1io-zTZiLFCA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['TheEllenShow', 38000000,'https://yt3.ggpht.com/a/AGF-l7-vAW-s0xZI7oURqwN9_hHXlEU9W0Fy2lYtqw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['YouTube', 32000000,'https://yt3.ggpht.com/a/AGF-l79Dpy9yGG-j3hTwtQiN3iXRVaC0UHu2cgSUvQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['MrBeast', 74000000,'https://yt3.ggpht.com/a/AGF-l79GuzIhiArE0EfFD8lHukJAj6cw_xcgwtvChA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Smosh', 25100000,'https://yt3.ggpht.com/a/AGF-l79lfc8ndf5dO9IRnHf_tn4rh-x8ob5I6b4wDg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Markiplier', 30200000,'https://yt3.ggpht.com/a/AGF-l7_mJfPTB24ngbdx3aD2H4xsLENbB3Z6J8a05g=s200-c-k-c0xffffffff-no-rj-mo'],
    ['jeffreestar ', 16200000,'https://yt3.ggpht.com/a/AGF-l7-LIHkWZNgM3aYk0GbQ37NvcUk7a4A2Hb-B2A=s200-c-k-c0xffffffff-no-rj-mo'],
    ['James Charles', 24500000,'https://yt3.ggpht.com/a/AGF-l79HtinsAb-MKCQOdTd5v-iimNHImeOl7Zvx7A=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Logan Paul', 23200000,'https://yt3.ggpht.com/a/AGF-l790lW8tJ5jj_3ay8RiQ8lPj8UCRecR0KQgMHA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['BCC Gaming', 10100000,'https://yt3.ggpht.com/XYLdzoYnsuSwkOkzsoBZHyU2UOQrkaADDUlJRASqC7Fu8h2-jMgqxc49OoUlxLx8vMXae6p9xg=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['Syndicate', 9770000,'https://yt3.ggpht.com/a/AGF-l7-wXfJFCCgWrhdGOHA6oOEsI-ktLm77oS1Asg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Tasty', 20700000,'https://yt3.ggpht.com/a/AGF-l79wniZfBdNgKPqOAmbEOGvIcEZmxBCOYfsDcw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['PopularMMOs', 17300000,'https://yt3.ggpht.com/a/AGF-l7-tOO6ewDvYK9Ao6FPw2eGfExL40Ox-OCS-BA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Jelly', 22500000,'https://yt3.ggpht.com/a/AGF-l78_r47XbisyAmeMyJ1yXw7n1IiF4Ry-AbBvmg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Lele Pons', 17700000,'https://yt3.ggpht.com/a/AGF-l79h_ajKNQCUKpMve3ZC5CRi5pCIiWVmfXuo-g=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Guava Juice', 16800000,'https://yt3.ggpht.com/a/AGF-l79veOphklhaYm4ibxn4kp3_84mL8fMU1AcrrA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['ERB', 14800000,'https://yt3.ggpht.com/a/AGF-l7-LYlvrhhh6OfizLw4lU2M7Uxjh80ntIQgrwg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Wengie', 13900000,'https://yt3.ggpht.com/a/AGF-l79nbsB_6XFxz7ATtlql-XbdB0GpAl_tvV1OPw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['The Slow Mo Guys', 14200000,'https://yt3.ggpht.com/a/AGF-l7-Tuog1I-opIhA1UTQO023pkIrMPMs17jH-pA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Miranda Sings', 10900000,'https://yt3.ggpht.com/a/AGF-l78WST5vGjxsPWpCQ4LA5D0v68LAdkg-1fJLUA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Dolan Twins', 10400000,'https://yt3.ggpht.com/a/AGF-l7_xaN8e9SoZqEwFAQnb72t0XFiFeVGlqY2kXA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['FailArmy', 15200000,'https://yt3.ggpht.com/a/AGF-l791V4Or1LtC6kk0VX2DEKtJaex4IBs9XFgMAg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Infinite', 18200000,'https://yt3.ggpht.com/a/AGF-l7_2Frg7q70iAgkdbrP7h106gLfTnhzbGxrl_w=s200-c-k-c0xffffffff-no-rj-mo'],
    ['TheRichest', 15100000,'https://yt3.ggpht.com/a/AGF-l79COxHCdJv2TPWcWaukB3Ugk7G9B4w62HfgRg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['SSundee', 19300000,'https://yt3.ggpht.com/a/AGF-l78EZCl72qShmL7Zu9LZL_0J1xZG3_wi8xdb0Q=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Roman Atwood Vlogs', 15500000,'https://yt3.ggpht.com/a/AGF-l78fJzknEYlOaC2RIBaEHEjEK9VUfKMYNzRZbg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['PlayStation', 13700000,'https://yt3.ggpht.com/a/AGF-l7_LAvBGBczQbGazZbd-XlCjv8lqh1_S45txUA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Dude Perfect', 56800000,'https://yt3.ggpht.com/a/AGF-l786MhSiIQO2jrdpXgwwZxlJdThr1uRZhG0MYQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['RomanAtwood', 10300000,'https://yt3.ggpht.com/a/AGF-l78lP0rmzFazLS3DCf3RTgoFvrgAmQDgJwxygw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['SaraBeautyCorner', 10500000,'https://yt3.ggpht.com/a/AGF-l79_EsHSe8aqgCMm3ybary1ATgo32Ltgvi7klQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Matt Stonie', 14900000,'https://yt3.ggpht.com/a/AGF-l79ER_f06ZmkfSh90_p5QHg7hWKOYxE1W7SCSw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Liza Koshy', 17500000,'https://yt3.ggpht.com/a/AGF-l7-uMPUw37VB7wWjYt3zXVC7GOBqqwMJnR_01Q=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Jake Paul', 20400000,'https://yt3.ggpht.com/a/AGF-l7_I4IggeiUyO7q6y-kFIDh9OfZ8RxtUVaYBwg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['JennaMarbles', 20000000,'https://yt3.ggpht.com/a/AGF-l78jnHQ5-Apcp5D_ARVRGMAvNXnvH_LNB0f62w=s200-c-k-c0xffffffff-no-rj-mo'],
    ['NigaHiga', 21300000,'https://yt3.ggpht.com/a/AGF-l7_bo6vxoQkbnFsQnU5Jt-1ZLZHlV_U-A7EByg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['REACT ', 20200000,'https://yt3.ggpht.com/a/AGF-l78cj9WMhmUT1oiWqtc9yoeT9C4C8MKmgLMeOA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['DanTDM', 25700000,'https://yt3.ggpht.com/a/AGF-l7_t5ekdUDowWCGVJ5FIGoBO4lI4TFCoC_7vZQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Zoella', 10900000,'https://yt3.ggpht.com/a/AGF-l78FrKVmn8UoHt3HkHrtJojBiVeFpXKnRqyjuw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['ThatcherJoe', 7590000,'https://yt3.ggpht.com/a/AGF-l7_j9lZbpd_7EYekv29iUo72kbkIJMwJt9_stg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Caspar', 6810000,'https://yt3.ggpht.com/a/AGF-l7_MqD4TgjQ0TJq3xWzqMcy7D2JMi9DS5mJSaw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Daniel Howell', 6260000,'https://yt3.ggpht.com/a/AGF-l79u7SY3ffgP8sRgFxAgZW4tiWCtXAC0KrCvQg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['LDShadowLady', 6510000,'https://yt3.ggpht.com/a/AGF-l7-Q93hqsN44XpMGRU5vr6O2zBZliSEcFUUeoQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ["Ryan's World", 30800000,'https://yt3.ggpht.com/a/AGF-l79UYVdnU4rI9eFJmir3DfTp4m8wGG9c-jvWSA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['JackSepticEye', 27500000,'https://yt3.ggpht.com/a/AGF-l78G71edCaQ7PL59C7XO0KBQt3pFDIjhjDPcvQ=s200-c-k-c0xffffffff-no-rj-mo'],
    ['shane', 20000000,'https://yt3.ggpht.com/a/AGF-l7_25hBcZ7P-z7ym7Jf4lTgInt6IVsysPUczug=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Yuya', 24900000,'https://yt3.ggpht.com/a/AGF-l7-DXRX5u_v4lPod3zYkmHMtAYIMB5-EXLVFLA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['VanossGaming', 25600000,'https://yt3.ggpht.com/a/AGF-l79FzS9jn3sjc41VQPdz-vth-Hc3u1aXwvu12A=s200-c-k-c0xffffffff-no-rj-mo'],
    ['RezendeEvil', 29300000,'https://yt3.ggpht.com/a/AGF-l7_KMwrR6_LcbJYIwjVKa8UC5usvdPZczTsiEg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Luisito Comunica', 37500000,'https://yt3.ggpht.com/a/AGF-l78m0KS8VJxBYWE31CbJwiZoPu4oXqFkDEoWQg=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Vegetta777', 32700000,'https://yt3.ggpht.com/a/AGF-l78s4fWESK46cz-SsxlPTARAOy46PuH78SqfIA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Felipe Neto', 43200000,'https://yt3.ggpht.com/a/AGF-l79S4FrOUo9crQs2nxlwuJKOeg4O5chZcaB6jA=s200-c-k-c0xffffffff-no-rj-mo'],
    ['SSSniperWolf', 30000000,'https://yt3.ggpht.com/a/AGF-l78rzP_G-iqu5zytYgVs76rxS5LdcY1NYqbi5w=s200-c-k-c0xffffffff-no-rj-mo'],
    ['HolaSoyGerman.', 43000000,'https://yt3.ggpht.com/a/AGF-l7_N9uLl8iqg11SKM61oDY2a6ZYdczHmiIBYBw=s200-c-k-c0xffffffff-no-rj-mo'],
    ['Sidemen', 136000000,'https://yt3.ggpht.com/ytc/AKedOLSqViMyjHw5AiYTSTKnrmyCq-Bba5KS941AqfvpWw=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['MoreSidemen', 5820000,'https://yt3.ggpht.com/ytc/AKedOLS4VvyL7KuzcvfySg62nOtYRe-_2JY-QXh5NdKYiA=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['KSI', 23500000,'https://yt3.ggpht.com/ytc/AKedOLSaXT0o-yJFcs40LF3_1wVCsNgqqLhUaLO-df9BhA=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['David Dobrik', 18300000,'https://yt3.ggpht.com/ytc/AKedOLQicZeRm7xzoCP2cZIAZ4wV_XSMgxStbJOUsrM8Ng=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['Gordon Ramsay', 183000000,'https://yt3.ggpht.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['W2S', 16200000,'https://yt3.ggpht.com/ytc/AKedOLRugsHClfnRuCN6aoQiZw9_-RvwSeJaHBzrdHpBnA=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['Ali-A', 17500000,'https://yt3.ggpht.com/ytc/AKedOLTlAIebfRmkf5tDuO62CHDo_GFlPHBgI0G744feNA=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['RiceGum', 10300000,'https://yt3.ggpht.com/ytc/AKedOLRsua9DFrdG0i3yI7XlObHuCc6VkpjtMbrZ53I8yg=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['Will Smith', 9570000,'https://yt3.ggpht.com/ytc/AKedOLT5aQSz6uPsLW13bLlAAu2cyNSu0xzhUsxWqjUuKQ=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['Vikkstar123', 7430000,'https://yt3.ggpht.com/ytc/AKedOLTLhMRiVeidKRc1SDLkqcEjqn2VA-9lMiYyxgAkiA=s200-c-k-c0x00ffffff-no-rj-mo'],
    ['Pokimane', 6700000,'https://yt3.ggpht.com/ytc/AKedOLR0eVHxJI4I7cRZrC6TvTVKr_Jc6vx9FiOZPtmlQA=s200-c-k-c0x00ffffff-no-rj-mo']    
];
