import React from "react";
import github from '../../images/icons/github.svg';
import javascript from '../../images/icons/javascript.svg';
import typescript from '../../images/icons/typescript.svg';
import firebase from '../../images/icons/firebase.svg';
import reactJs from '../../images/icons/react.svg';
import reactNative from '../../images/icons/react-native.svg';
import html5 from '../../images/icons/html5.svg';
import css3 from '../../images/icons/css-3.svg';
import sass from '../../images/icons/sass.svg';
import ToSection from "../../shared/ToSection/ToSection";

const classes = {
    myToolkitSection: 'my-toolkit-section',
    toolsContainer: 'tools-container',
    sectionTitle: 'section-title',
}

function MyToolkit () {
    return (
        <section id={'toolkit'} className={classes.myToolkitSection}>
            <h3 className={classes.sectionTitle}>My Toolkit 🛠️</h3>
            <div className={classes.toolsContainer}>
                <span><img src={github} alt="github"/><p>GitHub</p></span>
                <span><img src={javascript} alt="javascript"/><p>JavaScript</p></span>
                <span><img src={typescript} alt="typescript"/><p>TypeScript</p></span>
                <span><img src={firebase} alt="firebase"/><p>Firebase</p></span>
                <span><img src={reactJs} alt="reactJs"/><p>React</p></span>
                <span><img src={reactNative} alt="react-native"/><p>React Native</p></span>
                <span><img src={html5} alt="html5"/><p>HTML5</p></span>
                <span><img src={css3} alt="css3"/><p>CSS3</p></span>
                <span><img src={sass} alt="sass"/><p>SASS</p></span>
            </div>
            <ToSection toSectionName={'contact me'} link={'#footer-contacts'}/>
        </section>
    )
}

export default MyToolkit
