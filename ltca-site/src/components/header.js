import React from "react"
import ScrollButton from "./scrollbutton"


const Header = ({ mainHeading, subHeading, buttonText, size, scrollToElement }) => {
    console.log(mainHeading)
    return (
        <div>
            <header className={`header header--${size}`}>
                <div className="header__logo-box">
                    <img src="/img/logo-white.png" alt="Logo" className="header__logo"></img>
                </div>

                <div className="header__text-box">
                    <h1 className="heading-primary"> 
                        { mainHeading && <span className="heading-primary--main">{ mainHeading }</span>}
                        { subHeading && <span className="heading-primary--sub">{ subHeading }</span> }
                    </h1>

                    { buttonText && scrollToElement && <ScrollButton buttonText={buttonText} scrollToElement={scrollToElement}/>}
                </div>
            </header>
        </div>
    )
}

export default Header


