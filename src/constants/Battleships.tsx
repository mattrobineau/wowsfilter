import { IShip } from '../interfaces/IShip';

const US = Array<IShip>(
    {"name": "S. Carolina", "concealment": 13.86, "imageUrl":"/images/Ships/USA/Michigan-fs8.png", "speed": 15.84, "tier": 3, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Wyoming", "concealment": 14.04, "imageUrl":"/images/Ships/USA/Wyoming-fs8.png", "speed": 17.98, "tier": 4, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Arkansas Beta", "concealment": 14.04, "imageUrl":"/images/Ships/USA/Arkansas_Beta-fs8.png", "speed": 20.5, "tier": 4, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "New York", "concealment": 16.02, "imageUrl":"/images/Ships/USA/New_York-fs8.png", "speed": 18.35, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Texas", "concealment": 16.02, "imageUrl":"/images/Ships/USA/Texas-fs8.png", "speed": 20.5, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "New Mexico", "concealment": 18.48, "imageUrl":"/images/Ships/USA/New_Mexico-fs8.png", "speed": 18.48, "tier": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Arizona", "concealment": 14.4, "imageUrl":"/images/Ships/USA/Arizona-fs8.png", "speed": 21, "tier": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Colorado", "concealment": 16.74, "imageUrl":"/images/Ships/USA/Colorado-fs8.png", "speed": 18.59, "tier": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "N. Carolina", "concealment": 15.66, "imageUrl":"/images/Ships/USA/North_Carolina-fs8.png", "speed": 24.42, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Alabama", "concealment": 16.2, "imageUrl":"/images/Ships/USA/Alabama-fs8.png", "speed": 27.5, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Massachusetts", "concealment": 16.56, "imageUrl":"/images/Ships/USA/Massachusetts-fs8.png", "speed": 27.5, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Alabama ST", "concealment": 16.2, "imageUrl":"/images/Ships/USA/Alabama_ST-fs8.png", "speed": 27.5, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Iowa", "concealment": 16.2, "imageUrl":"/images/Ships/USA/Iowa-fs8.png", "speed": 28.78, "tier": 9, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Missouri", "concealment": 16.2, "imageUrl":"/images/Ships/USA/Missouri-fs8.png", "radar": 9.5, "speed": 33, "tier": 9, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Montana", "concealment": 17.82, "imageUrl":"/images/Ships/USA/Montana-fs8.png", "speed": 30, "tier": 10, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
);

const Japan = Array<IShip>(
    {"name": "Mikasa", "concealment": 11.52, "imageUrl":"/images/Ships/Japan/Mikasa-fs8.png", "speed": 18, "tier": 2, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Kawachi", "concealment": 9.54, "imageUrl":"/images/Ships/Japan/Kawachi-fs8.png", "speed": 18.4, "tier": 3, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Myogi", "concealment": 15.1, "imageUrl":"/images/Ships/Japan/Myogi-fs8.png", "speed": 24.42, "tier": 4, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Ishizuchi", "concealment": 15.2, "imageUrl":"/images/Ships/Japan/Ishizuchi-fs8.png", "speed": 27.5, "tier": 4, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Kongo", "concealment": 16.2, "imageUrl":"/images/Ships/Japan/Kongo-fs8.png", "speed": 24.9, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "ARP Kongō", "concealment": 16.2, "imageUrl":"/images/Ships/Japan/ARP_Kongo-fs8.png", "speed": 30, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "ARP Kirishima", "concealment": 16.2, "imageUrl":"/images/Ships/Japan/ARP_Kirishima-fs8.png", "speed": 30, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "ARP Haruna", "concealment": 16.2, "imageUrl":"/images/Ships/Japan/ARP_Haruna-fs8.png", "speed": 30, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "ARP Hiei", "concealment": 16.2, "imageUrl":"/images/Ships/Japan/ARP_Hiei-fs8.png", "speed": 30, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Fuso", "concealment": 18.9, "imageUrl":"/images/Ships/Japan/Fuso-fs8.png", "speed": 21.56, "tier": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Mutsu", "concealment": 16.92, "imageUrl":"/images/Ships/Japan/Mutsu-fs8.png", "speed": 26.5, "tier": 6, "torpedo": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Nagato", "concealment": 17.1, "imageUrl":"/images/Ships/Japan/Nagato-fs8.png", "speed": 22.25, "tier": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Ashitaka", "concealment": 17.28, "imageUrl":"/images/Ships/Japan/Ashitaka-fs8.png", "speed": 30, "tier": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Amagi", "concealment": 17.28, "imageUrl":"/images/Ships/Japan/Amagi-fs8.png", "speed": 28.05, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Kii", "concealment": 17.82, "imageUrl":"/images/Ships/Japan/Kii-fs8.png", "speed": 29.5, "tier": 8, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Izumo", "concealment": 17.19, "imageUrl":"/images/Ships/Japan/Izumo-fs8.png", "speed": 27.16, "tier": 9, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Musashi", "concealment": 18, "imageUrl":"/images/Ships/Japan/Musashi-fs8.png", "speed": 27, "tier": 9, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Yamato", "concealment": 18, "imageUrl":"/images/Ships/Japan/Yamato-fs8.png", "speed": 27, "tier": 10, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
);

const Italy = new Array<IShip>(
    {"name": "Giulio Cesare", "concealment": 13.68, "imageUrl":"/images/Ships/Italy/Giulio_Cesare-fs8.png", "speed": 27, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Roma", "concealment": 14.94, "imageUrl":"/images/Ships/Italy/Roma-fs8.png", "speed": 30, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
);

const France = new Array<IShip>(
    {"name": "Turenne", "concealment": 11.34, "imageUrl":"/images/Ships/France/Turenne-fs8.png", "speed": 19.27, "tier": 3, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Courbet", "concealment": 15.84, "imageUrl":"/images/Ships/France/Courbet-fs8.png", "speed": 19.95, "tier": 4, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Bretagne", "concealment": 15.3, "imageUrl":"/images/Ships/France/Bretagne-fs8.png", "speed": 19.95, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Normandie", "concealment": 16.2, "imageUrl":"/images/Ships/France/Normandie-fs8.png", "speed": 28.03, "tier": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Dunkerque", "concealment": 16.92, "imageUrl":"/images/Ships/France/Dunkerque-fs8.png", "speed": 29.5, "tier": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Lyon", "concealment": 15.84, "imageUrl":"/images/Ships/France/Lyon-fs8.png", "speed": 25.65, "tier": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Richelieu", "concealment": 16.74, "imageUrl":"/images/Ships/France/Richelieu-fs8.png", "speed": 30.4, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Gascogne", "concealment": 16.74, "imageUrl":"/images/Ships/France/Gascogne-fs8.png", "speed": 32, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Alsace", "concealment": 16.74, "imageUrl":"/images/Ships/France/Alsace-fs8.png", "speed": 30.4, "tier": 9, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    // {"name": "Jean Bart", "concealment": 16.38, "imageUrl":"/images/Ships/France/JeanBart-fs8.png", "speed": 30, "tier": 9, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "République", "concealment": 18, "imageUrl":"/images/Ships/France/Republique-fs8.png", "speed": 30, "tier": 10, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
);

const UK = new Array<IShip>(
    {"name": "Bellerophon", "concealment": 13.68, "imageUrl":"/images/Ships/UK/Bellerophon-fs8.png", "speed": 20.36, "tier": 3, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Orion", "concealment": 14.4, "imageUrl":"/images/Ships/UK/Orion-fs8.png", "speed": 19.8, "tier": 4, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Iron Duke", "concealment": 14.94, "imageUrl":"/images/Ships/UK/Iron_Duke-fs8.png", "speed": 20.99, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Warspite", "concealment": 14.22, "imageUrl":"/images/Ships/UK/Warspite-fs8.png", "speed": 23.5, "tier": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Queen Elizabeth", "concealment": 14.4, "imageUrl":"/images/Ships/UK/Queen_Elizabeth-fs8.png", "speed": 22.33, "tier": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "King George V", "concealment": 14.58, "imageUrl":"/images/Ships/UK/King_George_V-fs8.png", "speed": 26.6, "tier": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Hood", "concealment": 16.2, "imageUrl":"/images/Ships/UK/Hood-fs8.png", "speed": 32, "tier": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Nelson", "concealment": 15.3, "imageUrl":"/images/Ships/UK/Nelson-fs8.png", "speed": 24, "tier": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Duke of York", "concealment": 14.58, "imageUrl":"/images/Ships/UK/Duke_of_York-fs8.png", "speed": 28, "tier": 7, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Monarch", "concealment": 14.58, "imageUrl":"/images/Ships/UK/Monarch-fs8.png", "speed": 26.6, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Lion", "concealment": 15.3, "imageUrl":"/images/Ships/UK/Lion-fs8.png", "speed": 28.03, "tier": 9, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Conqueror", "concealment": 15.66, "imageUrl":"/images/Ships/UK/Conqueror-fs8.png", "speed": 29.5, "tier": 10, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
);

const Germany = new Array<IShip>(
    {"name": "Nassau", "concealment": 10.44, "imageUrl":"/images/Ships/Germany/Nassau-fs8.png", "speed": 18.8, "tier": 3, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "König Albert", "concealment": 11.52, "imageUrl":"/images/Ships/Germany/Konig_Albert-fs8.png", "speed": 21, "tier": 3, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Kaiser", "concealment": 14.22, "imageUrl":"/images/Ships/Germany/Kaiser-fs8.png", "speed": 22.31, "tier": 4, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "König", "concealment": 14.58, "imageUrl":"/images/Ships/Germany/Konig-fs8.png", "speed": 21.6, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Bayern", "concealment": 14.94, "imageUrl":"/images/Ships/Germany/Bayern-fs8.png", "speed": 22.5, "tier": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Gneisenau", "concealment": 15.66, "imageUrl":"/images/Ships/Germany/Gneisenau-fs8.png", "speed": 28.8, "tier": 7, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Scharnhorst", "concealment": 15.66, "imageUrl":"/images/Ships/Germany/Scharnhorst-fs8.png", "speed": 30, "tier": 7, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Tirpitz", "concealment": 16.38, "imageUrl":"/images/Ships/Germany/Tirpitz-fs8.png", "hydro": 4.44, "speed": 30.5, "tier": 8, "torpedo": 6, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "Bismarck", "concealment": 16.38, "imageUrl":"/images/Ships/Germany/Bismarck-fs8.png", "hydro": 4.44, "speed": 28.52, "tier": 8, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "F. der Große", "concealment": 17.28, "imageUrl":"/images/Ships/Germany/Friedrich_der_Grosse-fs8.png", "hydro": 5.73, "speed": 27.3, "tier": 9, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
    {"name": "G Kurfürst", "concealment": 18.18, "imageUrl":"/images/Ships/Germany/Grossdeutschland-fs8.png", "hydro": 5.88, "speed": 30, "tier": 10, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": true },
);

const USSR = new Array<IShip>(
    {"name": "Imperator Nikolai I", "concealment": 12.78, "imageUrl":"/images/Ships/USSR/Nikolay_I-fs8.png", "speed": 21, "tier": 4, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
    {"name": "Oktyabrskaya Revolutsiya", "concealment": 13.68, "imageUrl":"/images/Ships/USSR/Oktyabrskaya_Revolutsiya-fs8.png", "speed": 23, "tier": 5, "shipIconUrl":"/images/Ships/Icons/battleship-icon.svg", "type": "battleship", "concealmentMod": false },
);

export const Battleships = Japan.concat(US, Italy, France, UK, Germany, USSR);