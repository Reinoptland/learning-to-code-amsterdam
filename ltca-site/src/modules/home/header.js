import React from "react"

const Header = ({ mainHeading, subHeading, buttonText }) => {
    return (
        <div>
            <header className="header">
                <div className="header__logo-box">
                    <img src="img/logo-white.png" alt="Logo" className="header__logo"></img>
                </div>

                <div className="header__text-box">
                    <h1 className="heading-primary"> 
                        <span className="heading-primary--main">{ mainHeading }</span>
                        <span className="heading-primary--sub">{ subHeading }</span>
                    </h1>

                    <a href="#" className="btn btn--white">{ buttonText }</a>
                </div>
            </header>
        </div>
    )
}

export default Header


