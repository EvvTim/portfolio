import React from "react";

const classes = {
    footerContacts: "footer-contacts"
}

function FooterContacts() {
    return (
        <div id={classes.footerContacts} className={classes.footerContacts}>
            <ul>
                <li><a href="mailto:evgeniytim94@gmail.com"><i className="far fa-envelope"></i></a></li>
                <li><a href="https://www.facebook.com/evvtim/"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/yauheni-tsimashchuk/"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://twitter.com/evveevveevvee"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://github.com/EvvTim"><i className="fab fa-github"></i></a></li>
            </ul>
        </div>
    )
}

export default FooterContacts
