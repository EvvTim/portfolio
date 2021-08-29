import React from "react";

function HamburgerButton ({className, onClick}) {

    return (
        <button
            className={className}
            onClick={onClick}
        >
        <span className="hamburger__box">
            <span className="hamburger__inner"></span>
        </span>
        </button>
    )
}
export default HamburgerButton
