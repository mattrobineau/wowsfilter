import * as React from 'react';

export default class SortSelector extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    public render() {
        return (
            <a href="#" onClick={this.handleEvent}>
                <div className={this.props.sort === this.props.currentSort ? "filterOptions active" : "filterOptions"}>
                    <span className="sortName">{this.props.name}</span>
                </div>
            </a>
        )

    }

    private handleEvent = (event: any) => {
        event.preventDefault();

        this.props.setSorting(this.props.sort);
        this.setState({ active: true });        
        return;
    }
}