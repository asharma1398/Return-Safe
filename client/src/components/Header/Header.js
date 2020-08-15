import React from "react";
import LocButton from "../trackButton/trackButton"
import "./header.css"

function Header(props) {
    return (
        <>

            <header id="heading">

                <nav className="nav-wrapper indigo darken-4" id="navbar">

                    <div className="container headingNavbar">
                        <LocButton />
                        <a href="/dashboard" className="flow-text" id="dashboardHeaderText">{props.date.toDateString()}</a>
                        <i id="loggingOUTid" class="material-icons logoutICON">exit_to_app</i>

                    </div>


                </nav>


            </header>

        </>

    );
}

export default Header;