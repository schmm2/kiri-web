import React from 'react';
import 'antd/dist/antd.css';

class Header extends React.Component {

    render() {
        return (
            <div id="header">
                {this.props.children}
            </div>
        );
    }
}

export default Header;
