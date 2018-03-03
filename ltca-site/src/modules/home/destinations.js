import React, { Component } from "react"
import FlippingCard from '../../components/flippingcard'

class Destinations extends Component {
    render = () =>  (
        <div>
            <section className="section-destinations">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary u-margin-bottom-big">
                        Most popular Destinations
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        <FlippingCard url={'/destinations'}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Destinations