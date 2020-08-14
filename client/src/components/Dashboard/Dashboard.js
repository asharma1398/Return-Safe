import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Checkins from "../Checkins/Checkins";
import Calendar from "../Calendar/Calendar";

class Dashboard extends React.Component {

    state = {
        currentUser: "",
        currentDate: new Date(),
        showData: false,
        showForm: true,
        showCalendar: false
    }

    displayData = () => {
        this.setState({ showData: true, showForm: false, showCalendar: false });
    }

    displayForm = () => {
        this.setState({ showForm: true, showData: false, showCalendar: false });
    }

    displayCalendar = () => {
        this.setState({ showCalendar: true, showData: false, showForm: false });
    }

    onChange = (date) => {
        this.setState({ currentDate: date })
        this.displayData();
    }

    render() {
        const { user } = this.props.auth;

        return (
            <>
                <Header date={this.state.currentDate} />
                <main className="container row">
                    {this.state.showData ? <Checkins displayForm={this.displayForm} currentDate={this.state.currentDate} /> : this.state.showForm ? <Form displayData={this.displayData} /> : <div></div>}
                    <Calendar showCalendar={this.state.showCalendar} currentDate={this.state.currentDate} onChange={this.onChange}/>
                </main>
                <Footer displayData={this.displayData} displayCalendar={this.displayCalendar} />
            </>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard);