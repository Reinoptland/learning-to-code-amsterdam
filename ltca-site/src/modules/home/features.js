import React from "react"

const Features = () => {
    return (
        <div>
            <section className="section-features">
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-compass"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore programming</h3>
                            <p className="feature-box__text">
                                Explore the world of programming for the very first time
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-signs"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                            <p className="feature-box__text">
                                Get advice on the next step in your programming journey
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-settings"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Use the right tools</h3>
                            <p className="feature-box__text">
                                Learn what tools you can use to make your projects
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-heart"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Have some fun!</h3>
                            <p className="feature-box__text">
                                Meet other people that are also interested in programming
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features