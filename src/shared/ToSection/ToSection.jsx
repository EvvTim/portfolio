import React from "react";

const classes = {
    toSection: 'to-section'
}

function ToSection ({link, toSectionName}) {
    return (
        <div className={classes.toSection}>
            <a href={link}>{toSectionName}</a>
            <a href={link}><i className="fas fa-chevron-down"></i></a>
        </div>
    )
}

export default ToSection
