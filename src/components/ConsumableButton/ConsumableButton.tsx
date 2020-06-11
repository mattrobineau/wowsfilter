import * as React from 'react';

export default class ConsumableButton extends React.Component<any, any> {
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
                        <img className="ship-attribute" src={this.props.imageUrl} title={this.props.consumable} />
                    </div>
            </a>
        );
    }

    private toggleClass(event: any) {
        event.preventDefault();
        const newState = !this.state.active;
        this.setState({ active: newState });
        if (newState) {
            this.props.filterByConsumable(this.props.consumable, newState);
        }
        else {
            this.props.filterByConsumable(this.props.consumable, newState);
        }
    };
}
