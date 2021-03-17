import React from 'react';
import './navigation.css';

class Navigation extends React.Component {

    handleClick = e => {
        console.log('click ', e);
        //this.setState({ current: e.key });
    };

    render() {
        return (
            <ul id="navigation" onClick={this.handleClick} mode="horizontal">
                <li key="app">
                    <a href="#contact-wrap">Contact</a>
                </li>
                <li key="mail">
                    <a href="#functions-wrap">Functions</a>
                </li>
            </ul>
        );
    }
}

export default Navigation;
