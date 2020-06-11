import { IShip } from '../interfaces/IShip';

const US = Array<IShip>(
    {"name": "Sampson", "imageUrl":"/images/Ships/USA/Sampson-fs8.png", "speed": 29.5,"tier": 2, "torpedo": 4.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 5.94, "concealmentMod": false },
    {"name": "Smith", "imageUrl":"/images/Ships/USA/Smith-fs8.png", "speed": 28, "tier": 2, "torpedo": 4.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 5.76, "concealmentMod": false },
    {"name": "Wickes", "imageUrl":"/images/Ships/USA/Wickes-fs8.png", "speed": 34, "tier": 3, "torpedo": 5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 6.66, "concealmentMod": false },
    {"name": "Clemson", "imageUrl":"/images/Ships/USA/Clemson-fs8.png", "speed": 35, "tier": 4, "torpedo": 5.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.02, "concealmentMod": false },
    {"name": "Nicholas", "imageUrl":"/images/Ships/USA/Leader-fs8.png", "speed": 37, "tier": 5, "torpedo": 5.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 6.66, "concealmentMod": false },
    {"name": "Farragut", "imageUrl":"/images/Ships/USA/Farragut-fs8.png", "speed": 36.5, "tier": 6, "torpedo": 6.4, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.56, "concealmentMod": false },
    {"name": "Monaghan", "imageUrl":"/images/Ships/USA/Monaghan-fs8.png", "speed": 36.5, "tier": 6, "torpedo": 9.2, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.2, "concealmentMod": false },
    {"name": "Mahan", "imageUrl":"/images/Ships/USA/Mahan-fs8.png", "speed": 35, "tier": 7, "torpedo": 9.2, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.92, "concealmentMod": false },
    {"name": "Sims", "imageUrl":"/images/Ships/USA/Sims-fs8.png", "speed": 38.5, "tier": 7, "torpedo": 9.2, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.56, "concealmentMod": false },
    {"name": "Benson", "imageUrl":"/images/Ships/USA/Benson-fs8.png", "speed": 38, "tier": 8, "torpedo": 9.2, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.38, "concealmentMod": true },
    {"name": "Kidd", "imageUrl":"/images/Ships/USA/Kidd-fs8.png", "speed": 38, "tier": 8, "torpedo": 9.2, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.38, "concealmentMod": true },
    {"name": "Fletcher", "imageUrl":"/images/Ships/USA/Fletcher-fs8.png", "speed": 36.5, "tier": 9, "torpedo": 10.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.38, "concealmentMod": true },
    {"name": "Black", "imageUrl":"/images/Ships/USA/Black-fs8.png", "radar": 7.5, "speed": 35, "tier": 9, "torpedo": 13.7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.38, "concealmentMod": true },
    {"name": "Gearing", "imageUrl":"/images/Ships/USA/Gearing-fs8.png", "speed": 36, "tier": 10, "torpedo": 16.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealment": 7.56, "concealmentMod": true },    
);

const Japan = Array<IShip>(
    {"name": "Tachibana", "imageUrl":"/images/Ships/Japan/Tachibana-fs8.png", "concealment": 5.4, "speed": 30, "tier": 2, "torpedo": 5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Umikaze", "imageUrl":"/images/Ships/Japan/Umikaze-fs8.png", "concealment": 5.58, "speed": 33, "tier": 2, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Tachibana Lima", "imageUrl":"/images/Ships/Japan/Tachibana_Lima-fs8.png", "concealment": 5.4, "speed": 30, "tier": 2, "torpedo": 5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Wakatake", "imageUrl":"/images/Ships/Japan/Wakatake-fs8.png", "concealment": 6.12, "speed": 35.5, "tier": 3, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Isokaze", "imageUrl":"/images/Ships/Japan/Isokaze-fs8.png", "concealment": 6.12, "speed": 34, "tier": 4, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Minekaze", "imageUrl":"/images/Ships/Japan/Minekaze-fs8.png", "concealment": 6.2, "speed": 39, "tier": 5, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Fūjin", "imageUrl":"/images/Ships/Japan/Fujin-fs8.png", "concealment": 6.2, "speed": 37.5, "tier": 5, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Kamikaze", "imageUrl":"/images/Ships/Japan/Kamikaze-fs8.png", "concealment": 6.2, "speed": 37.5, "tier": 5, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Kamikaze R", "imageUrl":"/images/Ships/Japan/Kamikaze_R-fs8.png", "concealment": 6.2, "speed": 37.5, "tier": 5, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Mutsuki", "imageUrl":"/images/Ships/Japan/Mutsuki-fs8.png", "concealment": 6.2, "speed": 37.5, "tier": 5, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Fubuki", "imageUrl":"/images/Ships/Japan/Fubuki-fs8.png", "concealment": 7.02, "speed": 35, "tier": 6, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Hatsuharu", "imageUrl":"/images/Ships/Japan/Hatsuharu-fs8.png", "concealment": 6.66, "speed": 36.5, "tier": 6, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Shinonome", "imageUrl":"/images/Ships/Japan/Shinonome-fs8.png", "concealment": 7.02, "speed": 35, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Akatsuki", "imageUrl":"/images/Ships/Japan/Akatsuki-fs8.png", "concealment": 7.38, "speed": 38, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Shiratsuyu", "imageUrl":"/images/Ships/Japan/Shiratsuyu-fs8.png", "concealment": 6.66, "speed": 34, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Akizuki", "imageUrl":"/images/Ships/Japan/Akizuki-fs8.png", "concealment": 7.76, "speed": 33, "tier": 8, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Kagero", "imageUrl":"/images/Ships/Japan/Kagero-fs8.png", "concealment": 6.84, "speed": 35, "tier": 8, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Asashio", "imageUrl":"/images/Ships/Japan/Asashio-fs8.png", "concealment": 6.84, "speed": 35, "tier": 8, "torpedo": 20, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Harekaze", "imageUrl":"/images/Ships/Japan/HSF_Harekaze-fs8.png", "concealment": 6.84, "speed": 35.5, "tier": 8, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Yūgumo", "imageUrl":"/images/Ships/Japan/Yugumo-fs8.png", "concealment": 7.02, "speed": 35.5, "tier": 9, "torpedo": 12, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Kitakaze", "imageUrl":"/images/Ships/Japan/Kitakaze-fs8.png", "concealment": 7.56, "speed": 33, "tier": 9, "torpedo": 12, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Shimakaze", "imageUrl":"/images/Ships/Japan/Shimakaze-fs8.png", "concealment": 7.11, "speed": 39, "tier": 10, "torpedo": 20, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Harugumo", "imageUrl":"/images/Ships/Japan/Harugumo-fs8.png", "concealment": 7.92, "speed": 35.7, "tier": 10, "torpedo": 12, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
);

const Poland = new Array<IShip>(
    {"name": "Błyskawica", "imageUrl":"/images/Ships/Poland/Blyskawica-fs8.png", "concealment": 7.74, "speed": 39, "tier": 7, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
);

const Commonwealth = new Array<IShip>(
    {"name": "Vampire", "imageUrl":"/images/Ships/Commonwealth/Vampire-fs8.png", "concealment": 6.48, "speed": 34, "tier": 3, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Haida", "imageUrl":"/images/Ships/Commonwealth/Haida-fs8.png", "hydro": 3.12, "concealment": 6.49, "speed": 36.5, "tier": 7, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
);

const PanAsia = new Array<IShip>(
    {"name": "Longjiang", "imageUrl":"/images/Ships/Pan-Asia/Long_Jiang-fs8.png", "concealment": 5.4, "speed": 36, "tier": 2, "torpedo": 8.4, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Phra Ruang", "imageUrl":"/images/Ships/Pan-Asia/Phra_Ruang-fs8.png", "concealment": 5.76, "speed": 36, "tier": 3, "torpedo": 7.3, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Shenyang", "imageUrl":"/images/Ships/Pan-Asia/Shen_Yang-fs8.png", "concealment": 6.48, "speed": 39, "tier": 4, "torpedo": 7.3, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Jianwei", "imageUrl":"/images/Ships/Pan-Asia/Jian_Wei-fs8.png", "concealment": 6.84, "speed": 37, "tier": 5, "torpedo": 6.4, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Fushun", "imageUrl":"/images/Ships/Pan-Asia/Fu_Shun-fs8.png", "concealment": 7.02, "speed": 38, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Anshan", "imageUrl":"/images/Ships/Pan-Asia/Anshan-fs8.png", "concealment": 7.2, "speed": 38, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Gadjah Mada", "imageUrl":"/images/Ships/Pan-Asia/Gadjah_Mada-fs8.png", "concealment": 7.02, "speed": 36, "tier": 7, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Hsienyang", "imageUrl":"/images/Ships/Pan-Asia/Hsien_Yang-fs8.png", "radar": 7.50, "concealment": 7.38, "speed": 37.5, "tier": 8, "torpedo": 9.2, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Loyang", "imageUrl":"/images/Ships/Pan-Asia/LoYang-fs8.png", "hydro": 5.43, "concealment": 7.38, "speed": 38, "tier": 8, "torpedo": 9.2, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Chung Mu", "imageUrl":"/images/Ships/Pan-Asia/Chung_Mu-fs8.png", "radar": 7.50, "concealment": 7.2, "speed": 38, "tier": 9, "torpedo": 10.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Yueyang", "imageUrl":"/images/Ships/Pan-Asia/Hsiang_Yang-fs8.png", "radar": 7.50, "concealment": 7.42, "speed": 36.5, "tier": 10, "torpedo": 13.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
);

const France = new Array<IShip>(
    {"name": "Aigle", "imageUrl":"/images/Ships/France/Aigle-fs8.png", "concealment": 7.74, "speed": 36, "tier": 6, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
);

const UK = new Array<IShip>(
    {"name": "Medea", "imageUrl":"/images/Ships/UK/Medea-fs8.png", "concealment": 5.4, "speed": 32, "tier": 2, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Valkyrie", "imageUrl":"/images/Ships/UK/Valkyrie-fs8.png", "concealment": 6.3, "speed": 34, "tier": 3, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Campbeltown", "imageUrl":"/images/Ships/UK/Campbeltown-fs8.png", "concealment": 6.66, "speed": 35, "tier": 3, "torpedo": 7.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Wakeful", "imageUrl":"/images/Ships/UK/Wakeful-fs8.png", "concealment": 6.48, "speed": 35, "tier": 4, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Acasta", "imageUrl":"/images/Ships/UK/Acasta-fs8.png", "concealment": 6.84, "speed": 35, "tier": 5, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },    
    {"name": "Icarus", "imageUrl":"/images/Ships/UK/Icarus-fs8.png", "concealment": 6.84, "speed": 35.5, "tier": 6, "torpedo": 7.02, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "hydro": 3, "concealmentMod": false },
    {"name": "Gallant", "imageUrl":"/images/Ships/UK/Gallant-fs8.png", "concealment": 6.84, "speed": 36, "tier": 6, "torpedo": 8.01, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Jervis", "imageUrl":"/images/Ships/UK/Jervis-fs8.png", "concealment": 7.2, "speed": 36, "tier": 7, "torpedo": 7.02, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "hydro": 3, "concealmentMod": false },
    {"name": "Lightning", "imageUrl":"/images/Ships/UK/Lightning-fs8.png", "concealment": 7.02, "speed": 36, "tier": 8, "torpedo": 8.01, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "hydro": 3, "concealmentMod": true },
    {"name": "Cossack", "imageUrl":"/images/Ships/UK/Cossack-fs8.png", "concealment": 6.97, "speed": 36, "tier": 8, "torpedo": 9.99, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "hydro": 3, "concealmentMod": true },
    {"name": "Jutland", "imageUrl":"/images/Ships/UK/Jutland-fs8.png", "concealment": 7.02, "speed": 34, "tier": 9, "torpedo": 9.99, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "hydro": 3, "concealmentMod": true },
    {"name": "Daring", "imageUrl":"/images/Ships/UK/Daring-fs8.png", "concealment": 7.2, "speed": 35, "tier": 10, "torpedo": 9.99, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "hydro": 3, "concealmentMod": true },
);

const Germany = new Array<IShip>(
    {"name": "V-25", "imageUrl":"/images/Ships/Germany/V_25-fs8.png", "concealment": 5.4, "speed": 36, "tier": 2, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "G-101", "imageUrl":"/images/Ships/Germany/G_101-fs8.png", "concealment": 6.66, "speed": 33.5, "tier": 3, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "V-170", "imageUrl":"/images/Ships/Germany/V_170-fs8.png", "concealment": 6.3, "speed": 35.5, "tier": 4, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "T-22", "imageUrl":"/images/Ships/Germany/T_22-fs8.png", "concealment": 6.52, "speed": 34.5, "tier": 5, "torpedo": 7.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Ernst Gaede", "imageUrl":"/images/Ships/Germany/Ernst_Gaede-fs8.png", "hydro": 3.96, "concealment": 7.56, "speed": 36, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "T-61", "imageUrl":"/images/Ships/Germany/T_61-fs8.png", "hydro": 3.96, "concealment": 7.02, "speed": 35, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Leberecht Maass", "imageUrl":"/images/Ships/Germany/Leberecht_Maass-fs8.png", "hydro": 4.20, "concealment": 7.74, "speed": 37, "tier": 7, "torpedo": 8.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Z-39", "imageUrl":"/images/Ships/Germany/Z_39-fs8.png", "hydro": 4.20, "concealment": 7.74, "speed": 36, "tier": 7, "torpedo": 8.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Z-23", "imageUrl":"/images/Ships/Germany/Z_23-fs8.png", "hydro": 3.12, "concealment": 7.92, "speed": 37, "tier": 8, "torpedo": 9.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Z-46", "imageUrl":"/images/Ships/Germany/Z_46-fs8.png", "hydro": 4.68, "concealment": 7.56, "speed": 37.5, "tier": 9, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Z-52", "imageUrl":"/images/Ships/Germany/Z_52-fs8.png", "hydro": 5.88, "concealment": 7.74, "speed": 37.5, "tier": 10, "torpedo": 10.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
);

const USSR = new Array<IShip>(
    {"name": "Storozhevoi", "imageUrl":"/images/Ships/USSR/Storozhevoi-fs8.png", "concealment": 5.76, "speed": 35, "tier": 2, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Derzki", "imageUrl":"/images/Ships/USSR/Derzki-fs8.png", "concealment": 6.12, "speed": 34, "tier": 3, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Izyaslav", "imageUrl":"/images/Ships/USSR/Izyaslav-fs8.png", "concealment": 6.66, "speed": 35, "tier": 4, "torpedo": 5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Gremyashchy", "imageUrl":"/images/Ships/USSR/Gremyashchy-fs8.png", "concealment": 7, "speed": 37, "tier": 5, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Podvoisky", "imageUrl":"/images/Ships/USSR/Podvoisky-fs8.png", "concealment": 7.74, "speed": 42, "tier": 5, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Okhotnik ", "imageUrl":"/images/Ships/USSR/Okhotnik-fs8.png", "concealment": 6.48, "speed": 34.5, "tier": 5, "torpedo": 4.5, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Gnevny", "imageUrl":"/images/Ships/USSR/Gnevny-fs8.png", "concealment": 7.02, "speed": 38, "tier": 6, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Minsk", "imageUrl":"/images/Ships/USSR/Minsk-fs8.png", "concealment": 7.74, "speed": 43, "tier": 7, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Leningrad", "imageUrl":"/images/Ships/USSR/Leningrad-fs8.png", "concealment": 7.56, "speed": 43, "tier": 7, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": false },
    {"name": "Ognevoi", "imageUrl":"/images/Ships/USSR/Ognevoi-fs8.png", "concealment": 7.74, "speed": 37, "tier": 8, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Kiev", "imageUrl":"/images/Ships/USSR/Kiev-fs8.png", "concealment": 9, "speed": 42.5, "tier": 8, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Udaloi", "imageUrl":"/images/Ships/USSR/Udaloy-fs8.png", "concealment": 8.6, "speed": 40, "tier": 9, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Tashkent", "imageUrl":"/images/Ships/USSR/Tashkent-fs8.png", "concealment": 9.4, "speed": 42.5, "tier": 9, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Khabarovsk", "imageUrl":"/images/Ships/USSR/Khabarovsk-fs8.png", "concealment": 10, "speed": 43, "tier": 10, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
    {"name": "Grozovoi", "imageUrl":"/images/Ships/USSR/Grozovoy-fs8.png", "concealment": 7.62, "speed": 39.5, "tier": 10, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/destroyer-icon.svg", "type": "destroyer", "concealmentMod": true },
);

export const Destroyers = Japan.concat(US, Poland, Commonwealth, PanAsia, France, UK, Germany, USSR);