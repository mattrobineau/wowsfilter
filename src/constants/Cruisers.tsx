import { IShip } from '../interfaces/IShip';

const US = Array<IShip>(
    {"name": "Erie", "concealment": 8.28, "imageUrl":"/images/Ships/USA/Erie-fs8.png", "speed": 20, "tier": 1, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Chester", "concealment": 8.46, "imageUrl":"/images/Ships/USA/Chester-fs8.png", "speed": 24, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Albany", "concealment": 8.82, "imageUrl":"/images/Ships/USA/Albany-fs8.png", "speed": 20, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "St. Louis", "concealment": 10.98, "imageUrl":"/images/Ships/USA/St_Louis-fs8.png", "speed": 22, "tier": 3, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Phoenix", "concealment": 13.14, "imageUrl":"/images/Ships/USA/Phoenix-fs8.png", "hydro": 3.48, "speed": 35, "tier": 4, "torpedo": 5.5, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Omaha", "concealment": 13.5, "imageUrl":"/images/Ships/USA/Omaha-fs8.png", "hydro": 3.72, "speed": 34, "tier": 5, "torpedo": 5.5, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Marblehead", "concealment": 13.5, "imageUrl":"/images/Ships/USA/Marblehead-fs8.png", "hydro": 3.72, "speed": 34, "tier": 5, "torpedo": 8.2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Marblehead Lima", "concealment": 13.5, "imageUrl":"/images/Ships/USA/Marblehead_Lima-fs8.png", "hydro": 3.72, "speed": 34, "tier": 5, "torpedo": 8.2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Pensacola", "concealment": 14.16, "imageUrl":"/images/Ships/USA/Pensacola-fs8.png", "hydro": 3.96, "speed": 32.5, "tier": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Dallas", "concealment": 11.88, "imageUrl":"/images/Ships/USA/Dallas-fs8.png", "hydro": 3.96, "speed": 32.5, "tier": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Atlanta", "concealment": 10.98, "imageUrl":"/images/Ships/USA/Atlanta-fs8.png", "hydro": 4.20, "radar": 8.49, "speed": 32.5, "tier": 7, "torpedo": 4.5, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "New Orleans", "concealment": 12.48, "imageUrl":"/images/Ships/USA/New_Orleans-fs8.png", "hydro": 4.20, "speed": 32.5, "tier": 7, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Helena", "concealment": 11.88, "imageUrl":"/images/Ships/USA/Helena-fs8.png", "hydro": 4.20, "speed": 32.5, "tier": 7, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Indianapolis", "concealment": 12.7, "imageUrl":"/images/Ships/USA/Indianapolis-fs8.png", "hydro": 4.20, "radar": 9.9, "speed": 32.5, "tier": 7, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Boise", "concealment": 11.88, "imageUrl":"/images/Ships/USA/Boise-fs8.png", "hydro": 4.20, "speed": 30, "tier": 7, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Flint", "concealment": 10.98, "imageUrl":"/images/Ships/USA/Flint-fs8.png", "hydro": 4.20, "speed": 32.5, "tier": 7, "torpedo": 9.2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Baltimore", "concealment": 12.6, "imageUrl":"/images/Ships/USA/Baltimore-fs8.png", "hydro": 4.44, "radar": 9, "speed": 32.5, "tier": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Cleveland", "concealment": 11.88, "imageUrl":"/images/Ships/USA/Cleveland-fs8.png", "hydro": 4.44, "radar": 9, "speed": 32.5, "tier": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },    
    {"name": "Buffalo", "concealment": 13.62, "imageUrl":"/images/Ships/USA/Buffalo-fs8.png", "hydro": 4.68, "radar": 9.45, "speed": 33, "tier": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Seattle", "concealment": 12.24, "imageUrl":"/images/Ships/USA/Seattle-fs8.png", "hydro": 4.68, "radar": 9, "speed": 33, "tier": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Des Moines", "concealment": 13.86, "imageUrl":"/images/Ships/USA/Des_Moines-fs8.png", "hydro": 4.92, "radar": 8.49, "speed": 33, "tier": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Worcester", "concealment": 12.42, "imageUrl":"/images/Ships/USA/Worcester-fs8.png", "hydro": 4.92, "radar": 9, "speed": 33, "tier": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Salem", "concealment": 13.86, "imageUrl":"/images/Ships/USA/Salem-fs8.png", "hydro": 4.92, "radar": 8.49, "speed": 33, "tier": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
);

const Japan = Array<IShip>(
    {"name": "Hashidate", "concealment": 7.74, "imageUrl":"/images/Ships/Japan/Hashidate-fs8.png", "speed": 19.5, "tier": 1, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Chikuma", "concealment": 9.18, "imageUrl":"/images/Ships/Japan/Chikuma-fs8.png", "speed": 26, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Tenryu", "concealment": 8.28, "imageUrl":"/images/Ships/Japan/Tatsuta-fs8.png", "speed": 32.5, "tier": 3, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Katori", "concealment": 10.98, "imageUrl":"/images/Ships/Japan/Katori-fs8.png", "speed": 18, "tier": 3, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Yūbari", "concealment": 9.9, "imageUrl":"/images/Ships/Japan/Yubari-fs8.png", "hydro": 3.48, "speed": 34.5, "tier": 4, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Kuma", "concealment": 11.34, "imageUrl":"/images/Ships/Japan/Kuma-fs8.png", "hydro": 3.48, "speed": 34.5, "tier": 4, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Iwaki Alpha", "concealment": 10.1, "imageUrl":"/images/Ships/Japan/Iwaki-fs8.png", "hydro": 3.48, "speed": 35, "tier": 4, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Furutaka", "concealment": 12.24, "imageUrl":"/images/Ships/Japan/Furutaka-fs8.png", "hydro": 3.72, "speed": 34.5, "tier": 5, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Aoba", "concealment": 12.06, "imageUrl":"/images/Ships/Japan/Aoba-fs8.png", "hydro": 3.96, "speed": 35, "tier": 6, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Myoko", "concealment": 13.14, "imageUrl":"/images/Ships/Japan/Myoko-fs8.png", "hydro": 4.20, "speed": 35, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "ARP Myoko", "concealment": 13.14, "imageUrl":"/images/Ships/Japan/ARP_Myoko-fs8.png", "hydro": 4.20, "speed": 35, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "ARP Ashigara", "concealment": 13.14, "imageUrl":"/images/Ships/Japan/ARP_Ashigara-fs8.png", "hydro": 4.20, "speed": 35, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "ARP Haguro", "concealment": 13.14, "imageUrl":"/images/Ships/Japan/ARP_Haguro-fs8.png", "hydro": 4.20, "speed": 35, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Southern Dragon", "concealment": 13.14, "imageUrl":"/images/Ships/Japan/Southern_Dragon-fs8.png", "hydro": 4.20, "speed": 35, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Eastern Dragon", "concealment": 13.14, "imageUrl":"/images/Ships/Japan/Eastern_Dragon-fs8.png", "hydro": 4.20, "speed": 35, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "ARP Nachi", "concealment": 13.14, "imageUrl":"/images/Ships/Japan/ARP_Nachi-fs8.png", "hydro": 4.44, "speed": 35, "tier": 7, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Mogami", "concealment": 12.06, "imageUrl":"/images/Ships/Japan/Mogami-fs8.png", "hydro": 4.44, "speed": 34.5, "tier": 8, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Atago", "concealment": 11.88, "imageUrl":"/images/Ships/Japan/Atago-fs8.png", "hydro": 4.44, "speed": 35.5, "tier": 8, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "ARP Takao", "concealment": 11.88, "imageUrl":"/images/Ships/Japan/ARP_Takao-fs8.png", "hydro": 4.44, "speed": 35.5, "tier": 8, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Ibuki", "concealment": 12.6, "imageUrl":"/images/Ships/Japan/Ibuki-fs8.png", "hydro": 4.68, "speed": 35, "tier": 9, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Zao", "concealment": 12.6, "imageUrl":"/images/Ships/Japan/Zao-fs8.png", "hydro": 4.92, "speed": 34.5, "tier": 10, "torpedo": 12, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },    
);

const Commonwealth = new Array<IShip>(
    {"name": "Perth", "concealment": 10.08, "imageUrl":"/images/Ships/Commonwealth/Perth-fs8.png", "speed": 32.5, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
);

const PanAsia = new Array<IShip>(
    {"name": "Chengan", "concealment": 6.12, "imageUrl":"/images/Ships/Pan-Asia/Cheng_An-fs8.png", "speed": 19, "tier": 1, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Huanghe", "concealment": 9.54, "imageUrl":"/images/Ships/Pan-Asia/Huang_he-fs8.png", "hydro": 3.96, "speed": 33, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
);

const Italy = new Array<IShip>(
    {"name": "Duca d'Aosta", "concealment": 12.06, "imageUrl":"/images/Ships/Italy/DucadAosta-fs8.png", "hydro": 3.96, "speed": 36.5, "tier": 6, "torpedo": 12, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Duca degli Abruzzi", "concealment": 11.16, "imageUrl":"/images/Ships/Italy/Duca_degli_Abruzzi-fs8.png", "hydro": 4.20, "speed": 35, "tier": 7, "torpedo": 12, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
);

const France = new Array<IShip>(
    {"name": "Bougainville", "concealment": 8.28, "imageUrl":"/images/Ships/France/Bougainville-fs8.png", "speed": 19, "tier": 1, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Jurien de la Gravière", "concealment": 9, "imageUrl":"/images/Ships/France/Jurien-fs8.png", "speed": 23, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Friant", "concealment": 11.34, "imageUrl":"/images/Ships/France/Friant-fs8.png", "speed": 30, "tier": 3, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Duguay-Trouin", "concealment": 13.32, "imageUrl":"/images/Ships/France/Duguay_Trouin-fs8.png", "hydro": 3.48, "speed": 33, "tier": 4, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Émile Bertin", "concealment": 12.6, "imageUrl":"/images/Ships/France/Emile_Bertin-fs8.png", "hydro": 3.72, "speed": 39, "tier": 5, "torpedo": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "La Galissonnière", "concealment": 13.32, "imageUrl":"/images/Ships/France/La_Galissonniere-fs8.png", "hydro": 3.96, "speed": 31, "tier": 6, "torpedo": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "De Grasse", "concealment": 13.32, "imageUrl":"/images/Ships/France/De_Grasse-fs8.png", "hydro": 3.96, "speed": 33.5, "tier": 6, "torpedo": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Algérie", "concealment": 13.86, "imageUrl":"/images/Ships/France/Algerie-fs8.png", "hydro": 4.20, "speed": 31, "tier": 7, "torpedo": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Charles Martel", "concealment": 13.68, "imageUrl":"/images/Ships/France/Charles_Martel-fs8.png", "hydro": 4.44, "speed": 32.5, "tier": 8, "torpedo": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Saint-Louis", "concealment": 14.94, "imageUrl":"/images/Ships/France/Saint_Louis-fs8.png", "hydro": 4.68, "speed": 33, "tier": 9, "torpedo": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Henri IV", "concealment": 16.56, "imageUrl":"/images/Ships/France/Henri_IV-fs8.png", "hydro": 4.92, "speed": 35, "tier": 10, "torpedo": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
);

const UK = new Array<IShip>(
    {"name": "Black Swan", "concealment": 7.02, "imageUrl":"/images/Ships/UK/Black_Swan-fs8.png", "speed": 19, "tier": 1, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Weymouth", "concealment": 10.26, "imageUrl":"/images/Ships/UK/Weymouth-fs8.png", "speed": 26, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Caledon", "concealment": 10.08, "imageUrl":"/images/Ships/UK/Caledon-fs8.png", "speed": 29, "tier": 3, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Danae", "concealment": 10.44, "imageUrl":"/images/Ships/UK/Danae-fs8.png", "hydro": 3.48, "speed": 30, "tier": 4, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Emerald", "concealment": 10.18, "imageUrl":"/images/Ships/UK/Emerald-fs8.png", "hydro": 3.72, "speed": 33, "tier": 5, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Leander", "concealment": 10.26, "imageUrl":"/images/Ships/UK/Leander-fs8.png", "hydro": 3.96, "speed": 32.5, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Fiji", "concealment": 11.52, "imageUrl":"/images/Ships/UK/Fiji-fs8.png", "hydro": 4.20, "speed": 32.5, "tier": 7, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Belfast", "concealment": 11.34, "imageUrl":"/images/Ships/UK/Belfast-fs8.png", "radar": 8.49, "hydro": 4.20, "speed": 32.5, "tier": 7, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Edinburgh", "concealment": 11.7, "imageUrl":"/images/Ships/UK/Edinburgh-fs8.png", "radar": 9.00, "hydro": 4.44, "speed": 32.5, "tier": 8, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Neptune", "concealment": 13.14, "imageUrl":"/images/Ships/UK/Neptune-fs8.png", "radar": 9.45, "hydro": 4.68, "speed": 33.5, "tier": 9, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Minotaur", "concealment": 11.52, "imageUrl":"/images/Ships/UK/Minotaur-fs8.png", "radar": 9.90, "hydro": 4.92, "speed": 33.5, "tier": 10, "torpedo": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
);

const Germany = new Array<IShip>(
    {"name": "Hermelin", "concealment": 8.64, "imageUrl":"/images/Ships/Germany/Hermelin-fs8.png", "speed": 24, "tier": 1, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Dresden", "concealment": 9.54, "imageUrl":"/images/Ships/Germany/Dresden-fs8.png", "speed": 25, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Emden", "concealment": 9.54, "imageUrl":"/images/Ships/Germany/Emden-fs8.png", "speed": 24, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Kolberg", "concealment": 9.72, "imageUrl":"/images/Ships/Germany/Kolberg-fs8.png", "speed": 27, "tier": 3, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Karlsruhe", "concealment": 10.62, "imageUrl":"/images/Ships/Germany/Karlsruhe-fs8.png", "hydro": 4.92, "speed": 27.5, "tier": 4, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Königsberg", "concealment": 12.42, "imageUrl":"/images/Ships/Germany/Konigsberg-fs8.png", "hydro": 5.13, "speed": 32.5, "tier": 5, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Nürnberg", "concealment": 12.6, "imageUrl":"/images/Ships/Germany/Nurnberg-fs8.png", "hydro": 5.28, "speed": 32, "tier": 6, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Admiral Graf Spee", "concealment": 13.14, "imageUrl":"/images/Ships/Germany/Admiral_Graf_Spee-fs8.png", "hydro": 5.28, "speed": 28.5, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "HSF Admiral Graf Spee", "concealment": 13.14, "imageUrl":"/images/Ships/Germany/HSF_Admiral_Graf_Spee-fs8.png", "hydro": 5.28, "speed": 28.5, "tier": 6, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Yorck", "concealment": 13.86, "imageUrl":"/images/Ships/Germany/Yorck-fs8.png", "hydro": 5.43, "speed": 32, "tier": 7, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Hipper", "concealment": 14.22, "imageUrl":"/images/Ships/Germany/Hipper-fs8.png", "hydro": 5.58, "speed": 32, "tier": 8, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Prinz Eugen", "concealment": 14.94, "imageUrl":"/images/Ships/Germany/Prinz_Eugen-fs8.png", "hydro": 5.58, "speed": 32, "tier": 8, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Roon", "concealment": 14.4, "imageUrl":"/images/Ships/Germany/Roon-fs8.png", "hydro": 5.73, "speed": 32.5, "tier": 9, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Hindenburg", "concealment": 16.02, "imageUrl":"/images/Ships/Germany/Hindenburg-fs8.png", "hydro": 5.88, "speed": 31.5, "tier": 10, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
);

const USSR = new Array<IShip>(
    {"name": "Orlan", "concealment": 7.92, "imageUrl":"/images/Ships/USSR/Orlan-fs8.png", "speed": 25, "tier": 1, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Diana", "concealment": 10.8, "imageUrl":"/images/Ships/USSR/Diana-fs8.png", "speed": 19, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Diana Lima", "concealment": 10.8, "imageUrl":"/images/Ships/USSR/Diana_Lima-fs8.png", "speed": 19, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Novik", "concealment": 9.03, "imageUrl":"/images/Ships/USSR/Novik-fs8.png", "speed": 25, "tier": 2, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Aurora", "concealment": 10.62, "imageUrl":"/images/Ships/USSR/Aurora-fs8.png", "speed": 19, "tier": 3, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Bogatyr", "concealment": 10.26, "imageUrl":"/images/Ships/USSR/Bogatyr-fs8.png", "speed": 24, "tier": 3, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Oleg", "concealment": 10.26, "imageUrl":"/images/Ships/USSR/Oleg-fs8.png", "speed": 24, "tier": 3, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Varyag", "concealment": 10.98, "imageUrl":"/images/Ships/USSR/Varyag-fs8.png", "speed": 25, "tier": 3, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Svietlana", "concealment": 9.9, "imageUrl":"/images/Ships/USSR/Svietlana-fs8.png", "hydro": 3.48, "speed": 29, "tier": 4, "torpedo": 5, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Murmansk", "concealment": 13.14, "imageUrl":"/images/Ships/USSR/Murmansk-fs8.png", "hydro": 3.72, "speed": 34, "tier": 5, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Kirov", "concealment": 14.22, "imageUrl":"/images/Ships/USSR/Kirov-fs8.png", "hydro": 3.72, "speed": 35.5, "tier": 5, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Krasny Krym", "concealment": 13.68, "imageUrl":"/images/Ships/USSR/Krasnyi_Krym-fs8.png", "hydro": 3.72, "speed": 29, "tier": 5, "torpedo": 5, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Budyonny", "concealment": 13.14, "imageUrl":"/images/Ships/USSR/Budyonny-fs8.png", "hydro": 3.96, "speed": 35, "tier": 6, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Molotov", "concealment": 13.14, "imageUrl":"/images/Ships/USSR/Molotov-fs8.png", "hydro": 3.96, "speed": 36, "tier": 6, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Admiral Makarov", "concealment": 12.42, "imageUrl":"/images/Ships/USSR/Admiral_Makarov-fs8.png", "hydro": 3.96, "speed": 32, "tier": 6, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Shchors", "concealment": 13.32, "imageUrl":"/images/Ships/USSR/Shchors-fs8.png", "hydro": 4.20, "speed": 35.5, "tier": 7, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": false },
    {"name": "Chapayev", "concealment": 13.24, "imageUrl":"/images/Ships/USSR/Chapayev-fs8.png", "radar": 11.70, "hydro": 4.44, "speed": 33.5, "tier": 8, "torpedo": 4, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Mikhail Kutuzov", "concealment": 14.5, "imageUrl":"/images/Ships/USSR/Kutuzov-fs8.png", "hydro": 4.44, "speed": 33, "tier": 8, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Dmitri Donskoi", "concealment": 16.02, "imageUrl":"/images/Ships/USSR/Dmitry_Donskoy-fs8.png", "radar": 11.70, "hydro": 4.68, "speed": 36, "tier": 9, "torpedo": 8, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Kronshtadt", "concealment": 16.2, "imageUrl":"/images/Ships/USSR/Kronshtadt-fs8.png", "radar": 11.70, "hydro": 4.68, "speed": 33.5, "tier": 9, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Moskva", "concealment": 18, "imageUrl":"/images/Ships/USSR/Moskva-fs8.png", "radar": 11.70, "hydro": 4.92, "speed": 34.5, "tier": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
    {"name": "Stalingrad", "concealment": 18.72, "imageUrl":"/images/Ships/USSR/Stalingrad-fs8.png", "radar": 11.70, "hydro": 4.92, "speed": 35, "tier": 10, "shipIconUrl":"/images/Ships/Icons/cruiser-icon.svg", "type": "cruiser", "concealmentMod": true },
);

export const Cruisers = Japan.concat(US, Commonwealth, PanAsia, Italy, France, UK, Germany, USSR);