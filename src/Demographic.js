import React, { Component } from 'react';
import './app.css';
import HeadLine from "./HeadLine";

const fieldClasses = "col-5 font-weight-bold font-italic";
const valuesClasses = "ml-flex col-md-auto font-italic";
const imageClasses = "mt-3 mb-3 img-fluid img-thumbnail ml-2";

class Demographic extends Component {
    render() {
        return (
            <div className="text-light">
                <section className="mt-5 mb-5">
                    <HeadLine>Demographic and Contact</HeadLine>
                </section>
                <section>
                    <div id="text" className="container row">
                        <div className="col-flex mr-5 ml-3">
                            <img id="myimage" className={imageClasses} alt="self" src="self.png"></img>
                        </div>
                        <div className="col ml-1">
                            <div className="row mt-4">
                                <div className={fieldClasses}>Name</div>
                                <div className={valuesClasses}>Sanket Mathur</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Location</div>
                                <div className={valuesClasses}>Boston, MA</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Email</div>
                                <div className={valuesClasses}>sanket0024@gmail.com</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Mobile</div>
                                <div className={valuesClasses}>978-875-5854</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Date of Birth</div>
                                <div className={valuesClasses}>01/24/1992</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Available to work</div>
                                <div className={valuesClasses}>May 2019 (internship)</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="text icons">

                            </div>
                            <div className="row mt-4">
                                <div className={fieldClasses}>
                                    <a href="https://s3.amazonaws.com/resumesanket24/Sanket_Resume_NEU_SI.pdf" download target="_blank">
                                        <i className="fas fa-arrow-alt-circle-down"></i> Resume
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>
                                    <a href="https://github.com/sanket0024" target="_blank">
                                        <i className="fab fa-github-square"></i> Github
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>
                                    <a href="https://www.linkedin.com/in/sanketmathur92/" target="_blank">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                                    </a>
                                </div>
                            </div>
                            <div className="mb-5"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Demographic;