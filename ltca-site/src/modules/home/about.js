import React from "react"

const About = () => {
    return (
        <div>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary u-margin-bottom-big">
                        Learn to code and meet like-minded peers
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Learning by yourself can be challenging</h3>
                        <p className="paragraph">
                            Though the resources to learn how to code are more accessible then ever, it's hard to know where to start or to figure out your next step.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">we'll figure it out - together!</h3>
                        <p className="paragraph">
                            Our objective for this meetup is to explore programming together regardless of your level of expertise or preferred programming language. So everyone is welcome to join.
                        </p>

                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About