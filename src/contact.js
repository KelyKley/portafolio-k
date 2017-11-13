import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';

const Contact = () => {
    return(
        <div id="contact">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <NavLink to="/home" className="grow vertical-tab-4">
                                <p className="tab-title">4</p> 
                                <p className="rotateContact rotate">Contact</p>
                            </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
