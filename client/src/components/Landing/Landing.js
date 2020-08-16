import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

class Landing extends Component {

  render() {
    return (
      <section className="intro">
        <div className="inner">
          <div className="content">
            <h1>Stay Healthy. <b id="appNameText">Return Safe.</b></h1>
            
            <h4>Creating a community of trust will be paramount when adjusting to our new way of life.</h4>
            <Link
              to="/register"
              className="waves-effect waves-light btn hoverable" id="getStartedButton"
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