import React from "react";
import Contacts from "./Contacts";
import ScrollDown from "./ScrollDown";

const classes = {
    helloSection: 'hello-section',
    nameSpan: 'name-span',
    helloContainer: 'hello-container'
}

function HelloSection () {
    return (
        <section id='main' className={classes.helloSection}>
            <div className={classes.helloContainer}>
                <span>š Hi,</span>
                <span className={classes.nameSpan}>Iām Yauheni Tsimashchuk,</span>
                <span>nice to meet you.</span>
                <Contacts/>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default HelloSection
