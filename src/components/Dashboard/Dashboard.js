import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Checkins from "../Checkins/Checkins";

class Dashboard extends React.Component {

    render() {
        return (
            <>
                <Header />
                <Form />
                <Checkins />
                <Footer />
            </>
        );
    }
}

export default Dashboard;
