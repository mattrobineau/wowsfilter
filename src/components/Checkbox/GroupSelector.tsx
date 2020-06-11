import * as React from 'react';

export default class GroupSelector extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
    }

    public render() {
        return (
            <a href="#" onClick={this.handleEvent}>
                <div className={this.props.group === this.props.currentGroup ? "filterOptions active" : "filterOptions"}>
                    <span className="groupName">{this.props.name}</span>
                </div>
            </a>
        )

    }

    private handleEvent = (event: any) => {
        event.preventDefault();

        this.props.setGrouping(this.props.group);
        this.setState({ active: true });        
        return;
    }
}