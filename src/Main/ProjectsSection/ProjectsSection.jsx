import React from "react";
import kartaPolaka from '../../images/karta-polaka.png';
import cryptoCurrencyRate from '../../images/cryptoCurrencyRate.png'
import simpleCountdown from '../../images/simple-countdown.png'
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
    soon: 'soon',
    projectLinkContainer: 'project-link-container',
}

function ProjectsSection() {
    return (
        <section id={'projects'} className={classes.projectsSection}>
            <h2 className={classes.sectionTitle}>Projects 🚧</h2>
            <div className={classes.projectsContainer}>
                <div className={'project-card'}>
                    <img src={kartaPolaka} alt="karta-polaka"/>
                    <div className={'project-card-info'}>
                        <h3>Pole's Card - Preparation Materials</h3>
                        <p>This application will help you prepare for your own Pole's Card!</p>
                        <div className={classes.toolsContainer}>
                            <span className={classes.tool}>React Native</span>
                            <span className={classes.tool}>React</span>
                            <span className={classes.tool}>Firebase</span>
                            <span className={classes.tool}>JavaScript</span>
                            <span className={classes.tool}>HTML</span>
                            <span className={classes.tool}>CSS</span>
                        </div>
                        <div className={classes.projectLinkContainer}>
                            <p>Links:</p>
                            <a className={classes.projectLink}
                               href="https://play.google.com/store/apps/details?id=com.kartapolaka.app">Google Play</a>
                        </div>
                    </div>
                </div>
                <div className={'project-card'}>
                    <img src={cryptoCurrencyRate} alt="cryptoCurrencyRate"/>
                    <div className={'project-card-info'}>
                        <h3>CryptoCurrencyRate.today</h3>
                        <p>Actual crypto rate and cryptocurrency calculator</p>
                        <div className={classes.toolsContainer}>
                            <span className={classes.tool}>React</span>
                            <span className={classes.tool}>JavaScript</span>
                            <span className={classes.tool}>TypeScript</span>
                            <span className={classes.tool}>CoinGecko API</span>
                            <span className={classes.tool}>HTML</span>
                            <span className={classes.tool}>CSS</span>

                        </div>
                        <div className={classes.projectLinkContainer}>
                            <p>Links:</p>
                            <a className={classes.projectLink}
                               href="https://cryptocurrencyrate.today/">CryptoCurrencyRate.today</a>
                        </div>
                    </div>
                </div>
                <div className={'project-card'}>
                    <img src={simpleCountdown} alt="simple-countdown"/>
                    <div className={'project-card-info'}>
                        <h3>JavaScript Countdown Timer</h3>
                        <p>Simple countdown timer</p>
                        <div className={classes.toolsContainer}>
                            <span className={classes.tool}>JavaScript</span>
                            <span className={classes.tool}>TypeScript</span>
                            <span className={classes.tool}>HTML</span>
                            <span className={classes.tool}>CSS</span>

                        </div>
                        <div className={classes.projectLinkContainer}>
                            <p>Links:</p>
                            <a className={classes.projectLink}
                               href="https://evvtim.github.io/simple-countdown/">JavaScript Countdown Timer</a>
                            <a className={classes.projectLink}
                               href="https://github.com/EvvTim/simple-countdown">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>

            <ToSection link={"#toolkit"} toSectionName={'my toolkit'}/>
        </section>
    )
}

export default ProjectsSection
