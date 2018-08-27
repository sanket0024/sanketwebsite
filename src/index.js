import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import University from './University';
import WorkExp from "./WorkExp";
import Demographic from "./Demographic";
import Project from "./projects";
import Skills from "./Skills";

ReactDOM.render(
    <div className="backgroundcolor">
        <div className="mb-5">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#dem">Demographic</a>
                <a className="navbar-brand" href="#uni">Education</a>
                <a className="navbar-brand" href="#wor">Work Experience</a>
                <a className="navbar-brand" href="#ski">Skills</a>
                <a className="navbar-brand" href="#pro">Projects</a>
            </nav>
        </div>
        <div id="dem" className="mt-5 m-3 pt-1">
            <Demographic/>
        </div>
        <div id="">
            <div id="uni" className="m-3"><University></University></div>
            <div id="wor" className="m-3 mt-5"><WorkExp/></div>
            <div id="ski" className="m-3"><Skills/></div>
            <div id="pro" className="m-3"><Project/></div>
        </div>
    </div>,
    document.getElementById('root')
);