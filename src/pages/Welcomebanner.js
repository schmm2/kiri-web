import React from "react"
import './welcomebanner.css'

class WelcomeBanner extends React.Component {

  render() {
    return (
      <div id="welcomebanner-wrap" className="background-dark">
        <div className="welcomeMessage-wrap center">
          <h1 className="welcomeMessage">Simplify & Automate Microsoft Intune</h1>
          <p className="welcomeMessage-subtitle">kiri helps you to keep your repetitive tasks to a minimum and make your life easier</p>
        </div>
      </div>
    );
  }
}

export default WelcomeBanner;