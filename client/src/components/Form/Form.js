import React from "react";
import 'materialize-css';
import { Button, Row, Col, Checkbox } from 'react-materialize';
import "./form.css";

function Form(props) {
    return (
        <section className="section col s12 l6 center" id="dataForm">

            <h4 className="center">Do A Quick Checkin!</h4>

            <form action="#">

                <Row>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkCough" label="Cough" value="Cough"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkBreath" label="Shortness of Breath" value="Breath"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkFatigue" label="Fatigue" value="Fatigue"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkAches" label="Muscle/body aches" value="Aches"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkHeadache" label="Headache" value="Headache"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkSmell" label="New loss of taste or smell" value="Smell"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkThroat" label="Sore Throat" value="Throat"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkCongestion" label="Congestion or runny nose" value="Congestion"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkNausea" label="Nausea or Vomiting" value="Nausea"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkDiarrhea" label="Diarrhea" value="Diarrhea"></Checkbox>
                        </p>
                    </Col>

                    <Col s={6}>
                        <p>
                            <Checkbox id="checkMask" label="Forgot Mask" value="Mask"></Checkbox>
                        </p>
                    </Col>

                    <Col s={9} className="input-field">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="comments" className="materialize-textarea"></textarea>
                        <label for="comments">Anything to note?</label>
                    </Col>

                    <Col s={3} className="input-field">
                        <input placeholder="98.6" id="temp" type="text" className="validate" />
                        <label for="temp">Temperature</label>
                    </Col>

                    <Col s={12} className="center">
                        <Button className="red darken-4">Submit</Button>
                    </Col>

                </Row>

            </form>

            {props.checkins.length > 0 && <Button className="hide-on-med-and-down btn-large red darken-4" onClick={props.displayData}>Show Data</Button>}
        </section>
    );
}

export default Form;