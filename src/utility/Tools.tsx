// import { IShip } from '../interfaces/IShip';

export const CalculateConcealment = (base: number, shipType: string, hasMod: boolean): number => {
    // Camo = 4%
    let concealment = 0;

    // Concealment System Modification 1 = 10%
    if (hasMod) {
        concealment += .10;
    }

    // Concealment expert
    switch (shipType) {
        case "destroyer":
            concealment += .10;
            break;
        case "cruiser":
            concealment += .12;
            break;
        case "battleship":
            concealment += .14;
            break;
        case "carrier":
            concealment += .16;
            break;
    }


    concealment = base - (base * concealment);

    // Finally, apply camo concealment
    const precision = Math.pow(10, 1);
    return Math.ceil((concealment - (concealment * .03)) * precision) / precision;
}

export const GroupBy = (list: any[], key: any): any[] => {
    const ships = list.reduce((rv, x) => {
        const v = key instanceof Function ? key(x) : x[key];
        const el = rv.find((r: any) => r && r.key === v);

        if (el) { el.values.push(x); }
        else { rv.push({ key: v, values: [x] }); }

        return rv;
    }, []);

    // Arbitrary decision for display
    const order = ['destroyer', 'cruiser', 'battleship', 'carrier'];
    ships.sort((a:any, b:any) => order.indexOf(a.key) - order.indexOf(b.key));

    let result = Array<any>();    
    ships.forEach((i:any) => result = result.concat(i.values));
    return result;
}