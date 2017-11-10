import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./css/app.css";
import { NavLink} from 'react-router-dom';

const Home = () => {
    return(
        <div id="home">
            <div className="container dad" >
                <div className="row son" >
                    <div className="home col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <NavLink to="/projects" className="grow vertical-tab-3">
                                <p className="tab-title">3</p> 
                                <p className="rotate">Projects</p>
                            </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
