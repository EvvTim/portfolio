import React from "react";

function Navigation ({className}) {
    return (
        <nav className={className}>
            <ul>
                <li><a href="#main">Main<span className='nav-border'></span></a></li>
                <li><a href="#about">About<span className='nav-border'></span></a></li>
                <li><a href="#skills">Skills<span className='nav-border'></span></a></li>
                <li><a href="#projects">Projects<span className='nav-border'></span></a></li>
                <li><a href="#contacts">Contacts<span className='nav-border'></span></a></li>
            </ul>
        </nav>
    )
}

export default Navigation
