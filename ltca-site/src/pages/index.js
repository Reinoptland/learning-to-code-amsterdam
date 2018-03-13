import React from "react"
import Link from "gatsby-link"
import scrollToComponent from "react-scroll-to-component"

import Header from "../components/header"

import About from "../modules/home/about"
import Features from "../modules/home/features"
import Destinations from "../modules/home/destinations"


class Index extends React.Component {
  state = { destinationsReference: null }

  componentDidMount() {
    this.setState({ destinationsReference: this.refs.Destinations })
  }
  
  render() {
    console.log(this.state);
    return (
      <div>
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
        <Link to="/destinations">Hi</Link>
      </div>
    )
  }
}

export default Index
