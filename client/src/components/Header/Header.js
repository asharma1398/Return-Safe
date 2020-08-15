import React from "react";
import LocButton from "../trackButton/trackButton"

function Header(props) {
    return (

        <header>

            <nav className="nav-wrapper indigo darken-4" id="navbar">

                <div className="container">
                    <LocButton className="hide-on-med-and-up" />
                    <a href="/dashboard" className="flow-text">{props.date.toDateString()}</a>
                    <a href="">Logout</a>
                </div>
            </nav>

        </header>

    );
}

export default Header;