import React from "react";

const classes = {
    scrollDown: 'scroll-down',
    arrowDown: 'arrow-down',
    scrollTitle: 'scroll-title'
}

function ScrollDown() {
    return (
        <a href='#about' className={classes.scrollDown}>
            <span className={classes.arrowDown}></span>
            <span className={classes.scrollTitle}>About Me</span>
        </a>
    )
}

export default ScrollDown
