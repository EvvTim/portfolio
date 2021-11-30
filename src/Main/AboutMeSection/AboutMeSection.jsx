import React from "react";

const classes = {
    aboutMeSection: 'about-me-section',
    aboutMeContainer: 'about-me-container',
    sectionTitle: 'section-title',
    sectionContent: 'section-content',
    clickToProject: 'click-to-project'
}

function AboutMeSection() {
    return (
        <section id={'about'} className={classes.aboutMeSection}>
           <div className={classes.aboutMeContainer}>
               <h2  className={classes.sectionTitle}>About Me 🥷</h2>
               <p className={classes.sectionContent}>Recently, I was completely absorbed by the world of coding 🐱‍💻 <br/> I am interested in Front-End. I am currently
                   looking for my first job or internship as a Junior Front-end Developer.</p>
               <div className={classes.clickToProject}>
                   <a href="#projects">Click here to see my projects </a>
                   <span><i className="fas fa-angle-down"></i></span>
               </div>
           </div>
        </section>
    )
}

export default AboutMeSection
