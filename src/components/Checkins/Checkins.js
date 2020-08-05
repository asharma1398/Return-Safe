import React from "react";
import 'materialize-css';
import { Button, Row, Col, Collection, CollectionItem } from 'react-materialize';
import "./checkins.css";

export default function Checkins() {
    return (
        <section className="container section center" id="dataResults">
            <h3>Today's Checkins</h3>

            <Button id="addCheckin"><span className="left">Add Checkin</span><i className="small material-icons">create</i></Button>

            <Collection header="10 AM" className="row">
                <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">local_pharmacy</i>Temp: 98</CollectionItem>
                <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">check</i>Cough</CollectionItem>
                <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">check</i>Headache</CollectionItem>
                <CollectionItem className="valign-wrapper col s6"><i className="small material-icons">check</i>Congestion</CollectionItem>
            </Collection>

        </section>
    )
}
