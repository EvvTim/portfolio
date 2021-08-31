import React from "react";
import HelloSection from "./HelloSection/HelloSection";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import MyToolkit from "./MyToolkit/MyToolkit";

function Main () {
    return (
        <main>
            <HelloSection/>
            <AboutMeSection/>
            <ProjectsSection/>
            <MyToolkit/>
        </main>
    )
}

export default Main
