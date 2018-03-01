import React from "react"

import About from "../modules/home/about"
import Features from "../modules/home/features"
import Header from "../modules/home/header"

class Index extends React.Component {
  render() {
    return (
      <div>
      <Header 
        mainHeading="Learning to code Amsterdam"
        subHeading="Start your programming journey"
        buttonText="See destinations"
      />
      <About/>
      <Features/>
        <h1 className="tu">Hi sassy friends</h1>
        <div className="sass-nav-example">
          <h2>Nav example</h2>
          <ul className="pa0 ma0 list">
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
            <li>
              <a href="https://github.com/gatsbyjs/gatsby/tree/master/examples/using-sass">
                Code for site on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Index
