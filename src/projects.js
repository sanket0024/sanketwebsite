import React, {Component} from 'react';
import './app.css';
import HeadLine from './HeadLine';

class Project extends Component {
    render() {
        return (
            <div>
                <section className="mt-5 mb-5">
                    <HeadLine>Projects</HeadLine>
                </section>
                <section className="table-responsive table-hover text-light">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Electronic Health Record System</td>
                                <td>Personal</td>
                                <td>Designed a web application using Angular 6, Spring Boot 2 and AWS RDS MySQL. It stores patients’ data which is accessible to the patients, doctors and insurance companies with securities associated with every user role.
                                    <br></br>
                                    <small>Under development</small>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Trainly.io</td>
                                <td>Academic</td>
                                <td>Designed a web application using Python, Flask and MySQL for faculty members to manage course data and grades of students and for students to enroll into the course and discuss questions on the portal
                                    <br></br>
                                    Github - <a href="https://github.com/sanket0024/databaseProject/tree/master/Trainly.io" target="_blank">Trainly.io</a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Plagiarism Detector</td>
                                <td>Academic</td>
                                <td>Developed a web application using Java Spring Boot framework and MongoDB as database that detects plagiarism from the submissions of students of different assignments.
                                    <br/>
                                    Github - <a href="https://github.com/sanket0024/plagiarism-detector.git" target="_blank">Plagiarism Detector</a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Sticky Notes</td>
                                <td>Personal</td>
                                <td>Designed a web application using React JS, HTML and CSS that enables a user to manage their sticky notes over a browser
                                    <br/>
                                    Github - <a href="https://github.com/sanket0024/stickies" target="_blank">Sticky Notes</a>
                                    <br/>
                                    Live - <a href="https://limitless-forest-11165.herokuapp.com/" target="_blank">Sticky Notes</a>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Map Application</td>
                                <td>Personal</td>
                                <td>Designed a web application using Python, Flask, Jinja2, HTML and CSS and Leaflet JS that will let user login into the system and explore the locations over the map
                                    <br/>
                                    Github - <a href="https://github.com/sanket0024/MapApp" target="_blank">MapApp</a>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Personal Website</td>
                                <td>Personal</td>
                                <td>Designed a website using React JS, HTML, CSS and BootStrap 4 detailed with my personal information
                                    <br/>
                                    Github - <a href="https://github.com/sanket0024/sanketwebsite" target="_blank">Sanket Mathur</a>
                                    <br/>
                                    Live - <a href="https://secret-forest-84244.herokuapp.com" target="_blank">this pointer</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}

export default Project;