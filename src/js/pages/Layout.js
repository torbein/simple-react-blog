import React from "react";
import { BrowserRouter as Router, Route, browserHistory, Link, Switch} from "react-router-dom";
import { connect } from "react-redux";
import Nav from "../components/layout/Nav"
import Footer from "../components/layout/Footer"
import Settings from "./Settings";
import Posts from "./Posts";
import Featured from "./Featured";
import Admin from "./Admin";

export default class Layout extends React.Component {

    constructor() {
        super();
    }

    render() {
        const location = this.props.location;
        const containerStyle = {
            marginTop: "60px"
        };
        console.log(this.props)
        return(
            <div>
                <Nav location={location}/>

                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                        {this.props.children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}