import React from 'react';
import 'antd/dist/antd.css';
import './header.css';

class Header extends React.Component {

    render() {
        return (
            <div id="header">
                <div id="title">Kiri</div>
                {this.props.children}
            </div>
        );
    }
}

export default Header;
