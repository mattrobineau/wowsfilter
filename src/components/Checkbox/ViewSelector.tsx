import * as React from 'react';
import { View } from '../../Enums'

export default class ViewSelector extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    public render() {
        return (
            <a href="#" onClick={this.handleEvent}>
                <div className={this.props.view === this.props.currentView ? "filterOptions active view" : "filterOptions view"}>
                    <img className="view" src={this.props.viewIconUrl} alt={View[this.props.view]} title={View[this.props.view]} />
                </div>
            </a>
        )

    }

    private handleEvent = (event: any) => {
        event.preventDefault();

        this.props.setView(this.props.view);
        this.setState({ active: true });
        return;
    }
}