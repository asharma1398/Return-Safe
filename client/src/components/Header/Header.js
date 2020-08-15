import React from "react";
import LocButton from "../trackButton/trackButton"

function Header(props) {   
    return (
    
        <header>
       
            <nav className="nav-wrapper indigo darken-4" id="navbar">
            
                <div className="container center">
                <LocButton/>
                    <a href="/dashboard" className="flow-text" id="dashboardHeaderText">{props.date.toDateString()}</a><i class="small material-icons">exit_to_app</i>
                </div>
            </nav>
            
        </header>
        
    );
}

export default Header;