import * as React from 'react';
import Filter from './components/Filter/Filter';
import Ships from './components/Ship/Ships';
import { Battleships } from './constants/Battleships';
import { Carriers } from './constants/Carriers';
import { Cruisers } from './constants/Cruisers';
import { Destroyers } from './constants/Destroyers';
import './css/compact/ship.css';
import './css/red/app.css';
import './css/red/filter.css';
import './css/red/ship.css';
import { GroupType, SortType, View } from './Enums';
import { IShip } from './interfaces/IShip';
import { CalculateConcealment, GroupBy } from './utility/Tools';

class App extends React.Component {
  public state = {
    group: GroupType.None as GroupType,
    ships: [] as IShip[],
    showRadar: false,
    sort: SortType.All as SortType,
    tiers: [] as number[],
    view: View.Card
  }

  public render() {
    if (this.state.ships.length > 0) {
      return (
        <div className="App">
          <Filter showTier={this.ShowTier}
            hideTier={this.HideTier}
            filterByConsumable={this.FilterByConsumable}
            filterBySpeed={this.FilterBySpeed}
            setSorting={this.SetSorting}
            setView={this.SetView}
            setGrouping={this.SetGrouping} />

          <div className="shiplist clearfix">
            <Ships ships={this.state.ships} view={this.state.view} />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <Filter showTier={this.ShowTier}
            hideTier={this.HideTier}
            filterByConsumable={this.FilterByConsumable}
            filterBySpeed={this.FilterBySpeed}
            setSorting={this.SetSorting}
            setView={this.SetView}
            setGrouping={this.SetGrouping} />

          <div className="emptyshiplist">
            <div className="help">
              <img src={`${process.env.PUBLIC_URL}` + "/images/consumables/ship_filter_help.png"} alt="Help" />
              <p>Speed: The base ship speed. Ships may have higher speeds through upgrades, however the base speed can be used to help determine your aim.</p>
              <h3>Attributes</h3>
              <p>
                There are 3 types of attributes:
              </p>
              <ol>
                <li>Surveillance Radar</li>
                <li>Hydroacoustic Search</li>
                <li>Torpedos</li>
              </ol>
              <h3>Range </h3>
              <p>
                The highest possible range in kilometers (km) is shown for the given attribute on the ship.
                Ships may have lower ranges based on modules or upgrades. In the case of torpedos, a ship my not have the module mounted to get the max range.
                However, you can be sure that staying outside of the max range is the safest option since it's impossible to tell which module is installed while loading in.
                </p>
              <h1>Select a tier to start.</h1>

              <div className="changelog">
                <i>changelog</i>
                <hr />
                <h4>Update December 2018</h4>
                <ul>
                  <li>- Updated Myogi's concealment</li>
                </ul>
                <h4>Update October 2018</h4>
                <ul>
                  <li>- Updated nerfed radars</li>
                  <li>- Updated hydro for UK destroyers</li>
                </ul>
                <h4>Update September 2018</h4>
                <ul>
                  <li>- Added grouping by ship type</li>
                  <li>- Resized some filter elements</li>
                  <li>- Added titles to some images to describe what it means</li>
                  <li>- Renamed a few ships to match their in game label (eg: Admiral Hipper -> Hipper)</li>
                  <li>- Added UK DDs. Note that the wiki data is incomplete for consumables; a new update will be made available once the wiki is updated.</li>                  
                </ul>
                <h4>Update August 2018</h4>
                <ul>
                  <li>- Added Boise</li>
                  <li>- Added max concealment for all ships. Calculated as: (base - (mod% (if any) + CE%)) - camo%</li>
                  <li>- Added ability to sort by concealment (<strong>con.</strong>)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  public ShowTier = (tier: number) => {
    const selectedTiers = this.state.tiers;
    selectedTiers.push(tier);
    this.setState({ tiers: selectedTiers }, this.FilterShips);
  }

  public HideTier = (tier: number) => {
    const selectedTiers = this.state.tiers.filter(t => t !== tier);
    this.setState({ tiers: selectedTiers }, this.FilterShips);
  }

  protected FilterByConsumable = (consumable: string, state: boolean) => {
    switch (consumable) {
      case "radar":
        this.setState({
          showRadar: state,
        }, this.FilterShips);
        break;
      case "smoke":
        this.setState({
          showSmoke: state,
        }, this.FilterShips);
        break;
    }
  }

  protected FilterBySpeed = (speed: number, state: boolean) => {
    let shipsByTier = Battleships.concat(Carriers, Destroyers, Cruisers)
      .filter(ship => this.state.tiers.indexOf(ship.tier) >= 0);

    if (state) {
      shipsByTier = shipsByTier.filter(ship => ship.speed > 25);
    }

    this.setState({ ships: shipsByTier });
  }

  protected FilterShips = () => {
    let shipsByTier = Battleships.concat(Carriers, Destroyers, Cruisers)
      .filter(ship => this.state.tiers.indexOf(ship.tier) >= 0);

    if (this.state.tiers.length > 0) {
      shipsByTier = shipsByTier
    }

    if (this.state.showRadar) {
      shipsByTier = shipsByTier.filter(ship => ship.radar && ship.radar > 0);
    }

    this.SortShips(this.state.sort, shipsByTier);

    shipsByTier = this.GroupShips(this.state.group, shipsByTier);
    this.setState({ ships: shipsByTier });
  }

  protected SetSorting = (sorting: number): void => {
    this.setState({ sort: sorting as SortType }, this.FilterShips);
  }

  protected SetGrouping = (grouping: number): void => {
    this.setState({ group: grouping as GroupType }, this.FilterShips);
  }

  protected SetView = (view: number): void => {
    this.setState({ view: view as SortType });
  }

  protected SortShips = (sorting: number, ships: IShip[]): void => {
    if (!ships) {
      ships = this.state.ships;
    }

    ships.sort(
      function compare(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
    );

    switch (sorting) {
      case SortType.All:
        break;
      case SortType.Radar:
        ships.sort((a, b) => {
          if (!a.radar) {
            return 1;
          }
          else if (!b.radar) {
            return -1;
          }
          else {
            return a.radar < b.radar ? -1 : 1;
          }
        });
        break;
      case SortType.Speed:
        ships.sort((x, y) => {
          if (x.speed < y.speed) {
            return -1;
          }
          if (x.speed > y.speed) {
            return 1;
          }
          return 0;
        });
        break;
      case SortType.Concealment:
        ships.sort((a, b) => {
          const ca = CalculateConcealment(a.concealment, a.type, a.concealmentMod);
          const cb = CalculateConcealment(b.concealment, b.type, b.concealmentMod);

          if (ca < cb) {
            return -1
          }
          if (ca > cb) {
            return 1;
          }
          return 0;
        });
    }
  }

  protected GroupShips = (grouping: number, ships: IShip[]): IShip[] => {
    if (!ships) {
      ships = this.state.ships;
    }

    if (grouping as GroupType === GroupType.None) {
      return ships;
    }

    return GroupBy(ships, (ship:IShip) => ship.type);    
  }
}

export default App;
