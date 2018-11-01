import React, { Component } from 'react';

class AsyncSplitMe extends Component {

    state = {
        SpliteMe: null
    }

    loadSplitMe = () => {
        import('./SplitMe').then(({ default: SplitMe }) => {
            this.setState({
                SplitMe
            });
        });
    }

    render() {
        const { SplitMe } = this.state;
        return SplitMe ? <SplitMe /> : <button onClick={this.loadSplitMe}>Loading SplitMe</button>
    }
}

export default AsyncSplitMe;