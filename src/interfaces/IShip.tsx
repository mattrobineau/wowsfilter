export interface IShip {
    abbreviation?: string,
    imageUrl: string;
    hydro?: number,
    name: string;
    shipIconUrl: string,
    speed: number;
    radar?: number;
    tier: number;
    type: string;
    torpedo?: number;
    concealment: number;
    concealmentMod: boolean;
}

export interface ICard extends IShip {
    onLoad(): void; 
}