import React from "react";

export default function Calendar(props) {
    return (
    <section className={props.showCalendar ? "center col s12 l6" : "center col s12 l6 hide-on-med-and-down"}>
        <h3>This is a Calendar</h3>
    </section>
    )
}