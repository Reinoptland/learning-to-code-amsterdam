import React from "react"

import About from "../modules/home/about"
import Features from "../modules/home/features"
import Header from "../modules/home/header"
import Destinations from "../modules/home/destinations"
import scrollToComponent from "react-scroll-to-component"

class Index extends React.Component {
  state = { destinationsReference: null }

  componentDidMount() {
    this.setState({ destinationsReference: this.refs.Destinations })
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={() => scrollToComponent(this.Destinations, { offset: 0, align: 'top', duration: 500})}>Go To Red</button>
        <Header 
          mainHeading="Learning to code Amsterdam"
          subHeading="Start your programming journey"
          buttonText="See destinations"
          scrollToElement={this.state.destinationsReference}
          size="large"
        />
        <About/>
        <Features/>
        <Destinations ref="Destinations"/>
      </div>
    )
  }
}

export default Index
