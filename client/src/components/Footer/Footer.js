import React from "react";
import "./footer.css";

export default function Footer(props) {
    return (
        <footer className="row hide-on-large-only">
            <button className="btn-large col s6 red darken-4" id="calenderBtn" onClick={props.displayCalendar}><span className="left navText">Calendar</span><i className="small material-icons">date_range</i></button>
            <button className="btn-large col s6 red darken-4" id="dataBtn" onClick={props.displayData}><span className="left navText">Data</span><i className="small material-icons">bar_chart</i></button>
        </footer>
    );
}