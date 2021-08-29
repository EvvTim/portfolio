import React from "react";
import Contacts from "./Contacts";
import ScrollDown from "./ScrollDown";

const classes = {
    helloSection: 'hello-section',
    nameSpan: 'name-span'
}

function HelloSection () {
    return (
        <section className={classes.helloSection}>
            <span>👋 Hi,</span>
            <span className={classes.nameSpan}>I’m Yauheni Tsimashchuk,</span>
            <span>nice to meet you.</span>
            <Contacts/>
            <ScrollDown/>
        </section>
    )
}

export default HelloSection
