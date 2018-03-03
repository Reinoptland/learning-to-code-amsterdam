import React from "react"

import About from "../modules/home/about"
import Features from "../modules/home/features"
import Header from "../modules/home/header"
import Destinations from "../modules/home/destinations"

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header 
          mainHeading="Learning to code Amsterdam"
          subHeading="Start your programming journey"
          buttonText="See destinations"
          size="large"
        />
        <About/>
        <Features/>
        <Destinations/>
  
      </div>
    )
  }
}

export default Index
