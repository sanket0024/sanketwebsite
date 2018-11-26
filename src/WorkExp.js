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
                    <div id="text" className="ml-1 row">
                        <div className="col-lg">
                            <img id="companylogo" className={logoClasses} alt="appirio" src="Appirio.jpg"></img>
                            <div className="row mt-4">
                                <div className={fieldClasses}>Name</div>
                                <div className={valuesClasses}>Appirio - A Wipro Company</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Location</div>
                                <div className={valuesClasses}>Jaipur, RJ, India</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Role</div>
                                <div className={valuesClasses}>Technical Consultant (July 2014 - March 2016)</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}></div>
                                <div className={valuesClasses}>Software Developer (April 2016 - August 2017)</div>
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
                        <div className="col-lg ml-3">
                            <img id="companylogo" className={logoClasses} alt="appirio" src="Kuebix.png"></img>
                            <div className="row mt-4">
                                <div className={fieldClasses}>Name</div>
                                <div className={valuesClasses}>Kuebix</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Location</div>
                                <div className={valuesClasses}>Boston, MA, USA</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Role</div>
                                <div className={valuesClasses}>Software Developer Intern (Full stack)</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}></div>
                                <div className={valuesClasses}><br/></div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>From</div>
                                <div className={valuesClasses}>June 2018</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>To</div>
                                <div className={valuesClasses}>(Present) December 2018</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}>Technologies</div>
                                <div className={valuesClasses}>Java, Maven, SQL, Angular and Salesforce</div>
                            </div>
                            <div className="row">
                                <div className={fieldClasses}></div>
                                <div className={valuesClasses}>(Apex classes, triggers, and workflows)</div>
                            </div>
                            <div className="mb-5"></div>
                        </div>
                        <div className="mb-5"></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WorkExp;
