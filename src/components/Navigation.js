import React from 'react';
import 'antd/dist/antd.css';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
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
                    <a href="#">Contact</a>
                </li>
                <li key="mail">
                    <a href="#">Functions</a>
                </li>
            </ul>
        );
    }
}

export default Navigation;
