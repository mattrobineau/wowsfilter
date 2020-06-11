import { IShip } from '../interfaces/IShip';

const US = Array<IShip>(
    {"name": "Langley", "concealment": 10.08, "imageUrl":"/images/Ships/USA/Langley-fs8.png", "speed": 15, "tier": 4, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Bogue", "concealment": 11.88, "imageUrl":"/images/Ships/USA/Bogue-fs8.png", "speed": 16.5, "tier": 5, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Independence", "concealment": 10.26, "imageUrl":"/images/Ships/USA/Independence-fs8.png", "speed": 31.5, "tier": 6, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Ranger", "concealment": 14.22, "imageUrl":"/images/Ships/USA/Ranger-fs8.png", "speed": 29.5, "tier": 7, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Saipan", "concealment": 12.24, "imageUrl":"/images/Ships/USA/Saipan-fs8.png", "speed": 33, "tier": 7, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Lexington", "concealment": 17.26, "imageUrl":"/images/Ships/USA/Lexington-fs8.png", "speed": 33, "tier": 8, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": true },
    {"name": "Enterprise", "concealment": 14.58, "imageUrl":"/images/Ships/USA/Enterprise-fs8.png", "speed": 32.5, "tier": 8, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": true },
    {"name": "Essex", "concealment": 14.94, "imageUrl":"/images/Ships/USA/Essex-fs8.png", "speed": 33, "tier": 9, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": true },
    {"name": "Midway", "concealment": 18.36, "imageUrl":"/images/Ships/USA/Midway-fs8.png", "speed": 33, "tier": 10, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": true },
);

const Japan = Array<IShip>(
    {"name": "Hosho", "concealment": 8.82, "imageUrl":"/images/Ships/Japan/Hosho-fs8.png", "speed": 25, "tier": 4, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Zuiho", "concealment": 9.18, "imageUrl":"/images/Ships/Japan/Zuiho-fs8.png", "speed": 28, "tier": 5, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Ryujo", "concealment": 9.9, "imageUrl":"/images/Ships/Japan/Ryujo-fs8.png", "speed": 28, "tier": 6, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Hiryu", "concealment": 11.88, "imageUrl":"/images/Ships/Japan/Hiryu-fs8.png", "speed": 34, "tier": 7, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Kaga", "concealment": 12.6, "imageUrl":"/images/Ships/Japan/Kaga-fs8.png", "speed": 28, "tier": 7, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": false },
    {"name": "Shokaku", "concealment": 12.42, "imageUrl":"/images/Ships/Japan/Zuikaku-fs8.png", "speed": 34, "tier": 8, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": true },
    {"name": "Taiho", "concealment": 14.58, "imageUrl":"/images/Ships/Japan/Taiho-fs8.png", "speed": 33.5, "tier": 9, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": true },
    {"name": "Hakuryu", "concealment": 15.66, "imageUrl":"/images/Ships/Japan/Hakuryu-fs8.png", "speed": 34.5, "tier": 10, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": true },
);

const Germany = new Array<IShip>(
    {"name": "Graf Zeppelin", "concealment": 16.2, "imageUrl":"/images/Ships/Germany/Graf_Zeppelin-fs8.png", "speed": 32, "tier": 8, "shipIconUrl":"/images/Ships/Icons/carrier-icon.svg", "type": "carrier", "concealmentMod": true },
);

export const Carriers = Japan.concat(US, Germany);