import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
    /* default props set up 2 */
    static defaultProps = {
        name: 'Default Name'
    }
    /* props type set up 2 */
    static propTypes = {
        name: PropTypes.string
    }
    render() {
        return (
            <div>
                Hi, my name is {this.props.name}.
            </div>
        );
    }
}

/* default props set up 1 */
// MyComponent.defaultProps = {
//     name: 'Default Name'
// }


/* props type set up 1 */
// MyComponent.propTypes = {
//     name: PropTypes.string
// }

export default MyComponent;