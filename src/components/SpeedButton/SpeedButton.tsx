import * as React from 'react';

export default class SpeedButton extends React.Component<any, any> {
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
                        <span className="speedText">>{this.props.speed}</span>
                    </div>
            </a>
        );
    }

    private toggleClass(event: any) {
        event.preventDefault();
        const newState = !this.state.active;
        this.setState({ active: newState });
        if (newState) {
            this.props.filterBySpeed(this.props.speed, newState);
        }
        else {
            this.props.filterBySpeed(this.props.speed, newState);
        }
    };
}