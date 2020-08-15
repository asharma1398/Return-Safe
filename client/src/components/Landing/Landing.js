import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {
 
render() {
 return (
  <section className="intro">
    <div className="inner">
      <div className="content">
        <h1>Stay Healthy. <b>Return Safe.</b></h1>
        <br></br>
        <h4>Creating a community of trust will be paramount when adjusting to our new way of life.</h4>
        <Link
                to="/register"
                className="waves-effect waves-light btn hoverable red lighten-1" id="getStartedButton"
              >
              Get Started
        </Link>
        </div>
        </div>
  </section>
  );
 }
};

export default Landing;