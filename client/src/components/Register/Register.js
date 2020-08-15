import React, { Component } from "react";
import "./register.css";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If the user is logged in and they navigate to the registration page, they will be redirected to the dashboard.
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
        <div id="registerBackground">
        <center>
      <div className="container">
        <div className="z-depth-1 white row">
          <form noValidate onSubmit={this.onSubmit} className="col s12" id="login" method="post" >
            <div className='row'>
              <div className='col s12'>
              <span className="welcomeText">Welcome! Please create an account.</span>

              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
              <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
              <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
              <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
              <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
            </div>

            <br />
            <center>
              <div className='row'>
                <button type='submit' name='btn_register' className='col s12 btn btn-large waves-effect waves-light hoverable red darken-4' id="registerButton">Register</button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <p className="registerText">Already have an account? <Link to="/login">Log in.</Link></p>
      </center>
    <div className="section"></div>
    <div className="section"></div>

</div>
    );
  }
}

// Using the `prop-types` package, we define types.
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// Allows us to get our `state` from Redux and map it to the props.
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// Allows us to redirect within an action.
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));