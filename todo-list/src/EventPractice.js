import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }


    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="your name"
                    value={this.state.username}
                    onChange={this.handleChange} />
                <input
                    type="text"
                    name="message"
                    placeholder="Whatever you want"
                    value={this.state.message}
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}
                >submit</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default EventPractice;