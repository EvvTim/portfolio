import React from "react";

const classes = {
    footerNavigationContainer: 'footer-navigation-container'
}

function FooterNavigation () {
    return (
        <div className={classes.footerNavigationContainer}>
            <ul>
                <li><a href="#main">Main</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#toolkit">My Toolkit</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
    )
}

export default FooterNavigation
