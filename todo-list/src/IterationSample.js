import React, { Component } from 'react';

class IterationSample extends Component {

    state = {
        names: ['Areum', 'James', 'Rina', 'Terry'],
        name: ''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    haddleInsert = () => {
        this.setState ({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }


    render() {
        
        const nameList = this.state.names.map(
            (name, index) => (<li key={index}>{name}</li>)
        );

        return (
            <div>
                <input 
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
                <button onClick={this.haddleInsert}>ADD</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;