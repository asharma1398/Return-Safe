import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Checkins from "../Checkins/Checkins";

class Dashboard extends React.Component {

    state={
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
                {this.state.showData ? <Checkins displayForm={this.displayForm}/> : <Form />}
                <Footer displayData={this.displayData} />
            </>
        );
    }
}

export default Dashboard;
