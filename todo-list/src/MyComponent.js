import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {

    state = {
        number: 0
    }

    static defaultProps = {
        name: 'Default Name'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    render() {
        return (
            <div>
                Hi, my name is {this.props.name}.<br />
                I am {this.props.age}.
                <p>Number: {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>PLUS</button>
            </div>
        );
    }
}

export default MyComponent;