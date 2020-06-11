import * as React from 'react';
import { IShip } from '../../interfaces/IShip';
import { CalculateConcealment } from '../../utility/Tools';
import { Ship } from './Ship';

export default class Ships extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        if (this.props.view) {
            return (
                <div className="shiplist clearfix">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Speed (kn)</th>
                                <th>Radar (km)</th>
                                <th>Hydro (km)</th>
                                <th>Torpedos (km)</th>
                                <th>Concealment (km)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.ships.map((dd: IShip) =>
                                    <tr key={dd.name}>
                                        <td>
                                            <div className="icon"><img className={dd.type} src={`${process.env.PUBLIC_URL}` + dd.shipIconUrl} /></div>
                                            <span>{dd.name}</span>
                                        </td>
                                        <td className="center"><span>{dd.speed}</span></td>
                                        <td className="center"><span>{dd.radar}</span></td>
                                        <td className="center"><span>{dd.hydro}</span></td>
                                        <td className="center"><span>{dd.torpedo}</span></td>
                                        <td className="center"><span>{CalculateConcealment(dd.concealment, dd.type, dd.concealmentMod)}</span></td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            )
        }
        return (
            <div className="shiplist clearfix">
                {this.props.ships.map((dd: IShip) =>
                    <Ship key={dd.name}
                        name={dd.name}
                        imageUrl={dd.imageUrl}
                        hydro={dd.hydro}
                        radar={dd.radar}
                        shipIconUrl={dd.shipIconUrl}
                        speed={dd.speed}
                        torpedo={dd.torpedo}
                        tier={dd.tier}
                        type={dd.type}
                        concealment={CalculateConcealment(dd.concealment, dd.type, dd.concealmentMod)}
                        concealmentMod={dd.concealmentMod} />
                )}
            </div>
        )
    }
}