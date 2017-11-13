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
                <div id="aboutme" className="row" >
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div  className="grow">
                                <p className="tab-title text-center">Kely añamuro</p> 
                                <p className="text-justify">About</p>
                                <ul class="social">
                                    <li class="github"><a href="https://github.com/KelyKley"><i class="fa fa-github fa-3x"></i></a></li>
                                    <li class="twitter"><a href="http://twitter.com/Kyokushinowa"><i class="fa fa-file-text-o fa-3x"></i></a></li>
                                    <li class="google"><a href="http://www.pinterest.com/beatagibalska/"><i class="fa fa-google-plus fa-3x"></i></a></li>
                                    <li class="linkedin"><a href="https://www.behance.net/Kurnikowa"><i class="fa fa-linkedin fa-3x"></i></a></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
