import React from "react"
import Link from "gatsby-link"

const Destinations = () => {
    return (
        <div>
            <section className="section-destinations">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary u-margin-bottom-big">
                        Most popular Destinations
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">The Sea explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 day Destinations</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <Link to="/destinations/" className="btn btn--white">Book now!</Link>
                                    {/* <a href="#" className="btn btn--white">Book now!</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Destinations