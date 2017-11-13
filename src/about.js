import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';

const About = () => {
    return(
        <div id="about">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <NavLink to="/home" className="grow vertical-tab-2">
                                <p className="tab-title">2</p> 
                                <p className="rotateAbout text-justify">About</p>
                            </NavLink>
                    </div>
                </div>
                <div id="aboutme" className="row" >
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <NavLink to="/home" className="grow">
                                <p className="tab-title text-center">Kely añamuro</p> 
                                <p className="text-justify">About</p>
                            </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
