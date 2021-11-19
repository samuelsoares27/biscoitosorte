import react, { Component } from "react";

export default class Botao extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>{ this.props.nomeBtn }</button>
            </div>
        )
    }
}