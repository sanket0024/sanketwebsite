import React, {Component} from 'react';
import './app.css';
import HeadLine from "./HeadLine";

const logoClasses = "mt-4 ml-3 mr-5 img-fluid rounded";
const fieldClasses = "col-3 font-weight-bold font-italic";
const valuesClasses = "ml-3 col-md-auto font-italic";

class WorkExp extends Component {
    render() {
        return (
            <div className="text-light">
                <section className="mt-5 mb-5">
                    <HeadLine>Work Experience</HeadLine>
                </section>
                <section>
                    <div id="text" className="container row">
                        <img id="companylogo" className={logoClasses} alt="appirio" src="Appirio.jpg"></img>
                        <div className="col-flex ml-3">
                            <div className="row mt-4">
                                <div className={fieldClasses}>Name</div>
                                <div className={valuesClasses}>Appirio - A Wipro Company</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Location</div>
                                <div className={valuesClasses}>Jaipur, India</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Role</div>
                                <div className={valuesClasses}>Salesforce and Workday Consultant</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}></div>
                                <div className={valuesClasses}>Solution Developer</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>From</div>
                                <div className={valuesClasses}>July 2014</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>To</div>
                                <div className={valuesClasses}>August 2017</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Technologies</div>
                                <div className={valuesClasses}>Salesforce, Workday, Javascript and Java</div>
                            </div>
                            <div className="mb-5"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WorkExp;