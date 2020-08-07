import React from "react";

export default function Calender(props) {
    return (
    <section className={props.showCalender ? "center col s12 l6" : "center col s12 l6 hide-on-med-and-down"}>
        <h3>This is a Calender</h3>
    </section>
    )
}