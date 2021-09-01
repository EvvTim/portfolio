import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import React, {useState} from "react";


function App() {
    const classes = {
        hamburger: 'hamburger',
        hamburgerActive: 'hamburger hamburger--active',
        navigation: 'navigation',
        navigationActive: 'navigation navigation--active',
        app: 'App',
        appActive: 'App App--active'
    }

    const [hamburger, setHamburger] = useState(true)

    return (
    <div className={hamburger ? classes.app : classes.appActive}>
        <Header
            onClick={() => hamburger ? setHamburger(false) : setHamburger(true)}
            onClickLink={() => hamburger ? setHamburger(false) : setHamburger(true)}
            hamburgerActive={hamburger ? classes.hamburger : classes.hamburgerActive}
            navigationActive={hamburger ? classes.navigation : classes.navigationActive}
        />
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
