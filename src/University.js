import React, { Component } from 'react';
import './app.css';
import HeadLine from './HeadLine.js';

const logoClasses = "mt-4 img-fluid rounded";
const typeClasses = "col-2 font-weight-bold font-italic";
const rowClasses = "row";
const valueClass = "ml-2 col-auto";

class University extends Component {
    render() {
        return (
            <div className="text-light">
                <section className="mt-5 mb-5">
                    <HeadLine>Education</HeadLine>
                </section>
                <section>
                    <div className="ml-1 row">
                        <div className="col-lg">
                            <img id="unilogo" className={logoClasses} alt="rtu" src="rtu.jpg"></img>
                            <div className="mt-3"></div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>College</div>
                                <div className={valueClass}>Jaipur Engineering College and Research Center</div>
                            </div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>Degree</div>
                                <div className={valueClass}>Bachelor of Technology</div>
                            </div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>Major</div>
                                <div className={valueClass}>Information Technology</div>
                            </div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>From</div>
                                <div className={valueClass}>September 2010</div>
                            </div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>To</div>
                                <div className={valueClass}>May 2014</div>
                            </div>
                            <div className="mb-5"></div>
                        </div>
                        <div className="col-lg">
                            <img id="unilogo" className={logoClasses} alt="neu" src="neu.jpg"></img>
                            <div className="mt-3"></div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>College</div>
                                <div className={valueClass}>College of Computer and Information Science</div>
                            </div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>Degree</div>
                                <div className={valueClass}>Master of Science</div>
                            </div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>Major</div>
                                <div className={valueClass}>Computer Science</div>
                            </div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>From</div>
                                <div className={valueClass}>September 2017</div>
                            </div>
                            <div id="text" className={rowClasses}>
                                <div className={typeClasses}>To</div>
                                <div className={valueClass}>December 2019 (Expected Graduation Date)</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default University;
