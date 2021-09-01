import React from "react";
import Navigation from "./Navigation/Navigation";
import HamburgerButton from "./HamburgerButton/HamburgerButton";


function Header({onClick, hamburgerActive, navigationActive, onClickLink}) {
    return (
        <header>
            <HamburgerButton
                className={hamburgerActive}
                onClick={onClick}
            />
            <Navigation className={navigationActive} onClickLink={onClickLink}/>
        </header>
    )
}

export default Header
