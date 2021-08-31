import React, {useState} from "react";
import kartaPolaka from '../../images/karta-polaka.png'
import ToSection from "../../shared/ToSection/ToSection";

const classes = {
    projectsSection: 'projects-section',
    sectionTitle: 'section-title',
    sectionContent: 'section-content',
    projectsContainer: 'projects-container',
    cardInfo: 'card-info',
    cardInfoActive: 'card-info card-info--active',
    toolsContainer: 'card-tools-container',
    tool: 'tool',
    projectLink: 'project-link',
    toProject: 'to-project',
    soon: 'soon'
}

function ProjectsSection() {
    const [cardInfo, setCardInfo] = useState(true)
    console.log(cardInfo)
    const addCardInfo = () => cardInfo ? classes.cardInfo : classes.cardInfoActive

    return (
        <div id={'projects'} className={classes.projectsSection}>
            <h2 className={classes.sectionTitle}>Projects 🚧</h2>
            <a className={classes.toProject} href="#project-cards">Click to project-card to see more info <span><i
                className="fas fa-angle-down"></i></span></a>
            <div className={classes.projectsContainer}>
                <figure id={'project-cards'} onClick={() => cardInfo ? setCardInfo(false) : setCardInfo(true)}>
                    <img src={kartaPolaka} alt="karta-polaka"/>
                    <figcaption className={addCardInfo()}>
                        <h3>Pole's Card - Preparation Materials</h3>
                        <p>This application will help you prepare for your own Pole's Card!</p>
                        <div className={classes.toolsContainer}>
                            <span className={classes.tool}>React Native</span>
                            <span className={classes.tool}>Firebase</span>
                            <span className={classes.tool}>JavaScript</span>
                        </div>
                        <a className={classes.projectLink}
                           href="https://play.google.com/store/apps/details?id=com.kartapolaka.app">Google Play</a>
                    </figcaption>
                </figure>
                <figure>
                    <div className={classes.soon}><h3>Soon...</h3></div>
                </figure>
                <figure>
                    <div className={classes.soon}><h3>Soon...</h3></div>
                </figure>
            </div>
            <ToSection link={"#toolkit"} toSectionName={'my toolkit'}/>
        </div>
    )
}

export default ProjectsSection
