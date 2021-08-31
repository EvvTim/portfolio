import React from "react";
import Navigation from "./Navigation/Navigation";
import HamburgerButton from "./HamburgerButton/HamburgerButton";


function Header({onClick, hamburgerActive, navigationActive}) {
    return (
        <header>
            <HamburgerButton
                className={hamburgerActive}
                onClick={onClick}
            />
            <Navigation className={navigationActive}/>
        </header>
    )
}

export default Header
