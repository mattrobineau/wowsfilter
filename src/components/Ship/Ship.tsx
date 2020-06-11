import * as React from 'react';
import { IShip } from '../../interfaces/IShip';

const ShipAttribute = (title: string, img: string, value?: number) => {
    if (value) {
        return (
            <div className="ship-attribute">
                <span>{value}</span>
                <img src={`${process.env.PUBLIC_URL}` + img} title={title} />
            </div>
        )
    }

    return null;
}

export const Ship = (props: IShip) => {
    return (
        <div className="container">
            <h3>{props.name}</h3>
            <div className="ship">
                <img src={`${process.env.PUBLIC_URL}` + props.imageUrl} alt={props.name} />
                <div className="speed">
                    <span>{props.speed} kn</span>
                </div>
                <div className="ship-attributes">
                    {ShipAttribute("Radar Range (km)", '/images/consumables/radar.png', props.radar)}
                    {ShipAttribute("Hydroacoustics Range (km)", '/images/consumables/hydro.png', props.hydro)}
                    {ShipAttribute("Torpedo Range (km)", '/images/consumables/torpedos.png', props.torpedo)}
                    {ShipAttribute("Concealment Range (km)", '/images/consumables/concealment.png', props.concealment)}
                </div>
            </div>
        </div>
    );
}