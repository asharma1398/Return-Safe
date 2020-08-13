import React, { useState, useEffect } from "react";
import 'materialize-css';
import { Button, Collection, CollectionItem, Icon } from 'react-materialize';
import "./checkins.css";
import API from "../../utils/API";

export default function Checkins(props) {
    const [checkins, setCheckins] = useState([]);

    useEffect(() => {
        // Potential version of find function with query to find matching dates
        // let day = props.currentDate.toDateString();
        // console.log(day);
        // API.findByDate(day)
        // .then(res => {
        //     console.log(res.data);
        //     setCheckins(res.data);
        // })
        // .catch(err => console.log(err));

        // Function to load checkins (should be updated to be only current user)
        API.find()
            .then(res => {
                setCheckins(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="section center col s12 l6" id="dataResults">
            <h3>Checkins</h3>

            <Button id="addCheckin" className="red darken-4"><span className="left" onClick={props.displayForm}>Add Checkin</span><i className="small material-icons">create</i></Button>

            {checkins.length === 0 ? <section><Icon large className="white-text">coronavirus</Icon></section> : checkins.map(checkin => {
                if (new Date(checkin.date).toDateString() === props.currentDate.toDateString()) {
                    return <Collection header={new Date(checkin.date).toLocaleTimeString()} className="row">{
                        Object.keys(checkin).map((item) => {

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
                                    case "temperature":
                                        return <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">local_pharmacy</i>{checkin[item]}</CollectionItem>
                                    case "comments":
                                        return <CollectionItem className="valign-wrapper col s12">Comments: {checkin[item]}</CollectionItem>
                                    default:
                                        return <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">check</i>{item}</CollectionItem>
                                }
                            }
                        })
                    }</Collection>
                }
            })}

        </section>
    )
}