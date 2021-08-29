import React from "react";

const classes = {
    aboutMeSection: 'about-me-section',
    sectionTitle: 'section-title'
}

function AboutMeSection () {
    return (
        <div className={classes.aboutMeSection}>
            <h2 id={'about'} className={classes.sectionTitle}>About Me</h2>
        </div>
    )
}

export default AboutMeSection
