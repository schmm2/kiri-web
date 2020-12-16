import React from "react"
import './welcomebanner.css'
import { Button } from 'antd';


class WelcomeBanner extends React.Component {

  render() {
    return (
      <div id="welcomebanner-wrap" className="background-dark">
        <div className="welcomeMessage-wrap center">
          <h1 className="welcomeMessage">Kiri</h1>
          <Button ghost>Learn more</Button>
        </div>
      </div>
    );
  }
}

export default WelcomeBanner;