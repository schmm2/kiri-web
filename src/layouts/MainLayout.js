import React from "react"
import './MainLayout.css'

// pages
import WelcomeBanner from '../pages/Welcomebanner'
import Functions from '../pages/Functions.js'
import Deploy from '../pages/Deploy.js'
import Introduction from '../pages/Introduction.js'
import Contact from '../pages/Contact'

// components
import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'


class MainLayout extends React.Component {

  render() {
    return (
      <div id="mainlayout">
        <Header>
          <Navigation></Navigation>
        </Header>
        <WelcomeBanner></WelcomeBanner>
        <Introduction></Introduction>
        <Functions></Functions>
        <Deploy></Deploy>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default MainLayout