import React from "react"
import './welcomebanner.css'
import { Button } from 'antd';
// import ImageBanner from '../assets/img/christopher-burns-Kj2SaNHG-hg-unsplash.jpg'

class WelcomeBanner extends React.Component {

  render() {
    return (
      <div id="welcomebanner-wrap" className="background-dark">
        <div className="welcomeMessage-wrap center">
          <h1 className="welcomeMessage">Kiri</h1>
          <h1 className="welcomeMessage-small">enhance Microsoft Endpoint Manager</h1>
        </div>
      </div>
    );
  }
}

export default WelcomeBanner;