import React, { useState } from "react";
import 'materialize-css';
import { Button, Row, Col, Checkbox } from 'react-materialize';
import "./form.css";

function Form(props) {
    const [checkinForm, setCheckinForm] = useState({
        date: props.currentDate,
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
        console.log(checkinForm);
    }

    const handleCheckChange = event => {
        const { checked } = event.target;
        const { name } = event.target;

        setCheckinForm({
            ...checkinForm,
            [name]: checked
        });
        console.log(checkinForm);
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        console.log(checkinForm);
    }

    return (
        <section className="section col s12 l6 center" id="dataForm">

            <h4 className="center">Do A Quick Checkin!</h4>

            <form action="#">

                <Row>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkCough" label="Cough" value="Cough" name="cough" checked={checkinForm.cough} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkBreath" label="Shortness of Breath" value="Shortness of Breath" name="shortnessOfBreath" checked={checkinForm.shortnessOfBreath} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkFatigue" label="Fatigue" value="Fatigue" name="fatigue" checked={checkinForm.fatigue} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkAches" label="Muscle/body aches" value="Muscle/body aches" name="bodyAche" checked={checkinForm.bodyAche} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkHeadache" label="Headache" value="Headache" name="headache" checked={checkinForm.headache} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkSmell" label="New loss of taste or smell" value="New loss of taste or smell" name="senseLoss" checked={checkinForm.senseLoss} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkThroat" label="Sore Throat" value="Sore Throat" name="soreThroat" checked={checkinForm.soreThroat} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkCongestion" label="Congestion or runny nose" value="Congestion or runny nose" name="congestion" checked={checkinForm.congestion} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkNausea" label="Nausea or Vomiting" value="Nausea or Vomiting" name="nausea" checked={checkinForm.nausea} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkDiarrhea" label="Diarrhea" value="Diarrhea" name="diarrhea" checked={checkinForm.diarrhea} onChange={handleCheckChange}></Checkbox>
                        </p>
                    </Col>

                    {/* <Col s={6}>
                        <p>
                            <Checkbox id="checkMask" label="Forgot Mask" value="Mask" onChange={handleInputChange}></Checkbox>
                        </p>
                    </Col> */}

                    <Col s={9} className="input-field">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="comments" className="materialize-textarea" name="comments" onChange={handleInputChange}></textarea>
                        <label htmlFor="comments">Anything to note?</label>
                    </Col>

                    {/* <Col s={3} className="input-field">
                        <input placeholder="98.6" id="temp" type="text" className="validate" name="temperature" onChange={handleInputChange} />
                        <label htmlFor="temp">Temperature</label>
                    </Col> */}

                    <Col s={12} className="center">
                        <Button className="red darken-4" type="submit" onClick={handleFormSubmit}>Submit</Button>
                    </Col>

                </Row>

            </form>

            <Button className="hide-on-med-and-down btn-large red darken-4" onClick={props.displayData}>Show Data</Button>
        </section>
    );
}

export default Form;