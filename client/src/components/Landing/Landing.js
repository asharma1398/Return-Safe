import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
 
render() {
 return (
  <section className="intro">
    <div className="inner">
      <div className="content">
        <h1>Stay Healthy. Return Safe.</h1>
        <br></br>
        <h4>Creating a community of trust will be paramount when adjusting to our new way of life.</h4>
        <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn" id="getStartedButton"
              >
                Start
              </Link>
        </div>
        </div>
  </section>
  );
 }
};

export default Landing;