import React from "react";

const classes = {
    scrollDown: 'scroll-down',
    arrowDown: 'arrow-down',
    scrollTitle: 'scroll-title'
}

function ScrollDown() {
    return (
        <div className={classes.scrollDown}>
            <span className={classes.arrowDown}></span>
            <a href="#about" className={classes.scrollTitle}>About Me</a>
        </div>
    )
}

export default ScrollDown
