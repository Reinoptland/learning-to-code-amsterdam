import React, { Component } from 'react'
import scrollToComponent from "react-scroll-to-component"

class ScrollButton extends Component {
    handleScroll = () => scrollToComponent(this.props.scrollToElement, { offset: -100, align: 'middle', duration: 1000, ease:'inQuart'});

    render() {
        const { buttonText } = this.props

        return <a href="#" onClick={ this.handleScroll } className="btn btn--white">{ buttonText }</a>
    }
}

export default ScrollButton
