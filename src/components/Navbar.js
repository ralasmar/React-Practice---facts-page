import React from "react"

export default function Navbar(props){
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img className="nav--logo_icon" src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toggler">
                <p classname="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}