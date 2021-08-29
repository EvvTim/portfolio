import React, {useState} from "react";
import Navigation from "./Navigation/Navigation";
import HamburgerButton from "./HamburgerButton/HamburgerButton";

const classes = {
    hamburger: 'hamburger',
    hamburgerActive: 'hamburger hamburger--active',
    navigation: 'navigation',
    navigationActive: 'navigation navigation--active'
}

function Header() {
    const [hamburger, setHamburger] = useState(true)
    return (
        <header>
            <HamburgerButton
                className={hamburger ? classes.hamburger : classes.hamburgerActive}
                onClick={() => hamburger ? setHamburger(false) : setHamburger(true)}
            />
            <Navigation className={hamburger ? classes.navigation : classes.navigationActive}/>
        </header>
    )
}

export default Header
