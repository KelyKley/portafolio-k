import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./App.css";
import { NavLink} from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div class="container dad" >
                <div class="row son" >
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="grow vertical-tab-1">
                                <p class="tab-title">1</p> 
                                <p class="rotate">Home</p>
                            </div>
                            <div class="grow vertical-tab-2">
                                <p class="tab-title">2</p> 
                                <p class="rotate">About</p>
                            </div>
                            <div class="grow vertical-tab-3">
                                <p class="tab-title">3</p> 
                                <p class="rotate">Projects</p>
                            </div>
                            
                            <div class="grow vertical-tab-4">
                                <p class="tab-title">4</p> 
                                <p class="rotate">Contact</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
