import React from "react";

function Header(props) {
    return (
        <header>
            <nav className="nav-wrapper indigo darken-4">
                <div className="container center">
                    <a href="/dashboard" className="flow-text">{props.date.toDateString()}</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;