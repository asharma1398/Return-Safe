import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";

class Dashboard extends React.Component {

    render() {
        return (
            <>
                <Header />
                <Form />
                <Footer />
            </>
        );
    }
}

export default Dashboard;
