import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Checkins from "../Checkins/Checkins";
import Data from "../../seeds.json";
import Calender from "../Calender/Calender";

class Dashboard extends React.Component {

    state = {
        currentUser: Data.users[0],
        checkins: Data.users[0].checkins,
        currentDate: new Date(),
        showData: false,
        showForm: true,
        showCalender: false
    }

    displayData = () => {
        this.setState({ showData: true, showForm: false, showCalender: false });
    }

    displayForm = () => {
        this.setState({ showForm: true, showData: false, showCalender: false });
    }

    displayCalender = () => {
        this.setState({ showCalender: true, showData: false, showForm: false });
    }

    render() {
        return (
            <>
                <Header date={this.state.currentDate} />
                <main className="container row">
                    {this.state.showData ? <Checkins displayForm={this.displayForm} checkins={this.state.checkins} /> : this.state.showForm ? <Form /> : <div></div>}
                    <Calender showCalender={this.state.showCalender} />
                </main>
                <Footer displayData={this.displayData} displayCalender={this.displayCalender} />
            </>
        );
    }
}

export default Dashboard;
