import * as React from 'react';

export default class TierButton extends React.Component<any, any> {
    public state = {
        active: false,        
    }

    constructor(props: any){
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
    }

    public render() {
        return(
            <a href="#" onClick={this.toggleClass}>
                    <div className={this.state.active ? "filterOptions active" : "filterOptions"}>                    
                        <span>{this.props.text}</span>
                    </div>
            </a>
        );
    }

    private toggleClass(event: any) {
        event.preventDefault();
        const newState = !this.state.active;
        this.setState({ active: newState });
        if (newState) {
            this.props.showTier(this.props.tier);
        }
        else {
            this.props.hideTier(this.props.tier);
        }
    };
}
