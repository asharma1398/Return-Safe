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
        // Test API call with get all checkins and log to console (modify later to be only from current user and currentDate)
        API.find()
            .then(res => {
                console.log(res.data);
                setCheckins(res.data);
            })
    }

    return (
        <section className="section center col s12 l6" id="dataResults">
            <h3>Checkins</h3>

            <Button id="addCheckin" className="red darken-4"><span className="left" onClick={props.displayForm}>Add Checkin</span><i className="small material-icons">create</i></Button>

            {checkins.length === 0 ? <section><Icon large className="white-text">coronavirus</Icon></section> : checkins.map(checkin => {
                return <Collection header={new Date(checkin.date).toLocaleTimeString()} className="row">{
                    Object.keys(checkin).map((item) => {
                        console.log(item);
                        if (checkin[item] && item !== "date" && item !== "_id") {
                            switch (item) {
                                case "cough":
                                case "shortnessOfBreath":
                                case "fatigue":
                                case "bodyAche":
                                case "headache":
                                case "senseLoss":
                                case "soreThroat":
                                case "congestion":
                                case "nausea":
                                case "diarrhea":
                                    return <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">check</i>{item}</CollectionItem>
                                    break;
                                case "temperature":
                                    return <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">local_pharmacy</i>{checkin[item]}</CollectionItem>
                                    break;
                                case "comments":
                                    return <CollectionItem className="valign-wrapper col s12">Comments: {checkin[item]}</CollectionItem>
                                    break;
                                default:
                                    return <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">check</i>{item}</CollectionItem>
                            }
                        }
                    })
                }</Collection>
            })}

        </section>
    )
}