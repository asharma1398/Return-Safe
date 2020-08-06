import React from "react";
import 'materialize-css';
import { Button, Collection, CollectionItem } from 'react-materialize';
import "./checkins.css";

export default function Checkins(props) {
    return (
        <section className="container section center" id="dataResults">
            <h3>Checkins</h3>

            <Button id="addCheckin"><span className="left" onClick={props.displayForm}>Add Checkin</span><i className="small material-icons">create</i></Button>

            {props.checkins.map(checkin => {
                return <Collection header={new Date(checkin.Date).toLocaleTimeString()} className="row">{
                    Object.keys(checkin).map((item) => {
                        if (item !== "Date" && item === "Comments") {
                            return <CollectionItem className="valign-wrapper col s12">{item}: {checkin[item]}</CollectionItem>
                        } else if (item !== "Date") {
                            return <CollectionItem className="valign-wrapper col s6">
                                <i className="small material-icons">{item === "Temp" ? "local_pharmacy" : "check"}</i>{item}: {checkin[item]}
                                </CollectionItem>
                        }
                    })}</Collection>
            })}

        </section>
    )
}
