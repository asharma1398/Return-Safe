import React, { useState, useEffect } from "react";
import 'materialize-css';
import { Button, Collection, CollectionItem, Icon } from 'react-materialize';
import "./checkins.css";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Map from "../map/map"

function Checkins(props) {
    const [checkins, setCheckins] = useState([]);
    const { user } = props.auth;
    useEffect(() => {

        let lowDate = new Date(props.currentDate.toDateString());
        let date = new Date(props.currentDate);
        let highDate = new Date(date.setHours(23,59,59,999));

        API.find(user.id, lowDate, highDate)
            .then(res => {
                if (res.data[0].checkins) {
                setCheckins(res.data[0].checkins);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="section center col s12 l6" id="dataResults">
            <Map currentDate = {props.currentDate}/>
            <h3>Checkins</h3>

            {props.currentDate.toDateString() === new Date().toDateString() && <Button id="addCheckin" className="red darken-4"><span className="left" onClick={props.displayForm}>Add Checkin</span><i className="small material-icons">create</i></Button>}

            {checkins.length === 0 ? <section><Icon large className="white-text">coronavirus</Icon></section> : checkins.map(checkin => {

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

            })}

        </section>
    )
}

Checkins.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(Checkins);