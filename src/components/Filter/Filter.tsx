import * as React from 'react';
import { GroupType, SortType, View } from '../../Enums';
import GroupSelector from '../Checkbox/GroupSelector';
import SortSelector from '../Checkbox/SortSelector';
import ViewSelector from '../Checkbox/ViewSelector';
import ConsumableButton from '../ConsumableButton/ConsumableButton';
import TierButton from '../TierButton/TierButton';

export default class Filter extends React.Component<any, any> {
    public state = {
        groupType: GroupType.None,
        sortType: SortType.All,
        view: View.Card
    }

    constructor(props: any) {
        super(props);
        this.ShowTier = this.ShowTier.bind(this);
        this.HideTier = this.HideTier.bind(this);
        this.FilterByConsumable = this.FilterByConsumable.bind(this);
        this.SetSorting = this.SetSorting.bind(this);
        this.SetGrouping = this.SetGrouping.bind(this);
    }

    public render() {
        return (
            <div className="filter">
                <ul className="view">
                    <li>
                        <ViewSelector setView={this.SetView} view={View.Card} currentView={this.state.view} viewIconUrl={`${process.env.PUBLIC_URL}` + '/images/Ships/Icons/card.svg'} />
                        <ViewSelector setView={this.SetView} view={View.Compact} currentView={this.state.view} viewIconUrl={`${process.env.PUBLIC_URL}` + '/images/Ships/Icons/compact.svg'} />
                    </li>
                </ul>
                <ul className="tier filter-group">
                    <li><span>tier</span></li>
                    <li><TierButton text="I" tier={1} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="II" tier={2} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="III" tier={3} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="IV" tier={4} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="V" tier={5} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="VI" tier={6} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="VII" tier={7} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="VIII" tier={8} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="IX" tier={9} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                    <li><TierButton text="X" tier={10} showTier={this.ShowTier} hideTier={this.HideTier} /></li>
                </ul>
                <ul className="consumable filter-group">
                    <li><span>only</span></li>
                    <li><ConsumableButton consumable="radar" imageUrl={`${process.env.PUBLIC_URL}` + "/images/consumables/radar.png"} filterByConsumable={this.FilterByConsumable} /></li>
                </ul>
                <ul className="sort filter-group">
                    <li className="sorting"><span>sort</span></li>
                    <li className="sorting"><SortSelector setSorting={this.SetSorting} sort={SortType.Radar} currentSort={this.state.sortType} name="radar" /></li>
                    <li className="sorting"><SortSelector setSorting={this.SetSorting} sort={SortType.Speed} currentSort={this.state.sortType} name="speed" /></li>
                    <li className="sorting"><SortSelector setSorting={this.SetSorting} sort={SortType.Concealment} currentSort={this.state.sortType} name="con." /></li>
                </ul>
                <ul className="group filter-group">
                    <li className="grouping"><span>group</span></li>
                    <li className="grouping"><GroupSelector setGrouping={this.SetGrouping} group={GroupType.Type} currentGroup={this.state.groupType} name="type" /></li>
                </ul>
            </div>
        );
    }

    protected ShowTier = (tier: number) => {
        this.props.showTier(tier);
    }

    protected HideTier = (tier: number) => {
        this.props.hideTier(tier);
    }

    protected FilterByConsumable = (consumable: string, state: boolean) => {
        this.props.filterByConsumable(consumable, state);
    }

    protected FilterBySpeed = (speed: number, state: boolean) => {
        this.props.filterBySpeed(speed, state);
    }

    protected SetSorting = (sortType: number) => {
        if (this.state.sortType === sortType) {
            this.props.setSorting(SortType.All);
            this.setState({ sortType: SortType.All });
            return;
        }

        this.props.setSorting(sortType);
        this.setState({ sortType });
    }

    protected SetGrouping = (groupType: number) => {
        if (this.state.groupType === groupType) {
            this.props.setGrouping(GroupType.None);
            this.setState({ groupType: GroupType.None });
            return;
        }

        this.props.setGrouping(groupType);
        this.setState({ groupType });
    }

    protected SetView = (view: number) => {
        this.props.setView(view);
        this.setState({ view });
    }
}