import React, { useState } from "react";
import 'materialize-css';
import { Button, Row, Col, Checkbox } from 'react-materialize';
import "./form.css";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Form(props) {
    const { user } = props.auth;
    const [checkinForm, setCheckinForm] = useState({
        cough: false,
        shortnessOfBreath: false,
        fatigue: false,
        bodyAche: false,
        headache: false,
        senseLoss: false,
        soreThroat: false,
        congestion: false,
        nausea: false,
        diarrhea: false,
        comments: ""
    });

    const handleInputChange = event => {
        const { value } = event.target;
        const { name } = event.target;

        setCheckinForm({
            ...checkinForm,
            [name]: value
        });
    }

    const handleCheckChange = event => {
        const { checked } = event.target;
        const { name } = event.target;

        setCheckinForm({
            ...checkinForm,
            [name]: checked
        });
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        API.saveCheckin(user.id, checkinForm)
            .then(res => {
                console.log("checkin saved!");
                props.displayData();
            })
            .catch(err => console.log(err));
    }

    return (
        <div id="checkInBackground">
            <section className="section col s12 l6 center" id="dataForm">

                <h4 className="center">Check-in:</h4>

                <form action="#" className="formItems">

                    <Row className="dataForm">

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkCough" label="Cough" value="Cough" name="cough" checked={checkinForm.cough} onChange={handleCheckChange} className="checks"></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkBreath" label="Shortness of Breath" value="Shortness of Breath" name="shortnessOfBreath" checked={checkinForm.shortnessOfBreath} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkFatigue" label="Fatigue" value="Fatigue" name="fatigue" checked={checkinForm.fatigue} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkAches" label="Muscle/body aches" value="Muscle/body aches" name="bodyAche" checked={checkinForm.bodyAche} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkHeadache" label="Headache" value="Headache" name="headache" checked={checkinForm.headache} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkSmell" label="New loss of taste or smell" value="New loss of taste or smell" name="senseLoss" checked={checkinForm.senseLoss} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkThroat" label="Sore Throat" value="Sore Throat" name="soreThroat" checked={checkinForm.soreThroat} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkCongestion" label="Congestion or runny nose" value="Congestion or runny nose" name="congestion" checked={checkinForm.congestion} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkNausea" label="Nausea or Vomiting" value="Nausea or Vomiting" name="nausea" checked={checkinForm.nausea} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col m={6} s={12}>
                            <p>
                                <Checkbox id="checkDiarrhea" label="Diarrhea" value="Diarrhea" name="diarrhea" checked={checkinForm.diarrhea} onChange={handleCheckChange}></Checkbox>
                            </p>
                        </Col>

                        <Col s={5} className="input-field offset-s4">
                            <input id="temp" type="number" className="validate" name="temperature" onChange={handleInputChange} />
                            <label htmlFor="temp">Temperature</label>
                        </Col>

                        <Col s={11} className="input-field">
                            <i className="material-icons prefix" id="pencil">mode_edit</i>
                            <textarea id="comments" className="materialize-textarea" name="comments" onChange={handleInputChange}></textarea>
                            <label htmlFor="comments">Anything else to note?</label>
                        </Col>
                    

                        <Col s={12} className="center submitBTN">
                            <Button className="waves-effect waves-light btn hoverable submitBtn" id="formSubmitButton" type="submit" onClick={handleFormSubmit}>Submit</Button>
                        </Col>

                    </Row>

                </form>

                <Button className="hide-on-med-and-down btn-large waves-effect waves-light btn hoverable" id="showDataButton" onClick={props.displayData}>Show Data</Button>
            </section>
        </div>
    );
}

Form.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(Form);
