import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Checkins from "../Checkins/Checkins";
import Data from "../../seeds.json";

class Dashboard extends React.Component {

    state={
        currentUser: Data.users[0],
        checkins: Data.users[0].checkins,
        showData: false
    }

    displayData = () => {
        this.setState({ showData: true });
    }

    displayForm = () => {
        this.setState({ showData: false });
    }

    render() {
        return (
            <>
                <Header />
                {this.state.showData ? <Checkins displayForm={this.displayForm} checkins={this.state.checkins} /> : <Form />}
                <Footer displayData={this.displayData} />
            </>
        );
    }
}

export default Dashboard;
