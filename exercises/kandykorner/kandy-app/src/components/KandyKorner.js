import React, { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

// import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class KandyKorner extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <NavBar />
                    <ApplicationViews />
                </React.Fragment>
            </Router>
        )
    }
}

export default KandyKorner