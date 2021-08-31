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
        <section className={classes.helloSection}>
            <div className={classes.helloContainer}>
                <span>👋 Hi,</span>
                <span className={classes.nameSpan}>I’m Yauheni Tsimashchuk,</span>
                <span>nice to meet you.</span>
                <Contacts/>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default HelloSection
