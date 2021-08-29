import React from "react";

const classes = {
    helloContacts: 'hello-contacts'
}

function Contacts () {
    return (
        <div className={classes.helloContacts}>
            <ul>
                <li><a href="https://github.com/EvvTim"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/yauheni-tsimashchuk/"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://codepen.io/evvtim"><i className="fab fa-codepen"></i></a></li>
                <li><a href="https://www.codewars.com/users/EvvTim"><i className="fab fa-jedi-order"></i></a></li>
            </ul>
        </div>
    )
}

export default Contacts
