import React from "react"

// pages
import WelcomeBanner from '../pages/Welcomebanner'
import Functions from '../pages/Functions'
import Architecture from '../pages/Architecture'
import Introduction from '../pages/Introduction'
import Contact from '../pages/Contact'

// components
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Header from '../components/Header'


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
        <Architecture></Architecture>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default MainLayout