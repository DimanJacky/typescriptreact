import React from "react";
import {createSelector} from "reselect";

const InputIn = (props: any) => {
    console.log('render');
    return (
        <div>
            <button>{props.num}</button>
        </div>
    );
}

export class SelectInput extends React.Component {

    state = {
        label: 5,
        count: 1
    };

    onChangeLabel = (event: any) => {
        this.setState({label: event.target.value})
    }

    onChangeCount = (event: any) => {
        this.setState({count: event.target.value})
    }

    getStateLabel = (state: any) => state.label

    selectLabel = createSelector(
        this.getStateLabel,
        label => label
    );

    render() {
        return (
            <div>
                <h3>SelectInput</h3>
                <input type="text" onChange={this.onChangeLabel} />
                <input type="text" onChange={this.onChangeCount} />
                <h5>count {this.state.count}</h5>
                <h5><InputIn num={this.selectLabel(this.state)} /></h5>
            </div>
        );
    }

};
