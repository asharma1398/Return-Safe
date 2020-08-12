import React, { useState, useEffect } from "react";
import 'materialize-css';
import { Button, Collection, CollectionItem, Icon } from 'react-materialize';
import "./checkins.css";
import API from "../../utils/API";

export default function Checkins(props) {
    const [checkins, setCheckins] = useState([]);

    useEffect(() => {
        loadCheckins();
    }, []);

    function loadCheckins() {
        // Test API call with get all checkins from current user and log to console (modify later to be only from currentDate)

    }

    return (
        <section className="section center col s12 l6" id="dataResults">
            <h3>Checkins</h3>

            <Button id="addCheckin" className="red darken-4"><span className="left" onClick={props.displayForm}>Add Checkin</span><i className="small material-icons">create</i></Button>

            {checkins.length === 0 ? <section><Icon large className="white-text">coronavirus</Icon></section> : props.checkins.map(checkin => {
                if (new Date(checkin.Date).toDateString() === props.currentDate.toDateString()) {
                    return <Collection header={new Date(checkin.Date).toLocaleTimeString()} className="row">{
                        Object.keys(checkin).map((item) => {
                            if (item !== "Date" && item === "Comments") {
                                return <CollectionItem className="valign-wrapper col s12">{item}: {checkin[item]}</CollectionItem>
                            } else if (item !== "Date") {
                                return <CollectionItem className="valign-wrapper col s6">
                                    <i className="small material-icons">{item === "Temp" ? "local_pharmacy" : "check"}</i>{item} {checkin[item]}
                                </CollectionItem>
                            }
                        })}</Collection>
                }
            })}

        </section>
    )
}