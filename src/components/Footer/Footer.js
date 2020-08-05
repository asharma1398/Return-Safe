import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="row">
            <button className="btn-large col s6" id="calenderBtn"><span className="left navText">Calender</span><i className="small material-icons">date_range</i></button>
            <button className="btn-large col s6" id="dataBtn"><span className="left navText">Data</span><i className="small material-icons">bar_chart</i></button>
        </footer>
    );
}
