import React from "react";
import { Calendar as ReactCal } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendar(props) {
   
    return (

        
        <section className={props.showCalendar ? "center col s12 l6" : "center col s12 l6 hide-on-med-and-down"}>
            <h3>This is a Calendar</h3>

            <div>
                <ReactCal
                    onChange={props.onChange}
                    value={props.currentDate}
                    maxDate={new Date()}
                />
            </div>
        </section>
    )
}