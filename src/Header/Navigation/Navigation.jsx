import React from "react";

function Navigation ({className, onClickLink}) {
    return (
        <nav className={className}>
            <ul>
                <li><a onClick={onClickLink} href="#main">Main<span className='nav-border'></span></a></li>
                <li><a onClick={onClickLink} href="#about">About<span className='nav-border'></span></a></li>
                <li><a onClick={onClickLink} href="#toolkit">My Toolkit<span className='nav-border'></span></a></li>
                <li><a onClick={onClickLink} href="#projects">Projects<span className='nav-border'></span></a></li>
                <li><a onClick={onClickLink} href="#footer-contacts">Contacts<span className='nav-border'></span></a></li>
            </ul>
        </nav>
    )
}

export default Navigation
