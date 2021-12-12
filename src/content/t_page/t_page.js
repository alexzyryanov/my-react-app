import React from "react";


class T_page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 2};

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <h1>{this.state.value * 0.13}</h1>
            </div>
        )
    }
}


export default T_page;